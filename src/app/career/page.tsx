'use client';

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function CareerPage() {

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
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
                        Join the Revolution
                    </motion.div>
                    <h1 className="text-[50px] md:text-[80px] font-black text-slate-950 tracking-tighter leading-[0.9] mb-8">
                        Build the Future of <br />
                        <span className="text-rose-600 italic">FinTech</span>.
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                        We're looking for visionaries, developers, and problem-solvers who want to redefine how the world handles financial data.
                    </p>
                </div>
            </div>
        </section>

        <div className="container-custom py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="mb-8">
              <Sparkles className="mx-auto text-rose-600 mb-6" size={48} />
            </div>
            <h2 className="text-[50px] md:text-[70px] font-black text-slate-950 tracking-tighter leading-[0.9] mb-6">
              Right Now There Is <span className="text-rose-600">No Opening</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12">
              We're not actively hiring at the moment, but we're always interested in talented individuals who are passionate about fintech and innovative solutions. Feel free to reach out to us anytime, and we'll keep your profile in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="px-8 py-4 bg-slate-950 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-rose-600 transition-all shadow-lg hover:shadow-xl">
                Back to Home
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-rose-100 text-rose-600 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-rose-200 transition-all">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}



