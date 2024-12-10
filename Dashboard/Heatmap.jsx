import React from "react";
import "./Heatmap.css";

const Heatmap = () => {
  const days = Array.from({ length: 365 }, (_, i) => ({
    day: i + 1,
    submissions: Math.floor(Math.random() * 10), // Simulate random submissions
  }));

  const getColor = (count) => {
    if (count === 0) return "#e0e0e0";
    if (count <= 3) return "#c6e48b";
    if (count <= 6) return "#7bc96f";
    return "#239a3b";
  };

  return (
    <div className="heatmap">
      {days.map((day, index) => (
        <div
          key={index}
          className="heatmap-cell"
          style={{ backgroundColor: getColor(day.submissions) }}
          title={`Day ${day.day}: ${day.submissions} submissions`}
        />
      ))}
    </div>
  );
};

export default Heatmap;
