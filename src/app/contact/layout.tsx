import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Tally Expert Consultation',
  description: 'Get in touch with Amin Infotech for expert Tally consultation, support, and implementation services. Visit our strategic hub in Vadodara or call us today.',
  keywords: ['contact Tally partner', 'Tally support number', 'Tally Vadodara office', 'Tally implementation contact'],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
