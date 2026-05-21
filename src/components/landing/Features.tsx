'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Bell,
  Headphones,
} from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from './motion';

export function Features() {
  return (
    <section id="features" className="lp-section">
      <div className="lp-container">
        <motion.div
          className="lp-section-head"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="lp-eyebrow">Fonctionnalités</span>
          <h2 className="lp-section-title">
            Tout ce qu’il faut pour livrer <span className="lp-text-gradient">sereinement</span>.
          </h2>
          <p className="lp-section-subtitle">
            Une expérience pensée pour aller vite, sans sacrifier la fiabilité.
          </p>
        </motion.div>

        <motion.div
          className="lp-bento"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
        >
          {/* Feature card: live tracking with mini map */}
          <motion.article className="lp-bento-card is-feature" variants={fadeUp}>
            <div className="lp-bento-icon is-teal"><MapPin size={22} /></div>
            <h3>Suivi en temps réel</h3>
            <p>
              Position GPS du livreur sur la carte, à chaque seconde. Visualisez l’itinéraire,
              l’ETA et les étapes — sans rafraîchir l’écran.
            </p>
            <div className="lp-bento-minimap" aria-hidden="true">
              <svg viewBox="0 0 320 150" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="miniRoute" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2dd4bf" />
                    <stop offset="100%" stopColor="#ff7f30" />
                  </linearGradient>
                </defs>
                <path d="M 10 110 C 80 60, 140 90, 200 70 S 290 30, 310 40"
                      fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" strokeLinecap="round" />
                <motion.path d="M 10 110 C 80 60, 140 90, 200 70 S 290 30, 310 40"
                      fill="none" stroke="url(#miniRoute)" strokeWidth="3" strokeLinecap="round"
                      strokeDasharray="6 5"
                      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2 }} />
                <circle cx="10" cy="110" r="6" fill="#2dd4bf" />
                <circle cx="310" cy="40" r="6" fill="#ff7f30" />
              </svg>
            </div>
          </motion.article>

          <motion.article className="lp-bento-card is-wide" variants={fadeUp}>
            <div className="lp-bento-icon"><Clock size={22} /></div>
            <h3>Service 24/7</h3>
            <p>Disponible jour et nuit, week-ends et jours fériés inclus. La demande ne dort pas, nous non plus.</p>
          </motion.article>

          <motion.article className="lp-bento-card is-half" variants={fadeUp}>
            <div className="lp-bento-icon is-teal"><Bell size={22} /></div>
            <h3>Notifications instantanées</h3>
            <p>Alerte à chaque étape clé : prise en charge, départ, arrivée imminente.</p>
          </motion.article>

          <motion.article className="lp-bento-card is-half" variants={fadeUp}>
            <div className="lp-bento-icon"><Headphones size={22} /></div>
            <h3>Support dédié</h3>
            <p>Une équipe humaine, réactive et disponible pour vous accompagner à tout moment.</p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
