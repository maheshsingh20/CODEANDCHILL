import React, { useEffect } from "react";
import Highcharts from "highcharts";

import "./Help2.css";

const Help2 = () => {
  useEffect(() => {
    Highcharts.chart("rating-contest-graph-container", {
      chart: {
        type: "line",
        height: 123,
        backgroundColor: "transparent",
        width: 360,
      },
      title: {
        text: "",
      },
      xAxis: {
        categories: ["Sept 2024", "Nov 2024"],
        lineColor: "transparent",
      },
      yAxis: {
        title: {
          text: "",
        },
        gridLineWidth: 0,
      },
      series: [
        {
          name: "Rating",
          data: [1726, 1600], // Example data points
          color: "maroon", // Correct syntax for using color names
        },
      ],
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      accessibility: {
        enabled: false, // Disable accessibility to avoid the warning
      },
    });
  }, []);

  return (
    <div
      id="rating-contest-graph-container"
      className="rating-contest-graph"
    ></div>
  );
};

export default Help2;
