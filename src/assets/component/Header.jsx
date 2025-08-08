import React from 'react'

import paramlogo from '../images/paramlogo.png'
import { Link } from 'react-router-dom'


const Header = () => {
    localStorage.getItem('loginData');

  return (
    <>
        <div className='w-full flex justify-center'>
            <div className='w-[90%] flex justify-between items-center'>
                <div className=''>
                    <img src={paramlogo} className='w-[185px] h-[83px]' />
                </div>
                <div className='flex gap-[40px] items-center'>
                    <Link to={'/home'} className='text-[20px] text-[#383838] font-[500]'>Home</Link>
                    <Link  className='text-[20px] text-[#383838] font-[500]'>Course</Link>
                    <Link to={'/hirewithus'} className='text-[20px] text-[#383838] font-[500]'>Hire From us</Link>
                    <Link to={'/workwithus'} className='text-[20px] text-[#383838] font-[500]'>Work With Us</Link>
                    <Link to={'/aboutus'} className='text-[20px] text-[#383838] font-[500]'>About Us</Link>
                    <Link to={'/contactus'} className='text-[20px] text-[#383838] font-[500]'>Contact Us</Link>
                    <Link to={'/inquiry'} className='text-[20px] text-[#383838] font-[500]'>Inquiry</Link>
                    <Link className='text-[20px] text-[#383838] font-[500]'><i className="fa-solid fa-heart text-[#BF0000] pr-[6px]"></i>Liked Course</Link>
                    
                </div>

                <div className='flex gap-[10px] items-center'>
                   {!localStorage.getItem('loginData')
                   ?
                   <>
                    <Link to={'/signin'} className='text-[24px] text-[#1B2336] font-[500]'>Sign in</Link>
                    <p className='text-[#1B2336]'>|</p>
                    <Link to={'/signup'} className='text-[24px] text-[#1B2336] font-[500]'>Sign up</Link>
                   </>
                   :
                    <Link to={'/signin'} className='text-[24px] text-[#1B2336] font-[500]'
                    onClick={()=>{localStorage.clear()}}>Sign out</Link>
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Header