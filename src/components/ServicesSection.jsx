import React, { useState } from 'react';
import { Layout, Bot, Smartphone, Server, Palette, Workflow, Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function ServicesSection() {
  // Service Catalog
  const services = [
    {
      icon: <Layout size={28} />,
      title: 'Web Application Development',
      badge: 'Most Popular',
      description: 'Custom, ultra-fast web apps built with React, Next.js, and modern CSS. Full SEO optimization, glassmorphic UI, and sub-second load speeds.',
      features: ['Server-Side & Client Rendering', 'Responsive Layouts & Motion', 'State Management & APIs']
    },
    {
      icon: <Bot size={28} />,
      title: 'AI & RAG Agent Integration',
      badge: 'High Impact',
      description: 'Empower your business with custom RAG chatbots, multi-model LLM integrations, document vectorization, and automated decision engines.',
      features: ['Document Ingestion & Vector Embeddings', 'Multi-LLM Routing (Groq, OpenAI, Cohere)', 'Custom Context Isolation']
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Mobile App Development',
      badge: 'Native & Cross',
      description: 'Sleek, fluid iOS and Android mobile experiences engineered with SwiftUI and React Native for smooth animations and native hardware access.',
      features: ['SwiftUI & Native iOS Controls', 'Offline Syncing & Push Alerts', 'Camera & Hardware Vision Integration']
    },
    {
      icon: <Server size={28} />,
      title: 'High-Speed API & Backends',
      badge: 'Infrastructure',
      description: 'Robust RESTful and GraphQL backend architectures with Node.js, NestJS, and FastAPI paired with Redis caching and composite indexing.',
      features: ['Database Indexing & Micro-services', 'Redis Caching & Queue Management', 'Role-Based JWT Security']
    },
    {
      icon: <Palette size={28} />,
      title: 'UI/UX Design Systems',
      badge: 'Design System',
      description: 'Visually stunning design systems, interactive Figma wireframes, micro-interactions, dark/light modes, and modern responsive layouts.',
      features: ['Interactive Prototype Previews', 'Custom Color Tokens & Icons', 'Accessibility & Usability First']
    },
    {
      icon: <Workflow size={28} />,
      title: 'Automation & Scraping Pipelines',
      badge: 'Workflow',
      description: 'Streamline business operations using n8n workflows, WhatsApp automation bots, PDF invoice generators, and web scraping pipelines.',
      features: ['n8n & Webhook Integrations', 'Automated Scraping & Ingestion', 'PDF & Email Report Generators']
    }
  ];

  // Estimator State
  const [projectType, setProjectType] = useState('web');
  const [aiIntegration, setAiIntegration] = useState(true);
  const [complexity, setComplexity] = useState('medium');
  const [urgency, setUrgency] = useState('standard');

  // Estimator Calculation
  const calculateEstimate = () => {
    let basePrice = 800;
    let baseDays = 7;

    if (projectType === 'mobile') { basePrice = 1200; baseDays = 12; }
    if (projectType === 'fullstack') { basePrice = 1800; baseDays = 16; }
    if (projectType === 'ai_suite') { basePrice = 2200; baseDays = 18; }

    if (aiIntegration) { basePrice += 500; baseDays += 4; }

    if (complexity === 'high') { basePrice *= 1.4; baseDays *= 1.3; }
    if (complexity === 'enterprise') { basePrice *= 2.2; baseDays *= 1.8; }

    if (urgency === 'rush') { basePrice *= 1.25; baseDays *= 0.65; }

    return {
      priceMin: Math.round(basePrice),
      priceMax: Math.round(basePrice * 1.35),
      daysMin: Math.max(3, Math.round(baseDays * 0.8)),
      daysMax: Math.round(baseDays * 1.2)
    };
  };

  const estimate = calculateEstimate();

  return (
    <section id="services" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-container">
        <div className="section-header">
          <div className="eyebrow">Our Core Offerings</div>
          <h2>Specialized Engineering <span className="text-gradient">Services</span>.</h2>
          <p>
            From concept design to full production launch, we deliver end-to-end digital solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
            marginBottom: '90px',
          }}
          className="services-grid"
        >
          {services.map((srv, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-emerald)',
                    }}
                  >
                    {srv.icon}
                  </div>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-light)',
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    {srv.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{srv.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {srv.description}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
                {srv.features.map((feat, fIdx) => (
                  <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    <Check size={14} style={{ color: 'var(--accent-emerald)' }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Estimator Widget */}
        <div id="estimator" className="glass-card" style={{ padding: '48px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 40px auto' }}>
            <div className="eyebrow" style={{ background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.3)', color: 'var(--accent-amber)' }}>
              <Calculator size={16} />
              <span>Interactive Estimator</span>
            </div>
            <h3 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>Project Cost & Timeline Estimator</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Select your project parameters to get an instant estimated range for your solution.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }} className="estimator-grid">
            {/* Options Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Option 1: Project Type */}
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '10px', fontWeight: 600 }}>
                  1. Select Primary Platform
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  {[
                    { id: 'web', label: 'Web App / Website' },
                    { id: 'mobile', label: 'Mobile App (iOS/Android)' },
                    { id: 'fullstack', label: 'Full-Stack SaaS Platform' },
                    { id: 'ai_suite', label: 'AI RAG & Agent Suite' }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setProjectType(opt.id)}
                      style={{
                        padding: '12px',
                        borderRadius: 'var(--radius-sm)',
                        background: projectType === opt.id ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        border: projectType === opt.id ? '1px solid var(--accent-emerald)' : '1px solid var(--border-light)',
                        color: projectType === opt.id ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: AI Capabilities */}
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '10px', fontWeight: 600 }}>
                  2. Include Artificial Intelligence / RAG Features?
                </label>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => setAiIntegration(true)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      borderRadius: 'var(--radius-sm)',
                      background: aiIntegration ? 'rgba(139, 92, 246, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                      border: aiIntegration ? '1px solid var(--accent-violet)' : '1px solid var(--border-light)',
                      color: aiIntegration ? 'var(--accent-violet)' : 'var(--text-secondary)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    ✨ Yes (RAG, Chatbots, Vision)
                  </button>
                  <button
                    onClick={() => setAiIntegration(false)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      borderRadius: 'var(--radius-sm)',
                      background: !aiIntegration ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                      border: !aiIntegration ? '1px solid #fff' : '1px solid var(--border-light)',
                      color: !aiIntegration ? '#fff' : 'var(--text-secondary)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    No AI Features
                  </button>
                </div>
              </div>

              {/* Option 3: Scope & Complexity */}
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '10px', fontWeight: 600 }}>
                  3. Scope & Feature Scale
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { id: 'medium', label: 'Standard MVP' },
                    { id: 'high', label: 'Advanced Features' },
                    { id: 'enterprise', label: 'Enterprise Platform' }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setComplexity(opt.id)}
                      style={{
                        padding: '10px',
                        borderRadius: 'var(--radius-sm)',
                        background: complexity === opt.id ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        border: complexity === opt.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-light)',
                        color: complexity === opt.id ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Display Panel */}
            <div
              style={{
                background: 'rgba(7, 9, 14, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 'var(--radius-md)',
                padding: '36px',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
              }}
            >
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', uppercase: 'true', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Estimated Budget Range
              </div>

              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: 800, color: 'var(--accent-emerald)', marginBottom: '16px' }}>
                ${estimate.priceMin} — ${estimate.priceMax}
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Estimated Timeline
              </div>
              
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '28px' }}>
                ⏱️ {estimate.daysMin} to {estimate.daysMax} Business Days
              </div>

              <a
                href="#contact"
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}
              >
                <span>Book This Scope</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .estimator-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
