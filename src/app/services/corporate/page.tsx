'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Users, BookOpen, Award, Clock, Zap } from 'lucide-react';
import Link from "next/link";

export default function CorporateTrainingPage() {
  const trainingSessions = [
    "Introduction of Tally",
    "How to Activate Tally using Serial No.",
    "F-11 Features and Configuration",
    "Accounts Single Group Creations",
    "Accounts Multi Group Creations",
    "Cost Category Creations",
    "Voucher Type Creations",
    "Voucher Class",
    "Group Alterations",
    "Ledger Alterations",
    "Accounting Voucher Entry",
    "MIS Reports",
    "Printing",
    "Cheque Printing",
    "Security Controls",
    "Tally Audit",
    "Delete Options",
    "Special Function Key Combination",
    "Key Combination and Navigation",
    "Tally Vault"
  ];

  const benefits = [
    { icon: Users, title: "Expert Instructors", desc: "Well-experienced and knowledgeable coaching staff with proven corporate training success" },
    { icon: Clock, title: "Flexible Scheduling", desc: "Complete flexibility in duration, time slots, and venue according to your requirements" },
    { icon: BookOpen, title: "Comprehensive Coverage", desc: "20 training modules covering everything from basics to advanced features" },
    { icon: Zap, title: "Hands-On Training", desc: "Practical, interactive sessions that enable immediate application in your business" },
    { icon: Award, title: "Certified Professionals", desc: "Learn from Tally-certified trainers with extensive industry experience" },
    { icon: CheckCircle2, title: "Custom Curriculum", desc: "Tailored training programs designed specifically for your organization's needs" }
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
                Professional Development
              </motion.div>
              <h1 className="text-[50px] md:text-[60px] font-bold text-slate-950 tracking-tighter leading-[1.1] mb-8">
                TallyPrime <span className="text-rose-600">Corporate Training</span> Services
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                Expert corporate training delivered by our well-experienced coaching staff. Comprehensive programs designed to empower your team with complete Tally expertise, customized to your organization's needs and schedule.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-slate-950 text-white font-bold py-4 px-10 rounded-2xl hover:bg-rose-600 hover:shadow-2xl hover:shadow-rose-500/20 transition-all hover:-translate-y-1"
                >
                  Schedule Training Program
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
              <h2 className="text-[40px] font-bold text-slate-950 tracking-tight mb-12">Elevate Your Team's Tally Expertise</h2>
              
              <div className="space-y-8 text-lg text-slate-600 font-normal leading-relaxed">
                <p>
                  We provide corporate training through our well-experienced and knowledgeable coaching staff. We have successfully completed several corporate training programs for Tally across diverse industries and organizational sizes.
                </p>

                <p>
                  Corporate Training schedule including amount, time slot, and venue are completely customized to suit your organization's specific needs. Our flexible approach ensures that training doesn't disrupt your business operations while empowering your team with complete Tally proficiency.
                </p>

                <p className="font-bold text-rose-600 italic">
                  From introductory sessions to advanced system administration, our comprehensive curriculum covers every aspect of Tally operation and management.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Training Modules Section */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="container-custom">
            <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-16 text-center">Comprehensive Training Modules</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {trainingSessions.map((session, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 3) * 0.1 }}
                  className="p-6 rounded-[2rem] bg-white border border-slate-100 hover:shadow-xl hover:border-rose-200 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-rose-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <p className="text-slate-700 font-medium text-sm leading-relaxed">{session}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
}
