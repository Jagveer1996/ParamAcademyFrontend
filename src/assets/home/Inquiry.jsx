import React from 'react'
import inquiryIcon from '../images/inquiryIcon.png'
import HeroHeader from '../component/HeroHeader'
import GetBrochure from './GetBrochure'
import InquiryForm from '../component/InquiryForm'

const Inquiry = () => {
  return (
    <>
        <HeroHeader HeroHeaderImg={inquiryIcon} />
        <InquiryForm />
        <GetBrochure />
    </>
  )
}

export default Inquiry