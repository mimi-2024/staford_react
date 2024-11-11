import React from 'react';
import FooterLogo from "../assets/images/header_logo.png";
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa';


const Footer = () => {
  const menuItems = [
    { label: 'Home', url: '#url' },
    { label: 'About Us', url: '#url' },
    { label: 'Products', url: '#url' },
    { label: 'OTC Product', url: '#url' },
    { label: 'Courses', url: '#url' },
    { label: 'Contact us', url: '#url' }
  ];

  return (
    <footer className="foterSec">
      <div className="container">
        <div className="ftrpnl">
        <div className="ftrlft wow fadeInRight animated" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
            <a href="#url" className="ftrlgo">
              <img src={FooterLogo} alt="Logo" />
            </a>
            <ul>
              <li>Follow Us On</li>
              <li>
                <a href="#url" target="_blank" rel="noreferrer">
                <FaFacebook/>
                </a>
              </li>
              <li>
                <a href="#url" target="_blank" rel="noreferrer">
                <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#url" target="_blank" rel="noreferrer">
                <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="ftrrt wow fadeInLeft animated" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
            <h3>Contact Details</h3>
            <ul className="ftrinfo">
              <li>
                <div className="media">
                <span><FaAddressBook /></span>
                  <div className="media-object">
                    <em>2A, Sir Deba Prasad Row, <br /> Kolkata, West Bengal 700014</em>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                <span  style={{ transform: 'rotate(90deg)' }}><FaPhone /></span>
                  <div className="media-object">
                    <em>
                      <a href="tel:001234567890">+00 123 456 7890</a>
                    </em>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                <span><FaEnvelope /></span>
                  <div className="media-object">
                    <em>
                      <a href="mailto:info@stafford.com">info@stafford.com</a>
                    </em>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="ftrmenu">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>{item.label}</a>
                </li>
              ))}
            </ul>
            <p>
              Copyright © 2022 <a href="#url">Stafford Healthcare LLP</a>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
