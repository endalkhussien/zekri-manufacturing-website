import Link from "next/link";
import React from "react";
import Image from "next/image";
const Navigation = () => (
  <div>
    {/* Navigation Section */}
    <nav className="fixed top-0 left-0 w-full bg-blue-500 text-white shadow-lg z-50 py-6 px-8">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">Zekri-Manufacturing</div>
        <ul className="flex space-x-6 text-xl">
          
            <Link
              href="/"
              className="text-white border-b-4 border-transparent hover:border-white p-2 hover:text-black transition-all duration-300"
            >
              Home
            </Link>
          
          
            <Link
              href="/about"
              className="text-white border-b-4 border-transparent hover:border-white p-2 hover:text-black transition-all duration-300"
            >
              About
            </Link>
          
          
            <Link
              href="/products"
              className="text-white border-b-4 border-transparent hover:border-white p-2 hover:text-black transition-all duration-300"
            >
              Products
            </Link>
       
          
            <Link
              href="/industries"
              className="text-white border-b-4 border-transparent hover:border-white p-2 hover:text-black transition-all duration-300"
            >
              Industries
            </Link>
         
          
            <Link
              href="/careers"
              className="text-white border-b-4 border-transparent hover:border-white p-2 hover:text-black transition-all duration-300"
            >
              Careers
            </Link>
          
            <Link
              href="/contact"
              className="text-white border-b-4 border-transparent hover:border-white p-2 hover:text-black transition-all duration-300"
            >
              Contact Us
            </Link>
         
        </ul>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-500 transition">
          EN | አማ
        </button>
      </div>
    </nav>
  </div>
);

export default Navigation;
