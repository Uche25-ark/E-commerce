import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/footer-logo.png'
import instagram_icon from '../Assets/instagram-icon.jpg'
import pintester_icon from '../Assets/pintester-icon.jpg'
import whatsapp_icon from '../Assets/whatsapp-icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>UC COMMUNICATION</p>
        </div>
        <ul className="footer-links">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Orders and Returns</li>
            <li>Terms & Conditions</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>               
        </div>
        <div className="footer-copyright">
            <hr />
            <p>© 2026 UC COMMUNICATION. All Rights Reserved.</p>
        </div>
        

    </div>
  )
}

export default Footer
