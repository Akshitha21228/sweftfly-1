
// import React, { useEffect, useRef, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { services } from './serviceData';
// import './Services.css';

// // ✅ Import the PNG from src/assets so Vite bundles it correctly
// import consultImage from '../assets/consult.png';

// /* =========================================================
//    Lightweight reveal hook (inlined)
//    ========================================================= */
// function useReveal(options = {}) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const prefersReduced = window.matchMedia(
//       '(prefers-reduced-motion: reduce)'
//     ).matches;

//     if (prefersReduced) {
//       setIsVisible(true);
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [options]);

//   return [ref, isVisible];
// }

// /* =========================================================
//    Data
//    ========================================================= */
// const HERO_IMAGE = consultImage;

// /* ---- Technology Stack Pillars (Consulting) ---- */
// const TECH_PILLARS = [
//   {
//     icon: '💻',
//     title: 'Web Development',
//     items: [
//       'PHP',
//       'Joomla',
//       'Drupal',
//       'Wordpress',
//       'RubyOnRails',
//       'Content Management System',
//     ],
//   },
//   {
//     icon: '📱',
//     title: 'Mobile Development',
//     items: ['iOS', 'Android', 'Windows', 'Cross Mobile Development'],
//   },
//   {
//     icon: '🪟',
//     title: 'Microsoft Technologies',
//     items: ['.Net Technology', 'C#, VB, MsSQL', 'C++, VC++', 'MVC 5'],
//   },
//   {
//     icon: '✅',
//     title: 'Testing',
//     items: [
//       'Automated testing — WinRunner, LoadRunner',
//       'Silk Test and Rational Suite',
//       'SAP SEM — BPS, BCS, CPM',
//       'Quick Test Professional',
//       'Manual Testing',
//       'Quality Assurance',
//     ],
//   },
//   {
//     icon: '📊',
//     title: 'Business & System Analysts',
//     items: [
//       'Planning Phase',
//       'Modelling / Gap Analysis',
//       'Requirement Gathering / Definitions',
//     ],
//   },
// ];

// /* ---- Staffing Pillars ---- */
// const STAFFING_PILLARS = [
//   {
//     icon: '📋',
//     title: 'Contract Recruitment',
//     items: [
//       'Short-term engagements',
//       'Project-based teams',
//       'Rapid deployment',
//       'Flexible scaling',
//     ],
//   },
//   {
//     icon: '🏢',
//     title: 'Permanent Recruitment',
//     items: [
//       'Full-time placements',
//       'Direct-hire roles',
//       'Executive search',
//       'Long-term fit',
//     ],
//   },
//   {
//     icon: '🧠',
//     title: 'Screened Talent',
//     items: [
//       'Thorough profile screening',
//       'Expert technical interviews',
//       'Personal candidate vetting',
//       'Fit-based shortlists',
//     ],
//   },
//   {
//     icon: '⚙️',
//     title: 'All Technologies',
//     items: [
//       'Frontend & backend',
//       'Cloud & DevOps',
//       'Data & AI',
//       'Enterprise stacks',
//     ],
//   },
//   {
//     icon: '🚀',
//     title: 'Growth Support',
//     items: [
//       'Flexible resource deployment',
//       'Expansion-phase support',
//       'Cost optimization',
//       'Scalable engagement models',
//     ],
//   },
// ];

// /* =========================================================
//    Consultation Page
//    ========================================================= */
// function ConsultationPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [techRef, techVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button
//           className="cp-back"
//           onClick={() => navigate('/services')}
//           aria-label="Back to services"
//         >
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         {/* HERO */}
//         <section className="cp-hero" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-hero__image-frame">
//               <img
//                 src={HERO_IMAGE}
//                 alt="Consultation illustration"
//                 className="cp-hero__image"
//                 loading="eager"
//               />
//             </div>
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>
//                   SwiftFly Inc provides custom software application development
//                   services to clients across the globe to help organizations
//                   achieve their mission-critical goals. Off-the-shelf products
//                   seldom meet client needs completely, and working with SwiftFly
//                   Inc allows clients to create their own solutions in a
//                   cost-effective and efficient way.
//                 </p>
//               </div>

//               <div className="cp-text-block cp-text-block--two">
//                 <p>
//                   Choosing the right technology is key to future growth. SwiftFly
//                   Inc provides tailored solutions that leverage existing systems
//                   or introduce modern technologies to support each client's
//                   business goals.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* TECH STACK */}
//         <section
//           className={`cp-tech ${techVisible ? 'is-visible' : ''}`}
//           ref={techRef}
//         >
//           <header className="cp-tech__head">
//             <span className="cp-eyebrow">OUR EXPERTISE</span>
//             <h2 className="cp-tech__title">
//               Full-spectrum technology coverage.
//             </h2>
//             <p className="cp-tech__subtitle">
//               From web and mobile to enterprise Microsoft stacks, QA, and
//               business analysis — one team, end to end.
//             </p>
//           </header>

//           <div className="cp-tech__grid">
//             {TECH_PILLARS.map((pillar, i) => (
//               <article
//                 key={pillar.title}
//                 className="cp-tech-card"
//                 style={{ transitionDelay: `${i * 100}ms` }}
//               >
//                 <div className="cp-tech-card__icon">
//                   <span aria-hidden="true">{pillar.icon}</span>
//                 </div>
//                 <div className="cp-tech-card__nub" aria-hidden="true" />
//                 <h3 className="cp-tech-card__title">{pillar.title}</h3>
//                 <ul className="cp-tech-card__list">
//                   {pillar.items.map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    Staffing Page
//    ========================================================= */
// function StaffingPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [pillarsRef, pillarsVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button
//           className="cp-back"
//           onClick={() => navigate('/services')}
//           aria-label="Back to services"
//         >
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         {/* HERO — same layout as Consulting */}
//         <section className="cp-hero" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-hero__image-frame">
//               <img
//                 src={HERO_IMAGE}
//                 alt="Staffing illustration"
//                 className="cp-hero__image"
//                 loading="eager"
//               />
//             </div>
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>
//                   Job search always plays a crucial part in one's career, and
//                   sometimes it can be a nerve-wracking experience for many
//                   applicants. As the job market becomes more and more competitive
//                   with new advanced technologies coming into the picture, the
//                   expectations of companies increase many fold from a candidate.
//                 </p>
//               </div>

//               <div className="cp-text-block cp-text-block--two">
//                 <p>
//                   We have expertise in both Contract and Permanent Recruitment in
//                   all technologies throughout the USA. We have very closely worked
//                   with our clients to fulfill their requirements. Our database and
//                   network of candidates is undiluted — we typically know the
//                   technology resources personally because we have worked with them
//                   in the past.
//                 </p>
//               </div>

//               <div className="cp-text-block cp-text-block--one">
//                 <p>
//                   We do not just collect and deliver CVs — we thoroughly screen
//                   the profiles and our experts talk to the candidates to
//                   understand whether they fit the requirement. Once we are
//                   confident, only then do we share the CVs with our client, so
//                   that our client can save their time and cost.
//                 </p>
//               </div>

//               <div className="cp-text-block cp-text-block--two">
//                 <p>
//                   SwiftFly Inc's key strength lies in identifying and deploying
//                   flexible resources who can support our clients during their
//                   expansion and growth phase — so we can reduce and optimize the
//                   cost of engagement without compromising quality.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* STAFFING PILLARS */}
//         <section
//           className={`cp-tech ${pillarsVisible ? 'is-visible' : ''}`}
//           ref={pillarsRef}
//         >
//           <header className="cp-tech__head">
//             <span className="cp-eyebrow">OUR STAFFING</span>
//             <h2 className="cp-tech__title">
//               Talent, screened and deployed.
//             </h2>
//             <p className="cp-tech__subtitle">
//               Contract and permanent placements across every technology — with
//               personal vetting at every step.
//             </p>
//           </header>

//           <div className="cp-tech__grid">
//             {STAFFING_PILLARS.map((pillar, i) => (
//               <article
//                 key={pillar.title}
//                 className="cp-tech-card"
//                 style={{ transitionDelay: `${i * 100}ms` }}
//               >
//                 <div className="cp-tech-card__icon">
//                   <span aria-hidden="true">{pillar.icon}</span>
//                 </div>
//                 <div className="cp-tech-card__nub" aria-hidden="true" />
//                 <h3 className="cp-tech-card__title">{pillar.title}</h3>
//                 <ul className="cp-tech-card__list">
//                   {pillar.items.map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    Main Services Component
//    ========================================================= */
// export default function Services() {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const selected = services.find((s) => s.slug === slug || s.id === slug);

//   if (selected && selected.slug === 'consultation') {
//     return <ConsultationPage />;
//   }

//   if (selected && selected.slug === 'staffing') {
//     return <StaffingPage />;
//   }

//   if (selected) {
//     return (
//       <section className="services-detail">
//         <button className="back-btn" onClick={() => navigate('/services')}>
//           ← Back to services
//         </button>
//         {selected.icon && <div style={{ fontSize: '3rem' }}>{selected.icon}</div>}
//         <h1>{selected.title}</h1>
//         <p>{selected.description}</p>
//         {selected.details && <p>{selected.details}</p>}
//       </section>
//     );
//   }

//   return (
//     <section className="services">
//       <h2>Our Services</h2>
//       <div className="services-grid">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="service-card"
//             onClick={() => navigate(`/services/${service.slug || service.id}`)}
//           >
//             {service.icon && <div style={{ fontSize: '2rem' }}>{service.icon}</div>}
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//             <span>Learn more →</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import React, { useEffect, useRef, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { services } from './serviceData';
// import './Services.css';

// // ✅ Import both illustrations from src/assets
// import consultImage from '../assets/consult.png';
// import staffingImage from '../assets/staffing.png';

// /* =========================================================
//    Lightweight reveal hook (inlined)
//    ========================================================= */
// function useReveal(options = {}) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const prefersReduced = window.matchMedia(
//       '(prefers-reduced-motion: reduce)'
//     ).matches;

//     if (prefersReduced) {
//       setIsVisible(true);
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [options]);

//   return [ref, isVisible];
// }

// /* =========================================================
//    Data
//    ========================================================= */
// const TECH_PILLARS = [
//   {
//     icon: '💻',
//     title: 'Web Development',
//     items: [
//       'PHP',
//       'Joomla',
//       'Drupal',
//       'Wordpress',
//       'RubyOnRails',
//       'Content Management System',
//     ],
//   },
//   {
//     icon: '📱',
//     title: 'Mobile Development',
//     items: ['iOS', 'Android', 'Windows', 'Cross Mobile Development'],
//   },
//   {
//     icon: '🪟',
//     title: 'Microsoft Technologies',
//     items: ['.Net Technology', 'C#, VB, MsSQL', 'C++, VC++', 'MVC 5'],
//   },
//   {
//     icon: '✅',
//     title: 'Testing',
//     items: [
//       'Automated testing — WinRunner, LoadRunner',
//       'Silk Test and Rational Suite',
//       'SAP SEM — BPS, BCS, CPM',
//       'Quick Test Professional',
//       'Manual Testing',
//       'Quality Assurance',
//     ],
//   },
//   {
//     icon: '📊',
//     title: 'Business & System Analysts',
//     items: [
//       'Planning Phase',
//       'Modelling / Gap Analysis',
//       'Requirement Gathering / Definitions',
//     ],
//   },
// ];

// const STAFFING_PILLARS = [
//   {
//     icon: '📋',
//     title: 'Contract Recruitment',
//     items: [
//       'Short-term engagements',
//       'Project-based teams',
//       'Rapid deployment',
//       'Flexible scaling',
//     ],
//   },
//   {
//     icon: '🏢',
//     title: 'Permanent Recruitment',
//     items: [
//       'Full-time placements',
//       'Direct-hire roles',
//       'Executive search',
//       'Long-term fit',
//     ],
//   },
//   {
//     icon: '🧠',
//     title: 'Screened Talent',
//     items: [
//       'Thorough profile screening',
//       'Expert technical interviews',
//       'Personal candidate vetting',
//       'Fit-based shortlists',
//     ],
//   },
//   {
//     icon: '⚙️',
//     title: 'All Technologies',
//     items: [
//       'Frontend & backend',
//       'Cloud & DevOps',
//       'Data & AI',
//       'Enterprise stacks',
//     ],
//   },
//   {
//     icon: '🚀',
//     title: 'Growth Support',
//     items: [
//       'Flexible resource deployment',
//       'Expansion-phase support',
//       'Cost optimization',
//       'Scalable engagement models',
//     ],
//   },
// ];

// /* =========================================================
//    Consultation Page
//    ========================================================= */
// function ConsultationPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [techRef, techVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button
//           className="cp-back"
//           onClick={() => navigate('/services')}
//           aria-label="Back to services"
//         >
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         {/* HERO */}
//         <section className="cp-hero" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-hero__image-frame">
//               <img
//                 src={consultImage}
//                 alt="Consultation illustration"
//                 className="cp-hero__image"
//                 loading="eager"
//               />
//             </div>
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>
//                   SwiftFly Inc provides custom software application development
//                   services to clients across the globe to help organizations
//                   achieve their mission-critical goals. Off-the-shelf products
//                   seldom meet client needs completely, and working with SwiftFly
//                   Inc allows clients to create their own solutions in a
//                   cost-effective and efficient way.
//                 </p>
//               </div>

//               <div className="cp-text-block cp-text-block--two">
//                 <p>
//                   Choosing the right technology is key to future growth. SwiftFly
//                   Inc provides tailored solutions that leverage existing systems
//                   or introduce modern technologies to support each client's
//                   business goals.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* TECH STACK */}
//         <section
//           className={`cp-tech ${techVisible ? 'is-visible' : ''}`}
//           ref={techRef}
//         >
//           <header className="cp-tech__head">
//             <span className="cp-eyebrow">OUR EXPERTISE</span>
//             <h2 className="cp-tech__title">
//               Full-spectrum technology coverage.
//             </h2>
//             <p className="cp-tech__subtitle">
//               From web and mobile to enterprise Microsoft stacks, QA, and
//               business analysis — one team, end to end.
//             </p>
//           </header>

