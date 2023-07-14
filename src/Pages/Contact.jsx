import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (email === '' || password === '') {
      setMsg('failed');
    } else {
      setMsg('success');
    }
  }

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label></label>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">subscribe</button>
        <h3>{msg}</h3>
      </form>
    </div>
  );
}

export default Contact;
