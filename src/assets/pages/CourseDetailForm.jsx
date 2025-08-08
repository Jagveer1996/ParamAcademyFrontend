import React, { useState } from 'react'
import { createCourseApi } from '../../api/courses/courseApi';
import { useMutation } from '@tanstack/react-query';

const CourseDetailForm = () => {

     const {mutate , isLoading} = useMutation({
        mutationFn :  createCourseApi,
        onSuccess : (res) => {
          console.log("*******",res)
        }
      })

    const [courseTitle, setCourseTitle] = useState("");
    const [discription, setDiscription] = useState("");
    const [overview, setOverview] = useState("");
    const [learning, setLearning] = useState("");
    const [image, setImage] = useState("");
    const [course_level, setCourse_level] = useState("");
    const [course_duration, setCourse_duration] = useState("");
    const [course_lectures, setCourse_lectures] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        let formData = new FormData();

        formData.append("courseTitle", courseTitle);
        formData.append("discription", discription);
        formData.append("overview", overview);
        formData.append("learning", learning);
        formData.append("image", image);
        formData.append("course_level", course_level);
        formData.append("course_duration", course_duration);
        formData.append("course_lectures", course_lectures);

        mutate(formData)

    }

    return (
        <>
            <div className='w-full flex justify-center items-center'>
                <div className='w-[70%] flex flex-col items-center h-full'>
                    <h3>Course Detail form</h3>
                    <form action="" className='w-full' onSubmit={handleSubmit}>
                    <div className='w-full flex flex-col items-center'>
                        <div className='w-full flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#718096]'>Course Title</label>
                            <input onChange={(e)=>{setCourseTitle(e.target.value)}} type="text" placeholder='example@gmail.com' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                        </div>
                        <div className='w-full flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#718096]'>discription</label>
                            <input onChange={(e)=>{setDiscription(e.target.value)}} type="text" placeholder='discription' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                        </div>
                        <div className='w-full flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#718096]'>overview</label>
                            <input onChange={(e)=>{setOverview(e.target.value)}} type="text" placeholder='overview' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                        </div>
                        <div className='w-full flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#718096]'>learning</label>
                            <input onChange={(e)=>{setLearning(e.target.value)}} type="text" placeholder='learning' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                        </div>
                        <div className='w-full flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#718096]'>image</label>
                            <input onChange={(e)=>{setImage(e.target.files[0])}} type="file" placeholder='image' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                        </div>
                        <div className='w-full flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#718096]'>course_level</label>
                            <input onChange={(e)=>{setCourse_level(e.target.value)}} type="text" placeholder='course_level' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                        </div>
                        <div className='w-full flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#718096]'>course_duration</label>
                            <input onChange={(e)=>{setCourse_duration(e.target.value)}} type="text" placeholder='course_level' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                        </div>
                        <div className='w-full flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#718096]'>course_lectures</label>
                            <input onChange={(e)=>{setCourse_lectures(e.target.value)}} type="text" placeholder='course_level' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                        </div>

                        <button type='submit' className='bg-[#3972EF] rounded-[57px] py-[16px] text-[24px] text-white'>Send</button>
                    </div>
                    </form>
                </div>


            </div>
        </>
    )
}

export default CourseDetailForm