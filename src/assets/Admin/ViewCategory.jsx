import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteCategory, getCategory } from '../../api/category/categoryApi';


const ViewCategory = ({ setIsViewOpen }) => {

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['getCategory'],
        queryFn: getCategory
    });

    // console.log("viewCategory", data?.data);

    const {mutate} = useMutation({
        mutationFn : deleteCategory,
        onSuccess : (res)=>{
            refetch();
            console.log(res);
        }
    })

    function handleDelete(id){
        mutate(id)
    }

    return (
        <>
            <div className="fixed inset-1 bg-opacity-50 flex items-center justify-center z-40" >
                <div className="bg-white p-6 rounded shadow-lg w-180 flex flex-col justify-center gap-[20px]">
                    <div className='flex justify-between items-center'>
                        <h2 className="text-xl font-semibold mb-4">All Category</h2>
                        <IoMdClose onClick={() => setIsViewOpen(false)} className=' text-[30px] cursor-pointer' />
                    </div>
                    <table>
                        {
                            data?.data.map((item, index) => {
                                return (
                                    <tr>
                                        <td className='w-full py-[16px] px-[10px] text-[20px] text-[#2D2D2D] font-[400]'>{item.categoryname}</td>
                                        <td className='py-[16px] px-[10px] flex items-center justify-between gap-[20px]'>

                                            <Link  className='text-[30px] text-[#72c0d8]'>
                                                <FaRegEdit />
                                            </Link>

                                            <button onClick={()=>handleDelete(item.id)} className='text-[30px] text-[#D8727D]'>
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
        </>
    )
}

export default ViewCategory