import React, { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

function useDebounce(value, timeout){
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeoutNumber);
    }
  
  },[value]);
  return debouncedValue;
}

function App(){
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(value, 500); 




  return (
    <>
    Debounced value is {debouncedValue}
    <input type="text" onChange={e => setInputValue(e.target.value)} 
    />
     </>
  )
};

export default SearchBar;