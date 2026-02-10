'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = services.length - 1;
      if (nextIndex >= services.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const activeService = services[currentIndex];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-50 rounded-full blur-[120px] -z-10" />
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[11px] font-black uppercase tracking-[0.3em] text-rose-600 mb-4 block"
          >
            Professional Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight">
            Our <span className="text-rose-600">Services</span>
          </h2>
        </motion.div>

        {/* Slider Container */}
        <div className="relative h-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="bg-gradient-to-br from-slate-50 to-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-lg max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600">
                    <activeService.icon size={48} />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-3xl md:text-4xl font-black text-slate-950 mb-6 tracking-tight">
                    {activeService.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                    {activeService.desc}
                  </p>
                  
                  <Link
                    href={activeService.href}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-rose-600 text-white font-black text-[11px] uppercase tracking-widest rounded-full hover:bg-rose-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn More <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 md:-translate-x-24 z-10 w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center hover:bg-rose-700 hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Previous service"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 md:translate-x-24 z-10 w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center hover:bg-rose-700 hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Next service"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicator Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-3 mt-16"
        >
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`transition-all duration-300 ${
                currentIndex === i
                  ? 'bg-rose-600 w-10 h-3 rounded-full'
                  : 'bg-slate-300 w-3 h-3 rounded-full hover:bg-slate-400'
              }`}
              aria-label={`Go to service ${i + 1}`}
            />
          ))}
        </motion.div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-slate-600 font-black text-sm"
        >
          {currentIndex + 1} of {services.length}
        </motion.div>
      </div>
    </section>
  );
};
export default ServicesSection;
