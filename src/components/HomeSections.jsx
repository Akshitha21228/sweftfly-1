// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import './HomeSections.css';

// const profiles = [
//   ['Rahul Sharma', 'Senior Java Developer', ['Java', 'Spring Boot', 'AWS']],
//   ['Lisa Chen', 'Full Stack Engineer', ['React', 'Node.js', 'TypeScript']],
//   ['David Miller', 'DevOps Engineer', ['Kubernetes', 'Docker', 'Terraform']],
//   ['Maria Rodriguez', 'Data Engineer', ['Python', 'Spark', 'Snowflake']],
//   ['Ethan Brooks', 'QA Automation Engineer', ['Cypress', 'Playwright', 'API Testing']],
//   ['Priya Nair', 'Cloud Engineer', ['AWS', 'Terraform', 'Monitoring']],
//   ['Noah Patel', '.NET Developer', ['.NET Core', 'Azure', 'SQL Server']],
//   ['Sophia Kim', 'AI / ML Engineer', ['Python', 'TensorFlow', 'MLOps']],
//   ['Daniel Scott', 'Salesforce Developer', ['Apex', 'LWC', 'CRM']],
//   ['Olivia Turner', 'Business Analyst', ['Agile', 'Jira', 'Discovery']],
// ];
// const categories = [
//   ['01', 'Java Engineering', 'Enterprise systems, built to last.', 'Engineers who bring clarity to complex services, integrations, and business-critical applications.', ['Java', 'Spring Boot', 'Microservices']],
//   ['02', 'Full Stack Development', 'From first interaction to final API.', 'Versatile developers who connect thoughtful user experiences with dependable backend systems.', ['MERN / MEAN', 'Django', '.NET']],
//   ['03', 'React & Node.js', 'Digital products that move forward.', 'Focused frontend and backend expertise for responsive interfaces and modern web platforms.', ['React', 'Next.js', 'TypeScript']],
//   ['04', 'Quality Engineering', 'Confidence in every release.', 'Quality specialists who make testing repeatable and help teams catch issues before customers do.', ['Selenium', 'Cypress', 'Playwright']],
//   ['05', 'Cloud & DevOps', 'A stronger foundation for delivery.', 'Infrastructure and automation professionals who help teams deploy, operate, and scale reliably.', ['AWS / Azure', 'Kubernetes', 'CI/CD']],
//   ['06', 'Data Engineering', 'Make your data work together.', 'Specialists who organize complex sources into reliable pipelines for analytics and decision-making.', ['Spark', 'Snowflake', 'ETL']],
// ];
// const benefits = [
//   ['Hire Quickly', 'Keep projects moving with focused shortlists and flexible engagements that scale with your team.', '↗', 'hire-quickly.png', 'Recruiter welcoming a candidate with a handshake in a modern office'],
//   ['Pre-Screened Talent', 'Meet professionals reviewed for relevant technical skills, experience, and role readiness.', '✓', 'pre-screened.png', 'Technical interviewer and engineer reviewing code at a workstation'],
//   ['US-Wide Coverage', 'Connect with technology professionals across the United States, wherever your next project takes you.', '◎', 'us-coverage.png', 'Illustrative network of connected locations across the contiguous United States'],
//   ['High Success Rate', 'Thoughtful screening and close collaboration help create lasting matches, not just filled positions.', '✦', 'success-rate.png', 'Technology team celebrating a successful project together'],
// ];
// const steps = [
//   ['Share Your Requirements', 'Tell us about your goals, technical needs, and team dynamics. We build the search around you.', 'requirements.png', 'Recruiter listening to a hiring manager describe team requirements'],
//   ['Review Hand-Selected Talent', 'Meet a focused shortlist of professionals selected for your requirements, ready for your review.', 'shortlist.png', 'Hiring manager and recruiter reviewing candidate portfolios on a tablet'],
//   ['Hire with Confidence', 'Choose the right fit and an engagement model that works for your team. We support the next steps.', 'onboarding.png', 'New software engineer welcomed by a colleague at a workstation'],
// ];

// function TechnologyIcon({ number }) {
//   if (number === '01') return <span className="sf-technology-icon sf-java-icon"><img src="/images/java-official.png" alt="Java" width="44" height="54"/></span>;
//   const shapes = {
//     '01': <><path d="M5 10h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5Zm12 1h2a3 3 0 0 1 0 6h-2M4 23h16M9 7c-3-3 3-3 0-6M14 7c-3-3 3-3 0-6"/></>,
//     '02': <><path d="m12 2 10 5-10 5L2 7Zm-10 10 10 5 10-5M2 17l10 5 10-5"/></>,
//     '03': <><path d="m7 6-5 6 5 6m10-12 5 6-5 6M14 3l-4 18"/></>,
//     '04': <><path d="m12 2 8 3v6c0 5-4 8-8 11-4-3-8-6-8-11V5Zm-4 10 3 3 5-6"/></>,
//     '05': <><path d="M6 18a5 5 0 0 1-1-10 7 7 0 0 1 13-1 5.5 5.5 0 0 1 0 11M12 12v10m-3-3 3 3 3-3"/></>,
//     '06': <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 4 18 4 18 0V5M3 12c0 4 18 4 18 0"/></>,
//   };
//   return <span className="sf-technology-icon" aria-hidden="true"><svg viewBox="0 0 24 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{shapes[number]}</svg></span>;
// }

// function Button({ children, secondary = false, to = '/contact' }) {
//   return <Link className={`sf-button${secondary ? ' sf-secondary' : ''}`} to={to}>{children}<span aria-hidden="true">↗</span></Link>;
// }
// function SectionHeader({ label, title, children }) {
//   return <header className="sf-heading"><p className="sf-eyebrow">{label}</p><h2>{title}</h2>{children && <p>{children}</p>}</header>;
// }
// function ProfileCard({ profile, compact = false }) {
//   const [name, role, skills] = profile;
//   return <article className={`sf-profile${compact ? ' sf-compact' : ''}`}>
//     <div className="sf-person"><span className="sf-avatar" aria-hidden="true">{name.split(' ').map(word => word[0]).join('')}</span><div><h3>{name}</h3><p>{role}</p></div></div>
//     {!compact && <><div className="sf-profile-divider"/><span className="sf-verified">✓ Verified Expert <small>Sample profile</small></span><div className="sf-tags">{skills.map(skill => <span key={skill}>{skill}</span>)}</div><p className="sf-profile-footer">SWEFTFLY <span>Technology network</span></p></>}
//   </article>;
// }
// function AutoScrollRow({ items, second = false }) {
//   return <div className={`sf-marquee${second ? ' sf-row-two' : ''}`} tabIndex={0} aria-label="Sample talent profiles; focus or hover to pause scrolling"><div className="sf-track">
//     {[0, 1].map(copy => <div className="sf-profile-set" key={copy} aria-hidden={copy === 1 ? true : undefined}>{items.map(profile => <ProfileCard key={profile[0]} profile={profile} />)}</div>)}
//   </div></div>;
// }

// export default function HomeSections() {
//   const root = useRef(null);
//   useEffect(() => {
//     if (!root.current || !('IntersectionObserver' in window)) return;
//     const media = window.matchMedia('(prefers-reduced-motion: reduce)');
//     if (media.matches) return;
//     const nodes = root.current.querySelectorAll('.sf-heading, .sf-intro-grid > div, .sf-tech-card, .sf-benefit, .sf-process > article, .sf-stats > div, .sf-final > div, .sf-network-bottom');
//     const observer = new IntersectionObserver(entries => entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('sf-entered');
//         observer.unobserve(entry.target);
//       }
//     }), { threshold: 0.08 });
//     nodes.forEach((node, index) => {
//       node.style.setProperty('--sf-enter-delay', `${(index % 3) * 65}ms`);
//       node.classList.add('sf-enter');
//       observer.observe(node);
//     });
//     return () => {
//       observer.disconnect();
//       nodes.forEach(node => node.classList.remove('sf-enter', 'sf-entered'));
//     };
//   }, []);
//   return <main className="sf-home" ref={root}>
//     <section className="sf-section sf-intro"><div className="sf-shell sf-intro-grid">
//       <div><p className="sf-eyebrow">Great people. Meaningful progress.</p><h1>Hire top technology talent.<br /><em>Build what’s next.</em></h1><p className="sf-intro-copy">Sweftfly connects your business with pre-screened technology professionals across engineering, cloud, data, and AI. The right expertise, when your team needs it.</p><div className="sf-actions"><Button>Hire Top Talent</Button><a className="sf-text-link" href="#talent-network">Explore Talent <span aria-hidden="true">→</span></a></div><div className="sf-intro-note"><span>✓ Technology-focused</span><span>✓ Flexible engagements</span></div></div>
//       <div className="sf-showcase"><img src="/Hero4.png" width="1695" height="928" alt="Professionals discussing a technology project around a meeting table" loading="lazy" /><div className="sf-image-label"><span className="sf-live-dot" />People behind your next breakthrough</div><div className="sf-featured">{profiles.slice(0, 4).map(profile => <ProfileCard key={profile[0]} profile={profile} compact />)}</div><p className="sf-caption">Illustrative profiles · not live candidate listings</p></div>
//     </div></section>

