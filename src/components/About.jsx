import React from 'react';
import { 
  UserCheck, 
  BookOpen, 
  Cpu, 
  Sparkles, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  TrendingUp,
  GraduationCap
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      title: "Strong Core Fundamentals",
      desc: "Deep focus on object-oriented programming, data structures, and algorithmic principles in C++.",
      icon: Cpu,
      color: "blue"
    },
    {
      title: "Continuous Improvement",
      desc: "Daily commitment to learning modern web technologies and expanding hands-on programming abilities.",
      icon: TrendingUp,
      color: "purple"
    },
    {
      title: "Practical System Thinking",
      desc: "Designing impactful, real-world solutions such as decentralized battery-swapping networks.",
      icon: Sparkles,
      color: "cyan"
    },
    {
      title: "Academic Discipline",
      desc: "Active participation in top-tier certification courses (NPTEL IIT Madras, Imarticus, SmartBridge).",
      icon: GraduationCap,
      color: "indigo"
    }
  ];

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <UserCheck size={14} />
            <span>Profile & Background</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Sakshi Jadhav</span>
          </h2>
          <p className="section-subtitle">
            A dedicated Computer Engineering undergraduate building a solid foundation in programming, software development, and innovative system designs.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          
          {/* Left Column: Personal Profile Card */}
          <div className="about-profile-card glass-panel">
            <div className="profile-card-header">
              <div className="profile-thumb-wrapper">
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.fullName}
                  className="profile-thumb"
                  onError={(e) => {
                    if (e.target.src.endsWith('.png')) {
                      e.target.src = personalInfo.fallbackProfileImage;
                    }
                  }}
                />
                <span className="profile-active-indicator" title="Active Student"></span>
              </div>
              <div className="profile-card-title">
                <h3>{personalInfo.fullName}</h3>
                <p className="profile-card-headline">{personalInfo.headline}</p>
              </div>
            </div>

            <div className="profile-details-list">
              <div className="profile-detail-row">
                <span className="detail-label">
                  <GraduationCap size={16} /> Degree
                </span>
                <span className="detail-value">{educationData.degree}</span>
              </div>
              <div className="profile-detail-row">
                <span className="detail-label">
                  <Calendar size={16} /> Academic Standing
                </span>
                <span className="detail-value">{educationData.currentYear}</span>
              </div>
              <div className="profile-detail-row">
                <span className="detail-label">
                  <MapPin size={16} /> Location
                </span>
                <span className="detail-value">{personalInfo.location}</span>
              </div>
              <div className="profile-detail-row">
                <span className="detail-label">
                  <TrendingUp size={16} /> Focus
                </span>
                <span className="detail-value highlight">Continuous Skill Improvement</span>
              </div>
            </div>

            {/* Honest Professional Statement */}
            <div className="academic-focus-box">
              <span className="focus-badge">Engineering Philosophy</span>
              <p>
                "Mastering fundamentals through deliberate practice, building practical projects, and learning with humility and persistence."
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="about-narrative-column">
            
            {/* Narrative Box */}
            <div className="glass-panel narrative-card">
              <h3 className="narrative-heading">
                Engineering Passion & Growth Mindset
              </h3>
              
              <div className="narrative-paragraphs">
                {personalInfo.aboutDetailed.map((paragraph, index) => (
                  <p key={index} className="narrative-p">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="learning-status-pill">
                <div className="status-indicator-ping"></div>
                <span>
                  <strong>Active Focus:</strong> Continuously practicing C++ problem-solving and modern JavaScript web development.
                </span>
              </div>
            </div>

            {/* Core Values / Pillars Grid */}
            <div className="pillars-grid">
              {pillars.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="pillar-card glass-panel-subtle">
                    <div className={`pillar-icon-box ${item.color}`}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="pillar-title">{item.title}</h4>
                      <p className="pillar-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .about-section {
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        .about-profile-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .profile-card-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .profile-thumb-wrapper {
          position: relative;
          width: 76px;
          height: 76px;
          border-radius: 20px;
          padding: 3px;
          background: linear-gradient(135deg, #38bdf8, #8b5cf6);
          flex-shrink: 0;
        }

        .profile-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 17px;
          background: #090c1a;
        }

        .profile-active-indicator {
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 14px;
          height: 14px;
          background: #10b981;
          border: 2px solid #0c1022;
          border-radius: 50%;
        }

        .profile-card-title h3 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }

        .profile-card-headline {
          font-size: 0.85rem;
          color: var(--accent-blue);
          font-weight: 500;
        }

        .profile-details-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .profile-detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .detail-label {
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .detail-value {
          color: #f1f5f9;
          font-weight: 600;
          text-align: right;
        }

        .detail-value.highlight {
          color: var(--accent-purple);
        }

        .academic-focus-box {
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.2);
          padding: 1.2rem;
          border-radius: var(--radius-md);
        }

        .focus-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #c084fc;
          font-weight: 600;
          margin-bottom: 0.4rem;
        }

        .academic-focus-box p {
          font-size: 0.85rem;
          color: #cbd5e1;
          font-style: italic;
          line-height: 1.5;
        }

        /* Narrative Column */
        .about-narrative-column {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .narrative-card {
          padding: 2.25rem;
        }

        .narrative-heading {
          font-size: 1.45rem;
          margin-bottom: 1.25rem;
          color: #ffffff;
        }

        .narrative-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.75rem;
        }

        .narrative-p {
          color: #94a3b8;
          font-size: 1.025rem;
          line-height: 1.75;
        }

        .learning-status-pill {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
          background: rgba(56, 189, 248, 0.06);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          color: #e2e8f0;
        }

        .status-indicator-ping {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 10px #38bdf8;
          flex-shrink: 0;
        }

        /* Pillars Grid */
        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .pillar-card {
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .pillar-card:hover {
          transform: translateY(-3px);
          border-color: rgba(168, 85, 247, 0.3);
        }

        .pillar-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-icon-box.blue {
          background: rgba(56, 189, 248, 0.15);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.3);
        }

        .pillar-icon-box.purple {
          background: rgba(168, 85, 247, 0.15);
          color: #c084fc;
          border: 1px solid rgba(168, 85, 247, 0.3);
        }

        .pillar-icon-box.cyan {
          background: rgba(6, 182, 212, 0.15);
          color: #22d3ee;
          border: 1px solid rgba(6, 182, 212, 0.3);
        }

        .pillar-icon-box.indigo {
          background: rgba(99, 102, 241, 0.15);
          color: #818cf8;
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .pillar-title {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.35rem;
          color: #ffffff;
        }

        .pillar-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
