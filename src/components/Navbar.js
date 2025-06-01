'use client';

import Link from 'next/link';
import { Linkedin, Instagram, Github, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav
      style={{
        padding: '1.2rem 2rem',
        background: '#fff',
        fontFamily: 'Montreal',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Left: Navigation links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', fontSize: '1.2rem', margin: 0, padding: 0 }}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/art">Art</Link></li>
      </ul>

      {/* Right: Social Icons */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="https://www.linkedin.com/in/darine-tag/" style={{ color: '#0E2A8B' }} target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} />
        </a>
        <a href="https://www.instagram.com/darcone_/" style={{ color: '#FBC408' }} target="_blank" rel="noopener noreferrer">
          <Instagram size={20} />
        </a>
        <a href="https://github.com/darinetag" target="_blank"  rel="noopener noreferrer">
          <Github size={20} />
        </a>
        <a href="mailto:tagdarinefatma@gmail.com" style={{ color: '#BC0700' }}>
          <Mail size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
