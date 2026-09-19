// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './InnerPages.css';

// const Img = ({src, alt, className=''}) => <img className={className} src={src} alt={alt} loading="lazy" />;
// const Arrow = ({to,children,light=false}) => <Link className={`ip-arrow ${light?'light':''}`} to={to}>{children}<span>→</span></Link>;
// const useReveal = () => useEffect(()=>{const n=document.querySelectorAll('.ip-reveal');const o=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('shown')),{threshold:.1});n.forEach(x=>o.observe(x));return()=>o.disconnect()},[]);

// export default function About(){useReveal();return <main className="inner-page about-page">
//   <section className="about-hero"><div className="ip-shell about-hero-grid"><div><p className="ip-kicker">About Sweftfly Inc.</p><h1>Technology Hiring,<br/><em>Built Around People.</em></h1><p>Sweftfly Inc. helps organizations across the United States connect with skilled technology professionals through focused recruiting, flexible staffing solutions, and a hiring experience built around real business needs.</p><div className="ip-actions"><Link className="ip-btn" to="/services">Explore Our Services</Link><Link className="ip-btn ghost" to="/contact">Talk to Our Team</Link></div></div><div className="about-hero-image"><Img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85" alt="Technology professionals collaborating in a bright modern office"/><aside><b>Technology Talent</b><span>Contract · C2H · Direct Hire</span></aside></div></div></section>
//   <section className="ip-section ip-reveal"><div className="ip-shell editorial-split"><h2>More Than Filling Roles.<br/>We Help Build Teams.</h2><div className="long-copy"><p>Sweftfly Inc. is a technology-focused staffing and recruiting company connecting businesses with professionals who can contribute to their teams, projects, and long-term technology goals.</p><p>We believe effective recruiting starts with understanding more than a job description. Our approach considers the technologies involved, the responsibilities of the role, the team environment, the engagement model, and the objectives behind every hire.</p><p>From individual specialists to scalable technology teams, we help organizations navigate hiring with greater clarity and flexibility.</p><Arrow to="/services">How We Work</Arrow></div></div></section>
//   <section className="ip-section purpose ip-reveal"><div className="ip-shell"><p className="ip-kicker">Our purpose</p><h2>What Guides Sweftfly</h2><div className="purpose-panels">{[['Our Mission','Make technology hiring simpler and more effective by connecting businesses with professionals whose skills and experience align with the work that needs to be done.'],['Our Approach','Understand the requirement first, identify relevant talent second, and keep communication clear throughout the hiring journey.'],['Our Focus','Build lasting relationships with businesses and technology professionals by providing a recruiting experience based on relevance, responsiveness, and trust.']].map((x,i)=><article key={x[0]}><span>{String(i+1).padStart(2,'0')}</span><div><small>{x[0]}</small><p>{x[1]}</p></div></article>)}</div></div></section>
//   <section className="ip-section image-story ip-reveal"><div className="ip-shell story-grid"><div className="story-images"><Img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85" alt="Engineering team exchanging ideas around a project board"/><Img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85" alt="Recruiter having a natural professional conversation with a candidate"/></div><div><p className="ip-kicker">A people-first approach</p><h2>Good Recruiting Starts<br/>with Understanding.</h2><p>Every hiring requirement has context.</p><p>A growing engineering team may need speed and flexibility. A critical project may require specialized expertise. A permanent role may require deeper alignment between technical experience and team dynamics.</p><p>Sweftfly begins by understanding that context before identifying candidates.</p><p>This helps us focus on relevance instead of simply increasing the number of resumes presented.</p></div></div></section>
//   <section className="ip-section difference ip-reveal"><div className="ip-shell"><p className="ip-kicker cyan">Why Sweftfly</p><h2>Designed for Modern<br/>Technology Hiring.</h2><div className="difference-rows">{[['Technology-Focused Recruiting','We concentrate on technology roles and skill sets, helping conversations begin with a stronger understanding of the requirement.'],['Curated Talent','Our goal is to present relevant professionals based on experience, technical alignment, and role requirements rather than overwhelming hiring teams with resumes.'],['Flexible Staffing Models','Support changing workforce needs through contract, contract-to-hire, direct hire, dedicated recruiting, and project-based staffing.'],['Human Communication','Technology can support recruiting, but strong relationships still matter. We keep employers and professionals informed throughout the hiring process.']].map((x,i)=><div key={x[0]}><span>{String(i+1).padStart(2,'0')}</span><h3>{x[0]}</h3><p>{x[1]}</p></div>)}</div></div></section>
//   <section className="ip-section match-section ip-reveal"><div className="ip-shell"><div className="ip-center"><p className="ip-kicker">Matching with context</p><h2>The Right Match Goes<br/>Beyond a Resume.</h2></div><div className="match-map"><div className="match-core">Right-fit<br/>talent</div>{['Technical Skills','Experience','Role Requirements','Team Alignment','Engagement Model'].map((x,i)=><span key={x} style={{'--i':i}}>{x}</span>)}</div><p className="match-note">We look at the complete hiring requirement so businesses can spend more time speaking with relevant professionals and less time filtering through mismatched applications.</p></div></section>
//   <section className="ip-section partner ip-reveal"><div className="ip-shell"><p className="ip-kicker">How we partner</p><h2>Clear. Focused. Collaborative.</h2><div className="partner-line">{[['Listen','Understand your hiring goals, technology environment, responsibilities, timeline, and engagement needs.'],['Align','Define the candidate profile and establish what matters most for the role.'],['Search','Identify technology professionals whose experience aligns with the requirement.'],['Connect','Present selected candidates and coordinate the interview process.'],['Support','Stay involved through selection, onboarding, and the engagement lifecycle.']].map((x,i)=><article key={x[0]}><span>{String(i+1).padStart(2,'0')}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>
//   <section className="dual-cta ip-reveal"><div><p className="ip-kicker cyan">For businesses</p><h2>A Recruiting Partner<br/>That Understands Technology.</h2><p>Build flexible, capable technology teams without turning recruiting into another full-time project.</p><Arrow to="/hire" light>Hire Talent</Arrow></div><div><p className="ip-kicker">For technology professionals</p><h2>Build the Next Chapter<br/>of Your Career.</h2><p>Connect with opportunities that align with your skills, experience, and professional goals.</p><Arrow to="/careers">Submit Resume</Arrow></div></section>
//   <section className="ip-final ip-reveal"><div className="ip-shell"><p className="ip-kicker cyan">Let's connect</p><h2>Behind Every Great<br/>Technology Team Are<br/>Great People.</h2><p>Whether you're building a team or looking for your next opportunity, Sweftfly Inc. is ready to start the conversation.</p><div className="ip-actions"><Link className="ip-btn" to="/hire">Hire Talent</Link><Link className="ip-btn ghost" to="/contact">Contact Us</Link></div></div></section>
// </main>}

// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './InnerPages.css';

// const Img = ({ src, alt, className = '' }) => (
//   <img className={className} src={src} alt={alt} loading="lazy" />
// );
// const Arrow = ({ to, children, light = false }) => (
//   <Link className={`ip-arrow ${light ? 'light' : ''}`} to={to}>
//     {children}
//     <span>→</span>
//   </Link>
// );
// const useReveal = () =>
//   useEffect(() => {
//     const n = document.querySelectorAll('.ip-reveal');
//     const o = new IntersectionObserver(
//       (e) => e.forEach((x) => x.isIntersecting && x.target.classList.add('shown')),
//       { threshold: 0.1 }
//     );
//     n.forEach((x) => o.observe(x));
//     return () => o.disconnect();
//   }, []);

// export default function About() {
//   useReveal();
//   return (
//     <main className="inner-page about-page">

