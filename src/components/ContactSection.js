import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfd6knqVyzNg5IZMQPaTT7dwtsWwivE1I4PTvVop2-8AE0Ocw/formResponse'; // Replace YOUR_FORM_ID with actual ID
    const formDataToSubmit = new FormData();

    // Replace 'entry.XXXXXX' with your Google Form field entry IDs
    formDataToSubmit.append('entry.45246864', formData.name); // Replace 'entry.XXXXXX1' with the actual entry ID for 'Name'
    formDataToSubmit.append('entry.1611682398', formData.email); // Replace 'entry.XXXXXX2' with the actual entry ID for 'Email'
    formDataToSubmit.append('entry.1150121425', formData.message); // Replace 'entry.XXXXXX3' with the actual entry ID for 'Message'

    fetch(googleFormUrl, {
      method: 'POST',
      body: formDataToSubmit,
      mode: 'no-cors'
    })
    .then(() => {
      alert('Form submitted successfully');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
    });
  };

  return (
    <section id="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Whether you have a question about our features or anything else, our team is ready to answer all your questions.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>

          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
