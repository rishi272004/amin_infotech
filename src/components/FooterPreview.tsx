'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const FooterPreview = () => {
  return (
    <section className="section-padding bg-rose-50 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100/50 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
              READY TO <br />
              <span className="text-rose-600 underline underline-offset-[12px] decoration-8">PRECISION</span> <br />
              YOUR BUSINESS?
            </h2>
            <p className="text-xl text-slate-500 font-medium max-w-md mb-12 leading-relaxed">
              Connect with India's lead Tally experts for a bespoke consultation on automation and growth.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link href="/contact" className="btn-primary flex items-center gap-4 group">
                Start Transformation <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <a href="tel:+919820000000" className="btn-secondary">
                Speak to Expert
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            <div className="p-10 bg-white rounded-3xl border border-rose-100 shadow-xl shadow-rose-600/5">
              <Phone className="text-rose-600 mb-6" size={32} />
              <h3 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-2">Support Phone</h3>
              <p className="text-slate-500 font-bold">+91 9924700015</p>
            </div>
            <div className="p-10 bg-white rounded-3xl border border-rose-100 shadow-xl shadow-rose-600/5">
              <Mail className="text-rose-600 mb-6" size={32} />
              <h3 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-2">Email Support</h3>
              <p className="text-slate-500 font-bold">amininfotech@gmail.com</p>
            </div>
            <div className="sm:col-span-2 p-10 bg-slate-900 rounded-3xl flex items-start gap-8">
              <MapPin className="text-rose-500 shrink-0" size={32} />
              <div>
                <h3 className="text-white font-black text-xs uppercase tracking-widest mb-2">Headquarters</h3>
                <p className="text-slate-400 font-medium leading-relaxed">
                  4th Floor, Signature Building, Besides Makarpura D-Mart,<br/>
                  Near Susan Makarpura Road, Vadodara - 390010, India.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FooterPreview;
