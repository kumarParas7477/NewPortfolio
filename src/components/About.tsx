import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services, technologies, projects, stats, aboutContent, icons } from '../constants';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-eggshell-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-delft_blue-500 mb-4">
            {aboutContent.title.split(' ')[0]} <span className="bg-gradient-to-r from-cambridge_blue-500 to-delft_blue-500 bg-clip-text text-transparent">{aboutContent.title.split(' ')[1]}</span>
          </h2>
          <p className="text-xl text-delft_blue-300 max-w-3xl mx-auto">
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
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-delft_blue-500">
                {aboutContent.mainHeading}
              </h3>
              <p className="text-delft_blue-300 leading-relaxed">
                {aboutContent.description1}
              </p>
              <p className="text-delft_blue-300 leading-relaxed">
                {aboutContent.description2}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-eggshell-600 rounded-lg">
                  <div className="text-3xl font-bold text-cambridge_blue-500">{stat.value}</div>
                  <div className="text-sm text-delft_blue-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-delft_blue-500 mb-6">{aboutContent.servicesHeading}</h3>
            <div className="grid gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-eggshell-600 rounded-lg hover:bg-eggshell-500 transition-colors duration-200"
                >
                  <div className="text-2xl">{service.icon}</div>
                  <div>
                    <h4 className="font-semibold text-delft_blue-500 mb-2">{service.title}</h4>
                    <p className="text-delft_blue-300 text-sm">{service.description}</p>
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
          <h3 className="text-2xl font-semibold text-delft_blue-500 text-center mb-12">
            {aboutContent.technologiesHeading}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="flex flex-col items-center p-4 bg-eggshell-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 card-hover"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <span className="text-sm font-medium text-delft_blue-400">{tech.name}</span>
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
          <h3 className="text-2xl font-semibold text-delft_blue-500 text-center mb-12">
            {aboutContent.projectsHeading}
          </h3>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
                className="bg-eggshell-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-cambridge_blue-500 to-delft_blue-500 rounded-lg flex items-center justify-center text-3xl">
                      {project.image}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-delft_blue-500 mb-2">
                      {project.name}
                    </h4>
                    <p className="text-delft_blue-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-delft_blue-400 mb-2">Key Features:</h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm text-delft_blue-300">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-cambridge_blue-500 mr-2">{icons.bulletPoint}</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-eggshell-600 text-delft_blue-400 text-xs font-medium rounded-full"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.live_demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cambridge_blue-500 to-delft_blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                      >
                        <span className="mr-2">{icons.liveDemo}</span>
                        Live Demo
                      </a>
                      <a
                        href={project.source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-cambridge_blue-500 text-cambridge_blue-500 text-sm font-medium rounded-lg hover:bg-cambridge_blue-500 hover:text-white transition-all duration-200 transform hover:scale-105"
                      >
                        <span className="mr-2">{icons.sourceCode}</span>
                        Source Code
                      </a>
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
