'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark';

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<Theme>('light');
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const current = (document.documentElement.getAttribute('data-theme') as Theme) || 'light';
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore */
    }
  };

  const label = theme === 'light' ? 'Activer le thème sombre' : 'Activer le thème clair';

  return (
    <button
      type="button"
      className="lp-icon-btn"
      onClick={toggle}
      aria-label={label}
      title={label}
      suppressHydrationWarning
    >
      {mounted && theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
