// Components/QnASection.js

import React from "react";

const QnASection = () => {
  const questions = [
    {
      question: "What services does Bansal Consultancy offer?",
      answer:
        "We provide skilled professionals across various domains like IT, Sales, Customer Support, HR, and more — tailored to your business requirements.",
    },
    {
      question: "How can I request employees for my business?",
      answer:
        "Simply click the 'Request Employees' button on our homepage, fill in your details, and our team will get in touch with suitable candidates.",
    },
    {
      question: "Can job seekers apply through your platform?",
      answer:
        "Yes! Job seekers can submit their resumes using the 'Submit Resume' button. We’ll connect them with relevant opportunities.",
    },
    {
      question: "Is there any fee involved for candidates?",
      answer:
        "No, our services are completely free for job seekers. We charge companies for talent acquisition services.",
    },
    {
      question: "What industries do you cater to?",
      answer:
        "We serve multiple industries including Tech, Finance, Healthcare, Education, Hospitality, and Manufacturing.",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h3 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">
          Frequently Asked Questions
        </h3>
        <p className="text-gray-400 text-base sm:text-lg">
          Have a question? We're here to help.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {questions.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-yellow-400/30 transition"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-yellow-300 mb-2">
              {item.question}
            </h4>
            <p className="text-gray-300 text-sm sm:text-base">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QnASection;
