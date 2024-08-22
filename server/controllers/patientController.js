const Patient = require('../models/patientRegister');
const { createSecretToken } = require("../util/secretToken");
const bcrypt = require("bcryptjs");

// Create a new patient
const PatientRegister = async (req, res, next) => {
    try {
      const { name, address, number, email, dob, gender, contact, relation, phone, provider, policy} = req.body;
      const existingStaff = await Patient.findOne({ email });
      if (existingStaff) {
        return res.json({ message: "Patient already exists" });
      }
      const patient = await Patient.create({ name, address, number, email, dob, gender, contact, relation, phone, provider, policy });
      const token = createSecretToken(patient._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res
        .status(201)
        .json({ message: "Patient signed in successfully", success: true, patient });
      next();
    } catch (error) {
      console.error(error);
    }
  };

// Get all patients
const getPatient = async (req, res) => {
    try {
        const patients = await Patient.find({});
        res.status(200).send(patients);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a patient by ID
const getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).send();
        }
        res.status(200).send(patient);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a patient
const updatePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!patient) {
            return res.status(404).send();
        }
        res.status(200).send(patient);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Search patients by name or serial number
const searchPatients = async (req, res) => {
    try {
        const searchQuery = req.query.search; // Get the search query from the URL
        const patients = await Patient.find({
            $or: [
                { name: new RegExp(searchQuery, 'i') }, // Case-insensitive search for name
                { serialNumber: searchQuery } // Exact match for serial number
            ]
        });
        if (patients.length === 0) {
            return res.status(404).json({ message: 'No patients found' });
        }
        res.status(200).send(patients);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Delete a patient
const deletePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient) {
            return res.status(404).send();
        }
        res.status(200).send(patient);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    PatientRegister,
    getPatient,
    getPatientById,
    updatePatient,
    searchPatients,
    deletePatient,
};