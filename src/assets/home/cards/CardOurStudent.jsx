import React from 'react'

import student1 from '../../images/student1.png'

const CardOurStudent = () => {
    return (
        <>
            <div className='h-[226px] w-[550px] rounded-[10px] border-[1px] border-[#E3EAB9] border-l-[10px] flex items-center mx-[10px]'>
                <div className='flex px-[20px]'>
                    <img src={student1} className='w-[118px] rounded-[100%] px-[10px]' alt="" />
                    <p className='text-[20px] font-[400] text-justify'>Param Academy truly transformed my learning journey. The teachers are supportive, and the flexible timings made it easy for me to manage studies with my job.</p>
                    <i className="fa-solid fa-quote-right text-[#E3EAB9] text-[28px]"></i>
                </div>
            </div>
        </>
    )
}

export default CardOurStudent