import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { createCategory } from '../../api/category/categoryApi';
import { useNavigate } from 'react-router-dom';

const AddCategory = ({setIsOpen,setIsViewOpen}) => {

        const navigate = useNavigate();

        const [addCategory, setAddCategory] = useState('');

        const {mutate, isLoading, isError, error} = useMutation({
            mutationFn : createCategory,
            onSuccess : (res)=>{
                console.log(res);
                navigate('/managecourse')
            }
        });

        function handleSubmit(){
            const formData = new FormData();

            formData.append("categoryname", addCategory);

            mutate(formData);
        }
    
  return (
    <>
        <div className="fixed inset-5 bg-opacity-50 flex items-center justify-center z-20">
                            <div className="bg-white p-6 rounded shadow-lg w-150 flex flex-col justify-center gap-[20px]">
                                <div className='flex justify-between items-center'>
                                    <h2 className="text-xl font-semibold mb-4">Add Category</h2>
                                    <button onClick={() => setIsViewOpen(true)} className='bg-[#3E5388] rounded-[5px] py-[10px] px-[16px] text-white font-[400] cursor-pointer'>View Category</button>
        
                                </div>
                                <div className='flex flex-col flex-1 gap-[8px]'>
                                    <label htmlFor="" className='text-[20px] text-[#4A5660]'>Category Name</label>
                                    <input onChange={(e) => setAddCategory(e.target.value)} type="text" placeholder="Enter category name" className='border-[1px] border-[#CBD5E0] text-[16px] font-[400] p-[16px] rounded-[12px]' />
                                </div>
        
                                <div className="flex gap-[15px] justify-center">
                                    <button onClick={handleSubmit} className='bg-[#3E5388] rounded-[5px] px-[20px] py-[10px] text-white font-[400] cursor-pointer'>Create</button>
                                    <button onClick={() => setIsOpen(false)} className='border-[1px] border-[#3E5388] rounded-[5px] px-[20px] py-[10px] text-[#3E5388] text-[18px] font-[400] cursor-pointer'> Cancel </button>
                                </div>
                            </div>
                        </div>
    </>
  )
}

export default AddCategory