//       {/* =========================================================
//           HERO
//          ========================================================= */}
//       <section className="about-hero">
//         <div className="ip-shell about-hero-grid">
//           <div>
//             <p className="ip-kicker">About Sweftfly Inc.</p>
//             <h1>
//               Technology Hiring,
//               <br />
//               <em>Built Around People.</em>
//             </h1>
//             <p>
//               Sweftfly Inc. helps organizations across the United States connect
//               with skilled technology professionals through focused recruiting,
//               flexible staffing solutions, and a hiring experience built around
//               real business needs.
//             </p>
//             <div className="ip-actions">
//               <Link className="ip-btn" to="/services">
//                 Explore Our Services
//               </Link>
//               <Link className="ip-btn ghost" to="/contact">
//                 Talk to Our Team
//               </Link>
//             </div>
//           </div>
//           <div className="about-hero-image">
//             <Img
//               src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
//               alt="Technology professionals collaborating in a bright modern office"
//             />
//             <aside>
//               <b>Technology Talent</b>
//               <span>Contract · C2H · Direct Hire</span>
//             </aside>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           NEW — WHAT WE DO
//          ========================================================= */}
//       <section className="ip-section what-we-do ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker">What we do</p>
//           <h2>
//             A Full Stakeholder
//             <br />
//             In Your Business.
//           </h2>

//           <div className="what-we-do-grid">
//             <div className="what-we-do-copy">
//               <p>
//                 Sweftfly Inc. is a rapidly growing and professional software
//                 development company located in Hyderabad, India. We are
//                 dedicated and experts in rapid custom development of web-based,
//                 mobile applications development, distributed and standalone
//                 applications designed to meet your organization's specific
//                 requirements and business needs.
//               </p>
//               <p>
//                 We function as a full stakeholder to business, offering a
//                 consulting-led approach with an integrated portfolio of
//                 technology-led solutions that encompass the entire enterprise
//                 value chain. Our customer-centric engagement model defines how
//                 we engage with you — offering specialized services and
//                 solutions that meet the distinct needs of your business.
//               </p>
//               <p>
//                 We build bespoke teams around your domain and technology
//                 requirements drawn from our talent. Our domain expertise has
//                 been built upon decades of experience working across industries,
//                 and this knowledge underpins our suite of solutions.
//               </p>
//               <p>
//                 Our organization structure is domain-led and empowered to help
//                 provide customers a single window to industry-specific
//                 solutions. Agile industry units have embedded capabilities to
//                 enable rapid responses that provide a competitive edge to our
//                 customers.
//               </p>
//             </div>

//             <aside className="what-we-do-quote">
//               <span className="what-we-do-quote__mark">"</span>
//               <p>
//                 Our success formula is{' '}
//                 <em>Collaboration, Continuous feedback, and Transparency.</em>
//               </p>
//               <p>
//                 We firmly believe that a team of talented, driven, and
//                 principled people could do wonders.
//               </p>
//             </aside>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           NEW — VISION & MISSION
//          ========================================================= */}
//       <section className="ip-section vision-mission ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker">Purpose, Ethics and Values</p>
//           <h2>
//             What We're Building
//             <br />
//             Toward.
//           </h2>

//           <div className="vm-panels">
//             <article className="vm-card">
//               <span className="vm-card__num">01</span>
//               <div className="vm-card__icon" aria-hidden="true">
//                 🎯
//               </div>
//               <h3>Our Vision</h3>
//               <p>
//                 To become the preferred partner of software services and
//                 solutions — and to enable and enhance business potential with
//                 technology-driven innovations.
//               </p>
//             </article>

//             <article className="vm-card">
//               <span className="vm-card__num">02</span>
//               <div className="vm-card__icon" aria-hidden="true">
//                 🚀
//               </div>
//               <h3>Our Mission</h3>
//               <p>
//                 To build value-enhanced business solutions for our clients,
//                 leveraging best-fit technologies, and create the right place
//                 for passionate engineers to cultivate their tech-enlightenment.
//               </p>
//             </article>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           EXISTING — MORE THAN FILLING ROLES
//          ========================================================= */}
//       <section className="ip-section ip-reveal">
//         <div className="ip-shell editorial-split">
//           <h2>
//             More Than Filling Roles.
//             <br />
//             We Help Build Teams.
//           </h2>
//           <div className="long-copy">
//             <p>
//               Sweftfly Inc. is a technology-focused staffing and recruiting
//               company connecting businesses with professionals who can
//               contribute to their teams, projects, and long-term technology
//               goals.
//             </p>
//             <p>
//               We believe effective recruiting starts with understanding more
//               than a job description. Our approach considers the technologies
//               involved, the responsibilities of the role, the team environment,
//               the engagement model, and the objectives behind every hire.
//             </p>
//             <p>
//               From individual specialists to scalable technology teams, we help
//               organizations navigate hiring with greater clarity and
//               flexibility.
//             </p>
//             <Arrow to="/services">How We Work</Arrow>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           EXISTING — OUR PURPOSE
//          ========================================================= */}
//       <section className="ip-section purpose ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker">Our purpose</p>
//           <h2>What Guides Sweftfly</h2>
//           <div className="purpose-panels">
//             {[
//               [
//                 'Our Mission',
//                 'Make technology hiring simpler and more effective by connecting businesses with professionals whose skills and experience align with the work that needs to be done.',
//               ],
//               [
//                 'Our Approach',
//                 'Understand the requirement first, identify relevant talent second, and keep communication clear throughout the hiring journey.',
//               ],
//               [
//                 'Our Focus',
//                 'Build lasting relationships with businesses and technology professionals by providing a recruiting experience based on relevance, responsiveness, and trust.',
//               ],
//             ].map((x, i) => (
//               <article key={x[0]}>
//                 <span>{String(i + 1).padStart(2, '0')}</span>
//                 <div>
//                   <small>{x[0]}</small>
//                   <p>{x[1]}</p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           EXISTING — PEOPLE-FIRST APPROACH
//          ========================================================= */}
//       <section className="ip-section image-story ip-reveal">
//         <div className="ip-shell story-grid">
//           <div className="story-images">
//             <Img
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85"
//               alt="Engineering team exchanging ideas around a project board"
//             />
//             <Img
//               src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85"
//               alt="Recruiter having a natural professional conversation with a candidate"
//             />
//           </div>
//           <div>
//             <p className="ip-kicker">A people-first approach</p>
//             <h2>
//               Good Recruiting Starts
//               <br />
//               with Understanding.
//             </h2>
//             <p>Every hiring requirement has context.</p>
//             <p>
//               A growing engineering team may need speed and flexibility. A
//               critical project may require specialized expertise. A permanent
//               role may require deeper alignment between technical experience
//               and team dynamics.
//             </p>
//             <p>
//               Sweftfly begins by understanding that context before identifying
//               candidates.
//             </p>
//             <p>
//               This helps us focus on relevance instead of simply increasing the
//               number of resumes presented.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           EXISTING — WHY SWEFTLFY
//          ========================================================= */}
//       <section className="ip-section difference ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker cyan">Why Sweftfly</p>
//           <h2>
//             Designed for Modern
//             <br />
//             Technology Hiring.
//           </h2>
//           <div className="difference-rows">
//             {[
//               [
//                 'Technology-Focused Recruiting',
//                 'We concentrate on technology roles and skill sets, helping conversations begin with a stronger understanding of the requirement.',
//               ],
//               [
//                 'Curated Talent',
//                 'Our goal is to present relevant professionals based on experience, technical alignment, and role requirements rather than overwhelming hiring teams with resumes.',
//               ],
//               [
//                 'Flexible Staffing Models',
//                 'Support changing workforce needs through contract, contract-to-hire, direct hire, dedicated recruiting, and project-based staffing.',
//               ],
//               [
//                 'Human Communication',
//                 'Technology can support recruiting, but strong relationships still matter. We keep employers and professionals informed throughout the hiring process.',
//               ],
//             ].map((x, i) => (
//               <div key={x[0]}>
//                 <span>{String(i + 1).padStart(2, '0')}</span>
//                 <h3>{x[0]}</h3>
//                 <p>{x[1]}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           EXISTING — MATCHING WITH CONTEXT
//          ========================================================= */}
//       <section className="ip-section match-section ip-reveal">
//         <div className="ip-shell">
//           <div className="ip-center">
//             <p className="ip-kicker">Matching with context</p>
//             <h2>
//               The Right Match Goes
//               <br />
//               Beyond a Resume.
//             </h2>
//           </div>
//           <div className="match-map">
//             <div className="match-core">
//               Right-fit
//               <br />
//               talent
//             </div>
//             {[
//               'Technical Skills',
//               'Experience',
//               'Role Requirements',
//               'Team Alignment',
//               'Engagement Model',
//             ].map((x, i) => (
//               <span key={x} style={{ '--i': i }}>
//                 {x}
//               </span>
//             ))}
//           </div>
//           <p className="match-note">
//             We look at the complete hiring requirement so businesses can spend
//             more time speaking with relevant professionals and less time
//             filtering through mismatched applications.
//           </p>
//         </div>
//       </section>

