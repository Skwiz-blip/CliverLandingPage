'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeUp, viewportOnce } from './motion';

const FAQS = [
  {
    q: 'Comment puis-je payer ma livraison ?',
    a: 'Cliver accepte le mobile money (Flooz, T-Money), les cartes bancaires (Visa, Mastercard) ainsi que le portefeuille Cliver. Le paiement est sécurisé et chiffré de bout en bout.',
  },
  {
    q: 'Dans quels quartiers de Lomé Cliver est-il disponible ?',
    a: 'Nous couvrons aujourd’hui Lomé centre, Adidogome, Bè, Tokoin, Agoè, Doumassesse et plusieurs zones limitrophes. Nous étendons régulièrement notre couverture — vérifiez directement dans l’application.',
  },
  {
    q: 'Combien de temps prend une livraison ?',
    a: 'En moyenne 30 minutes en zone urbaine pour le tarif Standard, et moins de 30 minutes garanti avec l’offre Express. Le délai dépend de la distance et des conditions de circulation, mais s’affiche toujours avant validation.',
  },
  {
    q: 'Que faire si le livreur est en retard ?',
    a: 'Vous pouvez contacter le livreur directement depuis l’app (chat ou appel) ou notre support 24/7. En cas de retard imputable à Cliver sur une commande Express, nous appliquons une réduction automatique.',
  },
  {
    q: 'Comment devenir livreur partenaire Cliver ?',
    a: 'Téléchargez l’app, créez un compte « livreur », ajoutez vos documents (pièce d’identité, permis si applicable, attestation moto). Notre équipe valide votre dossier sous 48h et vous pouvez commencer à recevoir des missions.',
  },
  {
    q: 'Mes colis sont-ils assurés ?',
    a: 'Oui. Tous les envois sont assurés. La couverture varie selon le forfait : 10 000 FCFA en Standard, 50 000 FCFA en Express. Pour les entreprises, l’assurance peut être personnalisée.',
  },
  {
    q: 'Puis-je annuler une commande après l’avoir passée ?',
    a: 'Vous pouvez annuler sans frais tant que le livreur n’a pas pris en charge le colis. Au-delà, des frais peuvent s’appliquer pour compenser le déplacement déjà effectué.',
  },
  {
    q: 'Comment Cliver protège-t-il mes données ?',
    a: 'Nous appliquons un chiffrement TLS sur toutes les communications, ne stockons jamais vos données bancaires en clair et respectons les principes du RGPD. Pour plus de détails, consultez notre politique de confidentialité.',
  },
];

export function FAQ() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section id="faq" className="lp-section lp-section-alt">
      <div className="lp-container">
        <motion.div
          className="lp-section-head"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="lp-eyebrow">FAQ</span>
          <h2 className="lp-section-title">
            Questions <span className="lp-text-gradient">fréquentes</span>.
          </h2>
          <p className="lp-section-subtitle">
            Vous ne trouvez pas votre réponse ? Notre support est joignable 24/7.
          </p>
        </motion.div>

        <motion.div
          className="lp-faq"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            const id = `faq-${i}`;
            return (
              <div key={item.q} className={`lp-faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="lp-faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`${id}-a`}
                  id={`${id}-q`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={20} className="lp-faq-chev" />
                </button>
                <div
                  id={`${id}-a`}
                  role="region"
                  aria-labelledby={`${id}-q`}
                  className="lp-faq-a"
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
