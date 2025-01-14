import React from "react";

const WhyChooseUs = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto text-center">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
      <p className="text-lg text-gray-600 mb-12">
        At Zekri Manufacturing, we are committed to excellence and innovation. Here's what sets us apart.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="p-8 bg-white shadow-md rounded-lg transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-100 text-blue-600 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.75 16.5a3 3 0 003 3 3 3 0 003-3M12 4.75v.75m0 0a3.5 3.5 0 013.5 3.5m-3.5-4.25a3.5 3.5 0 00-3.5 3.5M12 8.5v4m0 0h-1.5m1.5 0H15"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Quality Products
          </h3>
          <p className="text-gray-600">
            Durable and high-standard steel products that meet the demands of
            various industries with precision.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-8 bg-white shadow-md rounded-lg transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-100 text-green-600 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7.5l9 4.5 9-4.5-9-4.5-9 4.5z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Innovative Solutions
          </h3>
          <p className="text-gray-600">
            We create tailored steel solutions to meet the specific needs of
            your projects, no matter how complex.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-8 bg-white shadow-md rounded-lg transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-yellow-100 text-yellow-600 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M9 6h6M9 14h6m0 4h-6"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Sustainable Practices
          </h3>
          <p className="text-gray-600">
            Committed to eco-friendly manufacturing, recycling, and building a
            sustainable future.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
