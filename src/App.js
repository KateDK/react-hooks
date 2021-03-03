import React, { useState } from 'react';
import './App.css';
function App() {
  const [contact, setContact] = useState({ firstName: '', lastName: '' });
  const [contactData, setContactData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setContactData((prevContacts) => [
      ...prevContacts,
      `${contact.firstName} ${contact.lastName}`,
    ]);
    setContact({ firstName: '', lastName: '' });
    console.log(contactData);
  };

  return (
    <div className="App">
      <h1>Contact creator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={contact.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={contact.lastName}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default App;
