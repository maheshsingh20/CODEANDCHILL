import React, { useState } from "react";
import "./Freq.css";

const faqData = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components.",
  },
  {
    question: "What are components in React?",
    answer:
      "Components are the building blocks of a React application's UI. They allow you to break the UI into independent, reusable pieces.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript. It looks like HTML but is used with React to describe what the UI should look like.",
  },
  {
    question: "What is the difference between state and props?",
    answer:
      "State is managed within a component, while props are passed to a component from its parent. Props are read-only, whereas state can be updated.",
  },
];

const Freq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
              <span className="faq-toggle">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freq;
