import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

export default function Navbar(){
    return(
        <div className="navbar">
            <h1 className="h1">Edu Track</h1>
         <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/profile">Profile</Link></li>
         </ul>
        </div>
    )
}
