import React from 'react';
import profile1 from './IMAGE/profile1.png';
import { MdOutlineNotificationsActive } from "react-icons/md";

const HeaderAdmin = ({pageName}) => {
  return (
    <>
        <div className='w-full flex items-center justify-between p-[20px]'>
            <div>
                <p className='text-[42px] text-[#333333] font-[700]'>{pageName}</p>
            </div>
            <div className='flex items-center justify-between gap-[40px]'>
                <div>
                    <MdOutlineNotificationsActive className='text-[45px]' />
                </div>
                <div>
                    <p className='text-[20px] text-[#000000] font-[400]'>Abhishek Agnihotri</p>
                    <p className='text-[16px] text-[#767676] font-[400]'>Admin</p>
                </div>
                <div>
                    <img src={profile1} className='w-[60px] h-[60px] rounded-[50%]' />
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderAdmin