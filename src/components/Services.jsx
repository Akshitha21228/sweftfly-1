import React from 'react';
import { NavLink } from 'react-router-dom';
import './Services.css';

const services = [
  ['01', 'IT Staffing', "Access qualified, pre-screened IT professionals across today’s most in-demand technologies and skill sets."],
  ['02', 'Contract Staffing', 'Scale your workforce quickly with experienced professionals for short-term, long-term, and project-based requirements.'],
  ['03', 'Contract-to-Hire', 'Evaluate candidates on the job before making a permanent hiring decision, reducing risk while finding the right long-term fit.'],
  ['04', 'Direct Hire / Full-Time Hiring', 'Find permanent technology professionals who align with your technical requirements, business goals, and company culture.'],
  ['05', 'Dedicated Recruiting', 'Get a dedicated recruiting team focused exclusively on your hiring requirements, timelines, and talent strategy.'],
  ['06', 'Project-Based Staffing', 'Build specialized technology teams for specific projects, implementations, migrations, and digital transformation initiatives.'],
];

const benefits = [
  ['qualified', 'Qualified Talent', 'Candidates are carefully screened for technical skills, experience, and role compatibility.'],
  ['speed', 'Faster Hiring', 'Our streamlined recruiting process helps reduce time-to-hire and keeps critical positions moving.'],
  ['flexible', 'Flexible Engagements', 'Choose contract, contract-to-hire, direct hire, or project-based staffing based on your needs.'],
  ['support', 'Dedicated Support', 'Our recruiting team works closely with you from requirement gathering through successful onboarding.'],
];

const technologies = [
  ['Software Development', 'Java, .NET, Python, JavaScript, React, Angular'],
  ['Cloud & DevOps', 'AWS, Azure, GCP, Kubernetes, Docker'],
  ['Data & AI', 'Data Engineering, Machine Learning, AI, BI, Analytics'],
  ['Cybersecurity', 'Cloud Security, IAM, SOC, Risk & Compliance'],
  ['QA & Automation', 'Selenium, Cypress, Performance & API Testing'],
  ['ERP & CRM', 'SAP, Oracle, Salesforce, Microsoft Dynamics'],
  ['Business Analysis', 'Requirements, Process Design, Product Analysis'],
  ['Project Management', 'Agile, Scrum, PMO, Program Management'],
  ['Infrastructure & Networking', 'Systems, Networks, Support, Data Centers'],
];

const process = [
  ['01', 'Share Your Requirements', 'Tell us the skills, experience, location, engagement type, and timeline you need.'],
  ['02', 'Talent Sourcing', 'Our recruiters identify qualified professionals from our talent network.'],
  ['03', 'Screening & Evaluation', 'Candidates are evaluated based on technical expertise, experience, and role requirements.'],
  ['04', 'Interview & Selection', 'Review shortlisted candidates and select the professionals who best fit your team.'],
  ['05', 'Onboarding & Support', 'We coordinate onboarding and continue supporting you throughout the engagement.'],
];

const BenefitIcon = ({ type }) => {
  const icons = {
    qualified: <><circle cx="12" cy="8" r="3"/><path d="M5.5 20a6.5 6.5 0 0 1 10.1-5.4"/><path d="m16 18 2 2 4-5"/></>,
    speed: <><circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/></>,
    flexible: <><path d="M7 7h11l-3-3M17 17H6l3 3"/><path d="M18 7l-3 3M6 17l3-3"/></>,
    support: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2"/><path d="M3 20a6 6 0 0 1 12 0M15 16a5 5 0 0 1 6 4"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[type]}</svg>;
};

const ArrowIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5"/></svg>;

function Services() {
  return (
    <div className="services-page">
      <main>
        <section className="services-hero">
          <div className="services-hero-glow" />
          <div className="services-shell services-hero-content">
            <p className="services-eyebrow">Our Services</p>
            <h1>Flexible IT Staffing Solutions <span>Built for Your Business</span></h1>
            <p className="services-hero-copy">From contract professionals to permanent technology teams, Sweftfly Inc. helps businesses across the United States find qualified IT talent quickly, efficiently, and with confidence.</p>
            <div className="services-actions">
              <NavLink to="/hire" className="services-btn services-btn-primary">Hire Talent <ArrowIcon /></NavLink>
              <NavLink to="/contact" className="services-btn services-btn-secondary">Talk to a Recruiter</NavLink>
            </div>
          </div>
        </section>

        <section className="services-section services-solutions">
          <div className="services-shell">
            <div className="services-heading">
              <p className="services-eyebrow">What we do</p>
              <h2>Staffing Solutions for Every Hiring Need</h2>
              <p>Whether you need one specialist or an entire technology team, we provide flexible recruiting solutions tailored to your goals.</p>
            </div>
            <div className="service-card-grid">
              {services.map(([number, title, copy]) => (
                <article className="service-card" key={number}>
                  <div className="service-card-top"><span>{number}</span><ArrowIcon /></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section services-benefits">
          <div className="services-shell">
            <div className="services-heading services-heading-light">
              <p className="services-eyebrow">The Sweftfly difference</p>
              <h2>More Than Recruiting. A Better Way to Build Teams.</h2>
            </div>
            <div className="benefit-grid">
              {benefits.map(([type, title, copy]) => (
                <article className="benefit-card" key={title}>
                  <div className="benefit-icon"><BenefitIcon type={type} /></div>
                  <h3>{title}</h3><p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section services-tech">
          <div className="services-shell">
            <div className="services-heading">
              <p className="services-eyebrow">Our expertise</p>
              <h2>Talent Across Today’s Leading Technologies</h2>
              <p>Find experienced professionals across the technologies, platforms, and disciplines that power modern businesses.</p>
            </div>
            <div className="technology-grid">
              {technologies.map(([title, copy]) => (
                <article className="technology-card" key={title}><span className="tech-dot" /><div><h3>{title}</h3><p>{copy}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section services-process">
          <div className="services-shell">
            <div className="services-heading">
              <p className="services-eyebrow">How it works</p>
              <h2>Simple. Fast. Reliable.</h2>
              <p>A streamlined hiring process designed to help you find the right talent without unnecessary delays.</p>
            </div>
            <div className="process-grid">
              {process.map(([number, title, copy]) => (
                <article className="process-step" key={number}><div className="process-number">{number}</div><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-cta">
          <div className="services-shell services-cta-content">
            <p className="services-eyebrow">Start hiring with confidence</p>
            <h2>Need IT Talent? Let’s Build Your Team.</h2>
            <p>Tell us what you’re looking for and let Sweftfly Inc. connect you with the right technology professionals.</p>
            <div className="services-actions services-actions-center">
              <NavLink to="/hire" className="services-btn services-btn-primary">Hire Talent <ArrowIcon /></NavLink>
              <NavLink to="/contact" className="services-btn services-btn-secondary">Contact Us</NavLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Services;
