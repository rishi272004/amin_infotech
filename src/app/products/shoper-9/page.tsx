'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { CheckCircle2, ShoppingCart, Layers, BarChart3, Zap, Lock, Cloud, Users } from 'lucide-react';
import Link from "next/link";

export default function Shoper9Page() {
  const features = [
    "SKU Management for handling lakhs of items efficiently",
    "Multi-Store Chain Support for managing hundreds of stores",
    "Transaction Processing handling thousands per day",
    "Promotion Control with detailed promotional strategies",
    "Stock Query System for real-time inventory visibility",
    "Head Office Integration connecting warehouses and stores",
    "Data Exchange between retail outlets seamlessly",
    "Retail Expertise specifically designed for modern retail",
  ];

  const capabilities = [
    { icon: ShoppingCart, title: "POS System", desc: "Advanced Point of Sale system built for high-volume retail operations with seamless transactions" },
    { icon: Layers, title: "Multi-Store Management", desc: "Centralized management of multiple retail locations with unified inventory and operations" },
    { icon: BarChart3, title: "Analytics & Reports", desc: "Detailed analytics and reporting for better business insights and decision making" },
    { icon: Zap, title: "Performance", desc: "Lightning-fast processing of thousands of daily transactions without downtime" },
    { icon: Lock, title: "Data Security", desc: "Secure data exchange and protection of sensitive business information" },
    { icon: Users, title: "Team Collaboration", desc: "Streamlined workflows for team collaboration across stores and head office" },
  ];

  const benefits = [
    "Handles lakhs of SKUs (items) with ease",
    "Processes thousands of transactions daily",
    "Supports hundreds of stores in a chain",
    "Unequalled retail expertise and development",
    "Data exchange between head office, warehouses and stores",
    "Apparel, footwear and textile segment specialist",
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

        /* Side Face (Right) - adding this to complete the box volume */
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
                <span className="text-[18px] font-bold uppercase tracking-[0.3em] text-rose-600 mb-6 block">Retail Software</span>
                <h1 className="text-[50px] md:text-[70px] font-heading font-bold text-slate-950 tracking-tighter leading-[0.9] mb-10">
                  <span className="text-rose-600">Shoper</span> <span className="text-slate-950">9</span>
                </h1>
                <p className="text-xl text-slate-600 font-normal leading-relaxed mb-8">
                  The complete retail management solution designed for modern retail businesses. Handle lakhs of SKUs, thousands of transactions daily, and manage multiple stores with unequalled ease of use.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary">Request Demo</Link>
                
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
                      <span className="box-spine-text">SHOPER 9 ✕ RETAIL EXPERTISE</span>
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
                        <span className="brand">Retail Management</span>
                        <h3>Shoper<br/>9</h3>
                        <div className="box-accent"></div>
                      </div>
                      
                      <div className="box-details">
                        <span className="box-detail-text">v9.0 SERIES</span>
                        <span className="box-detail-text">POS READY</span>
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
                  <span className="text-rose-600 font-bold tracking-[0.2em] text-sm uppercase mb-6 block">Retail Excellence</span>
                  <h2 className="text-[48px] md:text-[56px] font-heading font-black text-slate-950 tracking-tighter leading-[1.1] mb-8">
                    The Shoper 9 <br />
                    <span className="text-rose-600">Philosophy.</span>
                  </h2>
                  <div className="w-20 h-1.5 bg-rose-600 mb-8" />
                  <p className="text-lg text-slate-500 font-normal leading-relaxed max-w-sm">
                    Designed for modern retail chains to leverage core strengths with unmatched expertise.
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
                  <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-rose-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="text-xl text-slate-700 font-normal leading-relaxed m-0">
                      As technology evolves, businesses like yours must keep in step to benefit, and satisfying your customers simultaneously is often a challenge. We have designed Shoper 9 to handle lakhs of SKUs, thousands of transactions per day and even support hundreds of stores in a chain, allowing modern retail businesses to use their core strengths to full advantage. By way of its unequalled retail expertise and rich development, Shoper 9 represents the best of breed.
                    </p>
                  </div>

                  <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 mt-8 relative overflow-hidden group">
                    <p className="text-xl text-slate-700 font-normal leading-relaxed m-0">
                      From better control of promotions to detailed stock queries, Shoper 9 is up to the task. With its strong interface, this retail management software product addresses common issues such as data exchange between head office, warehouses and stores. Chosen by leading Indian specialty stores, Shoper 9 caters to the apparel, footwear and textile segments with tremendous success across the board.
                    </p>
                  </div>

                  <div className="p-8 md:p-10 rounded-[2.5rem] bg-rose-600 text-white shadow-xl shadow-rose-200 mt-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                    <p className="text-xl font-normal leading-relaxed m-0">
                      The Shoper 9 philosophy is centered around ease of use. A tested support system delivered via the Tally Integrators and Tally Service Partners ensures its smooth functioning, providing a reliable foundation for your retail empire to flourish.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/5 blur-[120px] rounded-full -mr-32 -mt-32" />
          <div className="container-custom relative z-10">
            <h2 className="text-[32px] font-heading font-bold text-slate-950 mb-16 text-center tracking-tight">Key Features</h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg hover:border-rose-500/20 transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

       

        {/* Ideal For Section */}
        <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-rose-600/5 blur-[120px] rounded-full -ml-32 -mt-32" />
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-[32px] font-heading font-black text-slate-950 mb-12 tracking-tight">Perfect For Modern Retail</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-sm hover:shadow-lg transition-all text-left relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-rose-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-lg text-slate-600 font-medium leading-relaxed m-0">
                    <span className="text-rose-600 font-bold block mb-2 text-xl">Specialty Stores</span> 
                    Including apparel, footwear, and textile segments looking for comprehensive retail management.
                  </p>
                </div>
                <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-sm hover:shadow-lg transition-all text-left relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-slate-950 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-lg text-slate-600 font-medium leading-relaxed m-0">
                    <span className="text-slate-950 font-bold block mb-2 text-xl">Chain Retailers</span> 
                    Managing multiple stores with centralized operations and real-time inventory visibility.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
