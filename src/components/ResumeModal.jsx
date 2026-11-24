import React from 'react';
import { 
  X, 
  FileText, 
  Download, 
  AlertCircle, 
  CheckCircle2 
} from 'lucide-react';
import { Linkedin, Github } from './SocialIcons';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog glass-panel" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="modal-header">
          <div className="modal-tag">
            <FileText size={16} className="text-purple" />
            <span>Curriculum Vitae / Resume</span>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="modal-body">
          <div className="resume-status-icon">
            <FileText size={42} />
          </div>

          <h3 className="resume-heading">
            Resume Status: Ready for Your Document
          </h3>

          <p className="resume-explanation">
            As a student committed to authenticity, Sakshi’s portfolio is configured to provide an official resume download once her finalized technical resume is added.
          </p>

          <div className="resume-steps-card">
            <h4>How to link your real resume:</h4>
            <ol>
              <li>Copy your resume PDF file into: <code>public/assets/Sakshi_Jadhav_Resume.pdf</code></li>
              <li>In <code>src/data/portfolioData.js</code>, set <code>resumeAvailable: true</code></li>
            </ol>
          </div>

          <div className="quick-connect-note">
            <span>In the meantime, feel free to explore verified credentials on LinkedIn:</span>
            <div className="resume-social-links">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary btn-sm"
              >
                <Linkedin size={15} />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary btn-sm"
              >
                <Github size={15} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          {personalInfo.resumeAvailable ? (
            <a
              href={personalInfo.resumePath}
              download="Sakshi_Jadhav_Resume.pdf"
              className="btn-primary"
              style={{ width: '100%' }}
            >
              <Download size={18} />
              <span>Download Real Resume</span>
            </a>
          ) : (
            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ width: '100%' }}
            >
              <span>Close</span>
            </button>
          )}
        </div>

      </div>

      <style>{`
        .resume-status-icon {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          background: rgba(139, 92, 246, 0.15);
          color: #c084fc;
          border: 1px solid rgba(139, 92, 246, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
        }

        .resume-heading {
          text-align: center;
          font-size: 1.35rem;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .resume-explanation {
          text-align: center;
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .resume-steps-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.5rem;
          margin-bottom: 1.5rem;
        }

        .resume-steps-card h4 {
          font-size: 0.95rem;
          color: #ffffff;
          margin-bottom: 0.6rem;
        }

        .resume-steps-card ol {
          padding-left: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #cbd5e1;
        }

        .resume-steps-card code {
          background: rgba(255, 255, 255, 0.08);
          color: #38bdf8;
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
        }

        .quick-connect-note {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          text-align: center;
        }

        .resume-social-links {
          display: flex;
          gap: 0.75rem;
        }
      `}</style>
    </div>
  );
}
