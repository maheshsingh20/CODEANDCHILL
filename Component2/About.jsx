import React from "react";
import "./About.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Web Developer",
    feedback: "Code and Chill helped me transition from a beginner to a professional developer. The resources are excellent!"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Data Scientist",
    feedback: "The Data Science course was well-structured and engaging. I highly recommend it to anyone looking to build a career in data science."
  },
  {
    id: 3,
    name: "Sam Wilson",
    role: "UI/UX Designer",
    feedback: "The design principles I learned here have greatly improved my projects. Thank you, Code and Chill!"
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Cloud Engineer",
    feedback: "The hands-on projects in the cloud computing course helped me secure my first job in the tech industry."
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "Cybersecurity Analyst",
    feedback: "Amazing platform for anyone looking to explore and grow in cybersecurity. Great community as well!"
  },
  {
    id: 6,
    name: "Sophia Johnson",
    role: "AI Enthusiast",
    feedback: "The AI course was fascinating! I learned a lot about machine learning and neural networks."
  },
];

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Code and Chill</strong>! We are dedicated to providing 
        a platform where developers and learners can explore the world of coding 
        through engaging courses, projects, and challenges. 
      </p>
      <p>
        Join us to enhance your skills, collaborate with a vibrant community, 
        and enjoy the journey of continuous learning. Let's code and chill!
      </p>
      <h2>What Our Users Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h4 className="testimonial-name">- {testimonial.name}</h4>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
