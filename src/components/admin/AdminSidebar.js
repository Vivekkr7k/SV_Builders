import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function AdminSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-creamy-white dark:bg-light-taupe/20 h-screen fixed left-0 top-0 flex flex-col shadow-lg border-r border-light-taupe/50 dark:border-creamy-white/20">
      {/* Logo */}
      <div className="p-6 border-b border-light-taupe/50 dark:border-creamy-white/20">
        <Link to="/admin/dashboard" className="flex items-center gap-3">
          <div className="size-8 text-primary">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.5l-10 9v12h20v-12l-10-9zm0 2.3l8 7.2v9h-16v-9l8-7.2zm-4 9.5h8v2h-8v-2zm0 4h8v2h-8v-2z"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold font-display text-dark-charcoal dark:text-creamy-white">SV Builders</h2>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <Link
          to="/admin/dashboard"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            isActive('/admin/dashboard') || location.pathname.startsWith('/admin')
              ? 'bg-primary text-white shadow-lg'
              : 'text-dark-charcoal dark:text-creamy-white hover:bg-primary/10 dark:hover:bg-primary/10'
          }`}
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-medium">Dashboard</span>
        </Link>

        <Link
          to="/admin/blog"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            isActive('/admin/blog')
              ? 'bg-primary text-white shadow-lg'
              : 'text-dark-charcoal dark:text-creamy-white hover:bg-primary/10 dark:hover:bg-primary/10'
          }`}
        >
          <span className="material-symbols-outlined">article</span>
          <span className="font-medium">Manage Blog</span>
        </Link>

        <Link
          to="/admin/projects"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            isActive('/admin/projects')
              ? 'bg-primary text-white shadow-lg'
              : 'text-dark-charcoal dark:text-creamy-white hover:bg-primary/10 dark:hover:bg-primary/10'
          }`}
        >
          <span className="material-symbols-outlined">apartment</span>
          <span className="font-medium">Manage Projects</span>
        </Link>

        <Link
          to="/admin/inquiries"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            isActive('/admin/inquiries')
              ? 'bg-primary text-white shadow-lg'
              : 'text-dark-charcoal dark:text-creamy-white hover:bg-primary/10 dark:hover:bg-primary/10'
          }`}
        >
          <span className="material-symbols-outlined">mail</span>
          <span className="font-medium">Inquiries</span>
        </Link>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-light-taupe/50 dark:border-creamy-white/20">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-dark-charcoal dark:text-creamy-white hover:bg-red-500 hover:text-white transition-colors font-medium"
        >
          <span className="material-symbols-outlined">logout</span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;

