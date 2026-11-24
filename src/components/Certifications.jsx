import React from 'react';
import { 
  Award, 
  ExternalLink, 
  FileText, 
  CheckCircle, 
  Calendar, 
  Building, 
  ShieldCheck, 
  Sparkles,
  QrCode,
  Tag,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications({ onSelectCertificate }) {
  return (
    <section id="certifications" className="section-wrapper cert-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Official Credentials</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Authentic, verified certificates completed in C & C++ Programming, Business Communication, IIT Madras AI Digital Marketing, and SmartBridge BFSI AI Internship.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="cert-cards-grid">
          {certificationsData.map((cert) => {
            const isNptel = cert.id === 'nptel-digital-marketing';

            return (
              <div key={cert.id} className="cert-card glass-panel">
                
                {/* Header Tag & Grade Badge */}
                <div className="cert-card-top">
                  <span className="cert-type-pill">{cert.credentialType}</span>
                  <div className="cert-grade-tag">
                    <span className="grade-highlight">
                      {cert.grade || "Certified"}
                    </span>
                    {cert.score && <span className="score-sub">({cert.score})</span>}
                  </div>
                </div>

                {/* Certificate Title */}
                <h3 className="cert-title">{cert.title}</h3>

                {/* Issuing Organization */}
                <div className="cert-org-row">
                  <Building size={16} className="text-cyan" />
                  <span className="org-name">{cert.organization}</span>
                </div>

                {/* Timeline / Issued Date */}
                <div className="cert-timeline-row">
                  <Calendar size={14} className="text-muted" />
                  <span className="cert-date">
                    {cert.issuedDate ? `Issued: ${cert.issuedDate}` : cert.duration || cert.period}
                  </span>
                </div>

                {/* Certificate ID Pill */}
                {cert.certificateId && (
                  <div className="cert-id-badge">
                    <QrCode size={13} className="text-purple" />
                    <span>ID: {cert.certificateId}</span>
                  </div>
                )}

                {/* NPTEL Special Score Highlights */}
                {isNptel && cert.scoreBreakdown && (
                  <div className="nptel-metrics-box">
                    <div className="metric-tag">
                      <span className="label">Assignments:</span>
                      <span className="val highlight">25 / 25 (100%)</span>
                    </div>
                    <div className="metric-tag">
                      <span className="label">Proctored Exam:</span>
                      <span className="val">58.5 / 75</span>
                    </div>
                    <div className="metric-tag">
                      <span className="label">Registered:</span>
                      <span className="val">{cert.totalCandidates}</span>
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="cert-desc">{cert.description}</p>

                {/* Specialized Areas (if any, e.g. BFSI) */}
                {cert.areas && (
                  <div className="cert-areas-box">
                    <span className="areas-label">Specialized Domains:</span>
                    <ul className="areas-list">
                      {cert.areas.map((area, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={13} className="text-purple" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Partner Affiliations */}
                {cert.partners && cert.partners.length > 0 && (
                  <div className="cert-partners-row">
                    {cert.partners.map((partner, idx) => (
                      <span key={idx} className="partner-chip">
                        {partner}
                      </span>
                    ))}
                  </div>
                )}

                {/* Skills tags */}
                <div className="cert-skills-wrap">
                  {cert.skillsCovered.map((skill, idx) => (
                    <span key={idx} className="cert-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="cert-actions-row">
                  {/* View PDF Button (Opens original PDF in new tab) */}
                  <a
                    href={cert.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-sm flex-1"
                    title={`Open ${cert.pdfFileName} in a new tab`}
                  >
                    <FileText size={16} />
                    <span>View PDF</span>
                    <ExternalLink size={14} />
                  </a>

                  {/* Interactive Details & Preview Modal */}
                  <button
                    onClick={() => onSelectCertificate(cert)}
                    className="btn-secondary btn-sm"
                    title="Inspect Credential Verification & Document Details"
                  >
                    <Eye size={15} />
                    <span>Details</span>
                  </button>
                </div>

                {/* Verified Footer Indicator */}
                <div className="cert-footer-status">
                  <ShieldCheck size={14} className="text-emerald" />
                  <span>Original PDF Loaded & Verified</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .cert-section {
          position: relative;
        }

        .cert-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .cert-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                      border-color 0.3s ease, 
                      box-shadow 0.3s ease;
        }

        .cert-card:hover {
          transform: translateY(-5px);
        }

        .cert-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          gap: 0.5rem;
        }

        .cert-type-pill {
          font-family: var(--font-mono);
          font-size: 0.725rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .cert-grade-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          background: rgba(168, 85, 247, 0.15);
          border: 1px solid rgba(168, 85, 247, 0.35);
          color: #c084fc;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.8rem;
        }

        .score-sub {
          font-size: 0.75rem;
          color: #e9d5ff;
        }

        .cert-title {
          font-size: 1.35rem;
          line-height: 1.35;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .cert-org-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #cbd5e1;
          font-weight: 600;
          margin-bottom: 0.4rem;
        }

        .text-cyan {
          color: #38bdf8;
          flex-shrink: 0;
        }

        .text-muted {
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .cert-timeline-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.825rem;
          color: var(--text-muted);
          margin-bottom: 0.85rem;
        }

        .cert-id-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.65rem;
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.25);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #c084fc;
          margin-bottom: 1rem;
          align-self: flex-start;
        }

        .nptel-metrics-box {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding: 0.75rem 1rem;
          background: rgba(56, 189, 248, 0.06);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: var(--radius-sm);
          margin-bottom: 1rem;
        }

        .metric-tag {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          font-family: var(--font-mono);
        }

        .metric-tag .label {
          color: var(--text-muted);
        }

        .metric-tag .val {
          color: #f1f5f9;
          font-weight: 600;
        }

        .metric-tag .val.highlight {
          color: #38bdf8;
        }

        .cert-desc {
          font-size: 0.885rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .cert-areas-box {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.25rem;
        }

        .areas-label {
          display: block;
          font-size: 0.725rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-family: var(--font-mono);
          margin-bottom: 0.4rem;
        }

        .areas-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .areas-list li {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: #cbd5e1;
        }

        .cert-partners-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 0.85rem;
        }

        .partner-chip {
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-family: var(--font-mono);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
        }

        .cert-skills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.75rem;
        }

        .cert-skill-tag {
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #e2e8f0;
        }

        .cert-actions-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .flex-1 {
          flex: 1;
        }

        .cert-footer-status {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.75rem;
          color: #94a3b8;
          font-family: var(--font-mono);
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .text-emerald {
          color: #10b981;
        }
      `}</style>
    </section>
  );
}
