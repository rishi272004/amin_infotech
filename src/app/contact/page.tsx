'use client';

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Globe, Clock } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
            <div className="container-custom relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-block text-rose-600 font-black tracking-[0.3em] text-[11px] uppercase mb-8"
                    >
                        Partner Collaboration
                    </motion.div>
                    <h1 className="text-[50px] md:text-[80px] font-black text-slate-950 tracking-tighter leading-[0.9] mb-8">
                        Let's Start a <span className="text-rose-600 italic">Conversation</span>.
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                        Whether you're looking for enterprise Tally implementation or bespoke customization, our experts are ready to accelerate your business growth.
                    </p>
                </div>
            </div>
        </section>

        <div className="container-custom py-32">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left side: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-center space-x-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 text-slate-400 shadow-sm">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.title}</p>
                      <p className="font-black text-slate-950 uppercase tracking-tight text-sm translate-y-0 group-hover:-translate-y-1 transition-transform">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-12 rounded-[3.5rem] bg-slate-950 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <Globe className="text-rose-600 w-48 h-48 rotate-12" />
                </div>
                <div className="absolute top-8 right-8 z-10">
                  <img 
                    src="/images/amin_logo.png" 
                    alt="Amin Infotech Logo" 
                    className="h-12 brightness-125"
                  />
                </div>
                <div className="relative z-10">
                  <span className="text-rose-500 font-black tracking-widest text-[11px] uppercase mb-6 block">Corporate Headquarters</span>
                  <h3 className="text-3xl font-black mb-6 tracking-tighter uppercase leading-tight">Amin Infotech <br />Strategic Center</h3>
                  <p className="text-slate-400 font-medium leading-relaxed max-w-sm mb-8 text-sm">
                    4th Floor Signature Building, Besides Makarpura D-Mart, Near Susan Makarpura Road, Vadodara, Gujarat 390010, India.
                  </p>
                  <div className="flex items-center gap-2 text-rose-500 font-black text-[11px] uppercase tracking-widest">
                    <Clock size={16} />
                    Mon - Sat | 10:00 AM - 07:00 PM
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side: Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-rose-200/20 blur-[100px] rounded-full" />
                <div className="relative bg-white rounded-[3.5rem] p-8 md:p-14 border border-slate-100 shadow-2xl">
                  <h2 className="text-2xl font-black mb-10 flex items-center space-x-4 text-slate-950 uppercase tracking-tight">
                    <Phone size={24} className="text-rose-600" />
                    <span>Send Inquiry</span>
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 focus:ring-2 focus:ring-rose-500 outline-none transition-all placeholder:text-slate-300 text-slate-950 font-bold text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                        <input
                          type="email"
                          required
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 focus:ring-2 focus:ring-rose-500 outline-none transition-all placeholder:text-slate-300 text-slate-950 font-bold text-sm"
                          placeholder="john@enterprise.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Business Domain</label>
                      <input
                        type="text"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 focus:ring-2 focus:ring-rose-500 outline-none transition-all placeholder:text-slate-300 text-slate-950 font-bold text-sm"
                        placeholder="Manufacturing / Logistics / Retail"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Brief Requirements</label>
                      <textarea
                        rows={5}
                        required
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 focus:ring-2 focus:ring-rose-500 outline-none transition-all placeholder:text-slate-300 text-slate-950 font-bold text-sm resize-none"
                        placeholder="Describe your Tally ecosystem needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitted}
                      className="w-full bg-slate-950 text-white py-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-rose-600 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center space-x-4 disabled:bg-slate-100 disabled:text-slate-400"
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="animate-bounce" size={20} />
                          <span>Transmission Successful</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} className="translate-x-0 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Support Numbers Section */}
        <section className="py-32 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-16 text-center"
            >
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-rose-600 mb-4 block">Always Available</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter mb-6">
                Support Numbers
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Reach out to our expert team across all these contact numbers. Available Monday to Saturday, 10:00 AM to 7:00 PM
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {supportNumbers.map((item, idx) => (
                <motion.a
                  key={item.number}
                  href={`tel:${item.number}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-rose-300 hover:bg-rose-50 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-slate-100 group-hover:bg-rose-600 flex items-center justify-center mb-4 transition-all duration-300">
                    <Phone size={20} className="text-slate-600 group-hover:text-white" />
                  </div>
                  <p className="font-black text-slate-950 text-sm tracking-tight">{item.display}</p>
                  <p className="text-[10px] text-slate-500 mt-2 font-medium">Support Line</p>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-16 p-10 rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 text-white text-center border border-slate-800"
            >
              <Clock size={28} className="text-rose-500 mx-auto mb-4" />
              <h3 className="text-2xl font-black mb-3">Business Hours</h3>
              <p className="text-lg text-slate-300 mb-2">Monday to Saturday</p>
              <p className="text-3xl font-black text-rose-500 tracking-tight">10:00 AM - 07:00 PM</p>
              <p className="text-sm text-slate-400 mt-4">For urgent matters, you can also email us at amininfotech@gmail.com</p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}



