import React from 'react'
import { useState } from "react";
import './Counter.css'
function Counter() {

   const [counter, setCounter] = useState(0);

   const increase = () => {
     setCounter(counter + 1);
   };
 
   const decrease = () => {
     if (counter === 0) {
       alert("Counter cannot go below zero!");
       return;
     }
     setCounter(counter - 1);
   };
 
   const reset = () => {
     setCounter(0);
   };

   return (
      <div>
         <center>
            
            <strong className='counter'> {counter} </strong><br />
            <div className='buttons'>
            <button className='b1' onClick={() => increase()}>+</button>
            <button className='b2' onClick={() => decrease()}>-</button> <br />
            <button className='reset' onClick={() => reset()}>Reset</button>
            </div>
         </center>
      </div>
   )
}

export default Counter;

