import { useScrollReveal } from '../hooks/useScrollReveal';
import { profile } from '../data/profile';

export default function About() {
  const sectionRef = useScrollReveal();

  const aboutParts = [
    { text: 'As a passionate ', highlight: false },
    { text: 'Python developer', highlight: true },
    { text: ', I thrive on building innovative solutions and exploring the latest in technology. With a strong foundation in ', highlight: false },
    { text: 'Python', highlight: true },
    { text: ', I enjoy tackling complex problems, optimizing performance, and crafting ', highlight: false },
    { text: 'efficient, scalable code', highlight: true },
    { text: '. My dedication to ', highlight: false },
    { text: 'continuous learning', highlight: true },
    { text: ' fuels my passion for mentoring, where I share my knowledge and help others grow in their coding journey.', highlight: false },
  ];

  return (
    <section className="section" id="about" ref={sectionRef}>
      <div className="section-label scroll-reveal">
        About
      </div>

      <div className="about-grid">
        <div className="about-text scroll-reveal">
          <p>
            {aboutParts.map((part, i) =>
              part.highlight ? (
                <span key={i} className="highlight">{part.text}</span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </p>
        </div>

        <div className="about-meta scroll-reveal scroll-reveal-delay-2">
          <div className="about-meta-item">
            <div className="about-meta-label">Program</div>
            <div className="about-meta-value">{profile.program}</div>
          </div>

          <div className="about-meta-item">
            <div className="about-meta-label">Level</div>
            <div className="about-meta-value">{profile.level}</div>
          </div>

          <div className="about-meta-item">
            <div className="about-meta-label">Focus</div>
            <div className="about-meta-value">{profile.focus.join(' / ')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
