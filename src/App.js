import React, { useState } from 'react';
import './App.css';
function App() {
  const greeting = useState('Hi');
  return <div className="App">{greeting}</div>;
}

export default App;
