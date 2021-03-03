import React, { useState } from 'react';
import './App.css';
function App() {
  const [contact, setContact] = useState({ firstName: '', lastName: '' });
  const [contactData, setContactData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setContactData([
      ...contactData,
      `${contact.firstName} ${contact.lastName}`,
    ]);
    setContact({ firstName: '', lastName: '' });
    console.log(contactData);
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
