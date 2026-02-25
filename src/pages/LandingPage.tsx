import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Building, 
  Stethoscope,
  Wheat,
  ArrowRight,
  Shield,
  Brain,
  Smartphone,
  Mic,
  Activity,
  CheckCircle,
  Users,
  Award,
  MapPin
} from 'lucide-react';
import { } from '../components/ui/card';
import { Button } from '../components/ui/button';
import ThreeScene from '../components/three/ThreeScene';
import StatsSection from '../components/sections/StatsSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import TechStackSection from '../components/sections/TechStackSection';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: appsRef, inView: appsInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const applications = [
    {
      id: 'director',
      title: 'State Director Dashboard',
      description: 'Comprehensive state-wide monitoring, policy management, and resource allocation with AI-powered analytics for directors of animal husbandry.',
      targetUser: 'Directors of Animal Husbandry & Veterinary Services',
      features: ['Disease Heatmaps', 'Compliance Tracking', 'Resource Planning', 'Advanced Reports'],
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      icon: Building2,
      path: '/director',
      stats: { farms: '12,485', compliance: '89.2%', districts: '36' }
    },
    {
      id: 'district',
      title: 'District Head Control Center',
      description: 'District-level operations, incident management, vaccination tracking, and field team coordination for efficient local governance.',
      targetUser: 'Joint/Deputy Directors and District Heads',
      features: ['Incident Management', 'Vaccination Tracking', 'Block Analysis', 'Field Coordination'],
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      icon: Building,
      path: '/district',
      stats: { incidents: '127', teams: '24', coverage: '92.1%' }
    },
    {
      id: 'veterinary',
      title: 'Veterinary Field App',
      description: 'Mobile-optimized PWA for field veterinarians with AI diagnostics, case management, and real-time sample tracking capabilities.',
      targetUser: 'Field Veterinarians and Animal Health Officers',
      features: ['Case Logging', 'AI Diagnostics', 'Sample Tracking', 'Digital Certificates'],
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      icon: Stethoscope,
      path: '/vet',
      stats: { cases: '2,847', samples: '1,234', accuracy: '94.8%' }
    },
    {
      id: 'farmer',
      title: 'Smart Farm Assistant',
      description: 'Voice-enabled mobile assistant with multilingual support (Hindi/English), QR scanning, and intelligent task management for farmers.',
      targetUser: 'Smallholder Farmers and Farm Owners',
      features: ['Voice Commands', 'QR Scanning', 'Task Management', 'Market Prices'],
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      icon: Wheat,
      path: '/farmer',
      stats: { farmers: '8,456', tasks: '15,234', savings: '₹2.4L' }
    }
  ];

  const innovations = [
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Live dashboard updates with IoT sensor integration and instant alert systems',
      color: 'text-blue-600'
    },
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'Computer vision PPE detection and machine learning health assessment',
      color: 'text-purple-600'
    },
    {
      icon: Mic,
      title: 'Voice Assistance',
      description: 'Multilingual voice commands in Hindi, Marathi, and English',
      color: 'text-green-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First PWA',
      description: 'Progressive Web Apps with offline capability and native experience',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">FarmGuard Portal</h1>
                <p className="text-xs text-gray-500">Smart India Hackathon 2024</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <span className="text-sm text-gray-600">
                {currentTime.toLocaleDateString('en-IN', { 
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
              <MapPin className="h-4 w-4 text-gray-400 ml-2" />
              <span className="text-sm text-gray-500">Karnataka, India</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Three.js Background */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ThreeScene />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent z-10" />

        <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <Award className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-white text-sm font-medium">Smart India Hackathon 2024 Solution</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow-lg">
              Digital Farm
              <br />
              <span className="gradient-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Management Portal
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-shadow">
              Complete biosecurity solution transforming Indian agriculture through AI, IoT, and voice-enabled technology
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => document.getElementById('applications')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg px-8 py-4"
              >
                Explore Applications
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 backdrop-blur-lg border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Applications Section */}
      <section id="applications" className="section-padding bg-gray-50" ref={appsRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: appsInView ? 1 : 0, y: appsInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your
              <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-3">
                Role
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access role-specific dashboards and mobile applications designed for your unique needs in the agricultural ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: appsInView ? 1 : 0, y: appsInView ? 0 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="app-card group cursor-pointer"
                onClick={() => navigate(app.path)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 ${app.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <app.icon className={`h-8 w-8 ${app.textColor}`} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs text-gray-500 font-medium">ACTIVE</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {app.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {app.description}
                  </p>

                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-6 ${app.bgColor} ${app.textColor}`}>
                    <Users className="h-3 w-3 mr-1" />
                    {app.targetUser}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      {Object.entries(app.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-semibold text-gray-900">{value}</div>
                          <div className="text-xs capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    <Button className={`bg-gradient-to-r ${app.color} text-white hover:shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      Launch App
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Innovation
              <span className="gradient-text bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ml-3">
                Highlights
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology solutions designed specifically for Indian agricultural challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="feature-card text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 ${innovation.color.replace('text', 'bg').replace('600', '50')} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <innovation.icon className={`h-8 w-8 ${innovation.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{innovation.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{innovation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white section-padding">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Digital Farm Management Portal</h3>
                <p className="text-gray-400">Smart India Hackathon 2024</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h4 className="font-semibold mb-4 text-blue-400">Technology Stack</h4>
                <div className="space-y-2 text-gray-400">
                  <p>React 18 + TypeScript</p>
                  <p>Tailwind CSS + ShadCN UI</p>
                  <p>Three.js + Framer Motion</p>
                  <p>Progressive Web Apps</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-green-400">Key Features</h4>
                <div className="space-y-2 text-gray-400">
                  <p>AI-Powered Diagnostics</p>
                  <p>Real-time IoT Monitoring</p>
                  <p>Voice Assistant (Hindi/English)</p>
                  <p>Mobile-First Design</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-purple-400">Contact</h4>
                <div className="space-y-2 text-gray-400">
                  <p>Smart India Hackathon 2024</p>
                  <p>FarmGuard Development Team</p>
                  <p>Maharashtra, India</p>
                  <p>Built with ❤️ for farmers</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2024 Digital Farm Management Portal. Built for Smart India Hackathon 2024.
                <br />
                <span className="text-sm">Transforming Indian Agriculture Through Digital Innovation</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;