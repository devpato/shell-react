import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface FilterInputProps {
  data: Merchant[]
  onFilterChange: Dispatch<SetStateAction<Merchant[]>>;
}

export interface Merchant {
  id: number,
  name: string,
  amount: number
}

export const FilterInput = ({ data, onFilterChange }: FilterInputProps) => {
    const [, setFilterValue] = useState('');
    useEffect(()=> onFilterChange(data), [data, onFilterChange])
 
  const onHandleFilter = (data: Merchant[], filter: string) => {
    const filteredData = data.filter(({name, amount})=> (`${name} ${amount}`.toLowerCase().includes(filter)));
    setFilterValue(filter)
    onFilterChange(filteredData)
  }

  return (
    <>
      <input placeholder="Filter Data" onChange={(e)=> onHandleFilter(data, e.target.value.toLowerCase())} />
    </>
  )
};
