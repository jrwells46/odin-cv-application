import { useState } from 'react';
import Section from './Section.jsx';
import Display from './Display.jsx';

function GeneralInfo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isEditMode, setIsEditMode] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsEditMode(!isEditMode);
  };

  return isEditMode ? (
    <Section onSubmit={onSubmit}>
      <h2>General Info</h2>
      <div>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          minLength="10"
          maxLength="10"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
    </Section>
  ) : (
    <Display onClick={() => setIsEditMode(!isEditMode)}>
      <h1>{`${firstName} ${lastName}`}</h1>
      <p>{`(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`} • {email}</p>
    </Display>
  )
}

export default GeneralInfo;
