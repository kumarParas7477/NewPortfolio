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
    <section id="contact" className="py-20 bg-eggshell-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-delft_blue-500 mb-4">
            Get In <span className="bg-gradient-to-r from-cambridge_blue-500 to-delft_blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-delft_blue-300 max-w-3xl mx-auto">
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
              <h3 className="text-2xl font-semibold text-delft_blue-500 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-delft_blue-300 leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a specific project in mind or just want to chat about technology, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 p-4 bg-eggshell-700 rounded-lg hover:bg-eggshell-600 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-cambridge_blue-200 rounded-lg flex items-center justify-center">
                  <span className="text-cambridge_blue-600 text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-delft_blue-500">Email</h4>
                  <p className="text-delft_blue-300">paraskumar4321@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 p-4 bg-eggshell-700 rounded-lg hover:bg-eggshell-600 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-cambridge_blue-200 rounded-lg flex items-center justify-center">
                  <span className="text-cambridge_blue-600 text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-delft_blue-500">Location</h4>
                  <p className="text-delft_blue-300">India</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 p-4 bg-eggshell-700 rounded-lg hover:bg-eggshell-600 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-cambridge_blue-200 rounded-lg flex items-center justify-center">
                  <span className="text-cambridge_blue-600 text-xl">💼</span>
                </div>
                <div>
                  <h4 className="font-semibold text-delft_blue-500">Availability</h4>
                  <p className="text-delft_blue-300">Open to new opportunities</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-delft_blue-500 mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/soniparas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-cambridge_blue-500 rounded-lg flex items-center justify-center text-white hover:bg-cambridge_blue-600 transition-colors duration-200"
                >
                  <span className="text-xl">💼</span>
                </motion.a>
                <motion.a
                  href="https://github.com/kumarParas7477"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-delft_blue-500 rounded-lg flex items-center justify-center text-white hover:bg-delft_blue-600 transition-colors duration-200"
                >
                  <span className="text-xl">🐙</span>
                </motion.a>
                <motion.a
                  href="mailto:paraskumar4321@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-burnt_sienna-500 rounded-lg flex items-center justify-center text-white hover:bg-burnt_sienna-600 transition-colors duration-200"
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
            className="bg-eggshell-700 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-delft_blue-500 mb-6">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-delft_blue-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-eggshell-400 rounded-lg focus:ring-2 focus:ring-cambridge_blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-delft_blue-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-eggshell-400 rounded-lg focus:ring-2 focus:ring-cambridge_blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-delft_blue-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-eggshell-400 rounded-lg focus:ring-2 focus:ring-cambridge_blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-cambridge_blue-500 to-delft_blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
