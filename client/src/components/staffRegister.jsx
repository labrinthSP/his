import { useState } from 'react'
import axios from 'axios';


const StaffRegister = () => {
    const [formData, setFormData] = useState({ name: '', password: '', email: '', dob: '', gender: '', phone: '', address: '', title: '', dept: '', startDate: '', exp: '', spec: '', accName: '', accNum: '', });
    const { name, email, dob, gender, phone, address, title, dept, startDate, exp, spec, accName, accNum, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/staff/register', formData);
            console.log('Staff registered successfully:', response.data);

            // You can add additional logic here, such as clearing the form or redirecting the user.
        } catch (error) {
            console.error('Error registering staff:', error);
        }
    };


    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="border border-[#6d6d6d] p-8 rounded shadow-md max-w-5xl w-full">
                    <h2 className="text-2xl mb-8 font-bold text-center">Staff Member Onboarding Form</h2>

                    <form onSubmit={onSubmit}>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-1 font-semibold">
                                    Name
                                </label>
                                <input type="text" name="name" value={name} onChange={onChange} placeholder="Enter First Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-1 font-semibold">
                                    DOB
                                </label>
                                <input type="date" name="dob" value={dob} onChange={onChange} placeholder="Enter First Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-1 font-semibold">
                                    Gender
                                </label>
                                <input type="text" name="gender" value={gender} onChange={onChange} placeholder="Enter First Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-1 font-semibold">
                                    Address
                                </label>
                                <input type="text" name="address" value={address} onChange={onChange} placeholder="Enter First Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-1 font-semibold">
                                    Email Address
                                </label>
                                <input type="email" name="email" value={email} onChange={onChange} placeholder="Enter Email" className="w-full border border-[#626262] rounded px-3 py-2" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="phone" className="block mb-1 font-semibold">
                                    Phone Number
                                </label>
                                <input type="text" name="phone" value={phone} onChange={onChange} placeholder="Enter Phone Number" className="w-full border border-[#626262] rounded px-3 py-2" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="role" className="block mb-1 font-semibold">
                                    Job Title
                                </label>
                                <input type="text" name="title" value={title} onChange={onChange} placeholder="Enter Job Title" className="w-full border border-[#626262] rounded px-3 py-2" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="dept" className="block mb-1 font-semibold">
                                    Department
                                </label>
                                <input type="text" name="dept" value={dept} onChange={onChange} placeholder="Enter Department" className="w-full border border-[#626262] rounded px-3 py-2" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="department" className="block mb-1 font-semibold">
                                    Specialization
                                </label>
                                <input type="text" name="spec" value={spec} onChange={onChange} placeholder="Enter Specialization" className="w-full border border-[#626262] rounded px-3 py-2" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="department" className="block mb-1 font-semibold">
                                    Years Of Experience
                                </label>
                                <input type="number" name="exp" value={exp} onChange={onChange} placeholder="" className="w-full border border-[#626262] rounded px-3 py-2" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="startDate" className="block mb-1 font-semibold">
                                    Start Date
                                </label>
                                <input type="date" name="startDate" value={startDate} onChange={onChange} placeholder="Enter Start Date" className="w-full border border-[#626262] rounded px-3 py-2" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="employeeId" className="block mb-1 font-semibold">
                                    Bank Account Name
                                </label>
                                <input type="text" name="accName" value={accName} onChange={onChange} placeholder="Enter Bank Account Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="employeeId" className="block mb-1 font-semibold">
                                    Bank Account Number
                                </label>
                                <input type="number" name="accNum" value={accNum} onChange={onChange} placeholder="Enter Bank Account Number" className="w-full border border-[#626262] rounded px-3 py-2" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block mb-1 font-semibold">
                                    Assigned Password
                                </label>
                                <input type="password" name="password" value={password} onChange={onChange} placeholder="Assigned Password Will Appear Here" className="w-full border border-[#626262] rounded px-3 py-2" />
                            </div>
                        </div>

                        <div className="text-center flex flex-col col-span-1 md:col-span-2">
                            <button
                                type="submit"
                                className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-900 transition duration-300"
                            >
                                Register Staff
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default StaffRegister