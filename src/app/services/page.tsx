import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tally Services & Implementation',
  description: 'Expert Tally services including onsite and remote support, .NET integration, custom TDL development, and enterprise Tally synchronization.',
  keywords: ['Tally implementation', 'Tally customization', 'Tally support', 'Tally synchronization', 'Tally .NET services'],
};

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      name: "Onsite & Remote Support",
      description: "Technical support available both on-site and remotely to resolve issues quickly",
      link: "/services/onsite-remote-support",
    },
    {
      id: 2,
      name: ".NET Services",
      description: "Custom .NET application development and integration services",
      link: "/services/net-services",
    },
    {
      id: 3,
      name: "Customization Services",
      description: "Tailor software solutions to match your specific business requirements",
      link: "/services/customization",
    },
    {
      id: 4,
      name: "Implementation Services",
      description: "End-to-end implementation and deployment of software solutions",
      link: "/services/implementation",
    },
    {
      id: 5,
      name: "Corporate Services",
      description: "Enterprise-level solutions for large organizations and corporations",
      link: "/services/corporate",
    },
    {
      id: 6,
      name: "Tally Synchronization",
      description: "Data synchronization and integration services for Tally systems",
      link: "/services/tally-synchronization",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="page-header-offset">
        {/* Dynamic Hero Section */}
        <section className="bg-slate-50 py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-600/5 -skew-x-12 transform origin-top translate-x-20" />
          <div className="absolute top-[-10%] left-[-5%] text-[40vw] font-black text-rose-50/40 select-none pointer-events-none tracking-tighter leading-none">
            AI
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl">
              <span className="text-rose-600 font-bold tracking-[0.3em] text-[12px] uppercase mb-6 block">Our Capabilities</span>
              <h1 className="text-[50px] md:text-[80px] font-heading font-black text-slate-950 tracking-tighter leading-[0.9] mb-10">
                Expert <span className="text-rose-600">Services</span> for Tally
              </h1>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12">
                We provide comprehensive technology solutions to support your business growth through precision engineering and mission-critical support.
              </p>
            </div>
          </div>
        </section>

        <div className="container-custom py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group bg-slate-50 rounded-[2.5rem] border border-slate-200 p-10 hover:bg-white hover:border-rose-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1">
                <div className="bg-rose-600 h-1.5 w-12 rounded-full mb-8"></div>
                <h2 className="text-2xl font-heading font-bold text-slate-950 mb-6 tracking-tight group-hover:text-rose-600 transition-colors leading-tight">{service.name}</h2>
                <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-rose-600 font-bold text-sm group/link"
                >
                  Learn More <span className="translate-x-0 group-hover/link:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}




