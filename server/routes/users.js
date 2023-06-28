const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/UserModels');

// Route to create a new user
router.post('/users', [
  body('username').notEmpty().withMessage('Username is required'),
  body('department').notEmpty().withMessage('Department is required'),
], async (req, res) => {
  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Create a new user
    const { username, department } = req.body;
    const user = await User.create({ username, department });

    res.status(201).json(user);
  } catch (error) {
    console.error('Failed to save user details:', error);
    res.status(500).json({ message: 'Failed to save user details' });
  }
});

// Add more user-related routes here

module.exports = router;
