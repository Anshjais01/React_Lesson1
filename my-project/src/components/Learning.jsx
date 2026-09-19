import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { currentlyLearning } from '../data/profile';

export default function Learning() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="learning">
      <div className="scroll-reveal" ref={sectionRef}>
        <div className="section-label" style={{ marginBottom: 'var(--space-md)' }}>
          Currently Exploring
        </div>

        <div className="learning-header">
          <h2 className="learning-title">Currently</h2>
          <span className="learning-arrow" aria-hidden="true">→</span>
        </div>
      </div>

      <div className="learning-list">
        {currentlyLearning.map((item, index) => (
          <motion.span
            key={item}
            className="learning-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
