'use client';
import { useState } from 'react';
import styles from './RegistrationForm.module.css';
import Timer from './../Timer';
import axios from 'axios';

const RegistrationForm = () => {
  // http://localhost:3001/api/data
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    designation: '',
    noOfEmployees: '',
    subscribe: false,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/data', formData);
      setSuccessMessage('Registration successful!');
      setErrorMessage('');  // Clear any previous error messages
      console.log(response.data);

      // Reset form fields
      setFormData({
        fullName: '',
        workEmail: '',
        phoneNumber: '',
        companyName: '',
        designation: '',
        noOfEmployees: '',
        subscribe: false,
      });
    } catch (error) {
      setErrorMessage('Registration failed. Please try again.');
      setSuccessMessage('');  // Clear any previous success messages
      console.error(error);
    }
  };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   console.log(formData);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.heading}>Dont miss this opportunity and the guidance you need to implement for a healthy cyberspace</h2>
        <p className={styles.paragraph}>Want the Guest Speaker to Answer some of your Questions?</p>
        <Timer endTime="2024-08-10T00:00:00" />
      </div>
      <form className={styles.right} onSubmit={handleSubmit}>
        <h2>Register Now!</h2>
        <div>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className={styles.input}
        />
        </div>
        <div>
        <input
          type="email"
          name="workEmail"
          placeholder="Work Email"
          value={formData.workEmail}
          onChange={handleChange}
          required
          className={styles.input}
        />
        </div>
        <div>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className={styles.input}
        />
        </div>
        <div>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          className={styles.input}
        />
        </div>
        <div>
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
          className={styles.input}
        />
        </div>
        <div>
        <input
          type="number"
          name="noOfEmployees"
          placeholder="No. of Employees"
          value={formData.noOfEmployees}
          onChange={handleChange}
          className={styles.input}
        />
        </div>
      
        <div>
        <label className={styles.subs}>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          Subscribe to our Weekly Newsletter to stay updated!
        </label>
        </div>
       
        <button className={styles.button} type="submit">Submit</button>
        {successMessage && <p className={styles.success}>{successMessage}</p>}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default RegistrationForm;
