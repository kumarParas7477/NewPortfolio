import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences, testimonials } from '../constants';

const Work = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="work" className="py-24 md:py-32 bg-gradient-to-b from-delft_blue-100 to-delft_blue-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cambridge_blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-delft_blue-500/5 rounded-full filter blur-3xl"></div>
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
            My <span className="bg-gradient-to-r from-cambridge_blue-400 to-delft_blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            A journey of growth, innovation, and impact across leading technology companies
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 md:left-8 top-0 w-0.5 h-full bg-gradient-to-b from-cambridge_blue-500/50 to-delft_blue-500/50"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-0 md:left-8 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cambridge_blue-500 to-delft_blue-500 rounded-full border-4 border-delft_blue-100 shadow-xl z-10 top-6"></div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full hover:shadow-2xl"
                >
                    <div className="flex items-center space-x-4 mb-6 flex-row">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ backgroundColor: experience.iconBg }}
                      >
                        {experience.icon}
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-cambridge_blue-400 font-semibold mb-1">
                          {experience.company_name}
                        </p>
                        <p className="text-sm text-white/60">
                          {experience.date}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-left mt-4">
                      {experience.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-white/80 text-sm leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            What People Say About Me
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cambridge_blue-500 to-delft_blue-500 rounded-full flex items-center justify-center text-2xl text-white mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-cambridge_blue-400 font-semibold">
                      {testimonial.designation}
                    </p>
                    <p className="text-sm text-white/60">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed italic text-lg mt-4">
                  "{testimonial.testimonial}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
