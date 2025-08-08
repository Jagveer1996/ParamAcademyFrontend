import React from 'react'

import heroimg from '../images/heroimg.png';

const Hero = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center'>
        <div className='w-[90%] flex justify-between items-center gap-[20px]'>
            {/* Left Section Start */}
            <div className='w-[55%] flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px]'>
                    <p className='text-[#333333] text-[80px] font-[700]'>Param Academy</p>
                    <p className='text-[#1B2336] text-[20px] font-[300]'>At Param Academy, we provide innovative training led by industry experts. Focusing on job readiness, professionalism, and practical skills, we equip you for success in today’s fast-paced, technology-driven world.</p>
                    <button className='text-[20px] text-[#FFFDF5] font-[500] bg-[#3972EF] w-[241px] h-[60px] rounded-[57px]'>Book Appointment</button>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-[#55C360] text-[50px] font-[600]'>15+</p>
                        <p className='text-[#55C360] text-[18px] font-[400]'>CERTIFIED COURSES</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-[#BD51F2] text-[50px] font-[600]'>20+</p>
                        <p className='text-[#BD51F2] text-[18px] font-[400]'>Years of Educational Excellence</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-[#3972EF] text-[50px] font-[600]'>35+</p>
                        <p className='text-[#3972EF] text-[18px] font-[400]'>GRADUATED STUDENTS</p>
                    </div>
                </div>
            </div>

            {/* Right Section start */}
            <div className='w-[35%]'>
                <img src={heroimg} className='w-full' />
            </div>
        </div>
    </div>
  )
}

export default Hero