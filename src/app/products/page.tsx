'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "TallyPrime",
      category: "Enterprise ERP",
      description: "The next generation of business management software. Simple, powerful, and blazing fast.",
      link: "/products/tally-erp-tns",
    },
    {
      id: 2,
      name: "Tally.Server 9",
      category: "Data Security",
      description: "Enterprise-class data server for high-load multi-user environments with zero data corruption.",
      link: "/products/tally-server-9",
    },
    {
      id: 3,
      name: "Tally.Developer 9",
      category: "Development",
      description: "The ultimate TDL development platform for creating tailor-made business solutions.",
      link: "/products/tally-developer-9",
    },
    {
      id: 4,
      name: "Shoper 9",
      category: "Retail Management",
      description: "Comprehensive retail management software designed to scale with your brick-and-mortar success.",
      link: "/products/shoper-9",
    },
    {
      id: 5,
      name: "Auditor's Edition",
      category: "Compliance",
      description: "Specialized toolset for CAs and auditors with advanced compliance and analysis features.",
      link: "/products/tally-auditors-edition",
    },
    {
      id: 6,
      name: "Tally Software Services",
      category: "Cloud & Remote",
      description: "The internet-enabled backbone for remote access, sync, and seamless updates.",
      link: "/products/tally-software-services",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="page-header-offset">
        {/* Dynamic Hero Section */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-600/5 -skew-x-12 transform origin-top translate-x-20" />
          <div className="absolute top-[-10%] left-[-5%] text-[40vw] font-black text-rose-50/40 select-none pointer-events-none tracking-tighter leading-none">
            AI
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-white border border-rose-100 text-rose-600 text-[12px] font-bold uppercase tracking-[0.3em] px-6 py-2 rounded-full mb-8 shadow-sm"
            >
              The Portfolio
            </motion.div>
            <h1 className="text-6xl lg:text-[100px] font-heading font-black text-slate-950 tracking-tighter leading-[0.9] mb-10">
              Digital <span className="text-rose-600">Powerhouse</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-600 font-medium leading-relaxed mb-12">
              Explore our comprehensive suite of Tally solutions designed to handle everything from micro-operations to massive enterprise workloads.
            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-32 max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <Link 
                key={product.id}
                href={product.link}
                className="group relative block"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-slate-50 rounded-[2.5rem] p-12 border border-slate-200 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:border-rose-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
                >
                  {/* Accent Circle */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-600/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative z-10">
                     <div className="flex items-center gap-3 mb-8">
                        <div className="w-1.5 h-6 bg-rose-600 rounded-full" />
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">{product.category}</span>
                     </div>
                     <h2 className="text-3xl font-heading font-bold text-slate-950 mb-6 tracking-tight group-hover:text-rose-600 transition-colors">
                       {product.name}
                     </h2>
                     <p className="text-slate-600 font-normal leading-relaxed mb-10 text-lg">
                       {product.description}
                     </p>
                     <div className="inline-flex items-center gap-2 font-bold text-sm text-rose-600 group-hover:gap-4 transition-all">
                       Explore Capabilities <span className="text-lg">→</span>
                     </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
