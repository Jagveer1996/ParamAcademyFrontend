import React, { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query';
import { createAppointmentApi } from '../../api/appointment/appointment';
import { AccessToken } from '../../global';


const AppointmentForm = () => {

    const {mutate, isLoading} = useMutation({
       mutationFn : (data) => createAppointmentApi(data),
        onSuccess : (res) =>{
            console.log('!!!!!!!!!!!!1', res)
        }
    })

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone_no, setPhone_no] = useState("");
    const [date, setDate] = useState("");


    // -------------------------------------------------------------------

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");

    const [course, setCourse] = useState([]);
    const [selectCourse, setSelectCourse] = useState("");


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

    useEffect(()=>{
        fetch('http://localhost:8000/api/coursedetail/all', {
            headers : {
                Authorization: `Bearer ${AccessToken}`

            }
        })
        .then((response)=> response.json())
        .then((data)=>{
            setCourse(data.data.data)
            // console.log("course!!!!!!", data.data);
        })
    },[]);

    function handleSubmit(e){
        e.preventDefault();

        let formData = new FormData();

        formData.append("fname", fname);
        formData.append('lname', lname);
        formData.append('email', email);
        formData.append('course_id', selectCourse);
        formData.append('country', selectedCountry);
        formData.append('phone_no', phone_no);
        formData.append('date', date);

        mutate(formData);
    }

    // function handleSubmit(){
    //     if(fname && lname && email && selectCourse, selectedCountry, phone_no, date){
    //         if(fname.trim() && lname.trim() && selectCourse.trim() && selectedCountry.trim() && phone_no.trim() && date.trim()){
    //             mutate({fname:fname.trim(), lname:lname.trim(), email:email.trim, course_id: selectCourse.trim(), country: selectedCountry.trim(), phone_no : phone_no.trim, date:date.trim()})
    //         }    
    //     }
    // }

    return (
        <>
            <div className='w-full flex justify-center'>
                <form action="" className='w-full' onSubmit={handleSubmit}>
                <div className='w-[90%] flex flex-col gap-[47px] shadow-lg items-center p-[36px] roundes-[20px]'>
                    <div className='w-full flex justify-between gap-[20px]'>
                        <div className='flex flex-col flex-1'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660] font-[500]'>First Name <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                            <input onChange={(e)=>{setFname(e.target.value)}} type="text" placeholder='First Name' className='w-full border-[1px] border-[#CBD5E0] rounded-[12px] p-[15px]' />
                        </div>
                        <div className='flex flex-col flex-1'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660] font-[500]'>Last Name <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                            <input onChange={(e)=>{setLname(e.target.value)}} type="text" placeholder='Last Name' className='w-full border-[1px] border-[#CBD5E0] rounded-[12px] p-[15px]' />
                        </div>
                    </div>
                    {/* ------------------- */}
                    <div className='w-full flex justify-between gap-[20px]'>
                        <div className='flex flex-col flex-1'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660] font-[500]'>Email Address <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                            <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Enter Email' className='w-full border-[1px] border-[#CBD5E0] rounded-[12px] p-[15px]' />
                        </div>
                        <div className='flex flex-col flex-1'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660] font-[500]'>Course <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                            <select onChange={(e)=>{setSelectCourse(e.target.value)}} className='w-full border-[1px] border-[#CBD5E0] rounded-[12px] p-[15px]'>
                                {
                                    course.map((elm, index)=>{
                                        return(
                                            <option value={elm.id}>{elm.courseTitle}</option>
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
                            <input onChange={(e)=> {setPhone_no(e.target.value)}} type="text" placeholder='Enter Phone No' className='w-full border-[1px] border-[#CBD5E0] rounded-[12px] p-[15px]' />
                        </div>
                        <div className=' flex flex-col flex-1'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660] font-[500]'>Select Date & Time <span className='text-[#FC4A1A] text-[20px]'>*</span> </label>
                            <input onChange={(e)=>{setDate(e.target.value)}} type="datetime-local" placeholder='Select Date & Time' className='w-full border-[1px] border-[#CBD5E0] rounded-[12px] p-[15px]' />
                        </div>
                    </div>
                    {/* -------------------------------------------------- */}
                    <button type="submit" className='bg-[#3972EF] rounded-[57px] text-[#FFFDF5] text-[20px] w-[240px] h-[60px]'>Submit</button>
                </div>
                </form>
            </div>

        </>
    )
}

export default AppointmentForm