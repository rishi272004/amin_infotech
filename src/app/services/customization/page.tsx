'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Code, Layers, Database, Settings } from 'lucide-react';
import Link from "next/link";

export default function CustomizationPage() {
  const customizePoints = [
    "Print outs that require specific columns, notes, page size to fit pre-printed stationery",
    "Documents like invoices and purchase orders with logos, specific formats, terms and conditions",
    "Additional fields to capture specific information unique to your business",
    "Specific security rules tailored to your organizational structure",
    "Synchronization with special data transformations (Purchase Order → Sales Order)"
  ];

  const extendPoints = [
    "Add completely new functionality - business processes and operations",
    "Add extensions within TallyPrime or externally and bridge them seamlessly",
    "Extend to the web and mobile devices, including SMS notifications"
  ];

  const features = [
    "TDL Interpreter - Dynamic language execution without recompilation",
    "Execution Kernel - Sub-second response times for complex operations",
    "ODBC Support - Direct database connectivity for external integrations",
    "XML & CSV Import/Export - Seamless data interchange with any system",
    "SOAP Listener - Real-time web service integrations",
    "Custom DLL Support - Leverage compiled code for performance-critical operations",
    "XSLT Transformations - Advanced data mapping and conversions",
    "Security Framework - Role-based access with custom permission rules"
  ];

  const benefits = [
    { icon: Zap, title: "Efficiency", desc: "Automate repetitive manual tasks that consume valuable time and reduce human errors" },
    { icon: Code, title: "Specificity", desc: "Bridge the gap between generic software and your unique business processes" },
    { icon: Layers, title: "Scalability", desc: "Grow your system capabilities without replacing your core accounting software" },
    { icon: Database, title: "Integration", desc: "Connect seamlessly with existing tools, ERPs, and third-party applications" },
    { icon: Settings, title: "Control", desc: "Maintain complete control over your business rules and workflows" },
    { icon: Zap, title: "Intelligence", desc: "Generate reports and insights that matter most to your specific industry" }
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
                className="text-rose-600 font-black tracking-widest text-[18px] uppercase mb-6"
              >
                Tailored Solutions
              </motion.div>
              <h1 className="text-[50px] md:text-[60 px] font-bold text-slate-950 tracking-tighter leading-[0.9] mb-8">
                TallyPrime <span className="text-rose-600">Customization</span> Services
              </h1>
              <p className="text-xl text-slate-500 font-normal leading-relaxed mb-10">
                TallyPrime is architected to be a platform with in-depth customization capabilities. Extend core functionality using TDL, custom DLLs, XSLT, and powerful integration tools to match your exact business requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-slate-950 text-white font-bold py-4 px-10 rounded-2xl hover:bg-rose-600 hover:shadow-2xl hover:shadow-rose-500/20 transition-all hover:-translate-y-1"
                >
                  Request Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Overview Section */}
        <section className="py-24 border-b border-slate-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-[40px] font-bold text-slate-950 tracking-tight mb-12">Platform Architecture & Capabilities</h2>
              
              <div className="space-y-8 text-lg text-slate-600 font-normal leading-relaxed">
                <p>
                  TallyPrime is architected as a comprehensive platform intended to support in-depth customization. It comes with an execution Kernel, an interpreter, and a powerful development language called Tally Definition Language (TDL). Using TDL, you'll be able to enhance or modify the default behavior of TallyPrime to perfectly suit your business needs.
                </p>

                <p>
                  TDL permits changes to user interface, document print outs, reports, functionalities, addition of information components and business logic. Extend core functionality by interfacing a bespoke application facilitated by TallyPrime's support for custom engineered DLLs and XSLT transformations.
                </p>

                <p>
                  TallyPrime supports ODBC and import & export knowledge in common data formats like XML & CSV. TallyPrime incorporates a SOAP listener, which helps in online integration with alternative business tools. The deceptively straightforward experience with TallyPrime hides behind it the intense versatility its technology makes accessible to those intending to add or modify it to suit their specific needs.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Customize Section */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="container-custom">
            <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-16 text-center">What You Can Customize</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {customizePoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-2xl hover:border-rose-200 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 size={24} className="text-rose-600 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 font-medium leading-relaxed">{point}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Extend Section */}
        <section className="py-24 border-b border-slate-100">
          <div className="container-custom">
            <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-16 text-center">Ways to Extend Functionality</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {extendPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-[2rem] bg-gradient-to-r from-slate-50 to-rose-50 border border-slate-100 hover:border-rose-200 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-600 text-white font-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-slate-700 font-medium text-lg leading-relaxed">{point}</p>
                    </div>
                  </div>
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
