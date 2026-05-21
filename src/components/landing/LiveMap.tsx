'use client';

import { motion } from 'framer-motion';
import { Bike, MapPin } from 'lucide-react';
// Bike is used inside the JSX overlay cards (not inside SVG)
import { fadeUp, viewportOnce } from './motion';

export function LiveMap() {
  return (
    <section className="lp-map-section" aria-label="Aperçu du suivi en temps réel">
      <div className="lp-container">
        <motion.div
          className="lp-section-head"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="lp-eyebrow is-teal">
            <span className="lp-eyebrow-dot" /> Live
          </span>
          <h2 className="lp-section-title">
            Suivez votre livreur <span className="lp-text-gradient">au mètre près</span>.
          </h2>
          <p className="lp-section-subtitle">
            Un suivi GPS continu, des notifications à chaque étape clé et un ETA précis. Plus jamais
            de questions sur où en est votre colis.
          </p>
        </motion.div>

        <motion.div
          className="lp-map-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
        >
          <svg className="lp-map-svg" viewBox="0 0 1200 460" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              </pattern>
              <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(45,212,191,0.18)" />
                <stop offset="100%" stopColor="rgba(45,212,191,0)" />
              </radialGradient>
              <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#ff7f30" />
              </linearGradient>
            </defs>

            <rect width="1200" height="460" fill="url(#mapGrid)" />

            {/* Pseudo streets */}
            <g stroke="rgba(255,255,255,0.05)" strokeWidth="22" fill="none" strokeLinecap="round">
              <path d="M -20 110 Q 300 130 600 90 T 1240 60" />
              <path d="M -20 230 Q 250 280 500 220 T 1240 250" />
              <path d="M -20 350 Q 320 320 640 360 T 1240 320" />
            </g>
            <g stroke="rgba(255,255,255,0.05)" strokeWidth="16" fill="none" strokeLinecap="round">
              <path d="M 200 -20 Q 230 200 180 460" />
              <path d="M 520 -20 Q 540 220 500 460" />
              <path d="M 860 -20 Q 880 230 840 460" />
              <path d="M 1080 -20 Q 1060 220 1100 460" />
            </g>

            {/* Glows */}
            <circle cx="220" cy="220" r="120" fill="url(#mapGlow)" />
            <circle cx="940" cy="290" r="130" fill="url(#mapGlow)" />

            {/* Route */}
            <path
              d="M 180 320 C 320 240, 420 240, 540 260 S 760 320, 880 240 S 1020 200, 940 290"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <motion.path
              d="M 180 320 C 320 240, 420 240, 540 260 S 760 320, 880 240 S 1020 200, 940 290"
              fill="none"
              stroke="url(#routeGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="10 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.4, ease: 'easeInOut' }}
              style={{ filter: 'drop-shadow(0 0 8px rgba(255,127,48,0.55))' }}
            />

            {/* Start pin */}
            <g>
              <circle cx="180" cy="320" r="14" fill="rgba(45,212,191,0.18)" />
              <circle cx="180" cy="320" r="8" fill="#2dd4bf" />
              <circle cx="180" cy="320" r="3" fill="#fff" />
            </g>

            {/* End pin */}
            <g>
              <circle cx="940" cy="290" r="16" fill="rgba(255,127,48,0.2)" />
              <circle cx="940" cy="290" r="9" fill="#ff7f30" />
              <circle cx="940" cy="290" r="3" fill="#fff" />
            </g>

            {/* Animated bike marker following the route via SMIL */}
            <g>
              <circle r="22" fill="rgba(255,127,48,0.18)" />
              <circle r="14" fill="#ff7f30" stroke="#0a0a0a" strokeWidth="2" />
              {/* Tiny bike-ish glyph: two wheels */}
              <circle cx="-4" cy="2" r="3" fill="none" stroke="#0a0a0a" strokeWidth="1.5" />
              <circle cx="4" cy="2" r="3" fill="none" stroke="#0a0a0a" strokeWidth="1.5" />
              <path d="M -4 2 L 0 -3 L 4 2 M 0 -3 L 1 -5" stroke="#0a0a0a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <animateMotion
                dur="9s"
                repeatCount="indefinite"
                rotate="auto"
                path="M 180 320 C 320 240, 420 240, 540 260 S 760 320, 880 240 S 1020 200, 940 290"
              />
            </g>
          </svg>

          <div className="lp-map-badge"><span>EN DIRECT</span></div>

          <div className="lp-map-overlay">
            <div className="lp-map-overlay-card">
              <div className="lp-hero-float-icon is-teal"><MapPin size={18} /></div>
              <div>
                <strong>Départ</strong>
                <span>Adidogome — 14h32</span>
              </div>
            </div>
            <div className="lp-map-overlay-card">
              <div className="lp-hero-float-icon"><Bike size={18} /></div>
              <div>
                <strong>En route</strong>
                <span>ETA · 14 min</span>
              </div>
            </div>
            <div className="lp-map-overlay-card">
              <div className="lp-hero-float-icon"><MapPin size={18} /></div>
              <div>
                <strong>Destination</strong>
                <span>Quartier Bè</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
