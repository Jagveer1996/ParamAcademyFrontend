import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import HeaderAdmin from './HeaderAdmin';
import { useMutation, useQuery } from '@tanstack/react-query';
import { editHireFromusAPI, getHireFromusAPIid } from '../../api/hireWithus/hireFromusAPI';



const HireFromusView = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const {data, isLoading, isError, error} = useQuery({
        queryKey : ['getHireFromusAPIid', id],
        queryFn : ()=> getHireFromusAPIid(id),
        enabled : !!id
    })

    // console.log("Hire Form View", data?.data[0].upload_document)

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [organization, setOrganization] = useState("");
    const [position, setPosition] = useState("");
    const [skills, setSkills] = useState("");
    const [existingDocument, setExistingDocument] = useState("");
    const [newDocument, setNewDocument] = useState(null);


    useEffect(()=>{
        setFname(data?.data[0].fname);
        setLname(data?.data[0].lname);
        setEmail(data?.data[0].email);
        setPhone(data?.data[0].phone_no);
        setOrganization(data?.data[0].organization);
        setPosition(data?.data[0].job_position);
        setSkills(data?.data[0].skills);
        setExistingDocument(data?.data[0].upload_document);
    }, [data]);

    const {mutate} = useMutation({
        mutationFn : editHireFromusAPI,
        onSuccess : (res)=>{
            console.log(res);
            navigate('/hireformusdetail');
        }
    })

    function handleSubmit(){
        const formData = new FormData();

        formData.append("fname", fname);
        formData.append("lname", lname);
        formData.append("email", email);
        formData.append("phone_no", phone);
        formData.append("organization", organization);
        formData.append("job_position", position);
        formData.append("skills", skills);
        formData.append("upload_document", newDocument);

        mutate({id, formData});
    }

  return (
    <>
        <HeaderAdmin pageName= "Hire From us View" />
        <div className=' w-[96%] rounded-[20px] shadow-2xl flex justify-center my-[20px]'>
            <div className='w-[97%] flex flex-col items-center gap-[24px]'>
                <div className='w-full flex items-center justify-between mt-[32px]'>
                    <Link to={'/hireformusdetail'} className='flex items-center'> <IoIosArrowBack /> Back</Link>
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
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Organization Name</label>
                        <input onChange={(e)=>{setOrganization(e.target.value)}} value={organization} type="text" placeholder='Organization Name' className='bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
                    </div>
                    <div className='w-[49%] flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Job Position</label>
                        <input onChange={(e)=>{setPosition(e.target.value)}} value={position} type="text" placeholder='Job Position' className='bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
                    </div>
                </div>
                {/* --------------------------------------------------------------- */}
                <div className='w-full flex justify-between'>
                    <div className='w-full flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Required Skills</label>
                        <input onChange={(e)=>{setSkills(e.target.value)}} value={skills} type="text" placeholder='Required Skills' className='bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
                    </div>
                </div>
                {/* -------------------------------------------------------- */}
                <div className='w-full flex justify-between'>
                    <div className='w-full flex flex-col gap-[8px]'>
                        <label htmlFor="" className='text-[20px] text-[#718096]'>Upload Job Discription</label>
                        <p>{existingDocument}</p>
                        <input onChange={(e)=>{setNewDocument(e.target.files[0])}}  type="file" placeholder='Required Skills' className='bg-[#F4F4F4] border-[1px] border-[#CBD5E0] rounded-[12px] text-[18px] text-[#2D2D2D] font-[400] py-[14px] px-[16px]' />
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

export default HireFromusView