import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "Are the courses online or in-person?",
    answer:
      "Our courses are fully online, allowing you to learn from anywhere, anytime. Some live sessions may be scheduled for real-time interaction.",
  },
  {
    question: "How long is the duration of each course?",
    answer:
      "Each course typically ranges between 4 to 12 weeks depending on the topic and intensity level.",
  },
  {
    question: "Do you offer any certifications?",
    answer:
      "Yes, upon successful completion of a course, you'll receive a verifiable certificate.",
  },
  {
    question: "Can I enroll in multiple courses at once?",
    answer:
      "Yes, you can enroll in as many courses as you like based on your comfort and time availability.",
  },
  {
    question: "Do I need prior experience to join a course?",
    answer:
      "Not necessarily. Many of our beginner courses start from scratch, but we also have intermediate and advanced levels.",
  },
  {
    question: "What if I miss a class?",
    answer:
      "All live classes are recorded. You can access them anytime in your dashboard.",
  },
  {
    question: "How can I register for a course?",
    answer:
      "Click on the course you're interested in and hit the 'Enroll Now' button. Follow the steps for payment and confirmation.",
  },
  {
    question: "Can I get a refund if I change my mind?",
    answer:
      "Yes, we offer a 7-day money-back guarantee if you’re unsatisfied with the course.",
  },
  {
    question: "Can I work on live projects during the course?",
    answer:
      "Yes, most of our courses include hands-on project work to apply your knowledge in real-time scenarios.",
  },
  {
    question: "Do you provide project assistance for college students?",
    answer:
      "Absolutely! We assist students with project work and help with documentation if needed.",
  },
  {
    question: "Will I get practical experience with industry tools?",
    answer:
      "Yes, our platform emphasizes hands-on experience with tools like Git, VS Code, Figma, Postman, etc.",
  },
  {
    question: "Do you offer free resources or workshops?",
    answer:
      "Yes, we regularly conduct free workshops and offer downloadable materials to help you learn more.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`transition-all duration-300 rounded-xl overflow-hidden shadow-md ${
              activeIndex === index ? 'bg-blue-100' : 'bg-blue-50 hover:bg-blue-100'
            }`}
          >
            <button
              className="flex justify-between items-center w-full text-left px-6 py-4 font-medium text-blue-900 text-lg"
              onClick={() => toggleFaq(index)}
            >
              {item.question}
              {activeIndex === index ? (
                <ChevronDown size={22} />
              ) : (
                <ChevronRight size={22} />
              )}
            </button>

            {activeIndex === index && (
              <div className="px-6 pb-5 text-gray-700 text-base">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;


