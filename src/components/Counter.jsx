import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
if(count%2===0){
  console.log('even',count)
}else{
  console.log('odd',count)
}
  return (
    <>
      <h1>Counter</h1>
      <h2 className={count%2==0 ? 'green' : 'red'}>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
         if(count>0){
          setCount(count - 1);
         }
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(count *2);
        }}
      >
        double
      </button>
    </>
  );
};

export default Counter;
