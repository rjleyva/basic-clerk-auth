import { Link } from 'react-router';

const home: string = 'Logo';

const NavBar = () => {
  return (
    <header className="top-0 sticky z-10">
      <nav className="flex items-center justify-between max-w-xl mx-auto p-4 h-26">
        <Link to="/">{home}</Link>
      </nav>
    </header>
  );
};

export default NavBar;
