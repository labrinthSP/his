const express = require('express');
const router = express.Router();
const { StaffRegister, StaffLogin, getStaff, getStaffById, updateStaff, deleteStaff } = require('../controllers/staffController');

router.post('/register', StaffRegister);
router.post('/login', StaffLogin);
router.get('/all-staff', getStaff);
router.get('/:id', getStaffById);
router.put('/:id', updateStaff);
router.delete('/:id', deleteStaff);

module.exports = router;