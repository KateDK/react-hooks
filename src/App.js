import React, { useState } from 'react';
import './App.css';
function App() {
  const [contact, setContact] = useState({ firstName: '', lastName: '' });
  const [contactData, setContactData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {};

  return (
    <div className="App">
      <h1>Contact creator</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          First Name:
          <input
            type="text"
            value={contact.firstName}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={contact.lastName}
            onChange={(e) => console.log(e.target.value)}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default App;
