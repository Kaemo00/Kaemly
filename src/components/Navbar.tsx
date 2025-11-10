import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <nav className="container h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            KM
          </motion.span>
        </Link>

        <motion.ul
          className="flex items-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <li>
            <Link to="/projects" className="text-gray-600 hover:text-primary transition-colors">
              Projets
            </Link>
          </li>
          <li>
            <Link to="/contact" className="btn-primary">
              Contact
            </Link>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
};
