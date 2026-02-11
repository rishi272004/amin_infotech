'use client';

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Award, Zap, Target, Heart, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const achievements = [
    { title: "Certificate 1", image: "/images/about/achievement1.png" },
    { title: "Certificate 2", image: "/images/about/achievement2.png" },
    { title: "Certificate 3", image: "/images/about/achievement3.png" },
    { title: "FITAG Award", image: "/images/about/achievement4.png" },
  ];

  const strengths = [
    {
      icon: Users,
      title: "People",
      desc: "At Amin Infotech, we believe that our people are our greatest asset. Dynamic teams of tally professionals spread across various specialization areas. Every individual's views, ambitions and aspirations together form the Amin Infotech way of life.",
    },
    {
      icon: TrendingUp,
      title: "Experience",
      desc: "Amin Infotech has an excellent track record of more than 20 years in IT consultancy and services, serving customers in varied sectors such as Manufacturing, Distribution, Transport, Finance & Government.",
    },
    {
      icon: Heart,
      title: "Values",
      desc: "We believe that our success depends on flexibility and responsiveness to our customers, encouragement and rewards to our people, and profitability and satisfaction to our business partners.",
    },
    {
      icon: Zap,
      title: "Evolving Methodologies",
      desc: "Amin Infotech continuously strives to improve its software engineering and delivery processes by applying industry standard methodologies and quality assurance programs.",
    },
    {
      icon: Award,
      title: "Complete Solutions",
      desc: "Amin Infotech offers complete solutions that include consultancy, strategy, design, development, training, promotion & management. Over and above the technology implications, Amin Infotech enhances value for the customer by bringing to the table an excellent understanding of business processes.",
    },
    {
      icon: Target,
      title: "Executive Profile",
      desc: "Amin Infotech headed by Mr.Varun Amin, having 20 years of Tally experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="page-header-offset">
        {/* Hero Section */}
        <section className="bg-slate-50 py-24 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-600/5 -skew-x-12 transform origin-top translate-x-20" />
          <div className="absolute top-[-10%] left-[-5%] text-[40vw] font-black text-rose-50/40 select-none pointer-events-none tracking-tighter leading-none">
            AI
          </div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <span className="text-[18px] font-bold uppercase tracking-[0.1em] text-rose-600 mb-6 block">Our Story</span>
              <h1 className="text-[50px] md:text-[80px] font-heading font-bold text-slate-950 tracking-tighter leading-[0.9] mb-10">
                About Our <br />
                <span className="text-rose-600">Company</span>
              </h1>
              <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl">
                AMIN INFOTECH is an authorized certified partner solution provider of Tally Solutions Pvt. Ltd. for its various products & services. Located at Vadodara, India, we've been providing scalable, reliable and highly efficient solutions to clientele across the World.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content Section */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-rose-100 p-4">
                  <img 
                    src="/images/about/about_page.png" 
                    alt="Amin Infotech Office" 
                    className="w-full h-auto rounded-[2.5rem]"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-[40px] font-heading font-black text-slate-950 tracking-tight mb-8">Who We Are</h2>
                  <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                    <p>
                      We are an authorized certified <span className="text-rose-600 font-bold">Tally Partner (TP), Tally Integrator (TI) & Tally Extender (TE)</span>.
                    </p>
                    <p>
                      We offer Ready to use standard softwares from house of Tally like Software for Financial Accounting (TallyPrime), Software for ERP, Software for Payroll Management (Tally Payroll), Audit Tool for Tax Professionals, and Software for Retail Outlets (Tally Shopper). We also undertake Tally customization, Data Synchronization & implementation of any tally products.
                    </p>
                    <p>
                      Amin Infotech helps clients manage the business and technology complexities of today's economy. We provide software & Web solutions that are a specialized mix of domain knowledge, technological expertise, quality procedures and services.
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <p className="text-slate-600 font-medium leading-relaxed mb-8">
                    In a short span of time Amin Infotech has earned the reputation in the IT Business community as an innovative business partner committed to quality and customer satisfaction.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Philosophy & profile (Merged) */}
        <section className="py-24 relative overflow-hidden border-y border-slate-100 bg-slate-50">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-50/50 rounded-full blur-[120px] -z-10" />
          
          <div className="container-custom">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Our Aim */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-12 xl:col-span-5"
              >
                <div className="xl:sticky xl:top-32">
                  <span className="text-[14px] font-bold uppercase tracking-[0.1 em] text-rose-600 mb-6 block">Company Essence</span>
                  <h2 className="text-[40px] font-heading font-black text-slate-950 tracking-tight mb-8">Our Aim</h2>
                  <p className="text-xl text-slate-600 font-medium leading-relaxed italic border-l-4 border-rose-600 pl-8 bg-white py-8 pr-8 rounded-r-[2rem] shadow-sm">
                    "Our aim is to gain the maximum satisfaction of our clients by providing the best services. We offer easy, clear, simple advice and service to our clients, which we are always reassured by our straight forward approach. We provide all the service to our clients as per their specification for gaining the maximum satisfaction and achieve the highest height in the business."
                  </p>
                </div>
              </motion.div>

              {/* Right Column: Company Profile */}
              <div className="lg:col-span-12 xl:col-span-7 space-y-12">
                <div>
                  <h2 className="text-[32px] font-heading font-black text-slate-950 tracking-tight mb-12">Organization Profile</h2>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-10 rounded-[2.5rem] bg-rose-50 border border-rose-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-xl font-heading font-bold text-rose-600 mb-6 uppercase tracking-tight">We Intend</h3>
                      <p className="text-base text-slate-700 font-medium leading-relaxed">
                        To encompass the best in technologies, in services, in products and people, thereby creating a pool of benefits and joyous environment for our customer's, partner's and people in the new boundary-free global economy.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">We Are</h3>
                      <p className="text-base text-slate-700 font-medium leading-relaxed">
                        A premier Enterprise solutions company addressing requirements of customers worldwide, helping businesses improve processes by taking advantage of Tally. We create Custom-made solutions; a seamless means of changing the way companies do business.
                      </p>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-rose-600/5"
                >
                  <p className="text-base text-slate-700 font-medium leading-relaxed mb-6">
                    With the objective of becoming the partner of choice for our customers in the chosen domain of software services, Amin Infotech is continuously improving its software engineering and delivery processes by applying industry standard methodologies and quality assurance programs.
                  </p>
                  <p className="text-base text-slate-700 font-medium leading-relaxed">
                    With our broad technical skill base, superior project management techniques and vigilant eye on business issues, we help our clients achieve their goals, increase productivity, and realize a high return on investment. We have a high quality infrastructure to ensure maximum reliability and efficiency at all times and a very creative team that understands the client's requirements and delivers tailor-fit solutions.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Strengths */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-rose-50 rounded-full blur-[100px] opacity-50 -z-10" />
          <div className="container-custom">
            <h2 className="text-[40px] font-heading font-black text-slate-950 tracking-tight mb-24 text-center">Our Strengths</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {strengths.map((strength, i) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:border-rose-200 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <strength.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-950 mb-4 uppercase tracking-tight">{strength.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm">{strength.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Achievements */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="container-custom">
            <h2 className="text-[40px] font-heading font-black text-slate-950 tracking-tight mb-16 text-center">Our Achievements</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-sm border border-slate-100 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-rose-600/10 group-hover:-translate-y-2 group-hover:border-rose-100">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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





