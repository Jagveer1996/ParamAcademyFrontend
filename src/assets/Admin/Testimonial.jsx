import React from 'react'
import { Link } from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin'
import { IoIosArrowBack } from "react-icons/io";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import profile1 from './IMAGE/profile1.png';


const Testimonial = () => {
  return (
    <>
        <HeaderAdmin pageName= "Testimonials" />
        <div className=' w-[96%] rounded-[20px] shadow-2xl flex justify-center my-[20px]'>
            <div className='w-[97%] flex flex-col items-center gap-[47px]'>
                <div className='w-full flex items-center justify-between mt-[32px]'>
                    <Link className='flex items-center'> <IoIosArrowBack /> Back</Link>
                    <button className='bg-[#3E5388] rounded-[5px] py-[10px] px-[16px] text-white text-[18px] font-[400]'>+ Add Testimonial</button>
                </div>
                {/* --------------------------------------------- */}
                <div className='w-full flex items-center justify-between gap-[20px] my-[20px] '>
                    <PiDotsSixVerticalBold className='text-[#C6C6C6] text-[50px]' />
                    <div className=' border-[1px] border-[#C1C1C1] rounded-[20px] flex items-center justify-between p-[32px] gap-[20px]'>
                        <img src={profile1} className='w-[80px] h-[80px] rounded-[50%]' />
                        <p className='text-[20px] text-[#2D2D2D] font-[400]'>
                            I joined for the data analytics course and loved the hands-on approach. The resume building and mock interviews gave me confidence to face real job interviews.
                        </p>
                        <div className='flex items-center justify-between gap-[20px]'>
                            <FaRegEdit className='text-[30px]' />
                            <RiDeleteBinLine className='text-[30px] text-[#D8727D]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonial