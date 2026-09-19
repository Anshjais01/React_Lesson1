import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { profile } from '../data/profile';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = profile.email;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <motion.h2
          className="contact-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Let&rsquo;s Build<br />
          Something<br />
          <span className="accent">Useful.</span>
        </motion.h2>

        <motion.div
          className="contact-email-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <a
            href={`mailto:${profile.email}`}
            className="contact-email"
            aria-label={`Send email to ${profile.email}`}
          >
            {profile.email}
          </a>

          <button
            className={`copy-email-btn${copied ? ' copied' : ''}`}
            onClick={handleCopy}
            aria-label={copied ? 'Email copied' : 'Copy email address'}
          >
            {copied ? (
              <>
                <Check size={14} />
                Copied
              </>
            ) : (
              <>
                <Copy size={14} />
                Copy Email
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
