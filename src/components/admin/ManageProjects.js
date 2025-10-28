import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';

function ManageProjects() {
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Sai Omkar Residency",
      subtitle: "Experience Unparalleled Luxury and Comfort",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      status: 'Completed',
      bedrooms: '4',
      bathrooms: '4.5',
      sqft: '3,500',
      price: '$2,500,000',
      type: 'Residential',
      year: '2023',
      description: 'Discover a home where modern architecture meets serene living. This property is a testament to exquisite craftsmanship and attention to detail.',
      floorPlan: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVS3IukR36l6IXOkiVtG2wLZulfhPjoc54VNiDCPkGTdibYMPzZJrNF9VrCx85Vcarrh_N_uRPkGsnsbGR6VOQLqbHFu754TqpFafotau2ot1rIjSCJexvT5xqmfZZF-xNsym6ssByPoz2bTY-M2vwhrtY0N8dNjQUjE3iPQasitXaEkcKh8DM45EWckfs_M-_n1Avtjf8ImeeyZZG_hf8Uw2EYD47v4Buymsk4fTQQJxPE6_e70AagdjD_Xcvzc4ppOfqz3El-Mo',
      locationMap: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAXCMy7U-YH7VldvRti8IeBjVvjwJI5PQxz27z6ECTkVvce5dNviDzzzeemJNRxmK5ADiV-RE50E2o64KikNwWC7SK5kJZF6YJXNmc9vTdp3rMCLgECyupK2H8wfoBogQxFaTsZDQ-1tHyONjm6E9FkkrUBfSukAeaR97g67f5Zt8zkt_aAB2zQIMe3UgYpH9ksV9Nv9MUSIVxnitEppSRU9jbyLb_NXkf0pugR-aOio5TQYsLfUACb7yCaSR4CLj2godUeIHEpgA',
      gallery: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCzurAOmdzBWDx5MjGT2a9sHWFxFDM92itFxsMVXrd1OGITUA-bJlgqvLR1T4dwoGw3dpGR0lC8vIVxRouDeeXkm2_4-TNc3pvvHRcip0Qo8C0BsyHvxAsXkKO62cj_iqVNv-UHAGQYZcBz3LHYYrGG52LKMx6yfyAKVtgDfW1qpKcw4twLQper1fvGQ6OJw0gz60aCv4coYQSXc55LyNhUcRtoZxhQT9ds4rZ5VGe2h6bGRbQbuBrIGCzpdEpKLjMK-99aKXW5Ozk',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD3dX4VeG1v0jkhDGoaK2GxiCJMEdKoESYKjY8nnJhilxZyqoMFW8yW3QYZARj9kucrb1izPT9Q53oMi_p9iQwa4D2biRAEqH0TNpfymU7HABbL_nbK0-ZDk1xUr9ayeJkY0PeqouVLwp7iBaDWyioyXwh4u7fetml6iX2T-ca7cMvTn72rt4jEGQo_MGVaLomX2VVWAIg7hdMOfeSHmS5OAIReRmGcogc6_6eXMmqGSMpoDneKGo1YMlw0euAjsjAEUBCaoPg2Qno',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDaTItoIz1vtLM-pVok8YHTcB9YQY1ISxj9gK8U_C3fa0pkSRt2UuDBgFUp34jL2eL8DWlABaf6HT0bTyLebi36ZeP0_bMVYqraeohB7Xx1U1bEVoL9r6ZXOuyvA8hcjK2MYFQj_iKjReYkD8zENCAfLY2xhgXcEqkOdUyy_ZjC0lViV7qihBcZSTWFso23nqJ3GKLRue62eP689qYiF8jLw7gVgWdv5LZnTr2r_ft_2UNGeWnYGPwfVQIJqVjFExtFveKquZkmk9o',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD35mVNuMxZ_iaWEngOnGhprk69pDdAPVj1ZsrKcWeYSONtxxXrlXBK8E2yD4A_fsrCeU6oHdxk8dTcLXvx2FQxpV6qM7m4gLGoKJSsJjBWXFdV3JhaRJvXoAEqRLqbHboCcJ8Ux-OmzZ82I4XeCXJIEMQWOY_fE9YboZbudQJCobokVj3Vx9UBgDsQyxEdaDFqcKTO8nukY-iyG8kqbvZYoHT74vahfmYIX_ewvRBwc70fAhp9Iy0wQQNgX6EvW3TBlDCQml8-O7I',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB3JHDOGtehXGCleOjr36R6zj6lqIOCO1hX-R3ss-DwhGbMd_jHbOBOYn21KXkf7m3r0JlzeB2eV99lygPHUVfpsCWyC5i22SOoQLxxAR1BcR988wuzdrMZKU6uYWmxZ4bDexTHIDX1KiKWStQtx1l2SeN4iqb_Y3z9kgF8xcUXzLPU0azA3k4wkX4UlCbAYSIvW4bFnlapVDowcDEMIXAVVDFzrTSI6A7Jw1deXr9RJgXPwmQAtyPXk46DJYvqRTlJCt0jjmP83q0'
      ]
    },
    {
      id: 2,
      title: "Shri Balaji Residency",
      subtitle: "Exquisite Luxury by the Ocean",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8tACyec0xqLnYRXU3rGZsI54n9D97neDXRiaTRkgfnk8iNaSyoJ7GNtnuIRpKV8h-yqT8aFi5QAonhaoio9SZmMjR6e2ERWFXb2Pq1_-qZWUXOx5ZxuVNJb3rs-BUetZcpIo83j_Cl29Xkvrcb3lvWXbfigrz_ww88j0ygk4sVGbbCt0Xc479-0ZeUNf2KLkjJR3z1a16YGjRf7rpvvZNK026FLAaojEgW3v9fsUAdImRBsAvbu5y0m9uInwgp0TYrQaQEFDJe6Q",
      status: 'Ongoing',
      bedrooms: '3',
      bathrooms: '3',
      sqft: '2,800',
      price: '$1,800,000',
      type: 'Residential',
      year: '2024',
      description: 'Modern family living with spacious interiors and lush green surroundings.',
      floorPlan: '',
      locationMap: '',
      gallery: ['', '', '', '', '']
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    image: '',
    status: 'Completed',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    price: '',
    type: '',
    year: '',
    description: '',
    floorPlan: '',
    locationMap: '',
    gallery: ['', '', '', '', '']
  });

  const handleOpenModal = (project = null) => {
    if (project) {
      setEditingProject(project);
      setFormData({
        title: project.title || '',
        subtitle: project.subtitle || '',
        image: project.image || '',
        status: project.status || 'Completed',
        bedrooms: project.bedrooms || '',
        bathrooms: project.bathrooms || '',
        sqft: project.sqft || '',
        price: project.price || '',
        type: project.type || '',
        year: project.year || '',
        description: project.description || '',
        floorPlan: project.floorPlan || '',
        locationMap: project.locationMap || '',
        gallery: project.gallery || ['', '', '', '', '']
      });
    } else {
      setEditingProject(null);
      setFormData({
        title: '',
        subtitle: '',
        image: '',
        status: 'Completed',
        bedrooms: '',
        bathrooms: '',
        sqft: '',
        price: '',
        type: '',
        year: '',
        description: '',
        floorPlan: '',
        locationMap: '',
        gallery: ['', '', '', '', '']
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingProject(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProject) {
      setProjects(projects.map(p => p.id === editingProject.id ? { ...formData, id: editingProject.id } : p));
    } else {
      setProjects([...projects, { ...formData, id: projects.length + 1 }]);
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
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
            Manage Projects
          </h1>
          <button
            onClick={() => handleOpenModal()}
            className="px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            <span className="material-symbols-outlined align-middle mr-2">add</span>
            Add New Project
          </button>
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url("${project.image}")` }}></div>
              <div className="p-6">
                <p className="text-primary text-xs font-bold mb-2">{project.status}</p>
                <h3 className="text-xl font-bold text-dark-charcoal dark:text-creamy-white mb-1">{project.title}</h3>
                <p className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70 mb-4">{project.subtitle}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
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
            <div className="bg-white dark:bg-background-dark rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-dark-charcoal dark:text-creamy-white">
                    {editingProject ? 'Edit Project' : 'Add New Project'}
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
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Project Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Subtitle</label>
                  <input
                    type="text"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
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

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="Completed">Completed</option>
                      <option value="Ongoing">Ongoing</option>
                      <option value="Upcoming">Upcoming</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Property Type</label>
                    <input
                      type="text"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Residential"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Bedrooms</label>
                    <input
                      type="text"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Bathrooms</label>
                    <input
                      type="text"
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Square Footage</label>
                    <input
                      type="text"
                      name="sqft"
                      value={formData.sqft}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="3,500 sqft"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Year Built</label>
                    <input
                      type="text"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="2023"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Price</label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="$2,500,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Detailed description of the property..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Floor Plan Image URL</label>
                  <input
                    type="url"
                    name="floorPlan"
                    value={formData.floorPlan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Location Map Image URL</label>
                  <input
                    type="url"
                    name="locationMap"
                    value={formData.locationMap}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Gallery Images (5 URLs)</label>
                  <div className="space-y-2">
                    {formData.gallery.map((url, index) => (
                      <input
                        key={index}
                        type="url"
                        value={url}
                        onChange={(e) => {
                          const newGallery = [...formData.gallery];
                          newGallery[index] = e.target.value;
                          setFormData({ ...formData, gallery: newGallery });
                        }}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder={`Gallery image ${index + 1} URL`}
                      />
                    ))}
                  </div>
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
                    {editingProject ? 'Update Project' : 'Create Project'}
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

export default ManageProjects;

