'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, Zap, Building2 } from 'lucide-react';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4">
              <img 
                src="/images/about/about-img.jpg" 
                alt="Amin Infotech HQ" 
                className="w-full h-auto rounded-[2.5rem]"
              />
            </div>
            
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] soft-shadow border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center text-white">
                  <Award size={32} />
                </div>
                <div>
                  <p className="text-4xl font-black text-slate-900">1999</p>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Industry Legacy</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side - RESTORED ORIGINAL CONTENT */}
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[11px] font-black uppercase tracking-[0.3em] text-rose-600 mb-6 block"
            >
              Our Company
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[50px] md:text-[64px] font-black text-slate-950 tracking-tighter leading-[0.95] mb-10"
            >
              Amin Infotech <br />
              <span className="text-rose-600">Pvt. Ltd.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8 mb-12"
            >
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Authorized Dealer of Tally
              </p>
              
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                AMIN INFOTECH is an Authorized Certified Partner solution provider of Tally Solutions Pvt. Ltd. for its various products & services Located at Vadodara, India, the company has been providing scalable, reliable and highly efficient solutions to clientele across the World. We are an authorized Tally Partner (TP), Tally Integrator (TI) & Tally Extender (TE).
              </p>
              
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                We offer Ready to use standard softwares from house of Tally like. Software for Financial Accounting (TallyPrime), Software for ERP, Software for Payroll Management (Tally Payroll), Audit Tool for Tax Professionals, Software for Retail Outlets (Tally Shopper). We also undertake Tally customization, Data Synchronization & implementation of any tally products.
              </p>
              
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Link href="/about" className="btn-primary">Detailed Company Profile</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
