import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import dropdown_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'
import { toast } from 'react-toastify'


const Navbar = () => {

  const navRef = useRef();

  useEffect(() => { 
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    });
  }, [])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
      <img src={logo} alt="" />
      <ul>
        <li onClick={() => toast.info('Coming Soon!')}>Home</li>
        <li onClick={() => toast.info('Coming Soon!')}>TV Shows</li>
        <li onClick={() => toast.info('Coming Soon!')}>Movies</li>
        <li onClick={() => toast.info('Coming Soon!')}>New & Popular</li>
        <li onClick={() => toast.info('Coming Soon!')}>My List</li>
        <li onClick={() => toast.info('Coming Soon!')}>Home</li>
        <li onClick={() => toast.info('Coming Soon!')}>Browse By Languages</li>
      </ul>
      </div>
      <div className="navbar-right">
        <img onClick={() => toast.info('Coming Soon!')} src={searchIcon} alt="" className='icons' />
        <p style={{ cursor: 'pointer' }} onClick={() => toast.info('Coming Soon!')}>Children</p>
        <img onClick={() => toast.info('Coming Soon!')} src={bellIcon} alt="" className='icons'/>
        <div className="navbar-profile">
        <img src={profile_icon} alt="" className='profile' />
        <img src={dropdown_icon} alt="" />
        <div className="dropdown">
          <p onClick={logout}>Sign Out of Netflix</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar