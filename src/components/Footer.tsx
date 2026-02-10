'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Company', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Price List', href: '/price-list' },
    { label: 'Services', href: '/services' },
    { label: 'Career', href: '/career' },
    { label: 'Contact Us', href: '/contact' }
  ];

  const products = [
    { label: 'TallyPrime', href: '/products/tally-erp-tns' },
    { label: 'TallyPrime Server', href: '/products/tally-server-9' },
    { label: 'Tally Developer 9', href: '/products/tally-developer-9' },
    { label: 'Shoper 9', href: '/products/shoper-9' },
    { label: 'TallyPrime Auditors\' Edition', href: '/products/tally-auditors-edition' },
    { label: 'Tally Software Services', href: '/products/tally-software-services' }
  ];

  const services = [
    { label: 'Onsite & Remote Support', href: '/services/onsite-remote-support' },
    { label: '.NET Services', href: '/services/net-services' },
    { label: 'Customization Services', href: '/services/customization' },
    { label: 'Implementation Services', href: '/services/implementation' },
    { label: 'Corporate Services', href: '/services/corporate' },
    { label: 'Tally Synchronization', href: '/services/tally-synchronization' }
  ];

  const supportNumbers = [
    { number: '+91 9924700015', display: '+91 9924700015' },
    { number: '+91 9265874361', display: '+91 9265874361' },
    { number: '+91 9265874362', display: '+91 9265874362' },
    { number: '+91 9265874363', display: '+91 9265874363' },
    { number: '+91 9265874364', display: '+91 9265874364' },
    { number: '+91 9924780015', display: '+91 9924780015' },
    { number: '+91 8200498565', display: '+91 8200498565' },
    { number: '+91 6352943499', display: '+91 6352943499' },
    { number: '+91 8799388612', display: '+91 8799388612' },
    { number: '+91 6352943499', display: '+91 6352943499' }
  ];

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-8 overflow-hidden relative">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 pb-16 border-b border-white/10">
          
          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.35em] text-rose-500 mb-8 pb-4 border-b border-rose-500/30">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-rose-500 transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.35em] text-rose-500 mb-8 pb-4 border-b border-rose-500/30">Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.label}>
                  <Link href={product.href} className="text-slate-400 hover:text-rose-500 transition-colors text-sm font-medium">
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.35em] text-rose-500 mb-8 pb-4 border-b border-rose-500/30">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="text-slate-400 hover:text-rose-500 transition-colors text-sm font-medium">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Association */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.35em] text-rose-500 mb-8 pb-4 border-b border-rose-500/30">We Are Associated With</h4>
            <div className="flex flex-col gap-8 items-start">
              <div className="flex items-center justify-center">
                <img src="/images/associate1.png" alt="Associate Partner 1" className="h-20 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/images/associate2.png" alt="Associate Partner 2" className="h-20 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Office Address */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={18} className="text-rose-500 flex-shrink-0" />
              <h5 className="text-[11px] font-black uppercase tracking-[0.35em] text-rose-500">Office</h5>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              4th Floor Signature Building<br/>
              Besides Makarpura D-Mart<br/>
              Near Susan Makarpura Road<br/>
              Vadodara<br/>
              <span className="font-semibold text-slate-300">Gujarat 390010</span>
            </p>
          </div>

          {/* Support Numbers */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Phone size={18} className="text-rose-500 flex-shrink-0" />
              <h5 className="text-[11px] font-black uppercase tracking-[0.35em] text-rose-500">Support Numbers</h5>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {supportNumbers.map((item) => (
                <div key={item.number}>
                  <a href={`tel:${item.number}`} className="text-slate-400 hover:text-rose-500 transition-colors text-sm font-medium block">
                    {item.display}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Mail size={18} className="text-rose-500 flex-shrink-0" />
              <h5 className="text-[11px] font-black uppercase tracking-[0.35em] text-rose-500">Get In Touch</h5>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              <a href="mailto:amininfotech@gmail.com" className="hover:text-rose-500 transition-colors font-semibold">
                amininfotech@gmail.com
              </a>
            </p>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/amininfotech/', label: 'Facebook' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/varun-amin-30835b2b/', label: 'LinkedIn' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center hover:bg-rose-500 transition-all hover:text-white group border border-rose-500/20 hover:border-rose-500"
                >
                  <social.icon size={16} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              <span className="font-semibold text-slate-300">Tally Authorized Certified Partner</span><br/>
              <span className="text-slate-500">&amp; Platinum Integration Partner</span>
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.2em]">
            &copy; {currentYear} Amin Infotech Pvt. Ltd. | ISO 9001:2015 Certified
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-slate-500 hover:text-rose-500 text-[9px] font-black uppercase tracking-[0.2em] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-500 hover:text-rose-500 text-[9px] font-black uppercase tracking-[0.2em] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
