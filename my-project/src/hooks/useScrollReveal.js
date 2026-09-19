import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      el.classList.add('revealed');
      el.querySelectorAll('.scroll-reveal').forEach((c) => c.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -40px 0px',
      }
    );

    if (el.classList.contains('scroll-reveal')) {
      observer.observe(el);
    }
    el.querySelectorAll('.scroll-reveal').forEach((c) => observer.observe(c));

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}
