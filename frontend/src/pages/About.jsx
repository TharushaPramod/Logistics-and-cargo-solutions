import React from 'react';
import { Truck, Globe, Clock, ShieldCheck } from 'lucide-react';
import AboutImage from '../assets/about.webp'

const About = () => {
  return (
    <section id="about" className="relative flex items-center min-h-screen py-24 overflow-hidden bg-slate-50">
      
     
      {/* 2. Content Layer */}
      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col items-center gap-0 md:gap-16 lg:flex-row">
          
          {/* Left Side: Image Content */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative z-10 overflow-hidden border shadow-2xl rounded-2xl border-white/10">
              <img 
                src={AboutImage}
                alt="Our Fleet and Warehouse" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element updated to match blue brand color */}
            <div className="absolute hidden w-64 h-64 border -bottom-6 -right-6 bg-blue-600/20 rounded-2xl -z-0 md:block backdrop-blur-3xl border-blue-500/30" />
          </div>

          {/* Right Side: Company Profile Text  */}
          <div className="w-full mt-10 text-white lg:w-1/2">
            <h4 className="text-blue-400 font-bold tracking-[0.2em] uppercase mb-2 text-sm">
              Established Since 1998 
            </h4>
            <h2 className="mb-8 text-4xl font-black leading-tight md:text-5xl text-slate-900">
              About of  <span>NEXA<span className="text-blue-500">CARGO</span></span>
            </h2>
            
            
            
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              NexaCargo started as a small local courier and has grown into a global powerhouse.  
              With over 25 years of experience, we specialize in seamless transport 
              solutions that bridge the gap between continents. 
            </p>

            {/* Fleet & Commitment Stats  */}
            <div className="grid grid-cols-1 gap-8 mb-10 md:grid-cols-2">
              <div className="flex items-start gap-4 p-4 border rounded-xl bg-blue-600/15 border-white/10 ">
                <div className="p-3 rounded-lg bg-blue-500/20">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h5 className="text-lg font-bold text-blue-600">Massive Fleet </h5>
                  <p className="text-base text-slate-600">Over 1,200+ vehicles, ships, and aircraft worldwide. </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border rounded-xl bg-blue-600/15 border-white/10 ">
                <div className="p-3 rounded-lg bg-blue-500/20">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h5 className="text-lg font-bold text-blue-600">Timely Delivery </h5>
                  <p className="text-base text-slate-600">99.9% on-time record for all global shipments. </p>
                </div>
              </div>
            </div>

            {/* Commitment Box  */}
            <div className="p-6 bg-white border-l-4 border-blue-500 shadow-sm rounded-r-xl backdrop-blur-sm ">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span className="text-lg font-bold tracking-widest text-blue-600 uppercase">Our Commitment </span>
              </div>
              <p className="text-base italic text-slate-600">
                "We are dedicated to providing the most reliable, efficient, and transparent 
                shipping services, ensuring your cargo is handled with precision from 
                origin to destination." 
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;