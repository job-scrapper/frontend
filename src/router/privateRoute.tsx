/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Auth0Context } from './auth0Context';

const PrivateRoute = ({
  component: Component,
  path,
  ...rest
}: {
  component: React.ComponentType<RouteProps>;
  path: string;
}): JSX.Element => {
  const { loading, isAuthenticated, auth0Client } = useContext(Auth0Context);

  useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    const fn = async (): Promise<void> => {
      if (auth0Client) {
        // eslint-disable-next-line @typescript-eslint/camelcase
        await auth0Client.loginWithRedirect({ redirect_uri: `${window.location.origin}${path}` });
      }
    };
    fn();
  }, [loading, isAuthenticated, auth0Client, path]);

  return (
    <Route
      path={path}
      render={props => (isAuthenticated === true ? <Component {...props} /> : null)}
      {...rest}
    />
  );
};

export default PrivateRoute;
