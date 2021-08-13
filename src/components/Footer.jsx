import React from 'react';

import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__stackOne">
                <p className="footer__stackOne__text">India</p>
            </div>
            <div className="footer__stackTwo">
                <div className="footer__stackTwo__left">
                    <ul  className="footer__stackTwo__left__ul">
                        <li className="footer__stackTwo__left__li">About</li>
                        <li className="footer__stackTwo__left__li">Advertising</li>
                        <li className="footer__stackTwo__left__li">Business</li>
                        <li className="footer__stackTwo__left__li">How Search works</li>
                    </ul>
                </div>
                <div className="footer__stackTwo__right">
                    <ul className="footer__stackTwo__right__ul">
                        <li className="footer__stackTwo__right__li">Privecy</li>
                        <li className="footer__stackTwo__right__li">Terms</li>
                        <li className="footer__stackTwo__right__li">Settings</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;