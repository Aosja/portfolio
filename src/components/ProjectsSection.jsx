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
      tag: 'AI · RAG Assistant',
      icon: <Bot size={24} />,
      title: 'Leo Agent RAG Chatbot Suite',
      description: 'A multi-model RAG assistant that indexes user documents (PDFs, URLs, text) into Supabase PGVector and queries them using fast free LLMs via Groq and Gemini.',
      fullDescription: 'I built Leo Agent to make document-based question answering simple and fast. Users can upload PDFs, text files, or URLs; the app chunks the text, computes vector embeddings, and stores them in Supabase PGVector with isolated user workspaces. It routes queries through 10 free and high-speed LLMs (Groq Llama-3, Mistral, and Google Gemini) so users get accurate answers with cited source context.',
      highlights: [
        { label: 'Supported Models', value: '10 Fast LLMs' },
        { label: 'Vector Index', value: 'Supabase PGVector' },
        { label: 'Data Security', value: 'Per-User Context Isolation' }
      ],
      tech: ['Next.js', 'FastAPI', 'LangChain', 'Supabase', 'PGVector', 'Embeddings']
    },
    {
      id: 'drone_vision',
      category: 'vision',
      tag: 'FYP · Computer Vision',
      icon: <Eye size={24} />,
      title: 'AI UAV Agriculture & Drone Vision',
      description: 'Final Year University Project: trained computer vision models on aerial drone footage to spot crop pest infestations, detect irrigation leaks, and calculate water stress index.',
      fullDescription: 'Developed for my university Final Year Project, this aerial monitoring system helps identify crop health problems early. I trained CNN models on high-resolution drone imagery alongside Lucas-Kanade optical flow algorithms to detect pest infestations and irrigation pipe leaks. I also developed a native iOS companion app in SwiftUI so field scouts can view detection overlays in real time.',
      highlights: [
        { label: 'Vision Model', value: 'CNN + Optical Flow' },
        { label: 'Mobile Client', value: 'Native iOS (SwiftUI)' },
        { label: 'Dataset', value: 'Multispectral Aerial' }
      ],
      tech: ['TensorFlow', 'OpenCV', 'CNN', 'SwiftUI', 'Python', 'Lucas-Kanade']
    },
    {
      id: 'energy_oeda',
      category: 'fullstack',
      tag: 'Full-Stack · Analytics',
      icon: <Zap size={24} />,
      title: 'Energy Market Analytics Platform (OEDA)',
      description: 'A 12-page energy analytics platform displaying live European power and gas pricing across 19M+ time-series records, optimized using composite indexing and Redis caching.',
      fullDescription: 'OEDA tracks European electricity spot prices, gas trends, and merit order dispatch. The primary technical challenge was query speed across 19 million time-series rows. By redesigning database schemas, adding targeted composite indexes, and implementing a Redis caching layer, I reduced complex analytics query times from 56 seconds down to 12 milliseconds.',
      highlights: [
        { label: 'Query Latency', value: '56s ➔ 12ms' },
        { label: 'Dataset Size', value: '19M+ Rows' },
        { label: 'Architecture', value: '12 Analytics Dashboards' }
      ],
      tech: ['Next.js', 'TypeScript', 'FastAPI', 'MySQL', 'Redis', 'ECharts']
    },
    {
      id: 'warehouse_wms',
      category: 'fullstack',
      tag: 'Full-Stack · Web App',
      icon: <Package size={24} />,
      title: 'Enterprise Warehouse Management System',
      description: 'A full-stack logistics and inventory tracking system featuring role-based access control (Admin, Staff, Customer), package status pipelines, and automated PDF delivery notes.',
      fullDescription: 'A practical inventory system built to streamline warehouse operations. Features include package intake tracking, barcode-ready status updates, JWT role-based security, and automated PDF delivery notes and invoices generated server-side using Node.js and PDFKit.',
      highlights: [
        { label: 'Role Access', value: 'Admin, Staff, Customer' },
        { label: 'Document Export', value: 'Server-side PDF Notes' },
        { label: 'Authentication', value: 'JWT Security' }
      ],
      tech: ['React.js', 'Node.js', 'Express', 'MySQL', 'JWT', 'PDFkit']
    },
    {
      id: 'whatsapp_automation',
      category: 'automation',
      tag: 'Automation · Bot',
      icon: <Layers size={24} />,
      title: 'WhatsApp Automation & Web Scraper Bot',
      description: 'An automated price monitor and lead workflow bot that scrapes market data on schedule and sends real-time WhatsApp alerts to team members using n8n and Python.',
      fullDescription: 'A background automation workflow connecting Python web scrapers with n8n triggers. It monitors target web pages for price and inventory changes, processes incoming leads, and broadcasts instant alert notifications directly to WhatsApp channels, monitored via a React and NestJS dashboard.',
      highlights: [
        { label: 'Automation Tool', value: 'n8n Webhooks' },
        { label: 'Alert Channel', value: 'WhatsApp API' },
        { label: 'Control Panel', value: 'React + NestJS' }
      ],
      tech: ['n8n', 'Python', 'NestJS', 'Supabase', 'Web Scraping']
    },
    {
      id: 'csharp_chat',
      category: 'automation',
      tag: 'Systems · Networking',
      icon: <MessageSquare size={24} />,
      title: 'C# Socket Client-Server & OS Tracker',
      description: 'A real-time multi-threaded desktop chat app built with C# TCP sockets, alongside an interactive Java desktop visualizer for CPU scheduling algorithms.',
      fullDescription: 'Built to explore low-level systems programming and networking: the chat system handles concurrent desktop clients with asynchronous TCP sockets in C#; the Java simulation visualizes OS scheduling algorithms (FCFS, SJF, and Round Robin) with dynamic Gantt charts.',
      highlights: [
        { label: 'Protocol', value: 'Async TCP Sockets' },
        { label: 'Visualizer', value: 'CPU Scheduling in Java' },
        { label: 'Client UI', value: 'WinForms & Swing' }
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
          <div className="eyebrow">My Work</div>
          <h2>Recent <span className="text-gradient">Projects</span>.</h2>
          <p>
            A selection of real systems and applications I've built — from machine learning pipelines to complete web platforms.
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
                  <span>View Details & Demo</span>
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
