import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  FileText, 
  Building, 
  Calendar, 
  Award, 
  CheckCircle2, 
  Info,
  ShieldCheck,
  Download,
  Eye,
  FileCheck2,
  QrCode
} from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  const [activeView, setActiveView] = useState('preview'); // 'preview' | 'details'

  if (!certificate) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog glass-panel" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Top Bar */}
        <div className="modal-header">
          <div className="modal-header-left">
            <div className="modal-tag">
              <Award size={16} className="text-purple" />
              <span>{certificate.credentialType}</span>
            </div>
            <span className="modal-verified-pill">
              <ShieldCheck size={14} className="text-emerald" />
              <span>Official Document</span>
            </span>
          </div>

          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* View Switcher Tabs */}
        <div className="modal-view-tabs">
          <button
            className={`tab-btn ${activeView === 'preview' ? 'active' : ''}`}
            onClick={() => setActiveView('preview')}
          >
            <Eye size={15} />
            <span>Interactive PDF Preview</span>
          </button>
          <button
            className={`tab-btn ${activeView === 'details' ? 'active' : ''}`}
            onClick={() => setActiveView('details')}
          >
            <FileCheck2 size={15} />
            <span>Verification Details</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-body">
          
          {/* TAB 1: INTERACTIVE PDF PREVIEW */}
          {activeView === 'preview' && (
            <div className="pdf-preview-container">
              <div className="pdf-frame-wrapper">
                <iframe
                  src={`${certificate.pdfPath}#toolbar=0&navpanes=0`}
                  title={certificate.title}
                  className="pdf-iframe"
                />
              </div>
              <div className="preview-tip-bar">
                <Info size={14} className="text-cyan" />
                <span>Viewing original PDF. Use the buttons below to open in full tab or download.</span>
              </div>
            </div>
          )}

          {/* TAB 2: VERIFICATION DETAILS */}
          {activeView === 'details' && (
            <div className="details-view-container">
              <h3 className="modal-title">{certificate.title}</h3>

              <div className="modal-org-box">
                <Building size={18} className="text-cyan" />
                <span className="modal-org-name">{certificate.organization}</span>
              </div>

              <div className="modal-meta-grid">
                <div className="modal-meta-item">
                  <span className="meta-key">Awarded To:</span>
                  <span className="meta-val highlight">{certificate.awardedTo || "Sakshi Jadhav"}</span>
                </div>
                {certificate.certificateId && (
                  <div className="modal-meta-item">
                    <span className="meta-key">Certificate / Roll ID:</span>
                    <span className="meta-val font-mono">{certificate.certificateId}</span>
                  </div>
                )}
                {certificate.grade && (
                  <div className="modal-meta-item">
                    <span className="meta-key">Performance / Grade:</span>
                    <span className="meta-val highlight">{certificate.grade}</span>
                  </div>
                )}
                {certificate.score && (
                  <div className="modal-meta-item">
                    <span className="meta-key">Official Score:</span>
                    <span className="meta-val highlight">{certificate.score}</span>
                  </div>
                )}
                {certificate.scoreBreakdown && (
                  <div className="modal-meta-item full-width">
                    <span className="meta-key">Score Breakdown:</span>
                    <span className="meta-val">{certificate.scoreBreakdown}</span>
                  </div>
                )}
                {certificate.issuedDate && (
                  <div className="modal-meta-item">
                    <span className="meta-key">Issued Date:</span>
                    <span className="meta-val">{certificate.issuedDate}</span>
                  </div>
                )}
                {certificate.duration && (
                  <div className="modal-meta-item">
                    <span className="meta-key">Duration:</span>
                    <span className="meta-val">{certificate.duration}</span>
                  </div>
                )}
                {certificate.period && (
                  <div className="modal-meta-item">
                    <span className="meta-key">Period:</span>
                    <span className="meta-val">{certificate.period}</span>
                  </div>
                )}
                {certificate.credits && (
                  <div className="modal-meta-item">
                    <span className="meta-key">Academic Credits:</span>
                    <span className="meta-val">{certificate.credits}</span>
                  </div>
                )}
                {certificate.signatory && (
                  <div className="modal-meta-item full-width">
                    <span className="meta-key">Issuing Authority / Signatory:</span>
                    <span className="meta-val">{certificate.signatory}</span>
                  </div>
                )}
              </div>

              <p className="modal-desc">{certificate.description}</p>

              {certificate.areas && (
                <div className="modal-areas-section">
                  <span className="section-label">Covered Industry Domains:</span>
                  <ul className="modal-areas-list">
                    {certificate.areas.map((area, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} className="text-cyan" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* PDF Info Helper */}
              <div className="pdf-path-info">
                <FileCheck2 size={16} className="text-blue" />
                <div>
                  <strong>Original Document:</strong> <code>{certificate.pdfFileName}</code>
                  <p>Resolved directly from <code>public/assets/{certificate.pdfFileName}</code></p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Actions */}
        <div className="modal-footer">
          <a
            href={certificate.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <ExternalLink size={17} />
            <span>Open in Full Browser Tab</span>
          </a>

          <a
            href={certificate.pdfPath}
            download={certificate.pdfFileName}
            className="btn-secondary"
          >
            <Download size={17} />
            <span>Download PDF</span>
          </a>
        </div>

      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 6, 15, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 1.25rem;
          animation: modalFadeIn 0.25s ease-out;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-dialog {
          width: 100%;
          max-width: 820px;
          max-height: 92vh;
          background: rgba(12, 17, 39, 0.98);
          border: 1px solid rgba(139, 92, 246, 0.35);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.75), 0 0 45px rgba(139, 92, 246, 0.25);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: modalZoom 0.25s ease-out;
        }

        @keyframes modalZoom {
          from { transform: scale(0.96); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.2);
        }

        .modal-header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .modal-tag {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: #c084fc;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .modal-verified-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.2rem 0.6rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.725rem;
          color: #34d399;
        }

        .modal-close-btn {
          color: var(--text-muted);
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 8px;
        }

        .modal-close-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Tabs */
        .modal-view-tabs {
          display: flex;
          gap: 0.5rem;
          padding: 0.75rem 1.75rem;
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .modal-view-tabs .tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }

        .modal-view-tabs .tab-btn.active {
          color: #ffffff;
          background: rgba(139, 92, 246, 0.25);
          border: 1px solid rgba(168, 85, 247, 0.4);
        }

        .modal-body {
          padding: 1.75rem;
          overflow-y: auto;
          flex-grow: 1;
        }

        /* PDF Preview View */
        .pdf-preview-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .pdf-frame-wrapper {
          width: 100%;
          height: 520px;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #111425;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .preview-tip-bar {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.825rem;
          color: var(--text-muted);
          padding: 0.5rem 0.75rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: var(--radius-sm);
        }

        /* Details View */
        .modal-title {
          font-size: 1.6rem;
          line-height: 1.3;
          color: #ffffff;
          margin-bottom: 0.6rem;
        }

        .modal-org-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.05rem;
          font-weight: 600;
          color: #38bdf8;
          margin-bottom: 1.5rem;
        }

        .modal-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.5rem;
        }

        .modal-meta-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .modal-meta-item.full-width {
          grid-column: span 2;
        }

        .meta-key {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .meta-val {
          font-size: 0.925rem;
          color: #f1f5f9;
          font-weight: 600;
        }

        .meta-val.highlight {
          color: #c084fc;
        }

        .font-mono {
          font-family: var(--font-mono);
        }

        .modal-desc {
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .modal-areas-section {
          margin-bottom: 1.5rem;
        }

        .section-label {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .modal-areas-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .modal-areas-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #cbd5e1;
        }

        .pdf-path-info {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: var(--radius-sm);
          font-size: 0.825rem;
          color: #cbd5e1;
        }

        .pdf-path-info code {
          color: #38bdf8;
          font-family: var(--font-mono);
        }

        .modal-footer {
          padding: 1.25rem 1.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.35);
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .modal-footer .btn-primary,
        .modal-footer .btn-secondary {
          flex: 1;
        }

        @media (max-width: 700px) {
          .modal-meta-grid {
            grid-template-columns: 1fr;
          }
          .modal-meta-item.full-width {
            grid-column: span 1;
          }
          .pdf-frame-wrapper {
            height: 380px;
          }
        }
      `}</style>
    </div>
  );
}
