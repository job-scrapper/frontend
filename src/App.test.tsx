import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByTestId } = render(
    <StaticRouter>
      <App />
    </StaticRouter>,
  );
  const linkElement = getByTestId('app');
  expect(linkElement).toBeInTheDocument();
});
