'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { CheckCircle2, Cloud, Lock, Users, Zap, TrendingUp } from 'lucide-react';
import Link from "next/link";

export default function TallyPrimeServerPage() {
  const features = [
    { title: "Multi-Version Concurrency", desc: "Advanced multi-version concurrency capabilities for efficient scalability" },
    { title: "Parallel Request Processing", desc: "Requests solved in parallel rather than sequentially, eliminating user queuing" },
    { title: "Isolated Data Access", desc: "Each user operates on isolated snapshots ensuring smooth operations" },
    { title: "No Task Blocking", desc: "Users continue working without blocking others, even with growing user base" },
    { title: "High Data Consistency", desc: "Maintains very high data consistency in intense use environments" },
    { title: "Server-Based Management", desc: "Converts peer-to-peer access to enterprise-grade server based data management" },
    { title: "Improved Security", desc: "Enterprise-level security with role-based access control and audit trails" },
    { title: "Business Optimization", desc: "Streamlines operations for medium to large organizations" },
  ];

  const highlights = [
    "High Concurrency - Multiple users work simultaneously without interference",
    "Improved Security - Enterprise-grade protection and access controls",
    "High Reliability - Robust system with redundancy and backup mechanisms",
    "Business Process Optimization - Streamlined operations for growing enterprises",
    "Lower Cost of Ownership - Reduced maintenance and higher operational efficiency",
    "Scalable Architecture - Grows with your business from medium to large enterprises",
    "Equal Priority Processing - Every user request receives equal priority consideration",
    "Data Snapshot Isolation - Independent data working environments for each user",
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
        <section className="bg-gradient-to-b from-slate-50 to-white py-24 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/5 blur-[120px] rounded-full -mr-32 -mt-32" />
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-2xl"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-rose-600 mb-6 block">Enterprise Class Solution</span>
                <h1 className="text-[50px] md:text-[65px] font-black text-slate-950 tracking-tighter leading-[0.9] mb-10">
                  <span className="text-rose-600">TallyPrime</span> <span className="text-slate-950">Server</span>
                </h1>
                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                  Series A Enterprise Class product for medium and large size businesses. Convert peer-to-peer data access to powerful server-based data management.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary">Get Enterprise Demo</Link>
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
                      <span className="box-spine-text">TALLYPRIME SERVER ✕ AMIN INFOTECH</span>
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
                        <span className="brand">Enterprise Solution</span>
                        <h3>TallyPrime<br/>Server</h3>
                        <div className="box-accent"></div>
                      </div>
                      
                      <div className="box-details">
                        <span className="box-detail-text">v1.2 ENTERPRISE</span>
                        <span className="box-detail-text">SCALABLE</span>
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

        {/* Overview Section */}
        <section className="py-24 border-b border-slate-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-12">The Complete Business Management Solution</h2>
              
              <div className="space-y-8 text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  TallyPrime Server is a 'Series A' Enterprise Class product for medium and large size businesses whose pace of growth requires for it to invest in infrastructure that will help them improve their business efficiencies. TallyPrime Server helps enhance the power and control of TallyPrime Gold users by converting the existing 'peer-to-peer' kind of data access to 'server based' data management.
                </p>

                <p>
                  The TallyPrime Server technology is built with multi-version concurrency capabilities for providing most efficient scalability. Requests from every user get equal priority and get solved in parallel with others, rather than sequentially. There is no queuing of access or modification requests and so every user will feel as if he were working with his own local copy or snapshot of data. TallyPrime Server will ensure that the data access/modification by a user is isolated to his/her own snapshot, thus allowing other users to operate smoothly.
                </p>

                <p>
                  In other words, with TallyPrime Server, there is essentially no blocking of another user's tasks, even as new users keep getting added to the system, or because of the types of tasks being performed. It also maintains very high data consistency in intense use environment. Overall it leads to lower cost of ownership, lower maintenance and higher efficiency of operations for any medium to large business needing an enterprise grade system.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Highlights Section */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="container-custom">
            <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-16 text-center">Product Highlights</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.slice(0, 8).map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-4 p-6 rounded-xl bg-white border border-slate-100 hover:shadow-lg transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <p className="text-slate-700 font-medium">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-24">
          <div className="container-custom">
            <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-16 text-center">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-2xl hover:border-rose-200 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-black text-slate-950 mb-3 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        

        {/* Ideal For Section */}
        <section className="py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-12">Ideal For Medium & Large Enterprises</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-[2rem] bg-rose-50 border border-rose-100 hover:shadow-lg transition-all">
                  <p className="text-lg text-slate-700 font-medium leading-relaxed">
                    <span className="text-rose-600 font-black">Growing Businesses</span> that need to invest in scalable infrastructure to improve efficiencies and support multiple concurrent users.
                  </p>
                </div>
                <div className="p-10 rounded-[2rem] bg-slate-100 border border-slate-200 hover:shadow-lg transition-all">
                  <p className="text-lg text-slate-700 font-medium leading-relaxed">
                    <span className="text-slate-900 font-black">Enterprise Operations</span> requiring enterprise-grade reliability, security, and performance across distributed teams.
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



