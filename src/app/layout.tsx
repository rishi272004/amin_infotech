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
  title: "Amin Infotech | Premium Tally Solutions",
  description: "Authorized Tally Platinum Partner. Specializing in bespoke Tally implementation, TDL customization, and enterprise-grade support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased font-sans bg-white selection:bg-rose-500 selection:text-white`}>
        {children}
        
        {/* Elegant WhatsApp Link */}
        <a 
          href="https://wa.me/919510920001" 
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
