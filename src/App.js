import React, { useState } from 'react';
import './App.css';
function App() {
  const [greeting, setGreeting] = useState('Hi');
  const [inputVal, setInputVal] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(inputVal);
    setInputVal('');
  };
  return (
    <div className="App">
      <h1>{greeting}</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          New Greeting:
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
