import React, { useState } from 'react';
import { X, ExternalLink, Bot, CheckCircle2, Zap, Cpu, Sparkles, Send, RefreshCw, BarChart2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Simulator States for RAG Chatbot
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hello! I am Leo Agent RAG Assistant. Ask me anything about document ingestion or retrieval context.' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);

  // Simulator States for Drone Vision
  const [visionMode, setVisionMode] = useState('pest');
  const [visionProcessing, setVisionProcessing] = useState(false);

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const query = userInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: query }]);
    setUserInput('');
    setIsSimulating(true);

    setTimeout(() => {
      let response = `Retrieved matching vector chunk [0.94 cosine similarity] for "${query}". Processing via Groq Llama-3-70b: Done.`;
      setChatMessages(prev => [...prev, { sender: 'bot', text: response }]);
      setIsSimulating(false);
    }, 900);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(5, 7, 12, 0.85)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '36px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.9)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid var(--border-light)',
            color: '#fff',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {/* Header info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(16, 185, 129, 0.15)',
              color: 'var(--accent-emerald)',
              fontSize: '0.85rem',
              fontWeight: 700
            }}
          >
            {project.tag}
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Detailed Project Architecture</span>
        </div>

        <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>{project.title}</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '28px' }}>
          {project.fullDescription || project.description}
        </p>

        {/* Key Highlights */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginBottom: '32px',
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-light)'
          }}
          className="modal-highlights"
        >
          {project.highlights?.map((h, idx) => (
            <div key={idx}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>{h.label}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>{h.value}</div>
            </div>
          ))}
        </div>

        {/* Interactive Live Demo Frame Simulator */}
        <div
          style={{
            background: 'rgba(7, 9, 14, 0.95)',
            border: '1px solid var(--border-glow)',
            borderRadius: 'var(--radius-md)',
            padding: '24px',
            marginBottom: '32px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
              <Sparkles size={16} />
              <span>Interactive Live Demo Simulator</span>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Status: Active Sandbox</span>
          </div>

          {/* RAG Chatbot Simulator */}
          {project.id === 'rag_chatbot' && (
            <div>
              <div style={{ height: '180px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px', paddingRight: '6px' }}>
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    style={{
                      alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                      background: msg.sender === 'user' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                      border: msg.sender === 'user' ? '1px solid var(--accent-emerald)' : '1px solid var(--border-light)',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      maxWidth: '80%',
                      fontSize: '0.88rem',
                      color: '#fff'
                    }}
                  >
                    {msg.text}
                  </div>
                ))}
                {isSimulating && (
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-amber)' }}>Vector Search & Processing Embedding...</div>
                )}
              </div>

              <form onSubmit={handleSendChat} style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="text"
                  placeholder="Test a question e.g. 'How does document ingestion work?'"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  style={{
                    flex: 1,
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-full)',
                    padding: '10px 18px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.88rem'
                  }}
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '10px 18px' }}>
                  <Send size={16} />
                </button>
              </form>
            </div>
          )}

          {/* UAV Vision Simulator */}
          {project.id === 'drone_vision' && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
                {['pest', 'water_stress', 'theft'].map(mode => (
                  <button
                    key={mode}
                    onClick={() => {
                      setVisionProcessing(true);
                      setVisionMode(mode);
                      setTimeout(() => setVisionProcessing(false), 500);
                    }}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-full)',
                      background: visionMode === mode ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                      border: visionMode === mode ? '1px solid var(--accent-violet)' : '1px solid var(--border-light)',
                      color: visionMode === mode ? 'var(--accent-violet)' : 'var(--text-secondary)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {mode.replace('_', ' ').toUpperCase()} DETECTION
                  </button>
                ))}
              </div>

              <div
                style={{
                  height: '160px',
                  background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(7, 9, 14, 0.9) 100%)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px dashed var(--accent-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                {visionProcessing ? (
                  <RefreshCw size={28} className="spin" style={{ color: 'var(--accent-cyan)' }} />
                ) : (
                  <>
                    <Cpu size={32} style={{ color: 'var(--accent-emerald)' }} />
                    <div style={{ color: '#fff', fontSize: '0.92rem', fontWeight: 600 }}>
                      Target Mode: <span style={{ color: 'var(--accent-cyan)' }}>{visionMode.toUpperCase()}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-amber)' }}>
                      Optical Flow Confidence Score: 98.4% | Bounding Boxes Calculated
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Energy OEDA Simulator */}
          {project.id === 'energy_oeda' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Query Latency Benchmark (19M Rows)</span>
                <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>0.012 Seconds</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '100px' }}>
                  {[40, 65, 80, 55, 95, 70, 85, 100, 60, 90].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background: 'linear-gradient(180deg, var(--accent-emerald), var(--accent-cyan))',
                        borderRadius: '4px 4px 0 0'
                      }}
                    />
                  ))}
                </div>
                <div style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                  Live Spot Electricity Price Analytics & Merit Order Distribution
                </div>
              </div>
            </div>
          )}

          {/* Default Simulator */}
          {!['rag_chatbot', 'drone_vision', 'energy_oeda'].includes(project.id) && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <BarChart2 size={32} style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }} />
              <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600 }}>Role-Based Auth & Real-Time Sync Ready</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tested with enterprise load and high concurrency.</div>
            </div>
          )}
        </div>

        {/* Tech Stack Chips */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '0.95rem', marginBottom: '12px', color: 'var(--text-muted)' }}>Technologies Used:</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button onClick={onClose} className="btn btn-secondary">
            Close View
          </button>
          <a href="#contact" onClick={onClose} className="btn btn-primary">
            <span>Inquire About Similar Project</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spin { animation: spin 1s linear infinite; }
        @media (max-width: 600px) {
          .modal-highlights { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
