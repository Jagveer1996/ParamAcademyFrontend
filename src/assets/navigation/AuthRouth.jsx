import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthRouth = () => {
  return (
    <>
      <div className='authRoute'>
        <Outlet />
      </div>
    </>
  )
}


export default AuthRouth