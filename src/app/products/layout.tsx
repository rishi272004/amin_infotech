import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tally Products & Solutions',
  description: 'Explore our comprehensive range of Tally products including TallyPrime, Tally.Server 9, Tally.Developer 9, and more. Authorized Tally solutions for every business need.',
  keywords: ['TallyPrime', 'Tally.Server 9', 'Tally.Developer 9', 'Tally software', 'Business management software'],
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
