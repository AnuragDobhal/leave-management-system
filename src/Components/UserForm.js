import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', {
        username,
        department,
      });
      console.log(response.data); // Optional: Log the response data for debugging
      // Reset the form or show a success message to the user
    } catch (error) {
      console.error('Failed to save user details:', error.message);
      // Show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Name:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Department:
        <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
