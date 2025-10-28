import React from 'react';
import AdminSidebar from './AdminSidebar';

function AdminDashboard() {
  // Mock data - in production, fetch from backend
  const stats = [
    { label: 'Total Projects', value: '12', icon: 'apartment', color: 'text-blue-500' },
    { label: 'Blog Posts', value: '8', icon: 'article', color: 'text-green-500' },
    { label: 'Inquiries', value: '24', icon: 'mail', color: 'text-yellow-500' },
    { label: 'Completed', value: '6', icon: 'check_circle', color: 'text-purple-500' },
  ];

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      <AdminSidebar />
      
      <div className="flex-1 ml-64">
        <div className="p-8">
          <h1 className="text-3xl font-bold font-display text-dark-charcoal dark:text-creamy-white mb-8">
            Dashboard
          </h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`material-symbols-outlined text-4xl ${stat.color}`}>
                    {stat.icon}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-dark-charcoal dark:text-creamy-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-dark-charcoal dark:text-creamy-white mb-4">
                Recent Inquiries
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-dark-charcoal dark:text-creamy-white">John Doe</p>
                  <p className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70">john@example.com</p>
                  <p className="text-xs text-dark-charcoal/60 dark:text-creamy-white/60 mt-1">2 hours ago</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-dark-charcoal dark:text-creamy-white">Jane Smith</p>
                  <p className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70">jane@example.com</p>
                  <p className="text-xs text-dark-charcoal/60 dark:text-creamy-white/60 mt-1">5 hours ago</p>
                </div>
              </div>
            </div>

            <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-dark-charcoal dark:text-creamy-white mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors">
                  <span className="material-symbols-outlined align-middle mr-2">add</span>
                  Add New Blog Post
                </button>
                <button className="w-full text-left px-4 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors">
                  <span className="material-symbols-outlined align-middle mr-2">add</span>
                  Add New Project
                </button>
                <button className="w-full text-left px-4 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors">
                  <span className="material-symbols-outlined align-middle mr-2">mail</span>
                  View All Inquiries
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

