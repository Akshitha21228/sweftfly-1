
// import React from 'react';
// import './Hero.css';

// const Hero = () => {
//   return (
//     <div className="hero-section">
//       <img 
//         src="/Hero4.png" 
//         alt="Hero banner" 
//         className="hero-image" 
//       />
      
//       {/* ===== HERO OVERLAY CONTENT (Left Side) ===== */}
//       <div className="hero-overlay">
//         <div className="hero-content">
//           {/* Small top label */}
//           <span className="hero-label">US IT STAFFING & RECRUITING</span>
          
//           {/* Main Heading */}
//           <h1 className="hero-heading">
//             <span className="heading-white">The Right IT Talent.</span>
//             <br />
//             <span className="heading-cyan">Right When You Need It.</span>
//           </h1>
          
//           {/* Description — Exact line breaks as requested */}
//           <p className="hero-description">
//             Sweftfly Inc. connects businesses across the United States
//             <br />
//             with skilled technology professionals through fast, reliable,
//             <br />
//             and flexible IT staffing solutions.
//           </p>
          
//           {/* CTA Buttons */}
//           <div className="hero-buttons">
//             <button className="hero-cta-primary">Hire Talent</button>
//             <button className="hero-cta-secondary">Submit Resume</button>
//           </div>
          
//           {/* Benefit Items with custom icons */}
//           <div className="hero-benefits">
//             <span className="benefit-item">
//               <span className="benefit-icon">✓</span> 98% Successful Placements
//             </span>
//             <span className="benefit-divider">|</span>
//             <span className="benefit-item">
//               <span className="benefit-icon">◷</span> Faster Hiring
//             </span>
//             <span className="benefit-divider">|</span>
//             <span className="benefit-item">
//               <span className="benefit-icon">♧</span> Dedicated Support
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <video 
        src="/video.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="hero-video"
      />
    </div>
  );
};

export default Hero;