import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
    const [staff, setStaff] = useState([]);
    const [patient, setPatient] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await axios.get('http://localhost:5000/staff/all-staff');
                setStaff(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching staff');
                setLoading(false);
            }
        };

        fetchStaff();
    }, []);

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
        <main className="flex flex-col gap-y-10">
            <div className="mt-10 flex flex-col">
            <h1 className="text-4xl text-center mb-10">Staff Records</h1>
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Email</th>
                            <th className="py-2 px-4 border">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staff.map((staff) => (
                            <tr key={staff._id}>
                                <td className="py-2 px-4 border">{staff.name}</td>
                                <td className="py-2 px-4 border">{staff.email}</td>
                                <td className="py-2 px-4 border">{staff.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex flex-col">
            <h1 className="text-4xl text-center mb-10">Patient Records</h1>
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
        </main>
    );
};
