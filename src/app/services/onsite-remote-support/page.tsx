'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Shield, Users, Target, Headphones, Upload, Settings, Network } from 'lucide-react';
import Link from "next/link";

export default function OnsiteRemoteSupportPage() {
  const services = [
    {
      icon: Settings,
      title: "Installation & Implementation",
      desc: "Installation and configuration of Tally products to suit your business requirements",
      points: ["System Setup & Configuration", "Compatibility Audits", "Network Integration", "User Access Control", "Database Initialization", "Custom Documentation"]
    },
    {
      icon: Upload,
      title: "Data Migration Services",
      desc: "Import information from recent versions or from alternative applications with zero data loss",
      points: ["Seamless Legacy Imports", "Version Bridge Upgrades", "Data Integrity Validation", "Zero Downtime Strategy", "Cross-Solution Export", "Verification Audits"]
    },
    {
      icon: Network,
      title: "Data Synchronisation Setup",
      desc: "Facilitate synchronization of knowledge between varied workplaces across geographical locations to your head office",
      points: ["Real-time Data Sync", "Multi-branch Connectivity", "Disaster Recovery", "Automated Conflict Resolution", "Backup Solutions", "Compliance Support"]
    }
  ];

  const features = [
    "Expert Engineers with industry certification",
    "24/7 availability for emergency support",
    "Rapid response with minimal downtime",
    "Seamless onsite and remote transitions",
    "Data integrity and security guaranteed",
    "Custom solutions for your business needs",
    "Comprehensive documentation provided",
    "Follow-up support and monitoring"
  ];

  const benefits = [
    { icon: Zap, title: "Rapid Response", desc: "Zero-latency issue resolution with minimal downtime for operations" },
    { icon: Shield, title: "Data Security", desc: "Bank-level encryption and secure data transmission protocols" },
    { icon: Users, title: "Expert Support", desc: "Highly trained and certified Tally expert engineers" },
    { icon: Target, title: "Precision Resolution", desc: "Surgical accuracy in installations and configurations" },
    { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock availability for business continuity" },
    { icon: CheckCircle2, title: "Quality Assurance", desc: "Comprehensive audits and verification protocols" }
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
                Comprehensive Support Solution
              </motion.div>
              <h1 className="text-[50px] md:text-[60px] font-bold text-slate-950 tracking-tighter leading-[0.9] mb-8">
                Onsite & <span className="text-rose-600">Remote</span> Support
              </h1>
              <p className="text-xl text-slate-500 font-normal leading-relaxed mb-15">
                Expert technical assistance whenever you need it. From on-premise installations to rapid remote troubleshooting, our certified engineers ensure your Tally systems run flawlessly with uninterrupted business continuity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-slate-950 text-white font-bold py-4 px-10 rounded-2xl hover:bg-rose-600 hover:shadow-2xl hover:shadow-rose-500/20 transition-all hover:-translate-y-1"
                >
                  Request Information
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
              <h2 className="text-[40px] font-bold  text-slate-950 tracking-tight mb-12">Quality Support That Never Stops</h2>
              
              <div className="space-y-8 text-lg text-slate-600 font-normal leading-relaxed">
                <p>
                  Amin Infotech with the assistance of Tally Solutions goes to great lengths to stay the database of our Service Engineers constantly updated to enhance support potency. As a result, you can expect quality support either on-site or remotely using remote communication software products. Our team is always ready to assist you with any Tally-related challenges.
                </p>

                <p>
                  We understand that downtime is costly. That's why we offer both on-premise support for critical installations and remote support for rapid troubleshooting. Whether you need hands-on assistance at your location or expert guidance through our secure remote desktop tools, we're always just a call away.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="container-custom">
            <h2 className="text-[40px] font-bold text-slate-950 tracking-tight mb-16 text-center">Our Support Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[2rem] bg-white border border-slate-100 hover:shadow-2xl hover:border-rose-200 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-3 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 font-medium text-sm mb-6">{service.desc}</p>
                  <div className="space-y-2">
                    {service.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-rose-600 flex-shrink-0 mt-0.5" />
                        <p className="text-slate-700 text-xs font-medium">{point}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Why Choose Us Section */}
        <section className="py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-12">Why Choose Amin Infotech Support</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-[2rem] bg-rose-50 border border-rose-100 hover:shadow-lg transition-all">
                  <p className="text-lg text-slate-700 font-medium leading-relaxed">
                    <span className="text-rose-600 font-black">Tally Partnership:</span> Direct partnership with Tally Solutions ensures we have the latest expertise and resources.
                  </p>
                </div>
                <div className="p-10 rounded-[2rem] bg-slate-100 border border-slate-200 hover:shadow-lg transition-all">
                  <p className="text-lg text-slate-700 font-medium leading-relaxed">
                    <span className="text-slate-900 font-black">24/7 Availability:</span> Round-the-clock support means your business never goes down, even during emergencies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        
      </main>

      <Footer />
    </div>
  );
}
