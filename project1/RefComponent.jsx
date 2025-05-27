import { useState, useRef } from "react";

import Cards from './TimerCards.jsx';

export default function RefComponent() {

  const [playerName, setPlayerName] = useState('');
  // const [submitted, setSubmitted] = useState(false);
  const input = useRef();

  // function handleChange(event){
  //   setSubmitted(false);
  //   setPlayerName(event.target.value);
  // }

  function handleSubmit(){
    // setSubmitted(true);
    setPlayerName(input.current.value);
    input.current.value = '';
  }
  return (
    <div className="ref-component">
      <h1>React Practice</h1>
      <label>Hello {playerName ? playerName : 'Unknown User'} </label>
      <p>
        <input 
          type="text" 
          placeholder="Enter your name"
          // value = {playerName}
          // onChange={handleChange}
          ref={input}
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
      <Cards/>
    </div>
  );
}
