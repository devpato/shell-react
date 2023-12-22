import { render, screen, fireEvent } from '@testing-library/react';
import { Filter, Merchant } from './Filter';
import '@testing-library/jest-dom'

describe('Filter component', () => {
  const mockData: Merchant[] = [
    {
        id: 1,
        name: "Pato",
        amount: 200
    },
    {
        id: 2,
        name: "Jose",
        amount: -500
    },
    {
        id: 3,
        name: "Lucas",
        amount: 300
    },
    {
        id: 4,
        name: "Patricio",
        amount: 700
    }
]

  it('renders the component with initial data', () => {
    render(<Filter data={mockData} />);
    
    // Check if the input and list elements are present
    const inputElement = screen.getByPlaceholderText('Filter Data');
    const listElement = screen.getByRole('list');
    
    expect(inputElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();

    // Check if the initial data is rendered
    mockData.forEach(({ name }) => {
      const listItem = screen.getByText(name);
      expect(listItem).toBeInTheDocument();
    });

    // Check if the total is displayed correctly
    const totalElement = screen.getByText('Total: 700');
    expect(totalElement).toBeInTheDocument();
    expect(screen.getByText('Total: 700')).toBeInTheDocument(); // Assuming the initial total is 600
  });

  it('filters data based on input', () => {
    render(<Filter data={mockData} />);

    const inputElement = screen.getByPlaceholderText('Filter Data');

    // Type 'Merchant 1' in the input
    fireEvent.change(inputElement, { target: { value: 'Pato' } });

    // Check if only 'Merchant 1' is displayed
    expect(screen.getByText('Pato')).toBeInTheDocument();
    expect(screen.queryByText('Jose')).not.toBeInTheDocument();
    expect(screen.queryByText('Patricio')).not.toBeInTheDocument();

    // Check if the total is updated based on the filtered data
    expect(screen.getByText('Total: 200')).toBeInTheDocument(); // Assuming 'Merchant 1' has an amount of 100
  });
});
