'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Package, TrendingUp, Globe, Tag, Zap } from 'lucide-react';
import Link from "next/link";

export default function PriceListPage() {
  const tallyProducts = [
    { name: "TallyPrime Silver", price: "22,500", gst: true },
    { name: "TallyPrime Gold", price: "67,500", gst: true },
    { name: "TallyPrime Auditors Edition", price: "13,500", gst: true },
    { name: "TallyPrime Server", price: "2,70,000", gst: true },
    { name: "Shoper 9 Gold", price: "54,000", gst: true },
  ];

  const upgradeOptions = [
    { name: "TallyPrime Silver to TallyPrime Gold", price: "45,000", gst: true },
    { name: "Pre Tally.ERP 9 Gold to TallyPrime Gold", price: "27,000", gst: true },
    { name: "TallyPrime Silver India to TallyPrime Silver SAARC", price: "16,920", gst: true },
    { name: "TallyPrime Gold India to TallyPrime Gold SAARC", price: "50,760", gst: true },
    { name: "Pre Tally.ERP 9 Silver to TallyPrime Gold", price: "49,500", gst: true },
    { name: "Pre Tally.ERP 9 Silver to TallyPrime Silver", price: "9,000", gst: true },
    { name: "Tally Virtual User 1-4", price: "1,500", gst: true },
  ];

  const subscriptions = [
    { name: "Tally Software Services Auditor 1 Year Subscription", price: "6,750", gst: true },
    { name: "TallyPrime Silver (Single User)", price: "4,500", gst: true },
    { name: "TallyPrime Gold (Multi User)", price: "13,500", gst: true },
  ];

  const internationalPricing = [
    { name: "TallyPrime Silver (Single User)", price: "630", currency: "US$", gst: false },
    { name: "TallyPrime Gold", price: "1,890", currency: "US$", gst: false },
    { name: "Shoper 9 Silver (Single User)", price: "630", currency: "US$", gst: false },
    { name: "Shoper 9 Gold", price: "1,890", currency: "US$", gst: false },
    { name: "Shoper 9 Diamond", price: "12,600", currency: "US$", gst: false },
  ];

  const PricingCard = ({ item, idx }: { item: any; idx: number }) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (idx % 3) * 0.1 }}
      className="p-6 rounded-[2rem] bg-white border border-slate-200 hover:shadow-xl hover:border-rose-300 transition-all group"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-black text-slate-950 leading-snug flex-1 group-hover:text-rose-600 transition-colors">
          {item.name}
        </h3>
        <CheckCircle2 size={20} className="text-rose-600 flex-shrink-0 ml-2" />
      </div>
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-2xl font-black text-rose-600">{item.currency || '₹'}{item.price}</span>
        {item.gst && <span className="text-xs text-slate-500 font-medium">+ GST</span>}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="page-header-offset">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/5 blur-[120px] rounded-full -mr-32 -mt-32" />
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-block bg-rose-100 text-rose-700 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                Transparent Pricing
              </div>
              <h1 className="text-[50px] md:text-[80px] font-black text-slate-950 tracking-tighter leading-[0.9] mb-8">
                Our <span className="text-rose-600">Price</span> List
              </h1>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                Affordable, transparent, and scalable pricing for every business size. All prices are GST-exclusive unless mentioned otherwise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Price Offers on Tally Products */}
        <section className="py-24 border-b border-slate-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-4">
                <Package size={32} className="text-rose-600" />
                <div>
                  <h2 className="text-[40px] font-black text-slate-950 tracking-tight">Price Offers on Tally Products</h2>
                  <p className="text-slate-500 font-medium mt-2">Choose the perfect solution for your business requirements</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tallyProducts.map((item, idx) => (
                <PricingCard key={idx} item={item} idx={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Price Offers on Products Upgrades */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp size={32} className="text-rose-600" />
                <div>
                  <h2 className="text-[40px] font-black text-slate-950 tracking-tight">Price Offers on Products Upgrades</h2>
                  <p className="text-slate-500 font-medium mt-2">Affordable upgrade paths for existing Tally users</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upgradeOptions.map((item, idx) => (
                <PricingCard key={idx} item={item} idx={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Tally Software Services Subscriptions */}
        <section className="py-24 border-b border-slate-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap size={32} className="text-rose-600" />
                <div>
                  <h2 className="text-[40px] font-black text-slate-950 tracking-tight">Tally Software Services Subscriptions</h2>
                  <p className="text-slate-500 font-medium mt-2">Keep your system updated with regular subscriptions</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subscriptions.map((item, idx) => (
                <PricingCard key={idx} item={item} idx={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* International Charges */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe size={32} className="text-rose-600" />
                <div>
                  <h2 className="text-[40px] font-black text-slate-950 tracking-tight">International Charges</h2>
                  <p className="text-slate-500 font-medium mt-2">Global pricing for our worldwide customers</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internationalPricing.map((item, idx) => (
                <PricingCard key={idx} item={item} idx={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-slate-950">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-slate-300 font-medium mb-12 max-w-2xl mx-auto">
                Contact our sales team for custom quotes, bulk discounts, or special pricing arrangements tailored to your organization's needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-rose-600 text-white font-black py-5 px-14 rounded-2xl hover:bg-rose-700 hover:shadow-2xl hover:shadow-rose-600/40 transition-all hover:-translate-y-1"
                >
                  Get Custom Quote
                </Link>
                <Link
                  href="/products"
                  className="bg-white/10 text-white border border-white/30 font-black py-5 px-14 rounded-2xl hover:bg-white/20 transition-all"
                >
                  Explore Products
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

