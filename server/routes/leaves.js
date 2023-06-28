const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/UserModels');
const Leave = require('../models/LeaveModels');

// Route to create a new leave application
router.post('/leaves', [
  body('user').notEmpty().withMessage('User is required'),
  body('leaveType').notEmpty().withMessage('Leave type is required'),
  body('duration').notEmpty().withMessage('Duration is required'),
], async (req, res) => {
  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { user, leaveType, duration } = req.body;

    // Retrieve the user's information
    const userData = await User.findById(user);
    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the requested leave type and duration are within the available leave counts
    if (leaveType === 'Sick' && userData.sickLeaves < duration) {
      return res.status(400).json({ message: 'Insufficient sick leaves' });
    }

    if (leaveType === 'Casual' && userData.casualLeaves < duration) {
      return res.status(400).json({ message: 'Insufficient casual leaves' });
    }

    // Deduct the leave count from the user's record and save the updated information
    if (leaveType === 'Sick') {
      userData.sickLeaves -= duration;
    } else if (leaveType === 'Casual') {
      userData.casualLeaves -= duration;
    }
    await userData.save();

    // Save the leave application
    const leave = await Leave.create({ user, leaveType, duration });

    res.status(201).json(leave);
  } catch (error) {
    console.error('Failed to save leave application:', error);
    res.status(500).json({ message: 'Failed to save leave application' });
  }
});

// Add more leave-related routes here

module.exports = router;
