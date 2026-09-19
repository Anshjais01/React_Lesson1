import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Search } from 'lucide-react';
import { badges } from '../data/badges';

export default function BadgeGallery({ isOpen, onClose }) {
  const modalRef = useRef(null);
  const [filterQuery, setFilterQuery] = useState('');

  const handleClose = useCallback(() => {
    setFilterQuery('');
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Focus modal
    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const filteredBadges = badges.filter((b) =>
    b.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    b.category.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="badge-modal-overlay"
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="All achievements gallery"
        >
          <motion.div
            className="badge-modal"
            ref={modalRef}
            tabIndex={-1}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="badge-modal-header">
              <div>
                <h2 className="badge-modal-title">Academic &amp; Assessment Badges</h2>
                <span className="badge-modal-count">
                  Showing {filteredBadges.length} of {badges.length} badges from IITM BS Program Archive
                </span>
              </div>
              <button
                className="badge-modal-close"
                onClick={handleClose}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Quick search input */}
            <div style={{ position: 'relative', marginBottom: 'var(--space-2xl)' }}>
              <Search
                size={16}
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--color-text-muted)',
                }}
              />
              <input
                type="text"
                placeholder="Filter badges by title or category..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  fontSize: 'var(--text-sm)',
                  fontFamily: 'var(--font-sans)',
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '2px',
                  color: 'var(--color-text)',
                  outline: 'none',
                }}
              />
            </div>

            <div className="badge-modal-grid">
              {filteredBadges.map((badge, index) => (
                <motion.div
                  key={badge.id}
                  className="badge-item"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(index * 0.02, 0.4),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="badge-image-container">
                    <img
                      src={badge.image}
                      alt={badge.title}
                      className="badge-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fb = e.target.parentElement.querySelector('.gallery-fallback');
                        if (fb) fb.style.display = 'flex';
                      }}
                    />
                    <div
                      className="gallery-fallback"
                      style={{
                        display: 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <Award size={32} color="var(--color-accent)" />
                    </div>
                  </div>
                  <div className="badge-title">{badge.title}</div>
                  <div className="badge-category">{badge.category}</div>
                </motion.div>
              ))}
            </div>

            {filteredBadges.length === 0 && (
              <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--color-text-secondary)' }}>
                No badges found matching &ldquo;{filterQuery}&rdquo;.
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
