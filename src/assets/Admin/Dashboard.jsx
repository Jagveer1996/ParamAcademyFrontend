import React from 'react'
import HeaderAdmin from './HeaderAdmin'

const Dashboard = () => {
    return (
        <>  
            <HeaderAdmin pageName = "Dashboard" />
            <div className=' w-[96%] rounded-[20px] shadow-2xl flex justify-center my-[20px]' >
                <div className='w-[97%] flex flex-col items-center gap-[47px] pt-[40px]'>
                    <div className=" w-full grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        {["Total Courses", "Total Students", "Total Instructors", "Total Admins"].map((title, index) => (
                            <div key={index} class="bg-white rounded-lg p-4 shadow-md">
                                <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
                                <p className="text-3xl font-bold text-indigo-600">...</p>
                            </div>
                        ))}
                    </div>

                    <div className=" w-full grid grid-cols-2 md:grid-cols-2 gap-4 mb-6" >
                        {/* --------------2. Fees Report Section ------------------------------ */}
                        <div>
                            <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                                <div class="flex justify-between items-center mb-4">
                                    <h2 class="text-xl font-bold text-gray-800">Fees Report</h2>
                                    <div class="flex space-x-2">
                                        <select class="border rounded px-3 py-1 text-gray-700">
                                            <option>January</option>
                                        </select>
                                        <select class="border rounded px-3 py-1 text-gray-700">
                                            <option>2024</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="flex flex-col md:flex-row items-center justify-between">
                                    <div class="text-center mb-4 md:mb-0">
                                        <p class="text-4xl font-bold text-green-500">₹10,00,000</p>
                                        <p class="text-sm text-gray-600">Total Paid</p>
                                    </div>
                                    <div class="w-32 h-32">
                                        {/* <!-- Placeholder Pie Chart --> */}
                                        <div class="w-full h-full bg-gradient-to-tr from-green-400 to-red-400 rounded-full shadow-inner"></div>
                                    </div>
                                </div>
                            </div>
                            {/* ----------------4. Ongoing Courses List ------------------------- */}
                            <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                                <h2 class="text-xl font-bold text-gray-800 mb-4">Ongoing Courses</h2>
                                <ul class="space-y-2">
                                    {["Machine Learning Essentials", "Mobile App Development", "AI Fundamentals"].map((course, idx) => (
                                        <li key={idx} class="p-3 bg-gray-100 rounded hover:bg-gray-200 transition">
                                            {course}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                        <div>
                            {/* ------------------------- 3. Calendar Display------------------- */}
                            <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                                <div class="flex justify-between items-center mb-4">
                                    <button class="text-gray-500 hover:text-gray-700">‹</button>
                                    <h3 class="text-lg font-semibold">June 2025</h3>
                                    <button class="text-gray-500 hover:text-gray-700">›</button>
                                </div>
                                <div class="grid grid-cols-7 text-center gap-2">
                                    {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((day, index) => (
                                        <div key={index} class="text-gray-600 font-medium">{day}</div>
                                    ))}
                                    {/* Fill in dates dynamically */}
                                </div>
                            </div>

                            {/* ------------------- 5. Upcoming Events --------------------------- */}

                            <div class="bg-white rounded-lg shadow-md p-6">
                                <h2 class="text-xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
                                <ul class="divide-y divide-gray-200">
                                    {["Workshop: ML Models", "Webinar: Secure Web Apps"].map((event, index) => (
                                        <li key={index} class="py-2 text-gray-700">{event}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}

export default Dashboard