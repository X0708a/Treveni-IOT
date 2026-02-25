import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home as HomeIcon, 
  QrCode, 
  CheckSquare, 
  MessageCircle, 
  User,
  ArrowLeft,
  Mic,
  Bell,
  Thermometer,
  Droplets,
  Shield,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Volume2,
  Sun,
  Moon
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const FarmerMobileApp: React.FC = () => {
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isListening, setIsListening] = useState(false);
  const [temperature] = useState(24);
  const [humidity] = useState(65);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const navigation = [
    { name: 'Home', href: '/farmer', icon: HomeIcon, color: 'text-green-600' },
    { name: 'Scan', href: '/farmer/scanner', icon: QrCode, color: 'text-blue-600' },
    { name: 'Tasks', href: '/farmer/tasks', icon: CheckSquare, color: 'text-orange-600' },
    { name: 'Chat', href: '/farmer/chat', icon: MessageCircle, color: 'text-purple-600' },
    { name: 'Profile', href: '/farmer/profile', icon: User, color: 'text-gray-600' },
  ];

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'hi-IN'; // Hindi support
      speechSynthesis.speak(utterance);
    }
  };

  const startVoiceRecognition = () => {
    setIsListening(true);
    speakText("मैं सुन रहा हूँ। आप क्या जानना चाहते हैं?");

    setTimeout(() => {
      setIsListening(false);
      speakText("आपकी खेती अच्छी चल रही है। सभी पशु स्वस्थ हैं।");
    }, 3000);
  };

  const farmStats = [
    { label: 'मुर्गियाँ', value: '250', icon: HomeIcon, color: 'bg-green-50 text-green-600' },
    { label: 'आज का तापमान', value: `${temperature.toFixed(1)}°C`, icon: Thermometer, color: 'bg-blue-50 text-blue-600' },
    { label: 'नमी', value: `${humidity.toFixed(0)}%`, icon: Droplets, color: 'bg-purple-50 text-purple-600' },
    { label: 'सुरक्षा स्कोर', value: '92%', icon: Shield, color: 'bg-orange-50 text-orange-600' },
  ];

  const todayTasks = [
    { task: 'सुबह का चारा डालना', time: '6:00 AM', completed: true },
    { task: 'पानी की टंकी चेक करना', time: '8:00 AM', completed: true },
    { task: 'अंडे इकट्ठे करना', time: '10:00 AM', completed: false },
    { task: 'शाम का चारा', time: '5:00 PM', completed: false },
  ];

  const isDay = currentTime.getHours() >= 6 && currentTime.getHours() < 18;

  const HomeContent = () => (
    <div className="space-y-4">
      {/* Greeting Header with Voice */}
      <div className={`${isDay ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-blue-900 to-purple-900'} text-white rounded-xl p-4 mb-6`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            {isDay ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            <div>
              <h1 className="text-xl font-bold">
                {isDay ? 'नमस्ते रामेश जी!' : 'शुभ संध्या रामेश जी!'}
              </h1>
              <p className="text-sm opacity-90">किसान • रामनगर, कर्नाटक</p>
            </div>
          </div>
          <Button 
            onClick={startVoiceRecognition}
            className={`${isListening ? 'bg-red-500 animate-pulse' : 'bg-white/20 hover:bg-white/30'} text-white rounded-full p-3`}
          >
            <Mic className={`h-6 w-6 ${isListening ? 'text-white' : ''}`} />
          </Button>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span>{currentTime.toLocaleDateString('hi-IN', { 
            weekday: 'long', 
            day: 'numeric', 
            month: 'long' 
          })}</span>
          <span className="text-lg font-semibold">
            {currentTime.toLocaleTimeString('hi-IN', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </span>
        </div>

        {isListening && (
          <div className="mt-3 flex items-center justify-center">
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <div className="flex items-center space-x-2">
                <Volume2 className="h-4 w-4 animate-pulse" />
                <span className="text-sm">सुन रहा हूँ... बोलिए</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Farm Statistics */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {farmStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Voice Commands Help */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 mb-6">
        <CardHeader>
          <CardTitle className="flex items-center text-lg text-purple-800">
            <Volume2 className="h-5 w-5 mr-2" />
            आवाज़ी सहायता
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-purple-700">
            <p>• "तापमान बताओ" - वर्तमान तापमान</p>
            <p>• "आज के काम" - दिन के काम देखें</p>
            <p>• "दवाई का समय" - अगली दवाई कब</p>
            <p>• "सहायता" - और कमांड्स देखें</p>
          </div>
        </CardContent>
      </Card>

      {/* Today's Tasks */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-lg">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-green-600" />
              आज के काम
            </div>
            <Button 
              onClick={() => speakText("आज के काम: सुबह का चारा पूरा, पानी चेक हो गया, अंडे इकट्ठे करना बाकी है")}
              variant="ghost"
              size="sm"
            >
              <Volume2 className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {todayTasks.map((task, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 ${
                  task.completed ? 'bg-green-500' : 'bg-gray-300'
                }`}>
                  {task.completed ? (
                    <CheckCircle className="h-4 w-4 text-white" />
                  ) : (
                    <Clock className="h-4 w-4 text-gray-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className={`font-medium text-sm ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                    {task.task}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{task.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">त्वरित कार्य</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button 
              className="h-20 flex-col space-y-2 bg-green-600 hover:bg-green-700"
              onClick={() => speakText("QR कोड स्कैनर खोला जा रहा है")}
            >
              <Shield className="h-8 w-8" />
              <span className="text-sm">विज़िटर स्कैन</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col space-y-2 border-blue-300 text-blue-700 hover:bg-blue-50"
              onClick={() => speakText("मार्केट की कीमतें देखी जा रही हैं")}
            >
              <TrendingUp className="h-8 w-8" />
              <span className="text-sm">बाज़ार भाव</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Alerts and Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Bell className="h-5 w-5 mr-2 text-orange-600" />
            सूचनाएं
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-1" />
              <div>
                <p className="font-medium text-yellow-800 text-sm">अगली दवाई का समय</p>
                <p className="text-yellow-700 text-xs mt-1">कल सुबह 9 बजे - न्यूकैसल वैक्सीन</p>
              </div>
            </div>

            <div className="flex items-start p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-1" />
              <div>
                <p className="font-medium text-blue-800 text-sm">मौसम अपडेट</p>
                <p className="text-blue-700 text-xs mt-1">आज धूप रहेगी, तापमान 28°C तक</p>
              </div>
            </div>
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
        <h1 className="text-lg font-semibold text-gray-900">Farm Assistant</h1>
        <div className="w-20" />
      </header>

      {/* Voice indicator */}
      <div className="bg-success-500 text-white text-center py-1 text-xs">
        🎤 Voice commands enabled - Say "Help" to get started
      </div>

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
        <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t-2 border-gray-200 px-2 py-2 z-50 shadow-lg">
          <div className="flex justify-around">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href || (item.href === '/farmer' && location.pathname.startsWith('/farmer'));
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex flex-col items-center py-2 px-2 min-w-0 rounded-lg ${
                    isActive
                      ? `${item.color} bg-gray-100`
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <item.icon className="h-7 w-7 mb-1" strokeWidth={isActive ? 2.5 : 2} />
                  <span className={`text-xs font-medium truncate ${isActive ? 'font-semibold' : ''}`}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default FarmerMobileApp;