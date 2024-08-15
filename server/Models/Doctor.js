const mongoose = require('mongoose')

// Doctor Schema
const doctorSchema = new mongoose.Schema({
  doctorId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


module.exports = mongoose.model("Doctor",doctorSchema);