import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-20 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-delft_blue-100/80 backdrop-blur-xl border-b border-white/10 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cambridge_blue-500 to-delft_blue-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">Paras Kumar</span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  active === link.id
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={() => setActive(link.id)}
                whileHover={{ y: -2 }}
              >
                {link.title}
                {active === link.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cambridge_blue-400 to-delft_blue-400 rounded-full"
                  />
                )}
              </motion.a>
            ))}
          </div>

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
              className="px-6 py-2.5 rounded-full text-sm font-semibold bg-white text-delft_blue-900 hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white/70 hover:text-white transition-colors">
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
