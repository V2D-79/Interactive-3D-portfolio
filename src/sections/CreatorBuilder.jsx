import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    num: "01",
    title: "Full-Stack Engineering",
    desc: "Building end-to-end web applications with React frontends, Python FastAPI/Flask backends, and real-time Firebase databases — focused on performance, modularity, and clean architecture."
  },
  {
    num: "02",
    title: "AI & Machine Learning Systems",
    desc: "Designing intelligent applications powered by PyTorch, Scikit-learn, and local LLMs like Qwen2.5. Building predictive models, risk engines, and AI-integrated software for real-world impact."
  },
  {
    num: "03",
    title: "Mobile & Cross-Platform Apps",
    desc: "Developing native Android apps with Java and cross-platform solutions with React Native and Expo — including GPS geofencing, SOS alerts, real-time chat, and Firebase-backed authentication."
  },
  {
    num: "04",
    title: "Data-Driven Solutions",
    desc: "Connecting applications with external data sources, APIs, and live environmental feeds. Building dashboards, analytics systems, and automated reports to turn raw data into actionable insights."
  }
];

export default function CreatorBuilder() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
        }
      }
    );

    const cards = gridRef.current.children;
    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section
      id="creator-builder"
      ref={containerRef}
      style={{
        backgroundColor: 'var(--background-secondary)',
        borderBottom: '1px solid var(--border-primary)',
      }}
    >
      <div className="container">
        
        {/* Section Title */}
        <div
          ref={titleRef}
          style={{
            maxWidth: '800px',
            margin: '0 auto var(--space-xl)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--accent-secondary)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            PHILOSOPHY & VISION
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: 1.15,
              fontWeight: 500,
              margin: '0 0 20px'
            }}
          >
            I don't just write code.<br />
            <span className="text-gradient">I engineer solutions that matter.</span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              margin: 0,
              fontWeight: 300
            }}
          >
            My work blends software engineering, artificial intelligence, and mobile development into practical systems. I build things that solve real problems — from healthcare apps to AI-powered infrastructure tools.
          </p>
        </div>

        {/* Pillars Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="glass-panel pillar-card"
              style={{
                padding: '36px var(--space-md)',
                textAlign: 'left',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
              }}
            >
              {/* Number indicator */}
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'rgba(139, 92, 246, 0.15)',
                  lineHeight: 1,
                }}
              >
                {pillar.num}
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .pillar-card:hover {
          transform: translateY(-4px);
        }
        .pillar-card:hover h3 {
          color: var(--accent-secondary) !important;
        }
      `}</style>
    </section>
  );
}
