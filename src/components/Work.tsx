import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences, testimonials } from '../constants';

const Work = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="work" className="py-20 bg-eggshell-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-cambridge_blue-500 to-delft_blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of growth, innovation, and impact across leading technology companies
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cambridge_blue-500 to-delft_blue-500"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cambridge_blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className="w-5/12 pl-8 text-left">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 h-full"
                  >
                    <div className="flex items-center space-x-4 mb-6 flex-row">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ backgroundColor: experience.iconBg }}
                      >
                        {experience.icon}
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-delft_blue-500 font-medium mb-1">
                          {experience.company_name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {experience.date}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-left">
                      {experience.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-gray-600 text-sm leading-relaxed">
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

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What People Say About Me
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cambridge_blue-500 to-delft_blue-500 rounded-full flex items-center justify-center text-2xl text-white mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-delft_blue-500 font-medium">
                      {testimonial.designation}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
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
