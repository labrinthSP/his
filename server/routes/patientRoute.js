const express = require('express');
const router = express.Router();
const { PatientRegister, getPatient, getPatientById, updatePatient, searchPatients, deletePatient } = require('../controllers/patientController');

router.post('/register', PatientRegister);
router.get('/all-patients', getPatient);
router.get('/:id', getPatientById);
router.put('/:id', updatePatient);
router.get('/search', searchPatients);
router.delete('/:id', deletePatient);

module.exports = router;