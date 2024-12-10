import React from 'react';
import './Help3.css'; // Import the CSS file

const Help3 = ({ completed, total }) => {
  const percentage = (completed / total) * 100;
  const strokeDashoffset = (1 - (completed / total)) * 265.2; // Adjust this value based on the percentage

  return (
    <div className="progress-card">
      <div className="circle-container">
        <div className="circle-mask">
          <svg viewBox="0 0 100 100" className="circle-svg">
            <defs>
              <clipPath id="bar-mask">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.3622 21.3622C5.54592 37.1784 5.54592 62.8216 21.3622 78.6378C21.9479 79.2236 21.9479 80.1734 21.3622 80.7591C20.7764 81.3449 19.8266 81.3449 19.2408 80.7591C2.25303 63.7713 2.25303 36.2287 19.2408 19.2409C36.2286 2.25305 63.7713 2.25305 80.7591 19.2409C97.7469 36.2287 97.7469 63.7713 80.7591 80.7591C80.1733 81.3449 79.2236 81.3449 78.6378 80.7591C78.052 80.1734 78.052 79.2236 78.6378 78.6378C94.454 62.8216 94.454 37.1784 78.6378 21.3622C62.8216 5.54594 37.1784 5.54594 21.3622 21.3622Z"
                ></path>
              </clipPath>
            </defs>
            <g clipPath="url(#bar-mask)">
              <circle className="circle-progress stroke-easy" cx="50" cy="50" r="42"></circle>
              <circle
                className="circle-progress stroke-medium"
                cx="50"
                cy="50"
                r="42"
                style={{ strokeDashoffset }}
              ></circle>
            </g>
          </svg>
        </div>
        <div className="text-overlay">
          <div className="percentage">
            <span className="main-percentage">{completed}</span>
            <span className="total-percentage">/{total}</span>
          </div>
          <div className="status">
            <span className="status-text">Solved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help3;
