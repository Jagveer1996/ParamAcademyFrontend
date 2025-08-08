import React from 'react';

import privacypolicyIcon from '../images/privacypolicyIcon.png';
import HeroHeader from '../component/HeroHeader';

const PrivacyPolicy = () => {
    return (
        <>
            <HeroHeader HeroHeaderImg={privacypolicyIcon} />

            <div className='w-full flex justify-center my-[100px]'>
                <div className='w-[90%] flex flex-col items-center justify-center gap-[34px]'>
                    <p className='text-[24px] text-[#676767] font-[400]'>At Param Academy, we value the privacy of our visitors and users. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
                    {/* ----------------------------------------------------- */}
                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>Information We Collect</p>
                        <ul className='list-disc list-inside text-[24px] text-[#676767] font-[400]'>
                            <p>We may ask you to provide personal information when:</p>
                            <li>You contact us directly</li>
                            <li>You register for an account or request more information about our services</li>
                            <li>You interact with our website or social media platforms</li>
                        </ul>
                        <ul className='list-disc list-inside text-[24px] text-[#676767] font-[400]'>
                            <p>The types of information we may collect include:</p>
                            <li>Name and contact details (email, phone number, address)</li>
                            <li>Company name and industry</li>
                            <li>Job title and role</li>
                            <li>Interests and preferences</li>
                            <li>Browser type and device information</li>
                        </ul>
                    </div>

                    {/* --------------------------------- */}

                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>How We Use Your Information</p>
                        <ul className='list-disc list-inside text-[24px] text-[#676767] font-[400]'>
                            <p>We use your personal information for various purposes, including:</p>
                            <li>Providing our services and products</li>
                            <li>Improving and personalizing our website and marketing efforts</li>
                            <li>Understanding and analyzing user behavio</li>
                            <li>Developing new features and functionality</li>
                            <li>Communicating with you through newsletters, updates, and promotional materials</li>
                        </ul>
                    </div>

                    {/* --------------------------------------- */}
                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>Consent and Opt-Out Options</p>
                        <p className='text-[24px] text-[#676767] font-[400]'>By using our website or services, you consent to the collection and use of your personal information as described in this policy. You may opt-out of certain uses of your information by contacting us directly.</p>
                    </div>
                    {/* ------------------------------------------- */}
                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>Data Protection Rights</p>
                        <ul className='list-disc list-inside text-[24px] text-[#676767] font-[400]'>
                            <p>You have the right to:</p>
                            <li>Request access to your personal data</li>
                            <li>Request correction or completion of inaccurate or incomplete information</li>
                            <li>Request deletion of your personal data under certain conditions</li>
                            <li>Request restriction or objection to processing of your personal data</li>
                            <li>Request transfer of your personal data to another organization</li>
                        </ul>
                    </div>
                    {/* --------------------------------------------- */}
                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>Children's Information Protection</p>
                        <p className='text-[24px] text-[#676767] font-[400]'>We do not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe that your child has provided this kind of information on our website, please contact us immediately.</p>
                    </div>
                    {/* --------------------------------------------------- */}
                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>Contact Us</p>
                        <p className='text-[24px] text-[#676767] font-[400]'>If you have any questions or concerns about our privacy policy, please contact us at (info@paramgroups.com). We will respond to your inquiry within a reasonable timeframe.</p>
                    </div>
                    {/* -------------------------------------------------------- */}
                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>Changes to This Policy</p>
                        <p className='text-[24px] text-[#676767] font-[400]'>We reserve the right to modify this Privacy Policy at any time. Any changes will be posted on this page and effective immediately upon posting.</p>
                    </div>
                    {/* --------------------------------------------------------- */}
                    <div className='w-full flex flex-col gap-[16px]'>
                        <p className='text-[32px] text-[#1C1C1C] font-[400]'>Summary</p>
                        <p className='text-[24px] text-[#676767] font-[400]'>Our privacy policy outlines how we collect, use, and protect your personal information. We value transparency and respect your rights to control your data. If you have any questions or concerns, please contact us.</p>
                    </div>
                    {/* ------------------------------------------------------------ */}
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy