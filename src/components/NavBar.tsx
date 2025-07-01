import type { JSX } from 'react';
import { Link } from 'react-router';

interface NavBarProps {
  home: string;
}

const NavBar = ({ home }: NavBarProps): JSX.Element => {
  return (
    <header className="top-0 sticky z-10">
      <nav className="flex items-center justify-between max-w-xl mx-auto p-4 h-26">
        <Link to="/" aria-label="Go to homepage" className="font-bold">
          {home}
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
