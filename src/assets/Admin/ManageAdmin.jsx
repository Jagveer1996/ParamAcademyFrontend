import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";


const ManageAdmin = () => {
  return (
    <>
      <HeaderAdmin pageName="Manage Admin" />
      <div className=' w-[96%] rounded-[20px] shadow-2xl flex justify-center my-[20px]'>
        <div className='w-[97%] flex flex-col items-center gap-[47px] pb-[30px]'>

          <div className='w-full flex items-center justify-between mt-[32px]'>
            <Link to={'/dashboard'} className='flex items-center'> <IoIosArrowBack /> Back</Link>
            <button className='bg-[#3E5388] rounded-[5px] py-[10px] px-[16px] text-white text-[18px] font-[400]'>+ Add Admin</button>
          </div>

          {/* ---------------------------------------------------------- */}

          <div className='w-[385px] h-[251px] p-[16px] border-[1px] border-[#DADADA80] rounded-[15px] shadow-2xl'>
            <div className='flex flex-col gap-[24px]'>
              <p className='w-[80px] flex justify-center text-[#005249] font-[500] bg-[#BED754] py-[10px] px-[16px] rounded-[50px] '>India</p>
              <div className='flex flex-col gap-[10px]'>
                <p className='text-[18px] text-[#2D2D2D] font-[500]'>Thakur Jagveer</p>
                <p className='text-[18px] text-[#2D2D2D]'>Admin</p>
                <p className='text-[18px] text-[#2D2D2D]'>9265953911</p>
              </div>
              <div className='flex items-center justify-between '>
                <Link className='text-[#3E5388] text-[18px] underline'>Manage Permissions</Link>
                <button className='text-[#D8727D] text-[26px] cursor-pointer'>
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageAdmin;