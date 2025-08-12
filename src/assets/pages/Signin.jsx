import React, { useState } from 'react'

import signbgIcon from '../images/signbgIcon.png'
import paramlogo from '../images/paramlogo.png';
import Computersignin from '../images/Computersignin.png';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createUserApi } from '../../api/user/userApi';
import {getRegistration, Login } from '../../api/registration/registrationAPI';

const Signin = () => {

  const navigate = useNavigate();

  // query for add/user data

  const { data, isError, isSuccess, error } = useQuery({
    queryKey: ['getRegistration'],
    queryFn: getRegistration
  })

  // console.log("get all Registration", data?.data)



  const {mutate , isLoading} = useMutation({
    mutationFn : (data) => Login(data),
    onSuccess : (res) => {
      localStorage.clear();
      console.log("*******",res.data.role)
      localStorage.setItem('loginData',res.data.email)
      localStorage.setItem('AccessToken',res.data.AccessToken)
      localStorage.setItem('Role', res.data.role);
      if (res.data.role == 'student'){
        navigate('/home');
      }
      else if (res.data.role == 'admin'){
        navigate('/dashboard');
      }
      
    },
    onError : (error)=>{
      alert(error.response.data.message)
      // console.log(error.response.data.message);
      
    }

  })

  


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // const UserData = data?.data.find(item => item.email === email);


  const handleLogin = () => {

    if(email && password){
      if(email.trim() && password.trim()){
        mutate({email:email.trim(), password:password.trim()})
      }
    }



  }

  return (
    <>
      <div className='w-full h-[100vh] flex justify-center items-center bg-linear-[90deg,#9796F0_30%,#FBC7D4_70%]'>
        <div className='w-[80%] h-[80%] flex' >
          {/* Left Div */}
          <div className='w-[50%] h-full overflow-auto bg-[#ECF1FE] flex flex-col items-center rounded-l-[35px]'>
            <img src={paramlogo} className='w-[137px]' />
            <div className='w-[85%] flex flex-col pl-[20px] gap-[20px]'>
              <p className='text-[48px] text-[#171923] font-[700]'>Sign In</p>
              <p className='text-[18px] text-[#718096] font-[400]'>Don't have an account? <Link to={'/signup'} className='text-[#171923] underline'>Create Now</Link></p>
              <div className='w-full flex flex-col gap-[8px]'>
                <label htmlFor="" className='text-[20px] text-[#718096]'>E-mail</label>
                <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder='example@gmail.com' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
              </div>
              <div className='w-full flex flex-col gap-[8px]'>
                <label htmlFor="" className='text-[20px] text-[#718096]'>Password</label>
                <input type="text" onChange={(e) => { setPassword(e.target.value) }} placeholder='@#*%' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
              </div>
              <div className='w-full flex justify-between'>
                <p className='text-[#718096]'><input type="checkbox" name="" id="" /> Remember me</p>
                <Link className='underline' to={'/forgetpassword'}>Forget Password?</Link>
              </div>
              <button onClick={handleLogin} className='bg-[#3972EF] rounded-[57px] py-[16px] text-[24px] text-white'>Sign In</button>
            </div>
          </div>
          {/* right Div */}
          <div className='w-[50%] h-full bg-[#FFFFFF] flex justify-center items-center rounded-r-[35px] relative'>
            <img src={Computersignin} className='h-[85%] w-full absolute left-30' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin;