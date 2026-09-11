import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1789106998341',
  description: 'An upscale wedding photography studio website designed to convert engaged couples into booking inquiries through stunning visual storytelling, trust-building testimonials, and streamlined consultation booking.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#FEFAF3', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
