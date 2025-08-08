import React, { useState } from 'react'
import { Link, useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom';
import paramlogo from '../images/paramlogo.png';
import resetpassword from '../images/resetpassword.png';
import { useMutation } from '@tanstack/react-query';
import { resetPasswordAPI } from '../../api/Auth/changepassword';

const ResetPassword = () => {

    const {token} = useParams();

    const [createPWD, setCreatePWD] = useState("");


    const navigate = useNavigate();

    console.log("first",location)
    const {mutate} = useMutation({
        mutationFn : resetPasswordAPI,
        onSuccess : (res)=>{
            alert(res.message);
            navigate('/signin')
        }
    });

    function handleSubmit(){
        const formData = new FormData();

        formData.append("newpassword", createPWD);
        formData.append("token", token)

        mutate(formData);

    }

  return (
    <>
                <div className='w-full h-[100vh] flex justify-center items-center bg-linear-[90deg,#9796F0_30%,#FBC7D4_70%]'>
                    <div className='w-[80%] h-[80%] flex' >
                        {/* Left Div */}
                        <div className='w-[50%] h-full overflow-auto bg-[#ECF1FE] flex flex-col items-center rounded-l-[35px] gap-[20px] pt-8'>
                            <img src={paramlogo} className='w-[137px]' />
                            <div className='w-[85%] flex flex-col pl-[20px] gap-[20px]'>
                                <p className='text-[48px] text-[#171923] font-[700]'>Reset Password?</p>
                                <p className='text-[18px] text-[#718096] font-[400]'>Create a New password</p>
                                <div className='w-full flex flex-col gap-[8px]'>
                                    <label htmlFor="" className='text-[20px] text-[#718096]'>Create Password</label>
                                    <input onChange={(e)=>{setCreatePWD(e.target.value)}} value={createPWD} type="text" placeholder='@#$%' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                                </div>
                                <div className='w-full flex flex-col gap-[8px]'>
                                    <label htmlFor="" className='text-[20px] text-[#718096]'>Confirm Password</label>
                                    <input type="text" placeholder='*******' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                                </div>
                                <button onClick={handleSubmit} className='bg-[#3972EF] rounded-[57px] py-[16px] text-[24px] text-white'>Send</button>
                            </div>
                        </div>
    
                        {/* Right Div */}
                        <div className='w-[50%] h-full bg-[#FFFFFF] flex justify-center items-center rounded-r-[35px] relative'>
                            <img src={resetpassword} className='h-full w-full absolute left-30' />
                        </div>
                    </div>
                </div>
            </>
  )
}

export default ResetPassword