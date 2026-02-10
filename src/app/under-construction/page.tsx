'use client';

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hammer, ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UnderConstructionPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
    setLoading(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-rose-50/30 to-white text-slate-900 overflow-hidden">
      <Header />

      <main className="page-header-offset">
        <div className="min-h-screen flex items-center justify-center relative px-6 md:px-12">
          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-20 right-10 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          {/* Main Content */}
          <motion.div
            className="relative z-10 max-w-2xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Icon */}
            <motion.div
              className="mb-8 flex justify-center"
              variants={itemVariants}
              custom={0}
            >
              <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
              >
                <div className="relative w-24 h-24 bg-gradient-to-br from-rose-600 to-rose-700 rounded-full flex items-center justify-center shadow-2xl shadow-rose-600/40">
                  <Hammer className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-5xl md:text-6xl font-black mb-6 text-gradient"
              variants={itemVariants}
              custom={1}
            >
              Coming Soon
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-xl md:text-2xl text-slate-600 mb-4 font-light"
              variants={itemVariants}
              custom={2}
            >
              We're building something amazing for you
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-slate-500 mb-12 leading-relaxed"
              variants={itemVariants}
              custom={3}
            >
              This page is currently under construction. Our team is working hard to bring you an exceptional experience. We'll be ready very soon!
            </motion.p>

            {/* Email Subscription */}
            <motion.div
              className="mb-12"
              variants={itemVariants}
              custom={4}
            >
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 rounded-full border border-slate-300 focus:border-rose-600 focus:outline-none transition-all bg-white/50 backdrop-blur-sm text-slate-900 placeholder:text-slate-500"
                  disabled={loading}
                />
                <motion.button
                  type="submit"
                  className="btn-primary whitespace-nowrap flex items-center justify-center gap-2"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : subscribed ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Notify Me
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
              <p className="text-sm text-slate-500 mt-3">
                We'll notify you when we launch
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
              custom={5}
            >
              <Link href="/">
                <motion.button
                  className="btn-primary w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Home
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  className="btn-secondary w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn About Us
                </motion.button>
              </Link>
            </motion.div>

            {/* Progress Indicator */}
            <motion.div
              className="mt-16 pt-12 border-t border-slate-200"
              variants={itemVariants}
              custom={6}
            >
              <p className="text-sm text-slate-500 mb-4">We're almost there...</p>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-rose-600 to-rose-500"
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Information Section */}
        <motion.section
          className="mt-20 py-20 bg-slate-900 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-black mb-16 text-center">Get in Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {/* Office Location */}
              <motion.div
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8"
                whileHover={{ translateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3">Office Location</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      4th Floor Signature Building<br />
                      Besides Makarpura D-Mart<br />
                      Near Susan Makarpura Road<br />
                      Vadodara
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Numbers */}
              <motion.div
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8"
                whileHover={{ translateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3">Support Numbers</h3>
                    <div className="space-y-2 text-sm text-slate-300">
                      <p><a href="tel:+919924700015" className="hover:text-rose-400 transition">+91 9924700015</a></p>
                      <p><a href="tel:+919265874361" className="hover:text-rose-400 transition">+91 9265874361</a></p>
                      <p><a href="tel:+919265874362" className="hover:text-rose-400 transition">+91 9265874362</a></p>
                      <p><a href="tel:+919265874363" className="hover:text-rose-400 transition">+91 9265874363</a></p>
                      <p><a href="tel:+919265874364" className="hover:text-rose-400 transition">+91 9265874364</a></p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Contact */}
              <motion.div
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8"
                whileHover={{ translateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">☎️</span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Contact Number</p>
                      <p className="text-lg font-bold">0265-2641115</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Email Address</p>
                      <a href="mailto:amininfotech@gmail.com" className="text-lg font-bold hover:text-rose-400 transition">
                        amininfotech@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📱</span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Mobile Number</p>
                      <a href="tel:09824025015" className="text-lg font-bold hover:text-rose-400 transition">
                        09824025015
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <div className="text-center pt-8 border-t border-slate-700">
              <p className="text-slate-300 mb-4">Follow us for updates</p>
              <div className="flex justify-center gap-6">
                <motion.a
                  href="https://www.facebook.com/amininfotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center hover:bg-rose-700 transition text-white text-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  f
                </motion.a>
                <motion.a
                  href="https://in.linkedin.com/pub/varun-amin/2b/35b/308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center hover:bg-rose-700 transition text-white text-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  in
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
