import React, { useEffect } from 'react'
import Sidebar from '../Admin/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'

const AdminRouth = () => {

  const navigate = useNavigate();
  const role = localStorage.getItem('Role');

  // console.log(role);
useEffect(()=>{
  if(role == 'student' || role == 'instructor'){
    navigate('/signin');
  }

},[])

  return (
    <>  
        
        <Sidebar>
            <Outlet />
        </Sidebar>
    </>
  )
}

export default AdminRouth