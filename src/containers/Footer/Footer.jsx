// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentDate = new Date();
    const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = currentDate.toLocaleDateString('en-GB', dateOptions);

    return (
        <>
        <div className='footer__brake'></div>
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-left'>
                    <p className='font'>&copy; Created by Kakego</p>
                    <p>created: 20/06/2023 - {formattedDate}</p>
                </div>
                <div className='footer-right'>
                <ul className='social-icons'>
                    <li><a href='#'><i className='fa fa-facebook'></i></a></li>
                    <li><a href='#'><i className='fa fa-twitter'></i></a></li>
                    <li><a href='#'><i className='fa fa-instagram'></i></a></li>
                </ul>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;
