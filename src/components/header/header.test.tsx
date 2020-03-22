import React from 'react';
import { render, cleanup, RenderResult } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<Header />);
  });

  afterEach(cleanup);

  test('컴포넌트가 렌더링되는가', () => {
    const header = wrapper.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
});
