import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const PatientRegister = () => {
    const location = useLocation();
    const isDoctorRoute = location.pathname === '/doctorDash';

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        number: '',
        email: '',
        dob: '',
        gender: '',
        contact: '',
        relation: '',
        phone: '',
        provider: '',
        policy: '',
        medicalHistory: '' // Add this field to capture medical history
    });

    const { name, address, number, email, dob, gender, contact, relation, phone, provider, policy, medicalHistory } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/patient/register', formData);
            console.log('Patient registered successfully:', response.data);
        } catch (error) {
            console.error('Error registering patient:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="border border-[#6d6d6d] p-8 rounded shadow-md max-w-2xl w-full">
                <h2 className="text-2xl mb-4 font-bold text-center">Patient Register Form</h2>
                <form onSubmit={onSubmit}>
                    <div className='grid grid-cols-2 gap-x-10'>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Patient Name
                            </label>
                            <input type="text" name="name" value={name} onChange={onChange} placeholder="Enter Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dob" className="block mb-1 font-semibold">
                                Patient DOB
                            </label>
                            <input type="date" name="dob" value={dob} onChange={onChange} placeholder="Enter DOB" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="gender" className="block mb-1 font-semibold">
                                Patient Gender
                            </label>
                            <input type="text" name="gender" value={gender} onChange={onChange} placeholder="Enter Gender" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="number" className="block mb-1 font-semibold">
                                Patient Phone Number
                            </label>
                            <input type="text" name="number" value={number} onChange={onChange} placeholder="Enter Phone Number" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-1 font-semibold">
                                Patient Email Address
                            </label>
                            <input type="email" name="email" value={email} onChange={onChange} placeholder="Enter Email Address" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address" className="block mb-1 font-semibold">
                                Patient Address
                            </label>
                            <input type="text" name="address" value={address} onChange={onChange} placeholder="Enter Address" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="contact" className="block mb-1 font-semibold">
                                Emergency Contact Name
                            </label>
                            <input type="text" name="contact" value={contact} onChange={onChange} placeholder="Enter Emergency Contact's Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="relation" className="block mb-1 font-semibold">
                                Relationship to Emergency Contact
                            </label>
                            <input type="text" name="relation" value={relation} onChange={onChange} placeholder="Enter Relationship" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block mb-1 font-semibold">
                                Emergency Contact Number
                            </label>
                            <input type="text" name="phone" value={phone} onChange={onChange} placeholder="Enter Emergency Contact's Phone Number" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="provider" className="block mb-1 font-semibold">
                                Insurance Provider
                            </label>
                            <input type="text" name="provider" value={provider} onChange={onChange} placeholder="Enter Insurance Provider" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="policy" className="block mb-1 font-semibold">
                                Insurance Policy Number
                            </label>
                            <input type="text" name="policy" value={policy} onChange={onChange} placeholder="Enter Policy Number" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>

                        {/* Conditionally render Medical History field */}
                        {isDoctorRoute && (
                            <div className="mb-4 col-span-2">
                                <label htmlFor="medicalHistory" className="block mb-1 font-semibold">
                                    Medical History
                                </label>
                                <textarea
                                    name="medicalHistory"
                                    value={medicalHistory}
                                    onChange={onChange}
                                    placeholder="Enter Medical History"
                                    className="w-full border border-[#626262] rounded px-3 py-2"
                                    rows="4"
                                ></textarea>
                            </div>
                        )}
                    </div>

                    <div className="text-center flex flex-col">
                        <button
                            type="submit"
                            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-900 transition duration-300"
                        >
                            Register Patient
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PatientRegister;
