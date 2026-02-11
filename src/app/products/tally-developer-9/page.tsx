'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { CheckCircle2, Code2, Zap, GitBranch, Search, Shield } from 'lucide-react';
import Link from "next/link";

export default function TallyDeveloper9Page() {
  const features = [
    "New Look and Feel with modern IDE interface",
    "Project Management for organized development",
    "Definition and Schema Browser for instant reference",
    "Debugging and Diagnostics for issue resolution",
    "Auto Complete for attributes and values listing",
    "Enhanced search engine for code discovery",
    "Tools to Decompile TCP and Migrate encrypted files",
    "Tally Connector for XML request/response handling",
    "Syntax checking and Highlighting for error prevention",
    "Browser style Navigation for ease of use",
    "In-editor collapse/expand options for definitions",
    "Enhanced Compiler with optimized code generation",
  ];

  const capabilities = [
    { icon: Code2, title: "TDL Programming", desc: "Build custom functionality using Tally Definition Language with professional development tools and IDE features" },
    { icon: GitBranch, title: "Custom Extensions", desc: "Create extensions and add-ons to enhance Tally functionality for your specific business needs" },
    { icon: Zap, title: "XML Integration", desc: "Send XML requests to Tally and receive responses in XML format for seamless third-party integration" },
    { icon: Shield, title: "License Control", desc: "Configure TDL code to run on specific serial numbers and stamp TCPs for controlled license usage" },
    { icon: Search, title: "Code Migration", desc: "Migrate and decompile TDL files with backward compatibility and encryption management tools" },
    { icon: CheckCircle2, title: "Debugging Tools", desc: "Advanced debugging and diagnostic tools for quick issue identification and resolution" },
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
          font-size: 26px;
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
                <span className="text-[18px] font-bold uppercase tracking-[0.3em] text-rose-600 mb-6 block">Development Suite</span>
                <h1 className="text-[50px] md:text-[65px] font-heading font-bold text-slate-950 tracking-tighter leading-[0.9] mb-10">
                  <span className="text-rose-600">Tally.Developer</span> <span className="text-slate-950">9</span>
                </h1>
                <p className="text-xl text-slate-600 font-normal leading-relaxed mb-8">
                  The comprehensive development environment designed specifically for TDL (Tally Definition Language). Build, debug, and deploy powerful Tally customizations with professional-grade tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary">Request Developer Demo</Link>
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
                      <span className="box-spine-text">TALLY DEVELOPER 9</span>
                    </div>
                    <div className="face right-side"></div>
                    <div className="face back"></div>
                    
                    {/* Front Face */}
                    <div className="face front">
                      <div className="reflection" />
                      <img 
                        src="/images/Tally-logo.jpg" 
                        alt="Logo" 
                        className="box-logo"
                      />
                      <div className="box-title-group">
                        <span className="brand">TallyPrime</span>
                        <h3>Developer <br/>Edition 9</h3>
                        <div className="box-accent" />
                      </div>
                      
                      <div className="box-details">
                        <div>
                          <p className="box-detail-text">CUSTOMIZATION</p>
                          <p className="box-detail-text">SDK TOOLKIT</p>
                        </div>
                        <p className="box-detail-text" style={{color: '#e11d48'}}>2024</p>
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
                  <span className="text-rose-600 font-bold tracking-[0.2em] text-sm uppercase mb-6 block">Development Power</span>
                  <h2 className="text-[48px] md:text-[56px] font-heading font-black text-slate-950 tracking-tighter leading-[1.1] mb-8">
                    TDL Engineering <br />
                    <span className="text-rose-600">Reimagined.</span>
                  </h2>
                  <div className="w-20 h-1.5 bg-rose-600 mb-8" />
                  <p className="text-lg text-slate-500 font-normal leading-relaxed max-w-sm">
                    A comprehensive environment built specifically for rapid TDL development and deployment.
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
                      Tally.Developer 9 is a comprehensive development environment designed specifically for the TDL (Tally Definition Language), which is the primary development language of TallyPrime used to build additional functionality into the product. It enables programmers to develop and deploy solutions rapidly with ease, ensuring high output and efficiency.
                    </p>
                  </div>

                  <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 mt-8 relative overflow-hidden group">
                    <p className="text-xl text-slate-700 font-normal leading-relaxed m-0">
                      To make a programmer's life easier, the environment includes powerful features like syntax highlighting, column selection, and auto-completion. Additionally, the definition browser, schema browser, and function browser are available as integrated components of the product, providing instant reference and context for the TDL programmer.
                    </p>
                  </div>

                  <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 mt-8 relative overflow-hidden group">
                    <p className="text-xl text-slate-700 font-normal leading-relaxed m-0">
                      Tally.Developer 9 functions as a versatile editor, search engine, and compiler. It further provides essential tools to decompile a TCP, migrate an encrypted TDL file, and features the Tally Connector to send XML requests to Tally and receive responses in XML format, streamlining the entire integration workflow.
                    </p>
                  </div>

                  <div className="p-8 md:p-10 rounded-[2.5rem] bg-rose-600 text-white shadow-xl shadow-rose-200 mt-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                    <p className="text-xl font-normal leading-relaxed m-0">
                      The TDL code can be configured to run on one or more Tally serial numbers while creating the TCP (Tally Compliant Product) file, and can even be stamped for a specific site. This empowers you to maintain strict control over license usage and minimize revenue leakage effectively.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/5 blur-[120px] rounded-full -mr-32 -mt-32" />
          <div className="container-custom relative z-10">
            <h2 className="text-[32px] font-heading font-bold text-slate-950 tracking-tight mb-16 text-center">Features of Tally.Developer 9</h2>
            
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
              <h2 className="text-[32px] font-heading font-black text-slate-950 tracking-tight mb-12">Ideal For Developers & Solution Providers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-sm hover:shadow-lg transition-all text-left relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-rose-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-lg text-slate-600 font-medium leading-relaxed m-0">
                    <span className="text-rose-600 font-bold block mb-2 text-xl">TDL Programmers</span>
                    Who want to build custom functionality and extensions for TallyPrime with professional development tools.
                  </p>
                </div>
                <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-sm hover:shadow-lg transition-all text-left relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-slate-950 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-lg text-slate-600 font-medium leading-relaxed m-0">
                    <span className="text-slate-900 font-bold block mb-2 text-xl">Solution Partners</span>
                    Developing and deploying Tally-based solutions for enterprise clients globally.
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