//     <section className="sf-section sf-soft sf-expertise"><div className="sf-shell"><SectionHeader label="Precision in every discipline" title={<>TALENT FOR EVERY STACK.<br/><em>Build Your Stack</em></>}>Find the expertise your next milestone demands, from product engineering to the platforms behind it.</SectionHeader><div className="sf-tech-grid">{categories.map(([number, title, headline, copy, skills]) => <article className="sf-tech-card" key={title}><TechnologyIcon number={number}/><h3>{title}</h3><p className="sf-tech-headline">{headline}</p><p className="sf-tech-description">{copy}</p><div className="sf-tech-skills">{skills.map(skill => <span key={skill}>{skill}</span>)}</div><Link to="/contact" aria-label={`Discuss ${title} hiring`}>HIRE TALENT <span aria-hidden="true">→</span></Link></article>)}</div></div></section>

//     <section className="sf-section"><div className="sf-shell"><SectionHeader label="Your team, your timeline" title={<>Build amazing teams,<br/><em>on demand.</em></>}>Move from an open role to new possibilities with a recruiting partner that understands your priorities.</SectionHeader><div className="sf-benefit-grid">{benefits.map(([title, copy, icon, image, alt]) => <article className="sf-benefit" key={title}><div className="sf-benefit-photo"><img src={`/images/benefits/${image}`} alt={alt} loading="lazy" decoding="async" width="1536" height="1024"/><span aria-hidden="true">{icon}</span></div><div className="sf-card-copy"><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>

//     <section className="sf-section sf-network" id="talent-network"><div className="sf-shell sf-network-heading"><SectionHeader label="People who make a difference" title={<>Meet talent<br/><em>in our network.</em></>}>A glimpse of the expertise we recruit across engineering, cloud, quality, data, and AI.</SectionHeader></div><AutoScrollRow items={profiles}/><AutoScrollRow items={[...profiles.slice(5), ...profiles.slice(0, 5)]} second/><div className="sf-shell sf-network-bottom"><p className="sf-caption">Fictional sample profiles. Verification badges illustrate the proposed card design.</p><Button>Discover More Talent</Button></div></section>

//     <section className="sf-section"><div className="sf-shell"><SectionHeader label="A clear path to your next hire" title={<>Hiring made <em>easy.</em></>}>Less complexity. More confidence. A recruiting process built around your team.</SectionHeader><div className="sf-process">{steps.map(([title, copy, image, alt], index) => <article key={title}><div className="sf-step-photo"><img src={`/images/process/${image}`} alt={alt} width="1536" height="1024" loading="lazy" decoding="async"/><span className="sf-step-number">0{index + 1}</span></div><div className="sf-step-copy"><h3>{title}</h3><p>{copy}</p></div></article>)}</div><div className="sf-center"><Button>Hire Talent</Button></div></div></section>

//     <section className="sf-stats"><div className="sf-shell"><p className="sf-eyebrow">Our impact · illustrative metrics</p><div className="sf-stat-grid">{[['500+', 'Placements Made'], ['150+', 'Happy Clients'], ['50', 'States Covered'], ['98%', 'Client Satisfaction']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><p className="sf-caption">Sample figures from the design brief, pending Sweftfly verification before publication.</p></div></section>

//     <section className="sf-section sf-final"><div className="sf-shell"><p className="sf-eyebrow">Let’s build something great</p><h2>Ready to build <em>your team?</em></h2><p>Your next chapter starts with the right people. Partner with Sweftfly for focused, flexible technology staffing.</p><div className="sf-actions"><Button>Hire Talent</Button><a className="sf-button sf-secondary" href="mailto:info@sweftflyinc.com?subject=Resume%20Submission">Submit Resume <span aria-hidden="true">↗</span></a></div></div></section>
//   </main>;
// }
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomeSections.css';

