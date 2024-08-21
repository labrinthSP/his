const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body;

    try {
        const user = new User({ firstName, lastName, email, password, role });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error registering user', error });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.json({ token, role: user.role });
    } catch (error) {
        res.status(400).json({ message: 'Error logging in', error });
    }
};
