'use client';

import React from 'react';
import Image from 'next/image';
import {
  Menu,
  X,
  Package,
  Clock,
  Shield,
  Phone,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Download,
  MailOpen,
  Send,
  Apple,
  Play,
  ShoppingCart,
  User,
  Bike,
  CheckCircle2,
  Star,
  Zap,
  Headphones,
  CreditCard,
  Bell,
} from 'lucide-react';

const NAV_LINKS = [
  { href: '#hero', label: 'Accueil' },
  { href: '#features', label: 'Fonctionnalités' },
  { href: '#how-it-works', label: 'Comment ça marche' },
  { href: '#testimonials', label: 'Témoignages' },
  { href: '#contact', label: 'Contact' },
];

const FEATURES = [
  {
    title: 'Livraison express',
    description: 'Vos colis livrés en moins de 30 minutes dans la plupart des zones urbaines.',
    icon: Zap,
  },
  {
    title: 'Suivi en temps réel',
    description: 'Visualisez la position de votre livreur sur la carte à chaque instant.',
    icon: MapPin,
  },
  {
    title: 'Service 24/7',
    description: 'Disponible jour et nuit, week-ends et jours fériés inclus.',
    icon: Clock,
  },
  {
    title: 'Paiement sécurisé',
    description: 'Carte, mobile money ou portefeuille Cliver — chiffrement de bout en bout.',
    icon: CreditCard,
  },
  {
    title: 'Notifications instantanées',
    description: 'Soyez alerté à chaque étape clé de votre mission, sans rafraîchir.',
    icon: Bell,
  },
  {
    title: 'Support dédié',
    description: 'Une équipe humaine, réactive et disponible pour vous accompagner.',
    icon: Headphones,
  },
];

const CLIENT_STEPS = [
  {
    title: "Téléchargez l'application",
    description: 'Disponible sur iOS et Android. Compte créé en moins d’une minute.',
    icon: Download,
  },
  {
    title: 'Créez votre mission',
    description: "Décrivez votre besoin et indiquez l'adresse de livraison.",
    icon: ShoppingCart,
  },
  {
    title: 'Suivez en direct',
    description: 'Position du livreur sur la carte, en temps réel.',
    icon: MapPin,
  },
  {
    title: 'Recevez votre colis',
    description: 'Livraison rapide, sécurisée, sans surprise.',
    icon: Package,
  },
];

const DRIVER_STEPS = [
  {
    title: 'Rejoignez le réseau',
    description: 'Inscrivez-vous, complétez votre profil et validez votre compte.',
    icon: User,
  },
  {
    title: 'Choisissez vos missions',
    description: 'Acceptez les courses qui vous conviennent, près de chez vous.',
    icon: Bike,
  },
  {
    title: 'Livrez en sécurité',
    description: 'Suivez l’itinéraire optimisé et livrez le client.',
    icon: MapPin,
  },
  {
    title: 'Encaissez vos gains',
    description: 'Vos paiements sont crédités après chaque mission.',
    icon: Shield,
  },
];

const STATS = [
  { value: '30 min', label: 'Délai moyen de livraison' },
  { value: '24/7', label: 'Service ininterrompu' },
  { value: '+10k', label: 'Missions accomplies' },
  { value: '4.9/5', label: 'Note moyenne client' },
];

