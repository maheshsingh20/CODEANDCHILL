import React, { useState, useEffect } from "react";
import "./Contest.css";

const Contest = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59"); // Set contest date here
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft("Contest Started!");
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft(
          `${days}d ${hours}h ${minutes}m ${seconds}s`
        );
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="contest-container">
      <div className="contest-card">
        <div className="contest-image">
          <h2 className="contest-name">Code and Chill Contest</h2>
          <p className="contest-date">Date: December 31, 2024</p>
        </div>
        <div className="contest-timer">{timeLeft}</div>
      </div>
      <div className="contest-guidelines">
        <h3>Guidelines:</h3>
        <ul>
          <li>Ensure your code is well-commented and readable.</li>
          <li>Submission deadline is strictly adhered to.</li>
          <li>Respect the rules of the competition.</li>
          <li>No plagiarism is allowed.</li>
        </ul>
      </div>
      <button className="contest-register">Register Now</button>
    </div>
  );
};

export default Contest;
