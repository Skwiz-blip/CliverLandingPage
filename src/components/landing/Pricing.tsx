'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from './motion';

const PLANS = [
  {
    name: 'Standard',
    price: '1 500',
    unit: 'FCFA',
    desc: 'Pour vos courses du quotidien dans Lomé.',
    features: [
      'Livraison < 60 min',
      'Suivi temps réel',
      'Paiement mobile money',
      'Assurance jusqu’à 10 000 FCFA',
    ],
    cta: 'Commander',
    popular: false,
  },
  {
    name: 'Express',
    price: '2 500',
    unit: 'FCFA',
    desc: 'Quand chaque minute compte. Le livreur file directement.',
    features: [
      'Livraison < 30 min garantie',
      'Priorité absolue sur la mission',
      'Suivi temps réel + notifications',
      'Assurance jusqu’à 50 000 FCFA',
      'Support prioritaire',
    ],
    cta: 'Commander Express',
    popular: true,
  },
  {
    name: 'Entreprise',
    price: 'Sur devis',
    unit: '',
    desc: 'Volumes réguliers, livraisons multi-points, facturation mensuelle.',
    features: [
      'Tarifs dégressifs au volume',
      'Compte multi-utilisateurs',
      'Facturation mensuelle',
      'Dashboard de suivi équipe',
      'Account manager dédié',
    ],
    cta: 'Nous contacter',
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="lp-section">
      <div className="lp-container">
        <motion.div
          className="lp-section-head"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="lp-eyebrow">Tarifs</span>
          <h2 className="lp-section-title">
            Des prix <span className="lp-text-gradient">transparents</span>, dès la commande.
          </h2>
          <p className="lp-section-subtitle">
            Pas de frais cachés. Le tarif s’affiche avant validation, vous savez exactement ce que vous payez.
          </p>
        </motion.div>

        <motion.div
          className="lp-pricing-grid"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
        >
          {PLANS.map((plan) => (
            <motion.article
              key={plan.name}
              className={`lp-pricing-card ${plan.popular ? 'is-popular' : ''}`}
              variants={fadeUp}
            >
              {plan.popular && <span className="lp-pricing-badge">Le plus choisi</span>}
              <div className="lp-pricing-name">{plan.name}</div>
              <div className="lp-pricing-price">
                {plan.price} {plan.unit && <small>{plan.unit} / course</small>}
              </div>
              <p className="lp-pricing-desc">{plan.desc}</p>
              <ul className="lp-pricing-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <CheckCircle2 size={16} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="lp-pricing-cta">
                <a
                  href={plan.name === 'Entreprise' ? '#contact' : '#download'}
                  className={`lp-btn lp-btn-block ${plan.popular ? 'lp-btn-primary' : 'lp-btn-ghost'}`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
