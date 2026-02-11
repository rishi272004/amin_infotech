import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Join our Tally Expert Team',
  description: 'Explore career opportunities at Amin Infotech. Join a team of Tally professionals and build your career in enterprise software solutions.',
  keywords: ['Tally jobs', 'Tally developer careers', 'Tally sales jobs Vadodara', 'Amin Infotech careers'],
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
