'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Users, Award, Globe } from 'lucide-react';
import Link from 'next/link';

const HeroCarousel = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white pt-24 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 skew-x-[-15deg] translate-x-32" />
      <div className="absolute top-[-10%] left-[-5%] text-[40vw] font-black text-rose-50/40 select-none pointer-events-none tracking-tighter leading-none">
        AI
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Main Content (Left) */}
          <div className="lg:col-span-6 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[60px] md:text-[80px] font-black text-slate-950 leading-[0.85] tracking-[-0.04em] mb-10"
            >
              WELCOME TO <br />
              <span className="text-rose-600">AMIN INFOTECH</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mb-12"
            >
              Tally Authorized Certified Partner, Service Centre, Development Partner & Tally Integrator Partner. 
              Since 1999, we deliver scalable, reliable and highly efficient Tally solutions to clientele across the World.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              <Link href="/contact" className="px-10 py-5 bg-rose-600 text-white text-[12px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-rose-800 transition-all shadow-2xl shadow-rose-600/20 flex items-center gap-4 group">
                Request Expert Advisory <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link href="/price-list" className="px-10 py-5 bg-white border border-slate-200 text-slate-900 text-[12px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-50 transition-all">
                View Price List
              </Link>
            </motion.div>
          </div>

          {/* Key Metrics (Right) */}
          <div className="lg:col-span-6 relative grid grid-cols-2 gap-6">
            {/* Years in Business */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-rose-600 rounded-[2.5rem] p-8 text-white flex flex-col justify-between shadow-2xl shadow-rose-600/20 group hover:-translate-y-2 transition-transform duration-500"
            >
              <Award className="text-white" size={28} />
              <div>
                <p className="text-3xl font-black tracking-tight">25+</p>
                <p className="text-[10px] font-black uppercase text-rose-200 tracking-widest">Years in Business</p>
              </div>
            </motion.div>

            {/* Projects Completed */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-[2.5rem] p-8 border border-slate-100 soft-shadow flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500"
            >
              <Briefcase className="text-rose-600" size={28} />
              <div>
                <p className="text-3xl font-black text-slate-950 tracking-tight">500+</p>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Projects Completed</p>
              </div>
            </motion.div>

            {/* Team Size */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-[2.5rem] p-8 border border-slate-100 soft-shadow flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500"
            >
              <Users className="text-rose-600" size={28} />
              <div>
                <p className="text-3xl font-black text-slate-950 tracking-tight">100+</p>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Expert Team Members</p>
              </div>
            </motion.div>

            {/* Clients Served */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500"
            >
              <Globe className="text-rose-600" size={28} />
              <div>
                <p className="text-3xl font-black tracking-tight">5000+</p>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Clients Worldwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
