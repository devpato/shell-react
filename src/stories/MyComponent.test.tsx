import { render, screen, fireEvent } from '@testing-library/react';
import { MyComponent, Merchant } from './MyComponent';
import '@testing-library/jest-dom'

describe('My component', () => {
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

  it('Render component with initial data', () => {
    render(<MyComponent data={mockData}/>);

    const inputElement = screen.getByPlaceholderText("Filter Data");
    const listElement = screen.getByRole("list");
    expect(inputElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();

    mockData.forEach(({name})=>{
      const listElement = screen.getByText(name);
      expect(listElement).toBeInTheDocument();
    })
  });

  it('filter data based on input', () => {
    render(<MyComponent data={mockData}/>);

    const inputElement = screen.getByPlaceholderText("Filter Data");
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, {target:{ value: "Pato"}});
    expect(screen.getByText('Pato')).toBeInTheDocument();
    expect(screen.queryByText('Jose')).not.toBeInTheDocument();

    const totalElement = screen.getByText('Total: $200');
    expect(totalElement).toBeInTheDocument();
  });

});
