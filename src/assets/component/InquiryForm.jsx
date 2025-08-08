import React, { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query';
import {createInqueryApi} from '../../api/inquery/inqueryApi';
import { AccessToken } from '../../global';


const InquiryForm = () => {

    const { mutate, isLoading } = useMutation({
        mutationFn: (data) => createInqueryApi(data),
        onSuccess: (res) => {
            console.log("inqueryRes", res)
        }
    });


    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [education, setEducation] = useState("");
    const [status, setStatus] = useState("");
    const [checkbox, setCheckbox] = useState(false);



    // ---------------------------------------------------------------
    const [course, setCourse] = useState([]);
    const [selectCourse, setSelectCourse] = useState("");

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");


    useEffect(() => {
        fetch(
            "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
            .then((response) => response.json())
            .then((data) => {
                setCountries(data.countries);
                // setSelectedCountry(data.userSelectValue);
            });
    }, []);

    useEffect(() => {
        fetch('http://localhost:8000/api/coursedetail/all', {
            headers : {
                Authorization: `Bearer ${AccessToken}`

            }
        })
            .then((response) => response.json())
            .then((data) => {
                setCourse(data.data.data)
                // console.log("course!!!!!!", data);
            })
    }, []);

    function handleSubmit(e){
        e.preventDefault();

        let formData = new FormData();

        formData.append("fname", fname);
        formData.append("lname", lname);
        formData.append("email", email);
        formData.append("course_id", selectCourse);
        formData.append("country", selectedCountry);
        formData.append("phone_no", phoneno);
        formData.append("education", education);
        formData.append("status", status);
        formData.append("approved", checkbox ? 1 : 0);

        mutate(formData)
    }

    return (
        <>
            <div className='w-full flex  justify-center my-[100px]'>
                <form action="" className='w-full flex justify-center' onSubmit={handleSubmit}>
                    <div className='w-[90%] flex flex-col gap-[47px] shadow-lg items-center p-[36px] roundes-[20px]'>
                        <div className='w-full flex justify-between gap-[20px]'>
                            <div className='flex flex-col flex-1'>
                                <label htmlFor="" className='text-[20px] text-[#4A5660] font-[500]'>First Name <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <input onChange={(e) => { setFname(e.target.value) }} type="text" placeholder='First Name' className='w-full border-[1px] border-[#CBD5E0] rounded-[12px] p-[15px]' />
                            </div>
                            <div className='flex flex-col flex-1'>
                                <label htmlFor="" className='text-[20px] text-[#4A5660] font-[500]'>Last Name <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <input onChange={(e) => { setLname(e.target.value) }} type="text" placeholder='Last Name' className='w-full border-[1px] border-[#CBD5E0] rounded-[12px] p-[15px]' />
                            </div>
                        </div>
                        {/* ------------------- */}
                        <div className='w-full flex justify-between gap-[20px]'>
                            <div className='flex flex-col flex-1'>
                                <label htmlFor="" className='text-[20px] text-[#4A5660] font-[500]'>Email Address <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <input onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder='Enter Email' className='w-full border-[1px] border-[#CBD5E0] rounded-[12px] p-[15px]' />
                            </div>
                            <div className='flex flex-col flex-1'>
                                <label htmlFor="" className='text-[20px] text-[#4A5660] font-[500]'>Course <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <select onChange={(e) => { setSelectCourse(e.target.value) }} className='w-full border-[1px] border-[#CBD5E0] rounded-[12px] p-[15px]'>
                                    {
                                        course.map((elm, index) => {
                                            return (
                                                <option value={elm.id} key={index}>{elm.courseTitle}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        {/* ---------------------------------------- */}
                        <div className='w-full flex justify-between gap-[20px]'>
                            <div className=' flex flex-col flex-1'>
                                <label htmlFor="" className='text-[20px] text-[#4A5660] font-[500]'>Country <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <select onChange={(e) => { setSelectedCountry(e.target.value) }} className='w-full border-[1px] border-[#CBD5E0] rounded-[12px] p-[15px]'>
                                    {
                                        countries.map((element, index) => {
                                            return (
                                                <option key={index} value={element.label}>{element.label}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className=' flex flex-col flex-1'>
                                <label htmlFor="" className='text-[20px] text-[#4A5660] font-[500]'>Phone No <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <input onChange={(e) => { setPhoneno(e.target.value) }} type="text" placeholder='Enter Phone No' className='w-full border-[1px] border-[#CBD5E0] rounded-[12px] p-[15px]' />
                            </div>
                        </div>
                        <div className='w-full flex justify-between gap-[20px]'>
                            <div className='flex flex-col flex-1'>
                                <label htmlFor="" className='text-[20px] text-[#4A5660] font-[500]'>Level of Education <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <select onChange={(e) => { setEducation(e.target.value) }} className='w-full border-[1px] border-[#CBD5E0] rounded-[12px] p-[15px]'>
                                    <option value=""></option>
                                    <option value="No Formal education">No Formal education</option>
                                    <option value="High school diploma / GED">High school diploma / GED</option>
                                    <option value="Associate degree">Associate degree</option>
                                    <option value="Bachelor's degree">Bachelor's degree</option>
                                    <option value="Master's degree">Master's degree</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className='flex flex-col flex-1'>
                                <label htmlFor="" className='text-[20px] text-[#4A5660] font-[500]'>Select Status <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                                <select onChange={(e) => { setStatus(e.target.value) }} className='w-full border-[1px] border-[#CBD5E0] rounded-[12px] p-[15px]'>
                                    <option value=""></option>
                                    <option value="Student">Student</option>
                                    <option value="Self-employed">Self-employed</option>
                                    <option value="Employed">Employed</option>
                                    <option value="Unemployed">Unemployed</option>
                                    <option value="Homemaker">Homemaker</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-full flex items-center gap-[10px]'>
                            <input onChange={(e) => { setCheckbox(e.target.checked) }} type="checkbox" className='border-[2px] border-[#3972EF] rounded-[4px] w-[24px] h-[24px]' />
                            <label htmlFor="" className='text-[16px] text-[#1C1C1C] font-[400]'>I subscribe to send me update and information by email </label>
                        </div>
                        {/* -------------------------------------------------- */}
                        <button type="submit" className='bg-[#3972EF] rounded-[57px] text-[#FFFDF5] text-[20px] w-[240px] h-[60px]'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default InquiryForm