import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, MapPin, Award, Shield, Activity } from 'lucide-react';

const StatsSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const stats = [
    {
      icon: MapPin,
      number: '12,485',
      label: 'Farms Registered',
      description: 'Across Karnataka State',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Users,
      number: '2,847',
      label: 'Active Users',
      description: 'Directors, Vets, and Farmers',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Shield,
      number: '89.2%',
      label: 'Compliance Rate',
      description: 'Biosecurity Standards',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Activity,
      number: '24/7',
      label: 'Real-time Monitoring',
      description: 'IoT Sensor Network',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transforming Agriculture with
            <span className="gradient-text bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent ml-3">
              Data-Driven Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time statistics from our comprehensive digital farm management ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stats-card group"
            >
              <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium shadow-lg">
            <Award className="h-5 w-5 mr-2" />
            Smart India Hackathon 2024 - Innovation Excellence Award Candidate
            <TrendingUp className="h-5 w-5 ml-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;