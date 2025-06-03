'use client';

import Link from 'next/link';
import { Linkedin, Instagram, Github, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full px-2 py-2 lg:px-4 lg:py-4 bg-white font-sans flex lg:justify-between gap-35 items-center"  style={{ fontFamily: 'Montreal' }}>
      {/* Left: Navigation links */}
      <ul className=" flex gap-3 text-sm lg:gap-6 lg:text-lg">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/art">Art</Link></li>
      </ul>

      {/* Right: Social Icons */}
      <div className="flex lg:gap-4 gap-2 ">
        <a href="https://www.linkedin.com/in/darine-tag/" className="text-[#0E2A8B]" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-4 h-4 lg:w-6 lg:h-6 md:w-5 md:h-5" />
        </a>
        <a href="https://www.instagram.com/darcone_/" className="text-[#FBC408]" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-4 h-4 lg:w-6 lg:h-6 md:w-5 md:h-5" />
        </a>
        <a href="https://github.com/darinetag" target="_blank" rel="noopener noreferrer">
          <Github className="w-4 h-4 lg:w-6 lg:h-6 md:w-5 md:h-5" />
        </a>
        <a href="mailto:tagdarinefatma@gmail.com" className="text-[#BC0700]">
          <Mail className="w-4 h-4 lg:w-6 lg:h-6 md:w-5 md:h-5" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
