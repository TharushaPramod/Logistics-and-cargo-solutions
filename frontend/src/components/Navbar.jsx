import { useState } from 'react';
import { Menu, X, Ship } from 'lucide-react'; // Changed icon to a shipping-related one
import { Link, useLocation } from 'react-router-dom'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); 

    // Updated links to match Logistics & Cargo requirements [cite: 6, 12, 26]
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/service' },
        { name: 'Features', path: '/feature' },
        { name: 'Gallery', path: '#' },
        { name: 'Contact', path: '#' },
    ];

    const isActive = (path) => location.pathname === path;
    const isHomePage = location.pathname === "/";

    return (
        // Professional slate/blue color scheme for logistics 
        <nav className={`fixed z-50 w-full py-5 transition-all duration-500 
            ${isHomePage 
                ? 'bg-transparent border-transparent' 
                : 'bg-slate-900/90 shadow-xl border-b border-slate-800' 
            }`}>
            
            <div className="container flex items-center justify-between px-6 mx-auto ">
                
                {/* Logo - Updated for NexaCargo  */}
                <Link to="/" className="flex items-center flex-none gap-2 font-sans text-2xl font-black tracking-tighter text-white transition-transform hover:scale-105">
                    <Ship className="w-8 h-8 text-blue-500" />
                    <span>NEXA<span className="text-blue-500">CARGO</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="items-center justify-center flex-1 hidden space-x-10 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm uppercase font-bold tracking-[0.2em] transition-colors hover:text-blue-400 hover:scale-105 ${
                                isActive(link.path) ? 'text-blue-500' : 'text-slate-300'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions - WhatsApp Booking [cite: 5, 32] */}
                <div className="flex items-center flex-none gap-4">
                    <Link
                        to=""
                        className="hidden px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all transform rounded-none border border-white hover:bg-white hover:text-black md:block"
                    >
                        Book Now
                    </Link>

                    <button
                        className="text-slate-300 hover:text-white md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute left-0 w-full border-t bg-slate-900 border-slate-800 md:hidden">
                    <div className="container flex flex-col px-6 py-6 mx-auto space-y-4 shadow-2xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`block text-sm uppercase tracking-widest font-bold transition-colors ${
                                    isActive(link.path) 
                                    ? 'text-blue-500 border-l-4 border-blue-500 pl-2' 
                                    : 'text-slate-300 hover:text-blue-400' 
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="inline-block w-full px-6 py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition-colors border border-white hover:bg-white hover:text-black"
                            onClick={() => setIsOpen(false)}
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;