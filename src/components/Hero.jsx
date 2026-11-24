import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Award, 
  Code2, 
  Layers,
  GraduationCap
} from 'lucide-react';
import { Linkedin, Github } from './SocialIcons';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Content Column */}
        <div className="hero-content">
          
          {/* Status Badge */}
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span className="badge-text">Computer Engineering • Second Year</span>
          </div>

          {/* Heading */}
          <div className="hero-heading-group">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">
              <span className="gradient-text">{personalInfo.fullName}</span>
            </h1>
            <h2 className="hero-title">{personalInfo.headline}</h2>
          </div>

          {/* Tagline */}
          <p className="hero-tagline">
            <Sparkles size={18} className="tagline-icon" />
            <span>{personalInfo.tagline}</span>
          </p>

          {/* Professional Introduction */}
          <p className="hero-intro">
            {personalInfo.intro}
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <button 
              onClick={() => scrollTo('projects')} 
              className="btn-primary"
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </button>

            <button 
              onClick={() => scrollTo('certifications')} 
              className="btn-secondary"
            >
              <Award size={18} className="text-purple" />
              <span>Certifications</span>
            </button>
          </div>

          {/* Social Links & Highlights */}
          <div className="hero-footer-links">
            <span className="connect-label">Connect:</span>
            
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-pill linkedin"
              title="Sakshi Jadhav on LinkedIn"
            >
              <Linkedin size={17} />
              <span>LinkedIn</span>
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-pill github"
              title="Sakshi Jadhav on GitHub"
            >
              <Github size={17} />
              <span>GitHub</span>
            </a>
          </div>

        </div>

        {/* Right Portrait Column */}
        <div className="hero-visual">
          <div className="portrait-wrapper">
            
            {/* Glowing Ambient Backdrop Aura */}
            <div className="portrait-glow-aura"></div>
            
            {/* Animated Gradient Outer Border */}
            <div className="portrait-border-gradient">
              <div className="portrait-inner-frame">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.fullName}
                  className="profile-photo"
                  loading="eager"
                  onError={(e) => {
                    // Fallback if png/jpg differs
                    if (e.target.src.endsWith('.png')) {
                      e.target.src = personalInfo.fallbackProfileImage;
                    }
                  }}
                />
              </div>
            </div>

            {/* Floating Info Badges */}
            <div className="floating-badge badge-top-right">
              <div className="badge-icon purple">
                <Code2 size={16} />
              </div>
              <div className="badge-info">
                <span className="badge-title">C++ & Web Dev</span>
                <span className="badge-desc">Active Learner</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left">
              <div className="badge-icon blue">
                <GraduationCap size={16} />
              </div>
              <div className="badge-info">
                <span className="badge-title">B.Tech Undergrad</span>
                <span className="badge-desc">Computer Engineering</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Quick Highlights Strip */}
      <div className="container hero-stats-container">
        <div className="stats-glass-card">
          <div className="stat-item">
            <div className="stat-number gradient-text">2nd Year</div>
            <div className="stat-label">B.Tech Computer Engineering</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number gradient-text">4+ Verified</div>
            <div className="stat-label">Technical & Industry Certifications</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number gradient-text">Decentralized Concept</div>
            <div className="stat-label">E-Bike Battery Swapping Network</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number gradient-text">Continuous</div>
            <div className="stat-label">Skill Enhancement & Development</div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          padding-top: 8.5rem;
          padding-bottom: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          align-items: center;
          gap: 3.5rem;
          margin-bottom: 3.5rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1.1rem;
          border-radius: var(--radius-full);
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.25);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-blue);
          margin-bottom: 1.5rem;
          backdrop-filter: blur(8px);
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 10px #38bdf8;
          animation: pulseDot 2s infinite ease-in-out;
        }

        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        .hero-greeting {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 0.35rem;
          letter-spacing: 0.02em;
        }

        .hero-name {
          font-size: 3.25rem;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 0.6rem;
        }

        .hero-title {
          font-size: 1.65rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 1.25rem;
        }

        .hero-tagline {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 1.05rem;
          font-weight: 600;
          color: #c084fc;
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.25);
          padding: 0.5rem 1.1rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.5rem;
        }

        .tagline-icon {
          color: #a855f7;
        }

        .hero-intro {
          font-size: 1.1rem;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 580px;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.1rem;
          margin-bottom: 2.5rem;
        }

        .text-purple {
          color: #a855f7;
        }

        .hero-footer-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.85rem;
        }

        .connect-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-right: 0.25rem;
        }

        .hero-social-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.25s ease;
        }

        .hero-social-pill:hover {
          color: #ffffff;
          transform: translateY(-2px);
        }

        .hero-social-pill.linkedin:hover {
          background: rgba(14, 118, 168, 0.25);
          border-color: #0a66c2;
          box-shadow: 0 4px 15px rgba(10, 102, 194, 0.35);
        }

        .hero-social-pill.github:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.35);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.15);
        }

        /* Portrait Visual */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .portrait-wrapper {
          position: relative;
          width: 360px;
          height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .portrait-glow-aura {
          position: absolute;
          inset: -20px;
          border-radius: 40px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.35), rgba(56, 189, 248, 0.2), transparent 70%);
          filter: blur(28px);
          z-index: 1;
        }

        .portrait-border-gradient {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          padding: 4px;
          border-radius: 36px;
          background: linear-gradient(135deg, #38bdf8 0%, #6366f1 50%, #c084fc 100%);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(99, 102, 241, 0.3);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .portrait-border-gradient:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 50px rgba(168, 85, 247, 0.45);
        }

        .portrait-inner-frame {
          width: 100%;
          height: 100%;
          border-radius: 32px;
          overflow: hidden;
          background: #090c1a;
          position: relative;
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portrait-border-gradient:hover .profile-photo {
          transform: scale(1.03);
        }

        /* Floating Micro Badges */
        .floating-badge {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 1rem;
          background: rgba(14, 19, 41, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-md);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          animation: floatSlow 6s ease-in-out infinite alternate;
        }

        .badge-top-right {
          top: 25px;
          right: -30px;
          animation-delay: 0s;
        }

        .badge-bottom-left {
          bottom: 25px;
          left: -35px;
          animation-delay: -3s;
        }

        @keyframes floatSlow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }

        .badge-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .badge-icon.purple {
          background: rgba(168, 85, 247, 0.2);
          color: #c084fc;
          border: 1px solid rgba(168, 85, 247, 0.4);
        }

        .badge-icon.blue {
          background: rgba(56, 189, 248, 0.2);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.4);
        }

        .badge-info {
          display: flex;
          flex-direction: column;
        }

        .badge-title {
          font-size: 0.825rem;
          font-weight: 700;
          color: #ffffff;
        }

        .badge-desc {
          font-size: 0.725rem;
          color: var(--text-secondary);
        }

        /* Stats Strip */
        .hero-stats-container {
          margin-top: 1rem;
        }

        .stats-glass-card {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: rgba(14, 19, 41, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 1.75rem 2rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
        }

        .stat-item {
          text-align: center;
          padding: 0 1rem;
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 800;
          margin-bottom: 0.35rem;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .stat-divider {
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1), transparent);
          align-self: stretch;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: center;
          }
          .hero-intro {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-cta-group, .hero-footer-links {
            justify-content: center;
          }
          .portrait-wrapper {
            width: 320px;
            height: 400px;
          }
          .badge-top-right {
            right: -10px;
          }
          .badge-bottom-left {
            left: -10px;
          }
          .stats-glass-card {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .stat-divider {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .hero-name {
            font-size: 2.4rem;
          }
          .hero-title {
            font-size: 1.35rem;
          }
          .portrait-wrapper {
            width: 270px;
            height: 340px;
          }
          .floating-badge {
            display: none;
          }
          .stats-glass-card {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
