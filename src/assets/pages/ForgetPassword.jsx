import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import paramlogo from '../images/paramlogo.png';
import forgotPassword from '../images/forgotPassword.png'
import { useMutation } from '@tanstack/react-query';
import { forgotPasswordAPI } from '../../api/Auth/changepassword';
 
const ForgetPassword = () => {

    const [email, setEmail] = useState("");

    const {mutate} = useMutation({
        mutationFn : forgotPasswordAPI,
        onSuccess : (res)=>{
            console.log(res);
            setEmail("");
        }
    });

    function handleSubmit(){
        const formData = new FormData();
        formData.append("email", email);
        mutate(formData);
    }

    return (
        <>
            <div className='w-full h-[100vh] flex justify-center items-center bg-linear-[90deg,#9796F0_30%,#FBC7D4_70%]'>
                <div className='w-[80%] h-[80%] flex' >
                    {/* Left Div */}
                    <div className='w-[50%] h-full overflow-auto bg-[#ECF1FE] flex flex-col items-center rounded-l-[35px] gap-[70px] pt-8'>
                        <img src={paramlogo} className='w-[137px]' />
                        <div className='w-[85%] flex flex-col pl-[20px] gap-[20px]'>
                            <p className='text-[48px] text-[#171923] font-[700]'>Forget Password?</p>
                            <p className='text-[18px] text-[#718096] font-[400]'>Enter your E-mail to reset your password</p>
                            <div className='w-full flex flex-col gap-[8px]'>
                                <label htmlFor="" className='text-[20px] text-[#718096]'>E-mail</label>
                                <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="text" placeholder='example@gmail.com' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                            </div>
                            <button onClick={handleSubmit} className='bg-[#3972EF] rounded-[57px] py-[16px] text-[24px] text-white'>Send</button>
                        </div>
                    </div>

                    {/* Right Div */}
                    <div className='w-[50%] h-full bg-[#FFFFFF] flex justify-center items-center rounded-r-[35px] relative'>
                        <img src={forgotPassword} className='h-full w-full absolute left-30' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword