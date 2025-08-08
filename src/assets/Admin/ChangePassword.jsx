import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { createCategory } from '../../api/category/categoryApi';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../../api/Auth/changepassword';

const ChangePassword = ({setIsOpen}) => {


    const [oldPwd, setOldPwd] = useState("");
    const [newPwd, setNewPwd] = useState("");

    const {mutate} = useMutation({
        mutationFn : changePassword,
        onSuccess : (res)=>{
            alert(res.message)
            setIsOpen(false);
        }
    })

    function handleSubmit(){
        const formData = new FormData();

        formData.append("oldpassword", oldPwd);
        formData.append("newpassword", newPwd);

        mutate(formData);
    }

  return (
    <>
        <div className="fixed inset-5 bg-opacity-50 flex items-center justify-center z-20">
                            <div className="bg-white p-6 rounded shadow-lg w-150 flex flex-col justify-center gap-[20px]">
                                <div className='flex justify-between items-center'>
                                    <h2 className="text-xl font-semibold mb-4">Change Password</h2>        
                                </div>
                                <div className='flex flex-col flex-1 gap-[8px]'>
                                    <label htmlFor="" className='text-[20px] text-[#4A5660]'>Old Password</label>
                                    <input onChange={(e)=>{setOldPwd(e.target.value)}} type="text" placeholder="Enter category name" className='border-[1px] border-[#CBD5E0] text-[16px] font-[400] p-[16px] rounded-[12px]' />
                                </div>
                                <div className='flex flex-col flex-1 gap-[8px]'>
                                    <label htmlFor="" className='text-[20px] text-[#4A5660]'>New Password</label>
                                    <input onChange={(e)=>{setNewPwd(e.target.value)}} type="text" placeholder="Enter category name" className='border-[1px] border-[#CBD5E0] text-[16px] font-[400] p-[16px] rounded-[12px]' />
                                </div>
                                <div className='flex flex-col flex-1 gap-[8px]'>
                                    <label htmlFor="" className='text-[20px] text-[#4A5660]'>Confirm Password</label>
                                    <input type="text" placeholder="Enter category name" className='border-[1px] border-[#CBD5E0] text-[16px] font-[400] p-[16px] rounded-[12px]' />
                                </div>
        
                                <div className="flex gap-[15px] justify-center">
                                    <button onClick={handleSubmit} className='bg-[#3E5388] rounded-[5px] px-[20px] py-[10px] text-white font-[400] cursor-pointer'>Create</button>
                                    <button onClick={() => setIsOpen(false)} className='border-[1px] border-[#3E5388] rounded-[5px] px-[20px] py-[10px] text-[#3E5388] text-[18px] font-[400] cursor-pointer'> Cancel </button>
                                </div>
                            </div>
                        </div>
    </>
  )
}

export default ChangePassword