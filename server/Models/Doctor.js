const mongoose = require('mongoose')

// Doctor Schema
const doctorSchema = new mongoose.Schema({
    dname: { type: String, required: true },
    honame: { type: String, required: true },
    por: { type: String, required: true },
    ho_add: { type: String, required: true },
    uni_id: { type: String, required: true },
    pass: { type: String, required: true },
    per_phn: { type: Number, required: true },
});


module.exports = mongoose.model("Doctor",doctorSchema);