import React from "react";
import { motion } from "framer-motion";

const JobSeekers = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
     

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gray-900">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-yellow-200 mb-4"
        >
          Your Next Job Starts Here
        </motion.h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Explore top job opportunities and get hired by leading companies across industries.
        </p>
      </section>

      {/* Benefits for Job Seekers */}
      <section className="py-16 px-6 bg-gray-950">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-yellow-200 mb-4">Why Choose Us?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide personalized job support, career guidance, and placement assistance tailored just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "📄",
              title: "Resume Assistance",
              desc: "We help you create standout resumes to impress employers.",
            },
            {
              icon: "💼",
              title: "Matching Jobs",
              desc: "Get matched to roles that suit your skills and preferences.",
            },
            {
              icon: "🎯",
              title: "Career Counseling",
              desc: "Personalized support to help you reach your career goals.",
            },
            {
              icon: "🧠",
              title: "Skill Development",
              desc: "Access workshops, tips, and interview guidance.",
            },
            {
              icon: "⚡",
              title: "Quick Placement",
              desc: "Get placed faster with our strong employer network.",
            },
            {
              icon: "🌍",
              title: "All Domains Covered",
              desc: "IT, Marketing, Finance, Education, Healthcare, and more.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl border border-yellow-200 shadow-lg transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-200 mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resume Submission CTA */}
      <section className="py-20 px-6 bg-yellow-50 text-black text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Apply?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Share your resume with us and we’ll connect you with the right opportunity.
        </p>
        <a
          href="/submit-resume"
          className="bg-black text-yellow-200 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
        >
          Submit Your Resume
        </a>
      </section>

    
    </div>
  );
};

export default JobSeekers;
