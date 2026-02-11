import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Amin Infotech',
  description: 'Learn about Amin Infotech, an authorized Tally Platinum Partner with over 20 years of experience in providing world-class Tally solutions and consultancy.',
  keywords: ['Tally partner history', 'Amin Infotech history', 'Tally consultancy India', 'Varun Amin Tally'],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
