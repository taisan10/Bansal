// Components/Footer.js

import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-200 mb-4">
            Bansal Consultancy
          </h3>
          <p className="text-gray-400 text-sm">
            Connecting businesses with the right talent across industries. We
            deliver efficient and reliable hiring solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-yellow-200 text-lg font-semibold mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-yellow-200 cursor-pointer">Home</li>
            <li className="hover:text-yellow-200 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-200 cursor-pointer">Services</li>
            <li className="hover:text-yellow-200 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-yellow-200 text-lg font-semibold mb-3">
            Contact Us
          </h4>
          <p className="text-gray-400 text-sm mb-2">
            Email: <a href="mailto:info@bansalconsultancy.com" className="hover:text-yellow-200 ">info@bansalconsultancy.com</a>
          </p>
          <p className="text-gray-400 text-sm">
            Phone: <span className="hover:text-yellow-200 ">+91 98765 43210</span>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-yellow-200 text-lg font-semibold mb-3">
            Follow Us
          </h4>
          <div className="flex space-x-4 text-yellow-200 text-xl">
            <a href="#"><FaFacebookF className="hover:text-white transition" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-white transition" /></a>
            <a href="#"><FaInstagram className="hover:text-white transition" /></a>
            <a href="#"><FaEnvelope className="hover:text-white transition" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Bansal Consultancy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
