import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../context'
import { Route, useNavigate } from 'react-router-dom'
import { Sidebar , DashBoardNavbar } from '../components'

const Dashboard = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useContext(PageContext)
  const [darkMode, setDarkMode] = useState(true)
  
  useEffect(()=>{
    if(!isAuthenticated){
      console.log("not auth")
  
    }
  },[])
  return (
    <div className={`relative sm:p-8 p-4 ${darkMode?'bg-darkmode-bg-color':'bg-lightmode-bg-color'} min-h-screen flex flex-row`}>
    <div className='sm:flex hidden mr-10 relative'>
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>

    <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
      <DashBoardNavbar />
      
    </div>
  </div>
  )
}

export default Dashboard