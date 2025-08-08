import React, { useState } from 'react'
import starActiveIcon from '../images/starActiveIcon.png'
import starInactiveIcon from '../images/starInactiveIcon.png';

const TestStar = () => {
    let [active, setActive] = useState(0);

    let handelRating = (index)=>{
       
       if(index + 1 === active){
        setActive(0);
       }else{
        setActive(index + 1)
       }
    }

    
  return (
    <>
    <div>TestStar</div>
    
    <div className='flex gap-[10px]'>
      {
        Array.from({length:5}, (item, index)=>(
            <img onClick={()=>{handelRating(index)}} src={index < active ?  starActiveIcon :starInactiveIcon }  />
        ))
      }
      <p>Rating : {active}</p>
    </div>

    </>
  )
}

export default TestStar