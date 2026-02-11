'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

const products = [
  { name: 'TallyPrime', href: '/products/tally-erp-tns' },
  { name: 'TallyPrime Server', href: '/products/tally-server-9' },
  { name: 'Tally Developer 9', href: '/products/tally-developer-9' },
  { name: 'Shoper 9', href: '/products/shoper-9' },
  { name: 'TallyPrime Auditors\' Edition', href: '/products/tally-auditors-edition' },
  { name: 'Tally Software Services', href: '/products/tally-software-services' },
];

const services = [
  { name: 'Onsite & Remote Support', href: '/services/onsite-remote-support' },
  { name: '.NET Services', href: '/services/net-services' },
  { name: 'Customization Services', href: '/services/customization' },
  { name: 'Implementation Services', href: '/services/implementation' },
  { name: 'Corporate Services', href: '/services/corporate' },
  { name: 'Tally Synchronization', href: '/services/tally-synchronization' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 soft-shadow' : 'bg-transparent py-6'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link href="/" className="relative z-10 block">
              <img 
                src="/images/amin_logo.png" 
                alt="Amin Infotech" 
                className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-14'}`} 
              />
            </Link>
            
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {['Home', 'About'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-700 hover:text-rose-600 transition-colors"
              >
                {item}
              </Link>
            ))}

            <Dropdown label="Products" href="/products" items={products} />
            <Dropdown label="Services" href="/services" items={services} />
            
            <Link 
              href="/price-list"
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-700 hover:text-rose-600 transition-colors"
            >
              Pricing
            </Link>
          </nav>

          {/* CTA Group */}
          <div className="flex items-center gap-4">
            <Link 
              href="/contact" 
              className="hidden sm:flex items-center gap-3 px-6 py-3 bg-brand-red text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-rose-800 transition-all shadow-lg hover:shadow-rose-600/20 group"
            >
              Contact <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button 
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden p-2 text-slate-900 bg-slate-50 rounded-xl"
            >
              {mobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-white z-[60] lg:hidden overflow-hidden"
          >
            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-center mb-16">
                <img src="/images/amin_logo.png" className="h-10" alt="Logo" />
                <button onClick={() => setMobileMenu(false)} className="p-3 bg-slate-50 rounded-full">
                  <X />
                </button>
              </div>
              
              <div className="space-y-6">
                {['Home', 'About', 'Products', 'Services', 'Price List', 'Contact'].map((item) => (
                  <Link 
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setMobileMenu(false)}
                    className="block text-4xl font-black text-slate-900 tracking-tighter hover:text-rose-600 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Dropdown = ({ label, href, items }: { label: string, href: string, items: any[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div 
      className="relative py-2"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link 
        href={href}
        className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-700 group hover:text-rose-600 transition-colors"
      >
        {label}
        <ChevronDown size={12} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </Link>
      
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full -left-4 w-72 pt-4"
          >
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-3">
              {items.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className="block px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-rose-600 hover:bg-rose-50/50 rounded-xl transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
