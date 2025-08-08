import React, { useState } from 'react'

import profile1 from './IMAGE/profile1.png'
import HeaderAdmin from './HeaderAdmin'
import ChangePassword from './ChangePassword';

const Profile = () => {

        const [isOpen, setIsOpen] = useState(false);
    
  return (

    <>
        <HeaderAdmin pageName = "profile" />
        <div className='w-[96%] h-[862px] rounded-[20px] shadow-2xl flex justify-center my-[20px]' >
            <div className='w-[90%] h-[300px] mt-[80px] flex gap-[20px]'>
                {/* left div for image */}
                <div className='w-[200px]'>
                    <img src={profile1} className='w-[full]' />
                </div>

                {/* -----Right Div for content --------- */}
                <div className='w-full flex flex-col items-center gap-[20px]'>
                    <div className='flex w-full justify-between'>
                        <div className='w-[48%] flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#0D062D]'>First Name</label>
                            <input type="text" placeholder='First NAme' className='border-[1px] border-[#DBDBDB] rounded-[12px] text-[18px] font-[400] py-[14px] px-[16px]' />
                        </div>
                        <div className='w-[48%] flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#0D062D]'>Last Name</label>
                            <input type="text" placeholder='Last Name' className='border-[1px] border-[#DBDBDB] rounded-[12px] text-[18px] font-[400] py-[14px] px-[16px]' />
                        </div>
                    </div>
                    {/* -------------------------------- */}
                     <div className='flex w-full justify-between'>
                        <div className='w-[48%] flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#0D062D]'>Email</label>
                            <input type="text" placeholder='Admin@gmail.com' className='border-[1px] border-[#DBDBDB] rounded-[12px] text-[18px] font-[400] py-[14px] px-[16px]' />
                        </div>
                        <div className='w-[48%] flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#0D062D]'>Phone No</label>
                            <input type="text" placeholder='12345678' className='border-[1px] border-[#DBDBDB] rounded-[12px] text-[18px] font-[400] py-[14px] px-[16px]' />
                        </div>
                    </div>

                    {/* ----------------------- */}
                    <div className='flex w-full gap-[20px] justify-end'>
                        <button onClick={() => setIsOpen(true)} className='border-[1px] border-[#3E5388] rounded-[5px] text-[#3E5388] text-[18px] font-[400] py-[11px] px-[20px]'>Change Password</button>
                        <button className='bg-[#3E5388] border-[#3E5388] rounded-[5px] text-[18px] text-white font-[400] py-[11px] px-[20px]'>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>

        {isOpen && (
                <ChangePassword setIsOpen={setIsOpen}/>
        )}
    </>
    
  )
}

export default Profile