//       {/* =========================================================
//           EXISTING — HOW WE PARTNER
//          ========================================================= */}
//       <section className="ip-section partner ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker">How we partner</p>
//           <h2>Clear. Focused. Collaborative.</h2>
//           <div className="partner-line">
//             {[
//               [
//                 'Listen',
//                 'Understand your hiring goals, technology environment, responsibilities, timeline, and engagement needs.',
//               ],
//               [
//                 'Align',
//                 'Define the candidate profile and establish what matters most for the role.',
//               ],
//               [
//                 'Search',
//                 'Identify technology professionals whose experience aligns with the requirement.',
//               ],
//               [
//                 'Connect',
//                 'Present selected candidates and coordinate the interview process.',
//               ],
//               [
//                 'Support',
//                 'Stay involved through selection, onboarding, and the engagement lifecycle.',
//               ],
//             ].map((x, i) => (
//               <article key={x[0]}>
//                 <span>{String(i + 1).padStart(2, '0')}</span>
//                 <h3>{x[0]}</h3>
//                 <p>{x[1]}</p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           EXISTING — DUAL CTA
//          ========================================================= */}
//       <section className="dual-cta ip-reveal">
//         <div>
//           <p className="ip-kicker cyan">For businesses</p>
//           <h2>
//             A Recruiting Partner
//             <br />
//             That Understands Technology.
//           </h2>
//           <p>
//             Build flexible, capable technology teams without turning recruiting
//             into another full-time project.
//           </p>
//           <Arrow to="/hire" light>
//             Hire Talent
//           </Arrow>
//         </div>
//         <div>
//           <p className="ip-kicker">For technology professionals</p>
//           <h2>
//             Build the Next Chapter
//             <br />
//             of Your Career.
//           </h2>
//           <p>
//             Connect with opportunities that align with your skills, experience,
//             and professional goals.
//           </p>
//           <Arrow to="/careers">Submit Resume</Arrow>
//         </div>
//       </section>

//       {/* =========================================================
//           EXISTING — FINAL CTA
//          ========================================================= */}
//       <section className="ip-final ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker cyan">Let's connect</p>
//           <h2>
//             Behind Every Great
//             <br />
//             Technology Team Are
//             <br />
//             Great People.
//           </h2>
//           <p>
//             Whether you're building a team or looking for your next
//             opportunity, Sweftfly Inc. is ready to start the conversation.
//           </p>
//           <div className="ip-actions">
//             <Link className="ip-btn" to="/hire">
//               Hire Talent
//             </Link>
//             <Link className="ip-btn ghost" to="/contact">
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './InnerPages.css';

// const Img = ({ src, alt, className = '' }) => (
//   <img className={className} src={src} alt={alt} loading="lazy" />
// );
// const Arrow = ({ to, children, light = false }) => (
//   <Link className={`ip-arrow ${light ? 'light' : ''}`} to={to}>
//     {children}
//     <span>→</span>
//   </Link>
// );
// const useReveal = () =>
//   useEffect(() => {
//     const n = document.querySelectorAll('.ip-reveal');
//     const o = new IntersectionObserver(
//       (e) => e.forEach((x) => x.isIntersecting && x.target.classList.add('shown')),
//       { threshold: 0.1 }
//     );
//     n.forEach((x) => o.observe(x));
//     return () => o.disconnect();
//   }, []);

// export default function About() {
//   useReveal();
//   return (
//     <main className="inner-page about-page">

//       {/* =========================================================
//           HERO
//          ========================================================= */}
//       <section className="about-hero">
//         <div className="ip-shell about-hero-grid">
//           <div>
//             <p className="ip-kicker">About Sweftfly Inc.</p>
//             <h1>
//               Technology Hiring,
//               <br />
//               <em>Built Around People.</em>
//             </h1>
//             <p>
//               Sweftfly Inc. helps organizations across the United States connect
//               with skilled technology professionals through focused recruiting,
//               flexible staffing solutions, and a hiring experience built around
//               real business needs.
//             </p>
//             <div className="ip-actions">
//               <Link className="ip-btn" to="/services">
//                 Explore Our Services
//               </Link>
//               <Link className="ip-btn ghost" to="/contact">
//                 Talk to Our Team
//               </Link>
//             </div>
//           </div>
//           <div className="about-hero-image">
//             <Img
//               src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
//               alt="Technology professionals collaborating in a bright modern office"
//             />
//             <aside>
//               <b>Technology Talent</b>
//               <span>Contract · C2H · Direct Hire</span>
//             </aside>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           NEW — WHAT WE DO (two images left, content right)
//          ========================================================= */}
//       <section className="ip-section what-we-do ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker">What we do</p>

//           <div className="what-we-do-grid">
//             {/* LEFT — Two stacked images */}
//             <div className="what-we-do-images">
//               <Img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85"
//                 alt="Engineering team exchanging ideas around a project board"
//               />
//               <Img
//                 src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85"
//                 alt="Recruiter having a natural professional conversation with a candidate"
//               />
//             </div>

//             {/* RIGHT — Copy */}
//             <div className="what-we-do-copy">
//               <p>
//                 Sweftfly Inc. is a rapidly growing and professional software
//                 development company located in Hyderabad, India. We are
//                 dedicated and experts in rapid custom development of web-based,
//                 mobile applications development, distributed and standalone
//                 applications designed to meet your organization's specific
//                 requirements and business needs.
//               </p>
//               <p>
//                 We function as a full stakeholder to business, offering a
//                 consulting-led approach with an integrated portfolio of
//                 technology-led solutions that encompass the entire enterprise
//                 value chain. Our customer-centric engagement model defines how
//                 we engage with you — offering specialized services and
//                 solutions that meet the distinct needs of your business.
//               </p>
//               <p>
//                 We build bespoke teams around your domain and technology
//                 requirements drawn from our talent. Our domain expertise has
//                 been built upon decades of experience working across industries,
//                 and this knowledge underpins our suite of solutions.
//               </p>
//               <p>
//                 Our organization structure is domain-led and empowered to help
//                 provide customers a single window to industry-specific
//                 solutions. Agile industry units have embedded capabilities to
//                 enable rapid responses that provide a competitive edge to our
//                 customers.
//               </p>
//             </div>
//           </div>

