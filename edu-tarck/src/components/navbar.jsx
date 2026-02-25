import React from 'react'
import '../css/navbar.css'

export default function Navbar(){
    return(
        <div className="navbar">
            <h1 className="h1">Edu Track</h1>
         <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/">Courses</a></li>
            <li><a href="/">Profile</a></li>
         </ul>
        </div>
    )
}
