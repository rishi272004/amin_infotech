'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Wrench, Lightbulb, Headphones, Briefcase } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Sales",
    slug: "sales",
    desc: "With sales being the lifeline of a business, efficiencies in sales operations directly impact growth and profitability. Amin Infotech meets the demands of monitoring and optimizing the sales process with exceptional capabilities.",
    icon: Target,
  },
  {
    title: "Services",
    slug: "services-excellence",
    desc: "With Amin Infotech, you get the care and attention of a family-owned company that values relationships with customers. You'll receive expert guidance from people experienced in enterprise software solutions.",
    icon: Wrench,
  },
  {
    title: "Implementation",
    slug: "implementation",
    desc: "Our core understanding of your business combined with dedicated training and customization makes Tally work for you as your true business solution with information available at your fingertips.",
    icon: Lightbulb,
  },
  {
    title: "Support",
    slug: "support",
    desc: "Amin Infotech provides knowledge-intensive support solutions delivered remotely. High quality, scalable and cost-effective outsourcing of technical and IT help desk functions for your peace of mind.",
    icon: Headphones,
  },
  {
    title: "Training",
    slug: "training",
    desc: "We provide corporate training through well-experienced coaching staff. Successful completion of multiple corporate training programs for Tally with schedules customized to your organizational needs.",
    icon: Briefcase,
  }
];

const ServiceCards = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpanded = (slug: string) => {
    setExpanded(prev => ({
      ...prev,
      [slug]: !prev[slug]
    }));
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-50 rounded-full blur-[120px] -z-10" />
      
      <div className="container-custom">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[16px] font-bold uppercase tracking-[0.1em] text-rose-600 mb-4 block"
          >
            Core Business Areas
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-tight"
          >
            What We <span className="text-rose-600">Deliver</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, i) => {
            const isExpanded = expanded[service.slug];
            const truncatedDesc = service.desc.split(' ').slice(0, 20).join(' ') + '...';
            
            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-5 rounded-[1.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-rose-100 hover:shadow-lg transition-all duration-500 group flex flex-col h-full"
              >
                <div className="p-4 rounded-xl bg-white text-rose-600 shadow-sm border border-slate-100 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 w-fit mb-4">
                  <service.icon size={22} aria-label={`${service.title} service icon`} />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-3 tracking-normal">{service.title}</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed mb-4 flex-grow">
                  {isExpanded ? service.desc : truncatedDesc}
                </p>
                <button
                  onClick={() => toggleExpanded(service.slug)}
                  className="text-rose-600 font-bold text-xs uppercase tracking-wider hover:text-rose-700 transition-colors self-start"
                >
                  {isExpanded ? 'Less' : 'More'}
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
