import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
      <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/art">Art</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
