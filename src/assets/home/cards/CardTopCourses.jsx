import React from 'react'

import cardtop1 from '../../images/cardtop1.png';
import topicon1 from '../../images/topicon1.png';
import topheart from '../../images/topheart.png';
import topweekicon from '../../images/topweekicon.png';
import { BASEURL } from '../../../global';

const CardTopCourses = ({ elm }) => {
    // console.log("`${BASEURL}${elm.image}`", BASEURL + '/' + elm.image)
    return (
        <>
            <div className='card1 bg-white !p-[16px] w-[360px] h-[500px] flex flex-col gap-[28px] rounded-[15px] mb-[20px]'>

                {elm.image && <img src={`${BASEURL}/${elm.image}`} className='w-full h-[257px]' />
                }
                <div className='flex flex-col gap-[28px]'>
                    <div className='flex justify-between items-center'>
                        <p className='bg-[#cedaf2] rounded-[50px] border-[1px] w-fit h-[32px] border-[#9AB4EE] text-[#3F5489] !px-[16px] !py-[10px] flex items-center'>{elm.categoryname}</p>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center text-[#FFC837] text-[16px]'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                <i className="fa-regular fa-star"></i>
                                <p>(4.5)</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='w-[300px] text-[18px] font-[500]'>
                            {elm.courseTitle}
                        </p>
                        <img src={topheart} className='w-[20px] h-[21px]' />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>

                            {/* <img src={topweekicon} className='h-[25px] w-[103px]' /> */}
                            <p>{elm.course_duration}</p>

                        </div>
                        <div className='flex justify-between items-center' >
                            <p className='text-[#3972EF] text-[16px] font-[500]'>10 Weeks</p>
                            <div className='flex gap-[10px]'>
                                <img src={topicon1} className='' />
                                <p>{elm.course_lectures} lectures</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardTopCourses