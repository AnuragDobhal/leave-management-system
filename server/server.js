const express = require('express');
const mongoose = require('mongoose');

// Create Express app
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://dobhalannu246:anuragdobhal00@cluster0.xpibiyv.mongodb.net/?retryWrites=true&w=majority/leave_management_project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error.message);
    process.exit(1);
  });

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  casualLeaves: {
    type: Number,
    default: 2,
  },
  sickLeaves: {
    type: Number,
    default: 2,
  },
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Middleware to parse JSON request body
app.use(express.json());

// API endpoint to save user details
app.post('/api/users', async (req, res) => {
  try {
    const { username, department } = req.body;
    const user = new User({ username, department });
    await user.save();
    res.status(201).json({ message: 'User data saved successfully' });
  } catch (error) {
    console.error('Failed to save user details:', error.message);
    res.status(500).json({ message: 'Failed to save user details' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
