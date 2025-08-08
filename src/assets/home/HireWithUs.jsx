import React from 'react'
import HeroHeader from '../component/HeroHeader'
import hirewithusIcon from '../images/hirewithusIcon.png'
import hirewithusUser from '../images/hirewithusUser.png'
import GetBrochure from './GetBrochure'
import HireApplicationForm from '../component/HireApplicationForm'


const HireWithUs = () => {
    return (
        <>
            <HeroHeader HeroHeaderImg={hirewithusIcon} />
            <div className='w-full flex items-center justify-center mt-[100px]'>
                <div className='w-[90%] flex items-center justify-center gap-[20px] flex-wrap'>
                    <div className='w-full flex flex-col flex-1 gap-[36px] text-[24px] text-[#676767] font-[400]'>

                        <p>Collaborate with Param Academy to access a pool of skilled, industry-ready IT graduates. Our candidates possess the latest technical skills and hands-on experience, making them prepared to contribute from day one.</p>

                        <p>
                            Take the first step toward building a high-performing IT team. Fill out the form below, and let Param Academy help you find the perfect match for your organization.
                        </p>
                        <div className='w-full flex flex-col justify-center gap-[24px]'>
                            <p><i className="fa-solid fa-check text-[#3972EF] pr-[10px]"></i>Our students are tech-savvy problem solvers, innovators, and effective communicators who excel in dynamic environments.</p>
                            <p><i className="fa-solid fa-check text-[#3972EF] pr-[10px]"></i>At Param Academy, we connect businesses with top talent at no cost. We're dedicated to supporting your success without any charges.</p>
                        </div>
                    </div>
                    {/* ---------------------------------------- */}
                    <div className='w-full flex flex-1' >
                        <img src={hirewithusUser} alt="" />
                    </div>
                </div>

            </div>
            <HireApplicationForm />
            <GetBrochure />
        </>
    )
}

export default HireWithUs