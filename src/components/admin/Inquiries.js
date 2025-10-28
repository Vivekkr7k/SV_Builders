import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';

function Inquiries() {
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 234 567 8900',
      message: 'I am interested in viewing the property. Please contact me.',
      date: '2024-01-15',
      status: 'New',
      project: 'Sai Omkar Residency'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1 234 567 8901',
      message: 'Could you provide more information about pricing and availability?',
      date: '2024-01-14',
      status: 'Contacted',
      project: 'Shri Balaji Residency'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      email: 'michael.j@example.com',
      phone: '+1 234 567 8902',
      message: 'I would like to schedule a virtual tour.',
      date: '2024-01-13',
      status: 'New',
      project: 'SV Sri Balaji Residency'
    }
  ]);

  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewDetails = (inquiry) => {
    setSelectedInquiry(inquiry);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedInquiry(null);
  };

  const handleStatusChange = (id, newStatus) => {
    setInquiries(inquiries.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      setInquiries(inquiries.filter(inq => inq.id !== id));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Contacted':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      <AdminSidebar />
      
      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold font-display text-dark-charcoal dark:text-creamy-white mb-8">
          Inquiries
        </h1>

        {/* Inquiries Table */}
        <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Phone</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Project</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Date</th>
                  <th className="px-6 py-4 text-center text-sm font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {inquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 text-sm text-dark-charcoal dark:text-creamy-white">{inquiry.name}</td>
                    <td className="px-6 py-4 text-sm text-dark-charcoal/70 dark:text-creamy-white/70">{inquiry.email}</td>
                    <td className="px-6 py-4 text-sm text-dark-charcoal/70 dark:text-creamy-white/70">{inquiry.phone}</td>
                    <td className="px-6 py-4 text-sm text-dark-charcoal/70 dark:text-creamy-white/70">{inquiry.project}</td>
                    <td className="px-6 py-4">
                      <select
                        value={inquiry.status}
                        onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(inquiry.status)} border-none cursor-pointer`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-dark-charcoal/70 dark:text-creamy-white/70">{inquiry.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleViewDetails(inquiry)}
                          className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </button>
                        <button
                          onClick={() => handleDelete(inquiry.id)}
                          className="p-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detail Modal */}
        {showModal && selectedInquiry && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-background-dark rounded-xl shadow-2xl w-full max-w-2xl">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-dark-charcoal dark:text-creamy-white">
                    Inquiry Details
                  </h2>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark-charcoal/70 dark:text-creamy-white/70 mb-1">Name</label>
                  <p className="text-lg font-semibold text-dark-charcoal dark:text-creamy-white">{selectedInquiry.name}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-charcoal/70 dark:text-creamy-white/70 mb-1">Email</label>
                  <p className="text-lg text-dark-charcoal dark:text-creamy-white">{selectedInquiry.email}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-charcoal/70 dark:text-creamy-white/70 mb-1">Phone</label>
                  <p className="text-lg text-dark-charcoal dark:text-creamy-white">{selectedInquiry.phone}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-charcoal/70 dark:text-creamy-white/70 mb-1">Project</label>
                  <p className="text-lg text-dark-charcoal dark:text-creamy-white">{selectedInquiry.project}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-charcoal/70 dark:text-creamy-white/70 mb-1">Date</label>
                  <p className="text-lg text-dark-charcoal dark:text-creamy-white">{selectedInquiry.date}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-charcoal/70 dark:text-creamy-white/70 mb-1">Message</label>
                  <p className="text-lg text-dark-charcoal dark:text-creamy-white bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    {selectedInquiry.message}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-charcoal/70 dark:text-creamy-white/70 mb-2">Status</label>
                  <select
                    value={selectedInquiry.status}
                    onChange={(e) => handleStatusChange(selectedInquiry.id, e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={handleCloseModal}
                    className="flex-1 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Inquiries;

