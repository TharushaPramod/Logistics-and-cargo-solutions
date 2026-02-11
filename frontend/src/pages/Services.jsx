import React from 'react';
import { Plane, Ship, Truck, Box, Warehouse, MapPin, Globe, Zap } from 'lucide-react';
import Img1 from '../assets/plane.jpg'
import Img2 from '../assets/ocen.jpg'
import Img3 from '../assets/truck.jpg'
import Img4 from '../assets/express.jpg'
import Img5 from '../assets/warehouse.jpg'
import Img6 from '../assets/door.jpg'






const Services = () => {
  const serviceData = [
    {
      name: "Air Freight",
      desc: "Fast and reliable international air transport solutions for time-sensitive cargo.",
      price: "Rs. 3,500/kg",
      img: Img1,
      icon: <Plane className="w-6 h-6" />
    },
    {
      name: "Ocean Freight",
      desc: "Cost-effective sea transport for bulk shipments across major global trade routes.",
      price: "Rs. 1,200/kg",
      img: Img2,
      icon: <Ship className="w-6 h-6" />
    },
    {
      name: "Land Transport",
      desc: "Comprehensive trucking and rail services for domestic and cross-border delivery.",
      price: "Rs. 800/kg",
      img: Img3,
      icon: <Truck className="w-6 h-6" />
    },
    {
      name: "Express Courier",
      desc: "Priority small-package delivery service with real-time tracking and speed.",
      price: "Rs. 5,500/pkg",
      img: Img4,
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Warehousing",
      desc: "Secure, temperature-controlled storage solutions with inventory management.",
      price: "Rs. 450/sqft",
      img: Img5,
      icon: <Warehouse className="w-6 h-6" />
    },
    {
      name: "Door-to-Door Delivery",
      desc: "Hassle-free shipping from your doorstep directly to the final destination.",
      price: "Rs. 2,500/pkg",
      img: Img6,
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container px-6 mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h4 className="text-blue-600 font-bold tracking-[0.2em] uppercase mb-4 text-sm">
            What We Offer
          </h4>
          <h2 className="text-4xl font-black md:text-5xl text-slate-900">
          <span>NEXA<span className="text-blue-500">CARGO</span></span> Services
          </h2>
          <div className="w-24 h-1 mx-auto mt-6 bg-blue-600"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col h-full overflow-hidden transition-all duration-500 bg-white border shadow-sm group rounded-2xl hover:shadow-2xl border-slate-200"
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.name} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute p-3 text-blue-600 shadow-lg top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="flex flex-col flex-grow p-8">
                <h3 className="mb-4 text-2xl font-bold transition-colors text-slate-900 group-hover:text-blue-600">
                  {service.name}
                </h3>
                <p className="flex-grow mb-6 leading-relaxed text-slate-600">
                  {service.desc}
                </p>
                <div className="flex items-center justify-between pt-6 mt-auto border-t border-slate-100">
                  <span className="text-lg font-black text-blue-600">
                    Starting from {service.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;