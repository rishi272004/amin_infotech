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
        <section className="bg-gradient-to-b from-slate-50 to-white py-24 mb-16 relative overflow-hidden">
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-rose-600 mb-6 block">Our Story</span>
              <h1 className="text-[50px] md:text-[80px] font-black text-slate-950 tracking-tighter leading-[0.9] mb-10">
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
        <section className="py-24">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4">
                  <img 
                    src="/images/about/about-img.jpg" 
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
                  <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-8">Who We Are</h2>
                  <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                    <p>
                      We are an authorized certified <span className="text-rose-600 font-black">Tally Partner (TP), Tally Integrator (TI) & Tally Extender (TE)</span>.
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

        {/* Our Aim Section */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-8">Our Aim</h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                Our aim is to gain the maximum satisfaction of our clients by providing the best services. We offer easy, clear, simple advice and service to our clients, which we are always reassured by our straight forward approach. We provide all the service to our clients as per their specification for gaining the maximum satisfaction and achieve the highest height in the business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Profile - Vision & Mission */}
        <section className="py-24">
          <div className="container-custom">
            <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-16 text-center">Company Profile</h2>
            
            <div className="grid md:grid-cols-2 gap-16 mb-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-12 rounded-[2.5rem] bg-rose-50 border border-rose-100"
              >
                <h3 className="text-2xl font-black text-rose-600 mb-6 uppercase tracking-tight">We Intend</h3>
                <p className="text-lg text-slate-700 font-medium leading-relaxed">
                  To encompass the best in technologies, in services, in products and people, thereby creating a pool of benefits and joyous environment for our customer's, partner's and people in the new boundary-free global economy.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-12 rounded-[2.5rem] bg-slate-100 border border-slate-200"
              >
                <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">We Are</h3>
                <p className="text-lg text-slate-700 font-medium leading-relaxed">
                  A premier Enterprise solutions company addressing requirements of customers worldwide, helping businesses improve processes by taking advantage of Tally. We create Custom-made solutions; a seamless means of changing the way companies do business.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-4xl mx-auto"
            >
              <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100">
                <p className="text-lg text-slate-700 font-medium leading-relaxed mb-6">
                  With the objective of becoming the partner of choice for our customers in the chosen domain of software services, Amin Infotech is continuously improving its software engineering and delivery processes by applying industry standard methodologies and quality assurance programs.
                </p>
                <p className="text-lg text-slate-700 font-medium leading-relaxed">
                  With our broad technical skill base, superior project management techniques and vigilant eye on business issues, we help our clients achieve their goals, increase productivity, and realize a high return on investment. We have a high quality infrastructure to ensure maximum reliability and efficiency at all times and a very creative team that understands the client's requirements and delivers tailor-fit solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Strengths */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="container-custom">
            <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-24 text-center">Our Strengths</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {strengths.map((strength, i) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-2xl hover:border-rose-200 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-rose-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <strength.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black text-slate-950 mb-4 uppercase tracking-tight">{strength.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm">{strength.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Achievements */}
        <section className="py-24">
          <div className="container-custom">
            <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-16 text-center">Our Achievements</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-auto"
                  />
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





