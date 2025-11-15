import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Services from './components/Services';
import ResidentialConstruction from './components/ResidentialConstruction';
import CommercialConstruction from './components/CommercialConstruction';
import Blog from './components/Blog';
import BlogArticle from './components/BlogArticle';

// Admin Components
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import ManageBlog from './components/admin/ManageBlog';
import ManageProjects from './components/admin/ManageProjects';
import Inquiries from './components/admin/Inquiries';

// ScrollToTop Component - Scrolls to top instantly first, then smooth for anchor links
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to top to prevent showing content at wrong position
    window.scrollTo(0, 0);
    
    // For smooth scrolling on anchor links or programmatic scrolls
    // The smooth behavior is handled by CSS scroll-behavior
  }, [pathname]);

  return null;
};

// PageTransition Component - Adds smooth fade-in animation on route change
const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('entering');
  const [isReady, setIsReady] = useState(true);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      // Start exit animation and hide content immediately
      setTransitionStage('exiting');
      setIsReady(false);
    }
  }, [location.pathname, displayLocation.pathname]);

  useEffect(() => {
    if (transitionStage === 'exiting') {
      const timer = setTimeout(() => {
        // Update location
        setDisplayLocation(location);
        
        // Force scroll to top instantly before showing content
        window.scrollTo(0, 0);
        
        // Use requestAnimationFrame to ensure scroll is complete
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            // Now start enter animation
            setTransitionStage('entering');
            setIsReady(true);
          });
        });
      }, 300); // Match the transition duration

      return () => clearTimeout(timer);
    }
  }, [transitionStage, location]);

  // Also handle initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      key={displayLocation.pathname}
      className={`page-transition ${
        transitionStage === 'entering' ? 'page-enter' : 'page-exit'
      } ${!isReady ? 'page-hidden' : ''}`}
      style={{
        opacity: isReady ? undefined : 0,
        visibility: isReady ? 'visible' : 'hidden',
        pointerEvents: isReady ? 'auto' : 'none'
      }}
    >
      {children}
    </div>
  );
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageTransition>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/residential-construction" element={<ResidentialConstruction />} />
          <Route path="/commercial-construction" element={<CommercialConstruction />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/article/:id" element={<BlogArticle />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/blog" element={
            <ProtectedRoute>
              <ManageBlog />
            </ProtectedRoute>
          } />
          <Route path="/admin/projects" element={
            <ProtectedRoute>
              <ManageProjects />
            </ProtectedRoute>
          } />
          <Route path="/admin/inquiries" element={
            <ProtectedRoute>
              <Inquiries />
            </ProtectedRoute>
          } />
          
          {/* Redirect to admin login if accessing admin routes without auth */}
          <Route path="/admin" element={<Navigate to="/admin/login" />} />
        </Routes>
      </PageTransition>
    </Router>
  );
}

export default App;
