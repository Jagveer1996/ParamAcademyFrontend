import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import JoditEditor from 'jodit-react';
import HeaderAdmin from './HeaderAdmin';
import { useMutation } from '@tanstack/react-query';
import { createCourseApi } from '../../api/courses/courseApi';
import AddCategory from './addCategory';
import ViewCategory from './ViewCategory';





const AddCourse = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [isViewOpen, setIsViewOpen] = useState(false);


    const editor = useRef(null);
    const [content, setContent] = useState('');

    const [category, setCategory] = useState([]);
    const [selectcategory, setSelectCategory] = useState([]);
    const [cname, setCname] = useState("");
    const [description, setDescription] = useState("");
    const [cimage, setCimage] = useState("");
    const [tlecture, setTlecture] = useState("");
    const [duration, setDuration] = useState("");
    const [language, setLanguage] = useState("");
    const [clevel, setClevel] = useState("");
    const [certificate, serCertificate] = useState("");
    const [assessment, setAssessment] = useState("");
    const [overview, setOverview] = useState("");
    const [clearning, setClearning] = useState("");

    useEffect(() => {
        fetch(`http://localhost:8000/api/category/all`)
            .then((response) => response.json())
            .then((data) => {
                // console.log("Category!!!!!!!!!!1", data.data);
                setCategory(data.data);
            })
    }, []);

    const { mutate } = useMutation({
        mutationFn: createCourseApi,
        onSuccess: (res) => {
            console.log(res);
            navigate('/managecourse');
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

        mutate(formData);
    }

    console.log("first", cimage)

    return (
        <>
            <HeaderAdmin pageName="AddCourse" />
            <div className=' w-[96%] rounded-[20px] shadow-2xl flex justify-center my-[20px]'>
                <div className='w-[97%] flex flex-col items-center gap-[47px]'>
                    <div className='w-full flex items-center justify-between mt-[32px]'>
                        <Link onClick={() => navigate(-1)} className='flex items-center'> <IoIosArrowBack /> Back</Link>
                        <button onClick={() => setIsOpen(true)}
                            className='bg-[#3E5388] rounded-[5px] py-[10px] px-[16px] text-white text-[18px] font-[400] cursor-pointer'>+ Add Category</button>
                    </div>
                    {/* --------------------------------------------------- */}
                    <div className='w-full flex justify-between'>
                        <div className='w-[49%] flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Course Name</label>
                            <input onChange={(e) => { setCname(e.target.value) }} type="text" placeholder='Enter Course Name' className='border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]' />
                        </div>
                        <div className='w-[49%] flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Category</label>
                            <select onChange={(e) => { setSelectCategory(e.target.value) }} name="" id="" className='border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]'>
                                {
                                    category && category?.map((item, index) => (
                                        <option value={item.id} key={index}>{item.categoryname}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    {/* -------------------------------------------------------------- */}
                    <div className='w-full flex justify-between'>
                        <div className='w-[49%] flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Description</label>
                            <textarea onChange={(e) => { setDescription(e.target.value) }} name="" id="" placeholder='Write a description for this course' className='h-[200px] border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]'  ></textarea>
                        </div>
                        <div className='w-[49%] flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Upload Image</label>
                            <div onClick={() => { document.getElementById('image-input').click() }} className='h-[200px] flex flex-col items-center justify-center border-dashed border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]'>
                                <input onChange={(e) => { setCimage(e.target.files[0]) }} type="file" id='image-input' className='hidden w-full h-full' />

                                {cimage
                                    ?

                                    <img src={URL.createObjectURL(cimage)} alt="" className='w-full h-full' />
                                    :
                                    <>

                                        <label htmlFor="image-input">
                                            <FaCloudUploadAlt className='w-[58px] h-[40px] text-[#3972EF]' />

                                        </label>
                                        <p className='text-[20px] text-[#B1B5BB] font-[400]'>Drag & Drop or Browse </p>
                                    </>

                                }

                            </div>
                        </div>
                    </div>
                    {/* ----------------------------------------------------------- */}
                    <div className='w-full flex justify-between gap-[20px]'>
                        <div className='flex flex-col flex-1 gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Total Lectures</label>
                            <input onChange={(e) => { setTlecture(e.target.value) }} type="text" placeholder='Enter No of Lectures' className='border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]' />
                        </div>
                        <div className='flex flex-col flex-1 gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Course Duration</label>
                            <input onChange={(e) => { setDuration(e.target.value) }} type="text" placeholder='Select Duration' className='border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]' />
                        </div>
                        <div className='flex flex-col flex-1 gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Language</label>
                            <input onChange={(e) => { setLanguage(e.target.value) }} type="text" placeholder='Enter Course Language' className='border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]' />
                        </div>
                    </div>
                    {/* ------------------------------------------------------------- */}
                    <div className='w-full flex justify-between gap-[20px]'>
                        <div className='flex flex-col flex-1 gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Course Level</label>
                            <div className='text-[20px] text-[#4A5660] flex gap-[10px]'>
                                <input onChange={(e) => { setClevel(e.target.value) }} value='Beginner' type="radio" name="course" id="" />
                                <label htmlFor="">Beginner</label>

                                <input onChange={(e) => { setClevel(e.target.value) }} value='Intermediate' type="radio" name="course" id="" />
                                <label htmlFor="">Intermediate</label>

                                <input onChange={(e) => { setClevel(e.target.value) }} value='Advance' type="radio" name="course" id="" />
                                <label htmlFor="">Advance</label>
                            </div>
                        </div>
                        <div className='flex flex-col flex-1 gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Does this Course provide certificate?</label>
                            <div className='text-[20px] text-[#4A5660] flex gap-[10px]'>
                                <input onChange={(e) => { serCertificate(e.target.value) }} value='yes' type="radio" name="certificate" id="" />
                                <label htmlFor="">Yes</label>

                                <input onChange={(e) => { serCertificate(e.target.value) }} value='no' type="radio" name="certificate" id="" />
                                <label htmlFor="">No</label>
                            </div>
                        </div>
                        <div className='flex flex-col flex-1 gap-[8px]' >
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Does this Course have assessments?</label>
                            <div className='text-[20px] text-[#4A5660] flex gap-[10px]'>
                                <input type="radio" name="assessments" id="" />
                                <label onChange={(e) => { setAssessment(e.target.value) }} value='yes' htmlFor="">Yes</label>

                                <input onChange={(e) => { setAssessment(e.target.value) }} value='no' type="radio" name="assessments" id="" />
                                <label htmlFor="">No</label>
                            </div>
                        </div>
                    </div>
                    {/* --------------------------------------------------------------- */}
                    <div className='w-full flex justify-between gap-[20px]'>
                        <div className='flex flex-col flex-1 gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Course Overview</label>
                            <input onChange={(e) => { setOverview(e.target.value) }} type="text" placeholder='Write the course overview here...' className='border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]' />
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
                        <button onClick={handleSubmit} className='bg-[#3E5388] rounded-[5px] py-[10px] px-[20px] text-white text-[18px] font-[400]'>Add</button>
                        <button className='border-[1px] border-[#3E5388] rounded-[5px] py-[10px] px-[20px] text-[#3E5388] text-[18px] font-[400]'>Cancel</button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <AddCategory setIsOpen={setIsOpen} setIsViewOpen={setIsViewOpen} />
            )}
            {/* ----------------------------------------------------------------------------- */}

            {
                isViewOpen && (
                    <ViewCategory setIsViewOpen={setIsViewOpen} />
                )
            }
        </>
    )
}

export default AddCourse