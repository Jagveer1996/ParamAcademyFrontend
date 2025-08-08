import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import HeaderAdmin from './HeaderAdmin';
import { IoIosArrowBack } from "react-icons/io";
import JoditEditor from 'jodit-react';
import { useMutation } from '@tanstack/react-query';
import { createFaq } from '../../api/faq/faqApi';


const AddFAQ = () => {

    const editor = useRef(null);
    const [content, setContent] = useState(""); 
    const [question, setQuestion] = useState("");

    const {mutate} = useMutation({
        mutationFn : (data)=>createFaq(data),
        onSuccess : (res)=>{
            console.log("ADD FAQ", res);
            
        }
    })

    function handleSubmit(){
        const formData = new FormData();

        formData.append("question", question);
        formData.append("answer", content);

        mutate(formData);
    }

  return (
    <>
        <HeaderAdmin pageName= "AddFAQ" />
        <div className='w-[96%] h-[862px] rounded-[20px] shadow-2xl flex justify-center my-[20px]'>
            <div className='w-[97%] flex flex-col items-center gap-[47px] my-[32px]'>
                    <div className='w-full flex items-center justify-between'>
                        <Link to={'/faq'} className='flex items-center'> <IoIosArrowBack /> Back</Link>
                    </div>
                    {/* ---------------------------------- */}
                    <div className='w-full flex justify-between'>
                        <div className='w-full flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Questions</label>
                            <input onChange={(e)=>{setQuestion(e.target.value)}} type="text" placeholder='Enter A Question..' className='border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]' />
                        </div>
                    </div>
                    {/* ------------------------------------ */}
                    <div className='w-full flex justify-between'>
                        <div className='w-full flex flex-col gap-[8px]'>
                            <label htmlFor="" className='text-[20px] text-[#4A5660]'>Answer</label>
                            {/* <input type="text" placeholder='Enter A Question..' className='border-[1px] border-[#CBD5E0] text-[16px] text-[#B1B5BB] font-[400] p-[16px] rounded-[12px]' /> */}
                            <JoditEditor 
                                className='rounded-[5px] border-[1px] border-[#D2D2D2]'
                                ref={editor}
                                value='content'
                                onChange={newContent => setContent(newContent)}
                            />
                        </div>
                    </div>
                    {/* ---------------------------------------------- */}
                    <div className='w-full flex justify-center mt-[20px] mb-[20px] gap-[20px]'>
                        <button onClick={handleSubmit} className='bg-[#3E5388] rounded-[5px] py-[10px] px-[20px] text-white text-[18px] font-[400]'>Add</button>
                        <button className='border-[1px] border-[#3E5388] rounded-[5px] py-[10px] px-[20px] text-[#3E5388] text-[18px] font-[400]'>Cancel</button>
                    </div>
            </div>
        </div>
    </>
  )
}

export default AddFAQ