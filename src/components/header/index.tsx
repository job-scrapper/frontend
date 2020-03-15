import React from 'react';
import { Navbar, Alignment } from '@blueprintjs/core';

function Header(): JSX.Element {
  return (
    <Navbar data-testid="header">
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Scrapper</Navbar.Heading>
        <Navbar.Divider />
      </Navbar.Group>
    </Navbar>
  );
}

export default Header;
