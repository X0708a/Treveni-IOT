import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import LandingPage from './pages/LandingPage';
import DirectorDashboard from './pages/DirectorDashboard';
import DistrictDashboard from './pages/DistrictDashboard';
import VetMobileApp from './pages/VetMobileApp';
import FarmerMobileApp from './pages/FarmerMobileApp';
import LoadingSpinner from './components/ui/LoadingSpinner';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/director/*" element={<DirectorDashboard />} />
            <Route path="/district/*" element={<DistrictDashboard />} />
            <Route path="/vet/*" element={<VetMobileApp />} />
            <Route path="/farmer/*" element={<FarmerMobileApp />} />
          </Routes>
        </Suspense>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;