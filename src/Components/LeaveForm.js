import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const LeaveForm = () => {
  const [user, setUser] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission (send data to the backend API)
    // You can use Axios or Fetch to make the API request

    // Clear form fields
    setUser('');
    setLeaveType('');
    setDuration('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="user">
        <Form.Label>Username</Form.Label>
        <Form.Control
          as="select"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        >
          <option value="">Select user</option>
          {/* Fetch the list of users from the backend API and populate the dropdown options */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="leaveType">
        <Form.Label>Leave Type</Form.Label>
        <Form.Control
          as="select"
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
          required
        >
          <option value="">Select leave type</option>
          <option value="Sick">Sick</option>
          <option value="Casual">Casual</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="duration">
        <Form.Label>Duration</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter duration in days"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Apply
      </Button>
    </Form>
  );
};

export default LeaveForm;
