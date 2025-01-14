import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 py-12 mt-36 px-4 sm:px-6 lg:px-12">
      <h1 className="text-teal font-bold text-4xl items-center mb-8 px-60">About US</h1>
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Hero Section with Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div className="relative">
            <Image
              src="/images/steelZ.jpg" // Replace with a small image
              alt="Steel manufacturing process"
              width={600} // Adjust image size
              height={400} // Adjust image height for good proportion
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-sm font-medium px-4 py-2 rounded-lg">
              Precision and excellence in every steel product.
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
              Building Tomorrow, Today
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              At Zekri Manufacturing, we combine innovation, sustainability, and precision to redefine the steel industry and create a better tomorrow.
            </p>
            <div className="flex justify-start">
              <Link
                href="/contact"
                className="inline-block bg-teal text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-black transition duration-300"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>

        {/* Company Journey Section with Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div className="text-left">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Founded in Ethiopia, Zekri Manufacturing has evolved into a global leader in high-quality steel products. Our commitment to innovation and sustainability drives our efforts to create transformative solutions for industries worldwide.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/metal.jpg" 
              alt="Zekri Manufacturing Team"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-sm font-medium px-4 py-2 rounded-lg">
              Together, shaping the future of manufacturing.
            </div>
          </div>
        </div>

        {/* Mission, Values, and People Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To lead the steel industry with innovative and sustainable solutions that foster growth for Ethiopia and the world.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core Values</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Integrity in every action</li>
              <li>Commitment to innovation</li>
              <li>Environmental responsibility</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our People</h3>
            <p className="text-gray-600">
              Great products start with great people. Our team’s dedication fuels our success and innovation.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-teal text-white py-12 px-6 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold mb-6">Join Us in Shaping the Future</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Whether you’re a partner, client, or visionary, we welcome you to explore our world of innovation. Together, we can achieve extraordinary things.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-white-100 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