//           {/* Pull-quote below the two columns */}
//           <aside className="what-we-do-quote">
//             <span className="what-we-do-quote__mark">"</span>
//             <p>
//               Our success formula is{' '}
//               <em>Collaboration, Continuous feedback, and Transparency.</em>
//             </p>
//             <p>
//               We firmly believe that a team of talented, driven, and principled
//               people could do wonders.
//             </p>
//           </aside>
//         </div>
//       </section>

//       {/* =========================================================
//           NEW — VISION & MISSION
//          ========================================================= */}
//       <section className="ip-section vision-mission ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker">Purpose, Ethics and Values</p>
//           <h2>
//             What We're Building
//             <br />
//             Toward.
//           </h2>

//           <div className="vm-panels">
//             <article className="vm-card">
//               <span className="vm-card__num">01</span>
//               <div className="vm-card__icon" aria-hidden="true">
//                 🎯
//               </div>
//               <h3>Our Vision</h3>
//               <p>
//                 To become the preferred partner of software services and
//                 solutions — and to enable and enhance business potential with
//                 technology-driven innovations.
//               </p>
//             </article>

//             <article className="vm-card">
//               <span className="vm-card__num">02</span>
//               <div className="vm-card__icon" aria-hidden="true">
//                 🚀
//               </div>
//               <h3>Our Mission</h3>
//               <p>
//                 To build value-enhanced business solutions for our clients,
//                 leveraging best-fit technologies, and create the right place
//                 for passionate engineers to cultivate their tech-enlightenment.
//               </p>
//             </article>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           EXISTING — MORE THAN FILLING ROLES
//          ========================================================= */}
//       <section className="ip-section ip-reveal">
//         <div className="ip-shell editorial-split">
//           <h2>
//             More Than Filling Roles.
//             <br />
//             We Help Build Teams.
//           </h2>
//           <div className="long-copy">
//             <p>
//               Sweftfly Inc. is a technology-focused staffing and recruiting
//               company connecting businesses with professionals who can
//               contribute to their teams, projects, and long-term technology
//               goals.
//             </p>
//             <p>
//               We believe effective recruiting starts with understanding more
//               than a job description. Our approach considers the technologies
//               involved, the responsibilities of the role, the team environment,
//               the engagement model, and the objectives behind every hire.
//             </p>
//             <p>
//               From individual specialists to scalable technology teams, we help
//               organizations navigate hiring with greater clarity and
//               flexibility.
//             </p>
//             <Arrow to="/services">How We Work</Arrow>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           EXISTING — OUR PURPOSE
//          ========================================================= */}
//       <section className="ip-section purpose ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker">Our purpose</p>
//           <h2>What Guides Sweftfly</h2>
//           <div className="purpose-panels">
//             {[
//               [
//                 'Our Mission',
//                 'Make technology hiring simpler and more effective by connecting businesses with professionals whose skills and experience align with the work that needs to be done.',
//               ],
//               [
//                 'Our Approach',
//                 'Understand the requirement first, identify relevant talent second, and keep communication clear throughout the hiring journey.',
//               ],
//               [
//                 'Our Focus',
//                 'Build lasting relationships with businesses and technology professionals by providing a recruiting experience based on relevance, responsiveness, and trust.',
//               ],
//             ].map((x, i) => (
//               <article key={x[0]}>
//                 <span>{String(i + 1).padStart(2, '0')}</span>
//                 <div>
//                   <small>{x[0]}</small>
//                   <p>{x[1]}</p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           EXISTING — PEOPLE-FIRST APPROACH
//          ========================================================= */}
//       <section className="ip-section image-story ip-reveal">
//         <div className="ip-shell story-grid">
//           <div className="story-images">
//             <Img
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85"
//               alt="Engineering team exchanging ideas around a project board"
//             />
//             <Img
//               src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85"
//               alt="Recruiter having a natural professional conversation with a candidate"
//             />
//           </div>
//           <div>
//             <p className="ip-kicker">A people-first approach</p>
//             <h2>
//               Good Recruiting Starts
//               <br />
//               with Understanding.
//             </h2>
//             <p>Every hiring requirement has context.</p>
//             <p>
//               A growing engineering team may need speed and flexibility. A
//               critical project may require specialized expertise. A permanent
//               role may require deeper alignment between technical experience
//               and team dynamics.
//             </p>
//             <p>
//               Sweftfly begins by understanding that context before identifying
//               candidates.
//             </p>
//             <p>
//               This helps us focus on relevance instead of simply increasing the
//               number of resumes presented.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           EXISTING — WHY SWEFTLFY
//          ========================================================= */}
//       <section className="ip-section difference ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker cyan">Why Sweftfly</p>
//           <h2>
//             Designed for Modern
//             <br />
//             Technology Hiring.
//           </h2>
//           <div className="difference-rows">
//             {[
//               [
//                 'Technology-Focused Recruiting',
//                 'We concentrate on technology roles and skill sets, helping conversations begin with a stronger understanding of the requirement.',
//               ],
//               [
//                 'Curated Talent',
//                 'Our goal is to present relevant professionals based on experience, technical alignment, and role requirements rather than overwhelming hiring teams with resumes.',
//               ],
//               [
//                 'Flexible Staffing Models',
//                 'Support changing workforce needs through contract, contract-to-hire, direct hire, dedicated recruiting, and project-based staffing.',
//               ],
//               [
//                 'Human Communication',
//                 'Technology can support recruiting, but strong relationships still matter. We keep employers and professionals informed throughout the hiring process.',
//               ],
//             ].map((x, i) => (
//               <div key={x[0]}>
//                 <span>{String(i + 1).padStart(2, '0')}</span>
//                 <h3>{x[0]}</h3>
//                 <p>{x[1]}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           EXISTING — MATCHING WITH CONTEXT
//          ========================================================= */}
//       <section className="ip-section match-section ip-reveal">
//         <div className="ip-shell">
//           <div className="ip-center">
//             <p className="ip-kicker">Matching with context</p>
//             <h2>
//               The Right Match Goes
//               <br />
//               Beyond a Resume.
//             </h2>
//           </div>
//           <div className="match-map">
//             <div className="match-core">
//               Right-fit
//               <br />
//               talent
//             </div>
//             {[
//               'Technical Skills',
//               'Experience',
//               'Role Requirements',
//               'Team Alignment',
//               'Engagement Model',
//             ].map((x, i) => (
//               <span key={x} style={{ '--i': i }}>
//                 {x}
//               </span>
//             ))}
//           </div>
//           <p className="match-note">
//             We look at the complete hiring requirement so businesses can spend
//             more time speaking with relevant professionals and less time
//             filtering through mismatched applications.
//           </p>
//         </div>
//       </section>

