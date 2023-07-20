import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../context'
import { useNavigate } from 'react-router-dom'
import { Sidebar , Navbar } from '../components'

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
    <div className={`relative sm:p-8 p-4 bg-[color:var(${darkMode?'--darkmode-bg-color':'--lightmode-bg-color'})] min-h-screen flex flex-row`}>
    <div className='sm:flex hidden mr-10 relative'>
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>

    <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
      <Navbar />


    </div>
  </div>
  )
}

export default Dashboard