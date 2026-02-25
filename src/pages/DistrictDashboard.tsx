import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home,
  AlertTriangle,
  Syringe,
  Users,
  FileBarChart,
  Bell,
  User,
  LogOut,
  Building2,
  TrendingUp,
  CheckCircle,
  Clock,
  MapPin
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const DistrictDashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const sampleData = {
    farms: [
      { block: 'Hadapsar', farms: 145, compliant: 132, issues: 13 },
      { block: 'Kothrud', farms: 98, compliant: 89, issues: 9 },
      { block: 'Wakad', farms: 167, compliant: 152, issues: 15 },
      { block: 'Baner', farms: 89, compliant: 84, issues: 5 },
      { block: 'Hinjewadi', farms: 123, compliant: 118, issues: 5 },
    ],
    incidents: [
      { month: 'Jun', incidents: 8, resolved: 7 },
      { month: 'Jul', incidents: 12, resolved: 11 },
      { month: 'Aug', incidents: 6, resolved: 6 },
      { month: 'Sep', incidents: 9, resolved: 8 },
      { month: 'Oct', incidents: 4, resolved: 3 },
    ],
    visitors: [
      { type: 'Veterinarians', count: 45, color: '#22c55e' },
      { type: 'Feed Suppliers', count: 32, color: '#3b82f6' },
      { type: 'Inspectors', count: 18, color: '#f59e0b' },
      { type: 'Others', count: 25, color: '#8b5cf6' },
    ]
  };

  const DashboardContent = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">District Control Center</h1>
          <div className="flex items-center text-gray-600 mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Bengaluru Urban District • Karnataka State • {currentTime.toLocaleDateString('en-IN')}</span>
          </div>
        </div>
        <Button className="mt-4 sm:mt-0">
          <FileBarChart className="mr-2 h-4 w-4" />
          District Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Farms</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">622</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-success-600 mr-1" />
                  <span className="text-sm text-success-600 font-medium">+12 this month</span>
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
                <p className="text-sm font-medium text-gray-600">Active Incidents</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">7</p>
                <div className="flex items-center mt-2">
                  <AlertTriangle className="h-4 w-4 text-warning-600 mr-1" />
                  <span className="text-sm text-warning-600 font-medium">3 pending action</span>
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
                <p className="text-sm font-medium text-gray-600">Compliance Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">92.1%</p>
                <div className="flex items-center mt-2">
                  <CheckCircle className="h-4 w-4 text-success-600 mr-1" />
                  <span className="text-sm text-success-600 font-medium">+1.8% improvement</span>
                </div>
              </div>
              <div className="bg-success-50 p-3 rounded-lg border border-success-200">
                <CheckCircle className="h-6 w-6 text-success-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Field Team</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
                <div className="flex items-center mt-2">
                  <Users className="h-4 w-4 text-primary-600 mr-1" />
                  <span className="text-sm text-primary-600 font-medium">18 active today</span>
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Block-wise Farm Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sampleData.farms}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="block" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="compliant" fill="#22c55e" name="Compliant" />
                <Bar dataKey="issues" fill="#ef4444" name="Issues" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Incident Resolution Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sampleData.incidents}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="incidents" stroke="#ef4444" strokeWidth={3} name="New Incidents" />
                <Line type="monotone" dataKey="resolved" stroke="#22c55e" strokeWidth={3} name="Resolved" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Recent Incidents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { 
                    id: 'INC-001',
                    type: 'outbreak', 
                    title: 'Suspected Avian Influenza - Hadapsar Block', 
                    time: '3 hours ago',
                    status: 'Investigating',
                    farm: 'Green Valley Poultry Farm (GVP-001)'
                  },
                  { 
                    id: 'INC-002',
                    type: 'compliance', 
                    title: 'PPE Violation Report - Kothrud Block', 
                    time: '8 hours ago',
                    status: 'Action Required',
                    farm: 'Modern Poultry Systems (MPS-012)'
                  }
                ].map((incident, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      incident.type === 'outbreak' ? 'bg-danger-500' : 'bg-warning-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">{incident.title}</p>
                        <span className="text-xs text-gray-500">#{incident.id}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{incident.farm}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs text-gray-400">{incident.time}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          incident.status === 'Investigating' ? 'bg-warning-100 text-warning-800' :
                          'bg-danger-100 text-danger-800'
                        }`}>
                          {incident.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Today's Visitors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={sampleData.visitors}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  dataKey="count"
                >
                  {sampleData.visitors.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {sampleData.visitors.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
                    <span>{item.type}</span>
                  </div>
                  <span className="font-medium">{item.count}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-900">Total Today: 120</p>
              <p className="text-xs text-gray-500">+15% from yesterday</p>
            </div>
          </CardContent>
        </Card>
      </div>
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
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-gray-900">District Hub</span>
              </Link>

              <div className="flex space-x-8">
                <Link to="/district" className="text-green-600 border-b-2 border-green-600 px-1 pt-1 pb-4 text-sm font-medium">
                  Summary
                </Link>
                <Link to="/district/incidents" className="text-gray-500 hover:text-gray-700 px-1 pt-1 pb-4 text-sm font-medium">
                  Incidents
                </Link>
                <Link to="/district/vaccination" className="text-gray-500 hover:text-gray-700 px-1 pt-1 pb-4 text-sm font-medium">
                  Vaccination
                </Link>
                <Link to="/district/visitors" className="text-gray-500 hover:text-gray-700 px-1 pt-1 pb-4 text-sm font-medium">
                  Visitors
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

export default DistrictDashboard;