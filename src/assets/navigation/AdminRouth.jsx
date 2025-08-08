import React from 'react'
import Sidebar from '../Admin/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminRouth = () => {
  return (
    <>  
        
        <Sidebar>
            <Outlet />
        </Sidebar>
    </>
  )
}

export default AdminRouth