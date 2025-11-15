import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
