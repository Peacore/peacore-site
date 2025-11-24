import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import Process from '@/components/Process';
import Differential from '@/components/Differential';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Hero />
      <Pillars />
      <Process />
      <Differential />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
