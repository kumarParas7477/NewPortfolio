import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="mx-4 mt-4">
        <div className="glass-card border border-neon-cyan/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center animate-pulse-glow">
                    <span className="text-white font-bold text-xl">P</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">paras</span>
                  <span className="text-xs text-neon-cyan font-mono">{'<dev />'}</span>
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`relative text-sm font-medium transition-colors duration-200 group ${
                      active === link.id
                        ? 'text-neon-cyan'
                        : 'text-gray-300 hover:text-neon-cyan'
                    }`}
                    onClick={() => setActive(link.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.title}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-300 ${
                      active === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden md:block"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg text-sm font-bold text-dark-900 hover:shadow-[0_0_20px_rgba(0,247,255,0.5)] transition-all duration-300"
                >
                  hire me
                </motion.a>
              </motion.div>

              {/* Mobile menu button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-neon-cyan hover:text-neon-purple transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mx-4 mt-2"
          >
            <div className="glass-card border border-neon-cyan/20 p-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`block text-lg font-medium transition-colors duration-200 ${
                    active === link.id
                      ? 'text-neon-cyan'
                      : 'text-gray-300 hover:text-neon-cyan'
                  }`}
                  onClick={() => {
                    setActive(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.title}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                className="block w-full text-center px-6 py-2 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg text-sm font-bold text-dark-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                hire me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
