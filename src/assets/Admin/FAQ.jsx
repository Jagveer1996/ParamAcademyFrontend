import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import HeaderAdmin from './HeaderAdmin';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteFaq, getFaq } from '../../api/faq/faqApi';


const FAQ = () => {

    const navigate = useNavigate();

    const { data, isLoading, isError, error, refetch} = useQuery({
        queryKey: ['getFaq'],
        queryFn: getFaq
    });

    // console.log("FAQDATA", data?.data[0])

    const {mutate}  = useMutation({
        mutationFn : deleteFaq,
        onSuccess : (res)=>{
            console.log("delete FAQ",res);
            refetch()
        }
    })

    function handleDelete(id){
        console.log(id);
        
        mutate(id)
    }

    return (
        <>
            <HeaderAdmin pageName="FAQ" />
            <div className=' w-[96%] rounded-[20px] shadow-2xl flex justify-center my-[20px]'>
                <div className='w-[97%] flex flex-col items-center gap-[47px]' >
                    <div className='w-full flex items-center justify-between mt-[32px]'>
                        <Link to={'/dashboard'} className='flex items-center'> <IoIosArrowBack /> Back</Link>
                        <button onClick={()=>navigate('/addfaq')}  className='bg-[#3E5388] rounded-[5px] py-[10px] px-[16px] text-white text-[18px] font-[400] cursor-pointer'>+ Add FAQ</button>
                    </div>
                    {/* ------------------------------------------------- */}
                    <div className='w-full flex items-center justify-center'>
                        <table className='w-full'>
                            <tr className='bg-[#F8F3EF]'>
                                <th></th>
                                <th className='text-[20px] text-[#2D2D2D] p-[10px] '>Questions</th>
                                <th className='text-[20px] text-[#2D2D2D] p-[10px] ' >Answers</th>
                                <th></th>
                            </tr>
                            {
                                data?.data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='py-[16px] px-[10px]'>
                                                <PiDotsSixVerticalBold className='text-[#C6C6C6] text-[40px]' />
                                            </td>
                                            <td className='py-[16px] px-[10px] text-[20px] text-[#2D2D2D] font-[400]'>
                                                {item.question}
                                            </td>
                                            <td className='py-[16px] px-[10px] text-[20px] text-[#2D2D2D] font-[400]'>
                                                {item.answer}
                                            </td>
                                            <td className='py-[16px] px-[10px] flex items-center justify-between gap-[20px]'>
                                                <Link to={`/editfaq/${item.id}`}>
                                                    <FaRegEdit className='text-[30px]' />
                                                </Link>

                                                <button onClick={() => handleDelete(item.id)} className='text-[30px] text-[#D8727D]'>
                                                <RiDeleteBinLine/>
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

export default FAQ