import React from 'react'
import student1 from '../images/student1.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardOurStudent from './cards/CardOurStudent';

const OurStudents = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className='w-full bg-[#ECF1FE] flex flex-col gap-[40px] py-[80px]'>
                <p className='text-[48px] text-[#333333] font-[600] pl-[100px]'>Hear From Our Students!</p>

                <Carousel responsive={responsive} infinite={true}
                    autoPlay={true} arrows ={false}
                    autoPlaySpeed={2000} className=''>
                    {/* -------------------------------------- */}

                    <CardOurStudent />
                    <CardOurStudent />
                    <CardOurStudent />
                    <CardOurStudent />
                </Carousel>


                <Carousel responsive={responsive} infinite={true}
                    autoPlay={true} arrows={false}
                    autoPlaySpeed={2000} rtl>
                    {/* -------------------------------------- */}

                    <CardOurStudent />
                    <CardOurStudent />
                    <CardOurStudent />
                    <CardOurStudent />
                </Carousel>
            </div>


        </>
    )
}

export default OurStudents