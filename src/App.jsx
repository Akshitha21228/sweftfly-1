
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';  // 👈 Import Hero
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Navbar />

//       <Routes>
//         {/* ===== HOME PAGE ===== */}
//         <Route 
//           path="/" 
//           element={
//             <div className="home-container">
//               {/* ===== HERO SECTION (Now a separate component) ===== */}
//               <Hero />

//               {/* ===== HOME CONTENT (Below Hero) ===== */}
//               <div className="home-left">
//                 {/* <h1 className="home-heading">Home Page</h1>
//                 <p className="home-subtitle">Welcome back, Sweftfly team</p> */}
//               </div>
//             </div>
//           } 
//         />

//         {/* ===== OTHER PAGES ===== */}
//         <Route 
//           path="/about" 
//           element={<div className="page-placeholder">About Page</div>} 
//         />
//         <Route 
//           path="/services" 
//           element={<div className="page-placeholder">Services Page</div>} 
//         />
//         <Route 
//           path="/careers" 
//           element={<div className="page-placeholder">Careers Page</div>} 
//         />
//         <Route 
//           path="/technologies" 
//           element={<div className="page-placeholder">Technologies Page</div>} 
//         />
//         <Route 
//           path="/contact" 
//           element={<div className="page-placeholder">Contact Page</div>} 
//         />
//         <Route 
//           path="/hire" 
//           element={<div className="page-placeholder">Hire Talent Page</div>} 
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';
import HomeSections from './components/HomeSections';
import About from './components/About';
import Technologies from './components/Technologies';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* ===== HOME PAGE ===== */}
        <Route 
          path="/" 
          element={
            <div className="home-wrapper">
              {/* Hero — Full width, no gap below navbar */}
              <Hero />
              <HomeSections />
            </div>
          } 
        />

        {/* ===== OTHER PAGES ===== */}
        <Route 
          path="/about" 
          element={<About />} 
        />
        <Route 
          path="/services" 
          element={<Services />} 
        />
        {/* <Route 
          path="/careers" 
          element={<div className="page-placeholder">Careers Page</div>} 
        /> */}
        <Route 
          path="/technologies" 
          element={<Technologies />} 
        />
        <Route 
          path="/contact" 
          element={<Contact />} 
        />
        <Route 
          path="/hire" 
          element={<div className="page-placeholder">Hire Talent Page</div>} 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