const sectors = [
  ['Consulting', 'Strategy & Advisory', '01'],
  ['Media & Entertainment', 'Content & Platforms', '02'],
  ['Staffing', 'Technology Talent', '03'],
  ['Training', 'Upskilling & Enablement', '04'],
  ['Cyber Security', 'Threat Defense', '05'],
  ['Testing Services', 'Quality Engineering', '06'],
  ['Customer Experience', 'Digital Front-Office', '07'],
  ['Professional Services', 'Expert Delivery', '08'],
];
const radialSectors = [
  { label: 'STRATEGY AND\nDESIGN', angle: -90 },
  { label: 'DIGITAL\nCUSTOMER', angle: -30 },
  { label: 'INTELLIGENT\nOPERATIONS', angle: 30 },
  { label: 'FUTURE\nENTERPRISE', angle: 90 },
  { label: 'DIGITAL\nINSIGHTS', angle: 150 },
  { label: 'DIGITAL\nFOUNDATION', angle: 210 },
];
const services = [
  {
    num: '01',
    title: 'Consulting',
    text: 'Sweftfly is a software consulting company.',
    href: '/services/consultation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 15l4-4 3 3 5-6" />
        <circle cx="20" cy="8" r="1.5" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Staffing',
    text: 'We provide a full spectrum of IT staffing services worldwide.',
    href: '/services/staffing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.2" />
        <circle cx="17" cy="9" r="2.2" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <path d="M15.5 14.5a4 4 0 0 1 5.5 3.7V20" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Training',
    text: 'Launch your custom software development plans.',
    href: '/services/training',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 2 8l10 5 10-5-10-5Z" />
        <path d="M6 10v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
        <path d="M22 8v6" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Job Support',
    text: 'We provide job support for all kinds of software engineers.',
    href: '/services/job-support',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M14.5 14.5 20 20" />
        <path d="M4 4l3 3" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'H1B Filing',
    text: 'We will file the H1B visa.',
    href: '/services/h1b-filing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6M9 17h4" />
      </svg>
    ),
  },
];

function Button({ children, secondary = false, to = '/contact' }) {
  return <Link className={`sf-button${secondary ? ' sf-secondary' : ''}`} to={to}>{children}<span aria-hidden="true">↗</span></Link>;
}
function SectionHeader({ label, title, children }) {
  return <header className="sf-heading"><p className="sf-eyebrow">{label}</p><h2>{title}</h2>{children && <p>{children}</p>}</header>;
}

