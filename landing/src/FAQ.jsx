import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: ""
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: ""
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently asked questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
            key={index}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && faq.answer && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
