// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import ContactUs from '@/components/ContactUs';
import AOSInitializer from '@/components/AOSInitializer';

export const metadata = {
  title: 'Brata Tour & Travel',
  description: 'Selamat datang di Brata Tour',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="flex flex-col min-h-screen">
        <AOSInitializer /> {/* AOS is initialized here */}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ContactUs />
      </body>
    </html>
  );
}
