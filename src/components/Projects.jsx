import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  BatteryCharging, 
  Smartphone, 
  Server, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Info,
  Clock
} from 'lucide-react';
import { Github } from './SocialIcons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('overview');
  const project = projectsData[0]; // E-bike battery swapping project

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Project Showcase</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Engineering Project</span>
          </h2>
          <p className="section-subtitle">
            Innovative engineering concepts and architectural solutions designed to solve real-world logistical and sustainability challenges.
          </p>
        </div>

        {/* Featured Project Big Showcase Card */}
        <div className="project-showcase-card glass-panel">
          
          {/* Top Status Banner */}
          <div className="project-type-banner">
            <div className="banner-tag proposed">
              <span className="pulse-beacon"></span>
              <span>{project.type}</span>
            </div>
            <div className="status-note">
              <Info size={14} />
              <span>Conceptual System Design & Architecture</span>
            </div>
          </div>

          <div className="showcase-content-grid">
            
            {/* Left: Project Details */}
            <div className="project-info-side">
              
              <h3 className="project-main-title">{project.title}</h3>
              
              <p className="project-main-desc">
                {project.description}
              </p>

              {/* Tabs for Overview vs Architecture */}
              <div className="project-tabs">
                <button
                  className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Key Problem & Solution
                </button>
                <button
                  className={`tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
                  onClick={() => setActiveTab('architecture')}
                >
                  System Architecture
                </button>
              </div>

              {/* Tab 1: Overview */}
              {activeTab === 'overview' && (
                <div className="tab-pane-content fade-in">
                  <div className="problem-solution-box">
                    <div className="ps-row">
                      <div className="ps-icon red">
                        <Clock size={18} />
                      </div>
                      <div>
                        <strong>The Challenge:</strong> Local delivery riders face 3-5 hours of battery downtime and severe range anxiety during peak delivery hours.
                      </div>
                    </div>
                    <div className="ps-row">
                      <div className="ps-icon green">
                        <Zap size={18} />
                      </div>
                      <div>
                        <strong>The Proposed Solution:</strong> 60-second modular battery swap pods positioned strategically at dense commercial hubs, orchestrated via a smartphone app.
                      </div>
                    </div>
                  </div>

                  <ul className="project-points-list">
                    {project.extendedDetails.map((point, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="text-cyan" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tab 2: Architecture Highlights */}
              {activeTab === 'architecture' && (
                <div className="tab-pane-content fade-in">
                  <div className="arch-cards-stack">
                    {project.architectureHighlights.map((arch, i) => (
                      <div key={i} className="arch-micro-card">
                        <div className="arch-num">0{i+1}</div>
                        <div>
                          <h5>{arch.title}</h5>
                          <p>{arch.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="project-tags-wrap">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="project-action-row">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-sm"
                >
                  <Github size={16} />
                  <span>GitHub Repository</span>
                  <ExternalLink size={14} />
                </a>

                <div className="edit-tip-pill" title="You can edit this project details in src/data/portfolioData.js">
                  <span>Editable Project Entry</span>
                </div>
              </div>

            </div>

            {/* Right: Architecture Diagram Mockup / Visual */}
            <div className="project-visual-side">
              <div className="schematic-board">
                
                {/* Header of the Schematic Screen */}
                <div className="schematic-header">
                  <div className="window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <span className="schematic-title">System Topology: Decentralized Network</span>
                </div>

                {/* Interactive Diagram Nodes */}
                <div className="schematic-canvas">
                  
                  {/* Node 1: Rider App */}
                  <div className="schematic-node node-rider">
                    <div className="node-icon-wrap">
                      <Smartphone size={24} className="node-icon" />
                    </div>
                    <div className="node-text">
                      <span className="node-label">Rider Mobile App</span>
                      <span className="node-sub">Live Map & Battery Booking</span>
                    </div>
                    <span className="node-status live">IoT Client</span>
                  </div>

                  {/* Flow connector line */}
                  <div className="flow-line vertical">
                    <div className="flow-pulse"></div>
                  </div>

                  {/* Node 2: Smart Station */}
                  <div className="schematic-node node-station active">
                    <div className="node-icon-wrap">
                      <BatteryCharging size={24} className="node-icon" />
                    </div>
                    <div className="node-text">
                      <span className="node-label">Modular Swap Station</span>
                      <span className="node-sub">Automated 12-Bay Locking Pods</span>
                    </div>
                    <span className="node-status ready">60-Sec Swap</span>
                  </div>

                  {/* Flow connector line */}
                  <div className="flow-line vertical">
                    <div className="flow-pulse"></div>
                  </div>

                  {/* Node 3: Cloud & Telemetry */}
                  <div className="schematic-node node-cloud">
                    <div className="node-icon-wrap">
                      <Server size={24} className="node-icon" />
                    </div>
                    <div className="node-text">
                      <span className="node-label">Cloud Mesh Telemetry</span>
                      <span className="node-sub">SoH Monitoring & Demand Balance</span>
                    </div>
                    <span className="node-status secure">Encrypted AWS/Firebase</span>
                  </div>

                </div>

                {/* Footer specs */}
                <div className="schematic-footer">
                  <div className="spec-metric">
                    <span className="metric-label">Target Swap Time</span>
                    <span className="metric-val">&lt; 90 Seconds</span>
                  </div>
                  <div className="spec-metric">
                    <span className="metric-label">Status</span>
                    <span className="metric-val text-blue">System Design Phase</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Future Projects Placeholder Card */}
        <div className="upcoming-projects-card glass-panel-subtle">
          <div className="upcoming-header">
            <Cpu size={22} className="text-purple" />
            <div>
              <h4>Upcoming Academic & Software Projects</h4>
              <p>
                Currently developing C++ data structure applications and interactive web systems. Stay tuned for new updates as they are published to GitHub!
              </p>
            </div>
          </div>
          <a
            href="https://github.com/jadhavsakshijadhav144-glitch"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary btn-sm"
          >
            <Github size={16} />
            <span>Follow on GitHub</span>
          </a>
        </div>

      </div>

      <style>{`
        .projects-section {
          position: relative;
        }

        .project-showcase-card {
          padding: 2.75rem;
          margin-bottom: 2.5rem;
          position: relative;
          overflow: hidden;
        }

        .project-type-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-glass);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .banner-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.35rem 1rem;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .banner-tag.proposed {
          background: rgba(168, 85, 247, 0.15);
          color: #c084fc;
          border: 1px solid rgba(168, 85, 247, 0.4);
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.2);
        }

        .pulse-beacon {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #c084fc;
          box-shadow: 0 0 8px #c084fc;
          animation: beaconPulse 1.8s infinite;
        }

        @keyframes beaconPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }

        .status-note {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.825rem;
          color: var(--text-muted);
        }

        .showcase-content-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .project-main-title {
          font-size: 1.75rem;
          line-height: 1.3;
          margin-bottom: 1.25rem;
          color: #ffffff;
        }

        .project-main-desc {
          font-size: 1.05rem;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 1.75rem;
        }

        /* Tabs */
        .project-tabs {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 0.5rem;
        }

        .tab-btn {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-muted);
          padding: 0.45rem 0.85rem;
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }

        .tab-btn:hover {
          color: #ffffff;
        }

        .tab-btn.active {
          color: #ffffff;
          background: rgba(139, 92, 246, 0.2);
          border: 1px solid rgba(139, 92, 246, 0.4);
        }

        .tab-pane-content {
          margin-bottom: 1.75rem;
        }

        .fade-in {
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .problem-solution-box {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding: 1.25rem;
          background: rgba(0, 0, 0, 0.3);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.06);
          margin-bottom: 1.25rem;
        }

        .ps-row {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          font-size: 0.9rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .ps-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ps-icon.red {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
        }

        .ps-icon.green {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
        }

        .project-points-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .project-points-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.925rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .text-cyan {
          color: #38bdf8;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .arch-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .arch-micro-card {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
        }

        .arch-num {
          font-family: var(--font-mono);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--accent-purple);
        }

        .arch-micro-card h5 {
          font-size: 0.95rem;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }

        .arch-micro-card p {
          font-size: 0.825rem;
          color: var(--text-secondary);
        }

        .project-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .project-tag-pill {
          padding: 0.35rem 0.8rem;
          border-radius: var(--radius-full);
          font-size: 0.785rem;
          font-family: var(--font-mono);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #94a3b8;
        }

        .project-action-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .edit-tip-pill {
          font-size: 0.785rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          border: 1px dashed rgba(255, 255, 255, 0.15);
        }

        /* Schematic Diagram Visual */
        .schematic-board {
          background: #090c1e;
          border: 1px solid rgba(139, 92, 246, 0.25);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.55);
        }

        .schematic-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .window-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .schematic-title {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .schematic-canvas {
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .schematic-node {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.15rem 1.5rem;
          border-radius: var(--radius-md);
          background: rgba(16, 22, 51, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .schematic-node.active {
          border-color: rgba(56, 189, 248, 0.45);
          box-shadow: 0 0 25px rgba(56, 189, 248, 0.2);
          background: rgba(18, 27, 66, 0.95);
        }

        .node-icon-wrap {
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

        .node-station .node-icon-wrap {
          background: rgba(56, 189, 248, 0.15);
          color: #38bdf8;
          border-color: rgba(56, 189, 248, 0.35);
        }

        .node-text {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .node-label {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
        }

        .node-sub {
          font-size: 0.785rem;
          color: var(--text-muted);
        }

        .node-status {
          font-size: 0.725rem;
          font-family: var(--font-mono);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-full);
          font-weight: 600;
        }

        .node-status.live {
          background: rgba(99, 102, 241, 0.15);
          color: #818cf8;
        }

        .node-status.ready {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
        }

        .node-status.secure {
          background: rgba(168, 85, 247, 0.15);
          color: #c084fc;
        }

        .flow-line.vertical {
          width: 2px;
          height: 32px;
          background: linear-gradient(to bottom, #38bdf8, #8b5cf6);
          position: relative;
          overflow: hidden;
        }

        .flow-pulse {
          position: absolute;
          width: 100%;
          height: 12px;
          background: #ffffff;
          box-shadow: 0 0 10px #ffffff;
          animation: flowDown 1.8s infinite linear;
        }

        @keyframes flowDown {
          0% { top: -12px; }
          100% { top: 32px; }
        }

        .schematic-footer {
          display: flex;
          justify-content: space-between;
          padding: 1.15rem 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .spec-metric {
          display: flex;
          flex-direction: column;
        }

        .metric-label {
          font-size: 0.725rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .metric-val {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
        }

        .metric-val.text-blue {
          color: var(--accent-blue);
        }

        /* Upcoming Projects Card */
        .upcoming-projects-card {
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          border-radius: var(--radius-lg);
          flex-wrap: wrap;
        }

        .upcoming-header {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          max-width: 750px;
        }

        .upcoming-header h4 {
          font-size: 1.15rem;
          color: #ffffff;
          margin-bottom: 0.35rem;
        }

        .upcoming-header p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .showcase-content-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .project-showcase-card {
            padding: 1.5rem;
          }
          .upcoming-projects-card {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
