import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
import PatientRegister from '../components/PatientRegister';

export default function NurseDashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <>
            <div className="flex min-h-screen flex-col gap-y-5 items-center justify-center">
                <h1 className="text-4xl text-center mb-10">NURSE'S STATION</h1>
                <div
                    onClick={openModal}
                    className="cursor-pointer hover:text-2xl text-xl border border-[#626262] p-2 rounded-lg"
                >
                    Register New Patient
                </div>

                <Link to="/patient-records">
                <div
                    className="cursor-pointer hover:text-2xl text-xl border border-[#626262] p-2 rounded-lg"
                >
                    View Patient Records
                </div>
                </Link>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div ref={modalRef} className="bg-black p-6 rounded shadow-md max-w-3xl w-full overflow-y-auto">
                        <PatientRegister />
                    </div>
                </div>
            )}
        </>
    );
}
