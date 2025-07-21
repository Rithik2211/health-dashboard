import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AlertCard } from './AlertCard';

const mockAlert = {
  id: 1,
  icon: 'device',
  count: 6,
  title: 'Potential Indicators of Fatigue',
  description: 'Immediate intervention needed. Notify officer, hydrate & lie down',
  button: 'Show details',
};

describe('AlertCard', () => {
  it('renders alert card with correct props', () => {
    render(<AlertCard {...mockAlert} />);
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('Potential Indicators of Fatigue')).toBeInTheDocument();
    expect(screen.getByText('Immediate intervention needed. Notify officer, hydrate & lie down')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /show details/i })).toBeInTheDocument();
  });

  it('calls onButtonClick when button is clicked', () => {
    const handleClick = jest.fn();
    render(<AlertCard {...mockAlert} onButtonClick={handleClick} />);
    fireEvent.click(screen.getByRole('button', { name: /show details/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
}); 