import { useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { profile } from '../data/profile';

export default function Hero() {
  const containerRef = useRef(null);

  // 3D Tilt Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-inner"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <motion.div className="hero-eyebrow" variants={itemVariants}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Terminal size={14} />
              {profile.title.toUpperCase()} / {profile.subtitle.toUpperCase()}
            </span>
          </motion.div>

          <motion.h1 className="hero-name" variants={itemVariants}>
            <span className="name-first">{profile.firstName.toUpperCase()}</span>
            <span className="name-last">{profile.lastName.toUpperCase()}</span>
          </motion.h1>

          <motion.p className="hero-tagline" variants={itemVariants}>
            &ldquo;Building things.<br />
            Solving problems.<br />
            Learning constantly.&rdquo;
          </motion.p>

          <motion.p className="hero-description" variants={itemVariants}>
            Python developer and BS in Data Science and Applications student,
            interested in building efficient software and solving complex problems.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a
              href="#experience"
              className="btn-primary"
              onClick={(e) => handleScrollTo(e, '#experience')}
            >
              View Experience
              <ArrowRight />
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              onClick={(e) => handleScrollTo(e, '#contact')}
            >
              Get in Touch
              <ArrowRight />
            </a>
          </motion.div>
        </div>

        {/* 3D Interactive Portrait Section */}
        <motion.div
          className="hero-image-container"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="hero-image-frame"
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="hero-image"
              loading="eager"
            />
            <div className="hero-image-caption">
              <span>IIT MADRAS &bull; BS DATA SCIENCE</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <a
        href="#about"
        className="hero-scroll-indicator"
        onClick={(e) => handleScrollTo(e, '#about')}
        aria-label="Scroll down to About section"
      >
        <span>Scroll Down</span>
        <div className="hero-scroll-line" />
      </a>
    </section>
  );
}
