const express = require('express');
const router = express.Router();
const { PatientRegister, getPatient } = require('../controllers/patientController');

router.post('/register', PatientRegister);
router.get('/all-patients', getPatient);
// router.get('/:id', patientController.getPatientById);
// router.put('/:id', patientController.updatePatient);
// router.delete('/:id', patientController.deletePatient);

module.exports = router;