import React from 'react'
import CardChooseus from './cards/cardChooseus'
import { useQuery } from '@tanstack/react-query';

import demoicon from '../images/chooseus/demoicon.png';
import calendaricon from '../images/chooseus/calendaricon.png';
import targeticon from '../images/chooseus/targeticon.png';
import resumeicon from '../images/chooseus/resumeicon.png';
import linkedinicon from '../images/chooseus/linkedinicon.png';
import audienceicone from '../images/chooseus/audienceicone.png';
import { getCourseApi } from '../../api/courses/courseApi';

const ChooseUs = () => {
    let cardChooseUsObj = [
        {
            icon: demoicon,
            num: 1,
            title: "Demo Class",
            bgColor : "#FFFFFF",
            textColor : "#383838"
        },
        {
            icon: calendaricon,
            num: 2,
            title: "Flexible Hours",
            bgColor: "#ECF3C2",
            textColor : "#005249"
        },
        {
            icon: targeticon,
            num: 3,
            title: "Job Assistance",
            bgColor : "#FFFFFF",
            textColor : "#383838"
        },
        {
            icon: resumeicon,
            num: 4,
            title: "Resume Building",
            bgColor : "#DD99FF4D",
            textColor : "#A52AE2"
        },
        {
            icon: linkedinicon,
            num: 5,
            title: "Linkedin Profile",
            bgColor : "#ffffff",
            textColor : "#383838"
        },
        {
            icon: audienceicone,
            num: 6,
            title: "Mock Interviews",
            bgColor : "#B6CCFE",
            textColor : "#0F3FA8"
        },
    ];


// onSuccess: (res) => {
//   console.log("this is the doctor data", res);
// },
// onError: (err) => {
//   console.log("getMedicalAppointmentApi Error:", err);
// },
return (
    <>
        <div className='w-full flex flex-col items-center justify-center gap-[80px] py-[80px]'>
            <div className='w-[90%] flex flex-col items-center justify-center'>
                <p className='text-[24px] text-[#333333] font-[400] text-center'>Building Futures with Practical Learning</p>
                <p className='text-[48px] text-[#333333] font-[600] text-center'>Why Choose us?</p>
            </div>

            <div className='w-[90%] flex flex-wrap justify-evenly gap-[30px]'>

            {
                cardChooseUsObj.map((items, indx)=> <CardChooseus items = {items} key = {indx} />)
            }
                
            </div>
        </div>
    </>
  )
}

export default ChooseUs