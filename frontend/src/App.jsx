import React from 'react'
import './App.css'
import { HomePage, LoginPage, SignUpPage, DashBoard} from './pages'

import { Route , Routes } from 'react-router-dom'
import { Navbar } from './components'

function App() {
 

  return (
   <div>

   <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/dashboard' element={<DashBoard/>}/>
    </Routes>
   </div>
  )
}

export default App
