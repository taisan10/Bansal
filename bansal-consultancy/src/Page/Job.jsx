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

      {/* How We Help */}
      <section className="bg-gray-900 py-10 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-200 mb-4">How We Help You Get Hired</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          From resume building to final placement, we support you every step of the way—whether you're a fresher, experienced professional, or looking for a domain switch.
        </p>
      </section>

      {/* Benefits Section */}
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

      {/* Job Categories Section */}
      <section className="py-16 px-6 bg-gray-950">
        <h2 className="text-3xl font-bold text-yellow-200 text-center mb-10">Job Categories We Hire For</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-sm text-gray-300">
          {[
            "IT & Software",
            "Sales & Marketing",
            "Customer Support",
            "Field Executives",
            "HR & Recruitment",
            "Finance & Accounting",
            "Education & Training",
            "Healthcare & Nursing",
            "Manufacturing & Skilled Labor",
            "Logistics & Supply Chain"
          ].map((category, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg text-center border border-yellow-200">
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Journey */}
      <section className="bg-gray-900 text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-yellow-200 mb-6">Your Hiring Journey</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-gray-300 text-sm">
          {[
            { step: "1️⃣ Submit Resume", detail: "Send us your updated resume." },
            { step: "2️⃣ Get Shortlisted", detail: "We match you with job roles." },
            { step: "3️⃣ Interview Support", detail: "Mock interviews & real-time updates." },
            { step: "4️⃣ Get Hired", detail: "Receive offer letters and start working." },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-gray-800 rounded-lg border border-yellow-200/30">
              <h3 className="text-lg text-yellow-200 font-semibold mb-2">{item.step}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-950 text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-yellow-200 text-center mb-10">What Our Candidates Say</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-sm text-gray-300">
          {[
            {
              name: "Ankit Sharma",
              review: "Got placed in an MNC within 2 weeks! The resume tips really worked.",
            },
            {
              name: "Pooja Yadav",
              review: "Their support team is always available and really helpful.",
            },
            {
              name: "Vikram Jain",
              review: "The job matching system is on point. Found my dream role!",
            },
          ].map((person, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg border border-yellow-200/30">
              <p className="italic mb-2">“{person.review}”</p>
              <p className="text-yellow-200 font-semibold">- {person.name}</p>
            </div>
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
        <p className="mt-4 text-gray-700 text-sm">
          Or connect with us directly on {" "}
          <a
            href="https://wa.me/918949091256?text=Hi%2C%20I'm%20looking%20for%20job%20opportunities."
            className="text-green-600 font-semibold underline hover:text-green-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </p>
      </section>
    </div>
  );
};

export default JobSeekers;