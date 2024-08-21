const express = require('express');
const router = express.Router();
const { PatientRegister, getPatient, getPatientById, updatePatient, deletePatient } = require('../controllers/patientController');

router.post('/register', PatientRegister);
router.get('/all-patients', getPatient);
router.get('/:id', getPatientById);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

module.exports = router;