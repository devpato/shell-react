import { useState } from 'react';

interface FilterProps {
  data: Merchant[]
}

export interface Merchant {
    name: string,
    amount: number,
    id: number
}

export const Filter = ({
  data,
}: FilterProps) => {
    console.log(data)
    const [filter, setFilter] = useState("")
    const dataFilter = data.filter(item => item.name.toLowerCase().includes(filter));
    const total = dataFilter.reduce((sum, {amount})=> sum + amount, 0);
  
  return (
    <>
        <input type='text' placeholder='Filter Data' 
        onChange={(e)=> setFilter(e.target.value.toLowerCase())}/>
        <ul>
            {dataFilter.map(({name, id, amount},)=> {
                return (
                    <li key={id}>
                        <span>{name}</span>
                        <span style={{color: `${amount > 0 ? 'green' : 'red' }`}}> {amount}</span>
                    </li>
                )
            })}
        </ul>
        <p>Total: {total}</p>
    </>
  );
};
