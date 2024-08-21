import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PatientDashboard() {
    const [patient, setPatient] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const response = await axios.get('http://localhost:5000/patient/all-patients');
                setPatient(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching patient');
                setLoading(false);
            }
        };

        fetchPatient();
    }, []);

    if (loading) {
        return <div className="flex min-h-screen items-center justify-center text-lg">Loading...</div>;
    }

    if (error) {
        return <div className="flex min-h-screen items-center justify-center text-lg">{error}</div>;
    }

    return (
        <>
            <div className="flex flex-col min-h-screen justify-center items-center">
            <h1 className="text-4xl text-center mb-10">Patients Records</h1>
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Email</th>
                            <th className="py-2 px-4 border">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patient.map((patient) => (
                            <tr key={patient._id}>
                                <td className="py-2 px-4 border">{patient.name}</td>
                                <td className="py-2 px-4 border">{patient.email}</td>
                                <td className="py-2 px-4 border">{patient.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
