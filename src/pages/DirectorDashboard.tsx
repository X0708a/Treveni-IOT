import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Map, 
  Shield, 
  Package, 
  FileBarChart, 
  Settings,
  Bell,
  User,
  LogOut,
  Home,
  TrendingUp,
  Users,
  AlertTriangle,
  CheckCircle,
  MapPin
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const DirectorDashboard: React.FC = () => {
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const sampleData = {
    outbreaks: [
      { month: 'Jan', cases: 12, resolved: 10 },
      { month: 'Feb', cases: 19, resolved: 16 },
      { month: 'Mar', cases: 8, resolved: 8 },
      { month: 'Apr', cases: 15, resolved: 13 },
      { month: 'May', cases: 6, resolved: 6 },
      { month: 'Jun', cases: 22, resolved: 18 },
    ],
    compliance: [
      { district: 'Pune', rate: 92 },
      { district: 'Mumbai', rate: 88 },
      { district: 'Nashik', rate: 94 },
      { district: 'Kolhapur', rate: 86 },
      { district: 'Aurangabad', rate: 90 },
    ],
    diseases: [
      { name: 'Avian Influenza', value: 35, color: '#ef4444' },
      { name: 'Newcastle Disease', value: 25, color: '#f59e0b' },
      { name: 'IBD', value: 20, color: '#22c55e' },
      { name: 'Fowl Pox', value: 12, color: '#3b82f6' },
      { name: 'Others', value: 8, color: '#8b5cf6' },
    ]
  };

  const DashboardContent = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">State Overview Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Karnataka State • {currentTime.toLocaleDateString('en-IN', { 
              weekday: 'long', 
              day: 'numeric', 
              month: 'long',
              year: 'numeric'
            })} • {currentTime.toLocaleTimeString('en-IN')}
          </p>
        </div>
        <Button className="mt-4 sm:mt-0">
          <FileBarChart className="mr-2 h-4 w-4" />
          Export State Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Farms</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">12,485</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-success-600 mr-1" />
                  <span className="text-sm text-success-600 font-medium">+2.5% this month</span>
                </div>
              </div>
              <div className="bg-primary-50 p-3 rounded-lg border border-primary-200">
                <Home className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Compliance Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">89.2%</p>
                <div className="flex items-center mt-2">
                  <CheckCircle className="h-4 w-4 text-success-600 mr-1" />
                  <span className="text-sm text-success-600 font-medium">+1.2% improvement</span>
                </div>
              </div>
              <div className="bg-success-50 p-3 rounded-lg border border-success-200">
                <Shield className="h-6 w-6 text-success-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Outbreaks</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">7</p>
                <div className="flex items-center mt-2">
                  <AlertTriangle className="h-4 w-4 text-danger-600 mr-1" />
                  <span className="text-sm text-danger-600 font-medium">-3 from yesterday</span>
                </div>
              </div>
              <div className="bg-danger-50 p-3 rounded-lg border border-danger-200">
                <AlertTriangle className="h-6 w-6 text-danger-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Field Personnel</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">458</p>
                <div className="flex items-center mt-2">
                  <Users className="h-4 w-4 text-primary-600 mr-1" />
                  <span className="text-sm text-primary-600 font-medium">12 new this week</span>
                </div>
              </div>
              <div className="bg-primary-50 p-3 rounded-lg border border-primary-200">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Outbreak Trends (Last 6 Months)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={sampleData.outbreaks}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="cases" stroke="#ef4444" strokeWidth={3} name="New Cases" />
                  <Line type="monotone" dataKey="resolved" stroke="#22c55e" strokeWidth={3} name="Resolved" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Disease Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sampleData.diseases}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                >
                  {sampleData.diseases.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {sampleData.diseases.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* District Compliance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            District-wise Compliance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sampleData.compliance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="district" />
              <YAxis domain={[80, 100]} />
              <Tooltip />
              <Bar dataKey="rate" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 mr-8">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Home className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-gray-900">FarmGuard Portal</span>
              </Link>

              <div className="flex space-x-8">
                <Link to="/director" className="text-primary-600 border-b-2 border-primary-600 px-1 pt-1 pb-4 text-sm font-medium">
                  Overview
                </Link>
                <Link to="/director/heatmaps" className="text-gray-500 hover:text-gray-700 px-1 pt-1 pb-4 text-sm font-medium">
                  Disease Heatmaps
                </Link>
                <Link to="/director/compliance" className="text-gray-500 hover:text-gray-700 px-1 pt-1 pb-4 text-sm font-medium">
                  Compliance
                </Link>
                <Link to="/director/resources" className="text-gray-500 hover:text-gray-700 px-1 pt-1 pb-4 text-sm font-medium">
                  Resources
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<DashboardContent />} />
            <Route path="/*" element={<DashboardContent />} />
          </Routes>
        </motion.div>
      </main>
    </div>
  );
};

export default DirectorDashboard;