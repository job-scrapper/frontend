import React from 'react';
import { Link } from 'react-router-dom';
import { Callout } from '@blueprintjs/core';

import Background from './styled';

function NotFound(): JSX.Element {
  return (
    <Background>
      <Callout title="404 Not found">
        <p>죄송합니다. 요청하신 페이지를 찾지 못했습니다.</p>
        <p>올바른 주소를 입력하셨는지 확인해주시기 바랍니다.</p>
        <Link to="/" className="bp3-button">
          홈으로 이동
        </Link>
      </Callout>
    </Background>
  );
}

export default NotFound;
