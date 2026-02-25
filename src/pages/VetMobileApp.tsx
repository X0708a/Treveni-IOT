import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  FileText, 
  Stethoscope, 
  Calendar, 
  User,
  ArrowLeft,
  MapPin,
  Activity,
  Camera,
  Thermometer,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const VetMobileApp: React.FC = () => {
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navigation = [
    { name: 'Home', href: '/vet', icon: Home },
    { name: 'Cases', href: '/vet/cases', icon: FileText },
    { name: 'Diagnostics', href: '/vet/diagnostics', icon: Stethoscope },
    { name: 'Schedule', href: '/vet/schedule', icon: Calendar },
    { name: 'Profile', href: '/vet/profile', icon: User },
  ];

  const HomeContent = () => (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-primary-600 text-white rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-xl font-bold">Welcome, Dr. Amit</h1>
            <div className="flex items-center text-primary-100 text-sm mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Bengaluru, Karnataka</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-primary-100">
              {currentTime.toLocaleDateString('en-IN')}
            </div>
            <div className="text-lg font-semibold">
              {currentTime.toLocaleTimeString('en-IN', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span>Field Veterinarian • Bengaluru Urban District</span>
          <div className="flex items-center">
            <Activity className="h-4 w-4 mr-1" />
            <span>Online</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <Card className="bg-success-50 border-success-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-success-600 font-medium text-sm">Today's Visits</p>
                <p className="text-2xl font-bold text-success-800">3</p>
              </div>
              <Calendar className="h-8 w-8 text-success-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-warning-50 border-warning-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-warning-600 font-medium text-sm">Active Cases</p>
                <p className="text-2xl font-bold text-warning-800">7</p>
              </div>
              <FileText className="h-8 w-8 text-warning-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-danger-50 border-danger-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-danger-600 font-medium text-sm">Urgent Alerts</p>
                <p className="text-2xl font-bold text-danger-800">2</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-danger-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary-50 border-primary-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-600 font-medium text-sm">Samples Sent</p>
                <p className="text-2xl font-bold text-primary-800">12</p>
              </div>
              <Thermometer className="h-8 w-8 text-primary-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button className="h-16 flex-col space-y-2">
              <Camera className="h-6 w-6" />
              <span className="text-sm">Capture Image</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <FileText className="h-6 w-6" />
              <span className="text-sm">Log Case</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Today's Schedule */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Clock className="h-5 w-5 mr-2" />
            Today's Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                id: 'V001',
                farmName: 'Green Valley Poultry Farm',
                time: '09:00 AM',
                type: 'Routine Inspection',
                status: 'pending',
                address: 'Hadapsar, Pune'
              },
              {
                id: 'V002', 
                farmName: 'Modern Livestock Systems',
                time: '11:30 AM',
                type: 'Vaccination',
                status: 'completed',
                address: 'Kothrud, Pune'
              }
            ].map((visit) => (
              <div key={visit.id} className="flex items-start p-3 bg-gray-50 rounded-lg">
                <div className={`w-3 h-3 rounded-full mt-2 mr-3 ${
                  visit.status === 'completed' ? 'bg-success-500' : 'bg-gray-400'
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900 text-sm">{visit.farmName}</p>
                    <span className="text-xs text-gray-500">{visit.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">{visit.type}</p>
                  <p className="text-xs text-gray-500 mt-1">{visit.address}</p>
                  <div className="mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      visit.status === 'completed' ? 'bg-success-100 text-success-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {visit.status === 'completed' ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">Back to Portal</span>
        </Link>
        <h1 className="text-lg font-semibold text-gray-900">Vet Mobile</h1>
        <div className="w-20" /> {/* Spacer */}
      </header>

      {/* Mobile Frame */}
      <div className="max-w-md mx-auto bg-white min-h-screen border-l border-r border-gray-200">
        {/* Main Content */}
        <main className="pb-20 px-4 py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<HomeContent />} />
              <Route path="/*" element={<HomeContent />} />
            </Routes>
          </motion.div>
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 px-4 py-2 z-50">
          <div className="flex justify-around">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href || (item.href === '/vet' && location.pathname.startsWith('/vet'));
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex flex-col items-center py-2 px-3 min-w-0 ${
                    isActive
                      ? 'text-primary-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <item.icon className="h-6 w-6 mb-1" />
                  <span className="text-xs font-medium truncate">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default VetMobileApp;