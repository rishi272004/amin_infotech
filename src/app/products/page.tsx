'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterPreview from "@/components/FooterPreview";
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

      <main className="">
        {/* Dynamic Hero Section */}
        <section className="pt-40 pb-20 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-600/5 rounded-full blur-[120px]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-8 shadow-xl shadow-rose-500/20"
            >
              The Portfolio
            </motion.div>
            <h1 className="text-6xl lg:text-9xl font-[950] text-slate-950 tracking-tighter leading-none mb-8">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-600">Powerhouse</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-500 font-medium leading-relaxed mb-12">
              Explore our comprehensive suite of Tally solutions designed to handle everything from micro-operations to massive enterprise workloads.
            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-32 max-w-7xl mx-auto px-6">
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
                  className="h-full bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
                >
                  {/* Accent Circle */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-600/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative z-10">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-1.5 h-6 bg-rose-600 rounded-full" />
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{product.category}</span>
                     </div>
                     <h2 className="text-3xl font-[950] text-slate-950 mb-4 tracking-tighter group-hover:text-rose-600 transition-colors">
                       {product.name}
                     </h2>
                     <p className="text-slate-500 font-medium leading-relaxed mb-8 h-20 overflow-hidden">
                       {product.description}
                     </p>
                     <div className="inline-flex items-center gap-2 font-black text-sm text-rose-600 group-hover:gap-4 transition-all">
                       Explore Capabilities <span className="text-lg">→</span>
                     </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="pb-32 px-6">
            <div className="max-w-7xl mx-auto bg-slate-950 rounded-[3.5rem] p-12 lg:p-24 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.15),transparent)] pointer-events-none" />
                <h2 className="text-4xl lg:text-6xl font-[950] text-white tracking-tighter mb-8 leading-tight">
                    Not sure which solution <br />is <span className="text-rose-600">right for you?</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <Link href="/contact" className="bg-rose-600 text-white font-black py-5 px-12 rounded-2xl hover:bg-white hover:text-rose-600 transition-all shadow-xl shadow-rose-500/20">
                        Book a Free Consultation
                    </Link>
                    <Link href="/services" className="bg-white/10 text-white border border-white/20 font-black py-5 px-12 rounded-2xl hover:bg-white/20 transition-all backdrop-blur-md">
                        View Service Pricing
                    </Link>
                </div>
            </div>
        </section>
      </main>

      <FooterPreview />
      <Footer />
    </div>
  );
}
