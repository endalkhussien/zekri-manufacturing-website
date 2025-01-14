import React from "react";
import Link from "next/link";
import Image from "next/image";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Steel Products",
      description: "High-quality steel products including rebars, coils, sheets, and structural steel.",
      image: "/images/steelZ.jpg",
      link: "/products/steel"
    },
    {
      id: 2,
      name: "Import & Export",
      description: "Seamless logistics to deliver high-quality materials worldwide.",
      image: "/images/metal.jpg",
      link: "/products/import-export"
    },
    {
      id: 3,
      name: "Custom Solutions",
      description: "Tailored manufacturing solutions for specific project needs.",
      image: "/images/metal3.jpg",
      link: "/products/custom-solutions"
    },
    {
      id: 4,
      name: "Custom Solutions",
      description: "Tailored manufacturing solutions for specific project needs.",
      image: "/images/metal3.jpg",
      link: "/products/custom-solutions"
    },
    {
      id: 5,
      name: "Custom Solutions",
      description: "Tailored manufacturing solutions for specific project needs.",
      image: "/images/steelZ.jpg",
      link: "/products/custom-solutions"
    },
    {
      id: 6,
      name: "Custom Solutions",
      description: "Tailored manufacturing solutions for specific project needs.",
      image: "/images/metal.jpg",
      link: "/products/custom-solutions"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800">Our Products</h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover our high-quality manufacturing solutions tailored to meet a wide variety of industries.
          </p>
        </header>

        {/* Products Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                {/* Product Features Section */}
                <div className="flex flex-col space-y-2 mb-4">
                  <span className="text-sm text-gray-500">🔹 High Quality</span>
                  <span className="text-sm text-gray-500">🔹 Durable & Reliable</span>
                  <span className="text-sm text-gray-500">🔹 Customizable Options</span>
                </div>

                {/* Learn More Button */}
                <Link href={product.link} className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition duration-200 ease-in-out">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* More Products Section */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Explore Our Full Range of Products</h2>
          <p className="text-lg text-gray-600 mb-8">
            From steel manufacturing to logistics, Zekri Manufacturing is committed to delivering excellence at every stage of production. Explore our wide array of solutions to meet your industrial needs.
          </p>
          <Link href="/products" className="bg-black text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition-shadow shadow-lg">
            View All Products
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Products;
