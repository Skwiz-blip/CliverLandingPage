'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ArrowRight,
  CheckCircle2,
  Apple,
  Play,
  Package,
  Zap,
  MapPin,
} from 'lucide-react';
import { fadeUp, fadeIn, stagger } from './motion';

function PhoneMockup() {
  return (
    <div className="lp-phone" role="img" aria-label="Aperçu de l’application Cliver : suivi de livraison en temps réel">
      {/* Side buttons */}
      <span className="lp-phone-side-btn lp-phone-silent" aria-hidden="true" />
      <span className="lp-phone-side-btn lp-phone-vol-up" aria-hidden="true" />
      <span className="lp-phone-side-btn lp-phone-vol-dn" aria-hidden="true" />
      <span className="lp-phone-side-btn lp-phone-power" aria-hidden="true" />

      <div className="lp-phone-screen">
        {/* Dynamic Island */}
        <div className="lp-phone-island" aria-hidden="true" />

        <div className="lp-phone-statusbar">
          <span>9:41</span>
          <div className="lp-phone-statusbar-icons" aria-hidden="true">
            <span /><span /><span /><span />
            <div className="lp-phone-batt"><span /></div>
          </div>
        </div>

        <div className="lp-phone-app-head">
          <div>
            <h4>Mission en cours</h4>
            <span>Colis #CL-2841</span>
          </div>
          <Package size={18} color="#ff7f30" />
        </div>

        <div className="lp-phone-map" aria-hidden="true">
          <svg viewBox="0 0 260 360" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="260" height="360" fill="url(#grid)" />

            <path d="M40 30 Q 80 80 60 140 T 130 220 T 220 310" className="lp-phone-route-bg" />
            <path d="M40 30 Q 80 80 60 140 T 130 220 T 220 310" className="lp-phone-route-path" />

            <circle cx="40" cy="30" r="6" className="lp-phone-pin-bike" />
            <circle cx="40" cy="30" r="6" className="lp-phone-pin-ring" />

            <circle cx="220" cy="310" r="6" className="lp-phone-pin" />
          </svg>
        </div>

        <div className="lp-phone-bottom">
          <div className="lp-phone-bottom-row">
            <div className="lp-phone-avatar">Y</div>
            <div className="lp-phone-bottom-info">
              <strong>Yao M.</strong>
              <span>Livreur · Moto 124cc</span>
            </div>
            <span className="lp-phone-eta">14 min</span>
          </div>
          <div className="lp-phone-bar"><span /></div>
        </div>

        {/* Home indicator */}
        <span className="lp-phone-home" aria-hidden="true" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="lp-hero">
      <div className="lp-hero-glow" aria-hidden="true" />
      <div className="lp-container lp-hero-grid">
        <motion.div
          className="lp-hero-copy"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.span className="lp-eyebrow" variants={fadeUp}>
            <span className="lp-eyebrow-dot" /> Nouveau · Disponible à Lomé
          </motion.span>

          <motion.h1 className="lp-hero-title" variants={fadeUp}>
            Une livraison <span className="lp-text-gradient">rapide, fiable</span> et sans friction.
          </motion.h1>

          <motion.p className="lp-hero-subtitle" variants={fadeUp}>
            Cliver connecte clients et livreurs en quelques secondes. Commandez en quelques clics,
            suivez en temps réel, et recevez vos colis en un temps record.
          </motion.p>

          <motion.div className="lp-hero-actions" variants={fadeUp}>
            <a href="#download" className="lp-btn lp-btn-primary lp-btn-lg">
              <Download size={18} />
              Télécharger l’application
            </a>
            <a href="#how-it-works" className="lp-btn lp-btn-ghost lp-btn-lg">
              Découvrir
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div className="lp-hero-stores" variants={fadeUp}>
            <a href="#download" className="lp-hero-store" aria-label="Télécharger sur l’App Store">
              <Apple size={22} />
              <span>
                <small>Disponible sur</small>
                <strong>App Store</strong>
              </span>
            </a>
            <a href="#download" className="lp-hero-store" aria-label="Disponible sur Google Play">
              <Play size={22} />
              <span>
                <small>Disponible sur</small>
                <strong>Google Play</strong>
              </span>
            </a>
          </motion.div>

          <motion.ul className="lp-hero-bullets" variants={fadeUp}>
            <li><CheckCircle2 size={16} /> Inscription en moins d’1 minute</li>
            <li><CheckCircle2 size={16} /> Aucune carte requise pour commencer</li>
            <li><CheckCircle2 size={16} /> Support 24/7</li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="lp-hero-visual"
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          <PhoneMockup />

          <motion.div
            className="lp-hero-float lp-hero-float-1"
            initial={{ opacity: 0, x: -20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="lp-hero-float-icon"><Zap size={18} /></div>
            <div>
              <strong>Livraison express</strong>
              <span>&lt; 30 min en zone urbaine</span>
            </div>
          </motion.div>

          <motion.div
            className="lp-hero-float lp-hero-float-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="lp-hero-float-icon is-teal"><MapPin size={18} /></div>
            <div>
              <strong>Suivi temps réel</strong>
              <span>GPS au mètre près</span>
            </div>
          </motion.div>

          <motion.div
            className="lp-hero-float lp-hero-float-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <div className="lp-hero-float-icon"><CheckCircle2 size={18} /></div>
            <div>
              <strong>Lancement à Lomé</strong>
              <span>Crédit de bienvenue offert</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
