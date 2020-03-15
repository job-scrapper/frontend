import React, { useContext } from 'react';
import { Navbar, Alignment, Button } from '@blueprintjs/core';

import { Auth0Context } from '../../router/auth0Context';

function Header(): JSX.Element {
  const { auth0Client } = useContext(Auth0Context);

  function login(): void {
    if (auth0Client) {
      // eslint-disable-next-line @typescript-eslint/camelcase
      auth0Client.loginWithRedirect({ redirect_uri: window.location.origin });
    }
  }

  function logout(): void {
    if (auth0Client) {
      // eslint-disable-next-line @typescript-eslint/camelcase
      auth0Client.logout({ returnTo: window.location.origin });
    }
  }

  return (
    <Navbar data-testid="header" className="bp3-dark">
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Scrapper</Navbar.Heading>
        <Navbar.Divider />
        <Button text="로그인" onClick={login} />
        <Button text="로그아웃" onClick={logout} />
      </Navbar.Group>
    </Navbar>
  );
}

export default Header;
