import React from 'react';
import './Phome.css';
import Courses from './Component1/Courses';
import NavB from './Navigation/NavB';
import CoursesStrip from './Component1/CourseStrip';
import WelcomeUser from './Component1/WelcomeUser';

const Phome = () => {
  return (
    <div className="Phome">
      <div className="Phome__header">
        <NavB />
      </div>
      <div className="Phome__content">
        <div className="Phome__courses-strip">
          <CoursesStrip />
        </div>
        <div className="Phome__welcome-user">
          <WelcomeUser />
        </div>
        <div className="Phome__courses">
          <Courses />
        </div>
      </div>
      <div className="Phome__footer">
        {/* You can add footer content here */}
        <p>Footer Content</p>
      </div>
    </div>
  );
};

export default Phome;
