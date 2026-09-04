import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Contact.css';

const contactDetails = [
  ['mail', 'Email', 'info@sweftflyinc.com'],
  ['phone', 'Phone', 'Available upon request'],
  ['pin', 'Location', 'United States'],
  ['clock', 'Business Hours', 'Monday – Friday · 9:00 AM – 6:00 PM EST'],
];

const trustItems = [
  ['bolt', 'Fast Response', 'Our recruiting team responds quickly to understand your hiring requirements.'],
  ['check', 'Qualified Talent', 'We focus on connecting businesses with skilled technology professionals.'],
  ['arrows', 'Flexible Staffing', 'Contract, contract-to-hire, full-time, and project-based solutions built around your needs.'],
];

const ContactIcon = ({ type }) => {
  const paths = {
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    phone: <path d="M6.6 3h3l1.3 5-2 1.3a15 15 0 0 0 5.8 5.8l1.3-2 5 1.3v3c0 1.7-1.3 3-3 3A15 15 0 0 1 3.6 6c0-1.7 1.3-3 3-3Z"/>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"/>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.7 2.7L16.5 9"/></>,
    arrows: <><path d="M7 7h11l-3-3M17 17H6l3 3"/><path d="M18 7l-3 3M6 17l3-3"/></>,
    employer: <><rect x="4" y="7" width="16" height="12" rx="2"/><path d="M9 7V5h6v2M4 12h16M10 12v2h4v-2"/></>,
    candidate: <><circle cx="12" cy="8" r="3"/><path d="M5 20a7 7 0 0 1 14 0"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
};

function Contact() {
  const [formState, setFormState] = useState({ loading: false, message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setFormState({ loading: true, message: '' });
    window.setTimeout(() => {
      setFormState({ loading: false, message: 'Online submissions are not connected yet. Please email info@sweftflyinc.com and our recruiting team will respond as soon as possible.' });
    }, 500);
  };

  return (
    <div className="contact-page">
      <main>
        <section className="contact-hero">
          <div className="contact-hero-image" aria-hidden="true" />
          <div className="contact-shell contact-hero-content">
            <p className="contact-eyebrow">Contact Us</p>
            <h1>Let’s Build Your <span>Next Great Team</span></h1>
            <p>Whether you’re looking to hire top IT talent, discuss staffing requirements, or explore partnership opportunities, the Sweftfly Inc. team is ready to help.</p>
          </div>
        </section>

        <section className="contact-main-section" id="contact-form">
          <div className="contact-shell contact-main-grid">
            <div className="contact-info">
              <p className="contact-eyebrow">Start a conversation</p>
              <h2>Talk to Our Recruiting Team</h2>
              <p className="contact-intro">Tell us about your hiring needs and one of our staffing specialists will get in touch to understand your requirements and help you find the right technology professionals.</p>
              <div className="contact-detail-list">
                {contactDetails.map(([type, label, value]) => (
                  <div className="contact-detail" key={label}>
                    <div className="contact-detail-icon"><ContactIcon type={type} /></div>
                    <div><span className="contact-detail-label">{label}</span>{type === 'mail' ? <a href={`mailto:${value}`}>{value}</a> : <span>{value}</span>}</div>
                  </div>
                ))}
              </div>
              <div className="contact-photo">
                <img src="/Hero4.png" alt="Technology recruiting professionals collaborating in a modern office" />
                <div className="contact-photo-note"><strong>People-first recruiting</strong><span>Real partnership from first conversation to onboarding.</span></div>
              </div>
            </div>

            <form className="contact-form-card" onSubmit={handleSubmit} noValidate={false}>
              <div className="contact-form-heading"><p className="contact-eyebrow">Tell us about your needs</p><h2>Tell Us How We Can Help</h2></div>
              <div className="contact-form-grid">
                <label>Full Name <b>*</b><input name="fullName" type="text" autoComplete="name" required placeholder="Your full name" /></label>
                <label>Company Name<input name="company" type="text" autoComplete="organization" placeholder="Company name" /></label>
                <label>Work Email <b>*</b><input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
                <label>Phone Number<input name="phone" type="tel" autoComplete="tel" placeholder="(555) 000-0000" /></label>
                <label className="contact-field-full">I’m Interested In <b>*</b>
                  <select name="interest" required defaultValue=""><option value="" disabled>Select a service</option><option>IT Staffing</option><option>Contract Staffing</option><option>Contract-to-Hire</option><option>Direct Hire / Full-Time Hiring</option><option>Dedicated Recruiting</option><option>Project-Based Staffing</option><option>Partnership / General Inquiry</option></select>
                </label>
                <label className="contact-field-full">Hiring Requirement / Message <b>*</b><textarea name="message" required rows="6" placeholder="Tell us about the roles, technologies, experience level, location, and hiring timeline you’re looking for." /></label>
              </div>
              <button className="contact-submit" type="submit" disabled={formState.loading}>{formState.loading ? 'Preparing Message…' : 'Send Message'}<span aria-hidden="true">→</span></button>
              <p className="contact-form-note">We’ll get back to you as soon as possible.</p>
              {formState.message && <p className="contact-form-status" role="status">{formState.message}</p>}
            </form>
          </div>
        </section>

        <section className="contact-actions-section">
          <div className="contact-shell contact-actions-grid">
            <article className="contact-action-card">
              <div className="contact-action-icon"><ContactIcon type="employer" /></div><p className="contact-eyebrow">For Employers</p><h3>Looking to Hire?</h3><p>Tell us what roles you need to fill and our recruiting team will help you connect with qualified IT professionals.</p><NavLink to="/hire">Hire Talent <span>→</span></NavLink>
            </article>
            <article className="contact-action-card contact-action-card-dark">
              <div className="contact-action-icon"><ContactIcon type="candidate" /></div><p className="contact-eyebrow">For Candidates</p><h3>Looking for Your Next Opportunity?</h3><p>Submit your resume and connect with opportunities that match your skills, experience, and career goals.</p><NavLink to="/careers">Submit Resume <span>→</span></NavLink>
            </article>
          </div>
        </section>

        <section className="contact-trust-section">
          <div className="contact-shell">
            <div className="contact-section-heading"><p className="contact-eyebrow">Why Sweftfly</p><h2>A Recruiting Partner You Can Rely On</h2></div>
            <div className="contact-trust-grid">
              {trustItems.map(([type, title, copy]) => <article key={title}><div className="contact-trust-icon"><ContactIcon type={type} /></div><div><h3>{title}</h3><p>{copy}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="contact-final-cta">
          <div className="contact-shell"><p className="contact-eyebrow">Your next hire starts here</p><h2>Ready to Find the Right IT Talent?</h2><p>Partner with Sweftfly Inc. and start building the technology team your business needs.</p><div className="contact-cta-actions"><NavLink to="/hire" className="contact-btn contact-btn-primary">Hire Talent</NavLink><NavLink to="/services" className="contact-btn contact-btn-outline">Explore Services</NavLink></div></div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
