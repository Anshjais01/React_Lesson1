import { profile } from '../data/profile';

export default function Footer() {
  const githubLink = profile.social.find((s) => s.name.toLowerCase() === 'github');
  const linkedinLink = profile.social.find((s) => s.name.toLowerCase() === 'linkedin');

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-name">{profile.name.toUpperCase()}</div>
          <div className="footer-program">{profile.program.toUpperCase()}</div>
          <div className="footer-copyright">&copy; 2026</div>
        </div>

        <div className="footer-links">
          {githubLink && (
            <a
              href={githubLink.url}
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
          )}
          {linkedinLink && (
            <a
              href={linkedinLink.url}
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="footer-link"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
