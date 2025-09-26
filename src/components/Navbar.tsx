import { useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav className="fixed top-0 z-20 w-full bg-eggshell-800/80 backdrop-blur-md border-b border-eggshell-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cambridge_blue-500 to-delft_blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-delft_blue-500">Paras Kumar</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active === link.id
                    ? 'text-cambridge_blue-500'
                    : 'text-delft_blue-400 hover:text-cambridge_blue-500'
                }`}
                onClick={() => setActive(link.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.title}
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-cambridge_blue-500 to-delft_blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-delft_blue-400 hover:text-cambridge_blue-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
