import './globals.css';
// import Link from 'next/link';
import React, { ReactNode } from 'react';
import Footer from './components/footer';
import Navigation from './components/navigation';
// import Product from './products/page';
// import WhyChooseUs from './components/whyChooseUs';
export const metadata = {
  title: 'Zekri Manufacturing',
  description: 'Building Ethiopia’s Future with Steel',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <Navigation />
        <main>{children}</main> {/* Renders the content of the current page */}

        {/* <Product /> */}
        {/* <WhyChooseUs /> */}
        <Footer />
      </body>
    </html>
  );
}
