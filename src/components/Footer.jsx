import React from 'react';
import { 
  Heart, 
  ArrowUp, 
  Code, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { Linkedin, Github } from './SocialIcons';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="container">
        
        {/* Top Footer Section */}
        <div className="footer-top-row">
          
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="brand-dot"></span>
              <h3>{personalInfo.fullName}</h3>
            </div>
            <p className="footer-bio">
              Computer Engineering Undergraduate exploring technology, strengthening core software engineering foundations, and building practical solutions.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Core Skills</a></li>
              <li><a href="#projects">Proposed Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#certifications">Certificates</a></li>
              <li><a href="#contact">Get in Touch</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="footer-connect-col">
            <h4 className="footer-heading">Connect With Me</h4>
            <div className="footer-social-row">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>

            <p className="footer-status-pill">
              <span className="pulse-green"></span>
              Open to Internship Opportunities
            </p>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Credit */}
        <div className="footer-bottom-bar">
          <div className="footer-credit">
            <span>Designed & Built by <strong>{personalInfo.fullName}</strong></span>
          </div>

          <div className="footer-copyright">
            <span>&copy; {currentYear} All Rights Reserved • Built with React & Vite</span>
          </div>

          <button 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            title="Back to Top"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>

      <style>{`
        .footer-wrapper {
          position: relative;
          background: #05060b;
          border-top: 1px solid rgba(139, 92, 246, 0.2);
          padding-top: 4.5rem;
          padding-bottom: 2.5rem;
          margin-top: 4rem;
          overflow: hidden;
        }

        .footer-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #38bdf8, #8b5cf6, transparent);
        }

        .footer-top-row {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 3.5rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 1rem;
        }

        .brand-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #38bdf8, #a855f7);
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.6);
        }

        .footer-logo h3 {
          font-size: 1.25rem;
          color: #ffffff;
        }

        .footer-bio {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.65;
          max-width: 380px;
        }

        .footer-heading {
          font-size: 0.95rem;
          color: #ffffff;
          font-family: var(--font-heading);
          margin-bottom: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-links-list a {
          color: var(--text-secondary);
          font-size: 0.885rem;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .footer-links-list a:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .footer-social-row {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .footer-social-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .footer-social-btn:hover {
          color: #ffffff;
          background: rgba(139, 92, 246, 0.2);
          border-color: rgba(168, 85, 247, 0.4);
          transform: translateY(-2px);
        }

        .footer-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-full);
          font-size: 0.775rem;
          color: #34d399;
          font-family: var(--font-mono);
        }

        .pulse-green {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
        }

        .footer-bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        .footer-credit {
          font-size: 0.9rem;
          color: #cbd5e1;
        }

        .footer-credit strong {
          color: #ffffff;
        }

        .footer-copyright {
          font-size: 0.825rem;
          color: var(--text-muted);
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          font-size: 0.825rem;
          transition: all 0.2s ease;
        }

        .back-to-top-btn:hover {
          color: #ffffff;
          background: rgba(139, 92, 246, 0.2);
          border-color: rgba(168, 85, 247, 0.4);
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .footer-top-row {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
