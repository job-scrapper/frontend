import React, { useContext, useState } from 'react';
import { Navbar, Alignment, Button, Colors, Drawer, Position, Classes } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { Link } from 'react-router-dom';

import { Auth0Context } from '../../router/auth0Context';
import { Flexbox, Email, Profile } from './styled';

function Header(): JSX.Element {
  const { auth0Client, user, isAuthenticated } = useContext(Auth0Context);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function logout(): void {
    if (auth0Client) {
      // eslint-disable-next-line @typescript-eslint/camelcase
      auth0Client.logout({ returnTo: window.location.origin });
    }
  }

  function toggleDrawer(): void {
    setIsOpen(state => !state);
  }

  return (
    <Navbar data-testid="header" className="bp3-dark">
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>
          <Button icon={IconNames.MENU} onClick={toggleDrawer} />
          <Drawer
            isOpen={isOpen}
            onClose={toggleDrawer}
            position={Position.LEFT}
            size={200}
            title="Menu"
            canOutsideClickClose
          >
            <div className={Classes.DRAWER_BODY}>
              <ul className={Classes.LIST}>
                <li>
                  <Link to="/scrapper/list" onClick={toggleDrawer}>
                    스크래핑 목록
                  </Link>
                </li>
              </ul>
            </div>
          </Drawer>
          <Link to="/" style={{ color: Colors.WHITE, textDecoration: 'none', margin: '0 16px' }}>
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
