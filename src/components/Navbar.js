import React from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaTimes} from 'react-icons/fa'

import './NavbarStyles.css'

const Navbar = () => {
  return (
    <div className='header'>
        <Link to='/'>
            <h1>LOGO</h1>
        </Link>
        <ul className='nav-menu'>
            <li>
                <Link to='/'>HOME</Link>
            </li>
            <li>
                <Link to='/stories'>HER STORIES</Link>
            </li>
            <li>
                <Link to='/runs'>RUNS</Link>
            </li>
            <li>
                <Link to='/advive'>ADVICE</Link>
            </li>
            <li>
                <Link to='/contact'>CONTACT</Link>
            </li>
        </ul>
        <div className='hamburger'>
            <FaBars style={{color: '#000'}} size={20}/>
        </div>
    </div>
  )
}

export default Navbar