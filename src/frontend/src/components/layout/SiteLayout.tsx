import { type ReactNode } from 'react';
import TopNav from './TopNav';
import SiteFooter from './SiteFooter';

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
