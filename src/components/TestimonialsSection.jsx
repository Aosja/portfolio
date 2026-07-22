import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      title: 'Head of Product',
      company: 'EZUAQ Analytics',
      quote: 'Nexus Studio completely transformed our energy intelligence backend. Reducing our 56-second database queries down to 12 milliseconds was pure engineering magic. Highly recommended!',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Marcus Vance',
      title: 'Founder & CTO',
      company: 'AgriTech Solutions',
      quote: 'The AI drone computer vision models delivered exceeded our expectations. The SwiftUI mobile integration is smooth, responsive, and ready for field deployment.',
      rating: 5,
      avatar: 'MV'
    },
    {
      name: 'David Chen',
      title: 'Operations Director',
      company: 'LogiFlow Global',
      quote: 'Our custom Warehouse Management System was built on time and within budget. The automated PDF delivery note generator and role-based auth have simplified daily operations.',
      rating: 5,
      avatar: 'DC'
    }
  ];

  return (
    <section id="testimonials" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-container">
        <div className="section-header">
          <div className="eyebrow">Client Feedback</div>
          <h2>Trusted By Innovators & <span className="text-gradient">Leaders</span>.</h2>
          <p>
            Here is what engineering managers, founders, and product leaders say about working with us.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '4px', color: 'var(--accent-amber)' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={24} style={{ color: 'rgba(255, 255, 255, 0.1)' }} />
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '24px', italic: 'true' }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent-emerald), var(--accent-cyan))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#051410',
                    fontWeight: 800,
                    fontSize: '0.9rem'
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{t.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.title} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
