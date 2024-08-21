const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roleAuth = require('../middleware/role');

// Admin Dashboard
router.get('/admin-dashboard', [auth, roleAuth(['admin'])], (req, res) => {
  res.send('Admin Dashboard');
});

// Doctor Dashboard
router.get('/doctor-dashboard', [auth, roleAuth(['doctor'])], (req, res) => {
  res.send('Doctor Dashboard');
});

// Nurse Dashboard
router.get('/nurse-dashboard', [auth, roleAuth(['nurse'])], (req, res) => {
  res.send('Nurse Dashboard');
});

// Patient Dashboard
router.get('/patient-dashboard', [auth, roleAuth(['patient'])], (req, res) => {
  res.send('Patient Dashboard');
});

module.exports = router;