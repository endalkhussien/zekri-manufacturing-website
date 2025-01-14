import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 mt-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
            Building Tomorrow, Today
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            At Zekri Manufacturing, we combine innovation, sustainability, and precision to redefine the steel industry and create a better tomorrow.
          </p>
        </div>

        {/* Small Image Section */}
        <div className="flex justify-center items-center mb-16">
          <div className="relative w-1/3">
            <Image
              src="/images/steelZ.jpg" // Replace with a small image
              alt="Steel manufacturing process"
              width={300} // Small image width
              height={200} // Small image height
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <p className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-sm font-medium px-3 py-1 rounded-lg">
              Precision and excellence in every steel product.
            </p>
          </div>
        </div>

        {/* Company Journey */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Founded in Ethiopia, Zekri Manufacturing has evolved into a global leader in high-quality steel products. Our commitment to innovation and sustainability drives our efforts to create transformative solutions for industries worldwide.
          </p>

          {/* Another Small Image */}
          <div className="flex justify-center items-center mb-16">
            <div className="relative w-1/3">
              <Image
                src="/images/metal.jpg" // Replace with a small image
                alt="Zekri Manufacturing Team"
                width={300} // Small image width
                height={200} // Small image height
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-sm font-medium px-3 py-1 rounded-lg">
                Together, shaping the future of manufacturing.
              </p>
            </div>
          </div>
        </div>

        {/* Mission, Values, and People */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To lead the steel industry with innovative and sustainable solutions that foster growth for Ethiopia and the world.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core Values</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Integrity in every action</li>
              <li>Commitment to innovation</li>
              <li>Environmental responsibility</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our People</h3>
            <p className="text-gray-600">
              Great products start with great people. Our team’s dedication fuels our success and innovation.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-teal to-blue-800 text-white py-12 px-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Join Us in Shaping the Future</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Whether you’re a partner, client, or visionary, we welcome you to explore our world of innovation. Together, we can achieve extraordinary things.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-md hover:bg-white-100 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