//       {/* =========================================================
//           EXISTING — HOW WE PARTNER
//          ========================================================= */}
//       <section className="ip-section partner ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker">How we partner</p>
//           <h2>Clear. Focused. Collaborative.</h2>
//           <div className="partner-line">
//             {[
//               [
//                 'Listen',
//                 'Understand your hiring goals, technology environment, responsibilities, timeline, and engagement needs.',
//               ],
//               [
//                 'Align',
//                 'Define the candidate profile and establish what matters most for the role.',
//               ],
//               [
//                 'Search',
//                 'Identify technology professionals whose experience aligns with the requirement.',
//               ],
//               [
//                 'Connect',
//                 'Present selected candidates and coordinate the interview process.',
//               ],
//               [
//                 'Support',
//                 'Stay involved through selection, onboarding, and the engagement lifecycle.',
//               ],
//             ].map((x, i) => (
//               <article key={x[0]}>
//                 <span>{String(i + 1).padStart(2, '0')}</span>
//                 <h3>{x[0]}</h3>
//                 <p>{x[1]}</p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           EXISTING — DUAL CTA
//          ========================================================= */}
//       <section className="dual-cta ip-reveal">
//         <div>
//           <p className="ip-kicker cyan">For businesses</p>
//           <h2>
//             A Recruiting Partner
//             <br />
//             That Understands Technology.
//           </h2>
//           <p>
//             Build flexible, capable technology teams without turning recruiting
//             into another full-time project.
//           </p>
//           <Arrow to="/hire" light>
//             Hire Talent
//           </Arrow>
//         </div>
//         <div>
//           <p className="ip-kicker">For technology professionals</p>
//           <h2>
//             Build the Next Chapter
//             <br />
//             of Your Career.
//           </h2>
//           <p>
//             Connect with opportunities that align with your skills, experience,
//             and professional goals.
//           </p>
//           <Arrow to="/careers">Submit Resume</Arrow>
//         </div>
//       </section>

//       {/* =========================================================
//           EXISTING — FINAL CTA
//          ========================================================= */}
//       <section className="ip-final ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker cyan">Let's connect</p>
//           <h2>
//             Behind Every Great
//             <br />
//             Technology Team Are
//             <br />
//             Great People.
//           </h2>
//           <p>
//             Whether you're building a team or looking for your next
//             opportunity, Sweftfly Inc. is ready to start the conversation.
//           </p>
//           <div className="ip-actions">
//             <Link className="ip-btn" to="/hire">
//               Hire Talent
//             </Link>
//             <Link className="ip-btn ghost" to="/contact">
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './InnerPages.css';

// const Img = ({ src, alt, className = '' }) => (
//   <img className={className} src={src} alt={alt} loading="lazy" />
// );
// const Arrow = ({ to, children, light = false }) => (
//   <Link className={`ip-arrow ${light ? 'light' : ''}`} to={to}>
//     {children}
//     <span>→</span>
//   </Link>
// );
// const useReveal = () =>
//   useEffect(() => {
//     const n = document.querySelectorAll('.ip-reveal');
//     const o = new IntersectionObserver(
//       (e) => e.forEach((x) => x.isIntersecting && x.target.classList.add('shown')),
//       { threshold: 0.1 }
//     );
//     n.forEach((x) => o.observe(x));
//     return () => o.disconnect();
//   }, []);

// export default function About() {
//   useReveal();
//   return (
//     <main className="inner-page about-page">

//       {/* =========================================================
//           HERO
//          ========================================================= */}
//       <section className="about-hero">
//         <div className="ip-shell about-hero-grid">
//           <div>
//             <p className="ip-kicker">About Sweftfly Inc.</p>
//             <h1>
//               Technology Hiring,
//               <br />
//               <em>Built Around People.</em>
//             </h1>
//             <p>
//               Sweftfly Inc. helps organizations across the United States connect
//               with skilled technology professionals through focused recruiting,
//               flexible staffing solutions, and a hiring experience built around
//               real business needs.
//             </p>
//             <div className="ip-actions">
//               <Link className="ip-btn" to="/services">
//                 Explore Our Services
//               </Link>
//               <Link className="ip-btn ghost" to="/contact">
//                 Talk to Our Team
//               </Link>
//             </div>
//           </div>
//           <div className="about-hero-image">
//             <Img
//               src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
//               alt="Technology professionals collaborating in a bright modern office"
//             />
//             <aside>
//               <b>Technology Talent</b>
//               <span>Contract · C2H · Direct Hire</span>
//             </aside>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           WHAT WE DO — two images left, content right
//          ========================================================= */}
//       <section className="ip-section what-we-do ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker">What we do</p>

//           <div className="what-we-do-grid">
//             <div className="what-we-do-images">
//               <Img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85"
//                 alt="Engineering team exchanging ideas around a project board"
//               />
//               <Img
//                 src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85"
//                 alt="Recruiter having a natural professional conversation with a candidate"
//               />
//             </div>

//             <div className="what-we-do-copy">
//               <p>
//                 Sweftfly Inc. is a rapidly growing and professional software
//                 development company located in Hyderabad, India. We are
//                 dedicated and experts in rapid custom development of web-based,
//                 mobile applications development, distributed and standalone
//                 applications designed to meet your organization's specific
//                 requirements and business needs.
//               </p>
//               <p>
//                 We function as a full stakeholder to business, offering a
//                 consulting-led approach with an integrated portfolio of
//                 technology-led solutions that encompass the entire enterprise
//                 value chain. Our customer-centric engagement model defines how
//                 we engage with you — offering specialized services and
//                 solutions that meet the distinct needs of your business.
//               </p>
//               <p>
//                 We build bespoke teams around your domain and technology
//                 requirements drawn from our talent. Our domain expertise has
//                 been built upon decades of experience working across industries,
//                 and this knowledge underpins our suite of solutions.
//               </p>
//               <p>
//                 Our organization structure is domain-led and empowered to help
//                 provide customers a single window to industry-specific
//                 solutions. Agile industry units have embedded capabilities to
//                 enable rapid responses that provide a competitive edge to our
//                 customers.
//               </p>
//             </div>
//           </div>

//           <aside className="what-we-do-quote">
//             <span className="what-we-do-quote__mark">"</span>
//             <p>
//               Our success formula is{' '}
//               <em>Collaboration, Continuous feedback, and Transparency.</em>
//             </p>
//             <p>
//               We firmly believe that a team of talented, driven, and principled
//               people could do wonders.
//             </p>
//           </aside>
//         </div>
//       </section>

//       {/* =========================================================
//           VISION / MISSION / FOCUS — circle cards
//          ========================================================= */}
//       <section className="ip-section vision-mission ip-reveal">
//         <div className="ip-shell">
//           <div className="vm-head">
//             <p className="ip-kicker">Purpose, Ethics and Values</p>
//             <h2>
//               What We're Building
//               <br />
//               <em>Toward.</em>
//             </h2>
//           </div>

//           <div className="vm-circle-grid">
//             <article className="vm-circle-card">
//               <div className="vm-circle" aria-hidden="true">
//                 <span className="vm-circle__icon">🎯</span>
//               </div>
//               <span className="vm-circle-card__num">01</span>
//               <h3>Our Vision</h3>
//               <p>
//                 To become the preferred partner of software services and
//                 solutions — and to enable and enhance business potential with
//                 technology-driven innovations.
//               </p>
//             </article>

//             <article className="vm-circle-card">
//               <div className="vm-circle" aria-hidden="true">
//                 <span className="vm-circle__icon">🚀</span>
//               </div>
//               <span className="vm-circle-card__num">02</span>
//               <h3>Our Mission</h3>
//               <p>
//                 To build value-enhanced business solutions for our clients,
//                 leveraging best-fit technologies, and create the right place
//                 for passionate engineers to cultivate their tech-enlightenment.
//               </p>
//             </article>

