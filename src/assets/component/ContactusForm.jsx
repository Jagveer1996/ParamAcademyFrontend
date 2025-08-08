import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { createContactusAPI } from '../../api/contactus/contactusAPI'

const ContactusForm = () => {

    const { mutate, isLoading } = useMutation({
        mutationFn: (data) => createContactusAPI(data),
        onSuccess: (res) => {
            console.log("ContactusAPI", res);

        }
    })

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [messg, setMessg] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData();

        formData.append("fname", fname);
        formData.append("lname", lname);
        formData.append("email", email);
        formData.append("phone_no", phone);
        formData.append("subject", subject);
        formData.append("message", messg);

        mutate(formData);
    }

    return (
        <>
            <div className='w-full flex justify-center items-center my-[100px]'>
                <div className='w-[90%] flex justify-center'>
                    {/* left div */}
                    <div className='w-[40%] bg-[#3972EF] text-white flex flex-col gap-[70px] py-[45px] px-[30px] rounded-l-[10px] rounded-tr-[100px]'>
                        <div className='flex flex-col gap-[30px]'>
                            <p className='text-[32px] font-[700]'>India</p>
                            <p className='text-[20px]'>(+91)701 669 3717</p>
                            <p className='text-[20px]'>info@paramgroups.com</p>
                            <p className='text-[20px]'>07 - 710 Everest Onyx, Opp Inox Multiplex, Race Course Rd,  Vadodara, Gujarat 390007</p>
                        </div>
                        <div className='flex flex-col gap-[30px]'>
                            <p className='text-[32px] font-[700]'>USA</p>
                            <p className='text-[20px]'>(+1) 732 404 0466</p>
                            <p className='text-[20px]'>info@paramacademy.com</p>
                            <p className='text-[20px]'>200 Middlesex Essex Turnpike #104, Iselin, NJ 08830, United States</p>
                        </div>
                    </div>
                    {/* Right Div */}
                    <div className='w-[60%] flex justify-center'>
                        <form action="" onSubmit={handleSubmit} className='w-full flex justify-center'>


                            <div className='w-[80%] flex flex-col gap-[16px]'>
                                <div className='w-full flex flex-col'>
                                    <label className='text-[20px] text-[#718096]' htmlFor="">First Name</label>
                                    <input onChange={(e) => { setFname(e.target.value) }} className='border-[1px] border-[#CBD5E0] p-[16px] text-[#B1B5BB] font-[400] rounded-[12px]' type="text" placeholder='Enter First Name' />
                                </div>
                                <div className='w-full flex flex-col'>
                                    <label className='text-[20px] text-[#718096]' htmlFor="">Last Name</label>
                                    <input onChange={(e) => { setLname(e.target.value) }} className='border-[1px] border-[#CBD5E0] p-[16px] text-[#B1B5BB] font-[400] rounded-[12px]' type="text" placeholder='Enter Last Name' />
                                </div>
                                <div className='w-full flex flex-col'>
                                    <label className='text-[20px] text-[#718096]' htmlFor="">Email</label>
                                    <input onChange={(e) => { setEmail(e.target.value) }} className='border-[1px] border-[#CBD5E0] p-[16px] text-[#B1B5BB] font-[400] rounded-[12px]' type="text" placeholder='Enter Email' />
                                </div>
                                <div className='w-full flex flex-col'>
                                    <label className='text-[20px] text-[#718096]' htmlFor="">Phone No</label>
                                    <input onChange={(e) => { setPhone(e.target.value) }} className='border-[1px] border-[#CBD5E0] p-[16px] text-[#B1B5BB] font-[400] rounded-[12px]' type="text" placeholder='Enter Phone Number' />
                                </div>
                                <div className='w-full flex flex-col'>
                                    <label className='text-[20px] text-[#718096]' htmlFor="">Subject</label>
                                    <input onChange={(e) => { setSubject(e.target.value) }} className='border-[1px] border-[#CBD5E0] p-[16px] text-[#B1B5BB] font-[400] rounded-[12px]' type="text" placeholder='Enter Subject' />
                                </div>
                                <div className='w-full flex flex-col'>
                                    <label className='text-[20px] text-[#718096]' htmlFor="">Message</label>
                                    <input onChange={(e) => { setMessg(e.target.value) }} className='border-[1px] border-[#CBD5E0] p-[16px] text-[#B1B5BB] font-[400] rounded-[12px]' type="text" placeholder='Enter Message' />
                                </div>
                                <div className='w-full flex justify-center mt-[20px]'>
                                    <button type='submit' className='bg-[#3972EF] rounded-[67px] text-white w-[240px]
                                py-[16px] px-[52px] text-[18px]'>Send Message</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactusForm