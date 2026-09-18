import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

/* =========================================================
   Local reveal hook
   ========================================================= */
function useReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

/* =========================================================
   Data
   ========================================================= */
const TECH_PILLARS = [
  {
    icon: '⚛️',
    title: 'Frontend',
    items: ['React', 'Vue', 'Angular', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    icon: '🛠️',
    title: 'Backend',
    items: ['Node.js', 'Java', 'Spring Boot', 'Python', 'Django', '.NET'],
  },
  {
    icon: '☁️',
    title: 'Cloud',
    items: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform'],
  },
  {
    icon: '📊',
    title: 'Data & AI',
    items: ['SQL', 'Python', 'Machine Learning', 'Power BI', 'ETL', 'LLMs'],
  },
  {
    icon: '🚀',
    title: 'DevOps',
    items: ['CI/CD', 'Jenkins', 'GitHub Actions', 'Monitoring', 'SRE', 'Linux'],
  },
];

const TRAINING_STEPS = [
  {
    num: '01',
    title: 'Assess',
    text: 'Evaluate current skill level, goals, and target roles to build a personalized learning plan.',
  },
  {
    num: '02',
    title: 'Learn',
    text: 'Structured curriculum delivered by senior practitioners — theory grounded in real projects.',
  },
  {
    num: '03',
    title: 'Practice',
    text: 'Hands-on labs, capstone projects, and code reviews that mirror enterprise workflows.',
  },
  {
    num: '04',
    title: 'Certify',
    text: 'Interview prep, mock rounds, and certification guidance to land the next opportunity.',
  },
];

/* =========================================================
   Training Page
   ========================================================= */
export default function TrainingPage() {
  const navigate = useNavigate();
  const [heroRef, heroVisible] = useReveal();
  const [techRef, techVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();

  return (
    <main className="consultation-page">
      <div className="cp-orb cp-orb--1" aria-hidden="true" />
      <div className="cp-orb cp-orb--2" aria-hidden="true" />
      <div className="cp-orb cp-orb--3" aria-hidden="true" />
      <div className="cp-grid" aria-hidden="true" />

      <div className="cp-shell">
        <button
          className="cp-back"
          onClick={() => navigate('/services')}
          aria-label="Back to services"
        >
          <span aria-hidden="true">←</span> Back to services
        </button>

        {/* HERO — no image, just a decorative visual block */}
        <section className="cp-hero cp-hero--no-image" ref={heroRef}>
          <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
            <div className="cp-visual">
              <div className="cp-visual__icon">🎓</div>
              <div className="cp-visual__label">TRAINING</div>
              <div className="cp-visual__rings" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
            <div className="cp-text-stack">
              <div className="cp-text-block cp-text-block--one">
                <p>
                  Technology moves fast, and staying current is what keeps
                  careers moving. SwiftFly Inc's training programs are built by
                  senior engineers who've shipped real products — not just
                  classroom theory.
                </p>
              </div>

              <div className="cp-text-block cp-text-block--two">
                <p>
                  Whether you're upskilling for a promotion or switching stacks
                  entirely, we offer <strong>hands-on, project-based
                  learning</strong> across frontend, backend, cloud, data, and
                  DevOps — tailored to where you want to be next.
                </p>
              </div>

              <div className="cp-text-block cp-text-block--one">
                <p>
                  Small batches. Real code. Dedicated mentors. Interview
                  preparation. We don't just teach — we help you get hired.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TECH PILLARS */}
        <section
          className={`cp-tech ${techVisible ? 'is-visible' : ''}`}
          ref={techRef}
        >
          <header className="cp-tech__head">
            <span className="cp-eyebrow">WHAT WE TEACH</span>
            <h2 className="cp-tech__title">
              Full-spectrum training tracks.
            </h2>
            <p className="cp-tech__subtitle">
              Choose your track — or combine multiple to become a full-stack
              engineer.
            </p>
          </header>

          <div className="cp-tech__grid">
            {TECH_PILLARS.map((pillar, i) => (
              <article
                key={pillar.title}
                className="cp-tech-card"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="cp-tech-card__icon">
                  <span aria-hidden="true">{pillar.icon}</span>
                </div>
                <div className="cp-tech-card__nub" aria-hidden="true" />
                <h3 className="cp-tech-card__title">{pillar.title}</h3>
                <ul className="cp-tech-card__list">
                  {pillar.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* TRAINING TIMELINE */}
        <section
          className={`cp-services ${stepsVisible ? 'is-visible' : ''}`}
          ref={stepsRef}
        >
          <header className="cp-services__head">
            <span className="cp-eyebrow">HOW IT WORKS</span>
            <h2 className="cp-services__title">
              From first session to job offer.
            </h2>
          </header>

          <div className="cp-services__timeline">
            <div className="cp-services__line" aria-hidden="true" />

            {TRAINING_STEPS.map((s, i) => (
              <article
                key={s.num}
                className="cp-service-step"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="cp-service-step__num">{s.num}</div>
                <h3 className="cp-service-step__title">{s.title}</h3>
                <p className="cp-service-step__text">{s.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}