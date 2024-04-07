import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StarsCanvas from '@/components/sections/StarBackground';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'This is the portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-x-hidden`}>
        <StarsCanvas />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
