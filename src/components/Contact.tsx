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
    console.log('Form submitted:', formData);
    // TODO: Add actual form submission logic
  };

  return (
    <section id="contact" className="relative py-20 bg-dark-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-neon-purple/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-neon-green/10 border border-neon-green/30 rounded-full text-neon-green text-sm font-mono">
              // let's connect
            </span>
          </motion.div>
          <h2 className="section-title mb-4">
            <span className="gradient-text">hit me up</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            got a project in mind? need a dev who actually responds to emails? let's talk!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Text */}
            <div className="glass-card p-8 border border-neon-cyan/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                why work with me?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm not just another developer. I'm someone who actually cares about your project, 
                writes clean code, meets deadlines, and communicates like a normal human being. 
                Wild concept, I know.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                { icon: '📧', label: 'Email', value: 'paraskumar4321@gmail.com', href: 'mailto:paraskumar4321@gmail.com' },
                { icon: '📍', label: 'Location', value: 'India (remote friendly)', href: null },
                { icon: '💼', label: 'Status', value: 'Available for work', href: null },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="glass-card p-4 border border-neon-cyan/20 hover:border-neon-purple/60 transition-all duration-300"
                >
                  {item.href ? (
                    <a href={item.href} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-neon-cyan/10 rounded-xl flex items-center justify-center text-2xl border border-neon-cyan/30">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{item.label}</h4>
                        <p className="text-gray-400 text-sm">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-neon-cyan/10 rounded-xl flex items-center justify-center text-2xl border border-neon-cyan/30">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{item.label}</h4>
                        <p className="text-gray-400 text-sm">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 border border-neon-cyan/20">
              <h4 className="text-lg font-semibold text-white mb-4">find me online</h4>
              <div className="flex gap-3">
                {[
                  { icon: '💼', link: 'https://www.linkedin.com/in/soniparas/', label: 'LinkedIn', color: 'neon-blue' },
                  { icon: '🐙', link: 'https://github.com/kumarParas7477', label: 'GitHub', color: 'neon-purple' },
                  { icon: '📧', link: 'mailto:paraskumar4321@gmail.com', label: 'Email', color: 'neon-pink' },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target={social.label !== 'Email' ? '_blank' : undefined}
                    rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-14 h-14 bg-${social.color}/10 border border-${social.color}/30 rounded-xl flex items-center justify-center text-2xl hover:bg-${social.color}/20 transition-all duration-300`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8 border border-neon-cyan/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              send a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700/50 border border-neon-cyan/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-200"
                  placeholder="your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700/50 border border-neon-cyan/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-700/50 border border-neon-cyan/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-200 resize-none"
                  placeholder="tell me about your project, ideas, or just say hi!"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-xl text-lg font-bold text-dark-900 hover:shadow-[0_0_30px_rgba(0,247,255,0.5)] transition-all duration-300"
              >
                send it! 🚀
              </motion.button>
            </form>

            {/* Fun message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 text-center text-sm text-gray-400 font-mono"
            >
              *usually responds within 24 hours (unless i'm debugging something)*
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 border border-neon-cyan/20 inline-block">
            <p className="text-2xl font-bold text-white mb-2">
              prefer email? <span className="gradient-text">no problem!</span>
            </p>
            <a
              href="mailto:paraskumar4321@gmail.com"
              className="text-neon-cyan hover:text-neon-purple transition-colors duration-200 font-mono"
            >
              paraskumar4321@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
