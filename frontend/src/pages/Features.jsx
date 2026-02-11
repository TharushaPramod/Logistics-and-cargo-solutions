import React from 'react';
import { Search, Globe, ShieldCheck, Headset, MapPin } from 'lucide-react';
import Img5 from '../assets/warehouse.jpg'
import Img6 from '../assets/pack.jpg'
import Img7 from '../assets/service.jpg'




const Features = () => {
  const featureData = [
    {
      name: "Global Warehousing",
      desc: "Strategically located storage facilities worldwide offering secure inventory management and distribution.",
      icon: <Globe className="w-6 h-6" />,
      img: Img5
    },
    {
      name: "Secure Packaging",
      desc: "High-standard industrial packaging solutions to ensure your goods remain protected during transit.",
      icon: <ShieldCheck className="w-6 h-6" />,
      img: Img6
    },
    {
      name: "24/7 Custom Clearance",
      desc: "Expert support for fast and hassle-free customs clearance documentation and compliance in any port.",
      icon: <Headset className="w-6 h-6" />,
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container px-6 mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h4 className="text-blue-600 font-bold tracking-[0.2em] uppercase mb-4 text-sm">
            Core Capabilities
          </h4>
          <h2 className="text-4xl font-black md:text-5xl text-slate-900">
            Operational Features
          </h2>
          <div className="w-24 h-1 mx-auto mt-6 bg-blue-600"></div>
        </div>

        {/* Real-time Tracking Mock UI  */}
        <div className="mb-20">
          <div className="relative p-4 mx-auto overflow-hidden bg-white shadow-2xl rounded-3xl md:p-12">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-64 h-64 -mt-32 -mr-32 rounded-full bg-blue-600/10 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
              <div className="flex-1 text-center md:text-left">
                <h3 className="flex items-center justify-center mb-4 text-3xl font-bold md:gap-3 text-slate-900 md:justify-start">
                  <MapPin className="w-8 h-8 text-blue-600" /> 
                  Real-time Tracking
                </h3>
                <p className="mb-8 text-lg text-slate-400">
                  Monitor your cargo's journey instantly with our advanced global tracking system.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="relative flex-grow">
                    <Search className="absolute w-5 h-5 -translate-y-1/2 left-4 top-1/2 text-slate-500" />
                    <input 
                      type="text" 
                      placeholder="Enter Tracking ID (e.g., NX-2026-SG)" 
                      className="w-full py-4 pl-12 pr-4 transition-colors bg-slate-200 border-slate-700 text-slate-800 rounded-xl focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <button className="px-8 py-4 font-bold text-white transition-all bg-blue-600 hover:bg-blue-700 rounded-xl hover:scale-105">
                    Track Now
                  </button>
                </div>
              </div>

              {/* Mock Status UI */}
              <div className="w-full p-6 border md:w-1/3 bg-slate-800 rounded-2xl border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold tracking-widest uppercase text-slate-400">Live Status</span>
                  <span className="px-3 py-1 text-xs font-bold text-green-500 border rounded-full bg-green-500/10 border-green-500/20">In Transit</span>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    <div>
                      <p className="text-sm font-bold text-white">Departure Port</p>
                      <p className="text-xs text-slate-500">Singapore Port - Loaded</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 mt-2 rounded-full bg-slate-600"></div>
                    <div>
                      <p className="text-sm font-bold text-slate-400">Arrival Port</p>
                      <p className="text-xs text-slate-500">Colombo Terminal - Expected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid [cite: 23, 24, 25] */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featureData.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col h-full overflow-hidden transition-all duration-500 bg-white border shadow-sm group rounded-2xl hover:shadow-xl border-slate-200"
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={feature.img} 
                  alt={feature.name} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute p-3 text-blue-600 shadow-lg top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl">
                  {feature.icon}
                </div>
              </div>

              <div className="flex flex-col items-center flex-grow p-8 text-center">
                <h3 className="mb-4 text-2xl font-bold tracking-tight uppercase transition-colors text-slate-900 group-hover:text-blue-600">
                  {feature.name}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;