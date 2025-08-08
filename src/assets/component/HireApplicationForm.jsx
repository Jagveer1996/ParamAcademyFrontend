import React, { useState } from 'react'
import uploadIcon from '../images/uploadIcon.png'
import { useMutation } from '@tanstack/react-query'
import { createHireFromusAPI } from '../../api/hireWithus/hireFromusAPI'

const HireApplicationForm = () => {

    const { mutate, isLoading } = useMutation({
        mutationFn: (data) => createHireFromusAPI(data),
        onSuccess: (res) => {
            console.log("HireFromusAPI", res);
        }
    })

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [organization, setOragnization] = useState("");
    const [jobPosition, setJobPosition] = useState("");
    const [skills, setSkills] = useState("");
    const [document, setDocument] = useState("");
    const [comments, setComments] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData();

        formData.append("fname", fname)
        formData.append("lname", lname)
        formData.append("email", email)
        formData.append("phone_no", phone)
        formData.append("organization", organization)
        formData.append("job_position", jobPosition)
        formData.append("skills", skills)
        formData.append("upload_document", document[0])
        formData.append("comments", comments)

        mutate(formData);
    }

    return (
        <>
            <div className='w-full flex flex-col items-center justify-center my-[100px]'>
                <div className='w-[90%] pb-[40px]'>
                    <p className='text-[32px] text-[#333333] font-[700]'>Application Form</p>
                </div>
                <form action="" onSubmit={handleSubmit} className='w-full flex flex-col items-center justify-center'>


                    <div className='w-[90%] flex flex-col items-center gap-[47px] p-[36px] shadow-lg rounded-[20px]'>
                        <div className='w-full flex justify-between flex-wrap'>
                            <div className='flex flex-col w-[49%]'>
                                <label htmlFor="" className='text-[#718096] text-[20px] font-[500]'>First Name <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <input onChange={(e)=>{setFname(e.target.value)}} type="text" placeholder='Enter First Name' className='w-full border-[1px] border-[#CBD5E0] p-[15px] rounded-[12px]' />
                            </div>
                            <div className='flex flex-col w-[49%]'>
                                <label htmlFor="" className='text-[#718096] text-[20px] font-[500]'>Last Name <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <input onChange={(e)=>{setLname(e.target.value)}} type="text" placeholder='Enter Last Name' className='w-full border-[1px] border-[#CBD5E0] p-[15px] rounded-[12px]' />
                            </div>
                        </div>
                        {/* -------------------------------------------------- */}
                        <div className='w-full flex justify-between flex-wrap'>
                            <div className='flex flex-col w-[49%]'>
                                <label htmlFor="" className='text-[#718096] text-[20px] font-[500]'>Email Address <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Enter Email' className='w-full border-[1px] border-[#CBD5E0] p-[15px] rounded-[12px]' />
                            </div>
                            <div className='flex flex-col w-[49%]'>
                                <label htmlFor="" className='text-[#718096] text-[20px] font-[500]'>Phone Number <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <input onChange={(e)=>{setPhone(e.target.value)}} type="text" placeholder='Enter Phone Number' className='w-full border-[1px] border-[#CBD5E0] p-[15px] rounded-[12px]' />
                            </div>
                        </div>
                        {/* ------------------------------------------------------ */}
                        <div className='w-full flex justify-between flex-wrap'>
                            <div className='flex flex-col w-[49%]'>
                                <label htmlFor="" className='text-[#718096] text-[20px] font-[500]'>Organization Name <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <input onChange={(e)=>{setOragnization(e.target.value)}} type="text" placeholder='Enter Organization Name' className='w-full border-[1px] border-[#CBD5E0] p-[15px] rounded-[12px]' />
                            </div>
                            <div className='flex flex-col w-[49%]'>
                                <label htmlFor="" className='text-[#718096] text-[20px] font-[500]'>Job Position <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <input onChange={(e)=>{setJobPosition(e.target.value)}} type="text" placeholder='Enter Job Position' className='w-full border-[1px] border-[#CBD5E0] p-[15px] rounded-[12px]' />
                            </div>
                        </div>
                        {/* ------------------------------------------------------ */}
                        <div className='w-full flex justify-between flex-wrap'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="" className='text-[#718096] text-[20px] font-[500]'>Required Skills <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <div className='flex items-center gap-[20px]'>
                                    <input onChange={(e)=>{setSkills(e.target.value)}} type="text" placeholder='CSS' className='w-full border-[1px] border-[#CBD5E0] p-[15px] rounded-[12px]' />
                                    <p className='border-[1px] border-[#3972EF] rounded-[10px]'><i className="fa-solid fa-plus p-[16px] text-[#3972EF]"></i></p>
                                </div>
                            </div>
                        </div>
                        {/* ------------------------------------------------------------ */}
                        <div className='w-full flex justify-between flex-wrap'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="" className='text-[#718096] text-[20px] font-[500]'>Upload Job Description <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <div className='w-full border-[#C4C4C4] border-[1.5px] border-dashed flex flex-col justify-center items-center py-[54px] rounded-[8px]'>
                                    <label htmlFor="file-input">
                                        <img src={uploadIcon} className='w-[77px] h-[50px]' />
                                    </label>
                                    <input onChange={(e)=>{setDocument(e.target.files)}} type="file" id='file-input' className='hidden' />
                                    <p className='text-[20px] font-[600]'>Drag & Drop or <span className='text-[#005249]'>Browse</span></p>
                                </div>
                            </div>
                        </div>
                        {/* ------------------------------------------------------------------ */}
                        <div className='w-full flex justify-between'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="" className='text-[#718096] text-[20px] font-[500]'>Comments <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <textarea onChange={(e)=>{setComments(e.target.value)}} placeholder='Write Here...' className='w-full h-[120px] border-[1px] border-[#CBD5E0] p-[15px] rounded-[12px] resize-none'></textarea>
                            </div>
                        </div>
                        {/* ------------------------------------------------ */}
                        <button type="submit" className='bg-[#3972EF] rounded-[57px] text-[#FFFDF5] text-[20px] w-[240px] h-[60px]'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default HireApplicationForm