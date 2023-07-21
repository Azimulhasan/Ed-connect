import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PageContext} from '../context'


const HomePage = () => {
    const { titleData } = useContext(PageContext)
  return (
    <div>
    <h2>Home</h2>
    <h3>{titleData}</h3>
    <Link to='login'>
        <h6>Login</h6>
    </Link>
    <Link to='signup'>
        <h6>Signup</h6>
    </Link>
    </div>
  )
}

export default HomePage