import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="relative w-full h-screen mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgroungImage.png" 
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark Overlay */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Transforming the Future of Steel
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl">
          With innovation, sustainability, and precision, we craft solutions that drive industries forward.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="/industries"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-lg transition duration-200"
          >
            Explore Industries
          </a>
          <a
            href="/contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
