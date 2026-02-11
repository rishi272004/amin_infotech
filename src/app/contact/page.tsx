'use client';

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Globe, Clock } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    { title: "Direct Contact", detail: "+91 99247 00015", icon: Phone },
    { title: "Email Us", detail: "amininfotech@gmail.com", icon: Mail },
    { title: "Our Location", detail: "Vadodara, Gujarat", icon: MapPin },
    { title: "Support", detail: "24/7 Global Desk", icon: Clock },
  ];

  const supportNumbers = [
    { number: '+91 9924700015', display: '+91 9924700015' },
    { number: '+91 9265874361', display: '+91 9265874361' },
    { number: '+91 9265874362', display: '+91 9265874362' },
    { number: '+91 9265874363', display: '+91 9265874363' },
    { number: '+91 9265874364', display: '+91 9265874364' },
    { number: '+91 9924780015', display: '+91 9924780015' },
    { number: '+91 8200498565', display: '+91 8200498565' },
    { number: '+91 6352943499', display: '+91 6352943499' },
    { number: '+91 8799388612', display: '+91 8799388612' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="page-header-offset">
        {/* Dynamic Hero Section */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-600/5 -skew-x-12 transform origin-top translate-x-20" />
            <div className="absolute top-[-10%] left-[-5%] text-[40vw] font-black text-rose-50/40 select-none pointer-events-none tracking-tighter leading-none">
              AI
            </div>
            <div className="container-custom relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-block text-rose-600 font-bold tracking-[0.3em] text-[12px] uppercase mb-8"
                    >
                        Partner Collaboration
                    </motion.div>
                    <h1 className="text-[50px] md:text-[80px] font-heading font-black text-slate-950 tracking-tighter leading-[0.9] mb-8">
                        Let's Start a <br />
                        <span className="text-rose-600">Conversation</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                        Whether you're looking for enterprise Tally implementation or bespoke customization, our experts are ready to accelerate your business growth.
                    </p>
                </div>
            </div>
        </section>

        <div className="container-custom py-20 relative">
          {/* Background Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-50 rounded-full blur-[150px] -z-10 opacity-50" />
          
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              {/* Primary Contact Shelf */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(225,29,72,0.1)] transition-all duration-700 group">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 text-slate-400 group-hover:-translate-y-2 group-hover:rotate-6">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-3">{item.title}</h4>
                      <p className="font-black text-slate-950 uppercase tracking-tighter text-base leading-none">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Central Information Hub */}
              <div className="relative group">
                {/* Decorative border glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-600/20 to-rose-600/5 rounded-[4.5rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                
                <div className="relative p-10 md:p-16 rounded-[4rem] bg-white text-slate-950 relative overflow-hidden shadow-2xl border border-slate-100">
                  {/* Background Watermark/Graphic */}
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] select-none pointer-events-none">
                    <Globe className="text-rose-600 w-[500px] h-[500px] -rotate-12 translate-x-32 -translate-y-32" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                    {/* Left: Branding & Core Message */}
                    <div className="lg:w-1/2">
                      <div className="flex items-center gap-4 mb-8">
                        <img 
                          src="/images/amin_logo.png" 
                          alt="Amin Infotech Logo" 
                          className="h-8"
                        />
                        <div className="h-8 w-px bg-slate-200" />
                        <span className="text-rose-600 font-bold tracking-[0.3em] text-[10px] uppercase">Corporate Presence</span>
                      </div>

                      <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
                        Strategic <br />
                        <span className="text-rose-600">Hub.</span>
                      </h3>
                
                    </div>

                    {/* Right: Detailed Logistics */}
                    <div className="lg:w-1/2 space-y-10">
                      <div className="flex items-start gap-6 group/item">
                        <div className="w-14 h-14 rounded-[1.25rem] bg-rose-50 flex items-center justify-center flex-shrink-0 group-hover/item:bg-rose-600 group-hover/item:text-white transition-all duration-300 shadow-sm shadow-rose-600/10">
                          <MapPin size={24} className="group-hover/item:scale-110 transition-transform text-rose-600 group-hover/item:text-white" />
                        </div>
                        <div className="pt-1">
                           <p className="text-[11px] font-bold text-rose-600 uppercase tracking-widest mb-2">Principal Office</p>
                           <p className="text-lg text-slate-800 font-black tracking-tight leading-snug uppercase">
                            4th Floor Signature Building, Besides Makarpura D-Mart, Near Susan Makarpura Road, Vadodara, Gujarat 390010, India.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-6 group/item">
                          <div className="w-14 h-14 rounded-[1.25rem] bg-slate-950 flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                            <Clock size={24} className="text-white" />
                          </div>
                          <div className="pt-1">
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Service Hours</p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                              <span className="text-lg text-slate-950 font-black uppercase tracking-tight italic border-b-2 border-rose-600/10 pb-0.5">
                                MON - SAT
                              </span>
                              <span className="text-lg text-slate-950 font-black uppercase tracking-tight italic border-b-2 border-rose-600/10 pb-0.5">
                                10:00 - 19:00
                              </span>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Support Numbers Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="max-w-2xl"
              >
                <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-rose-600 mb-6 block">Direct Access Lines</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase leading-[0.8] mb-8">
                  Support <span className="text-rose-600 italic">Ecosystem</span>
                </h2>
                <p className="text-xl text-slate-500 font-medium">
                  Connect instantly with our technical experts. Our distributed support team ensures zero downtime for your enterprise operations.
                </p>
              </motion.div>
              
              <div className="flex items-center gap-4 py-4 px-8 bg-slate-50 rounded-2xl border border-slate-100 w-fit">
                <Clock className="text-rose-600" size={20} />
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Available Timing</span>
                  <span className="text-[14px] text-slate-950 font-black">MON - SAT | 10AM - 7PM</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {supportNumbers.map((item, idx) => (
                <motion.a
                  key={`${item.number}-${idx}`}
                  href={`tel:${item.number}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative p-8 rounded-[2rem] bg-slate-50 border border-transparent hover:border-rose-100 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                    <Phone className="text-rose-600 w-12 h-12 rotate-12" />
                  </div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-rose-600 group-hover:text-white transition-all duration-500">
                    <Phone size={24} />
                  </div>
                  <p className="font-black text-slate-950 text-base tracking-tight mb-2 group-hover:text-rose-600 transition-colors uppercase">{item.display}</p>
                  <div className="flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="w-4 h-[1px] bg-slate-300 group-hover:bg-rose-300" />
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Support Line</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}



