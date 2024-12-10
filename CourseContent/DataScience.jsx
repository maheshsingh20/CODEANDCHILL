import React, { useState } from 'react';
import './DataScience.css';

const DataScience = () => {
  const [currentUnit, setCurrentUnit] = useState(1); // State to track the current unit
  const [activeLesson, setActiveLesson] = useState(null); // State to track active lesson for each unit

  const handleUnitClick = (unit) => {
    setCurrentUnit(unit);
    setActiveLesson(null); // Reset active lesson when changing units
  };

  const handleLessonClick = (lesson) => {
    setActiveLesson(lesson === activeLesson ? null : lesson); // Toggle active lesson
  };

  const renderUnitContent = () => {
    switch (currentUnit) {
      case 1:
        return (
          <div className="unit-content">
            <div className="lesson" onClick={() => handleLessonClick('lesson1')}>
              <h3>Introduction to Data Science</h3>
              {activeLesson === 'lesson1' && (
                <>
                  <div className="article">
                    <p>
                      Data Science involves extracting insights and knowledge from structured
                      and unstructured data using scientific methods, processes, and algorithms.
                    </p>
                    <ul>
                      <li>Basics of Data Analysis</li>
                      <li>Overview of Python and R</li>
                      <li>Understanding Data Structures</li>
                    </ul>
                  </div>
                  <div className="video">
                    <h3>Watch Video</h3>
                    <iframe
                      src="https://www.youtube.com/embed/xC-c7E5PK0Y"
                      title="Introduction to Data Science"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="quiz">
                    <h3>Quiz</h3>
                    <p>Test your knowledge of the basics of Data Science.</p>
                    <button className="quiz-button">Take Quiz</button>
                  </div>
                </>
              )}
            </div>
            <div className="lesson" onClick={() => handleLessonClick('lesson2')}>
              <h3>Data Wrangling</h3>
              {activeLesson === 'lesson2' && (
                <>
                  <div className="article">
                    <p>
                      Learn how to clean, organize, and transform raw data into a usable format for analysis.
                    </p>
                    <ul>
                      <li>Using Pandas for Data Manipulation</li>
                      <li>Handling Missing Values</li>
                      <li>Data Normalization and Transformation</li>
                    </ul>
                  </div>
                  <div className="video">
                    <h3>Watch Video</h3>
                    <iframe
                      src="https://www.youtube.com/embed/r-uOLxNrNk8"
                      title="Data Wrangling"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="quiz">
                    <h3>Quiz</h3>
                    <p>Test your skills in data cleaning and wrangling.</p>
                    <button className="quiz-button">Take Quiz</button>
                  </div>
                </>
              )}
            </div>
            <div className="lesson" onClick={() => handleLessonClick('lesson3')}>
              <h3>Machine Learning Basics</h3>
              {activeLesson === 'lesson3' && (
                <>
                  <div className="article">
                    <p>
                      Understand the fundamental concepts of supervised and unsupervised learning.
                    </p>
                    <ul>
                      <li>Linear Regression</li>
                      <li>Classification Algorithms</li>
                      <li>Clustering Techniques</li>
                    </ul>
                  </div>
                  <div className="video">
                    <h3>Watch Video</h3>
                    <iframe
                      src="https://www.youtube.com/embed/7EHpcQnD8kY"
                      title="Machine Learning Basics"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="quiz">
                    <h3>Quiz</h3>
                    <p>Challenge your knowledge of machine learning fundamentals.</p>
                    <button className="quiz-button">Take Quiz</button>
                  </div>
                </>
              )}
            </div>
          </div>
        );
      default:
        return <p>Select a unit to get started!</p>;
    }
  };

  return (
    <div className="CoursePage">
      <section className="course-header">
        <h1>Data Science Course</h1>
        <p>
          Master the art of data analysis and machine learning with our comprehensive Data Science course.
        </p>
      </section>
      <div className="course-navigation">
        <button onClick={() => handleUnitClick(1)} className={currentUnit === 1 ? 'active' : ''}>
          Unit 1: Introduction
        </button>
        <button onClick={() => handleUnitClick(2)} className={currentUnit === 2 ? 'active' : ''}>
          Unit 2: Data Wrangling
        </button>
        <button onClick={() => handleUnitClick(3)} className={currentUnit === 3 ? 'active' : ''}>
          Unit 3: Machine Learning
        </button>
      </div>
      <div className="course-content">{renderUnitContent()}</div>
      <div className="projects">
        <h2>Capstone Project</h2>
        <p>
          Work on a real-world dataset to apply your learning and build a predictive model.
        </p>
        <button className="project-button">View Project Details</button>
      </div>
    </div>
  );
};

export default DataScience;
