import React from 'react';
import { Cpu, Rocket, Layers, Award, Terminal, UserCheck } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: <Cpu size={24} />,
      title: 'AI & Automation First',
      description: 'Integrating LLM agents, RAG workflows, and custom computer vision pipelines directly into production products.'
    },
    {
      icon: <Rocket size={24} />,
      title: 'Sub-Second Performance',
      description: 'Engineered with composite indexing, Redis caching, and optimized frontend bundles for lightning-fast loads.'
    },
    {
      icon: <Layers size={24} />,
      title: 'Modern Architecture',
      description: 'Modular React, Next.js, SwiftUI, NestJS, and FastAPI backends built to scale effortlessly with your userbase.'
    },
    {
      icon: <Award size={24} />,
      title: 'Production Precision',
      description: 'Zero placeholder compromise. Rigorous testing, role-based access control, and complete deployment pipelines.'
    }
  ];

  return (
    <section id="about" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-container">
        <div className="section-header">
          <div className="eyebrow">About Muhammad Aosja</div>
          <h2>Where AI Innovation Meets <span className="text-gradient">Production Code</span>.</h2>
          <p>
            Bridging the gap between complex artificial intelligence research and intuitive, high-converting digital products.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 0.85fr',
            gap: '40px',
            marginBottom: '60px',
          }}
          className="about-grid"
        >
          {/* Main Story */}
          <div className="glass-card" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Terminal style={{ color: 'var(--accent-emerald)' }} size={26} />
              Hi, I'm Muhammad Aosja
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px', fontSize: '1.05rem' }}>
              I'm <b>Muhammad Aosja</b>, an <b>Agentic AI & Full-Stack Engineer</b> passionate about the intersection of computer vision, mobile development, and scalable web architectures.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '28px', fontSize: '1.05rem' }}>
              My experience spans engineering live energy intelligence platforms handling 19M+ row datasets down to sub-second latencies, agricultural UAV drone vision systems, and autonomous RAG chatbots. I love turning bold ideas into products people use.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {['AI Agents & RAG', 'Full-Stack React & Next.js', 'SwiftUI Mobile Apps', 'FastAPI & Node Backends', 'Supabase & Redis'].map((badge, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-light)',
                    color: '#fff',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Profile Card */}
          <div className="glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '24px', color: 'var(--accent-cyan)' }}>
                Developer Overview
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Name</span>
                  <span style={{ color: '#fff', fontWeight: 700 }}>Muhammad Aosja</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Primary Role</span>
                  <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>Agentic AI & Full Stack</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Degree Focus</span>
                  <span style={{ color: '#fff', fontWeight: 700 }}>BS Computer Science</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Availability</span>
                  <span style={{ color: 'var(--accent-amber)', fontWeight: 700 }}>Open for Opportunities</span>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '32px',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <UserCheck size={28} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Dedicated to writing clean, maintainable, and high-performance production code.
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
          className="pillars-grid"
        >
          {pillars.map((pillar, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '28px' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-emerald)',
                  marginBottom: '20px',
                }}
              >
                {pillar.icon}
              </div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>{pillar.title}</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .pillars-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
