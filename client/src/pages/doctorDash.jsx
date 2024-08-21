import { Link } from 'react-router-dom'


export default function DoctorDashboard() {
    return (
        <>
            <div className="flex min-h-screen flex-col gap-y-5 items-center justify-center">
                <h1 className="text-4xl text-center mb-10">DOCTOR'S STATION</h1>
                {/* <Link to="/patient-onboarding">
                    <div className='cursor-pointer hover:text-2xl text-xl border border-[#626262] p-2 rounded-lg'>Register New Patient</div>
                </Link> */}
                <Link to="/patient-records">
                    <div className='cursor-pointer hover:text-2xl text-xl border border-[#626262] p-2 rounded-lg'>View Patient Records</div>
                </Link>
            </div>
        </>
    )
}