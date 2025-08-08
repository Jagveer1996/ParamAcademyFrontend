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
import { deleteAppointmentApi, getAppointmentApiAll } from '../../api/appointment/appointment';

const AppointmentDetail = () => {

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['getAppointmentApiAll'],
        queryFn: getAppointmentApiAll
    })

    // console.log("frontend data", data?.data[1].date);

    const {mutate} = useMutation({
        mutationFn : deleteAppointmentApi,
        onSuccess : (res)=>{
            console.log("deleteAppointmentApi", res);
            refetch();
        }
    })

    function handleDelete(id){
        mutate(id)
    }

    return (
        <>
            <HeaderAdmin pageName="Appointment" />
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
                                <th className='text-[20px] text-[#2D2D2D] p-[10px]' >Date</th>
                                <th className='text-[20px] text-[#2D2D2D] p-[10px] '>First Name</th>
                                <th className='text-[20px] text-[#2D2D2D] p-[10px] ' >Email</th>
                                <th className='text-[20px] text-[#2D2D2D] p-[10px] ' >Appontment Date & Time</th>
                                <th className='text-[20px] text-[#2D2D2D] p-[10px] ' >Course</th>
                                <th></th>
                            </tr>

                            {
                                data?.data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='py-[16px] px-[10px] text-[20px] text-[#2D2D2D] font-[400]'>
                                                {new Date(item.date).toLocaleDateString()}
                                    
                                            </td>
                                            <td className='py-[16px] px-[10px] text-[20px] text-[#2D2D2D] font-[400]'>
                                                {item.fname}
                                            </td>
                                            <td className='py-[16px] px-[10px] text-[20px] text-[#2D2D2D] font-[400]'>
                                                {item.email}
                                            </td>
                                            <td className='py-[16px] px-[10px] text-[20px] text-[#2D2D2D] font-[400]'>
                                                {item.created_at}
                                            </td>
                                            <td className='py-[16px] px-[10px] text-[20px] text-[#2D2D2D] font-[400]'>
                                                {item.country}
                                            </td>
                                            <td className='py-[16px] px-[10px] flex items-center justify-between gap-[20px]'>
                                                {/* <HiOutlineDotsVertical className='text-[30px]' /> */}

                                                <Link to={`/appointmentview/${item.id}`} className='text-[30px] text-[#72c0d8]'>
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

export default AppointmentDetail