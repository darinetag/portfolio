import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ padding: '1.2rem', background: '#fff', fontFamily: 'Montreal' }}>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', fontSize: '1.2rem' }}>
        <li><Link href="/">home</Link></li>
        <li><Link href="/projects">projects</Link></li>
        <li><Link href="/art">art</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
