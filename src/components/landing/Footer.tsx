'use client';

import Image from 'next/image';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MailOpen,
  Mail,
  Phone,
  MapPin,
  Send,
} from 'lucide-react';
import { NAV_LINKS } from './Header';

export function Footer() {
  return (
    <footer id="contact" className="lp-footer">
      <div className="lp-container">
        <div className="lp-footer-grid">
          <div className="lp-footer-brand">
            <div className="lp-brand">
              <Image src="/images/cliver-logo.png" alt="" width={40} height={40} className="lp-brand-mark" />
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
                  Maison des Jeunes<br />
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
            <li><a href="/conditions-utilisation">Conditions d’utilisation</a></li>
            <li><a href="/politique-confidentialite">Politique de confidentialité</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
