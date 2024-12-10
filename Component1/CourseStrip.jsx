import React, { useRef } from "react";
import "./CourseStrip.css";

const CoursesStrip = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="coursesStripWrapper" data-dark-mode="false">
      <div className="mainContainerSubheader" id="secondarySubHeader">
        <div className="scrollButtons">
          <button onClick={() => scroll("left")} className="scrollButton">
            &lt;
          </button>
        </div>
        <div className="scrollContainer" ref={scrollRef}>
          <ul className="containerSubheader">
            {[
              { label: "Trending Now", link: "#" },
              { label: "DSA", link: "#" },
              { label: "Web Tech", link: "#" },
              { label: "Foundational Courses", link: "#" },
              { label: "Data Science", link: "#" },
              { label: "Practice Problem", link: "#" },
              { label: "Python", link: "#" },
              { label: "Machine Learning", link: "#" },
              { label: "JavaScript", link: "#" },
              { label: "System Design", link: "#" },
              { label: "Django", link: "#" },
              { label: "DevOps Tutorial", link: "#" },
              { label: "Java", link: "#" },
              { label: "C", link: "#" },
              { label: "C++", link: "#" },
              { label: "ReactJS", link: "#" },
              { label: "NodeJS", link: "#" },
              { label: "CP Live", link: "#" },
              { label: "Aptitude", link: "#" },
              { label: "Puzzles", link: "#" },
              { label: "Projects", link: "#" }
            ].map((item, index) => (
              <li key={index} className="courseItem">
                <a href={item.link} className="link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="scrollButtons">
          <button onClick={() => scroll("right")} className="scrollButton">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesStrip;
