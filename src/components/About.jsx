import React from 'react';
import aboutImage from '../assets/images/abtimg.png';

const AboutSection = () => {
  return (
    <div className="aboutSec">
      <div className="container">
        <div className="abtpnl">
          <div className="abtimg wow fadeInRight" >
            <img src={aboutImage} alt="About Us" />
          </div>
          <div className="abtcon wow fadeInLeft">
            <h3>About Us</h3>
            <em>Proin ullamcorper ante eget finibus tincidunt. Mauris lacinia venenatis diam, congue sodales erat efficitur non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</em>
            <p>Proin ullamcorper ante eget finibus tincidunt. Mauris lacinia venenatis diam, congue sodales erat efficitur non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>Proin ullamcorper ante eget finibus tincidunt. Mauris lacinia venenatis diam, congue sodales erat efficitur non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <a href="#url" className="productarw"><span>Read More</span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
