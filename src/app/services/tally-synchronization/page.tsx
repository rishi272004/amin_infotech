'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, Zap, Lock, TrendingUp, Database, Layers, Share2 } from 'lucide-react';
import Link from "next/link";

export default function TallySynchronizationPage() {
  const syncFeatures = [
    { icon: Globe, title: "Multi-Branch Operations", desc: "Seamlessly connect multiple branches, distributors, vendors, and retail chains in real-time" },
    { icon: Share2, title: "Bi-Directional Sync", desc: "Two sets of data remain identical - work with current data across all locations simultaneously" },
    { icon: Database, title: "Distributed Environments", desc: "Configure synchronization across geographically dispersed locations and organizational units" },
    { icon: TrendingUp, title: "Head Office Consolidation", desc: "Centralize data from all branches for comprehensive reporting and decision making" },
    { icon: Zap, title: "Real-Time Updates", desc: "Instant data exchange ensures everyone works with the most current information" },
    { icon: Lock, title: "Data Integrity", desc: "Maintain complete data consistency and integrity across all connected locations" }
  ];

  const scalabilityTiers = [
    {
      title: "Single Branch",
      description: "Foundation-level synchronization",
      items: ["Local inventory sync", "Basic account consolidation", "Sales order management", "Single database replication"]
    },
    {
      title: "Multiple Branches",
      description: "Medium complexity operations",
      items: ["Inter-branch purchase orders", "Accounts receivable tracking", "Multi-location inventory", "Consolidated MIS reports"]
    },
    {
      title: "Enterprise Scale",
      description: "Complex distributed networks",
      items: ["Multiple distributor networks", "Retail chain coordination", "Real-time head office consolidation", "Advanced analytics & reporting"]
    }
  ];

  const configurationPoints = [
    "Sales Orders Management - Configure what order data syncs between locations",
    "Purchase Orders Integration - Connect procurement across all business units",
    "Accounts Receivable Tracking - Monitor outstanding payments from all branches",
    "Accounts Payable Management - Manage vendor payments across locations",
    "Inventory Synchronization - Keep stock levels consistent across branches",
    "Branch-to-Branch Information Flow - Define data exchange protocols and timing",
    "Head Office Consolidation - Aggregate all branch data for centralized analysis"
  ];

  const benefits = [
    { icon: CheckCircle2, title: "Faster Decisions", desc: "Real-time data access enables quick, informed business decisions across all locations" },
    { icon: TrendingUp, title: "Business Growth", desc: "Scale operations efficiently without losing data consistency or control" },
    { icon: Database, title: "Data Clarity", desc: "Complete visibility into all branch operations and financial metrics" },
    { icon: Lock, title: "Reduced Errors", desc: "Automated synchronization eliminates manual data entry mistakes" },
    { icon: Zap, title: "Operational Speed", desc: "Streamlined processes reduce delays and improve coordination" },
    { icon: Globe, title: "Geographic Reach", desc: "Connect with your business where it happens, when it happens" }
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
                Distributed Operations
              </motion.div>
              <h1 className="text-[50px] md:text-[70px] font-bold text-slate-950 tracking-tighter leading-[1.1] mb-8">
                Data <span className="text-rose-600">Synchronisation</span> in TallyPrime
              </h1>
              <p className="text-xl text-slate-500 font-normal leading-relaxed mb-10">
                Connect your entire business network with real-time data synchronization. Keep branch offices, distributors, vendors, and retail chains perfectly aligned with unified, current information across all locations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-slate-950 text-white font-bold py-4 px-10 rounded-2xl hover:bg-rose-600 hover:shadow-2xl hover:shadow-rose-500/20 transition-all hover:-translate-y-1"
                >
                  Schedule Synchronization Consultation
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
              <h2 className="text-[40px] font-bold text-slate-950 tracking-tight mb-12">Exciting Advances in Data Sync</h2>
              
              <div className="space-y-8 text-lg text-slate-600 font-normal leading-relaxed">
                <p>
                  Data Synchronisation in TallyPrime represents one of the most exciting advances in enterprise data management. It connects you with your business where it happens and when it happens, ensuring complete visibility and coordination across all operational locations.
                </p>

                <p>
                  Whether you operate a single distribution center, multiple branch offices across geographies, a network of retail chains, or vendor-managed inventory systems, TallyPrime synchronization keeps all your data identical and current. Your teams can work with the same information simultaneously, making faster decisions and coordinating seamlessly.
                </p>

                <p className="font-bold text-rose-600 italic">
                  Two sets of data identical, work with current data - that's the power of TallyPrime Data Synchronisation delivering real-time business intelligence to every location.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="container-custom">
            <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-16 text-center">Core Synchronization Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {syncFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-xl hover:border-rose-200 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-rose-600 flex items-center justify-center mb-6">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-black text-slate-950 mb-3 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">{feature.desc}</p>
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
