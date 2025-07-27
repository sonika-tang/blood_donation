import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Pages
import Home from './pages/Home';
// import Donation from './pages/Donation';
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
    <Router>
      <Routes>
        {/* Main application routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/request" element={<Request />} />
          <Route path="/history" element={<History />} />
          <Route path="/education" element={<Education />} />
        </Route>

        {/* Authentication routes with AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;