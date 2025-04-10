import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // optional: install via npm i lucide-react

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Home", "Services", "For Companies", "For Job Seekers", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 md:py-5">
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">Bansal Consultancy</h1>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-yellow-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-base">
          {navItems.map((item) => (
            <li key={item} className="hover:text-yellow-400 transition cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-gray-900">
          {navItems.map((item) => (
            <li
              key={item}
              className="border-b border-gray-700 pb-2 hover:text-yellow-400 transition cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
