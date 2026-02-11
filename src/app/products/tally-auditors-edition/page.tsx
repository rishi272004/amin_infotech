'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { CheckCircle2, BarChart3, Shield, Users, FileText, TrendingUp, Eye, Zap } from 'lucide-react';
import Link from "next/link";

export default function TallyAuditorsEditionPage() {
  const features = [
    "Remote Client Data Access from anywhere with secure credentials",
    "Continuous Compliance Services for value-added advisory",
    "Multi-Client Management with consolidated view",
    "Real-time Financial Insights for audit planning",
    "Complete Audit Trail Management for accountability",
    "Tax Compliance Support for regulatory requirements",
    "Streamlined Audit Procedures and workflows",
    "Professional Advisory Services capability",
  ];

  const capabilities = [
    { icon: Eye, title: "Remote Access", desc: "Access your client's financial data securely from your office or anywhere in the world" },
    { icon: FileText, title: "Compliance Services", desc: "Offer continuous compliance and advisory services to expand your service portfolio" },
    { icon: BarChart3, title: "Multi-Client", desc: "Manage multiple audit engagements efficiently with consolidated client data views" },
    { icon: Zap, title: "Real-time Insights", desc: "Get instant access to financial data and generate reports on-demand for better audit planning" },
    { icon: Shield, title: "Audit Trail", desc: "Complete audit trail with all user activities and data changes for transparency and accountability" },
    { icon: TrendingUp, title: "Tax Support", desc: "Simplified tax compliance features to meet regulatory requirements efficiently" },
  ];

  const benefits = [
    { title: "Reduce Audit Time", desc: "Streamline audit procedures and reduce time spent on repetitive tasks" },
    { title: "Increase Effectiveness", desc: "Enhance audit quality and identify issues faster with real-time data access" },
    { title: "Expand Service Portfolio", desc: "Add high-value advisory and compliance services to increase revenue" },
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
          font-size: 24px;
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
                <span className="text-[18px] font-bold uppercase tracking-[0.3em] text-rose-600 mb-6 block">For Chartered Accountants</span>
                <h1 className="text-[50px] md:text-[65px] font-heading font-bold text-slate-950 tracking-tighter leading-[0.9] mb-10">
                  <span className="text-rose-600">Auditors'</span> <span className="text-slate-950">Edition</span>
                </h1>
                <p className="text-xl text-slate-600 font-normal leading-relaxed mb-8">
                  A powerful tool designed exclusively for Chartered Accountants to transform your practice, streamline audit processes, and expand your service portfolio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary">Request CA Demo</Link>
                  
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
                      <span className="box-spine-text">AUDITORS EDITION ✕ ADVISORY</span>
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
                        <span className="brand">Audit Management</span>
                        <h3>TallyPrime<br/>Auditor</h3>
                        <div className="box-accent"></div>
                      </div>
                      
                      <div className="box-details">
                        <span className="box-detail-text">v4.0 COMPLIANCE</span>
                        <span className="box-detail-text">PROFESSIONAL</span>
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
                  <span className="text-rose-600 font-bold tracking-[0.2em] text-sm uppercase mb-6 block">Chartered Solutions</span>
                  <h2 className="text-[48px] md:text-[56px] font-heading font-black text-slate-950 tracking-tighter leading-[1.1] mb-8">
                    Modern Audit <br />
                    <span className="text-rose-600">Practices.</span>
                  </h2>
                  <div className="w-20 h-1.5 bg-rose-600 mb-8" />
                  <p className="text-lg text-slate-500 font-normal leading-relaxed max-w-sm">
                    Empowering CAs with tools designed for a growing economy and complex compliance landscapes.
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
                      A growing economy, widening tax net and increasing compliance requirements make an Auditor's role critical. For a Chartered Accountant, this often means time is at a premium—travel and people costs escalate daily, and manpower is in short supply. Instead of an ideal workload across the year, you face short periods of intense pressure. TallyPrime - Auditors' Edition allows you to turn all this around.
                    </p>
                  </div>

                  <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 mt-8 relative overflow-hidden group">
                    <p className="text-xl text-slate-700 font-normal leading-relaxed m-0">
                      This powerful tool is designed to assist you in transforming your practice and streamlining your clients' businesses. Working in perfect conjunction with TallyPrime installed at your clients' offices, this unrivalled product increases audit effectiveness while significantly reducing time and effort. It opens up opportunities to add new services to your portfolio, such as continuous compliance and remote data management.
                    </p>
                  </div>

                  <div className="p-8 md:p-10 rounded-[2.5rem] bg-rose-600 text-white shadow-xl shadow-rose-200 mt-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                    <p className="text-xl font-normal leading-relaxed m-0">
                      The new remote capability allows you to access client data from wherever you are—directly from your office or even while on the move. This unique product empowers you to offer high-value added services, ensuring your practice remains at the forefront of the profession.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Advisory Practitioner Programme Section */}
        <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/5 blur-[120px] rounded-full -mr-32 -mt-32" />
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-[32px] font-heading font-bold text-slate-950 tracking-tight mb-12 text-center">Business Advisory Practitioner Programme</h2>
              
              <div className="space-y-8 text-lg text-slate-600 font-normal leading-relaxed p-10 rounded-[2.5rem] bg-white border border-rose-200 shadow-xl shadow-slate-200/50">
                <p>
                  A concerted initiative of your association - the Institute of Chartered Accountants of India (ICAI) - the BAP steers CAs towards increased opportunities and earnings and expanded service portfolios.
                </p>

                <p>
                  TallyPrime - Auditors' Edition delivers powerful tools to assist you grow your practice - keeping the objectives of the BAP Program in mind. By leveraging this solution, you can expand your service offerings and increase your engagement with clients beyond traditional audit services.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <h2 className="text-[32px] font-heading font-bold text-slate-950 tracking-tight mb-16 text-center">Key Features</h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-rose-200 transition-all"
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
        <section className="py-24 bg-slate-50 relative">
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-[32px] font-heading font-black text-slate-950 tracking-tight mb-12">Perfect For CAs Who Want To Grow</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:shadow-lg transition-all text-left relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-2 h-full bg-rose-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-lg text-slate-600 font-medium leading-relaxed m-0">
                    <span className="text-rose-600 font-bold block mb-2 text-xl">Audit Professionals</span> 
                    Looking to streamline their practice with advanced tools and remote client access capabilities.
                  </p>
                </div>
                <div className="p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:shadow-lg transition-all text-left relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-slate-950 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-lg text-slate-600 font-medium leading-relaxed m-0">
                    <span className="text-slate-950 font-bold block mb-2 text-xl">Advisory Practitioners</span> 
                    Wanting to expand their service portfolio with compliance and continuous advisory services.
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



