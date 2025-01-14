import React from "react";
// import Link from "next/link";
const ContactUs = () => {
  return (
    <div className="bg-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-32">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-4">
            Have questions or need assistance? Reach out to us, and we'll be happy to help!
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Office
            </h2>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Address:</span> 123 Steel Way, Addis Ababa, Ethiopia
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+251123456789"
                className="text-blue-600 hover:underline"
              >
                +251 123 456 789
              </a>
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:info@zekrimanufacturing.com"
                className="text-blue-600 hover:underline"
              >
                info@zekrimanufacturing.com
              </a>
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Business Hours
            </h2>
            <p className="text-gray-700">
              Monday - Friday: 9:00 AM - 5:00 PM <br />
              Saturday: 10:00 AM - 3:00 PM <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Find Us Here
          </h2>
          <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            {/* Replace with actual map integration */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799147337!2d-74.25987528730114!3d40.69767006338162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0x8fcce18c7c9b3776!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2s!4v1675789647453!5m2!1sen!2s"
              className="w-full h-full border-none"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
