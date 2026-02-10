import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* 1. Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://techwireasia.com/wp-content/uploads/2020/11/shutterstock_319244777-scaled.jpg" 
          alt="Global Logistics Background"
          className="w-full h-full object-cover"
        />
        {/* Dark radial gradient overlay for that premium look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60 md:bg-black/60" />
      </div>

   

      {/* 3. Main Content Section */}
      <div className="relative z-10 text-center text-white px-4">
        {/* Main Heading  */}
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight leading-none mb-5">
           <span>NEXA<span className="text-blue-500">CARGO</span></span>
        </h1>
        
        {/* Professional Tagline  */}
        <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.15em] uppercase opacity-90 mb-12">
         Smart Shipping. Simplified Logistics.
        </p>

        {/* Explore Button */}
        <div className="flex justify-center">
          <button className="group flex items-center gap-3 border-2 border-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
            Explore Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      

     
      
   
    </section>
  );
};

export default Hero;