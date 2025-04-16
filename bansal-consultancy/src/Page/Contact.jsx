import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Hero */}
      <section className="py-20 px-6 text-center bg-gray-900">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-yellow-200 mb-4"
        >
          Get in Touch with Us
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Whether you're an employer or a job seeker, we're here to help. Reach
          out for any inquiries or assistance.
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <form className="bg-gray-900 p-8 rounded-xl shadow-lg border border-yellow-400">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm mb-2 text-yellow-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-yellow-300">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-yellow-300">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-yellow-300">
                Subject
              </label>
              <input
                type="text"
                placeholder="Hiring Inquiry / Job Seeker Help"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2 text-yellow-300">
              Your Message
            </label>
            <textarea
              rows="5"
              placeholder="Tell us more about how we can help you..."
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
            />
          </div>
          {/* <button
            type="submit"
            className="bg-yellow-200 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Send Message
          </button> */}
          <a
            href="https://wa.me/918949091256?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-200 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition text-center"
          >
            Send Message on WhatsApp
          </a>
        </form>
      </section>

      {/* Location / Info */}
      <section className="py-16 px-6 text-center text-gray-300">
        <h2 className="text-2xl font-semibold text-yellow-200 mb-4">
          Our Office
        </h2>
        <p>Bansal Consultancy Pvt. Ltd.</p>
        <p>123 Business Street, Mumbai, Maharashtra - 400001</p>
        <p>Email: support@bansalconsultancy.in</p>
        <p>Phone: +91 98765 43210</p>
      </section>
    </div>
  );
};

export default ContactPage;
