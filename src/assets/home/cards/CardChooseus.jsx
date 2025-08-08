import React from 'react'

// import demoicon from '../../images/chooseus/demoicon.png'

const CardChooseus = ({items}) => {
  return (
    <>
        <div className='w-[400px] h-[250px] border-[1px] border-[#383838] rounded-[10px] p-[20px] gap-[50px] shadow-[4px_4px_15px_#55C3601A]' style={{backgroundColor: items.bgColor, borderColor: items.textColor}}>
            <div className='flex justify-between'>
                <img src={items.icon} className='w-[80px] h-[80px]' />
                <p className='text-[82px] font-[600]' style={{color : items.textColor}} >0{items.num}</p>
            </div>
            <div className='flex'>
                <p className='text-[32px] text-[#383838] font-[500]' style={{color : items.textColor}} >{items.title}</p>
            </div>
        </div>
    </>
  )
}

export default CardChooseus