//           <div className="cp-tech__grid">
//             {TECH_PILLARS.map((pillar, i) => (
//               <article
//                 key={pillar.title}
//                 className="cp-tech-card"
//                 style={{ transitionDelay: `${i * 100}ms` }}
//               >
//                 <div className="cp-tech-card__icon">
//                   <span aria-hidden="true">{pillar.icon}</span>
//                 </div>
//                 <div className="cp-tech-card__nub" aria-hidden="true" />
//                 <h3 className="cp-tech-card__title">{pillar.title}</h3>
//                 <ul className="cp-tech-card__list">
//                   {pillar.items.map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    Staffing Page
//    ========================================================= */
// function StaffingPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [pillarsRef, pillarsVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button
//           className="cp-back"
//           onClick={() => navigate('/services')}
//           aria-label="Back to services"
//         >
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         {/* HERO — Staffing with 3 staggered text blocks */}
//         <section className="cp-hero" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-hero__image-frame">
//               <img
//                 src={staffingImage}
//                 alt="Staffing illustration"
//                 className="cp-hero__image"
//                 loading="eager"
//               />
//             </div>
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               {/* BLOCK 1 — top-left */}
//               <div className="cp-text-block cp-text-block--one">
//                 <p>
//                   Job search always plays a crucial part in one's career, and
//                   sometimes it can be a nerve-wracking experience for many
//                   applicants. As the job market becomes more and more competitive
//                   with new advanced technologies coming into the picture, the
//                   expectations of companies increase many fold from a candidate.
//                 </p>
//               </div>

//               {/* BLOCK 2 — offset right, styled as a soft glass card */}
//               <div className="cp-text-block cp-text-block--two">
//                 <p>
//                   We have expertise in both{' '}
//                   <strong>Contract and Permanent Recruitment</strong> in all
//                   technologies throughout the USA. We have very closely worked
//                   with our clients to fulfill their requirements. Our database
//                   and network of candidates is undiluted — we typically know the
//                   technology resources personally because we have worked with
//                   them in the past.
//                 </p>
//               </div>

//               {/* BLOCK 3 — offset left again */}
//               {/* <div className="cp-text-block cp-text-block--one">
//                 <p>
//                   We do not just collect and deliver CVs — we thoroughly screen
//                   the profiles and our experts talk to the candidates to
//                   understand whether they fit the requirement. Once we are
//                   confident, only then do we share the CVs with our client so
//                   that our client can save their time and cost.
//                 </p>
//                 <p>
//                   SwiftFly Inc's key strength lies in identifying and deploying{' '}
//                   <strong>flexible resources</strong> who can support clients
//                   during their expansion and growth phase — so we can reduce and
//                   optimize the cost of engagement without compromising quality.
//                 </p>
//               </div> */}
//             </div>
//           </div>
//         </section>

//         {/* STAFFING PILLARS */}
//         <section
//           className={`cp-tech ${pillarsVisible ? 'is-visible' : ''}`}
//           ref={pillarsRef}
//         >
//           <header className="cp-tech__head">
//             <span className="cp-eyebrow">OUR STAFFING</span>
//             <h2 className="cp-tech__title">
//               Talent, screened and deployed.
//             </h2>
//             <p className="cp-tech__subtitle">
//               Contract and permanent placements across every technology — with
//               personal vetting at every step.
//             </p>
//           </header>

//           <div className="cp-tech__grid">
//             {STAFFING_PILLARS.map((pillar, i) => (
//               <article
//                 key={pillar.title}
//                 className="cp-tech-card"
//                 style={{ transitionDelay: `${i * 100}ms` }}
//               >
//                 <div className="cp-tech-card__icon">
//                   <span aria-hidden="true">{pillar.icon}</span>
//                 </div>
//                 <div className="cp-tech-card__nub" aria-hidden="true" />
//                 <h3 className="cp-tech-card__title">{pillar.title}</h3>
//                 <ul className="cp-tech-card__list">
//                   {pillar.items.map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    Main Services Component
//    ========================================================= */
// export default function Services() {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const selected = services.find((s) => s.slug === slug || s.id === slug);

//   if (selected && selected.slug === 'consultation') {
//     return <ConsultationPage />;
//   }

//   if (selected && selected.slug === 'staffing') {
//     return <StaffingPage />;
//   }

//   if (selected) {
//     return (
//       <section className="services-detail">
//         <button className="back-btn" onClick={() => navigate('/services')}>
//           ← Back to services
//         </button>
//         {selected.icon && <div style={{ fontSize: '3rem' }}>{selected.icon}</div>}
//         <h1>{selected.title}</h1>
//         <p>{selected.description}</p>
//         {selected.details && <p>{selected.details}</p>}
//       </section>
//     );
//   }

//   return (
//     <section className="services">
//       <h2>Our Services</h2>
//       <div className="services-grid">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="service-card"
//             onClick={() => navigate(`/services/${service.slug || service.id}`)}
//           >
//             {service.icon && <div style={{ fontSize: '2rem' }}>{service.icon}</div>}
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//             <span>Learn more →</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import React, { useEffect, useRef, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { services } from './serviceData';
// import './Services.css';

// // ✅ Import both illustrations from src/assets
// import consultImage from '../assets/consult.png';
// import staffingImage from '../assets/staffing.png';

// /* =========================================================
//    Lightweight reveal hook (inlined)
//    ========================================================= */
// function useReveal(options = {}) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const prefersReduced = window.matchMedia(
//       '(prefers-reduced-motion: reduce)'
//     ).matches;

//     if (prefersReduced) {
//       setIsVisible(true);
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [options]);

//   return [ref, isVisible];
// }

// /* =========================================================
//    Data
//    ========================================================= */
// const TECH_PILLARS = [
//   {
//     icon: '💻',
//     title: 'Web Development',
//     items: [
//       'PHP',
//       'Joomla',
//       'Drupal',
//       'Wordpress',
//       'RubyOnRails',
//       'Content Management System',
//     ],
//   },
//   {
//     icon: '📱',
//     title: 'Mobile Development',
//     items: ['iOS', 'Android', 'Windows', 'Cross Mobile Development'],
//   },
//   {
//     icon: '🪟',
//     title: 'Microsoft Technologies',
//     items: ['.Net Technology', 'C#, VB, MsSQL', 'C++, VC++', 'MVC 5'],
//   },
//   {
//     icon: '✅',
//     title: 'Testing',
//     items: [
//       'Automated testing — WinRunner, LoadRunner',
//       'Silk Test and Rational Suite',
//       'SAP SEM — BPS, BCS, CPM',
//       'Quick Test Professional',
//       'Manual Testing',
//       'Quality Assurance',
//     ],
//   },
//   {
//     icon: '📊',
//     title: 'Business & System Analysts',
//     items: [
//       'Planning Phase',
//       'Modelling / Gap Analysis',
//       'Requirement Gathering / Definitions',
//     ],
//   },
// ];

// /* ---- Staffing Models (fan-style section) ---- */
// const STAFFING_MODELS = [
//   {
//     num: '01',
//     title: 'Bulk Hiring',
//     text: 'Bulk hiring as per client business needs — rapidly scale your workforce across multiple roles, locations, and technologies without compromising on quality or speed.',
//     icon: '🎯',
//   },
//   {
//     num: '02',
//     title: 'Resource Sourcing',
//     text: 'Source and deploy the right set of resources required for the project — pre-vetted engineers matched precisely to your tech stack, timelines, and team dynamics.',
//     icon: '🧩',
//   },
//   {
//     num: '03',
//     title: 'Pipeline',
//     text: 'Maintain a continuous resource pipeline — always-ready bench of qualified candidates so you never wait weeks to fill a critical role or kick off a new project.',
//     icon: '📈',
//   },
//   {
//     num: '04',
//     title: 'Contract to Hire',
//     text: 'Option for clients to convert contract resources to full-time employment if required — try before you hire, with a smooth transition at any point in the engagement.',
//     icon: '🔄',
//   },
//   {
//     num: '05',
//     title: '100% Compliant',
//     text: 'Fully statutory-compliant engagements — taxes, benefits, insurance, and labor regulations handled end-to-end so your team stays focused on delivery, not paperwork.',
//     icon: '🛡️',
//   },
//   {
//     num: '06',
//     title: 'Payroll',
//     text: 'Error-free and timely salary payments — automated payroll cycles, transparent payslips, and dedicated support for every resource on your engagement.',
//     icon: '💳',
//   },
//   {
//     num: '07',
//     title: 'HR Support',
//     text: 'Dedicated HR support for every engagement — onboarding, performance reviews, issue resolution, and continuous care for the people who deliver your projects.',
//     icon: '🤝',
//   },
// ];

// /* ---- US-IT Staffing Services (timeline) ---- */
// const IT_STAFFING_SERVICES = [
//   {
//     num: '01',
//     title: 'Job Search',
//     text: 'Identify and match the right opportunities for every candidate across the US IT market.',
//   },
//   {
//     num: '02',
//     title: 'Resume Marketing',
//     text: 'Position profiles strategically — highlight strengths, tailor resumes, and reach the right recruiters.',
//   },
//   {
//     num: '03',
//     title: 'Connecting2Vendor',
//     text: 'Directly connect talent with prime vendors and end clients to shorten the hiring cycle.',
//   },
//   {
//     num: '04',
//     title: 'Hire Bench Salesperson',
//     text: 'Hire experienced bench sales professionals to keep your pipeline active and revenue-ready.',
//   },
// ];

// /* =========================================================
//    Consultation Page
//    ========================================================= */
// function ConsultationPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [techRef, techVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button
//           className="cp-back"
//           onClick={() => navigate('/services')}
//           aria-label="Back to services"
//         >
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         {/* HERO */}
//         <section className="cp-hero" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-hero__image-frame">
//               <img
//                 src={consultImage}
//                 alt="Consultation illustration"
//                 className="cp-hero__image"
//                 loading="eager"
//               />
//             </div>
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>
//                   SwiftFly Inc provides custom software application development
//                   services to clients across the globe to help organizations
//                   achieve their mission-critical goals. Off-the-shelf products
//                   seldom meet client needs completely, and working with SwiftFly
//                   Inc allows clients to create their own solutions in a
//                   cost-effective and efficient way.
//                 </p>
//               </div>

//               <div className="cp-text-block cp-text-block--two">
//                 <p>
//                   Choosing the right technology is key to future growth. SwiftFly
//                   Inc provides tailored solutions that leverage existing systems
//                   or introduce modern technologies to support each client's
//                   business goals.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* TECH STACK */}
//         <section
//           className={`cp-tech ${techVisible ? 'is-visible' : ''}`}
//           ref={techRef}
//         >
//           <header className="cp-tech__head">
//             <span className="cp-eyebrow">OUR EXPERTISE</span>
//             <h2 className="cp-tech__title">
//               Full-spectrum technology coverage.
//             </h2>
//             <p className="cp-tech__subtitle">
//               From web and mobile to enterprise Microsoft stacks, QA, and
//               business analysis — one team, end to end.
//             </p>
//           </header>

//           <div className="cp-tech__grid">
//             {TECH_PILLARS.map((pillar, i) => (
//               <article
//                 key={pillar.title}
//                 className="cp-tech-card"
//                 style={{ transitionDelay: `${i * 100}ms` }}
//               >
//                 <div className="cp-tech-card__icon">
//                   <span aria-hidden="true">{pillar.icon}</span>
//                 </div>
//                 <div className="cp-tech-card__nub" aria-hidden="true" />
//                 <h3 className="cp-tech-card__title">{pillar.title}</h3>
//                 <ul className="cp-tech-card__list">
//                   {pillar.items.map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    Staffing Page
//    ========================================================= */
// function StaffingPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [modelsRef, modelsVisible] = useReveal();
//   const [servicesRef, servicesVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button
//           className="cp-back"
//           onClick={() => navigate('/services')}
//           aria-label="Back to services"
//         >
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         {/* HERO */}
//         <section className="cp-hero" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-hero__image-frame">
//               <img
//                 src={staffingImage}
//                 alt="Staffing illustration"
//                 className="cp-hero__image"
//                 loading="eager"
//               />
//             </div>
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>
//                    SwiftFly Inc's key strength lies in identifying and deploying{' '}
//                   <strong>flexible resources</strong> who can support clients
//                   during their expansion and growth phase — so we can reduce and
//                   optimize the cost of engagement without compromising quality.
//                 </p>
//               </div>

//               <div className="cp-text-block cp-text-block--two">
//                 <p>
//                   We have expertise in both{' '}
//                   <strong>Contract and Permanent Recruitment</strong> in all
//                   technologies throughout the USA. We have very closely worked
//                   with our clients to fulfill their requirements. Our database
//                   and network of candidates is undiluted — we typically know the
//                   technology resources personally because we have worked with
//                   them in the past.
//                 </p>
//               </div>

//               {/*  */}
//             </div>
//           </div>
//         </section>

//         {/* =====================================================
//             STAFFING MODELS — fan-style angled cards
//            ===================================================== */}
//         <section
//           className={`cp-models ${modelsVisible ? 'is-visible' : ''}`}
//           ref={modelsRef}
//           aria-label="Staffing models"
//         >
//           <header className="cp-models__head">
//             <span className="cp-eyebrow">WHAT WE OFFER</span>
//             <h2 className="cp-models__title">Our Staffing Solutions.</h2>
//             <p className="cp-models__subtitle">
//               Flexible engagement models built around your growth, compliance,
//               and hiring velocity.
//             </p>
//           </header>

//           <div className="cp-models__row">
//             {STAFFING_MODELS.map((m, i) => (
//               <article
//                 key={m.num}
//                 className="cp-model"
//                 style={{ transitionDelay: `${i * 80}ms` }}
//               >
//                 <div className="cp-model__stem" aria-hidden="true" />
//                 <div className="cp-model__num">{m.num}</div>

//                 <div className="cp-model__card">
//                   <div className="cp-model__icon" aria-hidden="true">
//                     <span>{m.icon}</span>
//                   </div>
//                   <h3 className="cp-model__title">{m.title}</h3>
//                   <p className="cp-model__text">{m.text}</p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>

//         {/* =====================================================
//             US-IT STAFFING SERVICES — timeline format
//            ===================================================== */}
//         <section
//           className={`cp-services ${servicesVisible ? 'is-visible' : ''}`}
//           ref={servicesRef}
//           aria-label="US-IT staffing services"
//         >
//           <header className="cp-services__head">
//             <span className="cp-eyebrow">OUR SERVICES</span>
//             <h2 className="cp-services__title">
//               Our wide area of US-IT Staffing services.
//             </h2>
//           </header>

//           <div className="cp-services__timeline">
//             {/* Horizontal connecting line */}
//             <div className="cp-services__line" aria-hidden="true" />

//             {IT_STAFFING_SERVICES.map((s, i) => (
//               <article
//                 key={s.num}
//                 className="cp-service-step"
//                 style={{ transitionDelay: `${i * 120}ms` }}
//               >
//                 <div className="cp-service-step__num">{s.num}</div>
//                 <h3 className="cp-service-step__title">{s.title}</h3>
//                 <p className="cp-service-step__text">{s.text}</p>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    Main Services Component
//    ========================================================= */
// export default function Services() {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const selected = services.find((s) => s.slug === slug || s.id === slug);

//   if (selected && selected.slug === 'consultation') {
//     return <ConsultationPage />;
//   }

//   if (selected && selected.slug === 'staffing') {
//     return <StaffingPage />;
//   }

//   if (selected) {
//     return (
//       <section className="services-detail">
//         <button className="back-btn" onClick={() => navigate('/services')}>
//           ← Back to services
//         </button>
//         {selected.icon && <div style={{ fontSize: '3rem' }}>{selected.icon}</div>}
//         <h1>{selected.title}</h1>
//         <p>{selected.description}</p>
//         {selected.details && <p>{selected.details}</p>}
//       </section>
//     );
//   }

//   return (
//     <section className="services">
//       <h2>Our Services</h2>
//       <div className="services-grid">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="service-card"
//             onClick={() => navigate(`/services/${service.slug || service.id}`)}
//           >
//             {service.icon && <div style={{ fontSize: '2rem' }}>{service.icon}</div>}
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//             <span>Learn more →</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import React, { useEffect, useRef, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { services } from './serviceData';
// import './Services.css';

// // ✅ Import both illustrations from src/assets
// import consultImage from '../assets/consult.png';
// import staffingImage from '../assets/staffing.png';

// /* =========================================================
//    Lightweight reveal hook (inlined)
//    ========================================================= */
// function useReveal(options = {}) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const prefersReduced = window.matchMedia(
//       '(prefers-reduced-motion: reduce)'
//     ).matches;

//     if (prefersReduced) {
//       setIsVisible(true);
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [options]);

//   return [ref, isVisible];
// }

// /* =========================================================
//    Data
//    ========================================================= */
// const TECH_PILLARS = [
//   {
//     icon: '💻',
//     title: 'Web Development',
//     items: [
//       'PHP',
//       'Joomla',
//       'Drupal',
//       'Wordpress',
//       'RubyOnRails',
//       'Content Management System',
//     ],
//   },
//   {
//     icon: '📱',
//     title: 'Mobile Development',
//     items: ['iOS', 'Android', 'Windows', 'Cross Mobile Development'],
//   },
//   {
//     icon: '🪟',
//     title: 'Microsoft Technologies',
//     items: ['.Net Technology', 'C#, VB, MsSQL', 'C++, VC++', 'MVC 5'],
//   },
//   {
//     icon: '✅',
//     title: 'Testing',
//     items: [
//       'Automated testing — WinRunner, LoadRunner',
//       'Silk Test and Rational Suite',
//       'SAP SEM — BPS, BCS, CPM',
//       'Quick Test Professional',
//       'Manual Testing',
//       'Quality Assurance',
//     ],
//   },
//   {
//     icon: '📊',
//     title: 'Business & System Analysts',
//     items: [
//       'Planning Phase',
//       'Modelling / Gap Analysis',
//       'Requirement Gathering / Definitions',
//     ],
//   },
// ];

// /* ---- Staffing Models (fan-style section) ---- */
// const STAFFING_MODELS = [
//   {
//     num: '01',
//     title: 'Bulk Hiring',
//     text: 'Bulk hiring as per client business needs — rapidly scale your workforce across multiple roles, locations, and technologies without compromising on quality or speed.',
//     icon: '🎯',
//   },
//   {
//     num: '02',
//     title: 'Resource Sourcing',
//     text: 'Source and deploy the right set of resources required for the project — pre-vetted engineers matched precisely to your tech stack, timelines, and team dynamics.',
//     icon: '🧩',
//   },
//   {
//     num: '03',
//     title: 'Pipeline',
//     text: 'Maintain a continuous resource pipeline — always-ready bench of qualified candidates so you never wait weeks to fill a critical role or kick off a new project.',
//     icon: '📈',
//   },
//   {
//     num: '04',
//     title: 'Contract to Hire',
//     text: 'Option for clients to convert contract resources to full-time employment if required — try before you hire, with a smooth transition at any point in the engagement.',
//     icon: '🔄',
//   },
//   {
//     num: '05',
//     title: '100% Compliant',
//     text: 'Fully statutory-compliant engagements — taxes, benefits, insurance, and labor regulations handled end-to-end so your team stays focused on delivery, not paperwork.',
//     icon: '🛡️',
//   },
//   {
//     num: '06',
//     title: 'Payroll',
//     text: 'Error-free and timely salary payments — automated payroll cycles, transparent payslips, and dedicated support for every resource on your engagement.',
//     icon: '💳',
//   },
//   {
//     num: '07',
//     title: 'HR Support',
//     text: 'Dedicated HR support for every engagement — onboarding, performance reviews, issue resolution, and continuous care for the people who deliver your projects.',
//     icon: '🤝',
//   },
// ];

// /* ---- US-IT Staffing Services (timeline) ---- */
// const IT_STAFFING_SERVICES = [
//   {
//     num: '01',
//     title: 'Job Search',
//     text: 'Identify and match the right opportunities for every candidate across the US IT market.',
//   },
//   {
//     num: '02',
//     title: 'Resume Marketing',
//     text: 'Position profiles strategically — highlight strengths, tailor resumes, and reach the right recruiters.',
//   },
//   {
//     num: '03',
//     title: 'Connecting2Vendor',
//     text: 'Directly connect talent with prime vendors and end clients to shorten the hiring cycle.',
//   },
//   {
//     num: '04',
//     title: 'Hire Bench Salesperson',
//     text: 'Hire experienced bench sales professionals to keep your pipeline active and revenue-ready.',
//   },
// ];

// /* =========================================================
//    Consultation Page
//    ========================================================= */
// function ConsultationPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [techRef, techVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button
//           className="cp-back"
//           onClick={() => navigate('/services')}
//           aria-label="Back to services"
//         >
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         {/* HERO */}
//         <section className="cp-hero" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-hero__image-frame">
//               <img
//                 src={consultImage}
//                 alt="Consultation illustration"
//                 className="cp-hero__image"
//                 loading="eager"
//               />
//             </div>
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>
//                   SwiftFly Inc provides custom software application development
//                   services to clients across the globe to help organizations
//                   achieve their mission-critical goals. Off-the-shelf products
//                   seldom meet client needs completely, and working with SwiftFly
//                   Inc allows clients to create their own solutions in a
//                   cost-effective and efficient way.
//                 </p>
//               </div>

//               <div className="cp-text-block cp-text-block--two">
//                 <p>
//                   Choosing the right technology is key to future growth. SwiftFly
//                   Inc provides tailored solutions that leverage existing systems
//                   or introduce modern technologies to support each client's
//                   business goals.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* TECH STACK */}
//         <section
//           className={`cp-tech ${techVisible ? 'is-visible' : ''}`}
//           ref={techRef}
//         >
//           <header className="cp-tech__head">
//             <span className="cp-eyebrow">OUR EXPERTISE</span>
//             <h2 className="cp-tech__title">
//               Full-spectrum technology coverage.
//             </h2>
//             <p className="cp-tech__subtitle">
//               From web and mobile to enterprise Microsoft stacks, QA, and
//               business analysis — one team, end to end.
//             </p>
//           </header>

//           <div className="cp-tech__grid">
//             {TECH_PILLARS.map((pillar, i) => (
//               <article
//                 key={pillar.title}
//                 className="cp-tech-card"
//                 style={{ transitionDelay: `${i * 100}ms` }}
//               >
//                 <div className="cp-tech-card__icon">
//                   <span aria-hidden="true">{pillar.icon}</span>
//                 </div>
//                 <div className="cp-tech-card__nub" aria-hidden="true" />
//                 <h3 className="cp-tech-card__title">{pillar.title}</h3>
//                 <ul className="cp-tech-card__list">
//                   {pillar.items.map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    Staffing Page
//    ========================================================= */
// function StaffingPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [modelsRef, modelsVisible] = useReveal();
//   const [servicesRef, servicesVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button
//           className="cp-back"
//           onClick={() => navigate('/services')}
//           aria-label="Back to services"
//         >
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         {/* HERO */}
//         <section className="cp-hero" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-hero__image-frame">
//               <img
//                 src={staffingImage}
//                 alt="Staffing illustration"
//                 className="cp-hero__image"
//                 loading="eager"
//               />
//             </div>
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>
//                   Job search always plays a crucial part in one's career, and
//                   sometimes it can be a nerve-wracking experience for many
//                   applicants. As the job market becomes more and more competitive
//                   with new advanced technologies coming into the picture, the
//                   expectations of companies increase many fold from a candidate.
//                 </p>
//               </div>

//               <div className="cp-text-block cp-text-block--two">
//                 <p>
//                   We have expertise in both{' '}
//                   <strong>Contract and Permanent Recruitment</strong> in all
//                   technologies throughout the USA. We have very closely worked
//                   with our clients to fulfill their requirements. Our database
//                   and network of candidates is undiluted — we typically know the
//                   technology resources personally because we have worked with
//                   them in the past.
//                 </p>
//               </div>

//               <div className="cp-text-block cp-text-block--one">
//                 <p>
//                   We do not just collect and deliver CVs — we thoroughly screen
//                   the profiles and our experts talk to the candidates to
//                   understand whether they fit the requirement. Once we are
//                   confident, only then do we share the CVs with our client so
//                   that our client can save their time and cost.
//                 </p>
//                 <p>
//                   SwiftFly Inc's key strength lies in identifying and deploying{' '}
//                   <strong>flexible resources</strong> who can support clients
//                   during their expansion and growth phase — so we can reduce and
//                   optimize the cost of engagement without compromising quality.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =====================================================
//             STAFFING MODELS — fan-style angled cards
//            ===================================================== */}
//         <section
//           className={`cp-models ${modelsVisible ? 'is-visible' : ''}`}
//           ref={modelsRef}
//           aria-label="Staffing models"
//         >
//           <header className="cp-models__head">
//             <span className="cp-eyebrow">WHAT WE OFFER</span>
//             <h2 className="cp-models__title">Our Staffing Solutions.</h2>
//             <p className="cp-models__subtitle">
//               Flexible engagement models built around your growth, compliance,
//               and hiring velocity.
//             </p>
//           </header>

//           <div className="cp-models__row">
//             {STAFFING_MODELS.map((m, i) => (
//               <article
//                 key={m.num}
//                 className="cp-model"
//                 style={{ transitionDelay: `${i * 80}ms` }}
//               >
//                 <div className="cp-model__stem" aria-hidden="true" />
//                 <div className="cp-model__num">{m.num}</div>

//                 <div className="cp-model__card">
//                   <div className="cp-model__icon" aria-hidden="true">
//                     <span>{m.icon}</span>
//                   </div>
//                   <h3 className="cp-model__title">{m.title}</h3>
//                   <p className="cp-model__text">{m.text}</p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>

//         {/* =====================================================
//             US-IT STAFFING SERVICES — timeline format
//            ===================================================== */}
//         <section
//           className={`cp-services ${servicesVisible ? 'is-visible' : ''}`}
//           ref={servicesRef}
//           aria-label="US-IT staffing services"
//         >
//           <header className="cp-services__head">
//             <span className="cp-eyebrow">OUR SERVICES</span>
//             <h2 className="cp-services__title">
//               Our wide area of US-IT Staffing services.
//             </h2>
//           </header>

//           <div className="cp-services__timeline">
//             {/* Horizontal connecting line */}
//             <div className="cp-services__line" aria-hidden="true" />

//             {IT_STAFFING_SERVICES.map((s, i) => (
//               <article
//                 key={s.num}
//                 className="cp-service-step"
//                 style={{ transitionDelay: `${i * 120}ms` }}
//               >
//                 <div className="cp-service-step__num">{s.num}</div>
//                 <h3 className="cp-service-step__title">{s.title}</h3>
//                 <p className="cp-service-step__text">{s.text}</p>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    Main Services Component
//    ========================================================= */
// export default function Services() {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const selected = services.find((s) => s.slug === slug || s.id === slug);

//   if (selected && selected.slug === 'consultation') {
//     return <ConsultationPage />;
//   }

//   if (selected && selected.slug === 'staffing') {
//     return <StaffingPage />;
//   }

//   if (selected) {
//     return (
//       <section className="services-detail">
//         <button className="back-btn" onClick={() => navigate('/services')}>
//           ← Back to services
//         </button>
//         {selected.icon && <div style={{ fontSize: '3rem' }}>{selected.icon}</div>}
//         <h1>{selected.title}</h1>
//         <p>{selected.description}</p>
//         {selected.details && <p>{selected.details}</p>}
//       </section>
//     );
//   }

//   return (
//     <section className="services">
//       <h2>Our Services</h2>
//       <div className="services-grid">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="service-card"
//             onClick={() => navigate(`/services/${service.slug || service.id}`)}
//           >
//             {service.icon && <div style={{ fontSize: '2rem' }}>{service.icon}</div>}
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//             <span>Learn more →</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import React, { useEffect, useRef, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { services } from './serviceData';
// import './Services.css';

// // ✅ Existing images
// import consultImage from '../assets/consult.png';
// import staffingImage from '../assets/staffing.png';

// /* =========================================================
//    Shared reveal hook
//    ========================================================= */
// function useReveal(options = {}) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const prefersReduced = window.matchMedia(
//       '(prefers-reduced-motion: reduce)'
//     ).matches;

//     if (prefersReduced) {
//       setIsVisible(true);
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [options]);

//   return [ref, isVisible];
// }

// /* =========================================================
//    Data
//    ========================================================= */
// const TECH_PILLARS = [
//   { icon: '💻', title: 'Web Development', items: ['PHP', 'Joomla', 'Drupal', 'Wordpress', 'RubyOnRails', 'Content Management System'] },
//   { icon: '📱', title: 'Mobile Development', items: ['iOS', 'Android', 'Windows', 'Cross Mobile Development'] },
//   { icon: '🪟', title: 'Microsoft Technologies', items: ['.Net Technology', 'C#, VB, MsSQL', 'C++, VC++', 'MVC 5'] },
//   { icon: '✅', title: 'Testing', items: ['Automated testing — WinRunner, LoadRunner', 'Silk Test and Rational Suite', 'SAP SEM — BPS, BCS, CPM', 'Quick Test Professional', 'Manual Testing', 'Quality Assurance'] },
//   { icon: '📊', title: 'Business & System Analysts', items: ['Planning Phase', 'Modelling / Gap Analysis', 'Requirement Gathering / Definitions'] },
// ];

// const STAFFING_MODELS = [
//   { num: '01', title: 'Bulk Hiring', text: 'Bulk hiring as per client business needs — rapidly scale your workforce across multiple roles, locations, and technologies without compromising on quality or speed.', icon: '🎯' },
//   { num: '02', title: 'Resource Sourcing', text: 'Source and deploy the right set of resources required for the project — pre-vetted engineers matched precisely to your tech stack, timelines, and team dynamics.', icon: '🧩' },
//   { num: '03', title: 'Pipeline', text: 'Maintain a continuous resource pipeline — always-ready bench of qualified candidates so you never wait weeks to fill a critical role or kick off a new project.', icon: '📈' },
//   { num: '04', title: 'Contract to Hire', text: 'Option for clients to convert contract resources to full-time employment if required — try before you hire, with a smooth transition at any point in the engagement.', icon: '🔄' },
//   { num: '05', title: '100% Compliant', text: 'Fully statutory-compliant engagements — taxes, benefits, insurance, and labor regulations handled end-to-end so your team stays focused on delivery, not paperwork.', icon: '🛡️' },
//   { num: '06', title: 'Payroll', text: 'Error-free and timely salary payments — automated payroll cycles, transparent payslips, and dedicated support for every resource on your engagement.', icon: '💳' },
//   { num: '07', title: 'HR Support', text: 'Dedicated HR support for every engagement — onboarding, performance reviews, issue resolution, and continuous care for the people who deliver your projects.', icon: '🤝' },
// ];

// const IT_STAFFING_SERVICES = [
//   { num: '01', title: 'Job Search', text: 'Identify and match the right opportunities for every candidate across the US IT market.' },
//   { num: '02', title: 'Resume Marketing', text: 'Position profiles strategically — highlight strengths, tailor resumes, and reach the right recruiters.' },
//   { num: '03', title: 'Connecting2Vendor', text: 'Directly connect talent with prime vendors and end clients to shorten the hiring cycle.' },
//   { num: '04', title: 'Hire Bench Salesperson', text: 'Hire experienced bench sales professionals to keep your pipeline active and revenue-ready.' },
// ];

// /* --- Training --- */
// const TRAINING_PILLARS = [
//   { icon: '⚛️', title: 'Frontend', items: ['React', 'Vue', 'Angular', 'Next.js', 'TypeScript', 'Tailwind'] },
//   { icon: '🛠️', title: 'Backend', items: ['Node.js', 'Java', 'Spring Boot', 'Python', 'Django', '.NET'] },
//   { icon: '☁️', title: 'Cloud', items: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform'] },
//   { icon: '📊', title: 'Data & AI', items: ['SQL', 'Python', 'Machine Learning', 'Power BI', 'ETL', 'LLMs'] },
//   { icon: '🚀', title: 'DevOps', items: ['CI/CD', 'Jenkins', 'GitHub Actions', 'Monitoring', 'SRE', 'Linux'] },
// ];

// const TRAINING_STEPS = [
//   { num: '01', title: 'Assess', text: 'Evaluate current skill level, goals, and target roles to build a personalized learning plan.' },
//   { num: '02', title: 'Learn', text: 'Structured curriculum delivered by senior practitioners — theory grounded in real projects.' },
//   { num: '03', title: 'Practice', text: 'Hands-on labs, capstone projects, and code reviews that mirror enterprise workflows.' },
//   { num: '04', title: 'Certify', text: 'Interview prep, mock rounds, and certification guidance to land the next opportunity.' },
// ];

// /* --- Job Support --- */
// const SUPPORT_PILLARS = [
//   { icon: '🐞', title: 'Debugging', items: ['Live issue troubleshooting', 'Production incident support', 'Log & trace analysis', 'Root-cause walkthroughs'] },
//   { icon: '👨‍💻', title: 'Code Reviews', items: ['PR reviews with feedback', 'Design pattern guidance', 'Best-practice suggestions', 'Refactoring help'] },
//   { icon: '🚀', title: 'Deployment', items: ['CI/CD pipeline help', 'Cloud deployments', 'Environment setup', 'Rollback strategy'] },
//   { icon: '🎯', title: 'Career Guidance', items: ['Growth roadmaps', 'Skill gap analysis', 'Resume & LinkedIn review', 'Salary negotiation'] },
//   { icon: '💬', title: 'Interview Prep', items: ['Mock interviews', 'Coding round drills', 'System design prep', 'Behavioral practice'] },
// ];

// const SUPPORT_STEPS = [
//   { num: '01', title: 'Reach Out', text: 'Share your blocker — ticket, code snippet, or call — and describe the outcome you need.' },
//   { num: '02', title: 'Match', text: 'We assign a senior engineer with direct expertise in your exact stack and problem area.' },
//   { num: '03', title: 'Solve Together', text: 'Live screen-share sessions, code walkthroughs, and hands-on fixes until the issue is closed.' },
//   { num: '04', title: 'Follow-Up', text: 'Post-mortem notes, preventive tips, and continued availability for the next challenge.' },
// ];

// /* --- H1B Filing --- */
// const H1B_PILLARS = [
//   { icon: '📄', title: 'Documentation', items: ['I-129 form preparation', 'Degree evaluation', 'Experience letters', 'Employer support docs'] },
//   { icon: '⚖️', title: 'Filing Strategy', items: ['Cap-subject filing', 'Cap-exempt options', 'Premium processing', 'LCA coordination'] },
//   { icon: '🛡️', title: 'RFE Response', items: ['RFE analysis', 'Evidence gathering', 'Specialty occupation defense', 'Attorney coordination'] },
//   { icon: '🔄', title: 'Transfers & Extensions', items: ['H1B transfer filing', 'H1B extensions', 'Amendment petitions', 'Change of employer'] },
//   { icon: '👥', title: 'Dependents', items: ['H4 filing support', 'H4 EAD guidance', 'Dependent documentation', 'Travel letters'] },
// ];

// const H1B_STEPS = [
//   { num: '01', title: 'Consult', text: 'Initial review of your case — status, history, employer, and target role — to plan the right strategy.' },
//   { num: '02', title: 'Prepare', text: 'Complete document checklist, degree evaluation, and evidence gathering with a dedicated coordinator.' },
//   { num: '03', title: 'File', text: 'Petition drafted, reviewed by legal partners, and filed with USCIS — tracking updates at every step.' },
//   { num: '04', title: 'Support', text: 'Continued assistance through approvals, RFEs, transfers, extensions, and long-term immigration goals.' },
// ];

// /* =========================================================
//    Reusable hero visual block (no image)
//    ========================================================= */
// function HeroVisual({ icon, label }) {
//   return (
//     <div className="cp-visual">
//       <div className="cp-visual__icon">{icon}</div>
//       <div className="cp-visual__label">{label}</div>
//       <div className="cp-visual__rings" aria-hidden="true">
//         <span />
//         <span />
//         <span />
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    CONSULTATION PAGE
//    ========================================================= */
// function ConsultationPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [techRef, techVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button className="cp-back" onClick={() => navigate('/services')} aria-label="Back to services">
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         <section className="cp-hero" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-hero__image-frame">
//               <img src={consultImage} alt="Consultation illustration" className="cp-hero__image" loading="eager" />
//             </div>
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>SwiftFly Inc provides custom software application development services to clients across the globe to help organizations achieve their mission-critical goals. Off-the-shelf products seldom meet client needs completely, and working with SwiftFly Inc allows clients to create their own solutions in a cost-effective and efficient way.</p>
//               </div>
//               <div className="cp-text-block cp-text-block--two">
//                 <p>Choosing the right technology is key to future growth. SwiftFly Inc provides tailored solutions that leverage existing systems or introduce modern technologies to support each client's business goals.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className={`cp-tech ${techVisible ? 'is-visible' : ''}`} ref={techRef}>
//           <header className="cp-tech__head">
//             <span className="cp-eyebrow">OUR EXPERTISE</span>
//             <h2 className="cp-tech__title">Full-spectrum technology coverage.</h2>
//             <p className="cp-tech__subtitle">From web and mobile to enterprise Microsoft stacks, QA, and business analysis — one team, end to end.</p>
//           </header>

//           <div className="cp-tech__grid">
//             {TECH_PILLARS.map((pillar, i) => (
//               <article key={pillar.title} className="cp-tech-card" style={{ transitionDelay: `${i * 100}ms` }}>
//                 <div className="cp-tech-card__icon"><span aria-hidden="true">{pillar.icon}</span></div>
//                 <div className="cp-tech-card__nub" aria-hidden="true" />
//                 <h3 className="cp-tech-card__title">{pillar.title}</h3>
//                 <ul className="cp-tech-card__list">
//                   {pillar.items.map((item) => <li key={item}>{item}</li>)}
//                 </ul>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    STAFFING PAGE
//    ========================================================= */
// function StaffingPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [modelsRef, modelsVisible] = useReveal();
//   const [servicesRef, servicesVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button className="cp-back" onClick={() => navigate('/services')} aria-label="Back to services">
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         <section className="cp-hero" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-hero__image-frame">
//               <img src={staffingImage} alt="Staffing illustration" className="cp-hero__image" loading="eager" />
//             </div>
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>Job search always plays a crucial part in one's career, and sometimes it can be a nerve-wracking experience for many applicants. As the job market becomes more and more competitive with new advanced technologies coming into the picture, the expectations of companies increase many fold from a candidate.</p>
//               </div>
//               <div className="cp-text-block cp-text-block--two">
//                 <p>We have expertise in both <strong>Contract and Permanent Recruitment</strong> in all technologies throughout the USA. We have very closely worked with our clients to fulfill their requirements. Our database and network of candidates is undiluted — we typically know the technology resources personally because we have worked with them in the past.</p>
//               </div>
//               <div className="cp-text-block cp-text-block--one">
//                 <p>We do not just collect and deliver CVs — we thoroughly screen the profiles and our experts talk to the candidates to understand whether they fit the requirement. Once we are confident, only then do we share the CVs with our client so that our client can save their time and cost.</p>
//                 <p>SwiftFly Inc's key strength lies in identifying and deploying <strong>flexible resources</strong> who can support clients during their expansion and growth phase — so we can reduce and optimize the cost of engagement without compromising quality.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className={`cp-models ${modelsVisible ? 'is-visible' : ''}`} ref={modelsRef} aria-label="Staffing models">
//           <header className="cp-models__head">
//             <span className="cp-eyebrow">WHAT WE OFFER</span>
//             <h2 className="cp-models__title">Our Staffing Solutions.</h2>
//             <p className="cp-models__subtitle">Flexible engagement models built around your growth, compliance, and hiring velocity.</p>
//           </header>

//           <div className="cp-models__row">
//             {STAFFING_MODELS.map((m, i) => (
//               <article key={m.num} className="cp-model" style={{ transitionDelay: `${i * 80}ms` }}>
//                 <div className="cp-model__stem" aria-hidden="true" />
//                 <div className="cp-model__num">{m.num}</div>
//                 <div className="cp-model__card">
//                   <div className="cp-model__icon" aria-hidden="true"><span>{m.icon}</span></div>
//                   <h3 className="cp-model__title">{m.title}</h3>
//                   <p className="cp-model__text">{m.text}</p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>

//         <section className={`cp-services ${servicesVisible ? 'is-visible' : ''}`} ref={servicesRef}>
//           <header className="cp-services__head">
//             <span className="cp-eyebrow">OUR SERVICES</span>
//             <h2 className="cp-services__title">Our wide area of US-IT Staffing services.</h2>
//           </header>

//           <div className="cp-services__timeline">
//             <div className="cp-services__line" aria-hidden="true" />
//             {IT_STAFFING_SERVICES.map((s, i) => (
//               <article key={s.num} className="cp-service-step" style={{ transitionDelay: `${i * 120}ms` }}>
//                 <div className="cp-service-step__num">{s.num}</div>
//                 <h3 className="cp-service-step__title">{s.title}</h3>
//                 <p className="cp-service-step__text">{s.text}</p>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// // /* =========================================================
// //    TRAINING PAGE (no image)
// //    ========================================================= */
// function TrainingPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [pillarsRef, pillarsVisible] = useReveal();
//   const [stepsRef, stepsVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button className="cp-back" onClick={() => navigate('/services')} aria-label="Back to services">
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         <section className="cp-hero cp-hero--no-image" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <HeroVisual icon="🎓" label="TRAINING" />
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>Technology moves fast, and staying current is what keeps careers moving. SwiftFly Inc's training programs are built by senior engineers who've shipped real products — not just classroom theory.</p>
//               </div>
//               <div className="cp-text-block cp-text-block--two">
//                 <p>Whether you're upskilling for a promotion or switching stacks entirely, we offer <strong>hands-on, project-based learning</strong> across frontend, backend, cloud, data, and DevOps — tailored to where you want to be next.</p>
//               </div>
//               <div className="cp-text-block cp-text-block--one">
//                 <p>Small batches. Real code. Dedicated mentors. Interview preparation. We don't just teach — we help you get hired.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className={`cp-tech ${pillarsVisible ? 'is-visible' : ''}`} ref={pillarsRef}>
//           <header className="cp-tech__head">
//             <span className="cp-eyebrow">WHAT WE TEACH</span>
//             <h2 className="cp-tech__title">Full-spectrum training tracks.</h2>
//             <p className="cp-tech__subtitle">Choose your track — or combine multiple to become a full-stack engineer.</p>
//           </header>

//           <div className="cp-tech__grid">
//             {TRAINING_PILLARS.map((pillar, i) => (
//               <article key={pillar.title} className="cp-tech-card" style={{ transitionDelay: `${i * 100}ms` }}>
//                 <div className="cp-tech-card__icon"><span aria-hidden="true">{pillar.icon}</span></div>
//                 <div className="cp-tech-card__nub" aria-hidden="true" />
//                 <h3 className="cp-tech-card__title">{pillar.title}</h3>
//                 <ul className="cp-tech-card__list">
//                   {pillar.items.map((item) => <li key={item}>{item}</li>)}
//                 </ul>
//               </article>
//             ))}
//           </div>
//         </section>

//         <section className={`cp-services ${stepsVisible ? 'is-visible' : ''}`} ref={stepsRef}>
//           <header className="cp-services__head">
//             <span className="cp-eyebrow">HOW IT WORKS</span>
//             <h2 className="cp-services__title">From first session to job offer.</h2>
//           </header>

//           <div className="cp-services__timeline">
//             <div className="cp-services__line" aria-hidden="true" />
//             {TRAINING_STEPS.map((s, i) => (
//               <article key={s.num} className="cp-service-step" style={{ transitionDelay: `${i * 120}ms` }}>
//                 <div className="cp-service-step__num">{s.num}</div>
//                 <h3 className="cp-service-step__title">{s.title}</h3>
//                 <p className="cp-service-step__text">{s.text}</p>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    JOB SUPPORT PAGE (no image)
//    ========================================================= */
// function JobSupportPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [pillarsRef, pillarsVisible] = useReveal();
//   const [stepsRef, stepsVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button className="cp-back" onClick={() => navigate('/services')} aria-label="Back to services">
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         <section className="cp-hero cp-hero--no-image" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <HeroVisual icon="🛠️" label="JOB SUPPORT" />
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>Every engineer hits a wall sometimes — a stubborn bug, a tight deadline, a production issue that needs fixing now. That's exactly when a second pair of expert eyes matters most.</p>
//               </div>
//               <div className="cp-text-block cp-text-block--two">
//                 <p>SwiftFly Inc's <strong>Job Support</strong> connects you with senior engineers who've solved your exact problem before — across every major stack, cloud, and framework.</p>
//               </div>
//               <div className="cp-text-block cp-text-block--one">
//                 <p>Real-time help. Honest guidance. No judgment. Just solutions that keep you moving forward.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className={`cp-tech ${pillarsVisible ? 'is-visible' : ''}`} ref={pillarsRef}>
//           <header className="cp-tech__head">
//             <span className="cp-eyebrow">HOW WE HELP</span>
//             <h2 className="cp-tech__title">Support across every stage.</h2>
//             <p className="cp-tech__subtitle">From day-one debugging to career-long mentorship — we're in your corner.</p>
//           </header>

//           <div className="cp-tech__grid">
//             {SUPPORT_PILLARS.map((pillar, i) => (
//               <article key={pillar.title} className="cp-tech-card" style={{ transitionDelay: `${i * 100}ms` }}>
//                 <div className="cp-tech-card__icon"><span aria-hidden="true">{pillar.icon}</span></div>
//                 <div className="cp-tech-card__nub" aria-hidden="true" />
//                 <h3 className="cp-tech-card__title">{pillar.title}</h3>
//                 <ul className="cp-tech-card__list">
//                   {pillar.items.map((item) => <li key={item}>{item}</li>)}
//                 </ul>
//               </article>
//             ))}
//           </div>
//         </section>

//         <section className={`cp-services ${stepsVisible ? 'is-visible' : ''}`} ref={stepsRef}>
//           <header className="cp-services__head">
//             <span className="cp-eyebrow">OUR PROCESS</span>
//             <h2 className="cp-services__title">Support that fits your workflow.</h2>
//           </header>

//           <div className="cp-services__timeline">
//             <div className="cp-services__line" aria-hidden="true" />
//             {SUPPORT_STEPS.map((s, i) => (
//               <article key={s.num} className="cp-service-step" style={{ transitionDelay: `${i * 120}ms` }}>
//                 <div className="cp-service-step__num">{s.num}</div>
//                 <h3 className="cp-service-step__title">{s.title}</h3>
//                 <p className="cp-service-step__text">{s.text}</p>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    H1B FILING PAGE (no image)
//    ========================================================= */
// function H1BFilingPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [pillarsRef, pillarsVisible] = useReveal();
//   const [stepsRef, stepsVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button className="cp-back" onClick={() => navigate('/services')} aria-label="Back to services">
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         <section className="cp-hero cp-hero--no-image" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <HeroVisual icon="📄" label="H1B FILING" />
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>The H1B process is paperwork-heavy, deadline-driven, and unforgiving of mistakes. Missing a document or filing window can cost an entire year.</p>
//               </div>
//               <div className="cp-text-block cp-text-block--two">
//                 <p>SwiftFly Inc provides <strong>end-to-end H1B petition support</strong> — from initial strategy and documentation to filing, RFE responses, transfers, and extensions.</p>
//               </div>
//               <div className="cp-text-block cp-text-block--one">
//                 <p>We coordinate with your employer and legal team, keep every deadline on track, and stay with you through approval and beyond.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className={`cp-tech ${pillarsVisible ? 'is-visible' : ''}`} ref={pillarsRef}>
//           <header className="cp-tech__head">
//             <span className="cp-eyebrow">WHAT WE COVER</span>
//             <h2 className="cp-tech__title">Complete H1B petition support.</h2>
//             <p className="cp-tech__subtitle">Every stage of the process — handled by experienced coordinators and legal partners.</p>
//           </header>

//           <div className="cp-tech__grid">
//             {H1B_PILLARS.map((pillar, i) => (
//               <article key={pillar.title} className="cp-tech-card" style={{ transitionDelay: `${i * 100}ms` }}>
//                 <div className="cp-tech-card__icon"><span aria-hidden="true">{pillar.icon}</span></div>
//                 <div className="cp-tech-card__nub" aria-hidden="true" />
//                 <h3 className="cp-tech-card__title">{pillar.title}</h3>
//                 <ul className="cp-tech-card__list">
//                   {pillar.items.map((item) => <li key={item}>{item}</li>)}
//                 </ul>
//               </article>
//             ))}
//           </div>
//         </section>

//         <section className={`cp-services ${stepsVisible ? 'is-visible' : ''}`} ref={stepsRef}>
//           <header className="cp-services__head">
//             <span className="cp-eyebrow">THE PROCESS</span>
//             <h2 className="cp-services__title">From consult to approval.</h2>
//           </header>

//           <div className="cp-services__timeline">
//             <div className="cp-services__line" aria-hidden="true" />
//             {H1B_STEPS.map((s, i) => (
//               <article key={s.num} className="cp-service-step" style={{ transitionDelay: `${i * 120}ms` }}>
//                 <div className="cp-service-step__num">{s.num}</div>
//                 <h3 className="cp-service-step__title">{s.title}</h3>
//                 <p className="cp-service-step__text">{s.text}</p>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    MAIN ROUTER
//    ========================================================= */
// export default function Services() {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const selected = services.find((s) => s.slug === slug || s.id === slug);

//   // Dedicated pages
//   if (selected?.slug === 'consultation') return <ConsultationPage />;
//   if (selected?.slug === 'staffing') return <StaffingPage />;
//   if (selected?.slug === 'training') return <TrainingPage />;
//   if (selected?.slug === 'job-support') return <JobSupportPage />;
//   if (selected?.slug === 'h1b-filing') return <H1BFilingPage />;

//   // Generic service detail
//   if (selected) {
//     return (
//       <section className="services-detail">
//         <button className="back-btn" onClick={() => navigate('/services')}>
//           ← Back to services
//         </button>
//         {selected.icon && <div style={{ fontSize: '3rem' }}>{selected.icon}</div>}
//         <h1>{selected.title}</h1>
//         <p>{selected.description}</p>
//         {selected.details && <p>{selected.details}</p>}
//       </section>
//     );
//   }

//   // List view
//   return (
//     <section className="services">
//       <h2>Our Services</h2>
//       <div className="services-grid">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="service-card"
//             onClick={() => navigate(`/services/${service.slug || service.id}`)}
//           >
//             {service.icon && <div style={{ fontSize: '2rem' }}>{service.icon}</div>}
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//             <span>Learn more →</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import React, { useEffect, useRef, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { services } from './serviceData';
// import './Services.css';

// // ✅ Existing images
// import consultImage from '../assets/consult.png';
// import staffingImage from '../assets/staffing.png';
// import trainingImage from '../assets/training.png';

// /* =========================================================
//    Shared reveal hook
//    ========================================================= */
// function useReveal(options = {}) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const prefersReduced = window.matchMedia(
//       '(prefers-reduced-motion: reduce)'
//     ).matches;

//     if (prefersReduced) {
//       setIsVisible(true);
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [options]);

//   return [ref, isVisible];
// }

// /* =========================================================
//    Data
//    ========================================================= */
// const TECH_PILLARS = [
//   { icon: '💻', title: 'Web Development', items: ['PHP', 'Joomla', 'Drupal', 'Wordpress', 'RubyOnRails', 'Content Management System'] },
//   { icon: '📱', title: 'Mobile Development', items: ['iOS', 'Android', 'Windows', 'Cross Mobile Development'] },
//   { icon: '🪟', title: 'Microsoft Technologies', items: ['.Net Technology', 'C#, VB, MsSQL', 'C++, VC++', 'MVC 5'] },
//   { icon: '✅', title: 'Testing', items: ['Automated testing — WinRunner, LoadRunner', 'Silk Test and Rational Suite', 'SAP SEM — BPS, BCS, CPM', 'Quick Test Professional', 'Manual Testing', 'Quality Assurance'] },
//   { icon: '📊', title: 'Business & System Analysts', items: ['Planning Phase', 'Modelling / Gap Analysis', 'Requirement Gathering / Definitions'] },
// ];

// const STAFFING_MODELS = [
//   { num: '01', title: 'Bulk Hiring', text: 'Bulk hiring as per client business needs — rapidly scale your workforce across multiple roles, locations, and technologies without compromising on quality or speed.', icon: '🎯' },
//   { num: '02', title: 'Resource Sourcing', text: 'Source and deploy the right set of resources required for the project — pre-vetted engineers matched precisely to your tech stack, timelines, and team dynamics.', icon: '🧩' },
//   { num: '03', title: 'Pipeline', text: 'Maintain a continuous resource pipeline — always-ready bench of qualified candidates so you never wait weeks to fill a critical role or kick off a new project.', icon: '📈' },
//   { num: '04', title: 'Contract to Hire', text: 'Option for clients to convert contract resources to full-time employment if required — try before you hire, with a smooth transition at any point in the engagement.', icon: '🔄' },
//   { num: '05', title: '100% Compliant', text: 'Fully statutory-compliant engagements — taxes, benefits, insurance, and labor regulations handled end-to-end so your team stays focused on delivery, not paperwork.', icon: '🛡️' },
//   { num: '06', title: 'Payroll', text: 'Error-free and timely salary payments — automated payroll cycles, transparent payslips, and dedicated support for every resource on your engagement.', icon: '💳' },
//   { num: '07', title: 'HR Support', text: 'Dedicated HR support for every engagement — onboarding, performance reviews, issue resolution, and continuous care for the people who deliver your projects.', icon: '🤝' },
// ];

// const IT_STAFFING_SERVICES = [
//   { num: '01', title: 'Job Search', text: 'Identify and match the right opportunities for every candidate across the US IT market.' },
//   { num: '02', title: 'Resume Marketing', text: 'Position profiles strategically — highlight strengths, tailor resumes, and reach the right recruiters.' },
//   { num: '03', title: 'Connecting2Vendor', text: 'Directly connect talent with prime vendors and end clients to shorten the hiring cycle.' },
//   { num: '04', title: 'Hire Bench Salesperson', text: 'Hire experienced bench sales professionals to keep your pipeline active and revenue-ready.' },
// ];

// /* --- Training --- */
// const TRAINING_TECHNOLOGIES = [
//   {
//     icon: '🪟',
//     title: 'Microsoft Technologies',
//     items: ['.NET', 'C#', 'VB', 'ASP.NET', 'SQL Server', 'Azure'],
//   },
//   {
//     icon: '☁️',
//     title: 'Cloud Technologies',
//     items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
//   },
//   {
//     icon: '☕',
//     title: 'Java',
//     items: ['Core Java', 'Advanced Java', 'Spring Boot', 'Hibernate', 'Microservices', 'REST APIs'],
//   },
//   {
//     icon: '📱',
//     title: 'Mobile Technologies',
//     items: ['iOS', 'Android', 'React Native', 'Flutter', 'Cross Mobile Development', 'Mobile UI/UX'],
//   },
// ];

// const TRAINING_MODES = [
//   { num: '01', title: 'Online Training', text: 'Live instructor-led sessions with real-time doubt clearing, screen sharing, and remote lab access — attend from anywhere.' },
//   { num: '02', title: 'Offline Training', text: 'In-person classroom training with direct mentor interaction, hands-on labs, and peer-to-peer learning.' },
//   { num: '03', title: 'Expert Mentors', text: 'Learn from senior practitioners who have shipped production software across enterprise environments.' },
//   { num: '04', title: 'Career Support', text: 'Resume preparation, interview coaching, and placement assistance to help you land the role you want.' },
// ];

// /* --- Job Support --- */
// const SUPPORT_PILLARS = [
//   { icon: '🐞', title: 'Debugging', items: ['Live issue troubleshooting', 'Production incident support', 'Log & trace analysis', 'Root-cause walkthroughs'] },
//   { icon: '👨‍💻', title: 'Code Reviews', items: ['PR reviews with feedback', 'Design pattern guidance', 'Best-practice suggestions', 'Refactoring help'] },
//   { icon: '🚀', title: 'Deployment', items: ['CI/CD pipeline help', 'Cloud deployments', 'Environment setup', 'Rollback strategy'] },
//   { icon: '🎯', title: 'Career Guidance', items: ['Growth roadmaps', 'Skill gap analysis', 'Resume & LinkedIn review', 'Salary negotiation'] },
//   { icon: '💬', title: 'Interview Prep', items: ['Mock interviews', 'Coding round drills', 'System design prep', 'Behavioral practice'] },
// ];

// const SUPPORT_STEPS = [
//   { num: '01', title: 'Reach Out', text: 'Share your blocker — ticket, code snippet, or call — and describe the outcome you need.' },
//   { num: '02', title: 'Match', text: 'We assign a senior engineer with direct expertise in your exact stack and problem area.' },
//   { num: '03', title: 'Solve Together', text: 'Live screen-share sessions, code walkthroughs, and hands-on fixes until the issue is closed.' },
//   { num: '04', title: 'Follow-Up', text: 'Post-mortem notes, preventive tips, and continued availability for the next challenge.' },
// ];

// /* --- H1B Filing --- */
// const H1B_PILLARS = [
//   { icon: '📄', title: 'Documentation', items: ['I-129 form preparation', 'Degree evaluation', 'Experience letters', 'Employer support docs'] },
//   { icon: '⚖️', title: 'Filing Strategy', items: ['Cap-subject filing', 'Cap-exempt options', 'Premium processing', 'LCA coordination'] },
//   { icon: '🛡️', title: 'RFE Response', items: ['RFE analysis', 'Evidence gathering', 'Specialty occupation defense', 'Attorney coordination'] },
//   { icon: '🔄', title: 'Transfers & Extensions', items: ['H1B transfer filing', 'H1B extensions', 'Amendment petitions', 'Change of employer'] },
//   { icon: '👥', title: 'Dependents', items: ['H4 filing support', 'H4 EAD guidance', 'Dependent documentation', 'Travel letters'] },
// ];

// const H1B_STEPS = [
//   { num: '01', title: 'Consult', text: 'Initial review of your case — status, history, employer, and target role — to plan the right strategy.' },
//   { num: '02', title: 'Prepare', text: 'Complete document checklist, degree evaluation, and evidence gathering with a dedicated coordinator.' },
//   { num: '03', title: 'File', text: 'Petition drafted, reviewed by legal partners, and filed with USCIS — tracking updates at every step.' },
//   { num: '04', title: 'Support', text: 'Continued assistance through approvals, RFEs, transfers, extensions, and long-term immigration goals.' },
// ];

// /* =========================================================
//    Reusable hero visual block (no image) — used by Job Support & H1B
//    ========================================================= */
// function HeroVisual({ icon, label }) {
//   return (
//     <div className="cp-visual">
//       <div className="cp-visual__icon">{icon}</div>
//       <div className="cp-visual__label">{label}</div>
//       <div className="cp-visual__rings" aria-hidden="true">
//         <span />
//         <span />
//         <span />
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    CONSULTATION PAGE
//    ========================================================= */
// function ConsultationPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [techRef, techVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button className="cp-back" onClick={() => navigate('/services')} aria-label="Back to services">
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         <section className="cp-hero" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-hero__image-frame">
//               <img src={consultImage} alt="Consultation illustration" className="cp-hero__image" loading="eager" />
//             </div>
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>SwiftFly Inc provides custom software application development services to clients across the globe to help organizations achieve their mission-critical goals. Off-the-shelf products seldom meet client needs completely, and working with SwiftFly Inc allows clients to create their own solutions in a cost-effective and efficient way.</p>
//               </div>
//               <div className="cp-text-block cp-text-block--two">
//                 <p>Choosing the right technology is key to future growth. SwiftFly Inc provides tailored solutions that leverage existing systems or introduce modern technologies to support each client's business goals.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className={`cp-tech ${techVisible ? 'is-visible' : ''}`} ref={techRef}>
//           <header className="cp-tech__head">
//             <span className="cp-eyebrow">OUR EXPERTISE</span>
//             <h2 className="cp-tech__title">Full-spectrum technology coverage.</h2>
//             <p className="cp-tech__subtitle">From web and mobile to enterprise Microsoft stacks, QA, and business analysis — one team, end to end.</p>
//           </header>

//           <div className="cp-tech__grid">
//             {TECH_PILLARS.map((pillar, i) => (
//               <article key={pillar.title} className="cp-tech-card" style={{ transitionDelay: `${i * 100}ms` }}>
//                 <div className="cp-tech-card__icon"><span aria-hidden="true">{pillar.icon}</span></div>
//                 <div className="cp-tech-card__nub" aria-hidden="true" />
//                 <h3 className="cp-tech-card__title">{pillar.title}</h3>
//                 <ul className="cp-tech-card__list">
//                   {pillar.items.map((item) => <li key={item}>{item}</li>)}
//                 </ul>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    STAFFING PAGE
//    ========================================================= */
// function StaffingPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [modelsRef, modelsVisible] = useReveal();
//   const [servicesRef, servicesVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button className="cp-back" onClick={() => navigate('/services')} aria-label="Back to services">
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         <section className="cp-hero" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-hero__image-frame">
//               <img src={staffingImage} alt="Staffing illustration" className="cp-hero__image" loading="eager" />
//             </div>
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>Job search always plays a crucial part in one's career, and sometimes it can be a nerve-wracking experience for many applicants. As the job market becomes more and more competitive with new advanced technologies coming into the picture, the expectations of companies increase many fold from a candidate.</p>
//               </div>
//               <div className="cp-text-block cp-text-block--two">
//                 <p>We have expertise in both <strong>Contract and Permanent Recruitment</strong> in all technologies throughout the USA. We have very closely worked with our clients to fulfill their requirements. Our database and network of candidates is undiluted — we typically know the technology resources personally because we have worked with them in the past.</p>
//               </div>
//               <div className="cp-text-block cp-text-block--one">
//                 <p>We do not just collect and deliver CVs — we thoroughly screen the profiles and our experts talk to the candidates to understand whether they fit the requirement. Once we are confident, only then do we share the CVs with our client so that our client can save their time and cost.</p>
//                 <p>SwiftFly Inc's key strength lies in identifying and deploying <strong>flexible resources</strong> who can support clients during their expansion and growth phase — so we can reduce and optimize the cost of engagement without compromising quality.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className={`cp-models ${modelsVisible ? 'is-visible' : ''}`} ref={modelsRef} aria-label="Staffing models">
//           <header className="cp-models__head">
//             <span className="cp-eyebrow">WHAT WE OFFER</span>
//             <h2 className="cp-models__title">Our Staffing Solutions.</h2>
//             <p className="cp-models__subtitle">Flexible engagement models built around your growth, compliance, and hiring velocity.</p>
//           </header>

//           <div className="cp-models__row">
//             {STAFFING_MODELS.map((m, i) => (
//               <article key={m.num} className="cp-model" style={{ transitionDelay: `${i * 80}ms` }}>
//                 <div className="cp-model__stem" aria-hidden="true" />
//                 <div className="cp-model__num">{m.num}</div>
//                 <div className="cp-model__card">
//                   <div className="cp-model__icon" aria-hidden="true"><span>{m.icon}</span></div>
//                   <h3 className="cp-model__title">{m.title}</h3>
//                   <p className="cp-model__text">{m.text}</p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>

//         <section className={`cp-services ${servicesVisible ? 'is-visible' : ''}`} ref={servicesRef}>
//           <header className="cp-services__head">
//             <span className="cp-eyebrow">OUR SERVICES</span>
//             <h2 className="cp-services__title">Our wide area of US-IT Staffing services.</h2>
//           </header>

//           <div className="cp-services__timeline">
//             <div className="cp-services__line" aria-hidden="true" />
//             {IT_STAFFING_SERVICES.map((s, i) => (
//               <article key={s.num} className="cp-service-step" style={{ transitionDelay: `${i * 120}ms` }}>
//                 <div className="cp-service-step__num">{s.num}</div>
//                 <h3 className="cp-service-step__title">{s.title}</h3>
//                 <p className="cp-service-step__text">{s.text}</p>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    TRAINING PAGE — with training.png
//    ========================================================= */
// function TrainingPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [pillarsRef, pillarsVisible] = useReveal();
//   const [stepsRef, stepsVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button className="cp-back" onClick={() => navigate('/services')} aria-label="Back to services">
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         {/* HERO — with image */}
//         <section className="cp-hero" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-hero__image-frame">
//               <img
//                 src={trainingImage}
//                 alt="Training illustration"
//                 className="cp-hero__image"
//                 loading="eager"
//               />
//             </div>
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>
//                   SwiftFly Inc provides both <strong>online and offline
//                   training</strong> for all software technologies. Our team of
//                   experts has deep, hands-on experience teaching the technologies
//                   that enterprises actually use — not just textbook theory.
//                 </p>
//               </div>

//               <div className="cp-text-block cp-text-block--two">
//                 <p>
//                   Whether you're a fresher starting your career, a working
//                   professional upskilling for a promotion, or a team looking to
//                   grow together — we have a track built for your goals.
//                 </p>
//               </div>

//               <div className="cp-text-block cp-text-block--one">
//                 <p>
//                   Small batches. Live mentors. Real projects. Interview
//                   preparation. We don't just teach — we help you get hired.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* TECHNOLOGIES WE TRAIN */}
//         <section className={`cp-tech ${pillarsVisible ? 'is-visible' : ''}`} ref={pillarsRef}>
//           <header className="cp-tech__head">
//             <span className="cp-eyebrow">WHAT WE TEACH</span>
//             <h2 className="cp-tech__title">
//               Our team of experts assists in these technologies.
//             </h2>
//             <p className="cp-tech__subtitle">
//               Structured training programs across the technologies that power
//               modern enterprises.
//             </p>
//           </header>

//           <div className="cp-tech__grid cp-tech__grid--4">
//             {TRAINING_TECHNOLOGIES.map((pillar, i) => (
//               <article
//                 key={pillar.title}
//                 className="cp-tech-card"
//                 style={{ transitionDelay: `${i * 100}ms` }}
//               >
//                 <div className="cp-tech-card__icon">
//                   <span aria-hidden="true">{pillar.icon}</span>
//                 </div>
//                 <div className="cp-tech-card__nub" aria-hidden="true" />
//                 <h3 className="cp-tech-card__title">{pillar.title}</h3>
//                 <ul className="cp-tech-card__list">
//                   {pillar.items.map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>
//               </article>
//             ))}
//           </div>
//         </section>

//         {/* TRAINING MODES */}
//         <section className={`cp-services ${stepsVisible ? 'is-visible' : ''}`} ref={stepsRef}>
//           <header className="cp-services__head">
//             <span className="cp-eyebrow">HOW WE TRAIN</span>
//             <h2 className="cp-services__title">
//               Online, offline, and everything in between.
//             </h2>
//           </header>

//           <div className="cp-services__timeline">
//             <div className="cp-services__line" aria-hidden="true" />

//             {TRAINING_MODES.map((s, i) => (
//               <article
//                 key={s.num}
//                 className="cp-service-step"
//                 style={{ transitionDelay: `${i * 120}ms` }}
//               >
//                 <div className="cp-service-step__num">{s.num}</div>
//                 <h3 className="cp-service-step__title">{s.title}</h3>
//                 <p className="cp-service-step__text">{s.text}</p>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    JOB SUPPORT PAGE (no image)
//    ========================================================= */
// function JobSupportPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [pillarsRef, pillarsVisible] = useReveal();
//   const [stepsRef, stepsVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button className="cp-back" onClick={() => navigate('/services')} aria-label="Back to services">
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         <section className="cp-hero cp-hero--no-image" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <HeroVisual icon="🛠️" label="JOB SUPPORT" />
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>Every engineer hits a wall sometimes — a stubborn bug, a tight deadline, a production issue that needs fixing now. That's exactly when a second pair of expert eyes matters most.</p>
//               </div>
//               <div className="cp-text-block cp-text-block--two">
//                 <p>SwiftFly Inc's <strong>Job Support</strong> connects you with senior engineers who've solved your exact problem before — across every major stack, cloud, and framework.</p>
//               </div>
//               <div className="cp-text-block cp-text-block--one">
//                 <p>Real-time help. Honest guidance. No judgment. Just solutions that keep you moving forward.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className={`cp-tech ${pillarsVisible ? 'is-visible' : ''}`} ref={pillarsRef}>
//           <header className="cp-tech__head">
//             <span className="cp-eyebrow">HOW WE HELP</span>
//             <h2 className="cp-tech__title">Support across every stage.</h2>
//             <p className="cp-tech__subtitle">From day-one debugging to career-long mentorship — we're in your corner.</p>
//           </header>

//           <div className="cp-tech__grid">
//             {SUPPORT_PILLARS.map((pillar, i) => (
//               <article key={pillar.title} className="cp-tech-card" style={{ transitionDelay: `${i * 100}ms` }}>
//                 <div className="cp-tech-card__icon"><span aria-hidden="true">{pillar.icon}</span></div>
//                 <div className="cp-tech-card__nub" aria-hidden="true" />
//                 <h3 className="cp-tech-card__title">{pillar.title}</h3>
//                 <ul className="cp-tech-card__list">
//                   {pillar.items.map((item) => <li key={item}>{item}</li>)}
//                 </ul>
//               </article>
//             ))}
//           </div>
//         </section>

//         <section className={`cp-services ${stepsVisible ? 'is-visible' : ''}`} ref={stepsRef}>
//           <header className="cp-services__head">
//             <span className="cp-eyebrow">OUR PROCESS</span>
//             <h2 className="cp-services__title">Support that fits your workflow.</h2>
//           </header>

