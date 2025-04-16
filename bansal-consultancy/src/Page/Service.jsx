import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "IT Professionals",
    description: "We provide highly skilled IT professionals, including:",
    points: ["Full-stack Developers", "DevOps Engineers", "UI/UX Designers", "QA Testers"],
  },
  {
    title: "Sales & Marketing",
    description: "Experts to help you grow your market reach:",
    points: ["Digital Marketers", "Sales Executives", "SEO Specialists", "Brand Strategists"],
  },
  {
    title: "Customer Support",
    description: "Customer-focused support staff for any industry:",
    points: ["Inbound & Outbound Calling", "Chat Support", "Email Handling"],
  },
  {
    title: "Administrative Staff",
    description: "Efficient and organized staff to manage admin tasks:",
    points: ["Office Assistants", "Receptionists", "Clerks", "Front Desk Staff"],
  },
  {
    title: "Field Executives",
    description: "On-ground personnel for day-to-day field operations:",
    points: ["Delivery Executives", "Sales Field Agents", "Logistics Coordinators"],
  },
  {
    title: "Contract & Permanent Hiring",
    description: "Flexible hiring solutions tailored to your project timeline:",
    points: ["Short-Term Contracts", "Long-Term Staffing", "Freelance Specialists"],
  },
  {
    title: "HR & Recruitment",
    description: "Build your internal workforce with skilled HR professionals:",
    points: ["Recruiters", "HR Generalists", "Payroll Executives"],
  },
  {
    title: "Finance & Accounting",
    description: "Maintain your financial operations seamlessly:",
    points: ["Accountants", "Finance Analysts", "Tax Consultants"],
  },
  {
    title: "Logistics & Supply Chain",
    description: "Support your backend with efficient logistics experts:",
    points: ["Inventory Managers", "Warehouse Staff", "Supply Coordinators"],
  },
  {
    title: "Manufacturing & Skilled Labor",
    description: "Find trained blue-collar workers for factories & workshops:",
    points: ["Machine Operators", "Welders", "Technicians", "Assembly Line Workers"],
  },
  {
    title: "Healthcare & Nursing",
    description: "Dedicated staff for clinics, hospitals, and elder care:",
    points: ["Nurses", "Ward Boys", "Physiotherapists", "Healthcare Assistants"],
  },
  {
    title: "Education & Training",
    description: "Empower educational institutions with trained faculty:",
    points: ["Teachers", "Trainers", "Coaches", "Tutors"],
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen p-6">
     <div className="bg-gray-900 text-white py-12 px-6 rounded-xl shadow-lg max-w-6xl mx-auto mb-12">
  <h2 className="text-3xl sm:text-4xl font-bold text-yellow-200 text-center mb-6">
    About Our Services
  </h2>
  <p className="text-gray-300 text-base sm:text-lg text-center max-w-4xl mx-auto mb-8">
    Bansal Consultancy is a trusted hiring partner for businesses across India, offering complete talent acquisition solutions.
    Whether you’re a startup or a large enterprise, we help you find the right professionals quickly and efficiently,
    tailored exactly to your industry and workforce needs.
  </p>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-yellow-300 transition">
      <h4 className="text-yellow-300 font-semibold text-lg mb-2">What We Offer</h4>
      <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm">
        <li>Permanent & Contract Hiring</li>
        <li>Full-time, Part-time & Remote Staffing</li>
        <li>Skilled & Unskilled Labor Supply</li>
        <li>On-site and Field Executive Hiring</li>
        <li>Bulk Hiring & Campus Recruitment</li>
        <li>Candidate Database Access</li>
      </ul>
    </div>

    <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-yellow-300 transition">
      <h4 className="text-yellow-300 font-semibold text-lg mb-2">Industries We Serve</h4>
      <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm">
        <li>IT & Software Development</li>
        <li>Sales & Marketing</li>
        <li>Finance & Accounting</li>
        <li>Customer Support & BPO</li>
        <li>Healthcare & Nursing</li>
        <li>Education & Training</li>
      </ul>
    </div>

    <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-yellow-300 transition">
      <h4 className="text-yellow-300 font-semibold text-lg mb-2">Why Choose Us</h4>
      <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm">
        <li>Time-saving hiring process</li>
        <li>Tailored candidate selection</li>
        <li>PAN India recruitment network</li>
        <li>Verified and job-ready candidates</li>
        <li>End-to-end hiring support</li>
      </ul>
    </div>
  </div>

 
</div>
{/* Key Highlights Section */}
<section className="bg-gray-900 p-6 rounded-xl mb-12 max-w-5xl mx-auto shadow-md">
  <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 text-center">
    Why Choose Bansal Consultancy?
  </h2>
  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-300 text-sm sm:text-base">
    <li className="flex items-start gap-2">
      <span className="text-yellow-300">✔</span> Industry-specific hiring expertise
    </li>
    <li className="flex items-start gap-2">
      <span className="text-yellow-300">✔</span> Quick turnaround for urgent hiring
    </li>
    <li className="flex items-start gap-2">
      <span className="text-yellow-300">✔</span> Pre-screened & verified candidates
    </li>
    <li className="flex items-start gap-2">
      <span className="text-yellow-300">✔</span> Contract & permanent placements
    </li>
    <li className="flex items-start gap-2">
      <span className="text-yellow-300">✔</span> PAN India hiring capability
    </li>
    <li className="flex items-start gap-2">
      <span className="text-yellow-300">✔</span> Personalized support for every client
    </li>
  </ul>
</section>


      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-yellow-400/40 transition-all"
          >
            <img
              src={`/assets/IT${index}.png`}
              alt={service.title}
              className="w-20 h-20 mb-4 object-contain mx-auto"
            />
            <h3 className="text-xl font-semibold text-yellow-300 mb-2 text-center">
              {service.title}
            </h3>
            <p className="text-gray-300 mb-3 text-center">{service.description}</p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
