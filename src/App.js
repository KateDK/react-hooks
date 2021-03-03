import React, { useState } from 'react';
import './App.css';
function App() {
  const [contact, setContact] = useState({ firstName: '', lastName: '' });
  const [contactData, setContactData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <h1>Contact creator</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={contact.firstName}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={contact.lastName}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default App;