//           <div className="cp-services__timeline">
//             <div className="cp-services__line" aria-hidden="true" />
//             {SUPPORT_STEPS.map((s, i) => (
//               <article key={s.num} className="cp-service-step" style={{ transitionDelay: `${i * 120}ms` }}>
//                 <div className="cp-service-step__num">{s.num}</div>
//                 <h3 className="cp-service-step__title">{s.title}</h3>
//                 <p className="cp-service-step__text">{s.text}</p>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    H1B FILING PAGE (no image)
//    ========================================================= */
// function H1BFilingPage() {
//   const navigate = useNavigate();
//   const [heroRef, heroVisible] = useReveal();
//   const [pillarsRef, pillarsVisible] = useReveal();
//   const [stepsRef, stepsVisible] = useReveal();

//   return (
//     <main className="consultation-page">
//       <div className="cp-orb cp-orb--1" aria-hidden="true" />
//       <div className="cp-orb cp-orb--2" aria-hidden="true" />
//       <div className="cp-orb cp-orb--3" aria-hidden="true" />
//       <div className="cp-grid" aria-hidden="true" />

//       <div className="cp-shell">
//         <button className="cp-back" onClick={() => navigate('/services')} aria-label="Back to services">
//           <span aria-hidden="true">←</span> Back to services
//         </button>

//         <section className="cp-hero cp-hero--no-image" ref={heroRef}>
//           <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
//             <HeroVisual icon="📄" label="H1B FILING" />
//           </div>

//           <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
//             <div className="cp-text-stack">
//               <div className="cp-text-block cp-text-block--one">
//                 <p>The H1B process is paperwork-heavy, deadline-driven, and unforgiving of mistakes. Missing a document or filing window can cost an entire year.</p>
//               </div>
//               <div className="cp-text-block cp-text-block--two">
//                 <p>SwiftFly Inc provides <strong>end-to-end H1B petition support</strong> — from initial strategy and documentation to filing, RFE responses, transfers, and extensions.</p>
//               </div>
//               <div className="cp-text-block cp-text-block--one">
//                 <p>We coordinate with your employer and legal team, keep every deadline on track, and stay with you through approval and beyond.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className={`cp-tech ${pillarsVisible ? 'is-visible' : ''}`} ref={pillarsRef}>
//           <header className="cp-tech__head">
//             <span className="cp-eyebrow">WHAT WE COVER</span>
//             <h2 className="cp-tech__title">Complete H1B petition support.</h2>
//             <p className="cp-tech__subtitle">Every stage of the process — handled by experienced coordinators and legal partners.</p>
//           </header>

//           <div className="cp-tech__grid">
//             {H1B_PILLARS.map((pillar, i) => (
//               <article key={pillar.title} className="cp-tech-card" style={{ transitionDelay: `${i * 100}ms` }}>
//                 <div className="cp-tech-card__icon"><span aria-hidden="true">{pillar.icon}</span></div>
//                 <div className="cp-tech-card__nub" aria-hidden="true" />
//                 <h3 className="cp-tech-card__title">{pillar.title}</h3>
//                 <ul className="cp-tech-card__list">
//                   {pillar.items.map((item) => <li key={item}>{item}</li>)}
//                 </ul>
//               </article>
//             ))}
//           </div>
//         </section>

//         <section className={`cp-services ${stepsVisible ? 'is-visible' : ''}`} ref={stepsRef}>
//           <header className="cp-services__head">
//             <span className="cp-eyebrow">THE PROCESS</span>
//             <h2 className="cp-services__title">From consult to approval.</h2>
//           </header>

//           <div className="cp-services__timeline">
//             <div className="cp-services__line" aria-hidden="true" />
//             {H1B_STEPS.map((s, i) => (
//               <article key={s.num} className="cp-service-step" style={{ transitionDelay: `${i * 120}ms` }}>
//                 <div className="cp-service-step__num">{s.num}</div>
//                 <h3 className="cp-service-step__title">{s.title}</h3>
//                 <p className="cp-service-step__text">{s.text}</p>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    MAIN ROUTER
//    ========================================================= */
// export default function Services() {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const selected = services.find((s) => s.slug === slug || s.id === slug);

//   // Dedicated pages
//   if (selected?.slug === 'consultation') return <ConsultationPage />;
//   if (selected?.slug === 'staffing') return <StaffingPage />;
//   if (selected?.slug === 'training') return <TrainingPage />;
//   if (selected?.slug === 'job-support') return <JobSupportPage />;
//   if (selected?.slug === 'h1b-filing') return <H1BFilingPage />;

//   // Generic service detail
//   if (selected) {
//     return (
//       <section className="services-detail">
//         <button className="back-btn" onClick={() => navigate('/services')}>
//           ← Back to services
//         </button>
//         {selected.icon && <div style={{ fontSize: '3rem' }}>{selected.icon}</div>}
//         <h1>{selected.title}</h1>
//         <p>{selected.description}</p>
//         {selected.details && <p>{selected.details}</p>}
//       </section>
//     );
//   }

//   // List view
//   return (
//     <section className="services">
//       <h2>Our Services</h2>
//       <div className="services-grid">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="service-card"
//             onClick={() => navigate(`/services/${service.slug || service.id}`)}
//           >
//             {service.icon && <div style={{ fontSize: '2rem' }}>{service.icon}</div>}
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//             <span>Learn more →</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from './serviceData';
import './Services.css';

// ✅ Existing images
import consultImage from '../assets/consult.png';
import staffingImage from '../assets/staffing.png';
import trainingImage from '../assets/training.png';
import jobSupportImage from '../assets/jobsupport.png';
import visaImage from '../assets/visa.png';

/* =========================================================
   Shared reveal hook
   ========================================================= */
function useReveal(options = {}) {
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
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}

/* =========================================================
   Data
   ========================================================= */
const TECH_PILLARS = [
  { icon: '💻', title: 'Web Development', items: ['PHP', 'Joomla', 'Drupal', 'Wordpress', 'RubyOnRails', 'Content Management System'] },
  { icon: '📱', title: 'Mobile Development', items: ['iOS', 'Android', 'Windows', 'Cross Mobile Development'] },
  { icon: '🪟', title: 'Microsoft Technologies', items: ['.Net Technology', 'C#, VB, MsSQL', 'C++, VC++', 'MVC 5'] },
  { icon: '✅', title: 'Testing', items: ['Automated testing — WinRunner, LoadRunner', 'Silk Test and Rational Suite', 'SAP SEM — BPS, BCS, CPM', 'Quick Test Professional', 'Manual Testing', 'Quality Assurance'] },
  { icon: '📊', title: 'Business & System Analysts', items: ['Planning Phase', 'Modelling / Gap Analysis', 'Requirement Gathering / Definitions'] },
];

const STAFFING_MODELS = [
  { num: '01', title: 'Bulk Hiring', text: 'Bulk hiring as per client business needs — rapidly scale your workforce across multiple roles, locations, and technologies without compromising on quality or speed.', icon: '🎯' },
  { num: '02', title: 'Resource Sourcing', text: 'Source and deploy the right set of resources required for the project — pre-vetted engineers matched precisely to your tech stack, timelines, and team dynamics.', icon: '🧩' },
  { num: '03', title: 'Pipeline', text: 'Maintain a continuous resource pipeline — always-ready bench of qualified candidates so you never wait weeks to fill a critical role or kick off a new project.', icon: '📈' },
  { num: '04', title: 'Contract to Hire', text: 'Option for clients to convert contract resources to full-time employment if required — try before you hire, with a smooth transition at any point in the engagement.', icon: '🔄' },
  { num: '05', title: '100% Compliant', text: 'Fully statutory-compliant engagements — taxes, benefits, insurance, and labor regulations handled end-to-end so your team stays focused on delivery, not paperwork.', icon: '🛡️' },
  { num: '06', title: 'Payroll', text: 'Error-free and timely salary payments — automated payroll cycles, transparent payslips, and dedicated support for every resource on your engagement.', icon: '💳' },
  { num: '07', title: 'HR Support', text: 'Dedicated HR support for every engagement — onboarding, performance reviews, issue resolution, and continuous care for the people who deliver your projects.', icon: '🤝' },
];

const IT_STAFFING_SERVICES = [
  { num: '01', title: 'Job Search', text: 'Identify and match the right opportunities for every candidate across the US IT market.' },
  { num: '02', title: 'Resume Marketing', text: 'Position profiles strategically — highlight strengths, tailor resumes, and reach the right recruiters.' },
  { num: '03', title: 'Connecting2Vendor', text: 'Directly connect talent with prime vendors and end clients to shorten the hiring cycle.' },
  { num: '04', title: 'Hire Bench Salesperson', text: 'Hire experienced bench sales professionals to keep your pipeline active and revenue-ready.' },
];

