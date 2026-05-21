'use client';

import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';
import { fadeUp, viewportOnce } from './motion';

export function CTADownload() {
  return (
    <section id="download" className="lp-cta">
      <div className="lp-container">
        <motion.div
          className="lp-cta-inner"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="lp-cta-copy">
            <h2>Prêt à découvrir Cliver&nbsp;?</h2>
            <p>
              Téléchargez l’application et bénéficiez d’un crédit de bienvenue de 1 000 FCFA
              sur votre première livraison.
            </p>
          </div>
          <div className="lp-cta-buttons">
            <a href="#" className="lp-store-btn" aria-label="Télécharger sur l’App Store">
              <Apple size={26} />
              <span>
                <small>Télécharger sur</small>
                <strong>App Store</strong>
              </span>
            </a>
            <a href="#" className="lp-store-btn" aria-label="Disponible sur Google Play">
              <Play size={26} />
              <span>
                <small>Disponible sur</small>
                <strong>Google Play</strong>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
