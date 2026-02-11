import React from 'react'
import Img1 from '../assets/plane.jpg'
import Img3 from '../assets/truck.jpg'
import Img2 from '../assets/ocen.jpg'
import Img7 from '../assets/train.jpeg'
import Img8 from '../assets/handle.jpg'
import Img9 from '../assets/van.jpg'
import Img10 from '../assets/port.jpg'
import Img11 from '../assets/modern.webp'



function Gallery() {

    const fleetImages = [
    {
      url:Img1,
      title: "Global Cargo Plane",
      category: "Air Freight"
    },
    {
      url: Img2,
      title: "International Container Ship",
      category: "Ocean Freight"
    },
    {
      url: Img3,
      title: "Heavy Duty Logistics Truck",
      category: "Land Transport"
    },
    {
      url: Img11,
      title: "Modern Distribution Fleet",
      category: "Last Mile"
    },
    {
      url: Img7,
      title: "Railway Cargo System",
      category: "Land Transport"
    },
    {
      url: Img8,
      title: "Cargo Handling Equipment",
      category: "Warehousing"
    },
    {
      url: Img9,
      title: "Express Delivery Vans",
      category: "Courier"
    },
    {
      url: Img10,
      title: "Port Logistics Infrastructure",
      category: "Port Services"
    }
  ];

  return (
  <section id="fleet" className="py-24 bg-slate-50">
      <div className="container px-6 mx-auto">
        
       
        <div className="mb-10 text-center">
          <h4 className="text-blue-600 font-bold tracking-[0.2em] uppercase mb-4 text-sm">
            Our Resources
          </h4>
          <h2 className="text-4xl font-black md:text-5xl text-slate-900">
            Logistics Fleet Gallery
          </h2>
          <div className="w-24 h-1 mx-auto mt-6 bg-blue-600"></div>
         
        </div>

      
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fleetImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden border shadow-md group h-72 rounded-xl border-slate-200"
            >
             
              <img 
                src={image.url} 
                alt={image.title} 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              
         
              <div className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent group-hover:opacity-100">
                <span className="mb-1 text-xs font-bold tracking-widest text-blue-400 uppercase">
                  {image.category}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
