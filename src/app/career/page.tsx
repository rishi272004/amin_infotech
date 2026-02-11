'use client';

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Briefcase, ArrowUpRight } from "lucide-react";

export default function CareerPage() {

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
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
                        className="inline-block text-rose-600 font-bold tracking-[0.1em] text-[18px] uppercase mb-8"
                    >
                        Join the Revolution
                    </motion.div>
                    <h1 className="text-[50px] md:text-[80px] font-bold text-slate-950 tracking-tighter leading-[0.9] mb-8">
                        Build the Future of <br />
                        <span className="text-rose-600 italic uppercase">FinTech</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                        We're looking for visionaries, developers, and problem-solvers who want to redefine how the world handles financial data.
                    </p>
                </div>
            </div>
        </section>

        <div className="container-custom py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-8">
              <Briefcase className="mx-auto text-rose-600 mb-6" size={56} />
            </div>
            <h2 className="text-[50px] md:text-[60px] font-bold text-slate-950 tracking-tighter leading-[0.9] mb-10 uppercase">
              Join Our <br />
              <span className="text-rose-600">Growth</span>
            </h2>
            <p className="text-xl text-slate-600 font-normal leading-relaxed mb-14 max-w-2xl mx-auto">
              We are always looking for exceptional talent to join our ecosystem. Whether you are a developer, sales expert, or support specialist, reach out to us and let's discuss your future.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/contact" 
                className="px-12 py-6 bg-rose-600 text-white rounded-2xl font-bold text-[12px] uppercase tracking-[0.3em] hover:bg-slate-950 hover:scale-[1.05] active:scale-95 transition-all shadow-2xl shadow-rose-600/30 flex items-center justify-center space-x-4"
              >
                <span>Connect with our Team</span>
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}



