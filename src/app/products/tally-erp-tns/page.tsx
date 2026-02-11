'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { CheckCircle2, Cloud, Zap, Users, Lock, TrendingUp } from 'lucide-react';
import Link from "next/link";

export default function TallyPrimeProductPage() {
  const features = [
    { title: "Powerful Remote Capabilities", desc: "Round-the-clock access to your business data with trusted remote access technology" },
    { title: "Accounting & Finance", desc: "Comprehensive accounting, finance management with statutory compliance" },
    { title: "Inventory Management", desc: "Complete inventory tracking across multiple locations" },
    { title: "Sales & Purchase", desc: "Streamlined sales and purchase operations with real-time tracking" },
    { title: "Point of Sales (POS)", desc: "Modern retail and shop management capabilities" },
    { title: "Manufacturing Support", desc: "Full manufacturing, costing, and job costing features" },
    { title: "Payroll Management", desc: "Integrated payroll processing with tax compliance" },
    { title: "Branch Management", desc: "Multi-location management with centralized control" },
  ];

  const advantages = [
    "Powerful remote capabilities that boost collaboration",
    "Easy to find qualified personnel",
    "Easy to customize according to business needs",
    "Low cost of ownership via quick implementation and support",
    "Incremental implementation - activate functions as needed",
    "Quick to install and deploy",
    "Comprehensive business functionalities in one solution",
    "Trusted audit & compliance services included",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <style>{`
        .box-container {
          perspective: 2000px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 0;
        }

        .software-box {
          position: relative;
          width: 220px;
          height: 310px;
          transform-style: preserve-3d;
          transform: rotateY(-35deg) rotateX(15deg);
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .software-box:hover {
          transform: rotateY(-20deg) rotateX(10deg) translateY(-10px);
        }

        .face {
          position: absolute;
          background: #000;
          overflow: hidden;
        }

        /* Front Face */
        .front {
          width: 220px;
          height: 310px;
          transform: translateZ(40px);
          background: linear-gradient(135deg, #1a1a1a 0%, #000 100%);
          display: flex;
          flex-direction: column;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 2;
        }

        /* Spine (Left side) */
        .spine {
          width: 80px;
          height: 310px;
          left: -40px;
          transform: rotateY(-90deg);
          background: linear-gradient(to right, #9f1239, #e11d48);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.2);
        }

        /* Top side */
        .top {
          width: 220px;
          height: 80px;
          top: -40px;
          transform: rotateX(90deg);
          background: #be123c;
          border: 1px solid rgba(0, 0, 0, 0.2);
        }

        /* Side Face (Right) */
        .right-side {
          width: 80px;
          height: 310px;
          right: -40px;
          transform: rotateY(90deg);
          background: #9f1e1e;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Bottom Face */
        .bottom {
          width: 220px;
          height: 80px;
          bottom: -40px;
          transform: rotateX(-90deg);
          background: #9f1e1e;
        }

        /* Back Face */
        .back {
          width: 220px;
          height: 310px;
          transform: translateZ(-40px) rotateY(180deg);
          background: #050505;
        }

        /* Highlight/Reflection overlay */
        .reflection {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            105deg,
            rgba(255,255,255,0.05) 0%,
            rgba(255,255,255,0.1) 45%,
            rgba(255,255,255,0) 50%
          );
          pointer-events: none;
        }

        .box-spine-text {
          color: rgba(255, 255, 255, 0.3);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 4px;
          text-transform: uppercase;
          writing-mode: vertical-lr;
          transform: rotate(180deg);
        }

        .box-logo {
          width: 50px;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .box-title-group {
          margin-bottom: auto;
        }

        .box-title-group .brand {
          color: #e11d48;
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 5px;
        }

        .box-title-group h3 {
          color: #fff;
          font-size: 32px;
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -1px;
        }

        .box-accent {
          width: 40px;
          height: 3px;
          background: #e11d48;
          margin-top: 15px;
        }

        .box-details {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 15px;
        }

        .box-detail-text {
          color: rgba(255,255,255,0.4);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* Ambient Lighting Shadow */
        .shadow-layer {
          position: absolute;
          width: 260px;
          height: 60px;
          background: rgba(0,0,0,0.4);
          bottom: -50px;
          left: -20px;
          filter: blur(25px);
          border-radius: 50%;
          transform: rotateX(80deg);
          z-index: -1;
        }
      `}</style>
      
      <main className="page-header-offset">
        {/* Hero Section */}
        <section className="bg-slate-50 py-24 relative overflow-hidden">
          <div className="absolute top-[-10%] left-[-5%] text-[40vw] font-black text-rose-50/40 select-none pointer-events-none tracking-tighter leading-none">
            AI
          </div>
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-2xl"
              >
                <span className="text-[18px] font-bold uppercase tracking-[0.1em] text-rose-600 mb-6 block">Complete Business Management</span>
                <h1 className="text-[50px] md:text-[70px] font-heading font-bold text-slate-950 tracking-tighter leading-[1.0] mb-8">
                  <span className="text-rose-600">Tally</span><span className="text-slate-950">Prime</span>
                </h1>
                <p className="text-xl text-slate-600 font-normal leading-relaxed mb-8">
                  The Complete Business Management Solution. TallyPrime has all the features required for high-performance business management with stability you can trust.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary">Get Free Demo</Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative flex items-center justify-center"
              >
                <div className="box-container">
                  <div className="software-box">
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                    <div className="face spine">
                      <span className="box-spine-text">TALLYPRIME ✕ AMIN INFOTECH</span>
                    </div>
                    <div className="face right-side"></div>
                    <div className="face back"></div>
                    
                    {/* Front Face */}
                    <div className="face front">
                      <div className="reflection"></div>
                      
                      <img 
                        src="/images/Tally-logo.jpg" 
                        alt="Tally Logo" 
                        className="box-logo"
                      />
                      
                      <div className="box-title-group">
                        <span className="brand">Business Management</span>
                        <h3>Tally<br/>Prime</h3>
                        <div className="box-accent"></div>
                      </div>
                      
                      <div className="box-details">
                        <span className="box-detail-text">v4.0 STABLE</span>
                        <span className="box-detail-text">LICENSED</span>
                      </div>

                      <div className="mt-auto py-2 border-t border-white/5 text-center">
                        <p className="text-[7px] font-black text-white/30 tracking-[0.2em] uppercase">www.amininfotech.in</p>
                      </div>
                    </div>
                    
                    {/* Shadow */}
                    <div className="shadow-layer"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Section - Modern Layout */}
        <section className="py-32 bg-white relative">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white -skew-x-12 transform origin-top translate-x-20 -z-0" />
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-rose-50 rounded-full blur-[100px] -z-0 opacity-50" />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              {/* Left Side: Sticky Header */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 pb-10">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-rose-600 font-bold tracking-[0.1em] text-sm uppercase mb-6 block">The Advantage</span>
                  <h2 className="text-[48px] md:text-[56px] font-heading font-bold text-slate-950 tracking-tighter leading-[1.1] mb-8">
                    Why Choose <br />
                    <span className="text-rose-600">TallyPrime?</span>
                  </h2>
                  <div className="w-20 h-1.5 bg-rose-600 mb-8" />
                  <p className="text-lg text-slate-500 font-normal leading-relaxed max-w-sm">
                    Empowering businesses with stable, effective, and flexible software solutions designed for the modern era.
                  </p>
                </motion.div>
              </div>

              {/* Right Side: Paragraph Contents */}
              <div className="lg:col-span-7 space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="prose prose-slate max-w-none"
                >
                  <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-100 border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-rose-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="text-xl text-slate-700 font-normal leading-relaxed m-0">
                      At Tally, we have a hard-earned reputation for empowering businesses with stable, effective software products. TallyPrime has all the features required for high-performance business management, allowing you to bank and pay utility bills from home just as easily as you handle your business transactions.
                    </p>
                  </div>

                  <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-100 border border-slate-100 mt-8 relative overflow-hidden group">
                    <p className="text-xl text-slate-700 font-normal leading-relaxed m-0">
                      TallyPrime has been designed with you in mind. Powerful connectivity makes information available with your staff, CA and other professionals, round-the-clock, in any place. Whether you need to call up a stock status report or print a copy from wherever you are, the system ensures seamless accessibility.
                    </p>
                  </div>

                  <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-100 border border-slate-100 shadow-xl shadow-slate-200/50 mt-8 relative overflow-hidden group">
                    <p className="text-xl text-slate-700 font-normal leading-relaxed m-0">
                      It is remarkably quick to install and allows for incremental implementation. This novel capability lets you activate just as many of its functions as required, even across multiple locations. With Trusted Remote Access, Audit & Compliance Services, an Integrated Support Centre and Security management, the entire ecosystem is focused on delivering absolute peace of mind to you.
                    </p>
                  </div>

                  <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-100 border border-slate-100 mt-8 relative overflow-hidden group">
                    <p className="text-xl text-slate-700 font-normal leading-relaxed m-0">
                      As a complete product, TallyPrime retains its original simplicity yet offers comprehensive business functionalities such as Accounting, Finance, Inventory, Sales, Purchase, Point of Sales, Manufacturing, Costing, Job Costing, Payroll and Branch Management. It further extends its capabilities to Statutory Processes, excise and more, ensuring that whatever the demands, TallyPrime makes your life a lot easier.
                    </p>
                  </div>

                  <div className="p-8 md:p-10 rounded-[2.5rem] bg-rose-600 text-white shadow-xl shadow-rose-200 mt-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                    <p className="text-xl font-normal leading-relaxed m-0">
                      With an ideal combination of function, control and customisability built in, TallyPrime permits business owners and their associates to do more and achieve higher operational efficiency than ever before.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Advantages Section */}
        <section className="py-24 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-[40px] font-heading font-bold text-slate-950 tracking-tight mb-16 text-center">Key Advantages</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advantages.map((advantage, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-4 p-6 rounded-xl bg-rose-50 border border-slate-100 hover:shadow-lg transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <p className="text-slate-700 font-medium">{advantage}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="py-24 bg-white border-y border-slate-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-[40px] font-heading font-bold text-slate-950 tracking-tight mb-8 text-center">System Requirements</h2>
              <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 shadow-lg shadow-rose-600/5">
                <p className="text-lg text-slate-700 font-normal leading-relaxed">
                  The product is supported on <span className="text-rose-600 font-bold">Windows operating system</span>; on Windows XP and above. Whether you're a small business or an enterprise, TallyPrime adapts to your infrastructure seamlessly.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}



