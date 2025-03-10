import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import { toast } from 'react-toastify'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img onClick={() => toast.info('Coming Soon!')} src={facebook_icon} alt="" />
        <img onClick={() => toast.info('Coming Soon!')} src={instagram_icon} alt="" />
        <img onClick={() => toast.info('Coming Soon!')} src={twitter_icon} alt="" />
        <img onClick={() => toast.info('Coming Soon!')} src={youtube_icon} alt="" />
      </div>
      <ul>
        <li onClick={() => toast.info('Coming Soon!')}>Audio Description</li>
        <li onClick={() => toast.info('Coming Soon!')}>Help Center</li>
        <li onClick={() => toast.info('Coming Soon!')}>Gift Cards</li>
        <li onClick={() => toast.info('Coming Soon!')}>Media Center</li>
        <li onClick={() => toast.info('Coming Soon!')}>Investor Relations</li>
        <li onClick={() => toast.info('Coming Soon!')}>Jobs</li>
        <li onClick={() => toast.info('Coming Soon!')}>Terms of Use</li>
        <li onClick={() => toast.info('Coming Soon!')}>Privacy</li>
        <li onClick={() => toast.info('Coming Soon!')}>Legal Notices</li>
        <li onClick={() => toast.info('Coming Soon!')}>Cookie Preferences</li>
        <li onClick={() => toast.info('Coming Soon!')}>Corporate Information</li>
        <li onClick={() => toast.info('Coming Soon!')}>Contact Us</li>
      </ul>
      <p className='copyright-text'>1997 - 2023 Netflix</p>
    </div>
  )
}

export default Footer