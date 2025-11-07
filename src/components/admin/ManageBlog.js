import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';

function ManageBlog() {
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    date: '',
    author: '',
    description: '',
    content: ''
  });

  const [fileUploads, setFileUploads] = useState({
    imageFile: null
  });

  const [uploadProgress, setUploadProgress] = useState({
    image: false
  });

  // Fetch blogs from API
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/blogs', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      
      const result = await response.json();
      setBlogPosts(result.data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      alert('Failed to load blogs. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (post = null) => {
    if (post) {
      setEditingPost(post);
      setFormData({
        title: post.title || '',
        category: post.category || '',
        image: post.featuredImage || '',
        author: post.author || '',
        description: post.excerpt || '',
        content: post.content || '',
        published: post.published || false
      });
    } else {
      setEditingPost(null);
      setFormData({
        title: '',
        category: '',
        image: '',
        author: '',
        description: '',
        content: '',
        published: false
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingPost(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken');
      const blogData = {
        title: formData.title,
        excerpt: formData.description,
        content: formData.content,
        featuredImage: formData.image,
        author: formData.author || 'SV Builders',
        category: formData.category,
        published: formData.published || false
      };

      let response;
      if (editingPost) {
        // Update existing blog
        response = await fetch(`http://localhost:5000/api/blogs/${editingPost._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(blogData)
        });
      } else {
        // Create new blog
        response = await fetch('http://localhost:5000/api/blogs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(blogData)
        });
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save blog');
      }

      await fetchBlogs(); // Refresh the list
      handleCloseModal();
      alert(editingPost ? 'Blog updated successfully!' : 'Blog created successfully!');
    } catch (error) {
      console.error('Error saving blog:', error);
      alert(error.message || 'Failed to save blog. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const token = localStorage.getItem('adminToken');
        
        if (!token) {
          alert('You are not logged in. Please login again.');
          window.location.href = '/admin/login';
          return;
        }

        const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Failed to delete blog');
        }

        await fetchBlogs(); // Refresh the list
        alert('Blog deleted successfully!');
      } catch (error) {
        console.error('Error deleting blog:', error);
        alert(error.message || 'Failed to delete blog. Please try again.');
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e, fileType) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileUploads({ ...fileUploads, [fileType]: file });
    setUploadProgress({ ...uploadProgress, image: true });

    const formDataToSend = new FormData();
    
    try {
      let endpoint = 'http://localhost:5000/api/upload/image';
      let fieldName = 'image';

      formDataToSend.append(fieldName, file);

      const response = await fetch(endpoint, {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      
      setFormData({ ...formData, image: `http://localhost:5000${data.path}` });

      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploadProgress({ ...uploadProgress, image: false });
    }
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
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <p className="text-dark-charcoal dark:text-creamy-white">Loading blogs...</p>
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <p className="text-dark-charcoal dark:text-creamy-white">No blogs found. Create your first blog post!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post._id} className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url("${post.featuredImage || 'https://via.placeholder.com/400x300'}")` }}></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-primary text-xs font-bold">{post.category}</p>
                    {post.published ? (
                      <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">Published</span>
                    ) : (
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 rounded">Draft</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-dark-charcoal dark:text-creamy-white mb-2">{post.title}</h3>
                  <p className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70 mb-4">{post.excerpt || 'No description'}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleOpenModal(post)}
                      className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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
                      <option value="Real Estate">Real Estate</option>
                      <option value="Construction">Construction</option>
                      <option value="Lifestyle">Lifestyle</option>
                      <option value="News">News</option>
                      <option value="Tips">Tips</option>
                      <option value="Other">Other</option>
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
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Blog Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'imageFile')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {uploadProgress.image && (
                    <p className="text-sm text-primary mt-1">Uploading...</p>
                  )}
                  {formData.image && (
                    <div className="mt-2">
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Current Image:</p>
                      <img src={formData.image} alt="Preview" className="h-32 w-auto rounded object-cover" />
                      <input
                        type="hidden"
                        name="image"
                        value={formData.image}
                      />
                    </div>
                  )}
                  <div className="mt-2">
                    <label className="block text-xs font-medium mb-1 text-dark-charcoal dark:text-creamy-white">Or enter Image URL:</label>
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      placeholder="https://..."
                    />
                  </div>
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
                  <label className="flex items-center gap-2 mb-2 text-dark-charcoal dark:text-creamy-white">
                    <input
                      type="checkbox"
                      name="published"
                      checked={formData.published}
                      onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                      className="w-4 h-4 text-primary rounded focus:ring-primary"
                    />
                    <span className="text-sm font-medium">Publish this blog post</span>
                  </label>
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

