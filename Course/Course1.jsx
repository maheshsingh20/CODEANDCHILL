import React from "react";
import Course from "./Course";

const  Course1 = () => {
  const courseData = {
    title: "Advanced React Development",
    subtitle: "Master React and build powerful web applications",
    description:
      "This course dives deep into React, including state management, advanced hooks, performance optimization, and deploying full-stack apps.",
    learningOutcomes: [
      "Understand React's component lifecycle",
      "Master state and context APIs",
      "Optimize performance with memoization",
      "Use React Router for advanced navigation",
      "Integrate APIs and backend services",
      "Deploy full-stack React applications"
    ],
    content: [
      {
        title: "Getting Started with React",
        description: "Introduction, setup, and first steps in React."
      },
      {
        title: "React Components and Props",
        description: "Learn about reusable components and data passing."
      },
      {
        title: "State Management",
        description: "Handle complex states with useState and useReducer."
      },
      {
        title: "React Hooks",
        description: "Understand advanced hooks like useEffect and useMemo."
      },
      {
        title: "Performance Optimization",
        description: "Tips and techniques for a faster React app."
      }
    ],
    instructor: {
      name: "Jane Smith",
      photo: "https://via.placeholder.com/150",
      bio: "Jane is a senior software engineer with over 10 years of experience in web development and a passion for teaching React."
    },
    enrollText:
      "Join thousands of students worldwide in mastering React. Get lifetime access to course materials and exclusive mentorship from industry experts."
  };

  return (
    <div>
      <Course courseData={courseData} />
    </div>
  );
};

export default Course1;
