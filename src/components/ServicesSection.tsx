'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Wrench, Database, Target, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Priority TallyPrime Support Services",
    desc: "Get an Instant support from an expert over phone or Internet may be related to data splitting over year end, data migration to new release, simple Tally configuration etc.",
    icon: HelpCircle,
    href: '/services/onsite-remote-support'
  },
  {
    title: "TallyPrime Onsite and Remote Support",
    desc: "Tally Installation & implementation, Data synchronization, Data Migration or Splitting, Training or incidental support. You can count on us. Our engineer can attend queries onsite or remotely.",
    icon: Wrench,
    href: '/services/onsite-remote-support'
  },
  {
    title: "TallyPrime Data Synchronization",
    desc: "Decide on architecture Type: Centralized / Decentralized / Hybrid, we will set it up for your Multi Location Organization. Sync Data periodically or directly enter data into Central Tally Server.",
    icon: Database,
    href: '/services/tally-synchronization'
  },
  {
    title: "TallyPrime Annual Support Cover",
    desc: "A business continuity program for your organisation from a team who knows Tally Best. You do your business peacefully while we take care of your software. Select a plan suitable to you.",
    icon: Target,
    href: '/services/onsite-remote-support'
  },
  {
    title: "TallyPrime Training",
    desc: "Corporate training programs for your staff to ensure use of TallyPrime to the fullest. A basket of training modules to choose from depending on your need & profile of the team.",
    icon: BookOpen,
    href: '/services/corporate'
  },
  {
    title: "Comprehensive Support & Assistance",
    desc: "Get an Instant support from an expert over phone or Internet may be related to data splitting over year end, data migration to new release, simple Tally configuration etc.",
    icon: HelpCircle,
    href: '/services/onsite-remote-support'
  }
];

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-50 rounded-full blur-[120px] -z-10" />
      
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[14px] font-bold uppercase tracking-[0.1em] text-rose-600 mb-4 block">
              Professional Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tighter leading-tight">
              Enterprise Grade <span className="text-rose-600">Solutions</span>
            </h2>
          </motion.div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                canScrollLeft 
                  ? 'border-rose-200 text-rose-600 hover:bg-rose-600 hover:text-white hover:border-rose-600 shadow-md' 
                  : 'border-slate-200 text-slate-300 cursor-not-allowed'
              }`}
              aria-label="Previous service"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                canScrollRight 
                  ? 'border-rose-200 text-rose-600 hover:bg-rose-600 hover:text-white hover:border-rose-600 shadow-md' 
                  : 'border-slate-200 text-slate-300 cursor-not-allowed'
              }`}
              aria-label="Next service"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={containerRef}
          onScroll={checkScroll}
          className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory px-4 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[300px] md:w-[400px] snap-start"
            >
              <div className="h-full bg-white rounded-[2rem] p-8 border border-slate-100 hover:border-rose-100 transition-all duration-500 group hover:shadow-2xl hover:shadow-rose-600/5 flex flex-col items-start text-left">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 mb-8 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-950 mb-4 tracking-tight leading-snug">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-widest group/link"
                >
                  Learn More 
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
