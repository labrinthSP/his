import React from 'react'

const PatientCheck = () => {
    return (
        <>
            <div className="min-h-screen flex gap-y-10 flex-col items-center justify-center">
                <h2 className='text-xl'>Enter your name or assigned Serial Number to retrieve your records</h2>
                <div className="p-4 max-w-md w-full">
                    <form>
                        <div>
                            <input type="name" name="name" placeholder="Enter Assigned Serial Number" className="w-full border border-[#626262] rounded px-3 py-2" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PatientCheck