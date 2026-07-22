import React, { useState } from 'react';
import { Sparkles, ArrowRight, Eye, Layers, Bot, Zap, Package, MessageSquare } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', name: 'All Featured Projects' },
    { id: 'ai', name: 'AI & RAG Agents' },
    { id: 'vision', name: 'Computer Vision' },
    { id: 'fullstack', name: 'Full-Stack Platforms' },
    { id: 'automation', name: 'Automation & Systems' }
  ];

  const projects = [
    {
      id: 'rag_chatbot',
      category: 'ai',
      tag: 'AI · RAG Suite',
      icon: <Bot size={24} />,
      title: 'Leo Agent RAG Chatbot Suite',
      description: 'Multi-model AI support assistant with retrieval-augmented generation, per-user data isolation, document/URL ingestion, and Supabase auth with 10 free LLMs.',
      fullDescription: 'Leo Agent is an enterprise-grade retrieval-augmented generation engine built with LangChain, Next.js, and FastAPI. It supports instant PDF, TXT, and web URL vector ingestion into Supabase PGVector, allowing users to query custom knowledge bases with sub-second context retrieval across 10 free LLMs (Groq, Llama-3, Cohere, Mistral, and Google Gemini).',
      highlights: [
        { label: 'Supported Models', value: '10 LLMs Integrated' },
        { label: 'Vector Index', value: 'Supabase PGVector' },
        { label: 'Security', value: 'Per-User Context Isolation' }
      ],
      tech: ['Next.js', 'FastAPI', 'LangChain', 'Supabase', 'PGVector', 'Embeddings']
    },
    {
      id: 'drone_vision',
      category: 'vision',
      tag: 'FYP · Computer Vision',
      icon: <Eye size={24} />,
      title: 'AI UAV Agriculture & Drone Vision',
      description: 'Final year research project: computer vision models for pest detection, water stress analysis & water theft detection from UAV aerial imagery using Lucas-Kanade optical flow.',
      fullDescription: 'An end-to-end aerial computer vision solution engineered for autonomous UAV agricultural monitoring. Uses custom CNN architectures trained on high-resolution drone multispectral imagery to detect crop pest infestations, pinpoint irrigation water leakage, and calculate soil moisture stress index with an intuitive iOS SwiftUI client interface.',
      highlights: [
        { label: 'Computer Vision', value: 'CNN + Optical Flow' },
        { label: 'Mobile Client', value: 'SwiftUI Native iOS' },
        { label: 'Detection Accuracy', value: '98.4% Precision' }
      ],
      tech: ['TensorFlow', 'OpenCV', 'CNN', 'SwiftUI', 'Python', 'Lucas-Kanade']
    },
    {
      id: 'energy_oeda',
      category: 'fullstack',
      tag: 'Full-Stack · Intelligence',
      icon: <Zap size={24} />,
      title: 'Energy AI Intelligence Platform (OEDA)',
      description: '12-page energy market analytics platform serving live European spot, gas & merit order analytics over 19M row time series tables with Redis caching.',
      fullDescription: 'OEDA is an enterprise energy intelligence platform built for real-time European spot market visualization. It handles over 19,000,000 time series rows in MySQL, utilizing advanced composite indexing and Redis in-memory caching to slash complex analytics query latencies from 56 seconds down to 0.012 seconds.',
      highlights: [
        { label: 'Query Optimization', value: '56s ➔ 0.012s' },
        { label: 'Dataset Volume', value: '19M+ Rows' },
        { label: 'Platform Scope', value: '12 Live Analytics Pages' }
      ],
      tech: ['Next.js', 'TypeScript', 'FastAPI', 'MySQL', 'Redis', 'ECharts']
    },
    {
      id: 'warehouse_wms',
      category: 'fullstack',
      tag: 'Full-Stack · Enterprise',
      icon: <Package size={24} />,
      title: 'Enterprise Warehouse Management System',
      description: 'Full stack cargo tracking & inventory management with role-based access control (Admin / Staff / Customer), intake workflow, and PDF report generator.',
      fullDescription: 'A complete inventory logistics solution streamlining cargo intake, package tracking, and stock movement. Features multi-role JWT security, automated PDF delivery note generation, and real-time status notifications for warehouse staff and clients.',
      highlights: [
        { label: 'Role Access', value: 'Admin / Staff / Client' },
        { label: 'Document Engine', value: 'PDF Auto-Generation' },
        { label: 'Tech Stack', value: 'Node.js + React' }
      ],
      tech: ['React.js', 'Node.js', 'Express', 'MySQL', 'JWT', 'PDFkit']
    },
    {
      id: 'whatsapp_automation',
      category: 'automation',
      tag: 'Automation · Scraping',
      icon: <Layers size={24} />,
      title: 'WhatsApp Automation & Web Scraper Bot',
      description: 'Automated customer messaging & workflow bot built with n8n and Python, integrated with web-scraping pipelines and a React + NestJS dashboard.',
      fullDescription: 'Automated messaging engine connecting n8n workflow triggers with Python scraping bots to extract market prices, process client leads, and broadcast immediate WhatsApp alerts to sales teams with high deliverability.',
      highlights: [
        { label: 'Workflow Engine', value: 'n8n Webhooks' },
        { label: 'Messaging API', value: 'WhatsApp Integration' },
        { label: 'Dashboard', value: 'React + NestJS' }
      ],
      tech: ['n8n', 'Python', 'NestJS', 'Supabase', 'Web Scraping']
    },
    {
      id: 'csharp_chat',
      category: 'automation',
      tag: 'Systems · Real-Time',
      icon: <MessageSquare size={24} />,
      title: 'C# Socket Client-Server & OS Tracker',
      description: 'Real-time multi-threaded chat application with TCP sockets, plus an OS algorithms tracker visualizing CPU process scheduling in Java.',
      fullDescription: 'Low-level systems architecture demonstrating asynchronous TCP socket communication across multiple concurrent desktop clients, paired with a visual CPU scheduling simulation tool (FCFS, SJF, Round-Robin).',
      highlights: [
        { label: 'Networking', value: 'Asynchronous TCP Sockets' },
        { label: 'Visualizer', value: 'Java CPU Scheduling' },
        { label: 'UI Framework', value: 'WinForms & Swing' }
      ],
      tech: ['C#', 'Java', 'Sockets', 'WinForms', 'Multi-Threading']
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-container">
        <div className="section-header">
          <div className="eyebrow">Portfolio Showcase</div>
          <h2>Featured Case <span className="text-gradient">Studies</span>.</h2>
          <p>
            Explore our real-world digital products, AI implementations, and enterprise software systems.
          </p>
        </div>

        {/* Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '48px',
          }}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-full)',
                background: activeFilter === f.id ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                border: activeFilter === f.id ? '1px solid var(--accent-emerald)' : '1px solid var(--border-light)',
                color: activeFilter === f.id ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
          className="projects-grid"
        >
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedProject(proj)}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-emerald)',
                    }}
                  >
                    {proj.icon}
                  </div>

                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid var(--border-light)',
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    {proj.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>{proj.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {proj.description}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {proj.tech.slice(0, 4).map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '3px 10px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        color: 'var(--text-muted)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                  {proj.tech.length > 4 && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>+{proj.tech.length - 4} more</span>
                  )}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--accent-emerald)',
                  }}
                >
                  <span>Interactive Live View</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <style>{`
        @media (max-width: 960px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 650px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
