import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services, technologies, projects, aboutContent, icons } from '../constants';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-delft_blue-200 to-delft_blue-100 relative overflow-hidden">
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
            {aboutContent.title.split(' ')[0]} <span className="bg-gradient-to-r from-cambridge_blue-400 to-delft_blue-400 bg-clip-text text-transparent">{aboutContent.title.split(' ')[1]}</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {aboutContent.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {aboutContent.mainHeading}
              </h3>
              <p className="text-white/80 leading-relaxed text-lg">
                {aboutContent.description1}
              </p>
              <p className="text-white/80 leading-relaxed text-lg">
                {aboutContent.description2}
              </p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">{aboutContent.servicesHeading}</h3>
            <div className="grid gap-5">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -6, x: 4 }}
                  className="group relative flex items-start space-x-5 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cambridge_blue-500/0 to-delft_blue-500/0 group-hover:from-cambridge_blue-500/5 group-hover:to-delft_blue-500/5 transition-all duration-500"></div>
                  <div className="text-4xl flex-shrink-0 relative z-10 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-white mb-2 text-lg group-hover:text-cambridge_blue-300 transition-colors">{service.title}</h4>
                    <p className="text-white/75 leading-relaxed">{service.description}</p>
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
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            {aboutContent.technologiesHeading}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.15, y: -8, rotateZ: 5 }}
                className="group relative flex flex-col items-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cambridge_blue-500/0 to-delft_blue-500/0 group-hover:from-cambridge_blue-500/10 group-hover:to-delft_blue-500/10 transition-all duration-500"></div>
                <div className="text-5xl mb-3 relative z-10 transform group-hover:scale-125 transition-transform duration-300">{tech.icon}</div>
                <span className="text-sm font-semibold text-white/90 text-center relative z-10">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            {aboutContent.projectsHeading}
          </h3>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl overflow-hidden"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cambridge_blue-500/0 via-transparent to-delft_blue-500/0 group-hover:from-cambridge_blue-500/10 group-hover:to-delft_blue-500/10 transition-all duration-700"></div>
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-cambridge_blue-500 to-delft_blue-500 rounded-lg flex items-center justify-center text-3xl">
                      {project.image}
                    </div>
                  </div>
                  <div className="flex-1 relative z-10">
                    <h4 className="text-2xl font-bold text-white mb-3">
                      {project.name}
                    </h4>
                    <p className="text-white/80 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-white/90 mb-3 uppercase tracking-wider">Key Features:</h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-white/70">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-cambridge_blue-400 mr-2 font-bold">{icons.bulletPoint}</span>
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
                          className="px-4 py-1.5 bg-white/10 border border-white/20 text-white/80 text-xs font-medium rounded-full"
                        >
                          {tag.name}
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
                        className="inline-flex items-center px-5 py-2.5 bg-white text-delft_blue-900 text-sm font-semibold rounded-full hover:shadow-xl transition-all duration-300"
                      >
                        <span className="mr-2">{icons.liveDemo}</span>
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-5 py-2.5 border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                      >
                        <span className="mr-2">{icons.sourceCode}</span>
                        Source Code
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
