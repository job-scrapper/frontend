import React, { useContext } from 'react';
import { Navbar, Alignment, Button, Colors } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import { Auth0Context } from '../../router/auth0Context';
import { Flexbox, Email, Profile } from './styled';

function Header(): JSX.Element {
  const { auth0Client, user, isAuthenticated } = useContext(Auth0Context);

  function logout(): void {
    if (auth0Client) {
      // eslint-disable-next-line @typescript-eslint/camelcase
      auth0Client.logout({ returnTo: window.location.origin });
    }
  }

  return (
    <Navbar data-testid="header" className="bp3-dark">
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>
          <Link to="/" style={{ color: Colors.WHITE, textDecoration: 'none' }}>
            Scrapper
          </Link>
        </Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        {isAuthenticated ? (
          <Flexbox>
            <Email>{user.name}</Email>
            <Profile src={user.picture} alt="profile" />
          </Flexbox>
        ) : null}
        <Navbar.Divider />
        <Button text="로그아웃" onClick={logout} />
      </Navbar.Group>
    </Navbar>
  );
}

export default Header;
