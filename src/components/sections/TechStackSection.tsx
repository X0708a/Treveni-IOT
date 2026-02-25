import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechStackSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const technologies = [
    { name: 'React 18', category: 'Frontend', color: 'bg-blue-500' },
    { name: 'TypeScript', category: 'Language', color: 'bg-blue-600' },
    { name: 'Tailwind CSS', category: 'Styling', color: 'bg-cyan-500' },
    { name: 'ShadCN UI', category: 'Components', color: 'bg-gray-800' },
    { name: 'Three.js', category: '3D Graphics', color: 'bg-green-600' },
    { name: 'Framer Motion', category: 'Animation', color: 'bg-purple-600' },
    { name: 'Recharts', category: 'Data Viz', color: 'bg-orange-500' },
    { name: 'PWA', category: 'Mobile', color: 'bg-indigo-600' },
  ];

  const browsers = [
    { name: 'Chrome', support: '90+' },
    { name: 'Firefox', support: '88+' },
    { name: 'Safari', support: '14+' },
    { name: 'Edge', support: '90+' },
  ];

  return (
    <section ref={ref} className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Built with
            <span className="gradient-text bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-3">
              Modern Technology
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leveraging the latest web technologies for optimal performance, security, and user experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">Technology Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 ${tech.color} rounded-full`} />
                    <div>
                      <div className="font-semibold text-white">{tech.name}</div>
                      <div className="text-sm text-gray-400">{tech.category}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Browser Support */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-green-400">Browser Support</h3>
            <div className="space-y-4 mb-8">
              {browsers.map((browser, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-4 flex items-center justify-between"
                >
                  <span className="text-white font-medium">{browser.name}</span>
                  <span className="text-green-400 font-semibold">{browser.support}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6">
              <h4 className="font-semibold text-white mb-3">Performance Metrics</h4>
              <div className="space-y-2 text-sm text-blue-100">
                <div className="flex justify-between">
                  <span>Bundle Size:</span>
                  <span className="font-semibold">&lt;500KB gzipped</span>
                </div>
                <div className="flex justify-between">
                  <span>Lighthouse Score:</span>
                  <span className="font-semibold">95+ Performance</span>
                </div>
                <div className="flex justify-between">
                  <span>Accessibility:</span>
                  <span className="font-semibold">100/100 WCAG 2.1</span>
                </div>
                <div className="flex justify-between">
                  <span>Load Time:</span>
                  <span className="font-semibold">&lt;2s on 3G</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;