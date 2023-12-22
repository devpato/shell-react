import { useState } from "react";

interface MyComponentProps {
  data: Merchant[]
}

export interface Merchant {
  id: number,
  name: string,
  amount: number
}

export const MyComponent = ({ data }: MyComponentProps) => {
  const [filter, setFilter] = useState("")
  const filteredData = data.filter(({name, amount})=> ((`${name} ${amount}`).toLowerCase().includes(filter)));
  const total = filteredData.reduce((sum, {amount})=> sum + amount, 0);


  return (
    <>
      <input placeholder="Filter Data" onChange={(e)=>setFilter(e.target.value.toLowerCase()) } />
      <ul>
        {
          filteredData.map(({id, name, amount})=>{
            return (
              <li key={id}>
                  <span>{name}</span>
                  <span> ${amount}</span>
              </li>
            )
          }
        )}
      </ul>
      <span>Total: ${total}</span>
    </>
  )
};
