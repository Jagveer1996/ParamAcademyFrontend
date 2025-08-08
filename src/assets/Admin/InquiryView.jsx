import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import HeaderAdmin from './HeaderAdmin';
import { useMutation, useQuery } from '@tanstack/react-query';
import { editInqueryApi, getInqueryApiID } from '../../api/inquery/inqueryApi';


const InquiryView = () => {

    const navigate = useNavigate();

    const {id} = useParams();
 
    const {data, isLoading} = useQuery({
        queryKey : ['getInqueryApiID',id],
        queryFn :()=> getInqueryApiID(id),
        enabled : !!id
    })

    // console.log("inquery view page", data?.data[0]);

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState("");
    const [education, setEducation] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");

    useEffect(()=>{
        setFname(data?.data[0]?.fname);
        setLname(data?.data[0].lname);
        setEmail(data?.data[0].email);
        setPhone(data?.data[0].phone_no);
        setCourse(data?.data[0].course_id);
        setEducation(data?.data[0].education);
        setStatus(data?.data[0].status);
        setDate(data?.data[0].updated_at);
    },[data]);

    
    const {mutate} = useMutation({
        mutationFn : editInqueryApi,
        onSuccess : ()=>{
            navigate('/inquirydetail');
        }
    })


    function handleSubmit(){

        const formData = new FormData();

        formData.append("fname", fname);
        formData.append("lname", lname);
        formData.append("email", email);
        formData.append("phone_no", phone);
        formData.append("course_id", course);
        formData.append("education", education);
        formData.append("status", status);

        mutate({id,formData});
    }

  return (
    <>
        <HeaderAdmin pageName= "Inquiry View" />
        <div className=' w-[96%] rounded-[20px] shadow-2xl flex justify-center my-[20px]'>
            <div className='w-[97%] flex flex-col items-center gap-[24px]'>
                <div className='w-full flex items-center justify-between mt-[32px]'>
                    <Link to={'/inquirydetail'} className='flex items-center'> <IoIosArrowBack /> Back</Link>
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
                    <div className='w-[49%] flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Course</label>
                        <input onChange={(e)=>{setCourse(e.target.value)}} value={course} type="text" placeholder='Course' className='bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
                    </div>
                    <div className='w-[49%] flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Education</label>
                        <input onChange={(e)=>{setEducation(e.target.value)}} value={education} type="text" placeholder='Education' className='bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
                    </div>
                </div>
                {/* --------------------------------------------------------------- */}
                <div className='w-full flex justify-between'>
                    <div className='w-[49%] flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Status</label>
                        <input onChange={(e)=>{setStatus(e.target.value)}} value={status} type="text" placeholder='Status' className='bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
                    </div>
                    <div className='w-[49%] flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Date</label>
                        <input onChange={(e)=>{setDate(e.target.value)}} value={date} type="text" placeholder='Date' className='bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
                    </div>
                </div>
                {/* --------------------------------------------------------- */}
                <div className='w-full flex justify-between'>
                    <div className='w-full flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Comments</label>
                        <input type="text" placeholder='Comments' className='h-[100px] bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
                    </div>
                </div>
                {/* ---------------------------------------------------------- */}
                <div className='w-full flex justify-between'>
                    <div className='w-full flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Write Remark</label>
                        <input type="text" placeholder='Write Remark' className='border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
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

export default InquiryView