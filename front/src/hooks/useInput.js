import { useCallback, useState } from "react"

export const useInput = () => {
  const [value, setValue] = useState(null);
  const onChange = useCallback((e)=>{
    const inputTextValue = e.current.value;
    setValue(inputTextValue);
  }, []);

  return {
   onChange,
   value 
  }
}