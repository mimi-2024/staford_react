import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // Form is valid, proceed with submission
      setSubmitted(true);
      // You can replace the alert with an API call to submit the form
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div style={formContainerStyle}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.name && <span style={errorStyle}>{errors.name}</span>}
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.email && <span style={errorStyle}>{errors.email}</span>}
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={textareaStyle}
          />
          {errors.message && <span style={errorStyle}>{errors.message}</span>}
        </div>
        <button type="submit" style={buttonStyle}>Submit</button>
        {submitted && <p style={successStyle}>Thank you for contacting us!</p>}
      </form>
    </div>
  );
};

const formContainerStyle = {
  maxWidth: '500px',
  margin: '0 auto',
  padding: '20px',
  background: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputGroupStyle = {
  marginBottom: '20px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  minHeight: '100px',
};

const buttonStyle = {
  padding: '10px 15px',
  fontSize: '16px',
  background: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
  fontSize: '14px',
  marginTop: '5px',
};

const successStyle = {
  color: 'green',
  fontSize: '16px',
  marginTop: '20px',
};

export default ContactForm;
