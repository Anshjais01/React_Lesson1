import { useScrollReveal } from '../hooks/useScrollReveal';
import { profile } from '../data/profile';
import { ArrowUpRight } from 'lucide-react';

export default function Links() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="links" ref={sectionRef}>
      <div className="section-label scroll-reveal">
        Find Me Online
      </div>

      <div className="links-list">
        {profile.social.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            className={`link-item scroll-reveal scroll-reveal-delay-${Math.min(index + 1, 4)}`}
            target={link.url !== '#' ? '_blank' : undefined}
            rel={link.url !== '#' ? 'noopener noreferrer' : undefined}
            onClick={(e) => {
              if (link.url === '#') {
                e.preventDefault();
              }
            }}
            aria-label={`Visit ${link.name}${link.placeholder ? ' (placeholder URL - replace with real link)' : ''}`}
          >
            <div>
              <span className="link-name">{link.name}</span>
              {link.placeholder && (
                <span className="link-placeholder"> — Replace URL</span>
              )}
            </div>
            <ArrowUpRight className="link-arrow" />
          </a>
        ))}
      </div>
    </section>
  );
}
