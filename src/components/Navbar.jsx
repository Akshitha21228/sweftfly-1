// import React,{useEffect,useRef,useState}from 'react';import{NavLink}from'react-router-dom';import{services}from'./serviceData';import'./Navbar.css';
// export default function Navbar(){const[menu,setMenu]=useState(false),[drop,setDrop]=useState(false),ref=useRef();useEffect(()=>{const close=e=>{if(!ref.current?.contains(e.target))setDrop(false)};document.addEventListener('mousedown',close);return()=>document.removeEventListener('mousedown',close)},[]);const close=()=>{setMenu(false);setDrop(false)};return <nav className="navbar" aria-label="Main navigation"><div className="nav-container"><NavLink to="/" className="logo" onClick={close}>Sweftfly<span>Inc</span></NavLink><ul className={`nav-menu ${menu?'active':''}`}><li><NavLink to="/" onClick={close}>Home</NavLink></li><li><NavLink to="/about" onClick={close}>About</NavLink></li><li className="services-drop" ref={ref}><button onClick={()=>setDrop(!drop)} aria-expanded={drop} aria-controls="services-dropdown">Services <i>⌄</i></button><div id="services-dropdown" className={drop?'drop-menu open':'drop-menu'}>{services.map((s,i)=><NavLink key={s.slug} to={`/services/${s.slug}`} onClick={close}><small>0{i+1}</small>{s.name}<b>→</b></NavLink>)}</div></li><li><NavLink to="/technologies" onClick={close}>Technologies</NavLink></li><li><NavLink to="/contact" onClick={close}>Contact</NavLink></li><li className="nav-cta"><NavLink to="/hire" className="btn-primary" onClick={close}>Hire Talent</NavLink></li></ul><div className="nav-cta desktop-cta"><NavLink to="/hire" className="btn-primary">Hire Talent</NavLink></div><button className={`hamburger ${menu?'active':''}`} onClick={()=>setMenu(!menu)} aria-label="Toggle navigation menu" aria-expanded={menu}><span className="bar"/><span className="bar"/><span className="bar"/></button></div></nav>}
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { services } from './serviceData';
import './Navbar.css';

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [drop, setDrop] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const close = (e) => {
      if (!ref.current?.contains(e.target)) setDrop(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('touchstart', close);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('touchstart', close);
    };
  }, []);

  const close = () => {
    setMenu(false);
    setDrop(false);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-container">
        <NavLink to="/" className="logo" onClick={close}>
          Sweftfly<span>Inc</span>
        </NavLink>

        <ul className={`nav-menu ${menu ? 'active' : ''}`}>
          <li>
            <NavLink to="/" onClick={close}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={close}>About</NavLink>
          </li>

          <li className="services-drop" ref={ref}>
            <button
              type="button"
              onClick={() => setDrop(!drop)}
              aria-expanded={drop}
              aria-controls="services-dropdown"
            >
              Services <i>⌄</i>
            </button>

            <div
              id="services-dropdown"
              className={drop ? 'drop-menu open' : 'drop-menu'}
            >
              {services.map((s, i) => (
                <NavLink
                  key={s.slug || s.id}
                  to={`/services/${s.slug || s.id}`}
                  onClick={close}
                >
                  <small>0{i + 1}</small>
                  {s.title}
                  <b>→</b>
                </NavLink>
              ))}
            </div>
          </li>

          <li>
            <NavLink to="/technologies" onClick={close}>Technologies</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={close}>Contact</NavLink>
          </li>

          <li className="nav-cta">
            <NavLink to="/hire" className="btn-primary" onClick={close}>
              Hire Talent
            </NavLink>
          </li>
        </ul>

        <div className="nav-cta desktop-cta">
          <NavLink to="/hire" className="btn-primary">Hire Talent</NavLink>
        </div>

        <button
          className={`hamburger ${menu ? 'active' : ''}`}
          onClick={() => setMenu(!menu)}
          aria-label="Toggle navigation menu"
          aria-expanded={menu}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </nav>
  );
}