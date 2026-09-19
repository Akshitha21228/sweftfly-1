import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

// ✅ Illustration for this page — swap filename if needed
import h1bImage from '../assets/h1b.png';

/* =========================================================
   Local reveal hook
   ========================================================= */
function useReveal() {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
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
const H1B_PILLARS = [
  {
    icon: '📄',
    title: 'Documentation',
    items: [
      'I-129 form preparation',
      'Degree evaluation',
      'Experience letters',
      'Employer support docs',
    ],
  },
  {
    icon: '⚖️',
    title: 'Filing Strategy',
    items: [
      'Cap-subject filing',
      'Cap-exempt options',
      'Premium processing',
      'LCA coordination',
    ],
  },
  {
    icon: '🛡️',
    title: 'RFE Response',
    items: [
      'RFE analysis',
      'Evidence gathering',
      'Specialty occupation defense',
      'Attorney coordination',
    ],
  },
  {
    icon: '🔄',
    title: 'Transfers & Extensions',
    items: [
      'H1B transfer filing',
      'H1B extensions',
      'Amendment petitions',
      'Change of employer',
    ],
  },
  {
    icon: '👥',
    title: 'Dependents',
    items: [
      'H4 filing support',
      'H4 EAD guidance',
      'Dependent documentation',
      'Travel letters',
    ],
  },
];

const H1B_STEPS = [
  {
    num: '01',
    title: 'Consult',
    text: 'Initial review of your case — status, history, employer, and target role — to plan the right strategy.',
  },
  {
    num: '02',
    title: 'Prepare',
    text: 'Complete document checklist, degree evaluation, and evidence gathering with a dedicated coordinator.',
  },
  {
    num: '03',
    title: 'File',
    text: 'Petition drafted, reviewed by legal partners, and filed with USCIS — tracking updates at every step.',
  },
  {
    num: '04',
    title: 'Support',
    text: 'Continued assistance through approvals, RFEs, transfers, extensions, and long-term immigration goals.',
  },
];

/* =========================================================
   H1B Filing Page
   ========================================================= */
export default function H1BFilingPage() {
  const navigate = useNavigate();
  const [heroRef, heroVisible] = useReveal();
  const [pillarsRef, pillarsVisible] = useReveal();
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

        {/* HERO */}
        <section className="cp-hero" ref={heroRef}>
          <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
            <div className="cp-hero__image-frame">
              <img
                src={h1bImage}
                alt="H1B filing illustration"
                className="cp-hero__image"
                loading="eager"
              />
            </div>
          </div>

          <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
            <div className="cp-text-stack">
              <div className="cp-text-block cp-text-block--one">
                <p>
                  The H1B process is paperwork-heavy, deadline-driven, and
                  unforgiving of mistakes. Missing a document or filing window
                  can cost an entire year.
                </p>
              </div>

              <div className="cp-text-block cp-text-block--two">
                <p>
                  Sweftfly Inc provides <strong>end-to-end H1B petition
                  support</strong> — from initial strategy and documentation to
                  filing, RFE responses, transfers, and extensions.
                </p>
              </div>

              <div className="cp-text-block cp-text-block--one">
                <p>
                  We coordinate with your employer and legal team, keep every
                  deadline on track, and stay with you through approval and
                  beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* H1B PILLARS */}
        <section
          className={`cp-tech ${pillarsVisible ? 'is-visible' : ''}`}
          ref={pillarsRef}
        >
          <header className="cp-tech__head">
            <span className="cp-eyebrow">WHAT WE COVER</span>
            <h2 className="cp-tech__title">
              Complete H1B petition support.
            </h2>
            <p className="cp-tech__subtitle">
              Every stage of the process — handled by experienced coordinators
              and legal partners.
            </p>
          </header>

          <div className="cp-tech__grid">
            {H1B_PILLARS.map((pillar, i) => (
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

        {/* H1B TIMELINE */}
        <section
          className={`cp-services ${stepsVisible ? 'is-visible' : ''}`}
          ref={stepsRef}
        >
          <header className="cp-services__head">
            <span className="cp-eyebrow">THE PROCESS</span>
            <h2 className="cp-services__title">
              From consult to approval.
            </h2>
          </header>

          <div className="cp-services__timeline">
            <div className="cp-services__line" aria-hidden="true" />

            {H1B_STEPS.map((s, i) => (
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