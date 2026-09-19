import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { experience } from '../data/experience';

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="experience" ref={sectionRef}>
      <div className="section-label scroll-reveal">
        Experience
      </div>

      <div className="experience-list">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="experience-item"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.15,
            }}
          >
            <div className="experience-number">{exp.number}</div>
            <div className="experience-details">
              <h3 className="experience-company">{exp.company}</h3>
              <p className="experience-role">{exp.role}</p>
              <span className="experience-period">{exp.period}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
