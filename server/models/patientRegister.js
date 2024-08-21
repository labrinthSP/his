const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const patientSchema = new mongoose.Schema({
    name: { type: String,  },
    email: { type: String, unique: true },
    dob: { type: String  },
    address: {type: String },
    gender: { type: String  },
    contact: { type: String  },
    relation: { type: String  },
    phone: {type: String },
    provider: { type: String  },
    policy: { type: String  },
    address: {type: String },
    doctorNotes: {type: String}
});

// Hash the password before saving the patient
patientSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
