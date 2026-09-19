import { useScrollReveal } from '../hooks/useScrollReveal';
import { capabilities } from '../data/profile';
import { ArrowUpRight } from 'lucide-react';

export default function Capabilities() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="capabilities" ref={sectionRef}>
      <div className="section-label scroll-reveal">
        What I Work With
      </div>

      <div className="capabilities-list">
        {capabilities.map((cap, index) => (
          <div
            key={cap.number}
            className={`capability-item scroll-reveal scroll-reveal-delay-${Math.min(index + 1, 4)}`}
          >
            <span className="capability-number">{cap.number}</span>
            <span className="capability-name">{cap.name}</span>
            <ArrowUpRight className="capability-arrow" />
          </div>
        ))}
      </div>
    </section>
  );
}
