import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  { title: "Frontend Development", desc: "Responsive, interactive web interfaces using React, JavaScript, HTML, Tailwind CSS, and Bootstrap." },
  { title: "Backend Development", desc: "APIs and server-side services using Python, FastAPI, Flask, and REST architecture." },
  { title: "Android & Mobile", desc: "Mobile applications using Java, Android, React Native, and Expo for cross-platform delivery." },
  { title: "AI & Machine Learning", desc: "Predictive analytics, AI-powered analysis, and intelligent application features with PyTorch and Scikit-learn." },
  { title: "Database & Real-Time", desc: "Application data management and real-time synchronization with Firebase, Firestore, PostgreSQL, and Supabase." },
  { title: "Location-Aware Apps", desc: "GPS tracking, geofencing, interactive maps, and location-based alerts integrated into software solutions." },
  { title: "API & Integration", desc: "Connecting applications with external services, voice automation, authentication, and weather APIs." },
  { title: "Project Execution", desc: "Modular development, testing, event coordination, and practical software delivery with usability focus." }
];

export default function About() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Fade in left side on scroll
    gsap.fromTo(leftColRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftColRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Fade in capabilities cards sequentially
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--background-secondary)',
        borderTop: '1px solid var(--border-primary)',
        borderBottom: '1px solid var(--border-primary)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '60px',
          }}
          className="about-grid"
        >
          {/* Left Column - Biography */}
          <div
            ref={leftColRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              textAlign: 'left'
            }}
          >
            <p
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
              ABOUT ME
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: 1.15,
                fontWeight: 500,
                marginBottom: '24px'
              }}
            >
              Engineer by skill.<br />
              <span className="text-gradient-purple">Problem-solver by nature.</span>
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '20px',
                fontWeight: 300
              }}
            >
              I'm Vivek Dalavi, a Computer Science and Engineering student at KIT College of Engineering, Kolhapur, with a strong foundation in software development, databases, and artificial intelligence. My experience spans full-stack web applications, cross-platform mobile apps, and AI-powered systems using React, Java, Python, Firebase, and FastAPI — including hands-on industry experience as a Web and Android Developer Intern at iGAP Technologies.
            </p>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0,
                fontWeight: 300
              }}
            >
              I believe in building technology that goes beyond functionality to deliver meaningful user experiences. My approach combines problem-solving, clean and modular development, and continuous learning. Through projects like AlzCare, GhostGrid, and CodeBrains, I explore how software engineering, real-time data, and AI can address real challenges in healthcare, infrastructure, and digital collaboration.
            </p>
          </div>

          {/* Right Column - Capabilities Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                margin: 0,
                textAlign: 'left',
                borderBottom: '1px solid var(--border-primary)',
                paddingBottom: '12px'
              }}
            >
              Core Capabilities
            </h3>
            
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '20px',
              }}
            >
              {capabilities.map((cap, idx) => (
                <div
                  key={cap.title}
                  ref={el => cardsRef.current[idx] = el}
                  className="glass-panel capability-card"
                  style={{
                    padding: '24px',
                    textAlign: 'left',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                        marginBottom: '8px'
                      }}
                    >
                      {cap.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        margin: 0,
                        fontWeight: 300
                      }}
                    >
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
        .capability-card {
          border-left: 3px solid var(--border-primary) !important;
        }
        .capability-card:hover {
          border-left-color: var(--accent-secondary) !important;
        }
      `}</style>
    </section>
  );
}
