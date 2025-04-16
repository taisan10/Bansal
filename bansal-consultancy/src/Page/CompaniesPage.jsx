import React from "react";
import { motion } from "framer-motion";

const ForCompanies = () => {
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
          Smart Hiring Solutions for Growing Companies
        </motion.h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          We simplify your recruitment process by connecting you with pre-screened,
          skilled professionals that align with your business goals.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 bg-gray-950">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-yellow-200 mb-4">Why Partner With Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From startups to enterprises, we help companies of all sizes scale with the right talent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Tailored Hiring",
              desc: "We understand your business needs and source talent accordingly.",
              icon: "👔",
            },
            {
              title: "Quick Turnaround",
              desc: "Reduce time-to-hire with our efficient sourcing and screening.",
              icon: "⏱️",
            },
            {
              title: "Vetted Candidates",
              desc: "Only quality, pre-screened professionals make the cut.",
              icon: "✅",
            },
            {
              title: "All Industries Covered",
              desc: "From IT to Logistics, Sales to Healthcare — we’ve got it covered.",
              icon: "🌐",
            },
            {
              title: "Scalable Teams",
              desc: "Hire for one role or build an entire team — we’re flexible.",
              icon: "📈",
            },
            {
              title: "End-to-End Support",
              desc: "We support you through interviews, onboarding, and beyond.",
              icon: "🤝",
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

      {/* Call to Action */}
      <section className="py-20 px-6 bg-yellow-50 text-black text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Hire?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let’s talk about your hiring needs and how we can help your company grow.
        </p>
        <a
          href="/contact"
          className="bg-black text-yellow-200 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
        >
          Request Talent
        </a>
      </section>

     
    </div>
  );
};

export default ForCompanies;



// import React from "react";
// import { motion } from "framer-motion";

// const benefits = [
//   {
//     title: "Tailored Hiring Solutions",
//     description:
//       "We understand your business needs and deliver candidates who are the right fit – fast, reliable, and skilled.",
//   },
//   {
//     title: "Industry-Specific Talent",
//     description:
//       "From IT to admin staff, we have a wide network of professionals experienced in different domains.",
//   },
//   {
//     title: "Cost & Time Efficiency",
//     description:
//       "Our streamlined hiring process reduces time-to-hire and operational costs.",
//   },
//   {
//     title: "Contract & Permanent Hiring",
//     description:
//       "Whether you need short-term support or long-term employees, we provide flexible staffing models.",
//   },
//   {
//     title: "Pan-India Reach",
//     description:
//       "Our reach spans across cities and states, ensuring access to the best talent no matter your location.",
//   },
//   {
//     title: "End-to-End Support",
//     description:
//       "From sourcing and screening to onboarding, we handle it all so you can focus on growth.",
//   },
// ];

// const ForCompanies = () => {
//   return (
//     <div className="bg-gray-950 text-white min-h-screen p-6">
//       <h1 className="text-4xl font-bold text-center text-yellow-400 mb-6">
//         Hiring Solutions for Companies
//       </h1>
//       <p className="text-gray-300 max-w-3xl mx-auto text-center text-base mb-12">
//         Bansal Consultancy partners with companies to streamline hiring. We
//         provide access to a curated pool of professionals across various
//         industries to match your business needs.
//       </p>

//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//         {benefits.map((benefit, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-yellow-200/40 transition-all"
//           >
//             <h3 className="text-xl font-semibold text-yellow-300 mb-2">
//               {benefit.title}
//             </h3>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               {benefit.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       <div className="text-center mt-16">
//         <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition">
//           Request Employees Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ForCompanies;
