import React, { useState } from 'react';
import './App.css';
function App() {
  const [greeting] = useState('Hi');
  console.log(greeting);
  return <div className="App">{greeting}</div>;
  return (
    <div className="App">
      <h1>{greeting}</h1>
      <label>
        New Greeting:
        <input
          type="text"
          value={inputVal}
        />
      </label>
      <button
      >
        Save
      </button>
    </div>
  );
}

export default App;
