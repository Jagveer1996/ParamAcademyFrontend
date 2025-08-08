import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteWorkWithusAPI, getWorkWithusAPI } from '../../api/workWithus/workWithusAPI';


const WorkWithusDetail = () => {


    const {data, isLoading, isError, refetch} = useQuery({
        queryKey : ['getWorkWithusAPI'],
        queryFn : getWorkWithusAPI
    })

    // console.log("work with us get API", data?.data[0]);

    const {mutate} = useMutation({
        mutationFn : deleteWorkWithusAPI,
        onSuccess : (res)=>{
            refetch();
            console.log("Delete API",res);
        }
    });

    function handleDelete(id){
        console.log("delete work with us", id)

        mutate(id)
    }

    return (
        <>
            <HeaderAdmin pageName="Work With Us" />
            <div className=' w-[96%] rounded-[20px] shadow-2xl flex justify-center my-[20px]' >
                <div className='w-[97%] flex flex-col items-center gap-[47px]' >
                    <div className='w-full flex items-center justify-between mt-[32px]'>
                        <Link to={'/dashboard'} className='flex items-center'> <IoIosArrowBack /> Back</Link>
                        <button className='bg-[#3E5388] rounded-[5px] py-[10px] px-[16px] text-white text-[18px] font-[400]'>+ Add FAQ</button>
                    </div>
                    {/* ---------------------------------------------- */}

                    <div className='w-full flex items-center justify-center'>
                        <table className='w-full'>
                            <tr className='bg-[#F8F3EF]'>
                                <th className='text-[20px] text-[#2D2D2D] p-[10px] text-left' >First Name</th>
                                <th className='text-[20px] text-[#2D2D2D] p-[10px] text-left '>Last Name</th>
                                <th className='text-[20px] text-[#2D2D2D] p-[10px] text-left ' >Phone no.</th>
                                <th className='text-[20px] text-[#2D2D2D] p-[10px] text-left ' >Email</th>
                                <th className='text-[20px] text-[#2D2D2D] p-[10px] text-left ' >Teaching Exp</th>
                                <th></th>
                            </tr>

                            {
                                data?.data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='py-[16px] px-[10px] text-[20px] text-[#2D2D2D] font-[400]'>
                                                {item.fname}
                                            </td>
                                            <td className='py-[16px] px-[10px] text-[20px] text-[#2D2D2D] font-[400]'>
                                                {item.lname}
                                            </td>
                                            <td className='py-[16px] px-[10px] text-[20px] text-[#2D2D2D] font-[400]'>
                                                {item.phone_no}
                                            </td>
                                            <td className='py-[16px] px-[10px] text-[20px] text-[#2D2D2D] font-[400]'>
                                                {item.email}
                                            </td>
                                            <td className='py-[16px] px-[10px] text-[20px] text-[#2D2D2D] font-[400]'>
                                                {item.teaching_experience}
                                            </td>
                                            <td className='py-[16px] px-[10px] flex items-center justify-between gap-[20px]'>
                                                {/* <HiOutlineDotsVertical  className='text-[30px]' /> */}
                                                {/* <button to={`/inquiryview/${item._id}`} className='text-[30px] text-[#72d896] '>
                                                            <FaRegEdit /> </button> */}
                                                <Link to={`/workwithusview/${item.id}`} className='text-[30px] text-[#72c0d8]'>
                                                    <FaRegEdit />
                                                </Link>

                                                <button onClick={() => handleDelete(item.id)} className='text-[30px] text-[#D8727D]'>
                                                    <MdOutlineDeleteForever />
                                                </button>


                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </table>

                    </div>


                </div>
            </div>
        </>
    )
}

export default WorkWithusDetail