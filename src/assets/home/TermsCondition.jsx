import React from 'react'
import termconditionIcon from '../images/termconditionIcon.png'
import HeroHeader from '../component/HeroHeader'

const TermsCondition = () => {
    return (
        <>
            <HeroHeader HeroHeaderImg={termconditionIcon} />
            <div className='w-full flex justify-center items-center my-[100px]'>
                <div className='w-[90%] flex flex-col items-center gap-[34px]'>
                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>1. Acceptance of Terms</p>
                        <p className='text-[24px] text-[#676767] font-[400]'>By accessing or using the Param Academy website (the “Site”) and its associated products and services (collectively, the “Services”), you agree to comply with and be legally bound by these Terms and Conditions (the “Terms”). If you do not agree with any part of these Terms, you must not access or use the Site or Services.</p>
                    </div>
                    {/* ------------------------------------------- */}
                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>2. Modifications to Terms</p>
                        <p className='text-[24px] text-[#676767] font-[400]'>Pram Academy reserves the right to update or modify these Terms at any time without prior notice. Any changes will become effective upon being posted on this page. Continued use of the Site or Services after such changes constitutes your acceptance of the revised Terms. It is your responsibility to review this page periodically for updates.</p>
                    </div>
                    {/* -------------------------------------------- */}
                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>3. User Conduct</p>
                        <p className='text-[24px] text-[#676767] font-[400]'>You agree to use the Site and Services responsibly, ethically, and in accordance with all applicable laws and regulations. You are solely responsible for any activity that occurs under your account, including maintaining the confidentiality and security of your account credentials. Unauthorized access or misuse of the Site or Services is strictly prohibited.</p>
                    </div>
                    {/* -------------------------------------------- */}
                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>4. Intellectual Property</p>
                        <p className='text-[24px] text-[#676767] font-[400]'>All content available on the Site and through the Services—including, but not limited to, text, images, videos, graphics, logos, icons, software, and design elements (collectively, the “Content”)—is the property of Param Academy or its licensors and is protected by applicable copyright, trademark, and intellectual property laws. </p>

                        <p className='text-[24px] text-[#676767] font-[400]'>You may not reproduce, modify, publish, distribute, transmit, display, or create derivative works based on any part of the Site or Content without prior written permission from Pcsionweb.</p>
                    </div>
                    {/* -------------------------------------------- */}
                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>5. Limitation of Liability</p>

                        <p className='text-[24px] text-[#676767] font-[400]'>While we make reasonable efforts to ensure the accuracy and reliability of the information and services provided, the Site and Services are offered “as is” and “as available,” without any warranties—express or implied—including, but not limited to, warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>

                        <p className='text-[24px] text-[#676767] font-[400]'>In no event shall Param Academy be liable for any indirect, incidental, special, punitive, or consequential damages (including, but not limited to, loss of data, revenue, profits, or business) arising out of or in connection with your use or inability to use the Site or Services, even if we have been advised of the possibility of such damages.</p>

                        <p className='text-[24px] text-[#676767] font-[400]'>Our total liability for any claim related to the Site or Services shall not exceed the amount paid by you, if any, for accessing or using the Site or Services</p>
                    </div>
                    {/* --------------------------------------------- */}
                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>6. Indemnification</p>

                        <ul className='list-disc list-inside text-[24px] text-[#676767] font-[400]'>

                            <p className='text-[24px] text-[#676767] font-[400]'>You agree to indemnify, defend, and hold harmless Param Academy, its affiliates, employees, officers, and agents from and against any claims, damages, losses, liabilities, costs, or expenses (including reasonable attorney’s fees) arising out of or related to: </p>

                            <li>Your use or misuse of the Site or Services;</li>
                            <li>Any violation of these Terms;</li>
                            <li>Any activity under your account, whether authorized or unauthorized.</li>
                        </ul>
                    </div>
                    {/* --------------------------------------------------- */}
                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>7. Termination</p>
                        <p className='text-[24px] text-[#676767] font-[400]'>Param Academy may, at its sole discretion and without prior notice, suspend or terminate your access to the Site, Services, and/or your account for any reason, including but not limited to violation of these Terms or other policies. Upon termination, your right to use the Site and Services will cease immediately.</p>
                    </div>
                    {/* ---------------------------------------------------- */}
                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>8. Governing Law</p>
                        <p className='text-[24px] text-[#676767] font-[400]'>These Terms shall be governed by and interpreted in accordance with the laws of India, without regard to its conflict of law principles.</p>
                    </div>
                    {/* ----------------------------------------------------- */}
                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>9. Entire Agreement</p>
                        <p className='text-[24px] text-[#676767] font-[400]'>These Terms constitute the complete and exclusive agreement between you and Param Academy regarding your use of the Site and Services. They supersede all prior agreements, communications, or understandings, whether oral or written. If any part of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
                    </div>
                    {/* ---------------------------------------------------- */}
                </div>
            </div>
        </>
    )
}

export default TermsCondition