const express = require('express');
const router = express.Router();
const { StaffRegister, StaffLogin, getStaff } = require('../controllers/staffController');

router.post('/register', StaffRegister);
router.post('/login', StaffLogin);
router.get('/all-staff', getStaff);
// router.get('/:id', staffController.getStaffById);
// router.put('/:id', staffController.updateStaff);
// router.delete('/:id', staffController.deleteStaff);

module.exports = router;