import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-sm border-b border-neonPink shadow-lg">
      <nav className="container h-16 flex items-center justify-between relative">
        <a
          href="#main-content"
          className="skip-link absolute left-2 top-2 bg-neonPink text-white px-3 py-1 rounded z-50 focus:outline-none focus:ring-2 focus:ring-neonBlue"
        >
          Aller au contenu
        </a>
        <Link
          to="/"
          className="text-xl font-bold tracking-tight focus-visible:ring-2 focus-visible:ring-neonPink"
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              textShadow: '0 0 8px #FF2EF5, 0 0 16px #00F0FF',
              color: '#FF2EF5',
            }}
          >
            KM
          </motion.span>
        </Link>

        {/* Desktop menu */}
        <motion.ul
          className="hidden md:flex items-center space-x-8 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <li>
            <Link
              to="/projects"
              className={`text-neonBlue hover:text-neonPink transition-colors font-semibold px-2 py-1 rounded focus-visible:ring-2 focus-visible:ring-neonPink ${location.pathname.startsWith('/projects') ? 'bg-neonPink/30' : ''}`}
              style={{ textShadow: '0 0 6px #00F0FF' }}
              aria-current={location.pathname.startsWith('/projects') ? 'page' : undefined}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              to="/briefs"
              className={`text-neonYellow hover:text-neonPink transition-colors font-semibold px-2 py-1 rounded focus-visible:ring-2 focus-visible:ring-neonPink ${location.pathname.startsWith('/briefs') ? 'bg-neonPink/30' : ''}`}
              style={{ textShadow: '0 0 6px #F5FF2E' }}
              aria-current={location.pathname.startsWith('/briefs') ? 'page' : undefined}
            >
              Cahiers
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`btn-primary bg-neonGreen text-primary hover:bg-neonPink font-semibold px-2 py-1 rounded focus-visible:ring-2 focus-visible:ring-neonPink ${location.pathname === '/contact' ? 'bg-neonPink/30' : ''}`}
              style={{ textShadow: '0 0 6px #39FF14' }}
              aria-current={location.pathname === '/contact' ? 'page' : undefined}
            >
              Contact
            </Link>
          </li>
        </motion.ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus-visible:ring-2 focus-visible:ring-neonPink"
          aria-controls="main-menu"
          aria-expanded={menuOpen}
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block w-6 h-6">
            <span
              className={`block h-1 w-full bg-neonPink rounded transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span
              className={`block h-1 w-full bg-neonBlue rounded my-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`block h-1 w-full bg-neonGreen rounded transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </span>
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.ul
            id="main-menu"
            className="absolute top-16 right-0 w-48 bg-primary/95 rounded-lg shadow-lg flex flex-col items-start p-4 space-y-2 text-white md:hidden z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <li>
              <Link
                to="/projects"
                className="text-neonBlue font-semibold px-2 py-1 rounded focus-visible:ring-2 focus-visible:ring-neonPink w-full block"
                onClick={() => setMenuOpen(false)}
                aria-current={location.pathname.startsWith('/projects') ? 'page' : undefined}
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                to="/briefs"
                className="text-neonYellow font-semibold px-2 py-1 rounded focus-visible:ring-2 focus-visible:ring-neonPink w-full block"
                onClick={() => setMenuOpen(false)}
                aria-current={location.pathname.startsWith('/briefs') ? 'page' : undefined}
              >
                Cahiers
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-neonGreen font-semibold px-2 py-1 rounded focus-visible:ring-2 focus-visible:ring-neonPink w-full block"
                onClick={() => setMenuOpen(false)}
                aria-current={location.pathname === '/contact' ? 'page' : undefined}
              >
                Contact
              </Link>
            </li>
          </motion.ul>
        )}
      </nav>
    </header>
  );
};
