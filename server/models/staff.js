const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const staffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dob: { type: String, required: true },
    address: {type: String, required: true},
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    title: { type: String, required: true },
    dept: {type: String, required: true},
    startDate: { type: String, required: true },
    exp: { type: String, required: true },
    spec: {type: String, required: true},
    accName: { type: String, required: true },
    accNum: {type: String, required: true},
    password: { type: String, required: true },
    // role: { type: String, enum: ['admin', 'doctor', 'nurse', 'patient'], default: 'patient' }
});

// Hash the password before saving the staff
staffSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;
