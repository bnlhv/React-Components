import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import HelloClass from './Components/HelloClass'
import HelloFunction from './Components/HelloFunction'
import CountdownClass from './Components/CountdownClass'
import CountdownFunction from './Components/CountdownFunction'

function App() {
  
  const [isClassCountdown, setIsClassCountdown] = useState(true)
  const [isFunctionCountdown, setIsFunctionCountdown] = useState(true)
  

  const removeClassCountdown = () => {
    setIsClassCountdown(false);
  }

  const removeFunctionCountdown = () => {
    setIsFunctionCountdown(false);
  }

  return (
    <div className="App">
      <div style={ {float: 'right'} }>
        <h1>function!</h1>
        <HelloFunction message={'this is a function component'}/>
        {isFunctionCountdown && <CountdownFunction num={5} cb={removeFunctionCountdown}/>}
      </div>    
      <div style={ {float: 'left'} }>
        <h1>class!</h1>
        <HelloClass msg={'this is a class component'}/>

        {isClassCountdown &&
             <CountdownClass num={5} cb={removeClassCountdown}/>}
      </div>
    </div>
  );
}

export default App;
