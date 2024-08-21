const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dob: { type: String, required: true },
    address: {type: String, required: true},
    gender: { type: String, required: true },
    contact: { type: String, required: true },
    relation: { type: String, required: true },
    phone: {type: String, required: true},
    provider: { type: String, required: true },
    policy: { type: String, required: true },
    address: {type: String, required: true},
});

// Hash the password before saving the patient
patientSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
