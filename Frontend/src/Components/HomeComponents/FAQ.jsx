import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

const faqData = [
  {
    question: "What is included with my purchase?",
    answer:
      "You get complete source code, documentation, updates and premium support.",
  },
  {
    question: "Where can I buy Adon HTML?",
    answer: "You can purchase it from ThemeForest and download it instantly.",
  },
  {
    question: "Do I need extra plugins to build websites?",
    answer:
      "No plugins are required. Everything is built using standard HTML, CSS and JavaScript.",
  },
  {
    question: "How do I get support?",
    answer:
      "Contact our support team via email or support portal and we'll help you quickly.",
  },
  {
    question: "Can I use the demo images?",
    answer:
      "Demo images are for preview purposes only. Replace them with your own content.",
  },
  {
    question: "How do I get updates?",
    answer:
      "Whenever a new version is released you can download it from your purchase account.",
  },
  {
    question: "Can I use the template on multiple websites?",
    answer:
      "It depends on your license. Check the license details before using it on multiple projects.",
  },
  {
    question: "Why choose RavexTheme templates?",
    answer:
      "They are modern, responsive, fast and come with clean, maintainable code.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f3f3f3] py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-8 text-left"
              >
                <h3 className="text-xl md:text-2xl font-medium">
                  {faq.question}
                </h3>

                {openIndex === index ? (
                  <FiX className="text-2xl" />
                ) : (
                  <FiPlus className="text-2xl" />
                )}
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-40 pb-8 px-8" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
