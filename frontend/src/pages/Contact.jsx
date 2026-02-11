import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
    // State updated to match Cargo/Shipping requirements 
    const [formData, setFormData] = useState({
        name: '',
        packageType: 'Air Freight',
        quantity: '1',
        weight: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = "94769855594"; 
       
        const message = `Hi, I'm ${formData.name}, I want to ship ${formData.packageType} of ${formData.quantity}. Weight: ${formData.weight}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="contact" className="py-24 bg-slate-50">
            <div className="container px-6 mx-auto">
                {/* Section Header */}
                <div className="mb-10 text-center ">
                    <h4 className="text-blue-600 font-bold tracking-[0.2em] uppercase mb-4 text-sm">Contact Us</h4>
                    <h2 className="text-4xl font-black text-slate-900 md:text-5xl">Global Reach, Local Support</h2>
                    <div className="w-24 h-1 mx-auto mt-6 bg-blue-600"></div>
                </div>

                <div className="flex flex-col gap-12 lg:flex-row">

                    {/* Contact Info & Map */}
                    <div className="pt-10 overflow-hidden bg-white border shadow-2xl md:w-1/2 rounded-3xl border-slate-200">
                        <div className='px-10 mb-8'>
                            <span className="text-sm font-bold tracking-wider text-blue-600 uppercase">Company Details</span>
                            <h2 className="mt-2 text-3xl font-black text-slate-900">Headquarters</h2>
                            <p className="mt-4 leading-relaxed text-slate-600">
                                Our main distribution center and corporate office is open 24/7 for custom clearance support and logistics planning.
                            </p>
                        </div>

                        <div className="px-10 mb-10 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-blue-50"><MapPin className="text-blue-600" /></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Address</h4>
                                    <p className="text-slate-600">123 NexaCargo, Malabe, Sri Lanka</p> 
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-blue-50"><Phone className="text-blue-600 shrink-0" /></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Phone</h4>
                                    <p className="text-slate-600">+94 76 985 5594</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-blue-50"><Mail className="text-blue-600 shrink-0" /></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Email</h4>
                                    <p className="text-slate-600">solutions@nexacargo.com</p> 
                                </div>
                            </div>
                        </div>

                        {/* Embedded Map */}
                        <div className="h-64 overflow-hidden border-t border-slate-100 md:h-80">
                            <iframe
                                title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4551.689964256857!2d79.97551761901929!3d6.917316989712118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1770810734848!5m2!1sen!2slk" 
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                           
                        </div>
                    </div>

                    {/* WhatsApp Booking Form  */}
                    <div className="flex flex-col justify-center p-8 pt-0 bg-white border shadow-2xl md:w-1/2 rounded-3xl border-slate-100">
                        <div className="mb-8">
                             <h3 className="flex items-center gap-3 mt-5 font-sans text-3xl font-black md:mt-0 text-slate-900">
                                <Globe className="w-8 h-8 text-blue-600" />
                                WhatsApp Booking
                            </h3>
                            <p className="mt-2 text-slate-500">Get an instant shipping quote via our direct line.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-16">
                            <div className="grid grid-cols-1 gap-6 ">
                                <div>
                                    <label className="block mb-2 text-xs font-bold tracking-wider uppercase text-slate-700">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full px-4 py-4 transition-all border rounded-xl border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-xs font-bold tracking-wider uppercase text-slate-700">Package Type</label>
                                    <select
                                        name="packageType"
                                        className="w-full px-4 py-4 transition-all border rounded-xl border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                                        value={formData.packageType}
                                        onChange={handleChange}
                                    >
                                        <option>Air Freight</option>
                                        <option>Ocean Freight</option>
                                        <option>Land Transport</option>
                                        <option>Express Courier</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2 text-xs font-bold tracking-wider uppercase text-slate-700">Quantity</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        min="1"
                                        className="w-full px-4 py-4 transition-all border rounded-xl border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                    />
                                </div>
                                 <div>
                                    <label className="block mb-2 text-xs font-bold tracking-wider uppercase text-slate-700">Est. Weight (kg)</label>
                                    <input
                                        type="text"
                                        name="weight"
                                        placeholder="e.g. 50kg"
                                        className="w-full px-4 py-4 transition-all border rounded-xl border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                                        value={formData.weight}
                                        onChange={handleChange}
                                    />
                                </div>
                                
                            </div>

                          

                            <button
                                type="submit"
                                className=" flex items-center justify-center w-full gap-3 py-5 font-black uppercase tracking-widest text-white transition-all bg-green-600 rounded-xl hover:bg-green-700 hover:scale-[1.02] shadow-lg shadow-green-200 "
                            >
                                Book via WhatsApp
                                <Send size={20} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;