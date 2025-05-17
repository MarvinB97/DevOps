import React from 'react';
import { render, screen } from '@testing-library/react';
import AppTitle from '../src/components/AppTitle';

test('renderiza el título principal PokeDesk', () => {
  render(<AppTitle />);
  expect(screen.getByText(/PokeDesk/i)).toBeInTheDocument();
});