//             <article className="vm-circle-card">
//               <div className="vm-circle" aria-hidden="true">
//                 <span className="vm-circle__icon">🔭</span>
//               </div>
//               <span className="vm-circle-card__num">03</span>
//               <h3>Our Focus</h3>
//               <p>
//                 To stay relentlessly client-first — solving real business
//                 problems with the right technology, nurturing engineering
//                 talent, and building long-term partnerships grounded in trust,
//                 transparency, and measurable outcomes.
//               </p>
//             </article>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           MORE THAN FILLING ROLES
//          ========================================================= */}
//       <section className="ip-section ip-reveal">
//         <div className="ip-shell editorial-split">
//           <h2>
//             More Than Filling Roles.
//             <br />
//             We Help Build Teams.
//           </h2>
//           <div className="long-copy">
//             <p>
//               Sweftfly Inc. is a technology-focused staffing and recruiting
//               company connecting businesses with professionals who can
//               contribute to their teams, projects, and long-term technology
//               goals.
//             </p>
//             <p>
//               We believe effective recruiting starts with understanding more
//               than a job description. Our approach considers the technologies
//               involved, the responsibilities of the role, the team environment,
//               the engagement model, and the objectives behind every hire.
//             </p>
//             <p>
//               From individual specialists to scalable technology teams, we help
//               organizations navigate hiring with greater clarity and
//               flexibility.
//             </p>
//             <Arrow to="/services">How We Work</Arrow>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           OUR PURPOSE
//          ========================================================= */}
//       <section className="ip-section purpose ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker">Our purpose</p>
//           <h2>What Guides Sweftfly</h2>
//           <div className="purpose-panels">
//             {[
//               [
//                 'Our Mission',
//                 'Make technology hiring simpler and more effective by connecting businesses with professionals whose skills and experience align with the work that needs to be done.',
//               ],
//               [
//                 'Our Approach',
//                 'Understand the requirement first, identify relevant talent second, and keep communication clear throughout the hiring journey.',
//               ],
//               [
//                 'Our Focus',
//                 'Build lasting relationships with businesses and technology professionals by providing a recruiting experience based on relevance, responsiveness, and trust.',
//               ],
//             ].map((x, i) => (
//               <article key={x[0]}>
//                 <span>{String(i + 1).padStart(2, '0')}</span>
//                 <div>
//                   <small>{x[0]}</small>
//                   <p>{x[1]}</p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           PEOPLE-FIRST APPROACH
//          ========================================================= */}
//       <section className="ip-section image-story ip-reveal">
//         <div className="ip-shell story-grid">
//           <div className="story-images">
//             <Img
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85"
//               alt="Engineering team exchanging ideas around a project board"
//             />
//             <Img
//               src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85"
//               alt="Recruiter having a natural professional conversation with a candidate"
//             />
//           </div>
//           <div>
//             <p className="ip-kicker">A people-first approach</p>
//             <h2>
//               Good Recruiting Starts
//               <br />
//               with Understanding.
//             </h2>
//             <p>Every hiring requirement has context.</p>
//             <p>
//               A growing engineering team may need speed and flexibility. A
//               critical project may require specialized expertise. A permanent
//               role may require deeper alignment between technical experience
//               and team dynamics.
//             </p>
//             <p>
//               Sweftfly begins by understanding that context before identifying
//               candidates.
//             </p>
//             <p>
//               This helps us focus on relevance instead of simply increasing the
//               number of resumes presented.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           WHY SWEFTLFY
//          ========================================================= */}
//       <section className="ip-section difference ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker cyan">Why Sweftfly</p>
//           <h2>
//             Designed for Modern
//             <br />
//             Technology Hiring.
//           </h2>
//           <div className="difference-rows">
//             {[
//               [
//                 'Technology-Focused Recruiting',
//                 'We concentrate on technology roles and skill sets, helping conversations begin with a stronger understanding of the requirement.',
//               ],
//               [
//                 'Curated Talent',
//                 'Our goal is to present relevant professionals based on experience, technical alignment, and role requirements rather than overwhelming hiring teams with resumes.',
//               ],
//               [
//                 'Flexible Staffing Models',
//                 'Support changing workforce needs through contract, contract-to-hire, direct hire, dedicated recruiting, and project-based staffing.',
//               ],
//               [
//                 'Human Communication',
//                 'Technology can support recruiting, but strong relationships still matter. We keep employers and professionals informed throughout the hiring process.',
//               ],
//             ].map((x, i) => (
//               <div key={x[0]}>
//                 <span>{String(i + 1).padStart(2, '0')}</span>
//                 <h3>{x[0]}</h3>
//                 <p>{x[1]}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           MATCHING WITH CONTEXT
//          ========================================================= */}
//       <section className="ip-section match-section ip-reveal">
//         <div className="ip-shell">
//           <div className="ip-center">
//             <p className="ip-kicker">Matching with context</p>
//             <h2>
//               The Right Match Goes
//               <br />
//               Beyond a Resume.
//             </h2>
//           </div>
//           <div className="match-map">
//             <div className="match-core">
//               Right-fit
//               <br />
//               talent
//             </div>
//             {[
//               'Technical Skills',
//               'Experience',
//               'Role Requirements',
//               'Team Alignment',
//               'Engagement Model',
//             ].map((x, i) => (
//               <span key={x} style={{ '--i': i }}>
//                 {x}
//               </span>
//             ))}
//           </div>
//           <p className="match-note">
//             We look at the complete hiring requirement so businesses can spend
//             more time speaking with relevant professionals and less time
//             filtering through mismatched applications.
//           </p>
//         </div>
//       </section>

//       {/* =========================================================
//           HOW WE PARTNER
//          ========================================================= */}
//       <section className="ip-section partner ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker">How we partner</p>
//           <h2>Clear. Focused. Collaborative.</h2>
//           <div className="partner-line">
//             {[
//               [
//                 'Listen',
//                 'Understand your hiring goals, technology environment, responsibilities, timeline, and engagement needs.',
//               ],
//               [
//                 'Align',
//                 'Define the candidate profile and establish what matters most for the role.',
//               ],
//               [
//                 'Search',
//                 'Identify technology professionals whose experience aligns with the requirement.',
//               ],
//               [
//                 'Connect',
//                 'Present selected candidates and coordinate the interview process.',
//               ],
//               [
//                 'Support',
//                 'Stay involved through selection, onboarding, and the engagement lifecycle.',
//               ],
//             ].map((x, i) => (
//               <article key={x[0]}>
//                 <span>{String(i + 1).padStart(2, '0')}</span>
//                 <h3>{x[0]}</h3>
//                 <p>{x[1]}</p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           DUAL CTA
//          ========================================================= */}
//       <section className="dual-cta ip-reveal">
//         <div>
//           <p className="ip-kicker cyan">For businesses</p>
//           <h2>
//             A Recruiting Partner
//             <br />
//             That Understands Technology.
//           </h2>
//           <p>
//             Build flexible, capable technology teams without turning recruiting
//             into another full-time project.
//           </p>
//           <Arrow to="/hire" light>
//             Hire Talent
//           </Arrow>
//         </div>
//         <div>
//           <p className="ip-kicker">For technology professionals</p>
//           <h2>
//             Build the Next Chapter
//             <br />
//             of Your Career.
//           </h2>
//           <p>
//             Connect with opportunities that align with your skills, experience,
//             and professional goals.
//           </p>
//           <Arrow to="/careers">Submit Resume</Arrow>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CTA
//          ========================================================= */}
//       <section className="ip-final ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker cyan">Let's connect</p>
//           <h2>
//             Behind Every Great
//             <br />
//             Technology Team Are
//             <br />
//             Great People.
//           </h2>
//           <p>
//             Whether you're building a team or looking for your next
//             opportunity, Sweftfly Inc. is ready to start the conversation.
//           </p>
//           <div className="ip-actions">
//             <Link className="ip-btn" to="/hire">
//               Hire Talent
//             </Link>
//             <Link className="ip-btn ghost" to="/contact">
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './InnerPages.css';

// const Img = ({ src, alt, className = '' }) => (
//   <img className={className} src={src} alt={alt} loading="lazy" />
// );
// const useReveal = () =>
//   useEffect(() => {
//     const n = document.querySelectorAll('.ip-reveal');
//     const o = new IntersectionObserver(
//       (e) => e.forEach((x) => x.isIntersecting && x.target.classList.add('shown')),
//       { threshold: 0.1 }
//     );
//     n.forEach((x) => o.observe(x));
//     return () => o.disconnect();
//   }, []);

