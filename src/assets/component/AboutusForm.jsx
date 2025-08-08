import React from 'react'

const AboutusForm = () => {
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center my-[100px] gap-[70px]'>
                <div className='w-[90%] flex flex-col gap[14px] leading-[35px]'>
                    <p className='text-[20px] font-[400]'>Our company is based in Iselin, New Jersey and since its establishment, in the year 2001, we as a company have strived to deliver IT solutions that make your life easier. Additionally, we have always worked hard to develop the education of the IT industry, which provides businesses with highly skilled workers. Our goal is to use cutting-edge technology to develop goods and services of the highest caliber. We work hard to be a highly productive, dynamic, and enthusiastic group that can adapt quickly to the changing IT industry. We strive to offer a blend of expertise, skill, and teamwork as a top provider of technological solutions—a combination we take great satisfaction in maintaining.</p>

                    <p className='text-[20px] font-[400]'>Our goal is to retain a unit business attitude, which is crucial for offering our clients high-quality services, regardless of how big our firm gets. We believe that by maintaining our unit business attitude, we can ensure that each client receives personalized attention and tailored solutions. This approach has helped us build long-term relationships with our clients and establish ourselves as a trusted partner in the industry. We believe that our success is not only measured by the quality of our services but also by the relationships we build with our clients. That's why we are committed to providing personalized attention and support to each of our clients, ensuring their satisfaction and loyalty.</p>
                </div>
                {/* --------------------------------------------------------------------------- */}
                <div className='w-full h-[350px] bg-linear-[80deg,#F4DDFF_25%,#C7C9F7_45%,#F2F7D4_80%] flex justify-around items-center'>
                    <div className='flex flex-col items-center'>
                        <p className='text-[50px] font-[700]'>5000</p>
                        <p className='text-[32px]'>Foreign Followers</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-[50px] font-[700]'>10</p>
                        <p className='text-[32px]'>Certified Teachers</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-[50px] font-[700]'>2100</p>
                        <p className='text-[32px]'>Student Enrolled</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-[50px] text-[700]'>100</p>
                        <p className='text-[32px]'>Complete Course</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------- */}

                <div className='w-[90%] flex flex-col gap-[40px]'>
                    <div>
                        <p className='text-[32px] text-[#9747FF] font-[600]'>Our Mission</p>
                        <p className='text-[50px] font-[700]'>Our Mission is to Provide a World‑class Education.</p>
                    </div>
                    <div className='leading-[35px]'>
                        <p className='text-[20px] font-[400]'>We offer high quality advanced training and are unswerving to providing the best training facilities to our students. Our highly qualified instructors are professionals in their field of proficiency. Our instructors strongly promote competencies and job readiness. Our instructors are dedicated to teach effective skills in communication, leadership, professionalism and ethics.</p>
                        <p className='text-[20px] font-[400]'>Our goal is to match the speed of technology by providing an up-to-date            education on the most advanced equipments and technologies available.
                            Our efforts will remain focused to achieve uncompromising success in imparting professional skills to our candidates and to ensure that they obtain excellent career.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutusForm