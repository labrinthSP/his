import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const DoctorLogin = () => {
    const [formData, setFormData] = useState({ name: '', password: '' });
    const { name, password } = formData;
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!password.startsWith('MD')) {
                setError('You do not have clearance to get access');
                return;
            }
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/staff/login', formData);
            console.log(response.data);

            if (response.data.success) {
                navigate('/doctorDash');
            } else {
                setError(response.data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error logging in staff:', error);
        }
    };


    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="border border-[#6d6d6d] p-8 rounded shadow-md max-w-md w-full">
                    <h2 className="text-2xl mb-4 font-bold text-center">Doctors Station</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Access ID
                            </label>
                            <input type="text" name="name" value={name} onChange={onChange} placeholder="Enter ID" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-1 font-semibold">
                                Access Code
                            </label>
                            <input type="password" name="password" value={password} onChange={onChange} placeholder="Enter Code" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>
                        {error && (
                            <div className="text-red-500 text-center mb-4">
                                {error}
                            </div>
                        )}
                        <div className="text-center flex flex-col">
                            <button
                                type="submit"
                                className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-900 transition duration-300"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default DoctorLogin