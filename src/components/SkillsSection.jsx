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
    { name: 'TensorFlow & Keras', category: 'ml', focus: 'Model Training & CNNs', badge: 'Deep Learning' },
    { name: 'LangChain & RAG', category: 'ml', focus: 'Vector Search & LLM Routing', badge: 'AI Agents' },
    { name: 'Scikit-learn', category: 'ml', focus: 'Classification & Pipelines', badge: 'ML Toolkit' },
    { name: 'CNNs & Neural Nets', category: 'ml', focus: 'Aerial & Visual Recognition', badge: 'Architecture' },
    
    // Computer Vision
    { name: 'YOLO (v8/v10)', category: 'cv', focus: 'Real-time Object Detection', badge: 'Vision' },
    { name: 'OpenCV', category: 'cv', focus: 'Image Filtering & Tracking', badge: 'Core Vision' },
    { name: 'Lucas-Kanade Optical Flow', category: 'cv', focus: 'Motion & Leak Detection', badge: 'Algorithms' },
    { name: 'Annotation & Augmentation', category: 'cv', focus: 'Drone Training Datasets', badge: 'Data Prep' },

    // Web & Mobile
    { name: 'React.js & Next.js', category: 'web', focus: 'Interactive UI & SSR', badge: 'Primary Stack' },
    { name: 'Swift & SwiftUI', category: 'web', focus: 'Native iOS Companion Apps', badge: 'Mobile' },
    { name: 'FastAPI & Python', category: 'web', focus: 'High-Performance REST APIs', badge: 'Primary Backend' },
    { name: 'NestJS & Node.js', category: 'web', focus: 'Modular Microservices', badge: 'Backend' },
    { name: 'TypeScript & JavaScript', category: 'web', focus: 'Type-Safe Web Applications', badge: 'Core Languages' },

    // Data & Infra
    { name: 'MySQL & Query Indexing', category: 'data', focus: 'Composite Indexes (19M+ Rows)', badge: 'Database' },
    { name: 'Supabase & PGVector', category: 'data', focus: 'Vector Embeddings & Auth', badge: 'Vector DB' },
    { name: 'Redis In-Memory Caching', category: 'data', focus: 'Query Caching & Speedups', badge: 'Caching' },
    { name: 'Pandas & NumPy', category: 'data', focus: 'Time-Series Data Wrangling', badge: 'Data Analysis' },

    // Tools & DevOps
    { name: 'n8n Workflows', category: 'tools', focus: 'Automated Webhooks & Bots', badge: 'Automation' },
    { name: 'Git & GitHub', category: 'tools', focus: 'Version Control & Code Reviews', badge: 'Dev Tools' },
    { name: 'Web Scraping Pipelines', category: 'tools', focus: 'Scheduled Data Extraction', badge: 'Scraping' },
    { name: 'Vercel & Cloud Deployments', category: 'tools', focus: 'Production Releases', badge: 'DevOps' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillItems
    : skillItems.filter(s => s.category === activeCategory);

  return (
    <section id="skills" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-container">
        <div className="section-header">
          <div className="eyebrow">Skills & Stack</div>
          <h2>Technologies I Work <span className="text-gradient">With</span>.</h2>
          <p>
            The programming languages, frameworks, and developer tools I use to build applications.
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
                padding: '22px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 700 }}>{sk.name}</h4>
                <span
                  style={{
                    fontSize: '0.74rem',
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

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem', borderTop: '1px solid var(--border-light)', paddingTop: '10px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Focus</span>
                <span style={{ color: 'var(--accent-emerald)', fontWeight: 500 }}>{sk.focus}</span>
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
