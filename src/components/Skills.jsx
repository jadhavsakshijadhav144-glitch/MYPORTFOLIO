import React from 'react';
import { 
  Code2, 
  FileCode, 
  Palette, 
  Sparkles, 
  CheckCircle, 
  Compass, 
  ArrowUpRight 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={28} />;
      case 'FileCode':
        return <FileCode size={28} />;
      case 'Palette':
        return <Palette size={28} />;
      case 'Sparkles':
        return <Sparkles size={28} />;
      default:
        return <Code2 size={28} />;
    }
  };

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Compass size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="section-subtitle">
            Strengthening core programming languages and web fundamentals with an emphasis on clean architecture and practical application.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {skillsData.map((skill, index) => {
            const isLearning = skill.status.toLowerCase().includes('learning');

            return (
              <div 
                key={skill.name} 
                className={`skill-card glass-panel ${isLearning ? 'learning-card' : ''}`}
              >
                {/* Ambient glow in card background */}
                <div className={`card-glow-bg ${skill.name.toLowerCase().replace('++', 'pp')}`}></div>

                {/* Top Bar with Category & Status Badge */}
                <div className="skill-card-top">
                  <span className="skill-category">{skill.category}</span>
                  <span className={`skill-status-badge ${isLearning ? 'status-learning' : 'status-core'}`}>
                    {isLearning && <span className="status-ping"></span>}
                    {skill.status}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="skill-identity">
                  <div className={`skill-icon-box ${skill.name.toLowerCase().replace('++', 'pp')}`}>
                    {getIcon(skill.icon)}
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>

                {/* Skill Description */}
                <p className="skill-description">
                  {skill.description}
                </p>

                {/* Highlights / Topics list */}
                <div className="skill-highlights">
                  <span className="highlights-title">Core Areas:</span>
                  <div className="tags-container">
                    {skill.highlights.map((item, idx) => (
                      <span key={idx} className="skill-pill">
                        <CheckCircle size={12} className="check-icon" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom learning note if learning */}
                {isLearning && (
                  <div className="learning-note">
                    <Sparkles size={14} />
                    <span>Actively building mini-projects to solidify JS fundamentals</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Learning Commitment Banner */}
        <div className="learning-commitment-banner glass-panel-subtle">
          <div className="banner-icon-ring">
            <Sparkles size={22} />
          </div>
          <div className="banner-content">
            <h4>Disciplined Learning Philosophy</h4>
            <p>
              Rather than claiming arbitrary percentage proficiencies, I prioritize deep conceptual understanding, clean syntax, reliable problem solving, and building working prototypes.
            </p>
          </div>
        </div>

      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 1.75rem;
          margin-bottom: 3.5rem;
        }

        .skill-card {
          position: relative;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                      border-color 0.3s ease, 
                      box-shadow 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-6px);
        }

        /* Ambient Glow behind each card */
        .card-glow-bg {
          position: absolute;
          width: 140px;
          height: 140px;
          top: -30px;
          right: -30px;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.15;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .skill-card:hover .card-glow-bg {
          opacity: 0.3;
        }

        .card-glow-bg.cpp { background: #3b82f6; }
        .card-glow-bg.html { background: #f97316; }
        .card-glow-bg.css { background: #06b6d4; }
        .card-glow-bg.javascript { background: #eab308; }

        .skill-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .skill-category {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .skill-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          font-family: var(--font-mono);
        }

        .status-core {
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-blue);
          border: 1px solid rgba(56, 189, 248, 0.25);
        }

        .status-learning {
          background: rgba(234, 179, 8, 0.12);
          color: #fbbf24;
          border: 1px solid rgba(234, 179, 8, 0.35);
        }

        .status-ping {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fbbf24;
          box-shadow: 0 0 8px #fbbf24;
          animation: pingPulse 1.5s infinite;
        }

        @keyframes pingPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }

        /* Identity */
        .skill-identity {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .skill-icon-box {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .skill-icon-box.cpp {
          background: rgba(59, 130, 246, 0.15);
          color: #60a5fa;
          border-color: rgba(59, 130, 246, 0.35);
        }

        .skill-icon-box.html {
          background: rgba(249, 115, 22, 0.15);
          color: #fb923c;
          border-color: rgba(249, 115, 22, 0.35);
        }

        .skill-icon-box.css {
          background: rgba(6, 182, 212, 0.15);
          color: #38bdf8;
          border-color: rgba(6, 182, 212, 0.35);
        }

        .skill-icon-box.javascript {
          background: rgba(234, 179, 8, 0.15);
          color: #facc15;
          border-color: rgba(234, 179, 8, 0.35);
        }

        .skill-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
        }

        .skill-description {
          font-size: 0.925rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .skill-highlights {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .highlights-title {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-sm);
          font-size: 0.785rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #e2e8f0;
        }

        .check-icon {
          color: #38bdf8;
        }

        .learning-note {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.25rem;
          padding: 0.6rem 0.85rem;
          border-radius: var(--radius-sm);
          background: rgba(234, 179, 8, 0.08);
          border: 1px solid rgba(234, 179, 8, 0.2);
          color: #fde047;
          font-size: 0.785rem;
        }

        /* Banner */
        .learning-commitment-banner {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.75rem 2.25rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(139, 92, 246, 0.2);
          background: rgba(14, 19, 41, 0.6);
        }

        .banner-icon-ring {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(168, 85, 247, 0.15);
          color: #c084fc;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(168, 85, 247, 0.35);
        }

        .banner-content h4 {
          font-size: 1.15rem;
          margin-bottom: 0.35rem;
          color: #ffffff;
        }

        .banner-content p {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 640px) {
          .learning-commitment-banner {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
