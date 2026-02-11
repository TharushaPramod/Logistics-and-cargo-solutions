import React from 'react';
import { Ship, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="pt-20 pb-10 text-white border-t bg-slate-950 border-slate-800">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-4">
                    
                
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter">
                            <Ship className="w-8 h-8 text-blue-500" />
                            <span>NEXA<span className="text-blue-500">CARGO</span></span>
                        </Link>
                        <p className="hidden leading-relaxed text-slate-400 md:block">
                            Global Logistics Simplified. Connecting continents through seamless shipping, tracking, and reliable delivery since 1998.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 transition-colors rounded-lg bg-slate-900 hover:bg-blue-600"><Facebook size={20} /></a>
                            <a href="#" className="p-2 transition-colors rounded-lg bg-slate-900 hover:bg-blue-600"><Twitter size={20} /></a>
                            <a href="#" className="p-2 transition-colors rounded-lg bg-slate-900 hover:bg-blue-600"><Linkedin size={20} /></a>
                            <a href="#" className="p-2 transition-colors rounded-lg bg-slate-900 hover:bg-blue-600"><Instagram size={20} /></a>
                        </div>
                    </div>

                 
                    <div className='hidden md:block'>
                        <h4 className="pl-3 mb-6 text-lg font-bold border-l-4 border-blue-600">Quick Navigation</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link to="/" className="transition-colors hover:text-blue-400">Home</Link></li>
                            <li><Link to="/about" className="transition-colors hover:text-blue-400">About Us</Link></li>
                            <li><Link to="/service" className="transition-colors hover:text-blue-400">Services</Link></li>
                            <li><Link to="/gallery" className="transition-colors hover:text-blue-400">Our Gallery</Link></li>
                            <li><Link to="/contact" className="transition-colors hover:text-blue-400">Contact</Link></li>
                        </ul>
                    </div>

                  
                     <div className='hidden md:block'>
                        <h4 className="pl-3 mb-6 text-lg font-bold border-l-4 border-blue-600">Shipping Solutions</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li className="transition-colors cursor-pointer hover:text-white">Air Freight</li>
                            <li className="transition-colors cursor-pointer hover:text-white">Ocean Freight</li>
                            <li className="transition-colors cursor-pointer hover:text-white">Land Transport</li>
                            <li className="transition-colors cursor-pointer hover:text-white">Warehousing</li>
                            <li className="transition-colors cursor-pointer hover:text-white">Express Courier</li>
                        </ul>
                    </div>

                   
                    <div>
                        <h4 className="pl-3 mb-6 text-lg font-bold border-l-4 border-blue-600">Contact Support</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-center gap-3">
                                <MapPin size={20} className="text-blue-500" /> 123 Logistics Way, Malabe
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-blue-500" /> +94 11 234 5678
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-blue-500" /> support@nexacargo.com
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm border-t border-slate-900 md:flex-row text-slate-500">
                    <p>© 2026 NEXACARGO Logistics. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
                        <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;