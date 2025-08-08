import React, { Children, useState } from 'react';
import paramlogo from '../images/paramlogo.png';
import { FaTable } from "react-icons/fa";
import { AiOutlineLogout, AiOutlineUsergroupAdd, AiFillCreditCard, AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { TbUserScreen, TbMessageUser } from "react-icons/tb";
import { SlUser } from "react-icons/sl";
import { PiStudent } from "react-icons/pi";


import Submenu from './Submenu';
import FooterAdmin from './FooterAdmin';
import HeaderAdmin from './HeaderAdmin';



const Sidebar = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaTable />,
      iconOpened: <AiFillCaretDown />,
      iconClosed: <AiFillCaretUp />,
      path : "dashboard"
    },
    {
      name: "Admin",
      icon: <AiOutlineUsergroupAdd />,
      iconOpened: <AiFillCaretDown />,
      iconClosed: <AiFillCaretUp />
    },
    {
      name: "Manage Website",
      icon: <AiFillCreditCard />,
      iconOpened: <AiFillCaretDown />,
      iconClosed: <AiFillCaretUp />,
      child: [
        {
          name: "Course",
          path: "managecourse"
        },
        {
          name: "Testimonials",
          path: "testimonial"
        },
        {
          name: "FAQ",
          path: "faq",
        }
      ]
    },
    {
      name: "Instructors",
      icon: <TbUserScreen />,
      iconOpened: <AiFillCaretDown />,
      iconClosed: <AiFillCaretUp />
    }, {
      name: "Students",
      icon: <PiStudent />,
      iconOpened: <AiFillCaretDown />,
      iconClosed: <AiFillCaretUp />
    }, {
      name: "Manage Inquiry",
      icon: <TbMessageUser />,
      iconOpened: <AiFillCaretDown />,
      iconClosed: <AiFillCaretUp />,
      child: [
        {
          name: "Inquiry",
          path: "inquirydetail"
        },
        {
          name : "Appointment",
          path : "appointmentdetail"
        },
        {
          name : "Hire Form Us",
          path : "hireformusdetail"
        },
        {
          name : "Work With us",
          path : "workwithusdetail"
        },
        {
          name : "Contact us",
          path : ""
        }
      ]
    },
    {
      name: "Profile",
      icon: <SlUser />,
      iconOpened: <AiFillCaretDown />,
      iconClosed: <AiFillCaretUp />,
      path: "profile"
    },
    {
      name: "Logout",
      icon: <AiOutlineLogout />,
      iconOpened: <AiFillCaretDown />,
      iconClosed: <AiFillCaretUp />
    },
  ]

  return (
    <>
      <div className='adminbar w-full flex  '>
        {/* -------------Left Side Sidebar Menu Show ----------------*/}
        <div className='sidebar w-[20%] bg-[#DEE5F3]'>
          <div className='w-full flex justify-center mt-[36px] mb-[60px]'>
            <img src={paramlogo} className='w-[185px]' />
          </div>

          {
            menuItems.map((item, index) => {
              return <Submenu item={item} key={index} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            })
          }

        </div>

        {/* ----------Right Side Main Content Show-------------------- */}
        <main className='main w-[80%] flex flex-col items-center'>
          {children}
          <FooterAdmin />
        </main>
      </div>
    </>
  )
}

export default Sidebar