import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PatientDashboard() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            setIsModalOpen(true);
        } catch (error) {
            setError('Error fetching patient details');
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPatient(null);
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
                                <td className="py-2 px-4 border">
                                    <button
                                        onClick={() => handleViewDetails(patient._id)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                                    >
                                        View Details
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
                    </div>
                </div>
            )}
        </>
    );
}
