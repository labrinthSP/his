import { useState, useEffect, useRef } from 'react';
import DoctorPatientRegister from '../components/doctorPatientRegister';

export default function DoctorDashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                <h1 className="text-4xl text-center mb-10">DOCTOR'S STATION</h1>
                <div
                    className='cursor-pointer hover:text-2xl text-xl border border-[#626262] p-2 rounded-lg'
                    onClick={openModal}
                >
                    View Patient Records
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div ref={modalRef} className="bg-black p-5 rounded-lg shadow-lg max-w-2xl w-full">
                        <h2 className="text-xl mb-4">Patient Records</h2>
                        <DoctorPatientRegister />
                        <button
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
