import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo1} alt="" />
                    <p>Thank you for visiting Teja's Taste Heaven. We are dedicated to bringing you the best in culinary experiences, from delicious recipes to expert cooking tips. Follow us on social media for the latest updates and join our newsletter for exclusive content, special offers, and more. If you have any questions, feedback, or just want to say hello, feel free to contact us. Happy cooking!</p>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About-US</li>
                        <li>Delivery</li>
                        <li>Privacy & Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+916301698102</li>
                        <li>tejanaik.dev@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copy-right">
                Copyright 2024 @Teja's_Taste_Heaven.com - All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer;
