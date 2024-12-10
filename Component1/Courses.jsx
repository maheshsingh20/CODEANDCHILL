import React from "react";
import "./Courses.css";
import ds from '../assets/ds.jpg';
import wd from '../assets/wd.jpg';
import md from '../assets/md.jpg';
import Ui from '../assets/Ui.jpg';
import cl from '../assets/cloud.jpg';
import cs from '../assets/cs.jpg';
import Ai from '../assets/Ai.jpg';
import Iot from '../assets/Iot.jpg';
import { Link } from "react-router-dom";

const courses = [
  { id: 1, title: "Web Development", description: "Learn HTML, CSS, JS, React, and more!", image: wd, link: "/Course" },
  { id: 2, title: "Data Science", description: "Master Python, R, and machine learning techniques.", image: ds, link: "/Course2" },
  { id: 3, title: "Mobile Development", description: "Build iOS and Android apps using Flutter.", image: md, link: "#" },
  { id: 4, title: "UI/UX Design", description: "Learn user-centered design principles and tools.", image: Ui, link: "#" },
  { id: 5, title: "Cloud Computing", description: "Explore AWS, Azure, and cloud architecture.", image: cl, link: "#" },
  { id: 6, title: "Cybersecurity", description: "Protect systems and networks from cyber threats.", image: cs, link: "#" },
  { id: 7, title: "Artificial Intelligence", description: "Explore machine learning, deep learning, and AI techniques.", image: Ai, link: "#" },
  { id: 8, title: "IOT", description: "Build smart devices and networks with IoT.", image: Iot, link: "#" }
];

const Courses = () => {
  return (
    <div className="courses-wrapper">
      <div className="courses-header">
        <h1>Courses We Have:</h1>
        <button className="courses-view-all">View All</button>
      </div>
      <div className="courses-container">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} className="course-image" />
            <Link to={course.link}>
              <h3>{course.title}</h3>
            </Link>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
