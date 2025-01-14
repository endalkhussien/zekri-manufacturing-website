'use client';

import Link from "next/link";
import React, { useState } from "react";

const Navigation = () => {
  // State to handle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navigation Section */}
      <nav className="fixed top-0 left-0 w-full bg-teal text-white shadow-lg z-50 py-4 px-6 sm:py-6 sm:px-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wide">Zekri-Manufacturing</div>
          {/* Menu */}
          <ul className={`sm:flex space-x-5 ml-16 text-xl  ${isMenuOpen ? "block" : "hidden"} sm:block`}>
            <li>
              <Link
                href="/"
                className="text-white border-b-4 border-transparent hover:border-black px-2 py-1 hover:text-white transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white border-b-4 border-transparent hover:border-black px-2 py-1 hover:text-white transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-white border-b-4 border-transparent hover:border-black px-2 py-1 hover:text-white transition-all duration-300"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="text-white border-b-4 border-transparent hover:border-black px-2 py-1 hover:text-white transition-all duration-300"
              >
                Industries
              </Link>
            </li>
            {/* <li>
              <Link
                href="/careers"
                className="text-white border-b-4 border-transparent hover:border-black px-2 py-1 hover:text-white transition-all duration-300"
              >
                Careers
              </Link>
            </li> */}
            <li>
              <Link
                href="/contact"
                className="text-white border-b-4 border-transparent hover:border-black px-2 py-1 hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {/* Language Button */}
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-500 transition hidden sm:block">
            EN | አማ
          </button>
          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black bg-transparent p-2 rounded hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 p-8 sm:hidden">
          <ul className="flex flex-col space-y-6 text-xl">
            <li>
              <Link
                href="/"
                className="text-black hover:border-blue-600 px-2 py-1 hover:text-black transition-all duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-black hover:border-blue-600 px-2 py-1 hover:text-black transition-all duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-black hover:border-blue-600 px-2 py-1 hover:text-black transition-all duration-300"
                onClick={toggleMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="text-black hover:border-blue-600 px-2 py-1 hover:text-black transition-all duration-300"
                onClick={toggleMenu}
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-black hover:border-blue-600 px-2 py-1 hover:text-black transition-all duration-300"
                onClick={toggleMenu}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-black hover:border-blue-600 px-2 py-1 hover:text-black transition-all duration-300"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
