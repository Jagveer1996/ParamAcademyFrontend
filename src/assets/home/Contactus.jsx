import React from 'react'
import HeroHeader from '../component/HeroHeader'

import contactIcon from '../images/contactIcon.png';
import ContactusForm from '../component/ContactusForm';
import GetBrochure from './GetBrochure';

const Contactus = () => {
  return (
    <>
    <HeroHeader HeroHeaderImg={contactIcon}/>
    <ContactusForm />
    <GetBrochure />
    </>
  )
}

export default Contactus