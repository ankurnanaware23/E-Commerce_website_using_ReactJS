import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import { FaFacebook, FaInstagram, FaPinterest, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="Footer_Logo" />
            <p>SHOOPER</p>
        </div>

        <ul className="footer-link">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className="footer-social-icons">
            <FaXTwitter className='footer-icons-container' />
            <FaInstagram className='footer-icons-container' />
            <FaWhatsapp className='footer-icons-container' />
            <FaPinterest className='footer-icons-container' />
            <FaFacebook className='footer-icons-container' />
        </div>

        <div className="footer-copyright">
            <hr />
            <p>Developed by Ankur Nanaware | Copyright @2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer