// import Link from "next/link";
import React from "react";
const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-900  mt-9">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
            <div>
              <h3 className="text-black text-xl font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#products" className="hover:text-blue-600 transition">
                    Steel Products
                  </a>
                </li>
                <li>
                  <a href="#custom-solutions" className="hover:text-blue-600 transition">
                    Custom Solutions
                  </a>
                </li>
                <li>
                  <a href="#industries" className="hover:text-blue-600 transition">
                    Industries We Serve
                  </a>
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-black text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="hover:text-blue-600 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-blue-600 transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#sustainability" className="hover:text-blue-600 transition">
                    Sustainability
                  </a>
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-black text-xl font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/contact" className="hover:text-blue-600 transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="hover:text-blue-600 transition">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#partners" className="hover:text-blue-600 transition">
                    Partner Program
                  </a>
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-black text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#privacy" className="hover:text-blue-600 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-blue-600 transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#cookies" className="hover:text-blue-600 transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm">
            <div className="text-center md:text-left text-sm font-bold">
              <p>&copy; {new Date().getFullYear()} Zekri Manufacturing. All rights reserved.</p>
            </div>
                <div className="text-center text-gray-700 mt-4">
                        <p className="text-sm font-medium">
                            Powered by{' '}
                            <a
                            href="https://essetfirst.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:underline text-green-600"
                            >
                            EssetFirst Technologies
                            </a>
                        </p>
                </div>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#facebook" className="hover:text-white transition">
                Facebook
              </a>
              <a href="#twitter" className="hover:text-white transition">
                Twitter
              </a>
              <a href="#linkedin" className="hover:text-white transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  