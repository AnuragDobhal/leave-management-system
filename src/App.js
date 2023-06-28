import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserForm from './Components/UserForm';
import LeaveForm from './Components/LeaveForm';
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserForm />} />
      <Route path="/leave" element={<LeaveForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
