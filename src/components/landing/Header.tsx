'use client';

import React from 'react';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const NAV_LINKS = [
  { href: '#hero', label: 'Accueil' },
  { href: '#features', label: 'Fonctionnalités' },
  { href: '#how-it-works', label: 'Comment ça marche' },
  { href: '#pricing', label: 'Tarifs' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
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
    <header className={`lp-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="lp-header-inner">
        <a href="#hero" className="lp-brand" aria-label="Cliver — Accueil">
          <Image src="/images/cliver-logo.png" alt="" width={36} height={36} priority className="lp-brand-mark" />
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

        <div className="lp-header-tools">
          <ThemeToggle />
          <a href="#download" className="lp-btn lp-btn-primary lp-btn-sm lp-header-cta">
            Télécharger
            <ArrowRight size={16} />
          </a>
          <button
            type="button"
            className="lp-icon-btn lp-menu-toggle"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div className={`lp-mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#download" className="lp-btn lp-btn-primary lp-btn-block" onClick={closeMenu}>
              Télécharger l’app
              <ArrowRight size={16} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
