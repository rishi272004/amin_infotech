import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TallyPrime | Next-Gen Business Management Software',
  description: 'Download and implement TallyPrime with Amin Infotech. The most powerful and simple ERP software for accounting, inventory, and compliance.',
  keywords: ['TallyPrime', 'Tally ERP', 'Accounting software', 'TallyPrime features', 'Tally implementation'],
};

export default function TallyPrimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
