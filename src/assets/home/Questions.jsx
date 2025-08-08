import React from 'react'
import questions1 from '../images/questions1.png';
import Accordion from './cards/Accordion';

const Questions = () => {

    let AccordianData = [
        {
            question: "What courses do you offer?",
            answer: "We offer a wide range of IT training programs, including Web Development, Data Science, Cybersecurity, Cloud Computing, Digital Marketing, and more. Check our course catalog for full details"
        },
        {
            question : "Are your courses suitable for beginners?",
            answer : "We offer a wide range of IT training programs, including Web Development, Data Science, Cybersecurity, Cloud Computing, Digital Marketing, and more. Check our course catalog for full details"
        },
        {
            question : "Are your classes available online or in person?",
            answer : "We offer both online and in-person training options to suit different learning preferences. You can choose your preferred mode during enrollment."
        },
        {
            question : " Can I get a free demo class before enrolling?",
            answer : "Yes, we offer free demo sessions so you can experience our teaching style before making a commitment."
        },
        {
            question : "Do you offer certifications after course completion?",
            answer : "Absolutely. Upon successful completion of a course, you will receive an industry-recognized certificate from our academy."
        }
    ]

  return (
    <>
        <div className='w-full flex justify-center py-[60px]'>
            <div className='w-[90%] flex flex-col gap-[60px]'>
                <p className='text-[48px] text-[#333333] font-[600]'>Frequently asked questions</p>
                <div className='w-full flex justify-center gap-[20px] flex-wrap'>
                    {/* Left col start */}
                    <div className='w-[38%]'>
                        <img src={questions1} className='w-full' />
                    </div>
                    {/* Right col start */}
                    <div className='w-[58%] bg-[#FAF6FF] flex flex-col p-[24px] gap-[24px]'>
                        {
                            AccordianData.map((items, index)=>{
                                return <Accordion key = {index} items = {items} />
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Questions