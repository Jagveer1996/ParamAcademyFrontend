import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Submenu = ({item, activeMenu, setActiveMenu}) => {


  const [submenu, setSubmenu] = useState(false);

  const handleClick = () => {
    if (item.child) {
      setSubmenu(!submenu);
    }
    setActiveMenu(item.name);
  };

  return (
    <>
        <div>
        <Link onClick={handleClick} to={item.path} className={`w-[90%] h-[80px] mb-[20px] pl-[20px] flex items-center text-[20px] rounded-r-[10px] gap-[10px] ${activeMenu === item.name ? 'bg-[#FFFFFF] text-[#3972EF] font-semibold' : 'text-[#525252]'}`}
>
            <div>{item.icon}</div>
            <span>{item.name}</span>
            <div>
              {item.child && submenu ? item.iconClosed : item.child ? item.iconOpened : null}
            </div>
        </Link>

        {
          submenu && item.child.map((item, index)=>{
            return(
              <Link key={index} to={item.path} className={`w-[90%] block py-[10px] pl-[60px] my-[12px] text-[20px]`}>
                <span>{item.name}</span>
              </Link>
            )
          })
        }
        </div>
    </>
  )
}

export default Submenu