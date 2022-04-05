import React from 'react';
import {useState} from 'react';

function App(){
  const[count, setCount] = useState(0);
  function add(){
    if (count === 10){
      return;
    } else {
      setCount(count + 1);
    }
  }
  function minus(){
    if (count < 1){
      return;
    } else{
      setCount(count-1)
    }
  }
  
  return(
    <>
   
      <h1>{count}</h1>
      <button onClick = {add}>+</button>
      <button onClick = {minus}>-</button>
    
    
    
    </>
  )
}
export default App;