/* --- Training --- */
const TRAINING_TECHNOLOGIES = [
  { icon: '🪟', title: 'Microsoft Technologies', items: ['.NET', 'C#', 'VB', 'ASP.NET', 'SQL Server', 'Azure'] },
  { icon: '☁️', title: 'Cloud Technologies', items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'] },
  { icon: '</>', title: 'Java', items: ['Core Java', 'Advanced Java', 'Spring Boot', 'Hibernate', 'Microservices', 'REST APIs'] },
  { icon: '📱', title: 'Mobile Technologies', items: ['iOS', 'Android', 'React Native', 'Flutter', 'Cross Mobile Development', 'Mobile UI/UX'] },
];

const TRAINING_MODES = [
  { num: '01', title: 'Online Training', text: 'Live instructor-led sessions with real-time doubt clearing, screen sharing, and remote lab access — attend from anywhere.' },
  { num: '02', title: 'Offline Training', text: 'In-person classroom training with direct mentor interaction, hands-on labs, and peer-to-peer learning.' },
  { num: '03', title: 'Expert Mentors', text: 'Learn from senior practitioners who have shipped production software across enterprise environments.' },
  { num: '04', title: 'Career Support', text: 'Resume preparation, interview coaching, and placement assistance to help you land the role you want.' },
];

/* --- Job Support --- */
const SUPPORT_PILLARS = [
  { icon: '🐞', title: 'Debugging', items: ['Live issue troubleshooting', 'Production incident support', 'Log & trace analysis', 'Root-cause walkthroughs'] },
  { icon: '👨‍💻', title: 'Code Reviews', items: ['PR reviews with feedback', 'Design pattern guidance', 'Best-practice suggestions', 'Refactoring help'] },
  { icon: '🚀', title: 'Deployment', items: ['CI/CD pipeline help', 'Cloud deployments', 'Environment setup', 'Rollback strategy'] },
  { icon: '🎯', title: 'Career Guidance', items: ['Growth roadmaps', 'Skill gap analysis', 'Resume & LinkedIn review', 'Salary negotiation'] },
  { icon: '💬', title: 'Interview Prep', items: ['Mock interviews', 'Coding round drills', 'System design prep', 'Behavioral practice'] },
];

const SUPPORT_STEPS = [
  { num: '01', title: 'Reach Out', text: 'Share your blocker — ticket, code snippet, or call — and describe the outcome you need.' },
  { num: '02', title: 'Match', text: 'We assign a senior engineer with direct expertise in your exact stack and problem area.' },
  { num: '03', title: 'Solve Together', text: 'Live screen-share sessions, code walkthroughs, and hands-on fixes until the issue is closed.' },
  { num: '04', title: 'Follow-Up', text: 'Post-mortem notes, preventive tips, and continued availability for the next challenge.' },
];

/* --- H1B Filing --- */
const H1B_PILLARS = [
  { icon: '📄', title: 'Documentation', items: ['I-129 form preparation', 'Degree evaluation', 'Experience letters', 'Employer support docs'] },
  { icon: '⚖️', title: 'Filing Strategy', items: ['Cap-subject filing', 'Cap-exempt options', 'Premium processing', 'LCA coordination'] },
  { icon: '🛡️', title: 'RFE Response', items: ['RFE analysis', 'Evidence gathering', 'Specialty occupation defense', 'Attorney coordination'] },
  { icon: '🔄', title: 'Transfers & Extensions', items: ['H1B transfer filing', 'H1B extensions', 'Amendment petitions', 'Change of employer'] },
  { icon: '👥', title: 'Dependents', items: ['H4 filing support', 'H4 EAD guidance', 'Dependent documentation', 'Travel letters'] },
];

const H1B_STEPS = [
  { num: '01', title: 'Consult', text: 'Initial review of your case — status, history, employer, and target role — to plan the right strategy.' },
  { num: '02', title: 'Prepare', text: 'Complete document checklist, degree evaluation, and evidence gathering with a dedicated coordinator.' },
  { num: '03', title: 'File', text: 'Petition drafted, reviewed by legal partners, and filed with USCIS — tracking updates at every step.' },
  { num: '04', title: 'Support', text: 'Continued assistance through approvals, RFEs, transfers, extensions, and long-term immigration goals.' },
];

/* =========================================================
   Reusable hero visual block (kept for other pages if needed)
   ========================================================= */
function HeroVisual({ icon, label }) {
  return (
    <div className="cp-visual">
      <div className="cp-visual__icon">{icon}</div>
      <div className="cp-visual__label">{label}</div>
      <div className="cp-visual__rings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

/* =========================================================
   CONSULTATION PAGE
   ========================================================= */
function ConsultationPage() {
  const navigate = useNavigate();
  const [heroRef, heroVisible] = useReveal();
  const [techRef, techVisible] = useReveal();

  return (
    <main className="consultation-page">
      <div className="cp-orb cp-orb--1" aria-hidden="true" />
      <div className="cp-orb cp-orb--2" aria-hidden="true" />
      <div className="cp-orb cp-orb--3" aria-hidden="true" />
      <div className="cp-grid" aria-hidden="true" />

      <div className="cp-shell">
        <button className="cp-back" onClick={() => navigate('/services')} aria-label="Back to services">
          <span aria-hidden="true">←</span> Back to services
        </button>

        <section className="cp-hero" ref={heroRef}>
          <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
            <div className="cp-hero__image-frame">
              <img src={consultImage} alt="Consultation illustration" className="cp-hero__image" loading="eager" />
            </div>
          </div>

          <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
            <div className="cp-text-stack">
              <div className="cp-text-block cp-text-block--one">
                <p>SwiftFly Inc provides custom software application development services to clients across the globe to help organizations achieve their mission-critical goals. Off-the-shelf products seldom meet client needs completely, and working with SwiftFly Inc allows clients to create their own solutions in a cost-effective and efficient way.</p>
              </div>
              <div className="cp-text-block cp-text-block--two">
                <p>Choosing the right technology is key to future growth. SwiftFly Inc provides tailored solutions that leverage existing systems or introduce modern technologies to support each client's business goals.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`cp-tech ${techVisible ? 'is-visible' : ''}`} ref={techRef}>
          <header className="cp-tech__head">
            <span className="cp-eyebrow">OUR EXPERTISE</span>
            <h2 className="cp-tech__title">Full-spectrum technology coverage.</h2>
            <p className="cp-tech__subtitle">From web and mobile to enterprise Microsoft stacks, QA, and business analysis — one team, end to end.</p>
          </header>

          <div className="cp-tech__grid">
            {TECH_PILLARS.map((pillar, i) => (
              <article key={pillar.title} className="cp-tech-card" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="cp-tech-card__icon"><span aria-hidden="true">{pillar.icon}</span></div>
                <div className="cp-tech-card__nub" aria-hidden="true" />
                <h3 className="cp-tech-card__title">{pillar.title}</h3>
                <ul className="cp-tech-card__list">
                  {pillar.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

/* =========================================================
   STAFFING PAGE
   ========================================================= */
function StaffingPage() {
  const navigate = useNavigate();
  const [heroRef, heroVisible] = useReveal();
  const [modelsRef, modelsVisible] = useReveal();
  const [servicesRef, servicesVisible] = useReveal();

  return (
    <main className="consultation-page">
      <div className="cp-orb cp-orb--1" aria-hidden="true" />
      <div className="cp-orb cp-orb--2" aria-hidden="true" />
      <div className="cp-orb cp-orb--3" aria-hidden="true" />
      <div className="cp-grid" aria-hidden="true" />

      <div className="cp-shell">
        <button className="cp-back" onClick={() => navigate('/services')} aria-label="Back to services">
          <span aria-hidden="true">←</span> Back to services
        </button>

        <section className="cp-hero" ref={heroRef}>
          <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
            <div className="cp-hero__image-frame">
              <img src={staffingImage} alt="Staffing illustration" className="cp-hero__image" loading="eager" />
            </div>
          </div>

          <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
            <div className="cp-text-stack">
              <div className="cp-text-block cp-text-block--one">
                <p>Job search always plays a crucial part in one's career, and sometimes it can be a nerve-wracking experience for many applicants. As the job market becomes more and more competitive with new advanced technologies coming into the picture, the expectations of companies increase many fold from a candidate.</p>
              </div>
              <div className="cp-text-block cp-text-block--two">
                <p>We have expertise in both <strong>Contract and Permanent Recruitment</strong> in all technologies throughout the USA. We have very closely worked with our clients to fulfill their requirements. Our database and network of candidates is undiluted — we typically know the technology resources personally because we have worked with them in the past.</p>
              </div>
              <div className="cp-text-block cp-text-block--one">
                <p>We do not just collect and deliver CVs — we thoroughly screen the profiles and our experts talk to the candidates to understand whether they fit the requirement. Once we are confident, only then do we share the CVs with our client so that our client can save their time and cost.</p>
                <p>SwiftFly Inc's key strength lies in identifying and deploying <strong>flexible resources</strong> who can support clients during their expansion and growth phase — so we can reduce and optimize the cost of engagement without compromising quality.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`cp-models ${modelsVisible ? 'is-visible' : ''}`} ref={modelsRef} aria-label="Staffing models">
          <header className="cp-models__head">
            <span className="cp-eyebrow">WHAT WE OFFER</span>
            <h2 className="cp-models__title">Our Staffing Solutions.</h2>
            <p className="cp-models__subtitle">Flexible engagement models built around your growth, compliance, and hiring velocity.</p>
          </header>

          <div className="cp-models__row">
            {STAFFING_MODELS.map((m, i) => (
              <article key={m.num} className="cp-model" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="cp-model__stem" aria-hidden="true" />
                <div className="cp-model__num">{m.num}</div>
                <div className="cp-model__card">
                  <div className="cp-model__icon" aria-hidden="true"><span>{m.icon}</span></div>
                  <h3 className="cp-model__title">{m.title}</h3>
                  <p className="cp-model__text">{m.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`cp-services ${servicesVisible ? 'is-visible' : ''}`} ref={servicesRef}>
          <header className="cp-services__head">
            <span className="cp-eyebrow">OUR SERVICES</span>
            <h2 className="cp-services__title">Our wide area of US-IT Staffing services.</h2>
          </header>

          <div className="cp-services__timeline">
            <div className="cp-services__line" aria-hidden="true" />
            {IT_STAFFING_SERVICES.map((s, i) => (
              <article key={s.num} className="cp-service-step" style={{ transitionDelay: `${i * 120}ms` }}>
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

/* =========================================================
   TRAINING PAGE
   ========================================================= */
function TrainingPage() {
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
        <button className="cp-back" onClick={() => navigate('/services')} aria-label="Back to services">
          <span aria-hidden="true">←</span> Back to services
        </button>

        <section className="cp-hero" ref={heroRef}>
          <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
            <div className="cp-hero__image-frame">
              <img src={trainingImage} alt="Training illustration" className="cp-hero__image" loading="eager" />
            </div>
          </div>

          <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
            <div className="cp-text-stack">
              <div className="cp-text-block cp-text-block--one">
                <p>SwiftFly Inc provides both <strong>online and offline training</strong> for all software technologies. Our team of experts has deep, hands-on experience teaching the technologies that enterprises actually use — not just textbook theory.</p>
              </div>
              <div className="cp-text-block cp-text-block--two">
                <p>Whether you're a fresher starting your career, a working professional upskilling for a promotion, or a team looking to grow together — we have a track built for your goals.</p>
              </div>
              <div className="cp-text-block cp-text-block--one">
                <p>Small batches. Live mentors. Real projects. Interview preparation. We don't just teach — we help you get hired.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`cp-tech ${pillarsVisible ? 'is-visible' : ''}`} ref={pillarsRef}>
          <header className="cp-tech__head">
            <span className="cp-eyebrow">WHAT WE TEACH</span>
            <h2 className="cp-tech__title">Our team of experts assists in these technologies.</h2>
            <p className="cp-tech__subtitle">Structured training programs across the technologies that power modern enterprises.</p>
          </header>

          <div className="cp-tech__grid cp-tech__grid--4">
            {TRAINING_TECHNOLOGIES.map((pillar, i) => (
              <article key={pillar.title} className="cp-tech-card" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="cp-tech-card__icon"><span aria-hidden="true">{pillar.icon}</span></div>
                <div className="cp-tech-card__nub" aria-hidden="true" />
                <h3 className="cp-tech-card__title">{pillar.title}</h3>
                <ul className="cp-tech-card__list">
                  {pillar.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={`cp-services ${stepsVisible ? 'is-visible' : ''}`} ref={stepsRef}>
          <header className="cp-services__head">
            <span className="cp-eyebrow">HOW WE TRAIN</span>
            <h2 className="cp-services__title">Online, offline, and everything in between.</h2>
          </header>

          <div className="cp-services__timeline">
            <div className="cp-services__line" aria-hidden="true" />
            {TRAINING_MODES.map((s, i) => (
              <article key={s.num} className="cp-service-step" style={{ transitionDelay: `${i * 120}ms` }}>
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

/* =========================================================
   JOB SUPPORT PAGE — with jobsupport.png
   ========================================================= */
function JobSupportPage() {
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
        <button className="cp-back" onClick={() => navigate('/services')} aria-label="Back to services">
          <span aria-hidden="true">←</span> Back to services
        </button>

        <section className="cp-hero" ref={heroRef}>
          <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
            <div className="cp-hero__image-frame">
              <img
                src={jobSupportImage}
                alt="Job support illustration"
                className="cp-hero__image"
                loading="eager"
              />
            </div>
          </div>

          <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
            <div className="cp-text-stack">
              <div className="cp-text-block cp-text-block--one">
                <p>Every engineer hits a wall sometimes — a stubborn bug, a tight deadline, a production issue that needs fixing now. That's exactly when a second pair of expert eyes matters most.</p>
              </div>
              <div className="cp-text-block cp-text-block--two">
                <p>SwiftFly Inc's <strong>Job Support</strong> connects you with senior engineers who've solved your exact problem before — across every major stack, cloud, and framework.</p>
              </div>
              <div className="cp-text-block cp-text-block--one">
                <p>Real-time help. Honest guidance. No judgment. Just solutions that keep you moving forward.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`cp-tech ${pillarsVisible ? 'is-visible' : ''}`} ref={pillarsRef}>
          <header className="cp-tech__head">
            <span className="cp-eyebrow">HOW WE HELP</span>
            <h2 className="cp-tech__title">Support across every stage.</h2>
            <p className="cp-tech__subtitle">From day-one debugging to career-long mentorship — we're in your corner.</p>
          </header>

          <div className="cp-tech__grid">
            {SUPPORT_PILLARS.map((pillar, i) => (
              <article key={pillar.title} className="cp-tech-card" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="cp-tech-card__icon"><span aria-hidden="true">{pillar.icon}</span></div>
                <div className="cp-tech-card__nub" aria-hidden="true" />
                <h3 className="cp-tech-card__title">{pillar.title}</h3>
                <ul className="cp-tech-card__list">
                  {pillar.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={`cp-services ${stepsVisible ? 'is-visible' : ''}`} ref={stepsRef}>
          <header className="cp-services__head">
            <span className="cp-eyebrow">OUR PROCESS</span>
            <h2 className="cp-services__title">Support that fits your workflow.</h2>
          </header>

          <div className="cp-services__timeline">
            <div className="cp-services__line" aria-hidden="true" />
            {SUPPORT_STEPS.map((s, i) => (
              <article key={s.num} className="cp-service-step" style={{ transitionDelay: `${i * 120}ms` }}>
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

/* =========================================================
   H1B FILING PAGE — with visa.png
   ========================================================= */
function H1BFilingPage() {
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
        <button className="cp-back" onClick={() => navigate('/services')} aria-label="Back to services">
          <span aria-hidden="true">←</span> Back to services
        </button>

        <section className="cp-hero" ref={heroRef}>
          <div className={`cp-hero__left ${heroVisible ? 'is-visible' : ''}`}>
            <div className="cp-hero__image-frame">
              <img
                src={visaImage}
                alt="H1B filing illustration"
                className="cp-hero__image"
                loading="eager"
              />
            </div>
          </div>

          <div className={`cp-hero__right ${heroVisible ? 'is-visible' : ''}`}>
            <div className="cp-text-stack">
              <div className="cp-text-block cp-text-block--one">
                <p>The H1B process is paperwork-heavy, deadline-driven, and unforgiving of mistakes. Missing a document or filing window can cost an entire year.</p>
              </div>
              <div className="cp-text-block cp-text-block--two">
                <p>SwiftFly Inc provides <strong>end-to-end H1B petition support</strong> — from initial strategy and documentation to filing, RFE responses, transfers, and extensions.</p>
              </div>
              <div className="cp-text-block cp-text-block--one">
                <p>We coordinate with your employer and legal team, keep every deadline on track, and stay with you through approval and beyond.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`cp-tech ${pillarsVisible ? 'is-visible' : ''}`} ref={pillarsRef}>
          <header className="cp-tech__head">
            <span className="cp-eyebrow">WHAT WE COVER</span>
            <h2 className="cp-tech__title">Complete H1B petition support.</h2>
            <p className="cp-tech__subtitle">Every stage of the process — handled by experienced coordinators and legal partners.</p>
          </header>

          <div className="cp-tech__grid">
            {H1B_PILLARS.map((pillar, i) => (
              <article key={pillar.title} className="cp-tech-card" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="cp-tech-card__icon"><span aria-hidden="true">{pillar.icon}</span></div>
                <div className="cp-tech-card__nub" aria-hidden="true" />
                <h3 className="cp-tech-card__title">{pillar.title}</h3>
                <ul className="cp-tech-card__list">
                  {pillar.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={`cp-services ${stepsVisible ? 'is-visible' : ''}`} ref={stepsRef}>
          <header className="cp-services__head">
            <span className="cp-eyebrow">THE PROCESS</span>
            <h2 className="cp-services__title">From consult to approval.</h2>
          </header>

          <div className="cp-services__timeline">
            <div className="cp-services__line" aria-hidden="true" />
            {H1B_STEPS.map((s, i) => (
              <article key={s.num} className="cp-service-step" style={{ transitionDelay: `${i * 120}ms` }}>
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

/* =========================================================
   MAIN ROUTER
   ========================================================= */
export default function Services() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const selected = services.find((s) => s.slug === slug || s.id === slug);

  // Dedicated pages
  if (selected?.slug === 'consultation') return <ConsultationPage />;
  if (selected?.slug === 'staffing') return <StaffingPage />;
  if (selected?.slug === 'training') return <TrainingPage />;
  if (selected?.slug === 'job-support') return <JobSupportPage />;
  if (selected?.slug === 'h1b-filing') return <H1BFilingPage />;

  // Generic service detail
  if (selected) {
    return (
      <section className="services-detail">
        <button className="back-btn" onClick={() => navigate('/services')}>
          ← Back to services
        </button>
        {selected.icon && <div style={{ fontSize: '3rem' }}>{selected.icon}</div>}
        <h1>{selected.title}</h1>
        <p>{selected.description}</p>
        {selected.details && <p>{selected.details}</p>}
      </section>
    );
  }

  // List view
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => navigate(`/services/${service.slug || service.id}`)}
          >
            {service.icon && <div style={{ fontSize: '2rem' }}>{service.icon}</div>}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span>Learn more →</span>
          </div>
        ))}
      </div>
    </section>
  );
}