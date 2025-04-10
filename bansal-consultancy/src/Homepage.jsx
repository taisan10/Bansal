import React from "react";
import Navbar from "./fld/Navbar";

const HomePage = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
     <Navbar />
      {/* <nav className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-gray-900 shadow-md sticky top-0 z-50 gap-4 md:gap-0">
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">Bansal Consultancy</h1>
        <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          {["Home", "Services", "For Companies", "For Job Seekers", "Contact"].map((item) => (
            <li key={item} className="hover:text-yellow-400 transition cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </nav> */}

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-16 px-4 md:py-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400 leading-tight">
          Empowering Companies with the Right Talent
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
          We specialize in connecting businesses with skilled professionals tailored to your specific industry needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition w-full sm:w-auto">
            Request Employees
          </button>
          <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition w-full sm:w-auto">
            Submit Resume
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-900">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center text-yellow-400 mb-12">
          Our Specialized Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "IT Professionals",
            "Sales & Marketing",
            "Customer Support",
            "Administrative Staff",
            "Field Executives",
            "Contract & Permanent Hiring",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-yellow-400/40 hover:scale-105 transition duration-300"
            >
              <h4 className="text-lg sm:text-xl font-semibold mb-2 text-yellow-300">{service}</h4>
              <p className="text-sm sm:text-base text-gray-300">
                We deliver qualified {service.toLowerCase()} tailored to your project or business goals.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-center py-6 mt-16 border-t border-gray-800">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Bansal Consultancy. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
