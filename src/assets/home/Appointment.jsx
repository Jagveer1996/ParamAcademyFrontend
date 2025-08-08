import React from 'react'
import HeroHeader from '../component/HeroHeader'

import appointmentIcon from '../images/appointmentIcon.png';
import AppointmentForm from '../component/AppointmentForm';
import GetBrochure from './GetBrochure';

const Appointment = () => {
    return (
        <>
            <HeroHeader HeroHeaderImg={appointmentIcon} />
            <AppointmentForm />
            <GetBrochure />
        </>
    )
}

export default Appointment