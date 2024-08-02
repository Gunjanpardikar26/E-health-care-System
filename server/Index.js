const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*', // Allow requests from any origin
  }));

require('./db/connection');

const Users = require('./Models/User');

app.post("/api/register",async(req,res)=>{
    try{
        const userData = req.body; // JSON object sent in the request body
        const user = new Users(userData); // Create a new User instance
        const savedUser = await user.save(); // Save the user to the database
        // console.log('User saved:', savedUser);
        res.status(201).json(savedUser);
        console.log(userData);
    }
    catch (error) {
        console.error('Error sa ving user:', error);
        res.status(500).send({ error: 'Failed to create user' });
    }
});
// Add this route in your index.js or a separate route file
app.post('/api/login', async (req, res) => {
  try {
    const { userId, password } = req.body;

    // Assuming userId corresponds to the email field in your database
    const user = await Users.findOne({ adh: userId });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verify password (for simplicity, plain text; for production, use hashing)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // If credentials are valid, you can return user details or a token
    return res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/api/user/:adh', async (req, res) => {
  try {
    const { adh } = req.params;
    const user = await Users.findOne({ adh });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ error: 'Internal server error' });
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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});