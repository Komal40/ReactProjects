import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {

  const [count, setbtn]=useState(0)
  

  function buttonInc(){
     setbtn(count+1) 
  }

  function buttonDec(){
    if(count>0){
      setbtn(count-1)
    }
  }

  return (
    <div className="App">
      <h1>Increment/Decrement</h1>
      <h2>{count}</h2>
      <button onClick={buttonInc}>Click To Increment Value</button>
      <br/>
      <button onClick={buttonDec}>Click To Decrement Value</button>
    </div>
    
  );
}

export default App;
