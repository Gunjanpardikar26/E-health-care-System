const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

require('./db/connection');

const Users = require('./Models/User');

app.post("/api/register",async(req,res)=>{
    try{
        const userData = req.body; // JSON object sent in the request body
        const user = new Users(userData); // Create a new User instance
        const savedUser = await user.save(); // Save the user to the database
        console.log('User saved:', savedUser);
        res.status(201).json(savedUser);
    }
    catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send({ error: 'Failed to create user' });
    }
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});