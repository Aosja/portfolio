import React from 'react';
import { Cpu, Rocket, Layers, Award, Terminal, UserCheck } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: <Cpu size={24} />,
      title: 'Applied AI & Vision',
      description: 'Building practical RAG workflows, document search, and custom CNN vision models that run reliably.'
    },
    {
      icon: <Rocket size={24} />,
      title: 'Speed & Optimization',
      description: 'Optimizing heavy database queries, caching frequent data with Redis, and keeping load times snappy.'
    },
    {
      icon: <Layers size={24} />,
      title: 'Modern Full-Stack',
      description: 'Building clean applications across React, Next.js, FastAPI, Node.js, and native mobile in SwiftUI.'
    },
    {
      icon: <Award size={24} />,
      title: 'Reliable Delivery',
      description: 'Thoughtful architecture, role-based security, clean commits, and thorough testing before deployment.'
    }
  ];

  return (
    <section id="about" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-container">
        <div className="section-header">
          <div className="eyebrow">About Me</div>
          <h2>Solving practical problems with <span className="text-gradient">clean code</span> and modern AI.</h2>
          <p>
            I enjoy building software that solves real headaches — from training computer vision models for drones to speeding up heavy database queries.
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
              I'm <b>Muhammad Aosja</b>, a software developer with a degree in <b>Computer Science</b>. I focus on full-stack web engineering, backend optimization, and applied artificial intelligence.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '28px', fontSize: '1.05rem' }}>
              My projects range from training aerial computer vision models for drone agricultural monitoring to engineering an energy market analytics platform (OEDA) where composite indexing and Redis caching slashed 19M-row query times from 56 seconds down to 12 milliseconds. I enjoy writing clean, readable code and shipping tools that people genuinely find useful.
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
                  <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>Full Stack & Applied AI</span>
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
                Focused on clean code, responsive interfaces, and shipping working software.
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
