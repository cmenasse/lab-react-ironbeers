import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import img from '../assets/home.png'

const AppHeader = () => {
    return (
        <> 
        <header>
            <Link to='/'> <img src={img} alt='home'/></Link>
        </header>  
        <Outlet/>
        </>
  )
}

export default AppHeader