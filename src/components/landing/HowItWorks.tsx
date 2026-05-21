'use client';

import { motion } from 'framer-motion';
import {
  Download,
  ShoppingCart,
  MapPin,
  Package,
  User,
  Bike,
  Shield,
} from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from './motion';

const CLIENT_STEPS = [
  { title: "Téléchargez l'application", description: 'Disponible sur iOS et Android. Compte créé en moins d’une minute.', icon: Download },
  { title: 'Créez votre mission', description: "Décrivez votre besoin et indiquez l'adresse de livraison.", icon: ShoppingCart },
  { title: 'Suivez en direct', description: 'Position du livreur sur la carte, en temps réel.', icon: MapPin },
  { title: 'Recevez votre colis', description: 'Livraison rapide, sécurisée, sans surprise.', icon: Package },
];

const DRIVER_STEPS = [
  { title: 'Rejoignez le réseau', description: 'Inscrivez-vous, complétez votre profil et validez votre compte.', icon: User },
  { title: 'Choisissez vos missions', description: 'Acceptez les courses qui vous conviennent, près de chez vous.', icon: Bike },
  { title: 'Livrez en sécurité', description: 'Suivez l’itinéraire optimisé et livrez le client.', icon: MapPin },
  { title: 'Encaissez vos gains', description: 'Vos paiements sont crédités après chaque mission.', icon: Shield },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="lp-section lp-section-alt">
      <div className="lp-container">
        <motion.div
          className="lp-section-head"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="lp-eyebrow">Comment ça marche</span>
          <h2 className="lp-section-title">
            Deux parcours, <span className="lp-text-gradient">une seule plateforme</span>.
          </h2>
          <p className="lp-section-subtitle">
            Que vous envoyiez ou que vous livriez, Cliver simplifie chaque étape.
          </p>
        </motion.div>

        <motion.div
          className="lp-flows"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div className="lp-flow is-client" variants={fadeUp}>
            <header>
              <span className="lp-flow-tag">Côté client</span>
              <h3>Recevez en toute simplicité</h3>
            </header>
            <ol className="lp-steps">
              {CLIENT_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <li key={step.title}>
                    <div className="lp-step-num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="lp-step-icon"><Icon size={18} /></div>
                    <div className="lp-step-body">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </motion.div>

          <motion.div className="lp-flow is-driver" variants={fadeUp}>
            <header>
              <span className="lp-flow-tag">Côté livreur</span>
              <h3>Gagnez en flexibilité</h3>
            </header>
            <ol className="lp-steps">
              {DRIVER_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <li key={step.title}>
                    <div className="lp-step-num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="lp-step-icon"><Icon size={18} /></div>
                    <div className="lp-step-body">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
