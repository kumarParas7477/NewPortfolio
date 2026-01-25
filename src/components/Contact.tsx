import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-delft_blue-200 to-delft_blue-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cambridge_blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-delft_blue-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-cambridge_blue-400 to-delft_blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Ready to work together? Let's discuss your next project and how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-white/80 leading-relaxed mb-8 text-lg">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a specific project in mind or just want to chat about technology, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.04, y: -5, x: 4 }}
                className="group relative flex items-center space-x-5 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cambridge_blue-500/0 to-delft_blue-500/0 group-hover:from-cambridge_blue-500/10 group-hover:to-delft_blue-500/10 transition-all duration-500"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cambridge_blue-500/30 to-delft_blue-500/30 rounded-xl flex items-center justify-center border border-white/20 relative z-10 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <span className="text-3xl">📧</span>
                </div>
                <div className="relative z-10">
                  <h4 className="font-bold text-white mb-1.5 text-lg">Email</h4>
                  <p className="text-white/80">paraskumar4321@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.35 }}
                whileHover={{ scale: 1.04, y: -5, x: 4 }}
                className="group relative flex items-center space-x-5 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cambridge_blue-500/0 to-delft_blue-500/0 group-hover:from-cambridge_blue-500/10 group-hover:to-delft_blue-500/10 transition-all duration-500"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cambridge_blue-500/30 to-delft_blue-500/30 rounded-xl flex items-center justify-center border border-white/20 relative z-10 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <span className="text-3xl">📍</span>
                </div>
                <div className="relative z-10">
                  <h4 className="font-bold text-white mb-1.5 text-lg">Location</h4>
                  <p className="text-white/80">India</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.04, y: -5, x: 4 }}
                className="group relative flex items-center space-x-5 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cambridge_blue-500/0 to-delft_blue-500/0 group-hover:from-cambridge_blue-500/10 group-hover:to-delft_blue-500/10 transition-all duration-500"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cambridge_blue-500/30 to-delft_blue-500/30 rounded-xl flex items-center justify-center border border-white/20 relative z-10 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <span className="text-3xl">💼</span>
                </div>
                <div className="relative z-10">
                  <h4 className="font-bold text-white mb-1.5 text-lg">Availability</h4>
                  <p className="text-white/80">Open to new opportunities</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/soniparas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                >
                  <span className="text-xl">💼</span>
                </motion.a>
                <motion.a
                  href="https://github.com/kumarParas7477"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                >
                  <span className="text-xl">🐙</span>
                </motion.a>
                <motion.a
                  href="mailto:paraskumar4321@gmail.com"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                >
                  <span className="text-xl">📧</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-2xl overflow-hidden group"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cambridge_blue-500/0 to-delft_blue-500/0 group-hover:from-cambridge_blue-500/5 group-hover:to-delft_blue-500/5 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8">
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-white/90 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-white/10 border border-white/30 rounded-xl focus:ring-2 focus:ring-cambridge_blue-400 focus:border-cambridge_blue-400 focus:bg-white/15 transition-all duration-300 text-white placeholder-white/50 shadow-lg"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-white/10 border border-white/30 rounded-xl focus:ring-2 focus:ring-cambridge_blue-400 focus:border-cambridge_blue-400 focus:bg-white/15 transition-all duration-300 text-white placeholder-white/50 shadow-lg"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-white/90 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-3.5 bg-white/10 border border-white/30 rounded-xl focus:ring-2 focus:ring-cambridge_blue-400 focus:border-cambridge_blue-400 focus:bg-white/15 transition-all duration-300 text-white placeholder-white/50 resize-none shadow-lg"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-delft_blue-900 py-4 px-6 rounded-full font-bold hover:shadow-2xl transition-all duration-300 text-lg group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </motion.svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cambridge_blue-500 to-delft_blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute inset-0 flex items-center justify-center z-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
