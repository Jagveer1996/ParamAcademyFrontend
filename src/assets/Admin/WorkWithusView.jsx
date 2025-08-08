import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import HeaderAdmin from './HeaderAdmin';
import { useMutation, useQuery } from '@tanstack/react-query';
import { editWorkWithusAPI, getgetWorkWithusAPIID } from '../../api/workWithus/workWithusAPI';

const WorkWithusView = () => {

    const navigate = useNavigate();
    const {id} = useParams()

    const[fname, setFname] = useState("");
    const[lname, setLname] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[linkden, setLinkden] = useState("");
    const[resume, setResume] = useState("");
    const [tech_experience, setTech_experience] = useState("");
    const [why_joinus, setWhy_joinus] = useState("");
    const [newDocument, setNewDocument] = useState(null);
    

    const {data, isLoading, isError} = useQuery({
        queryKey : ['getgetWorkWithusAPIID', id],
        queryFn : ()=>getgetWorkWithusAPIID(id),
        enabled : !!id
    });

    // console.log('get work with us id', data?.data[0])

    useEffect(()=>{
        setFname(data?.data[0].fname);
        setLname(data?.data[0].lname);
        setEmail(data?.data[0].email);
        setPhone(data?.data[0].phone_no);
        setLinkden(data?.data[0].social_profile);
        setResume(data?.data[0].upload_document);
        setTech_experience(data?.data[0].teaching_experience);
        setWhy_joinus(data?.data[0].why_joinus);
    }, [data]);

    const {mutate} = useMutation({
        mutationFn : editWorkWithusAPI,
        onSuccess : (res)=>{
            console.log(res);
            navigate('/workwithusdetail')
        }
    });

    function handleSubmit(){
        const formData = new FormData();
        

        formData.append("fname", fname);
        formData.append("lname", lname);
        formData.append("email", email);
        formData.append("phone_no", phone);
        formData.append("social_profile", linkden);
        formData.append("upload_document", newDocument);
        formData.append("teaching_experience", tech_experience);
        formData.append("why_joinus", why_joinus);
        
        mutate({id, formData});
    }

  return (
        <>
        <HeaderAdmin pageName= "Work with us View" />
        <div className=' w-[96%] rounded-[20px] shadow-2xl flex justify-center my-[20px]'>
            <div className='w-[97%] flex flex-col items-center gap-[24px]'>
                <div className='w-full flex items-center justify-between mt-[32px]'>
                    <Link to={'/workwithusdetail'} className='flex items-center'> <IoIosArrowBack /> Back</Link>
                </div>
                {/* ------------------------------------------------------ */}
                <div className='w-full flex justify-between'>
                    <div className='w-[49%] flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>First Name</label>
                        <input onChange={(e)=>{setFname(e.target.value)}} value={fname} type="text" placeholder='First Name' className='bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
                    </div>
                    <div className='w-[49%] flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Last Name</label>
                        <input onChange={(e)=>{setLname(e.target.value)}} value={lname} type="text" placeholder='Last Name' className='bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
                    </div>
                </div>
                {/* ------------------------------------------------------------- */}
                <div className='w-full flex justify-between'>
                    <div className='w-[49%] flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Email Address</label>
                        <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="text" placeholder='Email Address' className='bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
                    </div>
                    <div className='w-[49%] flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Phone No.</label>
                        <input onChange={(e)=>{setPhone(e.target.value)}} value={phone} type="text" placeholder='Phone no.' className='bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
                    </div>
                </div>
                {/* --------------------------------------------------------------------- */}
                <div className='w-full flex justify-between'>
                    <div className='w-full flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Linkden Profile</label>
                        <input onChange={(e)=>{setLinkden(e.target.value)}} value={linkden} type="text" placeholder='Linkdin Profile' className='bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
                    </div>
                </div>
                {/* --------------------------------------------------------------- */}
                <div className='w-full flex justify-between'>
                    <div className='w-full flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Upload Resume/CV</label>
                        <p>{resume}</p>
                        <input onChange={(e)=>{setNewDocument(e.target.files[0])}} type="file" placeholder='Status' className='bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
                    </div>
                </div>
                {/* ---------------------------------------------------------- */}
                <div className='w-full flex justify-between'>
                    <div className='w-[49%] flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Tell Us About Your Teaching Experience</label>
                        <textarea onChange={(e)=>{setTech_experience(e.target.value)}} value={tech_experience} className='bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]'></textarea>
                    </div>
                    <div className='w-[49%] flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Why Do You Want to Join Us?</label>
                        <textarea onChange={(e)=>{setWhy_joinus(e.target.value)}} value={why_joinus} className='bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]'></textarea>
                    </div>
                </div>
                {/* --------------------------------------------------------- */}
                <div className='w-full flex justify-between'>
                    <div className='w-full flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Write Remark</label>
                        <input type="text" placeholder='Remark' className='h-[100px]  border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
                    </div>
                </div>
                {/* =------------------------------------------*/}
                <div className='w-full flex justify-center mt-[60px] mb-[20px] gap-[20px]'>
                        <button onClick={handleSubmit} className='bg-[#3E5388] rounded-[5px] py-[10px] px-[20px] text-white text-[18px] font-[400]'>Update</button>
                        <button className='border-[1px] border-[#3E5388] rounded-[5px] py-[10px] px-[20px] text-[#3E5388] text-[18px] font-[400]'>Cancel</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default WorkWithusView