export default function HomeSections() {
  const root = useRef(null);
  useEffect(() => {
    if (!root.current || !('IntersectionObserver' in window)) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;
    const nodes = root.current.querySelectorAll('.sf-heading, .sf-final > div, .sf-sectors__intro, .sf-sector-card, .sf-radial__visual, .sf-radial__image, .sf-services__head, .sf-service-card, .sf-team-intro, .sf-team-image');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('sf-entered');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    nodes.forEach((node, index) => {
      node.style.setProperty('--sf-enter-delay', `${(index % 3) * 65}ms`);
      node.classList.add('sf-enter');
      observer.observe(node);
    });
    return () => {
      observer.disconnect();
      nodes.forEach(node => node.classList.remove('sf-enter', 'sf-entered'));
    };
  }, []);
  return <main className="sf-home" ref={root}>
    {/* =========================================================
        TEAM INTRO — heading left, image right (white bg)
       ========================================================= */}
    <section className="sf-team-intro-section" id="team-intro">
      <div className="sf-shell sf-team-intro-grid">
        <div className="sf-team-intro">
          <p className="sf-eyebrow">Why Sweftfly</p>
          <h2>
            Great teams start<br />
            <em>with the right people.</em>
          </h2>
          <p className="sf-team-intro-copy">
            We connect growing organizations with technology professionals who
            understand the work — not just the job title.
          </p>
          <div className="sf-actions">
            <Button>Hire Top Talent</Button>
            <a className="sf-text-link" href="#services">Explore Services <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <div className="sf-team-image">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
            alt="Team of technology professionals collaborating in a modern office"
            loading="lazy"
            width="1400"
            height="1000"
          />
        </div>
      </div>
    </section>

    {/* =========================================================
        SECTORS
       ========================================================= */}
    <section className="sf-sectors" id="sectors">
      <div className="sf-shell sf-sectors__grid">
        <div className="sf-sectors__intro">
          <p className="sf-eyebrow">Sectors</p>
          <h2>
            Where industries converge,<br />
            <em>we build what's next.</em>
          </h2>
          <p className="sf-sectors__copy">
            As industries converge and new industries emerge, we are
            re-imagining our strategy, solutions, and platforms as well. Our
            innovators and thought leaders are in continuing conversations with
            those who influence and shape the future of industries.
          </p>
        </div>

        <div className="sf-sectors__cards">
          {sectors.map(([title, subtitle, num], i) => (
            <a
              key={title}
              href="/contact"
              className="sf-sector-card"
              style={{ '--i': i }}
            >
              <span className="sf-sector-card__num">{num}</span>
              <div className="sf-sector-card__body">
                <h3>
                  {title} <span aria-hidden="true">↗</span>
                </h3>
                <p>{subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* =========================================================
        RADIAL
       ========================================================= */}
    <section className="sf-radial" id="sector-map">
      <div className="sf-shell sf-radial__grid">
        <div className="sf-radial__visual">
          <div className="sf-radial__hub" aria-hidden="true">
            <span className="sf-radial__pulse" />
            <span className="sf-radial__pulse sf-radial__pulse--2" />
            <strong>SWIFTFLY</strong>
          </div>

          <ul className="sf-radial__nodes">
            {radialSectors.map((n, i) => (
              <li
                key={`${n.label}-${i}`}
                className="sf-radial__node"
                style={{ '--angle': `${n.angle}deg`, '--i': i }}
              >
                <span className="sf-radial__dot" />
                <span className="sf-radial__label">{n.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="sf-radial__image">
          <img
            src="https://thumbs.dreamstime.com/b/business-strategy-planning-concept-digital-icons-laptop-technology-modern-scene-featuring-person-using-overlayed-415986451.jpg"
            alt="Business strategy and digital planning with technology icons"
            loading="lazy"
            width="1200"
            height="1200"
          />
        </div>
      </div>
    </section>

    {/* =========================================================
        SERVICES — 5 cards in one row
       ========================================================= */}
    <section className="sf-services" id="services">
      <div className="sf-services__bg" aria-hidden="true">
        <img
          src="https://images.openai.com/static-rsc-4/jZ1sl3c8jPxVRY0M0mG8Usmmzg98d3WGAID79MwFpHvxqRwZjdkLcBKrb9wcRZ11bwxMHsZOjCVhBqv0C9-w57QnbnxgmQwFu2GaHbKz1Q5o4iE9p3DhYnhAuIIjinpO8RuO0BtYQaundI4nlaJeG_lEBwW_zZU83zPNk0nJ7AAeY5yk8Kv9oVSDoIMDDSCY?purpose=fullsize"
          alt=""
        />
        <div className="sf-services__bg-overlay" />
      </div>

      <div className="sf-shell sf-services__inner">
        <header className="sf-services__head">
          <p className="sf-eyebrow">Our Services</p>
          <h2>
            What we do —<br />
            <em>end to end.</em>
          </h2>
        </header>

        <div className="sf-services__grid sf-services__grid--five">
          {services.map((s, i) => {
            const accents = ['navy', 'slate', 'ocean', 'cyan', 'indigo'];
            return (
              <Link
                key={s.title}
                to={s.href}
                className={`sf-service-card sf-service-card--${accents[i % accents.length]}`}
              >
                <div className="sf-service-card__header">
                  <span className="sf-service-card__num">{s.num}</span>
                  <div className="sf-service-card__icon">{s.icon}</div>
                </div>

                <div className="sf-service-card__body">
                  <h3>
                    {s.title}
                    <span aria-hidden="true">↗</span>
                  </h3>
                  <p>{s.text}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    {/* =========================================================
        FINAL CTA
       ========================================================= */}
    <section className="sf-section sf-final">
      <div className="sf-shell">
        <p className="sf-eyebrow">Let's build something great</p>
        <h2>Ready to build <em>your team?</em></h2>
        <p>Your next chapter starts with the right people. Partner with Sweftfly for focused, flexible technology staffing.</p>
        <div className="sf-actions">
          <Button>Hire Talent</Button>
          <a className="sf-button sf-secondary" href="mailto:info@sweftflyinc.com?subject=Resume%20Submission">Submit Resume <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  </main>;
}