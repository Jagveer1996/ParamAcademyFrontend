import React, { useState } from 'react'

const Accordion = ({items}) => {

    let [show, setShow] = useState(false);

    return (
        <>
            <div className='w-full  flex flex-col '>
                <div className='flex justify-between'>
                    <p className='text-[24px] font-[500] text-[#333333]'>{items.question}</p>
                    <p onClick={()=> setShow(!show)} className='text-[24px] text-[#333333]'>{show ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</p>
                </div>
                <div>
                    { show && <p className='text-[20px] bg-[#F2EBFD] text-[#5A5365] font-[400]'>{items.answer }</p> }
                </div>
            </div>
        </>
    )
}

export default Accordion