import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    const fData = data.filter((item) => item.name.toLowerCase().includes(filter));
    setFilteredData(fData);
  }, [data, filter]);

  const total = (data: Merchant[]): number => data.reduce((sum, { amount }) => sum + amount, 0);

  return (
    <>
      <input
        type="text"
        placeholder="Filter Data"
        onChange={(e) => setFilter(e.target.value.toLowerCase())}
      />
      <ul>
        {filteredData.map(({ name, id, amount }) => {
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
