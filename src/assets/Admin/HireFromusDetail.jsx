import React from 'react'
import { Link } from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin'
import { IoIosArrowBack } from "react-icons/io";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useMutation, useQuery } from '@tanstack/react-query';
import { MdOutlineDeleteForever } from "react-icons/md";
import { deleteHireFromusAPI, getHireFromusAPIAll } from '../../api/hireWithus/hireFromusAPI';

const HireFromusDetail = () => {

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['getHireFromusAPIAll'],
        queryFn: getHireFromusAPIAll
    })

    // console.log("frontend data", data?.data);

    const {mutate} = useMutation({
        mutationFn : deleteHireFromusAPI,
        onSuccess : (res)=>{
            console.log("deleteHireFromusAPI", res);
            refetch();
        }
    })

    function handleDelete(id){
        console.log("delete id", id)
        mutate(id)
    }

    return (
        <>
            <HeaderAdmin pageName="Hire From Us" />
            <div className=' w-[96%] rounded-[20px] shadow-2xl flex justify-center my-[20px]' >
                <div className='w-[97%] flex flex-col items-center gap-[47px]' >
                    <div className='w-full flex items-center justify-between mt-[32px]'>
                        <Link to={'/dashboard'} className='flex items-center'> <IoIosArrowBack /> Back</Link>
                        <button className='bg-[#3E5388] rounded-[5px] py-[10px] px-[16px] text-white text-[18px] font-[400]'>+ Add FAQ</button>
                    </div>
                    {/* -------------------------------- */}
                    <div className='w-full flex items-center justify-center'>
                        <table className='w-full'>
                            <tr className='bg-[#F8F3EF]'>
                                <th className='text-[20px] text-[#2D2D2D] p-[10px]' >First Name</th>
                                <th className='text-[20px] text-[#2D2D2D] p-[10px] '>Last Name</th>
                                <th className='text-[20px] text-[#2D2D2D] p-[10px] ' >Email</th>
                                <th className='text-[20px] text-[#2D2D2D] p-[10px] ' >Job Position</th>
                                <th className='text-[20px] text-[#2D2D2D] p-[10px] ' >Organization</th>
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
                                                {item.lname}
                                            </td>
                                            <td className='py-[16px] px-[10px] text-[20px] text-[#2D2D2D] font-[400]'>
                                                {item.job_position}
                                            </td>
                                            <td className='py-[16px] px-[10px] text-[20px] text-[#2D2D2D] font-[400]'>
                                                {item.organization}
                                            </td>
                                            <td className='py-[16px] px-[10px] flex items-center justify-between gap-[20px]'>
                                                {/* <HiOutlineDotsVertical className='text-[30px]' /> */}

                                                <Link to={`/hirefromusview/${item.id}`} className='text-[30px] text-[#72c0d8]'>
                                                    <FaRegEdit />
                                                </Link>

                                                <button onClick={()=>{handleDelete(item.id)}} className='text-[30px] text-[#D8727D]'>
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

export default HireFromusDetail