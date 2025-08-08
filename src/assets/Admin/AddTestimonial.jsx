import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import JoditEditor from 'jodit-react';
import HeaderAdmin from './HeaderAdmin';


const AddTestimonial = () => {

    const editor = useRef(null);
    const [content, setContent] = useState("");

    return (
        <>
            <HeaderAdmin pageName= "Add Testimonial" />
            <div className=' w-[96%] rounded-[20px] shadow-2xl flex justify-center my-[20px]'>
                <div className='w-[97%] flex flex-col items-center gap-[47px] my-[32px]'>
                    <div className='w-full flex items-center justify-between'>
                        <Link className='flex items-center'> <IoIosArrowBack /> Back</Link>
                    </div>
                    {/* ---------------------------------------- */}
                    <div className='w-full flex justify-between'>
                        <div className='w-[49%] flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Testimonial</label>
                            <JoditEditor
                                className='rounded-[5px] border-[1px] border-[#D2D2D2]'
                                ref={editor}
                                value='content'
                                onChange={newContent => setContent(newContent)}
                            />
                        </div>
                        <div className='w-[49%] flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Upload Image</label>
                            <div className='h-[200px] flex flex-col items-center justify-center border-dashed border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]'>

                                <FaCloudUploadAlt className='w-[58px] h-[40px] text-[#3972EF]' />
                                <p className='text-[20px] text-[#B1B5BB] font-[400]'>Drag & Drop or Browse</p>

                            </div>
                        </div>
                    </div>
                    {/* ---------------------------------------------- */}
                    <div className='w-full flex justify-center mt-[60px] mb-[20px] gap-[20px]'>
                        <button className='bg-[#3E5388] rounded-[5px] py-[10px] px-[20px] text-white text-[18px] font-[400]'>Add</button>
                        <button className='border-[1px] border-[#3E5388] rounded-[5px] py-[10px] px-[20px] text-[#3E5388] text-[18px] font-[400]'>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTestimonial