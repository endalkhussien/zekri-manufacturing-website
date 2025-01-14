import React from 'react';
import WhyChooseUs from './components/whyChooseUs';
import Navigation from './components/navigation';
import Link from 'next/link';
import HeroSection from './components/heroSection';

export default function HomePage() {
  return (
    <div>
      
      <Navigation />
      <HeroSection/>
      <WhyChooseUs />
      
    
      {/* <WhyChooseUs /> */}
    </div>
  );
}
