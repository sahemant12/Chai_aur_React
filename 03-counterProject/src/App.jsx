import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 5;
  // function increment(){
  //   counter++;
  //   console.log(counter); 
  // }
  // function decrement(){
  //   counter--;
  //   console.log(counter);
  // } //these will not update the ui. For that we use hook: useState
  
  
  let [counter, setCounter] = useState(5);

  function increment(){
    if(counter<10){
      setCounter(counter+1);
    }
  }
  //interview Ques
  //   function increment(){
  //   if(counter<10){
  //     setCounter(counter+1);
  //     setCounter(counter+1);
  //     setCounter(counter+1);
  //     setCounter(counter+1);
  //     setCounter(counter+1);
  //     // only 1 time setCounter() will update because react send the setCounter() in batches. If you want to update the counter everytime then use preCounter to update setCounter() each time.
  //     setCounter(prevCounter => prevCounter+1);
  //     setCounter(prevCounter => prevCounter+1);
  //     setCounter(prevCounter => prevCounter+1);
  //     setCounter(prevCounter => prevCounter+1);
  //     setCounter(prevCounter => prevCounter+1);
  //   }
  // }
  
  function decrement(){
    if(counter>0){
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h2>Lets make counter by ownself: {counter}</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>+</button><p>{counter}</p>
      <hr />
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App
