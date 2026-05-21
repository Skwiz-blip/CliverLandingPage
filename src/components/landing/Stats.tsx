'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, viewportOnce } from './motion';

type StatItem = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
};

const STATS: StatItem[] = [
  { value: 30, prefix: '< ', suffix: ' min', label: 'Délai de livraison ciblé' },
  { value: 24, suffix: '/7', label: 'Service ininterrompu' },
  { value: 100, suffix: '%', label: 'Tarif transparent avant validation' },
  { value: 1000, suffix: ' FCFA', label: 'Crédit offert sur votre 1re course' },
];

function CountUp({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setValue(to);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  const formatted = value
    .toFixed(decimals)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return <span ref={ref}>{formatted}</span>;
}

export function Stats() {
  return (
    <section className="lp-stats-section" aria-label="Quelques chiffres">
      <div className="lp-container">
        <motion.div
          className="lp-stats-grid"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          {STATS.map((s) => (
            <div key={s.label} className="lp-stat">
              <div className="lp-stat-value">
                {s.prefix}
                <CountUp to={s.value} decimals={s.decimals ?? 0} />
                {s.suffix}
              </div>
              <div className="lp-stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
