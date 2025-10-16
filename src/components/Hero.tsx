import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-radial from-neon-cyan/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-radial from-neon-purple/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-radial from-neon-pink/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Small intro text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2"
          >
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <p className="text-neon-green text-sm font-mono">available for work</p>
          </motion.div>

          {/* Name with glitch effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="text-white">hey, i'm </span>
              <span className="gradient-text glow-text inline-block">
                paras
              </span>
            </h1>
            
            {/* Typewriter with neon style */}
            <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-neon-cyan h-16 md:h-20">
              <Typewriter
                words={[
                  'senior software engineer 💻',
                  'full-stack developer 🚀',
                  'react wizard ⚛️',
                  'typescript enthusiast 🔷',
                  'code perfectionist ✨',
                  'team leader 👥'
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            crafting <span className="text-neon-cyan font-semibold">elegant solutions</span> with{' '}
            <span className="text-neon-purple font-semibold">clean code</span> since 2019.
            <br />
            6+ years of making the web less boring, one project at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-xl text-lg font-bold text-dark-900 overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">check out my work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card border-2 border-neon-cyan/50 rounded-xl text-lg font-bold text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
            >
              let's connect
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-4 justify-center pt-8"
          >
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
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass-card flex items-center justify-center text-2xl border border-neon-cyan/30 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,247,255,0.5)] transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex justify-center p-2"
            >
              <div className="w-1 h-2 bg-neon-cyan rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
