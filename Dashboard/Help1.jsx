import React from "react";
import "./Help1.css";

const Help1 = () => {
  return (
    <div className="contest-stats">
      <div className="stats-container">
        <div className="stat-item">
          <div className="label">Contest Rating</div>
          <div className="value large">1,726</div>
        </div>
        <div className="stat-item">
          <div className="label">Global Ranking</div>
          <div className="value">
            68,129<span className="sub-value">/627,990</span>
          </div>
        </div>
        <div className="stat-item attended">
          <div className="label">Attended</div>
          <div className="value">9</div>
        </div>
      </div>
    </div>
  );
};

export default Help1;
