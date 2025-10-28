import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple authentication - in production, use backend authentication
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-background-light flex items-center justify-center px-4">
      <div className="bg-white dark:bg-background-dark rounded-xl shadow-2xl p-8 md:p-12 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold font-display text-dark-charcoal dark:text-creamy-white mb-2">Admin Login</h1>
          <p className="text-dark-charcoal/70 dark:text-creamy-white/70">SV Builders Admin Panel</p>
        </div>
        
        {error && (
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-dark-charcoal dark:text-creamy-white mb-2">
              Username
            </label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-charcoal dark:text-creamy-white mb-2">
              Password
            </label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-dark-charcoal/60 dark:text-creamy-white/60">
          <p>Default: admin / admin123</p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;

