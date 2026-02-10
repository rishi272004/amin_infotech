'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Cloud, BarChart3, Lock, Users, Smartphone, TrendingUp } from 'lucide-react';
import Link from "next/link";

export default function TallySoftwareServicesPage() {
  const features = [
    "Real-time Business Reports from anywhere, anytime",
    "Multi-branch Synchronization across all locations",
    "Modern Business Operations connectivity framework",
    "Connected Employees access from home or office",
    "Internal Connectivity with branches and warehouses",
    "External Connectivity with customers and banks",
    "Statutory Updates and compliance notifications",
    "Mobility support for on-the-go access",
  ];

  const capabilities = [
    { icon: Cloud, title: "Cloud Connectivity", desc: "Connect your entire business ecosystem with secure cloud-based services" },
    { icon: BarChart3, title: "Real-time Analytics", desc: "Access comprehensive analytics and reports for informed decision making" },
    { icon: Users, title: "Multi-branch Support", desc: "Seamlessly synchronize data across all branches and warehouses" },
    { icon: Smartphone, title: "Mobile Access", desc: "Access your business information from any device, anywhere" },
    { icon: Zap, title: "Instant Synchronization", desc: "Real-time data sync ensuring everyone has the latest information" },
    { icon: Lock, title: "Enterprise Security", desc: "Bank-level security with encrypted data transmission and access controls" },
  ];

  const connectivity = [
    {
      title: "Internal Connectivity",
      items: [
        "Connect multiple branches and warehouses",
        "Real-time data synchronization",
        "Factory production management",
        "Employee access from anywhere"
      ]
    },
    {
      title: "External Connectivity",
      items: [
        "Customer portals and e-commerce",
        "Vendor collaboration tools",
        "Bank integration services",
        "Remote audit capabilities"
      ]
    }
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
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-rose-600 mb-6 block">Connectivity Suite</span>
                <h1 className="text-[50px] md:text-[65px] font-black text-slate-950 tracking-tighter leading-[0.9] mb-10">
                  <span className="text-rose-600">Tally.NET</span> <span className="text-slate-950">Services</span>
                </h1>
                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                  The complete business management solution for modern, connected enterprises. Stay instantly connected with your business, customers, banks, and stakeholders - 24/7 from anywhere.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary">Activate Services</Link>
                  
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
                      <span className="box-spine-text">TALLY SOFTWARE SERVICES</span>
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
                        <h3>Software <br/>Services</h3>
                        <div className="box-accent" />
                      </div>
                      
                      <div className="box-details">
                        <div>
                          <p className="box-detail-text">CONNECTIVITY</p>
                          <p className="box-detail-text">TALLY.NET</p>
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
                  Modern businesses operate in a connected and informed environment. Better connectivity both internally with employees, branches, warehouses and factory and externally with vendors, customers and banks ensures efficient business operations and hence, faster growth. Not just with stakeholders, but as an entrepreneur, to be in constant touch with your business is essential.
                </p>

                <p>
                  During engagements with clients, vendors or simply while travelling for business or leisure, information on your finger-tips helps take timely decisions. TallyPrime provides value added services to deliver such connectivity to modern businesses, via Tally.NET Services. Tally.NET Services help you connect more efficiently with your business, customers, banks and other business stakeholders.
                </p>

                <p>
                  With the host of services that Tally.NET powers, you can rest assured that your business will always remain up-to-date with the latest developments in technology and statutory laws. It also assures you that you have complete visibility to your business (along with all branches) even while you are on the move.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Connectivity Framework Section */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="container-custom">
            <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-16 text-center">Complete Connectivity Framework</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {connectivity.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-2xl transition-all"
                >
                  <h3 className="text-lg font-black text-rose-600 mb-6 uppercase tracking-tight">{section.title}</h3>
                  <div className="space-y-4">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-slate-400 flex-shrink-0 mt-1" />
                        <p className="text-slate-700 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-24 border-b border-slate-100">
          <div className="container-custom">
            <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-16 text-center">Key Features</h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-rose-200 transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <p className="text-slate-700 font-medium">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Tally.NET Section */}
        <section className="py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-[40px] font-black text-slate-950 tracking-tight mb-12">Why Tally.NET Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-[2rem] bg-rose-50 border border-rose-100 hover:shadow-lg transition-all">
                  <p className="text-lg text-slate-700 font-medium leading-relaxed">
                    <span className="text-rose-600 font-black">Complete Visibility:</span> Access your complete business data across all branches and warehouse locations in real-time.
                  </p>
                </div>
                <div className="p-10 rounded-[2rem] bg-slate-100 border border-slate-200 hover:shadow-lg transition-all">
                  <p className="text-lg text-slate-700 font-medium leading-relaxed">
                    <span className="text-slate-900 font-black">Always Connected:</span> Stay informed and make faster decisions with information on your fingertips from anywhere.
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


