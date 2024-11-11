import React from 'react';
import CourseImage from "../assets/images/courseimg.png";
import CourseForm from './Courseform.jsx';
const CourseSection = () => {
  return (
    <div className="courseSec" id="contact">
      <div className="container">
        <div className="coursepnl">
          <div
            className="courseimg wow fadeInRight animated"
            style={{ visibility: 'visible', animationName: 'fadeInRight' }}
          >
            <img src={CourseImage} alt="Course" />
          </div>
          <div
            className="coursert wow fadeInLeft animated"
            style={{ visibility: 'visible', animationName: 'fadeInLeft' }}
          >
            <h3>Contact Us</h3>
            <p>
              Proin ullamcorper ante eget finibus tincidunt. Mauris lacinia
              venenatis diam, congue sodales erat efficitur non. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
           <CourseForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
