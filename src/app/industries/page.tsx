import React from "react";

const Industries = () => {
  const industries = [
    {
      title: "Construction",
      description:
        "We provide high-quality steel for constructing modern, resilient infrastructure, ensuring safety and durability in every project.",
      icon: "/images/construction-icon.png", // Replace with actual icon path
      details: "From skyscrapers to bridges, our steel solutions are trusted by architects and engineers globally.",
    },
    {
      title: "Automotive",
      description:
        "Our steel innovations drive the automotive industry, supporting vehicle manufacturing with strength and efficiency.",
      icon: "/images/automotive-icon.png", // Replace with actual icon path
      details: "From lightweight materials to structural components, we meet the demands of modern automotive manufacturing.",
    },
    {
      title: "Energy",
      description:
        "Empowering renewable energy projects and power plants with steel solutions tailored for efficiency and sustainability.",
      icon: "/images/energy-icon.png", // Replace with actual icon path
      details: "Our steel is used in wind turbines, solar panels, and energy infrastructure worldwide.",
    },
    {
      title: "Manufacturing",
      description:
        "Supporting industries with precise and custom steel solutions for a variety of manufacturing needs.",
      icon: "/images/manufacturing-icon.png", // Replace with actual icon path
      details: "From machinery to tools, we help manufacturers achieve optimal performance and reliability.",
    },
    {
      title: "Transportation",
      description:
        "Our steel supports railways, ships, and airplanes, ensuring safe and efficient transportation across the globe.",
      icon: "/images/transportation-icon.png", // Replace with actual icon path
      details: "High-strength steel designed for extreme conditions and long-term durability.",
    },
    {
      title: "Aerospace",
      description:
        "Pioneering aerospace steel solutions that meet the highest standards of precision and performance.",
      icon: "/images/aerospace-icon.png", // Replace with actual icon path
      details: "Trusted by aerospace manufacturers for critical components in satellites and aircraft.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 mt-14">
          <h2 className="text-4xl font-bold text-gray-800">Industries We Serve</h2>
          <p className="text-lg text-gray-600 mt-4">
            Our versatile steel solutions empower a diverse range of industries, driving innovation and sustainability.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <img
                  src={industry.icon}
                  alt={`${industry.title} icon`}
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              <p className="text-sm text-gray-500">{industry.details}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Let’s Build the Future Together
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            No matter the industry, we are here to provide solutions that meet your unique needs. Partner with us today!
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg hover:bg-blue-700 transition duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Industries;
