// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom'; // Use NavLink for active states
// import './Navbar.css'; // We'll create this next

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Define your navigation items (matching your request)
//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Careers', path: '/careers' },
//     { name: 'Technologies', path: '/technologies' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   // Toggle mobile menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Close mobile menu when a link is clicked
//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   // Optional: Close menu if window resizes to desktop
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 1024 && isMenuOpen) {
//         setIsMenuOpen(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [isMenuOpen]);

//   return (
//     <nav className="navbar" role="navigation" aria-label="Main navigation">
//       <div className="nav-container">
        
//         {/* Logo: Sweftfly Inc */}
//         <NavLink to="/" className="logo" onClick={closeMenu}>
//           Sweftfly<span>Inc</span>
//         </NavLink>

//         {/* Navigation Menu */}
//         <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
//           {navItems.map((item) => (
//             <li key={item.name}>
//               <NavLink 
//                 to={item.path} 
//                 className={({ isActive }) => isActive ? 'active' : ''}
//                 onClick={closeMenu}
//               >
//                 {item.name}
//               </NavLink>
//             </li>
//           ))}
          
//           {/* CTA Button inside mobile menu */}
//           <li className="nav-cta">
//             <NavLink to="/hire" className="btn-primary" onClick={closeMenu}>
//               🔥 Hire Talent
//             </NavLink>
//           </li>
//         </ul>

//         {/* Desktop CTA (hidden on mobile) */}
//         <div className="nav-cta desktop-cta">
//           <NavLink to="/hire" className="btn-primary">
//             🔥 Hire Talent
//           </NavLink>
//         </div>

//         {/* Hamburger Button */}
//         <button 
//           className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
//           onClick={toggleMenu}
//           aria-label="Toggle navigation menu"
//           aria-expanded={isMenuOpen}
//         >
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </button>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    // { name: 'Careers', path: '/careers' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        
        <NavLink to="/" className="logo" onClick={closeMenu}>
          Sweftfly<span>Inc</span>
        </NavLink>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          
          <li className="nav-cta">
            <NavLink to="/hire" className="btn-primary" onClick={closeMenu}>
              🔥 Hire Talent
            </NavLink>
          </li>
        </ul>

        <div className="nav-cta desktop-cta">
          <NavLink to="/hire" className="btn-primary">
            🔥 Hire Talent
          </NavLink>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;