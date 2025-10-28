import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';

function ManageBlog() {
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "5 Things to Consider When Buying Your First Home",
      category: "Tips & Advice",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
      date: "January 15, 2024",
      author: "Sarah Johnson",
      description: "Essential factors that every first-time homebuyer should keep in mind for a successful purchase."
    },
    {
      id: 2,
      title: "Real Estate Market Trends in 2024",
      category: "Market Insights",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
      date: "February 10, 2024",
      author: "Michael Chen",
      description: "Stay informed about the latest market trends and how they might affect your property investment."
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    date: '',
    author: '',
    description: '',
    content: ''
  });

  const handleOpenModal = (post = null) => {
    if (post) {
      setEditingPost(post);
      setFormData(post);
    } else {
      setEditingPost(null);
      setFormData({
        title: '',
        category: '',
        image: '',
        date: '',
        author: '',
        description: '',
        content: ''
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingPost(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPost) {
      setBlogPosts(blogPosts.map(p => p.id === editingPost.id ? { ...formData, id: editingPost.id } : p));
    } else {
      setBlogPosts([...blogPosts, { ...formData, id: blogPosts.length + 1 }]);
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setBlogPosts(blogPosts.filter(p => p.id !== id));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      <AdminSidebar />
      
      <div className="flex-1 ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold font-display text-dark-charcoal dark:text-creamy-white">
            Manage Blog
          </h1>
          <button
            onClick={() => handleOpenModal()}
            className="px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            <span className="material-symbols-outlined align-middle mr-2">add</span>
            Add New Post
          </button>
        </div>

        {/* Blog Posts List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url("${post.image}")` }}></div>
              <div className="p-6">
                <p className="text-primary text-xs font-bold mb-2">{post.category}</p>
                <h3 className="text-xl font-bold text-dark-charcoal dark:text-creamy-white mb-2">{post.title}</h3>
                <p className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70 mb-4">{post.description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleOpenModal(post)}
                    className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-background-dark rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-dark-charcoal dark:text-creamy-white">
                    {editingPost ? 'Edit Post' : 'Add New Post'}
                  </h2>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="Tips & Advice">Tips & Advice</option>
                      <option value="Market Insights">Market Insights</option>
                      <option value="Home Improvement">Home Improvement</option>
                      <option value="Architecture">Architecture</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Author</label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Image URL</label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Date</label>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="January 15, 2024"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Content (HTML)</label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="<p>Article content in HTML format...</p>"
                  ></textarea>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-dark-charcoal dark:text-creamy-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    {editingPost ? 'Update Post' : 'Create Post'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageBlog;

