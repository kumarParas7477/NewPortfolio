import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-dark-800 border-t border-neon-cyan/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center animate-pulse-glow">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">paras kumar</span>
                <p className="text-xs text-neon-cyan font-mono">{'<dev />'}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              building cool stuff on the internet since 2019. turning ideas into reality, one line of code at a time.
            </p>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              <p className="text-neon-green text-xs font-mono">available for work</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-white">quick links</h3>
            <ul className="space-y-2">
              {[
                { name: 'about', href: '#about' },
                { name: 'experience', href: '#work' },
                { name: 'contact', href: '#contact' },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-cyan transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-white">let's connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:paraskumar4321@gmail.com"
                className="block text-gray-400 hover:text-neon-cyan transition-colors duration-200 text-sm"
              >
                paraskumar4321@gmail.com
              </a>
              <p className="text-gray-400 text-sm">India 🇮🇳</p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: '💼', link: 'https://www.linkedin.com/in/soniparas/', label: 'LinkedIn' },
                { icon: '🐙', link: 'https://github.com/kumarParas7477', label: 'GitHub' },
                { icon: '📧', link: 'mailto:paraskumar4321@gmail.com', label: 'Email' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass-card border border-neon-cyan/30 rounded-lg flex items-center justify-center text-lg hover:border-neon-cyan hover:shadow-[0_0_10px_rgba(0,247,255,0.3)] transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/5 pt-8 mt-8 text-center"
        >
          <p className="text-xs text-gray-400">
            if you made it this far, you should definitely{' '}
            <a href="#contact" className="text-neon-cyan hover:text-neon-purple transition-colors">
              hire me
            </a>{' '}
            😉
          </p>
        </motion.div>
      </div>

      {/* Animated Gradient Line at Bottom */}
      <div className="h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"></div>
    </footer>
  );
};

export default Footer;
