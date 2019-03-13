// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should call the speak function passed as prop', () => {
    const speak = jest.fn();

    const { getByText } = render(<Speaker speak={speak} />);

    fireEvent.click(getByText(/speak/i));
    expect(speak).toHaveBeenCalled();
  });
});