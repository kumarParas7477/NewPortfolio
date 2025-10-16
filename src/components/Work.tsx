import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences, testimonials } from '../constants';

const Work = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="work" className="relative py-20 bg-dark-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="px-4 py-2 bg-neon-purple/10 border border-neon-purple/30 rounded-full text-neon-purple text-sm font-mono">
              // work history
            </span>
          </motion.div>
          <h2 className="section-title mb-4">
            my <span className="gradient-text">journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            6+ years of building cool stuff and breaking production (just kidding... mostly)
          </p>
          <p className="hidden md:block text-sm text-gray-400 font-mono">
            {'<-'} scroll to explore {'->'} 
          </p>
        </motion.div>

        {/* Mobile View - Vertical Timeline */}
        <div className="md:hidden relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-center"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  className="absolute left-8 transform -translate-x-1/2 z-10"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full border-4 border-dark-800 shadow-lg animate-pulse-glow"></div>
                </motion.div>

                {/* Content Card */}
                <div className="w-full ml-20">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 border border-neon-cyan/20 hover:border-neon-purple/60 transition-all duration-150"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 border-2 border-neon-cyan/30 shadow-lg"
                        style={{ backgroundColor: experience.iconBg }}
                      >
                        {experience.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-neon-cyan font-semibold text-sm mb-1">
                          {experience.company_name}
                        </p>
                        <p className="text-xs text-gray-400 font-mono">
                          {experience.date}
                        </p>
                      </div>
                    </div>

                    {/* Points */}
                    <ul className="space-y-2">
                      {experience.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="text-gray-300 text-xs leading-relaxed"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop View - Horizontal Scrolling Timeline */}
        <div className="hidden md:block relative mb-20 py-8 w-full">
          <div className="flex items-center gap-6 w-full">
            {/* Start Point - Fixed Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: experiences.length * 0.2 }}
              className="flex flex-col items-center flex-shrink-0"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center text-4xl shadow-lg shadow-neon-purple/50 animate-pulse-glow mb-4">
                🎯
              </div>
              <p className="text-neon-pink font-bold text-base text-center whitespace-nowrap">2025</p>
              <p className="text-gray-400 text-sm text-center whitespace-nowrap">still building</p>
            </motion.div>


          

            {/* Scrollable Container */}
            <div className="flex-1 overflow-x-auto pb-8 scrollbar-custom">
              <div className="flex items-center gap-0 min-w-max">
                {experiences.map((experience, index) => (
                <div key={index} className="flex items-center">
                  {/* Road Line Before Card */}
                  <div className="w-20 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"></div>

                  {/* Experience Card Container */}
                  <div className="relative flex flex-col items-center mx-4">
                    {/* Experience Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="glass-card p-6 border border-neon-cyan/20 hover:border-neon-purple/60 transition-all duration-150 cursor-pointer w-[480px] h-[320px] relative flex flex-col"
                    >
                      {/* Card Number Badge */}
                      <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-neon-cyan/50 z-20">
                        {index + 1}
                      </div>

                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div 
                          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 border-2 border-neon-cyan/30 shadow-lg"
                          style={{ backgroundColor: experience.iconBg }}
                        >
                          {experience.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-neon-cyan font-semibold text-sm mb-1">
                            {experience.company_name}
                          </p>
                          <p className="text-xs text-gray-400 font-mono">
                            {experience.date}
                          </p>
                        </div>
                      </div>

                      {/* Points */}
                      <ul className="space-y-2 flex-1 overflow-y-auto scrollbar-thin">
                        {experience.points.map((point, pointIndex) => (
                          <motion.li
                            key={pointIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.3, delay: index * 0.2 + 0.3 + pointIndex * 0.1 }}
                            className="text-gray-300 text-xs leading-relaxed"
                          >
                            {point}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Road Line After Card (if not last) */}
                  {index < experiences.length - 1 && (
                    <div className="w-20 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"></div>
                  )}
                </div>
                ))}
              </div>
            </div>

            {/* End Point - Fixed Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center flex-shrink-0"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full flex items-center justify-center text-4xl shadow-lg shadow-neon-cyan/50 mb-4">
                🚀
              </div>
              <p className="text-neon-cyan font-bold text-base text-center whitespace-nowrap">2019</p>
              <p className="text-gray-400 text-sm text-center whitespace-nowrap">started journey</p>
            </motion.div>
          </div>
        </div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="glass-card p-8 border border-neon-cyan/20 inline-block">
            <p className="text-gray-300 text-lg mb-2">
              <span className="text-neon-cyan font-bold">tl;dr:</span> been coding professionally since 2019
            </p>
            <p className="text-gray-400 text-sm font-mono">
              that's like... 6+ years of building awesome stuff 🚀 → 💻
            </p>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-neon-pink/10 border border-neon-pink/30 rounded-full text-neon-pink text-sm font-mono">
                // testimonials
              </span>
            </motion.div>
            <h3 className="text-3xl font-bold gradient-text mb-4">
              what people say
            </h3>
            <p className="text-gray-400">real reviews from real people (not bots, promise)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 border border-neon-cyan/20 hover:border-neon-purple/60 transition-all duration-150"
              >
                {/* Quote Icon */}
                <div className="text-6xl text-neon-cyan/20 mb-4">"</div>
                
                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  {testimonial.testimonial}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-14 h-14 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-neon-cyan font-medium text-sm">
                      {testimonial.designation}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          margin: 0 20px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #00f7ff, #b845ed, #ff006e);
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #00d4ff, #a030d5, #e0005a);
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(0, 247, 255, 0.3);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Work;
