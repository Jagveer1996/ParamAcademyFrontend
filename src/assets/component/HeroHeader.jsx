import React from 'react'
import Header from './Header'

const HeroHeader = ({HeroHeaderImg}) => {
  return (
    <>
    <div className='w-full bg-[#ECF1FE]'>
    <Header/>
    </div>
    <div className='w-full h-[200px] bg-[#ECF1FE] flex relative '>
    <img src={HeroHeaderImg} className='w-[500px] h-[362px] absolute left-[30%]'/>
    </div>
    </>
  )
}

export default HeroHeader