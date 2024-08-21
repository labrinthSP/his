import {useState} from 'react'
import axios from 'axios'

const PatientRegister = () => {
    const [formData, setFormData] = useState({ name: '', address: '', number: '', email: '', dob: "", gender: "", contact: "", relation: "", phone: "", provider: "", policy: "", });
    const { name, address, number, email, dob, gender, contact, relation, phone, provider, policy } = formData;

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
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="border border-[#6d6d6d] p-8 rounded shadow-md max-w-2xl w-full">
                    <h2 className="text-2xl mb-4 font-bold text-center">Patient Register Form</h2>
                    <form onSubmit={onSubmit}>
                        <div className='grid grid-cols-2 gap-x-10'>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Patient Name
                            </label>
                            <input type="name" name="name" value={name} onChange={onChange} placeholder="Enter Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Patient DOB
                            </label>
                            <input type="date" name="dob" value={dob} onChange={onChange} placeholder="Enter DOB" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Patient Gender
                            </label>
                            <input type="gender" name="gender" value={gender} onChange={onChange} placeholder="Enter Gender" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Patient Phone Number
                            </label>
                            <input type="number" name="number" value={number} onChange={onChange} placeholder="Enter Phone Number" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Patient Email Address
                            </label>
                            <input type="email" name="email" value={email} onChange={onChange} placeholder="Enter Phone Number" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Patient Address
                            </label>
                            <input type='address' name="address" value={address} onChange={onChange}  placeholder="Enter Address" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Emergency Contact Name
                            </label>
                            <input type="contact" name="contact" value={contact} onChange={onChange} placeholder="Enter Emergency Contact's Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Relationship to Emergency Contact
                            </label>
                            <input type="relation" name="relation" value={relation} onChange={onChange} placeholder="Enter Emergency Contact's Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Emergency Contact Number
                            </label>
                            <input type="phone" name="phone" value={phone} onChange={onChange} placeholder="Enter Emergency Contact's Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Insurance Provider
                            </label>
                            <input type="provider" name="provider" value={provider} onChange={onChange} placeholder="Enter Insurance Provider" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Insurance Policy Number
                            </label>
                            <input type="policy" name="policy" value={policy} onChange={onChange} placeholder="Enter Policy Number" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>
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
        </>
    )
}

export default PatientRegister