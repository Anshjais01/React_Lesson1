import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { education } from '../data/education';

export default function Education() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="education">
      <div className="section-label scroll-reveal" ref={sectionRef}>
        Education
      </div>

      {education.map((edu) => (
        <motion.div
          key={edu.id}
          className="education-item"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="education-period">{edu.period}</div>
          <div className="education-details">
            <h3 className="education-institution">{edu.institution}</h3>
            <p className="education-location">{edu.location}</p>
            <p className="education-degree">{edu.degree}</p>
            <p className="education-field">{edu.field}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
