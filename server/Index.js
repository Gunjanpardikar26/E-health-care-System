const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*', // Allow requests from any origin
  }));

require('./db/connection');

const Users = require('./Models/User');
const doctor = require('./Models/Doctor');

app.post("/api/register", async (req, res) => {
  try {
    const userData = req.body;
    const user = new Users(userData);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { adh, password } = req.body;
    const user = await Users.findOne({ adh: adh });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/api/user/:adh', async (req, res) => {
  const { adh } = req.params;
  try {
    const user = await Users.findOne({ adh: adh });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get("/getUsers",(req,res) => {
    Users.find()
    .then(users => {
        console.log('Users fetched:', users); // Log users to verify data
        res.json(users);
      })
    .catch(err => {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Failed to fetch users' });
      });
});

app.post('/api/doctor/login', async (req, res) => {
  const { doctorId, password } = req.body;

  try {
    const doc = await Doctor.findOne({ doctorId, password });
    if (doc) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

