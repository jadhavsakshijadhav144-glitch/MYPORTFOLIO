import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { Linkedin, Github } from './SocialIcons';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.emailPlaceholder);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setFormError('Please provide a valid email address.');
      return;
    }

    // Set submitted state honestly informing the user
    setFormSubmitted(true);
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(`Hi Sakshi,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.emailPlaceholder}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect & Collaborate</span>
          </h2>
          <p className="section-subtitle">
            Open to internship opportunities, academic projects, technical discussions, and collaborative software engineering initiatives.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-col">
            
            <div className="contact-cards-group">
              
              {/* LinkedIn Card */}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-card glass-panel linkedin-glow"
              >
                <div className="contact-icon-box linkedin">
                  <Linkedin size={24} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-title">LinkedIn Profile</span>
                  <span className="contact-card-val">sakshi-jadhav-51a81142a</span>
                </div>
                <ExternalLink size={18} className="contact-card-arrow" />
              </a>

              {/* GitHub Card */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-card glass-panel github-glow"
              >
                <div className="contact-icon-box github">
                  <Github size={24} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-title">GitHub Profile</span>
                  <span className="contact-card-val">jadhavsakshijadhav144-glitch</span>
                </div>
                <ExternalLink size={18} className="contact-card-arrow" />
              </a>

              {/* Email Card (Placeholder with copy) */}
              <div className="contact-method-card glass-panel">
                <div className="contact-icon-box email">
                  <Mail size={24} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-title">Email (Editable Placeholder)</span>
                  <span className="contact-card-val">{personalInfo.emailPlaceholder}</span>
                </div>
                <button 
                  onClick={handleCopyEmail} 
                  className="copy-btn" 
                  title="Copy email address"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <Check size={18} className="text-emerald" /> : <Copy size={18} />}
                </button>
              </div>

              {/* Phone Card (Placeholder) */}
              <div className="contact-method-card glass-panel">
                <div className="contact-icon-box phone">
                  <Phone size={24} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-title">Phone (Editable Placeholder)</span>
                  <span className="contact-card-val">{personalInfo.phonePlaceholder}</span>
                </div>
                <span className="edit-pill">Configurable</span>
              </div>

              {/* Location Card */}
              <div className="contact-method-card glass-panel">
                <div className="contact-icon-box location">
                  <MapPin size={24} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-title">Location</span>
                  <span className="contact-card-val">{personalInfo.location}</span>
                </div>
              </div>

            </div>

            {/* Student Status Availability Callout */}
            <div className="availability-box glass-panel-subtle">
              <div className="avail-pulse-dot"></div>
              <div>
                <h5>Internship & Academic Inquiries</h5>
                <p>
                  Currently seeking opportunities for summer internships, technical mentorship, and undergraduate research in Computer Engineering.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form Interface */}
          <div className="contact-form-col glass-panel">
            
            <div className="form-header">
              <div className="form-icon-ring">
                <MessageSquare size={20} />
              </div>
              <div>
                <h3>Send a Message</h3>
                <p>Fill out the form interface below to initiate contact.</p>
              </div>
            </div>

            {formSubmitted ? (
              <div className="submission-status-card">
                <div className="status-success-icon">
                  <CheckCircle2 size={44} className="text-emerald" />
                </div>
                <h4>Message Interface Verified!</h4>
                <p className="status-message">
                  Thank you for testing the interface! 
                </p>
                
                {/* Honest backend integration notice */}
                <div className="backend-notice-box">
                  <AlertCircle size={18} className="text-blue" />
                  <div>
                    <strong>Backend Notice:</strong> To deliver messages automatically to your personal inbox in production, you can easily connect this form to a free backend service like <strong>EmailJS</strong>, <strong>Formspree</strong>, or an Express API endpoint.
                  </div>
                </div>

                <div className="status-actions">
                  <button onClick={handleMailto} className="btn-primary btn-sm">
                    <Mail size={16} />
                    <span>Open in Your Mail App (mailto:)</span>
                  </button>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }} 
                    className="btn-secondary btn-sm"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                
                {formError && (
                  <div className="form-error-banner">
                    <AlertCircle size={16} />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Internship Inquiry / Project Collaboration"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="req">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message or inquiry here..."
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary submit-btn">
                  <Send size={18} />
                  <span>Send Message</span>
                </button>

                <p className="form-disclaimer">
                  Frontend validated form. Data stays private.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>

      <style>{`
        .contact-section {
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 3rem;
          align-items: start;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .contact-cards-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-method-card {
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          text-decoration: none;
          position: relative;
          transition: all 0.25s ease;
        }

        .contact-method-card:hover {
          transform: translateX(4px);
        }

        .contact-method-card.linkedin-glow:hover {
          border-color: rgba(14, 118, 168, 0.5);
          box-shadow: 0 0 25px rgba(10, 102, 194, 0.25);
        }

        .contact-method-card.github-glow:hover {
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.15);
        }

        .contact-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-icon-box.linkedin {
          background: rgba(14, 118, 168, 0.15);
          color: #38bdf8;
          border: 1px solid rgba(14, 118, 168, 0.35);
        }

        .contact-icon-box.github {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .contact-icon-box.email {
          background: rgba(168, 85, 247, 0.15);
          color: #c084fc;
          border: 1px solid rgba(168, 85, 247, 0.35);
        }

        .contact-icon-box.phone {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.35);
        }

        .contact-icon-box.location {
          background: rgba(244, 63, 94, 0.15);
          color: #fb7185;
          border: 1px solid rgba(244, 63, 94, 0.35);
        }

        .contact-card-text {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .contact-card-title {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
        }

        .contact-card-val {
          font-size: 0.95rem;
          color: #ffffff;
          font-weight: 600;
          word-break: break-all;
        }

        .contact-card-arrow {
          color: var(--text-muted);
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .contact-method-card:hover .contact-card-arrow {
          color: #ffffff;
          transform: translate(2px, -2px);
        }

        .copy-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.06);
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .copy-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.15);
        }

        .edit-pill {
          font-size: 0.725rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-family: var(--font-mono);
        }

        .availability-box {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.5rem;
          border-radius: var(--radius-md);
        }

        .avail-pulse-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          margin-top: 6px;
          flex-shrink: 0;
          animation: pulseGreen 2s infinite;
        }

        @keyframes pulseGreen {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }

        .availability-box h5 {
          font-size: 1rem;
          color: #ffffff;
          margin-bottom: 0.35rem;
        }

        .availability-box p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Form Column */
        .contact-form-col {
          padding: 2.5rem;
        }

        .form-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .form-icon-ring {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(139, 92, 246, 0.15);
          color: #c084fc;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(139, 92, 246, 0.35);
        }

        .form-header h3 {
          font-size: 1.35rem;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }

        .form-header p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #cbd5e1;
        }

        .req {
          color: #f43f5e;
        }

        .form-input {
          width: 100%;
          padding: 0.85rem 1.15rem;
          border-radius: var(--radius-md);
          background: rgba(7, 9, 22, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-size: 0.95rem;
          font-family: inherit;
          transition: all 0.25s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--accent-purple);
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
          background: rgba(11, 15, 36, 0.9);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          margin-top: 0.5rem;
        }

        .form-disclaimer {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-align: center;
          margin-top: 0.5rem;
        }

        .form-error-banner {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: var(--radius-sm);
          color: #fca5a5;
          font-size: 0.85rem;
        }

        /* Success & Status Card */
        .submission-status-card {
          padding: 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }

        .status-success-icon {
          margin-bottom: 0.5rem;
        }

        .submission-status-card h4 {
          font-size: 1.35rem;
          color: #ffffff;
        }

        .status-message {
          font-size: 0.95rem;
          color: #94a3b8;
          max-width: 450px;
        }

        .backend-notice-box {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.25);
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          color: #cbd5e1;
          text-align: left;
        }

        .backend-notice-box strong {
          color: #38bdf8;
        }

        .status-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 0.5rem;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
