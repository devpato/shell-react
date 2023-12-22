import { useState } from "react";
import { FilterInput } from "./FilterInput";

interface MyComponentProps {
  data: Merchant[];
}

export interface Merchant {
  id: number;
  name: string;
  amount: number;
}

export const MyComponent = ({ data }: MyComponentProps) => {
  const [filteredData, setFilteredData] = useState<Merchant[]>([]);
  const total = filteredData.reduce((sum, { amount }) => sum + amount, 0);

  return (
    <>
      <FilterInput data={data} onFilterChange={setFilteredData} />
      <ul>
        {filteredData.map(({ id, name, amount }) => {
          return (
            <li key={id}>
              <span>{name}</span>
              <span> ${amount}</span>
            </li>
          );
        })}
      </ul>
      <span>Total: ${total}</span>
    </>
  );
};
