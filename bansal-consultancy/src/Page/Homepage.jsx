import React from "react";
import { motion } from "framer-motion";
import AboutCard from "../Components/homepage/AboutUs";
import QnASection from "../Components/homepage/QnA";
import TestimonialSection from "../Components/homepage/TestimonialSection";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-16 px-4 md:py-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-yellow-200 leading-tight">
          Empowering Companies with the Right Talent
        </h2>
        <div>
          <img src="/assets/dashboard.png" alt="" />
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
          We specialize in connecting businesses with skilled professionals
          tailored to your specific industry needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-yellow-200 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-200 transition w-full sm:w-auto">
            Request Employees
          </button>
          <button className="border border-yellow-200 text-yellow-200 px-6 py-3 rounded-full hover:bg-yellow-200 hover:text-black transition w-full sm:w-auto">
            Submit Resume
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="relative flex items-center justify-center mb-12">
          {/* Left Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1 }}
            className="h-1 bg-yellow-200 mr-4"
          />

          {/* Heading */}
          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 80,
            }}
            className="text-2xl sm:text-3xl font-semibold text-center text-yellow-200"
          >
            OUR SPECIALIZED SERVICES
          </motion.h3>

          {/* Right Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1 }}
            className="h-1 bg-yellow-200 ml-4"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "IT Professionals",
            "Sales & Marketing",
            "Customer Support",
            "Administrative Staff",
            "Field Executives",
            "Contract & Permanent Hiring",
            "HR & Recruitment",
            "Finance & Accounting",
            "Logistics & Supply Chain",
            "Manufacturing & Skilled Labor",
            "Healthcare & Nursing",
            "Education & Training",
          ].map((service, index) => (
            <Link to="/Contact">
              <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-yellow-200/40 hover:scale-105 transition duration-300"
            >
              <img
                src={`/assets/IT${index}.png`}
                alt={service}
                className="w-14 h-14 mb-4 object-contain"
              />
              <h4 className="text-lg sm:text-xl font-semibold mb-2 text-yellow-200">
                {service}
              </h4>
              <p className="text-sm sm:text-base text-gray-300">
                We deliver qualified {service.toLowerCase()} tailored to your
                project or business goals.
              </p>
            </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Us Box */}
      <AboutCard />

      {/* Portfolio Section */}
      <section className="py-20 px-6 bg-gray-950 text-white">
        <div className="text-center mb-14">
          <h3 className="text-3xl sm:text-4xl font-bold text-yellow-200 mb-4">
            Our Recent Placements
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Take a look at some of the successful collaborations and talent
            placements we've accomplished recently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Full-stack Dev @ TechNova",
              img: "/assets/developer.png",
              desc: "Placed a MERN developer for a startup scaling rapidly.",
            },
            {
              title: "HR Manager @ FinEdge",
              img: "/assets/HR.png",
              desc: "Recruited a senior HR for a fintech expansion team.",
            },
            {
              title: "Sales Team @ RetailHive",
              img: "/assets/Sales.png",
              desc: "Built a complete sales unit for a retail tech company.",
            },
            {
              title: "Customer Support @ HealthCare+",
              img: "/assets/customer.png",
              desc: "Recruited empathetic support staff for a health startup.",
            },
            {
              title: "Data Analysts @ EduCore",
              img: "/assets/data_analyst.png",
              desc: "Provided a team of data wizards to optimize learning tools.",
            },
            {
              title: "Front Desk @ Luxe Hotels",
              img: "/assets/Front.png",
              desc: "Trained and placed hospitality professionals for premium hotels.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg border-2 border-yellow-400 hover:shadow-yellow-200/40 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition duration-500">
                <h4 className="text-lg font-semibold text-yellow-200">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-200">{item.desc}</p>
              </div>
            </div>
          


          ))}
        </div>
      </section>

      {/* QnA Section */}
      <QnASection />

      <TestimonialSection />
    </div>
  );
};

export default HomePage;
