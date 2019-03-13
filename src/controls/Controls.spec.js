// Test away!

import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Controls from './Controls';

describe('<Controls />', () => {
  it('should call the speak function passed as prop', () => {
    const toggleLocked = jest.fn();

    const { getByText } = render(<Controls toggleLocked={toggleLocked} />);

    fireEvent.click(getByText(/toggleLocked/i));
    expect(speak).toHaveBeenCalled();
  });
});
