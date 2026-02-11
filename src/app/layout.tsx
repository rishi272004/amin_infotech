import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { MessageCircle } from "lucide-react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amin Infotech | Premium Tally Solutions & Authorized Partner",
    template: "%s | Amin Infotech"
  },
  description: "Authorized Tally Platinum Partner in Vadodara, Gujarat. Specializing in bespoke Tally ERP implementation, TDL customization, integration, and enterprise-grade support for global businesses.",
  keywords: ["Tally authorized partner", "Tally customization Gujarat", "Tally implementation", "Tally ERP support", "TDL customization", "Amin Infotech", "Tally software Vadodara", "Tally solutions India", "TallyPrime Partner", "Corporate Tally Solutions", "Authorized Tally Solutions", "Tally ERP Integration"],
  authors: [{ name: "Amin Infotech" }],
  creator: "Amin Infotech",
  publisher: "Amin Infotech",
  category: 'Business',
  classification: 'Tally Solutions Partner',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://www.amininfotech.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Amin Infotech | Premium Tally Solutions",
    description: "Authorized Tally Platinum Partner. Specializing in bespoke Tally implementation, TDL customization, and enterprise-grade support.",
    url: 'https://www.amininfotech.com',
    siteName: 'Amin Infotech',
    images: [
      {
        url: '/images/website.png',
        width: 1200,
        height: 630,
        alt: 'Amin Infotech - Tally Solutions Partner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Amin Infotech | Premium Tally Solutions",
    description: "Authorized Tally Platinum Partner. Specializing in bespoke Tally implementation, TDL customization, and enterprise-grade support.",
    images: ['/images/website.png'],
  },
  icons: {
    icon: "/images/website.png",
    shortcut: "/images/website.png",
    apple: "/images/website.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Amin Infotech',
    description: 'Authorized Tally Platinum Partner specializing in Tally ERP implementation and customization.',
    url: 'https://www.amininfotech.com',
    logo: 'https://www.amininfotech.com/images/amin_logo.png',
    image: 'https://www.amininfotech.com/images/website.png',
    telephone: '+91 99247 00015',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4th Floor Signature Building, Besides Makarpura D-Mart, Near Susan Makarpura Road',
      addressLocality: 'Vadodara',
      addressRegion: 'Gujarat',
      postalCode: '390010',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.2575, // Approximate for Makarpura, Vadodara
      longitude: 73.1952,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '10:00',
      closes: '19:00',
    },
    sameAs: [
      'https://www.facebook.com/amininfotech/',
      'https://www.linkedin.com/in/varun-amin-30835b2b/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 99247 00015',
      contactType: 'technical support',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi', 'gu']
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased font-sans bg-white selection:bg-rose-500 selection:text-white`}>
        {children}
        
        {/* Elegant WhatsApp Link */}
        <a 
          href="https://wa.me/919924700015" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-10 right-10 z-[60] bg-[#128C7E] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-500 group"
        >
          <MessageCircle size={28} />
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-slate-100 pointer-events-none uppercase tracking-widest">
            Expert Advisory
          </div>
        </a>
      </body>
    </html>
  );
}
