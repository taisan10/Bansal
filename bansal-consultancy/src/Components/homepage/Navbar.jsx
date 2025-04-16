import React, { useState } from "react";
import { Link } from "react-router-dom"; // For routing
import { Menu, X } from "lucide-react"; // Hamburger icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "For Companies", path: "/companies" },
    { name: "For Job Seekers", path: "/job-seekers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0f172a] text-white shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-200 tracking-wide">
          Bansal Consultancy
        </h1>

        {/* Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-yellow-200 md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-base font-medium">
          {navItems.map((item) => (
            <li key={item.name} className="relative group cursor-pointer">
              <Link
                to={item.path}
                className="hover:text-yellow-200 transition duration-200"
              >
                {item.name}
              </Link>
              <span className="block w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-yellow-200 absolute left-0 bottom-[-4px]" />
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-3 px-6 pb-5 bg-[#0f172a] text-base font-medium">
          {navItems.map((item) => (
            <li key={item.name} className="border-b border-gray-700 py-2">
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)} // Close menu on click
                className="hover:text-yellow-200 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
