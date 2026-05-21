import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = 'https://cliver.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Cliver — Livraison rapide à Lomé',
  description:
    "Cliver connecte clients et livreurs partenaires à Lomé. Livraison en moins de 30 minutes, suivi en temps réel, paiement sécurisé.",
  keywords: [
    'livraison Lomé',
    'livraison Togo',
    'coursier Lomé',
    'application livraison',
    'Cliver',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    title: 'Cliver — Livraison rapide à Lomé',
    description:
      "Commandez, suivez en temps réel, recevez. La nouvelle façon de livrer à Lomé.",
    siteName: 'Cliver',
    images: [{ url: '/images/cliver-logo.png', width: 1200, height: 630, alt: 'Cliver' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cliver — Livraison rapide à Lomé',
    description: 'Livraison en moins de 30 minutes, suivi en temps réel.',
    images: ['/images/cliver-logo.png'],
  },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeInitScript = `(() => {
    try {
      const saved = localStorage.getItem('theme');
      const theme = saved === 'dark' || saved === 'light' ? saved : 'light';
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  })();`;

  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable} font-sans`} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
