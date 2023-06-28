import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Dashboard = () => {
  // Fetch the user's total number of leaves left and their applied leaves from the backend API

  const totalLeavesLeft = 4; // Replace with the actual data from the API
  const appliedLeaves = []; // Replace with the actual data from the API

  return (
    <Card>
      <Card.Header>Dashboard</Card.Header>
      <Card.Body>
        <Card.Text>Total Leaves Left: {totalLeavesLeft}</Card.Text>
        <Card.Text>Applied Leaves:</Card.Text>
        <ListGroup>
          {appliedLeaves.map((leave) => (
            <ListGroup.Item key={leave._id}>
              {leave.leaveType} Leave for {leave.duration} days
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Dashboard;
