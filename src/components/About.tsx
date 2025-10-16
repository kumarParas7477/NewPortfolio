import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services, technologies, projects, stats, aboutContent, icons } from '../constants';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="relative py-20 bg-dark-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
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
            <span className="px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-mono">
              // who am i?
            </span>
          </motion.div>
          <h2 className="section-title">
            <span className="gradient-text">{aboutContent.title}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {aboutContent.subtitle}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 text-center border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-300"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              {aboutContent.mainHeading}
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="border-l-4 border-neon-cyan pl-4">{aboutContent.description1}</p>
              <p className="border-l-4 border-neon-purple pl-4">{aboutContent.description2}</p>
            </div>
          </motion.div>

          {/* Right: Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">{aboutContent.servicesHeading}</h3>
            <div className="grid gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="glass-card p-4 border border-neon-cyan/20 hover:border-neon-purple/60 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">
              {aboutContent.technologiesHeading}
            </h3>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="glass-card p-4 flex flex-col items-center justify-center border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-300 aspect-square"
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <span className="text-xs text-gray-400 text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">
              {aboutContent.projectsHeading}
            </h3>
          </div>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.1 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 border border-neon-cyan/20 hover:border-neon-purple/60 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {/* Project Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                      {project.image}
                    </div>
                  </motion.div>
                  
                  {/* Project Details */}
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-3">
                      {project.name}
                    </h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-neon-cyan mb-2">key features:</h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-400">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-neon-cyan mr-2">{icons.bulletPoint}</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono rounded-lg"
                        >
                          #{tag.name}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.live_demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900 text-sm font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,247,255,0.5)] transition-all duration-300"
                      >
                        <span className="mr-2">{icons.liveDemo}</span>
                        live demo
                      </motion.a>
                      <motion.a
                        href={project.source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 glass-card border-2 border-neon-cyan/50 text-neon-cyan text-sm font-bold rounded-lg hover:bg-neon-cyan/10 transition-all duration-300"
                      >
                        <span className="mr-2">{icons.sourceCode}</span>
                        source code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
