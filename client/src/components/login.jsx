import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token, user } = useSelector((state) => state.auth);

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await dispatch(loginUser(formData));
        if (user) {
            navigate(`/${user}-dashboard`);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" />
            <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