const TESTIMONIALS = [
  {
    name: 'Awa Koffi',
    role: 'Cliente, Lomé',
    quote:
      'Une fluidité impressionnante. Mon colis a été livré en 22 minutes et le suivi sur la carte est précis au mètre près.',
  },
  {
    name: 'Yao Mensah',
    role: 'Livreur partenaire',
    quote:
      'L’application est claire, les missions arrivent régulièrement et les paiements sont fiables. Cliver m’a permis de vivre de la livraison.',
  },
  {
    name: 'Sandra Adjo',
    role: 'Cliente entreprise',
    quote:
      'Nous utilisons Cliver pour tous nos envois urgents. Service constant, équipe réactive, indispensable au quotidien.',
  },
];

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="lp-root">
      <a href="#hero" className="lp-skip-link">Aller au contenu</a>

      <header className={`lp-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="lp-header-inner">
          <a href="#hero" className="lp-brand" aria-label="Cliver — Accueil">
            <Image
              src="/images/cliver-logo.png"
              alt=""
              width={36}
              height={36}
              priority
              className="lp-brand-mark"
            />
            <span className="lp-brand-name">Cliver</span>
          </a>

          <nav className="lp-nav" aria-label="Navigation principale">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lp-header-cta">
            <a href="#download" className="lp-btn lp-btn-primary lp-btn-sm">
              Télécharger
              <ArrowRight size={16} />
            </a>
          </div>

          <button
            type="button"
            className="lp-menu-toggle"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div className={`lp-mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#download"
                className="lp-btn lp-btn-primary lp-btn-block"
                onClick={closeMenu}
              >
                Télécharger l’app
                <ArrowRight size={16} />
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section id="hero" className="lp-hero">
          <div className="lp-hero-glow" aria-hidden="true" />
          <div className="lp-container lp-hero-grid">
            <div className="lp-hero-copy">
              <span className="lp-eyebrow">
                <span className="lp-eyebrow-dot" /> Nouveau · Disponible à Lomé
              </span>
              <h1 className="lp-hero-title">
                Une livraison <span className="lp-text-gradient">rapide, fiable</span> et sans
                friction.
              </h1>
              <p className="lp-hero-subtitle">
                Cliver connecte clients et livreurs en quelques secondes. Commandez en
                quelques clics, suivez en temps réel, et recevez vos colis en un temps record.
              </p>

              <div className="lp-hero-actions">
                <a href="#download" className="lp-btn lp-btn-primary lp-btn-lg">
                  <Download size={18} />
                  Télécharger l’application
                </a>
                <a href="#how-it-works" className="lp-btn lp-btn-ghost lp-btn-lg">
                  Découvrir
                  <ArrowRight size={18} />
                </a>
              </div>

              <ul className="lp-hero-bullets">
                <li>
                  <CheckCircle2 size={16} /> Inscription en moins d’1 minute
                </li>
                <li>
                  <CheckCircle2 size={16} /> Aucune carte requise pour commencer
                </li>
                <li>
                  <CheckCircle2 size={16} /> Support 24/7
                </li>
              </ul>
            </div>

            <div className="lp-hero-visual" aria-hidden="true">
              <div className="lp-hero-card lp-hero-card-1">
                <div className="lp-hero-card-head">
                  <Package size={18} />
                  <span>Mission en cours</span>
                </div>
                <div className="lp-hero-card-body">
                  <strong>Colis #CL-2841</strong>
                  <span>Lomé → Adidogome · 14 min</span>
                </div>
                <div className="lp-hero-card-progress">
                  <span style={{ width: '72%' }} />
                </div>
              </div>

              <div className="lp-hero-card lp-hero-card-2">
                <Star size={16} className="lp-star" />
                <strong>4.9 / 5</strong>
                <span>Note moyenne</span>
              </div>

              <div className="lp-hero-card lp-hero-card-3">
                <div className="lp-hero-avatar" />
                <div>
                  <strong>Yao M.</strong>
                  <span>Livreur partenaire</span>
                </div>
                <CheckCircle2 size={18} className="lp-check" />
              </div>

              <div className="lp-hero-logo-wrap">
                <Image
                  src="/images/cliver-logo.png"
                  alt=""
                  width={260}
                  height={260}
                  className="lp-hero-logo"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="lp-stats">
            <div className="lp-container lp-stats-grid">
              {STATS.map((s) => (
                <div key={s.label} className="lp-stat">
                  <div className="lp-stat-value">{s.value}</div>
                  <div className="lp-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="lp-section">
          <div className="lp-container">
            <div className="lp-section-head">
              <span className="lp-eyebrow">Fonctionnalités</span>
              <h2 className="lp-section-title">
                Tout ce qu’il faut pour livrer <span className="lp-text-gradient">sereinement</span>.
              </h2>
              <p className="lp-section-subtitle">
                Une expérience pensée pour aller vite, sans sacrifier la fiabilité.
              </p>
            </div>

            <div className="lp-features-grid">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="lp-feature-card">
                    <div className="lp-feature-icon">
                      <Icon size={22} />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="lp-section lp-section-alt">
          <div className="lp-container">
            <div className="lp-section-head">
              <span className="lp-eyebrow">Comment ça marche</span>
              <h2 className="lp-section-title">
                Deux parcours, <span className="lp-text-gradient">une seule plateforme</span>.
              </h2>
              <p className="lp-section-subtitle">
                Que vous envoyiez ou que vous livriez, Cliver simplifie chaque étape.
              </p>
            </div>

            <div className="lp-flows">
              <div className="lp-flow">
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
                        <div className="lp-step-icon">
                          <Icon size={18} />
                        </div>
                        <div className="lp-step-body">
                          <h4>{step.title}</h4>
                          <p>{step.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="lp-flow">
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
                        <div className="lp-step-icon">
                          <Icon size={18} />
                        </div>
                        <div className="lp-step-body">
                          <h4>{step.title}</h4>
                          <p>{step.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="lp-section">
          <div className="lp-container">
            <div className="lp-section-head">
              <span className="lp-eyebrow">Témoignages</span>
              <h2 className="lp-section-title">
                Ils utilisent Cliver <span className="lp-text-gradient">au quotidien</span>.
              </h2>
            </div>

            <div className="lp-testimonials-grid">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="lp-testimonial">
                  <div className="lp-testimonial-stars" aria-label="5 étoiles">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} />
                    ))}
                  </div>
                  <blockquote>
                    <p>“{t.quote}”</p>
                  </blockquote>
                  <figcaption>
                    <div className="lp-testimonial-avatar" aria-hidden="true">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="lp-cta">
          <div className="lp-container lp-cta-inner">
            <div className="lp-cta-copy">
              <h2>Prêt à découvrir Cliver&nbsp;?</h2>
              <p>
                Téléchargez l’application et bénéficiez d’un crédit de bienvenue sur votre
                première livraison.
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
          </div>
        </section>
      </main>

      <footer id="contact" className="lp-footer">
        <div className="lp-container">
          <div className="lp-footer-grid">
            <div className="lp-footer-brand">
              <div className="lp-brand">
                <Image
                  src="/images/cliver-logo.png"
                  alt=""
                  width={40}
                  height={40}
                  className="lp-brand-mark"
                />
                <span className="lp-brand-name">Cliver</span>
              </div>
              <p>
                La solution de livraison la plus rapide et fiable de votre région.
                Conçue pour les particuliers et les entreprises.
              </p>
              <div className="lp-socials">
                {[
                  { name: 'facebook', Icon: Facebook },
                  { name: 'twitter', Icon: Twitter },
                  { name: 'instagram', Icon: Instagram },
                  { name: 'linkedin', Icon: Linkedin },
                ].map(({ name, Icon }) => (
                  <a
                    key={name}
                    href={`https://${name}.com/cliver`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lp-footer-col">
              <h4>Navigation</h4>
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lp-footer-col">
              <h4>Contact</h4>
              <address>
                <p>
                  <MapPin size={16} />
                  <span>
                    Maison des Jeunes
                    <br />
                    Adidogome, Lomé — Togo
                  </span>
                </p>
                <p>
                  <Phone size={16} />
                  <a href="tel:+22879461931">+228 79 46 19 31</a>
                </p>
                <p>
                  <Mail size={16} />
                  <a href="mailto:contact@cliver.app">contact@cliver.app</a>
                </p>
              </address>
            </div>

            <div className="lp-footer-col">
              <h4>
                <MailOpen size={16} />
                <span>Newsletter</span>
              </h4>
              <p className="lp-footer-newsletter-intro">
                Recevez nos actualités et offres spéciales.
              </p>
              <form
                className="lp-newsletter"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Inscription à la newsletter"
              >
                <div className="lp-newsletter-field">
                  <Mail size={16} />
                  <input
                    type="email"
                    placeholder="Votre email"
                    aria-label="Votre adresse email"
                    required
                  />
                </div>
                <button type="submit" className="lp-btn lp-btn-primary">
                  <Send size={16} />
                  <span>S’abonner</span>
                </button>
              </form>
              <p className="lp-footer-fineprint">
                En vous abonnant, vous acceptez notre politique de confidentialité.
              </p>
            </div>
          </div>

          <div className="lp-footer-bottom">
            <p>© {new Date().getFullYear()} Cliver. Tous droits réservés.</p>
            <ul>
              <li>
                <a href="/conditions-utilisation">Conditions d’utilisation</a>
              </li>
              <li>
                <a href="/politique-confidentialite">Politique de confidentialité</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
