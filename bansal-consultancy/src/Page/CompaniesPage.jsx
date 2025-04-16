import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const companyDetails = [
  {
    name: "TechNova Pvt. Ltd.",
    department: "IT Professionals",
    qualification: "B.Tech/B.E. in Computer Science or related field",
    process: ["Resume Shortlisting", "Technical Round", "HR Interview"],
    salary: {
      "Full-stack Developer": "₹6-10 LPA",
      "DevOps Engineer": "₹7-12 LPA",
      "UI/UX Designer": "₹4-7 LPA",
      "QA Tester": "₹3-6 LPA",
    },
  },
  {
    name: "RetailMinds Ltd.",
    department: "Sales & Marketing",
    qualification: "Any Graduate with Sales Experience",
    process: ["Walk-in Interview", "Telephonic HR Round"],
    salary: {
      "Sales Executive": "₹2.5-4 LPA",
      "Marketing Manager": "₹6-8 LPA",
      "SEO Specialist": "₹3-5 LPA",
      "Brand Strategist": "₹5-7 LPA",
    },
  },
  {
    name: "Supportify Solutions",
    department: "Customer Support",
    qualification: "12th Pass or Graduate, Fluent Communication",
    process: ["Voice Test", "Customer Handling Round"],
    salary: {
      "Call Support Agent": "₹2-3.5 LPA",
      "Chat Executive": "₹2-3 LPA",
      "Email Support": "₹2.5-4 LPA",
    },
  },
  {
    name: "AdminCore Pvt. Ltd.",
    department: "Administrative Staff",
    qualification: "Graduate with MS Office Skills",
    process: ["Typing Test", "HR Round"],
    salary: {
      "Office Assistant": "₹2-2.5 LPA",
      Receptionist: "₹2.5-3.5 LPA",
      Clerk: "₹2-2.8 LPA",
    },
  },
  {
    name: "QuickServe Logistics",
    department: "Field Executives",
    qualification: "10th Pass and above",
    process: ["Field Task Simulation", "HR Interview"],
    salary: {
      "Delivery Executive": "₹2-2.8 LPA",
      "Field Agent": "₹2.5-3.5 LPA",
    },
  },
  {
    name: "FlexiHire India",
    department: "Contract & Permanent Hiring",
    qualification: "As per Role Requirement",
    process: ["Profile Review", "Role-based Interview"],
    salary: {
      Freelancer: "₹15k-40k/month",
      "Permanent Staff": "₹2.5-6 LPA",
    },
  },
  {
    name: "PeopleBridge HR",
    department: "HR & Recruitment",
    qualification: "MBA HR or Related Field",
    process: ["Aptitude Test", "HR Round"],
    salary: {
      "HR Executive": "₹3-4.5 LPA",
      Recruiter: "₹2.5-4 LPA",
      "Payroll Specialist": "₹3.5-5 LPA",
    },
  },
  {
    name: "FinGlobe Pvt. Ltd.",
    department: "Finance & Accounting",
    qualification: "B.Com/M.Com or CA Intern",
    process: ["Accounts Test", "Manager Round"],
    salary: {
      Accountant: "₹3-5 LPA",
      "Finance Analyst": "₹4-6 LPA",
      "Tax Consultant": "₹4.5-6.5 LPA",
    },
  },
  {
    name: "MoveFast Supply Chain",
    department: "Logistics & Supply Chain",
    qualification: "Graduate or Diploma in SCM",
    process: ["Ops Test", "Team Lead Interview"],
    salary: {
      "Inventory Manager": "₹3.5-5 LPA",
      "Warehouse Staff": "₹2.5-3.5 LPA",
    },
  },
  {
    name: "MegaTools Manufacturing",
    department: "Manufacturing & Skilled Labor",
    qualification: "ITI/Diploma or relevant experience",
    process: ["Skill Test", "Practical Round"],
    salary: {
      "Machine Operator": "₹2.5-3.5 LPA",
      Welder: "₹2.2-3.2 LPA",
      Technician: "₹3-4.5 LPA",
    },
  },
  {
    name: "HealthCare Plus",
    department: "Healthcare & Nursing",
    qualification: "B.Sc/M.Sc Nursing, ANM, GNM",
    process: ["Document Verification", "Panel Interview", "Training"],
    salary: {
      "Staff Nurse": "₹3-5 LPA",
      "Ward Incharge": "₹5-6.5 LPA",
      "Healthcare Assistant": "₹2.5-4 LPA",
    },
  },
  {
    name: "EdVision Academy",
    department: "Education & Training",
    qualification: "B.Ed/M.Ed or Relevant Degree",
    process: ["Demo Class", "Panel Interview"],
    salary: {
      Teacher: "₹3-5.5 LPA",
      Trainer: "₹4-6 LPA",
      Tutor: "₹2.5-4 LPA",
    },
  },
];

const ForCompanies = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen px-4 py-10">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-yellow-200 mb-14 tracking-wide">
        For Companies Hiring with Us
      </h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {companyDetails.map((company, index) => (
<motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  className="bg-[#111827] rounded-2xl p-6 border border-yellow-500/20 hover:shadow-xl hover:shadow-yellow-200/20 transition-all duration-300 flex flex-col justify-between"
>
  <h3 className="text-xl font-bold text-yellow-200 text-center mb-4">
    {company.name}
  </h3>

  <div className="space-y-2 text-sm">
    <p>
      <span className="font-semibold text-yellow-200">Department:</span>{" "}
      <span className="text-gray-300">{company.department}</span>
    </p>
    <p>
      <span className="font-semibold text-yellow-200">Qualification Required:</span>{" "}
      <span className="text-gray-300">{company.qualification}</span>
    </p>
  </div>

  <div className="mt-5">
    <p className="text-white font-medium mb-2 flex items-center gap-1">
      📋 Hiring Process:
    </p>
    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 ml-2">
      {company.process.map((step, i) => (
        <li key={i}>{step}</li>
      ))}
    </ul>
  </div>

  <div className="mt-5">
    <p className="text-white font-medium mb-2 flex items-center gap-1">
      💼 Department-wise Salary:
    </p>
    <ul className="text-sm text-gray-400 space-y-1 ml-2 mb-6">
      {Object.entries(company.salary).map(([role, sal], i) => (
        <li key={i}>
          <span className="font-medium text-gray-200">{role}:</span>{" "}
          <span className="text-yellow-200">{sal}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Centered Button */}
  <div className="mt-auto pt-2 flex justify-center">
    <Link
      to="/contact"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-yellow-200 text-black font-bold px-6 py-2 rounded-full hover:bg-yellow-300 transition text-center"
    >
      Apply Now
    </Link>
  </div>
</motion.div>


        ))}
      </div>
    </div>
  );
};

export default ForCompanies;
