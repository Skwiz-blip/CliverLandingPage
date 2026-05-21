'use client';

import React from 'react';
import { Header } from './landing/Header';
import { Hero } from './landing/Hero';
import { Stats } from './landing/Stats';
import { LiveMap } from './landing/LiveMap';
import { Features } from './landing/Features';
import { HowItWorks } from './landing/HowItWorks';
import { Pricing } from './landing/Pricing';
import { FAQ } from './landing/FAQ';
import { CTADownload } from './landing/CTADownload';
import { Footer } from './landing/Footer';
import { StickyCTA } from './landing/StickyCTA';
import { WhatsAppButton } from './landing/WhatsAppButton';

const LandingPage: React.FC = () => {
  return (
    <div className="lp-root">
      <a href="#hero" className="lp-skip-link">Aller au contenu</a>

      <Header />

      <main>
        <Hero />
        <Stats />
        <LiveMap />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTADownload />
      </main>

      <Footer />

      <StickyCTA />
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;
