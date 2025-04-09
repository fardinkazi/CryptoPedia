import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ darkMode }) => {
    return (
      <div className={`navbar ${darkMode ? 'dark' : 'light'}`}>
        <h1 className='logo'>Crypto <span className='span'>Pedia</span></h1>
      </div>
    )
  }
  
  export default Navbar
