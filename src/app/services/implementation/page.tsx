'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Layers, TrendingUp, Lightbulb, Clock } from 'lucide-react';
import Link from "next/link";

export default function ImplementationPage() {
  const flexibilityPoints = [
    "Configure one or more ways to carry out processes with appropriate controls",
    "Maintain rigid processes coexisting with flexible processes simultaneously",
    "Enforce controlled processes on the organisation while allowing exceptions",
    "Respond quickly to market changes and business demands"
  ];

  const adaptabilityPoints = [
    "Change business structures on real-time data without system interruption",
    "Respond and adapt to changes instantaneously in your business environment",
    "Seamlessly align to your business rather than forcing process adaptation",
    "Focus on running your business your way, not software's way"
  ];

  const iterativePoints = [
    "Kick-start operations with just the basic structure",
    "Expand and fine-tune implementation incrementally",
    "Incorporate structural changes without project halts",
    "Run transactions while implementation is ongoing",
    "No need to wait for complete implementation to start using the system",
    "Revolutionary approach that transforms ERP experience"
  ];

  const benefits = [
    { icon: Zap, title: "Unmatched Flexibility", desc: "Process flexibility required for businesses to stay agile with unconstrained solution configuration" },
    { icon: Lightbulb, title: "Adaptability on the Fly", desc: "Change business structures on real-time data enabling instant response to market demands" },
    { icon: Clock, title: "Iterative Implementation", desc: "Start using the system immediately while implementation continues in the background" },
    { icon: TrendingUp, title: "Rapid Value", desc: "Achieve business objectives quickly with two decades of technology solution expertise" },
    { icon: Layers, title: "Zero Downtime", desc: "Implement incrementally without disrupting ongoing business operations" },
    { icon: CheckCircle2, title: "Controlled Expansion", desc: "Scale processes from basic structure to complex operations at your own pace" }
  ];

  return (
    <div className="min-h-screen bg-white">
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
                className="text-rose-600 font-bold tracking-widest text-[18px] uppercase mb-6"
              >
                Seamless Deployment
              </motion.div>
              <h1 className="text-[50px] md:text-[65px] font-bold text-slate-950 tracking-tighter leading-[0.9] mb-8">
                TallyPrime <span className="text-rose-600">Implementation</span> Services
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                Innovative implementation services designed to optimize processes and produce value from day one. Leverage flexibility and adaptability to implement on an iterative basis while running your business simultaneously.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-slate-950 text-white font-bold py-4 px-10 rounded-2xl hover:bg-rose-600 hover:shadow-2xl hover:shadow-rose-500/20 transition-all hover:-translate-y-1"
                >
                  Request Implementation Plan
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 border-b border-slate-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-[40px] font-bold text-slate-950 tracking-tight mb-12">Expertise & Innovation in ERP Implementation</h2>
              
              <div className="space-y-8 text-lg text-slate-600 font-normal leading-relaxed">
                <p>
                  Tally's Implementation Services are innovative and designed to optimize processes and produce value to your business from day one. Expertise gleaned from two decades of providing technology solutions to businesses in rising economies gives us the edge to help you quickly attain your objectives.
                </p>

                <p>
                  The tremendous flexibility & adaptability of TallyPrime simplifies the implementation and makes it straightforward to begin and configure on an incremental basis. Implementation Services take full advantage of this flexibility and adaptability to permit customers to run their businesses while TallyPrime implementation is completed.
                </p>

                <p className="font-bold text-rose-600 italic">
                  Customers can use the ERP and do transactions while the ERP implementation goes on simultaneously. No other ERP in the world can provide this comfort of using the product while implementation is underway!
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Flexibility Section */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="container-custom">
            <h2 className="text-[40px] font-bold text-slate-950 tracking-tight mb-16 text-center">Unmatched Flexibility - An Agile Business Grows</h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-600 font-normal leading-relaxed mb-12 text-center">
                TallyPrime recognizes that in an ever-changing world, process flexibility is required for businesses to stay agile. We have a technology foundation that enables unconstrained flexibility in your solution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {flexibilityPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-2xl hover:border-rose-200 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle2 size={24} className="text-rose-600 flex-shrink-0 mt-1" />
                      <p className="text-slate-700 font-medium leading-relaxed">{point}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Adaptability Section */}
        <section className="py-24 border-b border-slate-100">
          <div className="container-custom">
            <h2 className="text-[40px] font-bold text-slate-950 tracking-tight mb-16 text-center">Adaptability on the Fly - ERP Adapts to Your Business</h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-600 font-normal leading-relaxed mb-12 text-center">
                One of the most amazing benefits TallyPrime offers is the ability to change business structures on real-time data, enabling your business environment to respond and adapt to changes instantly.
              </p>

              <div className="space-y-6">
                {adaptabilityPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-[2rem] bg-gradient-to-r from-slate-50 to-rose-50 border border-slate-100 hover:border-rose-200 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-rose-600 text-white font-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        {idx + 1}
                      </div>
                      <p className="text-slate-700 font-medium text-base leading-relaxed mt-1">{point}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Iterative Implementation Section */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="container-custom">
            <h2 className="text-[40px] font-bold text-slate-950 tracking-tight mb-16 text-center">Iterative Implementation - A Smooth Sail</h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6 text-center">
                Revolutionary Iterative Implementation gives peace of mind to customers implementing TallyPrime. Right from scoping to project closure, traditional ERP implementations require a cumbersome, time-consuming process. TallyPrime transforms this experience entirely.
              </p>

              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-12 text-center">
                Adaptability to changes on live data results in a unique iterative implementation methodology which revolutionizes how businesses embrace ERP. Structural changes, process enhancements, and more can be incorporated seamlessly.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {iterativePoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="p-6 rounded-[2rem] bg-white border border-slate-100 hover:shadow-xl hover:border-rose-200 transition-all"
                  >
                    <CheckCircle2 size={20} className="text-rose-600 mb-3" />
                    <p className="text-slate-700 font-medium text-sm leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
}
