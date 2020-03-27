/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect, useState } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';

import history from './history';

function onRedirectCallback(appState?: { targetUrl: string }): void {
  const path = appState && appState.targetUrl ? appState.targetUrl : window.location.pathname;
  alert(path);
  history.push(path);
}

export const Auth0Context = React.createContext<{
  isAuthenticated: boolean;
  user: { name: string; picture: string };
  loading: boolean;
  auth0Client: Auth0Client | undefined;
}>({
  isAuthenticated: false,
  user: { name: '', picture: '' },
  loading: true,
  auth0Client: undefined,
});

export const Auth0Provider: React.FC = ({ children }: { children?: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState({ name: '', picture: '' });
  const [auth0Client, setAuth0] = useState<Auth0Client | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function initAuth0(): Promise<void> {
      const initOptions = {
        domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID || '',
        redirect_url: window.location.origin,
      };

      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (window.location.search.includes('code=') && window.location.search.includes('state=')) {
        const { appState }: RedirectLoginResult = await auth0FromHook.handleRedirectCallback();
        alert(JSON.stringify(appState));
        onRedirectCallback(appState);
      }

      const isAuth = await auth0FromHook.isAuthenticated();
      setIsAuthenticated(isAuth);

      if (isAuth) {
        const userItem = await auth0FromHook.getUser();
        setUser(userItem);
      }

      setLoading(false);
    }

    initAuth0();
  }, []);

  const initialValue = {
    isAuthenticated,
    user,
    loading,
    auth0Client,
  };
  return <Auth0Context.Provider value={initialValue}>{children}</Auth0Context.Provider>;
};
