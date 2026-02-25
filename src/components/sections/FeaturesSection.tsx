import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Brain, 
  Smartphone, 
  Wifi, 
  Mic,
  BarChart3
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const features = [
    {
      icon: Shield,
      title: 'Advanced Biosecurity',
      description: 'Real-time PPE compliance monitoring with AI-powered computer vision for automatic violation detection.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Machine learning algorithms for disease prediction, outbreak analysis, and intelligent resource allocation.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Mic,
      title: 'Voice Assistant',
      description: 'Multilingual voice commands in Hindi, Marathi, and English with speech synthesis for farmer guidance.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Smartphone,
      title: 'Progressive Web Apps',
      description: 'Mobile-first PWAs with offline capability, push notifications, and native app-like experience.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Wifi,
      title: 'IoT Integration',
      description: 'Real-time environmental monitoring with temperature, humidity, and air quality sensors.',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive dashboards with interactive charts, heatmaps, and predictive insights.',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-3">
              Feature Set
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for modern farm management, biosecurity compliance, and digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="feature-card group"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;