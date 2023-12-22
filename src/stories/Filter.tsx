import { useState, useEffect, useCallback } from 'react';

interface FilterProps {
  data: Merchant[];
}

export interface Merchant {
  name: string;
  amount: number;
  id: number;
}

export const Filter = ({ data }: FilterProps) => {
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState<Merchant[]>(data);

  const filterData = useCallback(
    (data: Merchant[], filter: string): Merchant[] => (data.filter((item) => item.name.toLowerCase().includes(filter))),
    []
  );

  useEffect(() => {  
    setFilteredData(filterData(data, filter));
  }, [data, filter, filterData, filteredData]);


  const total = (data: Merchant[]): number => data.reduce((sum, { amount }) => sum + amount, 0);

  return (
    <>
      <input
        type="text"
        placeholder="Filter Data"
        onChange={(e) => setFilter(e.target.value.toLowerCase())}
      />
      <ul>
        {filterData(data, filter).map(({ name, id, amount }) => {
          return (
            <li key={id}>
              <span>{name}</span>
              <span style={{ color: `${amount > 0 ? 'green' : 'red'}` }}> {amount}</span>
            </li>
          );
        })}
      </ul>
      <p>Total: {total(filteredData)}</p>
    </>
  );
};