// export default function About() {
//   useReveal();
//   return (
//     <main className="inner-page about-page">

//       {/* =========================================================
//           HERO
//          ========================================================= */}
//       <section className="about-hero">
//         <div className="ip-shell about-hero-grid">
//           <div>
//             <p className="ip-kicker">About Sweftfly Inc.</p>
//             <h1>
//               Technology Hiring,
//               <br />
//               <em>Built Around People.</em>
//             </h1>
//             <p>
//              SweftFly Inc delivers US IT staffing and technology talent solutions, connecting businesses with qualified professionals for critical technology roles and projects. We specialize in contract staffing, contract-to-hire, direct hire, and IT staff augmentation across modern technology domains.
//             </p>
//             <div className="ip-actions">
//               <Link className="ip-btn" to="/services">
//                 Explore Our Services
//               </Link>
//               <Link className="ip-btn ghost" to="/contact">
//                 Talk to Our Team
//               </Link>
//             </div>
//           </div>
//           <div className="about-hero-image">
//             <Img
//               src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
//               alt="Technology professionals collaborating in a bright modern office"
//             />
//             <aside>
//               <b>Technology Talent</b>
//               <span>Contract · C2H · Direct Hire</span>
//             </aside>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           WHAT WE DO — two images left, content right
//          ========================================================= */}
//       <section className="ip-section what-we-do ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker">What we do</p>

//           <div className="what-we-do-grid">
//             <div className="what-we-do-images">
//               <Img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85"
//                 alt="Engineering team exchanging ideas around a project board"
//               />
//               <Img
//                 src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85"
//                 alt="Recruiter having a natural professional conversation with a candidate"
//               />
//             </div>

//             <div className="what-we-do-copy">
//               <p>
//                 SweftFly Inc delivers enterprise-grade technology talent solutions that help organizations across the United States build, scale, and transform their technology capabilities. We provide highly qualified IT consultants across *Software Engineering, Cloud & DevOps, Data Engineering, Artificial Intelligence & Machine Learning, Cybersecurity, Enterprise Applications, Quality Engineering, and IT Infrastructure*. Our talent solutions are aligned with modern technology architectures, enterprise delivery frameworks, and the evolving demands of digital transformation.

//               </p>
//               <p>
                
// Through *Contract Staffing, Contract-to-Hire, Direct Placement, and Project-Based Resource Augmentation, we provide organizations with flexible access to specialized technology professionals at every level of the delivery lifecycle. From **Solution Architects, Technical Leads, and Full-Stack Engineers to Cloud Architects, DevOps Engineers, Data Scientists, AI/ML Engineers, QA Automation Specialists, and Business Analysts*, SweftFly Inc helps enterprises strengthen technical teams, accelerate critical initiatives, modernize technology ecosystems, and maintain the agility required to compete in a rapidly evolving digital landscape.
//               </p>
//               <p>
//                 {/* We build bespoke teams around your domain and technology
//                 requirements drawn from our talent. Our domain expertise has
//                 been built upon decades of experience working across industries,
//                 and this knowledge underpins our suite of solutions. */}
//               </p>
//               <p>
//                 {/* Our organization structure is domain-led and empowered to help
//                 provide customers a single window to industry-specific
//                 solutions. Agile industry units have embedded capabilities to
//                 enable rapid responses that provide a competitive edge to our
//                 customers. */}
//               </p>
//             </div>
//           </div>

//           <aside className="what-we-do-quote">
//             <span className="what-we-do-quote__mark">"</span>
//             <p>
//               Our success formula is{' '}
//               <em>Collaboration, Continuous feedback, and Transparency.</em>
//             </p>
//             <p>
//               We firmly believe that a team of talented, driven, and principled
//               people could do wonders.
//             </p>
//           </aside>
//         </div>
//       </section>

//       {/* =========================================================
//           VISION / MISSION / FOCUS — circle cards
//          ========================================================= */}
//       <section className="ip-section vision-mission ip-reveal">
//         <div className="ip-shell">
//           <div className="vm-head">
//             <p className="ip-kicker">Purpose, Ethics and Values</p>
//             <h2>
//               What We're Building
//               <br />
//               <em>Toward.</em>
//             </h2>
//           </div>

//           <div className="vm-circle-grid">
//             <article className="vm-circle-card">
//               <div className="vm-circle" aria-hidden="true">
//                 <span className="vm-circle__icon">🎯</span>
//               </div>
//               <span className="vm-circle-card__num">01</span>
//               <h3>Our Vision</h3>
//               <p>
//                Our Vision

// To be a trusted strategic partner for US enterprises by connecting exceptional technology talent with the right opportunities, enabling organizations to build high-performing teams, accelerate technology initiatives, and strengthen their long-term digital capabilities.

// We aspire to set a higher standard in **IT consulting and talent solutions** through deep technical expertise, strong industry understanding, and a commitment to delivering the right talent for every technology challenge.
//               </p>
//             </article>

//             <article className="vm-circle-card">
//               <div className="vm-circle" aria-hidden="true">
//                 <span className="vm-circle__icon">🚀</span>
//               </div>
//               <span className="vm-circle-card__num">02</span>
//               <h3>Our Mission</h3>
//               <p>
//                 Our Mission

// Our mission is to deliver high-impact technology solutions and specialized IT talent that solve complex business challenges. We bring together engineering expertise, emerging technologies, industry knowledge, and delivery excellence to help organizations modernize technology ecosystems, accelerate innovation, and achieve sustainable business outcomes.
//               </p>
//             </article>

//             <article className="vm-circle-card">
//               <div className="vm-circle" aria-hidden="true">
//                 <span className="vm-circle__icon">🔭</span>
//               </div>
//               <span className="vm-circle-card__num">03</span>
//               <h3>Our Focus</h3>
//               <p>

//                 Focus

// Technology. Talent. Transformation.

// We focus on modern engineering, cloud, AI, data, cybersecurity, digital transformation, and specialized IT talent to help organizations build, modernize, and scale
//               </p>
//             </article>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           HOW WE PARTNER
//          ========================================================= */}
//       <section className="ip-section partner ip-reveal">
//         <div className="ip-shell">
//           <p className="ip-kicker">How we partner</p>
//           <h2>Clear. Focused. Collaborative.</h2>
//           <div className="partner-line">
//             {[
//               [
//                 'Listen',
//                 'Understand your hiring goals, technology environment, responsibilities, timeline, and engagement needs.',
//               ],
//               [
//                 'Align',
//                 'Define the candidate profile and establish what matters most for the role.',
//               ],
//               [
//                 'Search',
//                 'Identify technology professionals whose experience aligns with the requirement.',
//               ],
//               [
//                 'Connect',
//                 'Present selected candidates and coordinate the interview process.',
//               ],
//               [
//                 'Support',
//                 'Stay involved through selection, onboarding, and the engagement lifecycle.',
//               ],
//             ].map((x, i) => (
//               <article key={x[0]}>
//                 <span>{String(i + 1).padStart(2, '0')}</span>
//                 <h3>{x[0]}</h3>
//                 <p>{x[1]}</p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           CTA — image left (no text), content right
//          ========================================================= */}
//       <section className="dual-cta ip-reveal">
//         {/* LEFT — image only */}
//         <div className="dual-cta__panel dual-cta__panel--dark">
//           <div className="dual-cta__image">
//             <Img
//               src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85"
//               alt="Business team collaborating on hiring strategy"
//             />
//           </div>
//         </div>

