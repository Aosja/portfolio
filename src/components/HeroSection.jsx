import React from 'react';
import { ArrowRight, Zap, Bot, Sparkles, CheckCircle2, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '120px',
        paddingBottom: '60px',
        zIndex: 1,
      }}
    >
      <div className="section-container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 0.9fr',
            gap: '60px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Heading & CTAs */}
          <div>
            <div className="eyebrow">
              <Sparkles size={16} />
              <span>Muhammad Aosja · Software & AI Developer</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                marginBottom: '24px',
              }}
            >
              Hi, I'm <span className="text-gradient">Muhammad Aosja</span>. I build practical <span className="text-gradient-purple">AI systems</span> and modern <span className="text-gradient">web apps</span>.
            </h1>

            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '36px',
                maxWidth: '580px',
              }}
            >
              Computer Science graduate and developer passionate about solving real problems — from drone computer vision and RAG chatbots to responsive full-stack applications and fast database systems.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <a href="#projects" className="btn btn-primary btn-glow">
                <span>View My Work</span>
                <ArrowRight size={18} />
              </a>

              <a href="#estimator" className="btn btn-secondary">
                <Zap size={18} style={{ color: 'var(--accent-amber)' }} />
                <span>Estimate Project Cost</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Card Feature Showcase */}
          <div>
            <div
              className="glass-card"
              style={{
                padding: '32px',
                boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-emerald)',
                    }}
                  >
                    <Bot size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Developer Snapshot</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Core stack & active focus</p>
                  </div>
                </div>
              </div>

              {/* Code snippet / Architecture preview */}
              <div
                style={{
                  background: 'rgba(7, 9, 14, 0.9)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  marginBottom: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                </div>
                <div style={{ color: 'var(--accent-cyan)' }}>// About Me</div>
                <div style={{ color: '#fff' }}>
                  <span style={{ color: 'var(--accent-violet)' }}>const</span> developer = {'{'}
                </div>
                <div style={{ paddingLeft: '16px', color: 'var(--text-secondary)' }}>
                  name: <span style={{ color: 'var(--accent-emerald)' }}>'Muhammad Aosja'</span>,
                </div>
                <div style={{ paddingLeft: '16px', color: 'var(--text-secondary)' }}>
                  specialty: <span style={{ color: 'var(--accent-emerald)' }}>'Full Stack & Applied AI'</span>,
                </div>
                <div style={{ paddingLeft: '16px', color: 'var(--text-secondary)' }}>
                  recentMilestone: <span style={{ color: 'var(--accent-cyan)' }}>'Optimized 19M row queries (56s to 12ms)'</span>,
                </div>
                <div style={{ paddingLeft: '16px', color: 'var(--text-secondary)' }}>
                  status: <span style={{ color: 'var(--accent-amber)' }}>'Open for freelance & full-time roles'</span>
                </div>
                <div style={{ color: '#fff' }}>{'}'};</div>
              </div>

              {/* Feature bullet badges */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Hands-on experience with 19M+ row database optimization',
                  'Computer vision models trained for real-world drone imagery',
                  'Fast, responsive React & FastAPI full-stack builds',
                ].map((feature, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
