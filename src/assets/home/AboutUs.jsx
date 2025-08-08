import React from 'react'
import HeroHeader from '../component/HeroHeader'
import aboutusIcon from '../images/aboutusIcon.png';
import AboutusForm from '../component/AboutusForm';
import GetBrochure from './GetBrochure';

const AboutUs = () => {
    return (
        <>
            <HeroHeader HeroHeaderImg={aboutusIcon} />
            <AboutusForm />
            <GetBrochure />
        </>
    )
}

export default AboutUs