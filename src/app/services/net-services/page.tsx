'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { CheckCircle2, Lock, Users, Cloud, Database, Zap, BarChart3, Shield } from 'lucide-react';
import Link from "next/link";

export default function NetServicesPage() {
  const services = [
    {
      icon: Lock,
      title: "Remote Access Services",
      desc: "Secure, internet-enabled access to your business data with complete privacy and control",
      points: ["Data Stays on Your Server", "Secure Remote Connectivity", "Multi-user Access Control", "Encrypted Transmission", "No Cloud Storage Required", "Organization Desktop Integration"]
    },
    {
      icon: Users,
      title: "Support Centre",
      desc: "Integrated support system enabling you to report and track queries from within TallyPrime",
      points: ["In-Product Reporting System", "Direct Service Provider Access", "Quick Response Tracking", "Remote Issue Resolution", "Escalation to Tally Support", "Unified Communication Hub"]
    },
    {
      icon: Cloud,
      title: "Control Centre",
      desc: "Centrally configure and administer all your sites and users from one interface",
      points: ["License Management", "Central Configuration", "User Administration", "Company Profile Management", "Account Management", "Activity History Tracking"]
    }
  ];

  const features = [
    "Internet-enabled capabilities improving productivity",
    "Secure remote access without compromising data security",
    "Centralized control for multi-location businesses",
    "Software assurance with instant updates and upgrades",
    "Real-time data synchronization across branches",
    "Knowledge base with comprehensive documentation",
    "Unified support ecosystem with service providers",
    "Bank-level encryption for all data transmissions"
  ];

  const benefits = [
    { icon: Lock, title: "Data Security", desc: "Your business data stays local. Remote Access Services ensure zero data storage on external servers" },
    { icon: Cloud, title: "Cloud Integration", desc: "Internet-enabled capabilities without compromising your data privacy and organizational control" },
    { icon: Zap, title: "Real-time Sync", desc: "Exchange data seamlessly between two or more Tally licenses across different locations instantly" },
    { icon: BarChart3, title: "Centralized Control", desc: "Manage licenses, users, and configurations from a single Control Centre interface efficiently" },
    { icon: Database, title: "Data Integrity", desc: "Software assurance services deliver instant product updates and upgrades automatically" },
    { icon: Shield, title: "Compliance Ready", desc: "Knowledge base and support services ensure statutory compliance and system reliability" }
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
                className="text-rose-600 font-black tracking-widest text-[11px] uppercase mb-6"
              >
                Next-Gen Connectivity
              </motion.div>
              <h1 className="text-[50px] md:text-[80px] font-bold text-slate-950 tracking-tighter leading-[0.9] mb-8">
                Tally <span className="text-rose-600">.NET</span> Services
              </h1>
              <p className="text-xl text-slate-500 font-normal leading-relaxed mb-10">
                Unlock the full power of internet-enabled business capabilities with secure remote access, integrated support systems, and centralized control. Keep your data local while expanding your operational reach globally.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-slate-950 text-white font-black py-4 px-10 rounded-2xl hover:bg-rose-600 hover:shadow-2xl hover:shadow-rose-500/20 transition-all hover:-translate-y-1"
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
              <h2 className="text-[40px] font-bold text-slate-950 tracking-tight mb-12">Two-Component Architecture for Unparalleled Service</h2>
              
              <div className="space-y-8 text-lg text-slate-600 font-normal leading-relaxed">
                <p>
                  On a broad level, TallyPrime comprises of two essential components: the product itself and a powerful set of capabilities enabled via the Internet through a service called Tally.NET Services. This innovative 'two component' architecture was specifically chosen to deliver an unparalleled model of enterprise services.
                </p>

                <p>
                  Tally.NET Services Annual Subscription is included with your TallyPrime for the first year at no additional cost. Subsequently, you can continue subscribing to avail these premium services at a nominal charge of 20% of the then prevailing product price. This makes it an exceptionally cost-effective solution for businesses looking to expand their operational capabilities.
                </p>

                <p>
                  The architecture ensures your business data stays with you locally and is never stored on Tally.NET servers or on systems accessing that data via Remote Access. This unique approach combines the flexibility of cloud-enabled services with the security of on-premise data management, giving you the best of both worlds.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="container-custom">
            <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-16 text-center">.NET Services Modules</h2>
            
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
                  <h3 className="text-lg font-black text-slate-950 mb-3 uppercase tracking-tight">{service.title}</h3>
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

        {/* Service Benefits Section */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="container-custom">
            <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-16 text-center">Service Benefits & Capabilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-2xl hover:border-rose-200 transition-all text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-rose-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <benefit.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-black text-slate-950 mb-3 uppercase tracking-tight">{benefit.title}</h3>
                  <p className="text-slate-600 font-medium text-sm">{benefit.desc}</p>
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
              <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-12">Why Tally.NET Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-[2rem] bg-rose-50 border border-rose-100 hover:shadow-lg transition-all">
                  <p className="text-lg text-slate-700 font-medium leading-relaxed">
                    <span className="text-rose-600 font-black">Local Data Control:</span> Keep your business data on your server while enjoying internet-enabled capabilities and seamless remote functionality.
                  </p>
                </div>
                <div className="p-10 rounded-[2rem] bg-slate-100 border border-slate-200 hover:shadow-lg transition-all">
                  <p className="text-lg text-slate-700 font-medium leading-relaxed">
                    <span className="text-slate-900 font-black">Cost Effective:</span> Included free for first year with TallyPrime, then only 20% of product price annually for unlimited capabilities and updates.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature List Section */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-12 text-center">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-6">
                    <CheckCircle2 size={24} className="text-rose-600 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 font-medium text-base leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
}
