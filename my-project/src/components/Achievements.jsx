import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { badges, INITIAL_BADGE_COUNT } from '../data/badges';
import { Award, Sparkles } from 'lucide-react';
import BadgeGallery from './BadgeGallery';

export default function Achievements() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const sectionRef = useScrollReveal();
  const visibleBadges = badges.slice(0, INITIAL_BADGE_COUNT);
  const remainingCount = badges.length - INITIAL_BADGE_COUNT;

  return (
    <section className="section" id="achievements">
      <div className="scroll-reveal" ref={sectionRef}>
        <div className="achievements-header">
          <div>
            <div className="section-label" style={{ marginBottom: 'var(--space-sm)' }}>
              Achievements
            </div>
            <p className="achievements-subtitle">
              Academic milestones, performance distinctions, and completed assessments.
            </p>
          </div>
          <button
            className="view-all-btn"
            onClick={() => setGalleryOpen(true)}
            aria-label={`View all ${badges.length} badges archive`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <Sparkles size={14} />
            View Archive ({badges.length})
          </button>
        </div>
      </div>

      <div className="badges-grid">
        {visibleBadges.map((badge, index) => (
          <motion.div
            key={badge.id}
            className="badge-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={() => setGalleryOpen(true)}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className="badge-image-container">
              <img
                src={badge.image}
                alt={badge.title}
                className="badge-image"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.parentElement.querySelector('.badge-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="badge-fallback" style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                <Award size={32} color="var(--color-accent)" />
              </div>
            </div>
            <div className="badge-title">{badge.title}</div>
            <div className="badge-category">{badge.category}</div>
          </motion.div>
        ))}
      </div>

      {remainingCount > 0 && (
        <div className="badges-view-all">
          <button
            className="view-all-btn"
            onClick={() => setGalleryOpen(true)}
            aria-label={`View all ${badges.length} badges`}
          >
            +{remainingCount} More Badges — View All
          </button>
        </div>
      )}

      <BadgeGallery isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} />
    </section>
  );
}
