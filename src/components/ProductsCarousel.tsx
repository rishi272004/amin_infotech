'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Box, Shield, Cpu } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    name: 'TallyPrime',
    category: 'Business Management',
    desc: 'The latest evolution of Tally that has grown into a comprehensive business management software product for modern enterprises.',
    icon: Box,
    href: '/products/tally-erp-tns'
  },
  {
    name: 'TallyPrime Server',
    category: 'Multi-User Enterprise',
    desc: 'A powerful data server redefining efficiency for medium and large businesses with multiple users performing activities simultaneously.',
    icon: Shield,
    href: '/products/tally-server-9'
  },
  {
    name: 'Tally Developer 9',
    category: 'SDK & Development',
    desc: 'A comprehensive development environment designed for TDL (Tally Definition Language), the development language of TallyPrime.',
    icon: Cpu,
    href: '/products/tally-developer-9'
  },
  {
    name: 'Shoper 9',
    category: 'Retail Management',
    desc: 'Designed to handle lakhs of SKUs, thousands of transactions per day and support hundreds of stores in a retail chain.',
    icon: Cpu,
    href: '/products/shoper-9'
  },
  {
    name: 'Tally.NET Services',
    category: 'Cloud Services',
    desc: 'Product updates, data synchronization across locations, remote access and functionalities to enhance business performance.',
    icon: Shield,
    href: '/products/tally-erp-tns'
  },
  {
    name: 'Auditors\' Edition',
    category: 'Audit & Compliance',
    desc: 'A powerful audit tool designed for Chartered Accountants handling growing compliance requirements and tax base management.',
    icon: Box,
    href: '/products/tally-auditors-edition'
  }
];

const ProductsCarousel = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-rose-50 rounded-full blur-[100px] opacity-50" />
      
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[11px] font-black uppercase tracking-[0.3em] text-rose-600"
            >
              Our Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-black text-slate-900 mt-6 tracking-tighter"
            >
              Enterprise Grade <br />
              <span className="text-slate-400">Software Assets.</span>
            </motion.h2>
          </div>
          
          <Link href="/products" className="btn-secondary group flex items-center gap-3">
            View All Products <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-rose-100 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-rose-600/5 overflow-hidden flex flex-col h-full"
            >
              {/* Product Icon Decoration */}
              <div className="absolute top-8 right-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <product.icon size={100} />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <span className="text-[10px] font-black uppercase text-rose-600 tracking-[0.2em] mb-3 block">
                  {product.category}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mb-5 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                  {product.desc}
                </p>
                <Link 
                  href={product.href}
                  className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-sm border border-slate-100 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 mt-auto"
                >
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
