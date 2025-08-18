import React from 'react'
import Hero from './Hero'
import TopCourses from './TopCourses'
import ChooseUs from './ChooseUs'
import OurStudents from './OurStudents'
import GetBrochure from './GetBrochure'
import Questions from './Questions'

const Home = () => {
  // console.log("first",localStorage.getItem('loginData'))
  return (
    <>
        <Hero />
        <TopCourses />
        <ChooseUs />
        <OurStudents />
        <GetBrochure />
        <Questions />
    </>
  )
}

export default Home