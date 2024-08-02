const mongoose = require('mongoose')

const LoginSchema = new mongoose.Schema({
    /*name:String,
    // mname:String,
    // lname:String,
    email:String,
    password:String*/

    fname: { type: String, required: true },
    lname: { type: String, required: true },
    mname: { type: String },
    dob: { type: Date, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Sixer', 'Querr', 'God Knows'], required: true },
    per_phn: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    curr_add: { type: String, required: true },
    adh: { type: String, required: true, unique: true },
    emer_phn1: { type: Number, required: true },
    emer_phn2: { type: Number },
});

module.exports = mongoose.model("users",LoginSchema);
