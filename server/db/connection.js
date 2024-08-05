const mongoose = require('mongoose');

// Corrected connection string
const url = "mongodb+srv://shalinchore:stxaviers@cluster0.uwydae9.mongodb.net/form-data?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
