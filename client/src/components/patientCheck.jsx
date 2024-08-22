import React, { useState } from 'react';
import axios from 'axios';

const PatientCheck = () => {
    const [input, setInput] = useState('');
    const [patientDetails, setPatientDetails] = useState(null);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setPatientDetails(null);

        try {
            // Adjust the endpoint to match your API route
            const response = await axios.get(`http://localhost:5000/patient?search=${input}`);
            setPatientDetails(response.data);
        } catch (error) {
            setError('Error fetching patient details. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex gap-y-10 flex-col items-center justify-center">
            <h2 className='text-xl'>Enter your name or assigned Serial Number to retrieve your records</h2>
            <div className="p-4 max-w-md w-full">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="search"
                            value={input}
                            onChange={handleChange}
                            placeholder="Enter Assigned Serial Number or Name"
                            className="w-full border border-[#626262] rounded px-3 py-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Retrieve Records
                    </button>
                </form>
            </div>

            {error && (
                <div className="text-red-500 mt-4">{error}</div>
            )}

            {patientDetails && (
                <div className="mt-4 p-4 bg-gray-100 rounded shadow-md max-w-md w-full">
                    <h3 className="text-lg font-bold mb-2">Patient Details</h3>
                    <p><strong>Name:</strong> {patientDetails.name}</p>
                    <p><strong>Email:</strong> {patientDetails.email}</p>
                    <p><strong>Phone:</strong> {patientDetails.phone}</p>
                    <p><strong>Address:</strong> {patientDetails.address}</p>
                </div>
            )}
        </div>
    );
};

export default PatientCheck;
