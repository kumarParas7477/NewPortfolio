import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-eggshell-700 to-eggshell-600 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cambridge_blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sunset-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-burnt_sienna-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-delft_blue-500"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cambridge_blue-500 to-delft_blue-500 bg-clip-text text-transparent">
                Paras Kumar
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-delft_blue-400 h-16"
            >
              <Typewriter
                words={[
                  'Senior Software Engineer',
                  'Full-Stack Developer',
                  'React & Node.js Expert',
                  'TypeScript Specialist',
                  'Team Leader'
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-delft_blue-300 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a passionate Senior Software Engineer with 6+ years of experience building 
            scalable web applications and systems. I specialize in full-stack development, 
            React, Node.js, TypeScript, and system architecture, helping companies deliver 
            exceptional digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#work"
              className="bg-gradient-to-r from-cambridge_blue-500 to-delft_blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-cambridge_blue-500 text-cambridge_blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cambridge_blue-500 hover:text-white transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
