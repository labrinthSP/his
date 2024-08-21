import { useState } from 'react'

const EditPatient = () => {
    const [formData, setFormData] = useState({ existingCond: '', currentMed: '', allergies: '', surgeries: '', famHistory: '', docName: '' });
    const { existingCond, currentMed, allergies, surgeries, famHistory, docName } = formData;

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
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="border border-[#6d6d6d] p-8 rounded shadow-md max-w-xl w-full">
                    <h2 className="text-2xl mb-4 font-bold text-center">Patient Details Edit Form</h2>
                    <form onSubmit={onSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Existing Medical Conditions
                            </label>
                            <input type="name" name="existingCond" value={existingCond} onChange={onChange} placeholder="Enter Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Current Medications
                            </label>
                            <input type="name" name="currentMed" value={currentMed} onChange={onChange} placeholder="Enter Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Allergies
                            </label>
                            <input type="name" name="allergies" value={allergies} onChange={onChange} placeholder="Enter Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Previous Surgeries
                            </label>
                            <input type="name" name="surgeries" value={surgeries} onChange={onChange} placeholder="Enter Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Family Medical History
                            </label>
                            <input type="name" name="famHistory" value={famHistory} onChange={onChange} placeholder="Enter Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Primary Care Physician's Name
                            </label>
                            <input type="name" name="docName" value={docName} onChange={onChange} placeholder="Enter Doctor Name" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>
                        </div>

                        <div className="text-center flex flex-col">
                            <button
                                type="submit"
                                className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-900 transition duration-300"
                            >
                                Add New
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditPatient