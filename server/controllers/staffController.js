const Staff = require('../models/staff');
const { createSecretToken } = require("../util/secretToken");
const bcrypt = require("bcryptjs");

// Create a new staff member
// const createStaff = async (req, res) => {
//     try {
//         const staff = new Staff(req.body);
//         await staff.save();
//         res.status(201).send(staff);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// };

const StaffRegister = async (req, res, next) => {
    try {
      const { name, email, dob, address, gender, phone, title, dept, startDate, exp, spec, accName, accNum, password, } = req.body;
      const existingStaff = await Staff.findOne({ email });
      if (existingStaff) {
        return res.json({ message: "Staff already exists" });
      }
      const staff = await Staff.create({ name, email, dob, address, gender, phone, title, dept, startDate, exp, spec, accName, accNum, password, });
      const token = createSecretToken(staff._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res
        .status(201)
        .json({ message: "Staff signed in successfully", success: true, staff });
      next();
    } catch (error) {
      console.error(error);
    }
  };

  const StaffLogin = async (req, res, next) => {
    try {
      const { name, password } = req.body;
      if(!name || !password ){
        return res.json({message:'All fields are required'})
      }
      const staff = await Staff.findOne({ name });
      if(!staff){
        return res.json({message:'Incorrect access name or access code' }) 
      }
      const auth = await bcrypt.compare(password, staff.password);
      if (!auth) {
          return res.json({ message: 'Incorrect access name or access code' });
      }
       const token = createSecretToken(staff._id);
       res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
       });
       res.status(201).json({ message: "Staff logged in successfully", success: true });
       next()
    } catch (error) {
      console.error(error);
    }
  }

// Get all staff members
const getStaff = async (req, res) => {
    try {
        const staff = await Staff.find({});
        res.status(200).send(staff);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a staff member by ID
const getStaffById = async (req, res) => {
    try {
        const staff = await Staff.findById(req.params.id);
        if (!staff) {
            return res.status(404).send();
        }
        res.status(200).send(staff);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a staff member
const updateStaff = async (req, res) => {
    try {
        const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!staff) {
            return res.status(404).send();
        }
        res.status(200).send(staff);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a staff member
const deleteStaff = async (req, res) => {
    try {
        const staff = await Staff.findByIdAndDelete(req.params.id);
        if (!staff) {
            return res.status(404).send();
        }
        res.status(200).send(staff);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    StaffRegister,
    StaffLogin,
    getStaff,
    getStaffById,
    updateStaff,
    deleteStaff,
};
