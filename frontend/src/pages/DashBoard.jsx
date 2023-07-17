import React, { useContext, useState } from 'react'
import { PageContext } from '../context'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useContext(PageContext)
  if(!isAuthenticated){
    useNavigate("/")
  }
  return (
   <div>DashBoard</div>
  )
}

export default Dashboard