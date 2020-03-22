import React from 'react';

import { Spinner, Intent } from '@blueprintjs/core';
import Background from './styled';

function Loading(): JSX.Element {
  return (
    <Background>
      <Spinner intent={Intent.PRIMARY} />
    </Background>
  );
}

export default Loading;
