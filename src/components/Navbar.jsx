import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  FileDown, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { Linkedin, Github } from './SocialIcons';
import { socialLinks } from '../data/portfolioData';

export default function Navbar({ onOpenResumeModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo / Brand */}
          <a href="#home" className="nav-brand" onClick={(e) => handleLinkClick(e, '#home')}>
            <div className="brand-avatar">
              <span>SJ</span>
              <div className="avatar-ring"></div>
            </div>
            <div className="brand-text">
              <span className="brand-name">Sakshi Jadhav</span>
              <span className="brand-tag">
                <span className="status-dot"></span> Comp. Engg
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <li key={item.label} className="nav-item">
                    <a
                      href={item.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                      {isActive && <span className="nav-indicator"></span>}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Icons & Resume */}
          <div className="nav-actions">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Sakshi Jadhav on LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Sakshi Jadhav on GitHub"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <button
              onClick={onOpenResumeModal}
              className="btn-resume"
              title="Download Resume"
            >
              <FileDown size={16} />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <div className="mobile-socials">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
                <ExternalLink size={14} className="ext-icon" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
              >
                <Github size={18} />
                <span>GitHub</span>
                <ExternalLink size={14} className="ext-icon" />
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="btn-primary w-full"
              style={{ width: '100%' }}
            >
              <FileDown size={18} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 1.1rem 0;
          transition: all 0.3s ease;
          background: rgba(7, 8, 15, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .navbar-header.scrolled {
          padding: 0.75rem 0;
          background: rgba(7, 9, 22, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(139, 92, 246, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
        }

        .brand-avatar {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #0284c7, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.05rem;
          color: #ffffff;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
        }

        .avatar-ring {
          position: absolute;
          inset: -2px;
          border-radius: 14px;
          background: linear-gradient(135deg, #38bdf8, transparent, #c084fc);
          z-index: -1;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .brand-tag {
          font-size: 0.75rem;
          color: var(--accent-blue);
          font-family: var(--font-mono);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: 1.6rem;
          align-items: center;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          position: relative;
          color: var(--text-secondary);
          font-size: 0.925rem;
          font-weight: 500;
          padding: 0.4rem 0.2rem;
          transition: color 0.2s ease;
          text-decoration: none;
        }

        .nav-link:hover, .nav-link.active {
          color: #ffffff;
        }

        .nav-indicator {
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--gradient-primary);
          border-radius: 2px;
          box-shadow: 0 0 8px rgba(168, 85, 247, 0.6);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .social-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          transition: all 0.25s ease;
        }

        .social-icon-btn:hover {
          color: #ffffff;
          background: rgba(139, 92, 246, 0.2);
          border-color: rgba(168, 85, 247, 0.4);
          transform: translateY(-2px);
        }

        .btn-resume {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1.1rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffffff;
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(168, 85, 247, 0.35);
          transition: all 0.25s ease;
        }

        .btn-resume:hover {
          background: rgba(139, 92, 246, 0.3);
          border-color: var(--accent-purple);
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.35);
          transform: translateY(-1px);
        }

        .mobile-toggle-btn {
          display: none;
          color: #ffffff;
          padding: 0.3rem;
        }

        /* Mobile Nav Drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          background: rgba(7, 9, 22, 0.96);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(139, 92, 246, 0.25);
          padding: 1.5rem;
          transform: translateY(-120%);
          opacity: 0;
          pointer-events: none;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 49;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
        }

        .mobile-nav-drawer.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.75rem;
        }

        .mobile-nav-link {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-secondary);
          display: block;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: color 0.2s ease;
        }

        .mobile-nav-link:hover {
          color: #ffffff;
        }

        .mobile-drawer-footer {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-socials {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .mobile-social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .ext-icon {
          margin-left: auto;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .desktop-nav, .btn-resume {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
