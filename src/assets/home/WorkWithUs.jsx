import React from 'react'

import workwithus from '../images/workwithus.png'
import workwithususer from '../images/workwithususer.png'
import GetBrochure from './GetBrochure'
import ApplicationForm from '../component/ApplicationForm'
import HeroHeader from '../component/HeroHeader'

const WorkWithUs = () => {
  return (
    <>
        <HeroHeader HeroHeaderImg={workwithus} />
        <div className='w-full flex items-center justify-center mt-[100px]'>
            <div className='w-[90%] flex items-center justify-center gap-[20px] flex-wrap'>
                <div className='w-full flex flex-col flex-1 gap-[36px] text-[24px] text-[#676767] font-[400]'>
                    <div>
                        <p>At our academy, we work exclusively with active industry professionals to provide exceptional training for our students. If you are an expert in any IT field and meet the following criteria, we invite you to apply and begin your part-time journey as an IT trainer:</p>
                    </div>
                    <div className='w-full flex flex-col justify-center gap-[24px]'>
                        <p><i className="fa-solid fa-check text-[#3972EF] pr-[10px]"></i>A minimum of 2 years of professional experience in the IT industry</p>
                        <p><i className="fa-solid fa-check text-[#3972EF] pr-[10px]"></i>Strong communication and presentation skills</p>
                        <p><i className="fa-solid fa-check text-[#3972EF] pr-[10px]"></i>Availability of 1–2 hours on weekdays and/or 2–3 hours on weekends</p>
                    </div>
                </div>
                {/* ---------------------------------------- */}
                <div className='w-full flex flex-1' >
                    <img src={workwithususer} alt="" />
                </div>
            </div>

        </div>
        <ApplicationForm />
        <GetBrochure />
    </>
  )
}

export default WorkWithUs