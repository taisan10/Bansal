// Components/TestimonialSection.js

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ravi Sharma",
    role: "HR Head, TechNova",
    message:
      "Bansal Consultancy helped us build our tech team in record time. The process was smooth, and the candidates were well-vetted.",
  },
  {
    name: "Priya Verma",
    role: "Founder, RetailHive",
    message:
      "We scaled our sales unit quickly thanks to Bansal Consultancy. Highly professional and responsive team!",
  },
  {
    name: "Amit Desai",
    role: "Operations Manager, Luxe Hotels",
    message:
      "Their understanding of hospitality roles is unmatched. We hired excellent front-office staff with their help.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-gray-950 py-20 px-6 text-white">
      <div className="text-center mb-14">
        <h3 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">
          What Our Clients Say
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          Hear from some of the companies we've proudly partnered with.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-yellow-400/40 transition"
          >
            <p className="text-gray-300 italic mb-4">
              “{testimonial.message}”
            </p>
            <div>
              <h4 className="text-yellow-300 font-semibold text-lg">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
