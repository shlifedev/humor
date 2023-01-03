import { useState } from 'react';
export const useToggle = () => {
 
  const [value, setValue] = useState(false);
  const handleToggle = () =>{
    setValue(current => {
      return !current;
    });
  }


  return {
    value,
    handleToggle
  }
}