import React, { useState } from 'react';
import './App.css';
function App() {
  const [greeting, setGreeting] = useState('Hi');
  const [inputVal, setInputVal] = useState('');
  const handleSubmit = (e) => {
    setGreeting(inputVal);
    setInputVal('');
  };
  return (
    <div className="App">
      <h1>{greeting}</h1>
      <label>
        New Greeting:
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          setGreeting(inputVal);
          setInputVal('');
        }}
      >
        Save
      </button>
    </div>
  );
}

export default App;
