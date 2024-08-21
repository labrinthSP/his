import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PatientDashboard() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false); // State to control edit mode

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await axios.get('http://localhost:5000/patient/all-patients');
                setPatients(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching patients');
                setLoading(false);
            }
        };

        fetchPatients();
    }, []);

    const handleViewDetails = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/patient/${id}`);
            setSelectedPatient(response.data);
            setIsEditing(false);
            setIsModalOpen(true);
        } catch (error) {
            setError('Error fetching patient details');
        }
    };

    const handleEdit = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/patient/${id}`);
            setSelectedPatient(response.data);
            setIsEditing(true);
            setIsModalOpen(true);
        } catch (error) {
            setError('Error fetching patient details');
        }
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:5000/patient/${selectedPatient._id}`, selectedPatient);
            setIsModalOpen(false);
            setIsEditing(false);
            setSelectedPatient(null);
            // Refresh patient list after saving
            const response = await axios.get('http://localhost:5000/patient/all-patients');
            setPatients(response.data);
        } catch (error) {
            setError('Error updating patient details');
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPatient(null);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setSelectedPatient({ ...selectedPatient, [e.target.name]: e.target.value });
    };

    if (loading) {
        return <div className="flex min-h-screen items-center justify-center text-lg">Loading...</div>;
    }

    if (error) {
        return <div className="flex min-h-screen items-center justify-center text-lg">{error}</div>;
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl text-center mb-10">Patients Records</h1>
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient._id}>
                                <td className="py-2 px-4 border">{patient.name}</td>
                                <td className="py-2 px-4 border flex space-x-2">
                                    <button
                                        onClick={() => handleViewDetails(patient._id)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                                    >
                                        View Details
                                    </button>
                                    <button
                                        onClick={() => handleEdit(patient._id)}
                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && selectedPatient && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white text-black p-6 rounded shadow-md max-w-lg w-full">
                        {isEditing ? (
                            <>
                                <h2 className="text-xl font-bold mb-4">Edit Patient</h2>
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={selectedPatient.name}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={selectedPatient.email}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={selectedPatient.phone}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={selectedPatient.address}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded"
                                    />
                                </div>
                                <div className="text-right mt-4">
                                    <button
                                        onClick={handleSave}
                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={closeModal}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300 ml-4"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl font-bold mb-4">{selectedPatient.name}</h2>
                                <p><strong>Email:</strong> {selectedPatient.email}</p>
                                <p><strong>Phone:</strong> {selectedPatient.phone}</p>
                                <p><strong>Address:</strong> {selectedPatient.address}</p>
                                <div className="text-right mt-4">
                                    <button
                                        onClick={closeModal}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
                                    >
                                        Close
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
