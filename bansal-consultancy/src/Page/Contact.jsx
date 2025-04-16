import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateEmail = (email) => {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailPattern.test(email);
  };
  
  const validatePhone = (phone) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  };
  
  const countWords = (text) => {
    return text.trim().split(/\s+/).length;
  };
  
  const handleSubmit = () => {
    const { name, email, phone, subject, message } = formData;
  
    if (!name || !email || !phone || !subject || !message) {
      setError("Please fill out all fields.");
      return;
    }
  
    if (!validateEmail(email)) {
      setError("Please enter a valid Gmail address (e.g., example@gmail.com).");
      return;
    }
  
    if (!validatePhone(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
  
    if (subject.length < 5) {
      setError("Subject must be at least 5 characters.");
      return;
    }
  
    if (countWords(message) < 10) {
      setError("Message must be at least 10 words.");
      return;
    }
  
    setError("");
    const text = `Hello! I want to get in touch regarding:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/918949091256?text=${encodedText}`;
    window.open(whatsappURL, "_blank");
  };
  
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
        <form className="bg-gray-900 p-8 rounded-xl shadow-lg border border-yellow-400" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm mb-2 text-yellow-300">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="John Doe"
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-yellow-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="john@example.com"
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-yellow-300">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="+91 98765 43210"
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-yellow-300">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                placeholder="Hiring Inquiry / Job Seeker Help"
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2 text-yellow-300">Your Message</label>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              placeholder="Tell us more about how we can help you..."
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
            />
          </div>

          {error && <p className="text-red-500 font-semibold mb-4">{error}</p>}

          <button
            onClick={handleSubmit}
            className="bg-yellow-200 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Send Message on WhatsApp
          </button>
        </form>
      </section>

      {/* Location / Info */}
      <section className="py-16 px-6 text-center text-gray-300">
        <h2 className="text-2xl font-semibold text-yellow-200 mb-4">Our Office</h2>
        <p>Bansal Consultancy Pvt. Ltd.</p>
        <p>123 Business Street, Mumbai, Maharashtra - 400001</p>
        <p>Email: support@bansalconsultancy.in</p>
        <p>Phone: +91 98765 43210</p>
      </section>
    </div>
  );
};

export default ContactPage;
