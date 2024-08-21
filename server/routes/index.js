const express = require('express');
const router = express.Router();

// Import routes
// const authRoutes = require('./authRoutes');
const patientRoute = require('./patientRoute');
const staffRoute = require('./staffRoute');
// const doctorRoutes = require('./doctorRoutes');
// const nurseRoutes = require('./nurseRoutes');
// const adminRoutes = require('./adminRoutes');

// Use routes
// router.use('/auth', authRoutes);
router.use('/patient', patientRoute);
router.use('/staff', staffRoute);
// router.use('/doctors', doctorRoutes);
// router.use('/nurses', nurseRoutes);
// router.use('/admin', adminRoutes);

module.exports = router;
