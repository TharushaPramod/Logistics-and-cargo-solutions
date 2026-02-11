import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/hero.jpg'

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden font-sans">
      
      {/* 1. Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HeroImage}
          alt="Global Logistics Background"
          className="object-cover w-full h-full"
        />
        {/* Dark radial gradient overlay for that premium look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60 md:bg-black/60" />
      </div>

   

      {/* 3. Main Content Section */}
      <div className="relative z-10 px-4 text-center text-white">
        {/* Main Heading  */}
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight leading-none mb-5">
           <span>NEXA<span className="text-blue-500">CARGO</span></span>
        </h1>
        
        <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.15em] uppercase opacity-90 mb-12">
         Smart Shipping. Simplified Logistics.
        </p>

        {/* Explore Button */}
        <div className="flex justify-center">
          <Link to="/service">
          <button className="flex items-center gap-3 px-8 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 border-2 border-white group hover:bg-white hover:text-black">
            Explore Services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          </Link>
        </div>
      </div>

      

     
      
   
    </section>
  );
};

export default Hero;