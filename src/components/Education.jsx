import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  Award,
  Sparkles 
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-wrapper education-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Academic Journey</span>
          </h2>
          <p className="section-subtitle">
            Pursuing a rigorous engineering curriculum focused on computing theory, algorithms, software engineering, and systems.
          </p>
        </div>

        {/* Education Main Card */}
        <div className="education-main-card glass-panel">
          
          <div className="education-grid">
            
            {/* Left: Degree & Institution Profile */}
            <div className="edu-primary-info">
              
              <div className="edu-badge-row">
                <span className="edu-status-pill">
                  <span className="pulse-dot"></span>
                  {educationData.status}
                </span>
                <span className="edu-year-pill">
                  {educationData.currentYear}
                </span>
              </div>

              <h3 className="edu-degree-title">{educationData.degree}</h3>

              <div className="edu-institution-box">
                <div className="inst-icon-wrap">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="institution-name">{educationData.institution}</h4>
                  <p className="institution-sub">{educationData.institutionSubtitle}</p>
                </div>
              </div>

              <div className="edu-meta-list">
                <div className="meta-item">
                  <span className="meta-label">Affiliated University:</span>
                  <span className="meta-value">{educationData.university}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Academic Duration:</span>
                  <span className="meta-value">{educationData.academicPeriod}</span>
                </div>
              </div>

              <div className="editable-notice-pill">
                <span>College, university & duration are easily editable in <code>portfolioData.js</code></span>
              </div>

            </div>

            {/* Right: Academic Focus & Coursework */}
            <div className="edu-focus-side">
              <h4 className="focus-heading">
                <BookOpen size={18} className="text-purple" />
                <span>Core Engineering Coursework & Areas of Focus</span>
              </h4>

              <div className="coursework-list">
                {educationData.highlights.map((item, index) => (
                  <div key={index} className="coursework-item">
                    <CheckCircle2 size={18} className="check-bullet" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="academic-growth-card glass-panel-subtle">
                <div className="growth-icon-box">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h5>Academic Vision</h5>
                  <p>
                    Committed to bridging classroom computer science theory with industry engineering practices through consistent coding, open-source exploration, and certifications.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      <style>{`
        .education-section {
          position: relative;
        }

        .education-main-card {
          padding: 3rem;
          position: relative;
          overflow: hidden;
        }

        .education-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }

        .edu-badge-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .edu-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.785rem;
          font-weight: 600;
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-blue);
          border: 1px solid rgba(56, 189, 248, 0.3);
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 6px #38bdf8;
        }

        .edu-year-pill {
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.785rem;
          font-weight: 600;
          background: rgba(168, 85, 247, 0.1);
          color: #c084fc;
          border: 1px solid rgba(168, 85, 247, 0.3);
        }

        .edu-degree-title {
          font-size: 2rem;
          line-height: 1.25;
          margin-bottom: 1.75rem;
          color: #ffffff;
        }

        .edu-institution-box {
          display: flex;
          gap: 1rem;
          align-items: center;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
        }

        .inst-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(139, 92, 246, 0.15);
          color: #c084fc;
          border: 1px solid rgba(139, 92, 246, 0.3);
          flex-shrink: 0;
        }

        .institution-name {
          font-size: 1.1rem;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }

        .institution-sub {
          font-size: 0.825rem;
          color: var(--text-muted);
        }

        .edu-meta-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 1.75rem;
        }

        .meta-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .meta-label {
          color: var(--text-muted);
        }

        .meta-value {
          color: #e2e8f0;
          font-weight: 600;
          text-align: right;
        }

        .editable-notice-pill {
          font-size: 0.785rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed rgba(255, 255, 255, 0.12);
          padding: 0.6rem 0.85rem;
          border-radius: var(--radius-sm);
        }

        .editable-notice-pill code {
          color: #38bdf8;
          font-family: var(--font-mono);
        }

        /* Right Side */
        .edu-focus-side {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .focus-heading {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 1.15rem;
          color: #ffffff;
        }

        .coursework-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .coursework-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.6;
        }

        .check-bullet {
          color: #38bdf8;
          margin-top: 3px;
          flex-shrink: 0;
        }

        .academic-growth-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          margin-top: 0.5rem;
        }

        .growth-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(168, 85, 247, 0.15);
          color: #c084fc;
          border: 1px solid rgba(168, 85, 247, 0.35);
          flex-shrink: 0;
        }

        .academic-growth-card h5 {
          font-size: 0.985rem;
          color: #ffffff;
          margin-bottom: 0.3rem;
        }

        .academic-growth-card p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 992px) {
          .education-grid {
            grid-template-columns: 1fr;
          }
          .education-main-card {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
