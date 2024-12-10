import React from 'react';
import { Link } from 'react-router-dom';
import './Course1.css';

const Course2 = () => {
  return (
    <div className="course-container">
      <header className="intro">
        <section className="section-detail">
          <h2>Data Science</h2>
          <h4>Unlock the Power of Data and Insights</h4>
          <ul>
            <li>Comprehensive Learning</li>
            <li>Industry Readiness</li>
          </ul>
          <h3>Recommended for Students and Working Professionals</h3>
          <Link to="/enroll" className="btn">
            Enroll Now
          </Link>
          <p>
            Avail the offer today, Enroll Now and get <strong>50% off</strong> New Year Deal 🎊
          </p>
        </section>
      </header>
      <main className="course-content">
        <section className="description">
          <h2>Course Description</h2>
          <h3>Title: Data Science - Master the Art of Data Analysis</h3>
          <h3>Description:</h3>
          <p>
            Embark on a journey to become a data expert. This course is designed
            for students and professionals aiming to build a strong foundation in
            Data Science while preparing for industry-level challenges. With a
            comprehensive curriculum and hands-on learning approach, you'll develop
            the skills needed to analyze data effectively and derive valuable insights.
          </p>
          <h3>Key Highlights:</h3>
          <ul>
            <li>
              <strong>Comprehensive Curriculum:</strong> Cover core data science concepts
              like Python, R, statistics, and data visualization, and advance to
              machine learning and deep learning.
            </li>
            <li>
              <strong>Hands-on Learning:</strong> Practical sessions and projects that
              include analyzing real-world datasets and building predictive models.
            </li>
            <li>
              <strong>Industry Relevance:</strong> Learn data science for business
              analytics, AI-powered solutions, and more.
            </li>
            <li>
              <strong>Career Readiness:</strong> Gain skills to excel in data science
              roles with a focus on problem-solving and technical interviews.
            </li>
          </ul>
          <h3>What You'll Learn:</h3>
          <ul>
            <li>Python Basics: Data Types, Control Structures, and Libraries.</li>
            <li>Data Wrangling: Pandas and NumPy for data manipulation.</li>
            <li>Visualization: Creating impactful visualizations with Matplotlib and Seaborn.</li>
            <li>Machine Learning: Implement supervised and unsupervised algorithms.</li>
            <li>Deep Learning: Build and train neural networks using TensorFlow.</li>
          </ul>
          <h3>Recommended For:</h3>
          <p>
            Students, working professionals, and anyone looking to start or
            advance their career in data science. Enroll now and become a data
            scientist shaping the future of industries!
          </p>
        </section>
      </main>
    </div>
  );
};

export default Course2;
