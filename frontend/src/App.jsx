import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

// Auth context
import { AuthProvider } from './context/AuthContext';

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Pages
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Request from './pages/Request';
import History from './pages/History';
import Education from './pages/Education';
import Donation from './pages/Donation';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Main site pages */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="request" element={<Request />} />
            <Route path="history" element={<History />} />
            <Route path="education" element={<Education />} />
            <Route path="donation" element={<Donation />} />
          </Route>

          {/* Auth routes with a different layout */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
