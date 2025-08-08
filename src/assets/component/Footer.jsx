import React from 'react'
import { Link } from 'react-router-dom';
import paramlogo from '../images/paramlogo.png';

const Footer = () => {
    return (
        <>
            <div className='w-full flex flex-col justify-center'>
                <div className='w-full flex justify-center'>
                    <div className='w-[50%] bg-[#ECF1FE] flex flex-col items-center justify-center py-[48px]'>
                        <div className='w-[80%] flex flex-col gap-[60px]'>
                            <img src={paramlogo} className='w-[185px] h-[83px]' />
                            <div className='w-full flex flex-col gap-[48px]'>
                                <div className='flex flex-col w-[500px] gap-[32px]'>
                                    <p className='text-[24px] text-[#383838] font-[700]' >Quick Links</p>
                                    <div className='flex text-[20px] text-[#383838] font-[400] justify-between'>
                                        <Link>About Us</Link>
                                        <Link>Work With Us</Link>
                                        <Link>Courses</Link>
                                        <Link>Inquiry</Link>
                                    </div>
                                </div>
                                <div className='w-full flex justify-between'>
                                    <div className='w-[500px] flex gap-[32px] flex-col'>
                                        <p className='text-[24px] text-[#383838] font-[700]'>Subscribe</p>
                                        <p className='text-[20px] text-[#383838] font-[400]'>Subscribe to stay tuned for new web design and latest updates. Let's do it! </p>
                                        <div className='w-full flex justify-between'>
                                            <input type="text" placeholder='Enter Your Email Address' className='border-[1px] border-[#D5BDF5] p-[15px] w-[339px] rounded-[5px]' />
                                            <button type="submit" className='bg-[#3972EF] rounded-[57px] text-[#FFFDF5] text-[20px] py-[10px] px-[33px]'>Submit</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right col Start */}
                    <div className='w-[50%] bg-[#ECF3C2] flex justify-center items-center'>
                        <div className='w-[80%] flex gap-[5px]'>
                            {/* India */}
                            <div className='flex flex-col gap-[30px]'>
                                <p className='text-[#383838] text-[24px] font-[700]'>Contact Us (INDIA)</p>
                                <div className='flex items-center text-[20px] font-[400] gap-[20px]'>
                                    <i className="fa-solid fa-phone"></i>
                                    <p>(+1) 732 404 0466</p>
                                </div>
                                <div className='flex items-center text-[20px] font-[400] gap-[20px]'>
                                    <i className="fa-solid fa-envelope"></i>
                                    <p>info@parameduindia@gmail.com</p>
                                </div>
                                <div className='flex items-center text-[20px] font-[400] gap-[20px]' >
                                    <i class="fa-solid fa-location-dot"></i>
                                    <p>707 - 710 Everest Onyx, Opp Inox Multiplex, Race Course Rd, Vadodara, Gujarat 390007</p>
                                </div>
                            </div>
                            {/* USA */}
                            <div className='flex flex-col gap-[30px]'>
                                <p className='text-[#383838] text-[24px] font-[700]'>Contact Us USA</p>
                                <div className='flex items-center gap-[20px] text-[20px] font-[400]'>
                                    <i className="fa-solid fa-phone"></i>
                                    <p>(+1) 732 404 0466</p>
                                </div>
                                <div className='flex items-center text-[20px] font-[400] gap-[20px]'>
                                    <i className="fa-solid fa-envelope"></i>
                                    <p>info@parameduindia@gmail.com</p>
                                </div>
                                <div className='flex items-center text-[20px] font-[400] gap-[20px]' >
                                    <i class="fa-solid fa-location-dot"></i>
                                    <p>200 Middlesex Essex Turnpike #104, Iselin, NJ 08830, United States</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------------------------------------------------ */}
                <div className='w-full flex justify-center'>
                    <div className='w-[50%] bg-[#ECF1FE] flex justify-center py-[48px]'>
                        <div className='w-[80%] flex justify-between'>
                            <p>Follow Us</p>
                            <Link>Terms & Condition</Link>
                        </div>
                    </div>
                    <div className='w-[50%] bg-[#ECF3C2] flex justify-center py-[48px]'>
                        <div className='w-[80%] flex justify-between'>
                            <Link>Privacy Policy</Link>
                            <p>© Copyright 2024, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer