import React from 'react'
import CardTopCourses from './cards/CardTopCourses'

import cardtop1 from '../images/cardtop1.png';
import cardtop2 from '../images/cardtop2.png';
import cardtop3 from '../images/cardtop3.png';
import cardtop4 from '../images/cardtop4.png';
import { getCourseApi } from '../../api/courses/courseApi';
// import topicon1 from '../../images/topicon1.png';
// import topheart from '../../images/topheart.png';
// import topweekicon from '../../images/topweekicon.png';
import { useQuery } from '@tanstack/react-query';

const TopCourses = () => {

    let topcardobj = [
        {
            image : cardtop1,
            title : "Artificial Intelligence",
            desc : "Introduction to Machine Learning using Python (Linear Regression)"
        },
        {
            image :cardtop2,
            title: "Front-End",
            desc : "React Native Building Cross-Platform Mobile Apps"
        },
        {
            image :cardtop3,
            title: "Front-End",
            desc : "React Native Building Cross-Platform Mobile Apps"
        },
        {
            image :cardtop4,
            title: "Back-End",
            desc : "The Complete DBMS Bootcamp"
        }
    ]

    

const {data,isSuccess, isLoading,isError,error,
  } = useQuery({
    queryKey: ["getCourseApi"],
    queryFn: getCourseApi,
});

// console.log("first",data?.data)
  return (
    <div className='w-full bg-[#ECF1FE] flex justify-center flex-col items-center gap-[50px] py-[80px]'>
        <div className='w-[90%] flex flex-col justify-center items-center'>
            <p className='text-[24px] text-[#333333] font-[400] text-center'>Pick a Course to Get Started</p>
            <p className='text-[48px] text-[#333333] font-[600] text-center'>Browse Our Top Courses</p>
        </div>

        <div className='w-[90%] flex justify-around flex-wrap'>
            {
                data?.data.map((elm, ind)=> <CardTopCourses elm={elm} key = {ind}/>)
            }
        </div>

        <button className='text-[20px] text-[#FFFDF5] font-[500] bg-[#3972EF] w-[241px] h-[60px] rounded-[57px]' >View All Course</button>
    </div>
  )
}

export default TopCourses