import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-delft_blue-100 border-t border-white/10 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cambridge_blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-delft_blue-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cambridge_blue-500 to-delft_blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-white">Paras Kumar</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Senior Software Engineer passionate about building exceptional software solutions 
              and scalable full-stack applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="text-white/70 hover:text-white transition-colors duration-200">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-white/70">paraskumar4321@gmail.com</p>
              <p className="text-white/70">India</p>
            </div>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/soniparas/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-lg">💼</span>
              </motion.a>
              <motion.a
                href="https://github.com/kumarParas7477"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-lg">🐙</span>
              </motion.a>
              <motion.a
                href="mailto:paraskumar4321@gmail.com"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-lg">📧</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/10 mt-8 pt-8 text-center"
        >
          <p className="text-white/70">
            © 2024 Paras Kumar. Made with ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
