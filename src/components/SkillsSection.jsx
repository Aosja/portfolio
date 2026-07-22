import React, { useState } from 'react';
import { Cpu, Eye, Code, Database, Wrench } from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Technologies' },
    { id: 'ml', name: 'Deep Learning & ML', icon: <Cpu size={16} /> },
    { id: 'cv', name: 'Computer Vision', icon: <Eye size={16} /> },
    { id: 'web', name: 'Web & Mobile', icon: <Code size={16} /> },
    { id: 'data', name: 'Data & Infra', icon: <Database size={16} /> },
    { id: 'tools', name: 'Tools & DevOps', icon: <Wrench size={16} /> }
  ];

  const skillItems = [
    // ML & AI
    { name: 'TensorFlow & Keras', category: 'ml', level: '92%', badge: 'Expert' },
    { name: 'LangChain & RAG', category: 'ml', level: '95%', badge: 'Advanced' },
    { name: 'Scikit-learn', category: 'ml', level: '88%', badge: 'Proficient' },
    { name: 'CNNs & LSTMs', category: 'ml', level: '90%', badge: 'Advanced' },
    
    // Computer Vision
    { name: 'YOLO (v8/v10)', category: 'cv', level: '94%', badge: 'Expert' },
    { name: 'OpenCV', category: 'cv', level: '92%', badge: 'Expert' },
    { name: 'Lucas-Kanade Optical Flow', category: 'cv', level: '88%', badge: 'Advanced' },
    { name: 'Image Annotation & Augmentation', category: 'cv', level: '95%', badge: 'Expert' },

    // Web & Mobile
    { name: 'React.js & Next.js', category: 'web', level: '96%', badge: 'Expert' },
    { name: 'Swift & SwiftUI', category: 'web', level: '88%', badge: 'Advanced' },
    { name: 'FastAPI & Python', category: 'web', level: '94%', badge: 'Expert' },
    { name: 'NestJS & Node.js', category: 'web', level: '90%', badge: 'Advanced' },
    { name: 'TypeScript & JavaScript', category: 'web', level: '95%', badge: 'Expert' },

    // Data & Infra
    { name: 'MySQL & Composite Indexing', category: 'data', level: '95%', badge: 'Sub-second' },
    { name: 'Supabase Vector & PGVector', category: 'data', level: '92%', badge: 'Advanced' },
    { name: 'Redis In-Memory Caching', category: 'data', level: '90%', badge: 'Advanced' },
    { name: 'Pandas & NumPy Data Analytics', category: 'data', level: '94%', badge: 'Expert' },

    // Tools & DevOps
    { name: 'n8n Workflow Automation', category: 'tools', level: '90%', badge: 'Automated' },
    { name: 'Vercel & Cloud Deployments', category: 'tools', level: '95%', badge: 'Production' },
    { name: 'Web Scraping Pipelines', category: 'tools', level: '92%', badge: 'Advanced' },
    { name: '3D Blender Visualization', category: 'tools', level: '85%', badge: 'Modeling' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillItems
    : skillItems.filter(s => s.category === activeCategory);

  return (
    <section id="skills" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-container">
        <div className="section-header">
          <div className="eyebrow">Technical Competencies</div>
          <h2>Our Technology <span className="text-gradient">Stack</span>.</h2>
          <p>
            Mastery over cutting-edge artificial intelligence frameworks, full-stack web architectures, and high-performance databases.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '48px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: 'var(--radius-full)',
                background: activeCategory === cat.id ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                border: activeCategory === cat.id ? '1px solid var(--accent-emerald)' : '1px solid var(--border-light)',
                color: activeCategory === cat.id ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skill Matrix Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
          className="skills-grid"
        >
          {filteredSkills.map((sk, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{sk.name}</h4>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(255, 255, 255, 0.06)',
                      color: 'var(--accent-cyan)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {sk.badge}
                  </span>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  <span>Proficiency</span>
                  <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>{sk.level}</span>
                </div>
                <div
                  style={{
                    height: '6px',
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: 'var(--radius-full)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: sk.level,
                      background: 'linear-gradient(90deg, var(--accent-emerald), var(--accent-cyan))',
                      borderRadius: 'var(--radius-full)',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
