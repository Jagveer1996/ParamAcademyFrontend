import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import JoditEditor from 'jodit-react';
import HeaderAdmin from './HeaderAdmin';
import { useMutation, useQuery } from '@tanstack/react-query';
import { editCourseApiID, getCourseApiID } from '../../api/courses/courseApi';
import {BASEURL} from '../../global' 

const EditCourse = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [cname, setCname] = useState("");
    const [selectcategory, setSelectcategory] = useState("");
    const [description, setDescription] = useState("");
    const [cimage, setCimage] = useState([]);
    const [tlecture, setTlecture] = useState("");
    const [duration, setDuration] = useState("");
    const [language, setLanguage] = useState("");
    const [clevel, setClevel] = useState("");
    const [certificate, serCertificate] = useState("");
    const [assessment, setAssessment] = useState("");
    const [overview, setOverview] = useState("");
    const [clearning, setClearning] = useState("");

    const { data, isSuccess, isError, error } = useQuery({
        queryKey: ['getCourseApiID', id],
        queryFn: () => getCourseApiID(id),
        enabled: !!id
    })

    console.log("getCourseApiID", data?.data[0]);

    useEffect(()=>{
        setCname(data?.data[0].courseTitle);
        setSelectcategory(data?.data[0].category_id);
        setDescription(data?.data[0].discription);
        setCimage(data?.data[0].image);
        setTlecture(data?.data[0].course_lectures);
        setDuration(data?.data[0].course_duration);
        setLanguage(data?.data[0].course_launguage);
        setClevel(data?.data[0].course_level);
        serCertificate(data?.data[0].course_certificate);
        setAssessment(data?.data[0].course_assessments);
        setOverview(data?.data[0].overview);
    }, [data])

    const { mutate } = useMutation({
        mutationFn: editCourseApiID,
        onSuccess: (res) => {
            console.log(res);
            navigate('/managecourse')
        }
    })

    function handleSubmit() {
        const formData = new FormData();

        formData.append("courseTitle", cname);
        formData.append("category_id", selectcategory);
        formData.append("discription", description);
        formData.append("image", cimage);
        formData.append("course_lectures", tlecture);
        formData.append("course_duration", duration);
        formData.append("course_launguage", language);
        formData.append("course_level", clevel)
        formData.append("course_certificate", certificate);
        formData.append("course_assessments", assessment)
        formData.append("overview", overview);

        mutate({ id, formData });
    }
    return (
        <>
            <HeaderAdmin pageName="Edit Course" />
            <div className=' w-[96%] rounded-[20px] shadow-2xl flex justify-center my-[20px]'>
                <div className='w-[97%] flex flex-col items-center gap-[47px]'>
                    <div className='w-full flex items-center justify-between mt-[32px]'>
                        <Link onClick={()=>navigate(-1)} className='flex items-center'> <IoIosArrowBack /> Back</Link>
                    </div>
                    {/* --------------------------------------------------- */}
                    <div className='w-full flex justify-between'>
                        <div className='w-[49%] flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Course Name</label>
                            <input onChange={(e) => { setCname(e.target.value) }} value={cname} type="text" placeholder='Enter Course Name' className='border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]' />
                        </div>
                        <div className='w-[49%] flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Category</label>
                            <input onChange={(e)=>{setSelectcategory(e.target.value)}} value={selectcategory} type="text" placeholder='Select category' className='border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]' />
                        </div>
                    </div>
                    {/* -------------------------------------------------------------- */}
                    <div className='w-full flex justify-between'>
                        <div className='w-[49%] flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Description</label>
                            <textarea onChange={(e) => { setDescription(e.target.value) }} value={description} name="" id="" placeholder='Write a description for this course' className='h-[200px] border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]'  ></textarea>
                        </div>
                        <div className='w-[49%] flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Upload Image</label>
                            <div className='h-[200px] flex flex-col items-center justify-center border-dashed border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]'>

                                <label htmlFor="image-input">
                                    <FaCloudUploadAlt className='w-[58px] h-[40px] text-[#3972EF]' />
                                </label>
                                <input onChange={(e) => { setCimage(e.target.files[0]) }} type="file" id='image-input' className='hidden' />
                                <p className='text-[20px] text-[#B1B5BB] font-[400]'>Drag & Drop or Browse {cimage && cimage.name}</p>

                            </div>
                        </div>
                    </div>
                    {/* ----------------------------------------------------------- */}
                    <div className='w-full flex justify-between gap-[20px]'>
                        <div className='flex flex-col flex-1 gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Total Lectures</label>
                            <input onChange={(e) => { setTlecture(e.target.value) }} value={tlecture} type="text" placeholder='Enter No of Lectures' className='border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]' />
                        </div>
                        <div className='flex flex-col flex-1 gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Course Duration</label>
                            <input onChange={(e) => { setDuration(e.target.value) }} value={duration} type="text" placeholder='Select Duration' className='border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]' />
                        </div>
                        <div className='flex flex-col flex-1 gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Language</label>
                            <input onChange={(e) => { setLanguage(e.target.value) }} value={language} type="text" placeholder='Enter Course Language' className='border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]' />
                        </div>
                    </div>
                    {/* ------------------------------------------------------------- */}
                    <div className='w-full flex justify-between gap-[20px]'>
                        <div className='flex flex-col flex-1 gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Course Level</label>
                            <div className='text-[20px] text-[#4A5660] flex gap-[10px]'>
                                <input checked={clevel == 'Beginner'} onChange={(e) => { setClevel(e.target.value) }} value='Beginner' type="radio" name="course" id="" />
                                <label htmlFor="">Beginner</label>

                                <input checked={clevel == 'Intermediate'} onChange={(e) => { setClevel(e.target.value) }} value='Intermediate' type="radio" name="course" id="" />
                                <label  htmlFor="">Intermediate</label>

                                <input checked={clevel == 'Advance'} onChange={(e) => { setClevel(e.target.value) }} value='Advance' type="radio" name="course" id="" />
                                <label htmlFor="">Advance</label>
                            </div>
                        </div>
                        <div className='flex flex-col flex-1 gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Does this Course certificate?</label>
                            <div className='text-[20px] text-[#4A5660] flex gap-[10px]'>
                                <input checked={certificate == 'Yes'} onChange={(e) => { serCertificate(e.target.value) }} value='yes' type="radio" name="certificate" id="" />
                                <label htmlFor="">Yes</label>

                                <input checked={certificate == 'no'} onChange={(e) => { serCertificate(e.target.value) }} value='no' type="radio" name="certificate" id="" />
                                <label htmlFor="">No</label>
                            </div>
                        </div>
                        <div className='flex flex-col flex-1 gap-[8px]' >
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Does this Course have assessments?</label>
                            <div className='text-[20px] text-[#4A5660] flex gap-[10px]'>
                                <input checked={assessment == 'yes'} onChange={(e) => { setAssessment(e.target.value) }} value='yes' type="radio" name="assessments" id="" />
                                <label  htmlFor="">Yes</label>

                                <input checked={assessment == 'no   '} onChange={(e) => { setAssessment(e.target.value) }} value='no' type="radio" name="assessments" id="" />
                                <label htmlFor="">No</label>
                            </div>
                        </div>
                    </div>
                    {/* --------------------------------------------------------------- */}
                    <div className='w-full flex justify-between gap-[20px]'>
                        <div className='flex flex-col flex-1 gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Course Overview</label>
                            <input onChange={(e) => {setOverview(e.target.value) }} value={overview} type="text" placeholder='Write the course overview here...' className='border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]' />

                        </div>
                    </div>
                    {/* ------------------------------------------------------------ */}
                    <div className='w-full flex justify-between gap-[20px]'>
                        <div className='flex flex-col flex-1 gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>What you'll learn in this course?</label>
                            <JoditEditor
                                ref={editor}
                                value='content'
                                onChange={newContent => setContent(newContent)}
                            />
                        </div>
                    </div>
                    {/* ------------------------------------------------------------- */}
                    <div className='w-full flex justify-center mt-[60px] mb-[20px] gap-[20px]'>
                        <button onClick={handleSubmit} className='bg-[#3E5388] rounded-[5px] py-[10px] px-[20px] text-white text-[18px] font-[400]'>Update</button>
                        <button className='border-[1px] border-[#3E5388] rounded-[5px] py-[10px] px-[20px] text-[#3E5388] text-[18px] font-[400]'>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditCourse