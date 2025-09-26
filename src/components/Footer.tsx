import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-eggshell-300 text-delft_blue-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cambridge_blue-500 to-sunset-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold">Paras Kumar</span>
            </div>
            <p className="text-delft_blue-400 leading-relaxed">
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
            <h3 className="text-lg font-semibold text-delft_blue-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-delft_blue-400 hover:text-delft_blue-600 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
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
            <h3 className="text-lg font-semibold text-delft_blue-500">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-delft_blue-400">paraskumar4321@gmail.com</p>
              <p className="text-delft_blue-400">India</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/soniparas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cambridge_blue-500 rounded-lg flex items-center justify-center text-white hover:bg-cambridge_blue-600 transition-colors duration-200"
              >
                <span className="text-lg">💼</span>
              </a>
              <a
                href="https://github.com/kumarParas7477"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cambridge_blue-500 rounded-lg flex items-center justify-center text-white hover:bg-cambridge_blue-600 transition-colors duration-200"
              >
                <span className="text-lg">🐙</span>
              </a>
              <a
                href="mailto:paraskumar4321@gmail.com"
                className="w-10 h-10 bg-cambridge_blue-500 rounded-lg flex items-center justify-center text-white hover:bg-cambridge_blue-600 transition-colors duration-200"
              >
                <span className="text-lg">📧</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-eggshell-400 mt-8 pt-8 text-center"
        >
          <p className="text-delft_blue-400">
            © 2024 Paras Kumar. made in love
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
