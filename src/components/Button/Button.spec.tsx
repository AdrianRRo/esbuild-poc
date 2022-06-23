import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button component', () => {

  test('Button should render correctly and have correct Label', () => {
    render(
      <Button label='TEST'/>
    );
    const button: HTMLElement = screen.getByText('TEST');
    expect(button).toBeInTheDocument();
  });
});