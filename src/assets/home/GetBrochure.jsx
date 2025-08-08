import React from 'react';

import brochure from '../images/brochure.png';

const GetBrochure = () => {
    return (
        <>
            <div className='w-full flex justify-center items-center my-[40px]'>
                <div className='w-[90%] h-[500px] flex justify-center rounded-[20px]'>
                    {/* Left Col Start */}
                    <div className='w-[70%] bg-[#F2EBFD] flex flex-col justify-center items-center flex-wrap'>
                        <div className='flex flex-col  gap-[20px] w-[90%]'>
                            <p className='text-[48px] text-[#3F5489] font-[600]' >Get Brochure</p>
                            <div className='flex justify-between gap-[20px] w-[90%] flex-wrap'>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='text-[20px] font-[500]'>Full Name</label>
                                    <input type="text" placeholder='Enter Full Name' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] h-[50px] w-[400px]' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='text-[20px] font-[500]'>Email</label>
                                    <input type="text" placeholder='Enter Email' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] h-[50px] w-[400px]' />
                                </div>
                            </div>

                            <div className='flex justify-between gap-[20px] w-[90%] flex-wrap'>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='text-[20px] font-[500]'>Select Course</label>
                                    <input type="text" placeholder='Enter Full Name' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] h-[50px] w-[400px]' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='text-[20px] font-[500]'>Select Country</label>
                                    <input type="text" placeholder='Enter Email' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] h-[50px] w-[400px]' />
                                </div>
                            </div>
                            <button type="submit" className='bg-[#3972EF] h-[60px] w-[240px] text-[20px] text-[#FFFDF5] rounded-[57px]'>Submit</button>
                        </div>
                    </div>
                    {/* Right Col Start */}

                    <div className='w-[30%]'>
                        <img src={brochure} className='w-full h-[500px]' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default GetBrochure