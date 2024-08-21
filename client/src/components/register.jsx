import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { registerUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'patient',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { firstName, lastName, email, password, role } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await dispatch(registerUser(formData));
        navigate('/login');
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="firstName" value={firstName} onChange={onChange} placeholder="First Name" />
            <input type="text" name="lastName" value={lastName} onChange={onChange} placeholder="Last Name" />
            <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" />
            <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" />
            <select name="role" value={role} onChange={onChange}>
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="nurse">Nurse</option>
                <option value="patient">Patient</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
