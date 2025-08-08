import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import cardtop1 from "./IMAGE/cardtop1.png"
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteCourseApi, getCourseApi } from '../../api/courses/courseApi';
import { BASEURL ,AccessToken} from '../../global';
import { CgLayoutGrid } from 'react-icons/cg';


const ManageCourse = () => {
    const navigate = useNavigate();


    const { data, isError, error, refetch } = useQuery({
        queryKey: ['getCourseApi'],
        queryFn: ()=>getCourseApi(AccessToken)
    })

    console.log("getCourseApi", data)

    // const imageUrl = `${process.env.REACT_APP_API_URL}/uploads/${data?.data.image}`;
    // console.log("image URL", imageUrl)


    const {mutate} = useMutation({
        mutationFn : deleteCourseApi,
        onSuccess : (res)=>{
            console.log(res);
            refetch()
        }
    })

    

    function handleDelete(id){
        console.log("delete", id)
        mutate(id)
    }

    return (
        <>
            <HeaderAdmin pageName="Manage Website" />
            <div className=' w-[96%] rounded-[20px] shadow-2xl flex justify-center my-[20px]'>
                <div className='w-[97%] flex flex-col items-center gap-[47px] pb-[30px]'>
                    <div className='w-full flex items-center justify-between mt-[32px]'>
                        <Link to={'/dashboard'} className='flex items-center'> <IoIosArrowBack /> Back</Link>
                        <button className='bg-[#3E5388] rounded-[5px] py-[10px] px-[16px] text-white text-[18px] font-[400]'>+ Add Category</button>
                    </div>
                    {/* ------------------------------------------------ */}

                    <div className='flex items-center gap-[20px] flex-wrap'>
                        <div className='w-[359px] h-[460px] flex flex-col items-center justify-center  gap-[24px] p-[16px] border-[1px] rounded-[15px]'>
                            <button onClick={() => navigate('/addcourse')} type='submit' className='w-[124px] h-[124px] rounded-[50%] bg-[#3E5388] text-white text-[50px] cursor-pointer' >+</button>
                            <p className='text-[18px]'>Add New Course</p>
                        </div>

                        {
                            data?.data.map((item, index) => {
                                console.log(`${BASEURL}/uploads/courseImage/${item.image}`)
                                return (
                                    <div key={index} className='w-[359px] h-[460px] flex flex-col gap-[24px] p-[16px] border-[1px] rounded-[15px]'>
                                        <img src={`${BASEURL}/${item.image}`} className='w-[327px] max-w-[327px] max-h-[220px] h-[220px] rounded-[15px]' />
                                        <p className='border-[1px] border-[#9AB4EE] bg-[#eceff7] py-[10px] px-[16px] rounded-[50px] text-[16px] text-[#3F5489]'>{item.categoryname}</p>
                                        <p className='text-[18px] text-[#2D2D2D] font-[400]'>{item.courseTitle}</p>
                                        <div className='flex items-center gap-[20px] text-[24px]'>
                                            <Link to={`/viewcourse/${item.course_id}`}>
                                                <FaEye className='text-[#2D2D2D]' />
                                            </Link>

                                            <Link to={`/editcourse/${item.course_id}`}>
                                                <FaRegEdit className='text-[#2D2D2D]' />
                                            </Link>
                                            <button onClick={()=>handleDelete(item.id)} type='submit' className='text-[#D8727D]' >
                                                <RiDeleteBin6Line />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className='w-[359px] h-[460px] flex flex-col gap-[24px] p-[16px] border-[1px] rounded-[15px]'>
                            <img src={cardtop1} className='w-[327px] h-[220px] max-w-[327px] max-h-[220px] min-h-[220px] rounded-[15px]' />
                            <p className='border-[1px] border-[#9AB4EE] bg-[#eceff7] py-[10px] px-[16px] rounded-[50px] text-[16px] text-[#3F5489]'>Artificiall Intelligence</p>
                            <p className='text-[18px] text-[#2D2D2D] font-[400]'>Introduction to Machine Learning using Python (Linear Regression)</p>
                            <div className='flex items-center gap-[20px] text-[24px]'>
                                <FaEye className='text-[#2D2D2D]' />
                                <FaRegEdit className='text-[#2D2D2D]' />
                                <RiDeleteBin6Line className='text-[#D8727D]' />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default ManageCourse