//         {/* RIGHT — For Professionals */}
//         <div className="dual-cta__panel dual-cta__panel--light">
//           <div className="dual-cta__content">
//             <p className="ip-kicker">For technology professionals</p>
//             <h2>
//               Build the Next Chapter
//               <br />
//               of Your Career.
//             </h2>
//             <p>
//               Connect with opportunities that align with your skills,
//               experience, and professional goals.
//             </p>
//             <Link to="/contact" className="ip-arrow">
//               Submit Resume <span>→</span>
//             </Link>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InnerPages.css';

const Img = ({ src, alt, className = '' }) => (
  <img className={className} src={src} alt={alt} loading="lazy" />
);
const useReveal = () =>
  useEffect(() => {
    const n = document.querySelectorAll('.ip-reveal');
    const o = new IntersectionObserver(
      (e) => e.forEach((x) => x.isIntersecting && x.target.classList.add('shown')),
      { threshold: 0.1 }
    );
    n.forEach((x) => o.observe(x));
    return () => o.disconnect();
  }, []);

export default function About() {
  useReveal();
  return (
    <main className="inner-page about-page">

      {/* =========================================================
          HERO
         ========================================================= */}
      <section className="about-hero">
        <div className="ip-shell about-hero-grid">
          <div>
            <p className="ip-kicker">About Sweftfly Inc.</p>
            <h1>
              Technology Hiring,
              <br />
              <em>Built Around People.</em>
            </h1>
            <p>
              SweftFly Inc delivers US IT staffing and technology talent solutions, connecting businesses with qualified professionals for critical technology roles and projects. We specialize in contract staffing, contract-to-hire, direct hire, and IT staff augmentation across modern technology domains.
            </p>
            <div className="ip-actions">
              <Link className="ip-btn" to="/services">
                Explore Our Services
              </Link>
              <Link className="ip-btn ghost" to="/contact">
                Talk to Our Team
              </Link>
            </div>
          </div>
          <div className="about-hero-image">
            <Img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
              alt="Technology professionals collaborating in a bright modern office"
            />
            <aside>
              <b>Technology Talent</b>
              <span>Contract · C2H · Direct Hire</span>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO — two images left, content right
         ========================================================= */}
      <section className="ip-section what-we-do ip-reveal">
        <div className="ip-shell">
          <p className="ip-kicker">What we do</p>

          <div className="what-we-do-grid">
            <div className="what-we-do-images">
              <Img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85"
                alt="Engineering team exchanging ideas around a project board"
              />
              <Img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85"
                alt="Recruiter having a natural professional conversation with a candidate"
              />
            </div>

            <div className="what-we-do-copy">
              <p>
                SweftFly Inc delivers enterprise-grade technology talent solutions that help organizations across the United States build, scale, and transform their technology capabilities. We provide highly qualified IT consultants across Software Engineering, Cloud & DevOps, Data Engineering, Artificial Intelligence & Machine Learning, Cybersecurity, Enterprise Applications, Quality Engineering, and IT Infrastructure. Our talent solutions are aligned with modern technology architectures, enterprise delivery frameworks, and the evolving demands of digital transformation.
              </p>
              <p>
                Through Contract Staffing, Contract-to-Hire, Direct Placement, and Project-Based Resource Augmentation, we provide organizations with flexible access to specialized technology professionals at every level of the delivery lifecycle. From Solution Architects, Technical Leads, and Full-Stack Engineers to Cloud Architects, DevOps Engineers, Data Scientists, AI/ML Engineers, QA Automation Specialists, and Business Analysts, SweftFly Inc helps enterprises strengthen technical teams, accelerate critical initiatives, modernize technology ecosystems, and maintain the agility required to compete in a rapidly evolving digital landscape.
              </p>
            </div>
          </div>

          <aside className="what-we-do-quote">
            <span className="what-we-do-quote__mark">"</span>
            <p>
              Our success formula is{' '}
              <em>Collaboration, Continuous feedback, and Transparency.</em>
            </p>
            <p>
              We firmly believe that a team of talented, driven, and principled
              people could do wonders.
            </p>
          </aside>
        </div>
      </section>

      {/* =========================================================
          VISION / MISSION / FOCUS — circle cards
         ========================================================= */}
      <section className="ip-section vision-mission ip-reveal">
        <div className="ip-shell">
          <div className="vm-head">
            <p className="ip-kicker">Purpose, Ethics and Values</p>
            <h2>
              What We're Building
              <br />
              <em>Toward.</em>
            </h2>
          </div>

          <div className="vm-circle-grid">
            <article className="vm-circle-card">
              <div className="vm-circle" aria-hidden="true">
                <span className="vm-circle__icon">🎯</span>
              </div>
              <span className="vm-circle-card__num">01</span>
              <h3>Our Vision</h3>
              <p>
                To be a trusted strategic partner for US enterprises by
                connecting exceptional technology talent with the right
                opportunities, enabling organizations to build high-performing
                teams, accelerate technology initiatives, and strengthen their
                long-term digital capabilities.
              </p>
              <p>
                We aspire to set a higher standard in IT consulting and talent
                solutions through deep technical expertise, strong industry
                understanding, and a commitment to delivering the right talent
                for every technology challenge.
              </p>
            </article>

            <article className="vm-circle-card">
              <div className="vm-circle" aria-hidden="true">
                <span className="vm-circle__icon">🚀</span>
              </div>
              <span className="vm-circle-card__num">02</span>
              <h3>Our Mission</h3>
              <p>
                Our mission is to deliver high-impact technology solutions and
                specialized IT talent that solve complex business challenges.
                We bring together engineering expertise, emerging technologies,
                industry knowledge, and delivery excellence to help
                organizations modernize technology ecosystems, accelerate
                innovation, and achieve sustainable business outcomes.
              </p>
            </article>

            <article className="vm-circle-card">
              <div className="vm-circle" aria-hidden="true">
                <span className="vm-circle__icon">🔭</span>
              </div>
              <span className="vm-circle-card__num">03</span>
              <h3>Our Focus</h3>
              <p>
                Technology. Talent. Transformation. We focus on modern
                engineering, cloud, AI, data, cybersecurity, digital
                transformation, and specialized IT talent to help organizations
                build, modernize, and scale.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENGAGEMENT MODELS MARQUEE (replaces How We Partner)
         ========================================================= */}
      <section className="ip-marquee" aria-label="Engagement models">
        <div className="ip-marquee__track">
          {[0, 1].map((copy) => (
            <div
              className="ip-marquee__set"
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {[
                'Contract Staffing',
                'Contract-to-Hire',
                'Project based staffing',
                'Resource Augmentation',
              ].map((item) => (
                <span className="ip-marquee__item" key={`${copy}-${item}`}>
                  {item}
                  <span className="ip-marquee__dot" aria-hidden="true">
                    •
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          CTA — image left (no text), content right
         ========================================================= */}
      <section className="dual-cta ip-reveal">
        {/* LEFT — image only */}
        <div className="dual-cta__panel dual-cta__panel--dark">
          <div className="dual-cta__image">
            <Img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85"
              alt="Business team collaborating on hiring strategy"
            />
          </div>
        </div>

        {/* RIGHT — For Professionals */}
        <div className="dual-cta__panel dual-cta__panel--light">
          <div className="dual-cta__content">
            <p className="ip-kicker">For technology professionals</p>
            <h2>
              Build the Next Chapter
              <br />
              of Your Career.
            </h2>
            <p>
              Connect with opportunities that align with your skills,
              experience, and professional goals.
            </p>
            <Link to="/contact" className="ip-arrow">
              Submit Resume <span>→</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}