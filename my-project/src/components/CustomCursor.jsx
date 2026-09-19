import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    const isTouch = window.matchMedia('(hover: none)').matches ||
                    window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('capability-item') ||
        target.classList.contains('badge-item') ||
        target.classList.contains('link-item') ||
        target.classList.contains('learning-item')
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    // Animation loop
    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${posRef.current.x - 4}px, ${posRef.current.y - 4}px)`;
      }

      // Smooth ring follow
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.15;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.15;

      if (ringRef.current) {
        const ringSize = hovering ? 56 : 36;
        ringRef.current.style.transform = `translate(${ringPosRef.current.x - ringSize / 2}px, ${ringPosRef.current.y - ringSize / 2}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [visible, hovering]);

  return (
    <>
      <div
        ref={dotRef}
        className={`custom-cursor${visible ? ' visible' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`custom-cursor-ring${visible ? ' visible' : ''}${hovering ? ' hovering' : ''}`}
        aria-hidden="true"
      />
    </>
  );
}
