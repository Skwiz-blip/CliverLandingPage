'use client';

import { Download } from 'lucide-react';

export function StickyCTA() {
  return (
    <div className="lp-sticky-cta" role="region" aria-label="Téléchargement rapide">
      <div className="lp-sticky-cta-text">
        <strong>Téléchargez Cliver</strong>
        <span>1 000 FCFA offerts sur la 1re course</span>
      </div>
      <a href="#download" className="lp-btn lp-btn-primary lp-btn-sm">
        <Download size={16} />
        Obtenir l’app
      </a>
    </div>
  );
}
