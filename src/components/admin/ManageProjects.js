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
    status: 'completed',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    price: 'On Request',
    propertyType: 'Residential Apartments',
    yearBuilt: '',
    completionDate: '',
    launchDate: '',
    description: '',
    location: '',
    area: '',
    exactLocation: '',
    amenities: '',
    bhkConfig: '',
    totalUnits: '',
    numberOfFlats: '',
    floorPlan: '',
    locationMap: '',
    gallery: ['', '', '', '', ''],
    floorPlans2D: ['', '', ''],
    floorPlans3D: ['', '', ''],
    brochure: '',
    pricelist: '',
    nearbyHotspots: [{ name: '', distance: '', type: 'Transport' }, { name: '', distance: '', type: 'Transport' }]
  });

  const [fileUploads, setFileUploads] = useState({
    imageFile: null,
    brochureFile: null,
    pricelistFile: null
  });

  const [uploadProgress, setUploadProgress] = useState({
    image: false,
    brochure: false,
    pricelist: false
  });

  const handleOpenModal = (project = null) => {
    if (project) {
      setEditingProject(project);
      setFormData({
        title: project.title || '',
        subtitle: project.subtitle || '',
        image: project.image || '',
        status: project.status || 'completed',
        bedrooms: project.bedrooms || '',
        bathrooms: project.bathrooms || '',
        sqft: project.sqft || '',
        price: project.price || 'On Request',
        propertyType: project.propertyType || project.type || 'Residential Apartments',
        yearBuilt: project.yearBuilt || project.year || '',
        completionDate: project.completionDate || '',
        launchDate: project.launchDate || '',
        description: project.description || '',
        location: project.location || '',
        area: project.area || '',
        exactLocation: project.exactLocation || '',
        amenities: Array.isArray(project.amenities) ? project.amenities.join(', ') : (project.amenities || ''),
        bhkConfig: Array.isArray(project.bhkConfig) ? project.bhkConfig.join(', ') : (project.bhkConfig || project.bedrooms || ''),
        totalUnits: project.totalUnits || '',
        numberOfFlats: project.numberOfFlats || '',
        floorPlan: project.floorPlan || '',
        locationMap: project.locationMap || '',
        gallery: Array.isArray(project.gallery) ? project.gallery : ['', '', '', '', ''],
        floorPlans2D: Array.isArray(project.floorPlans2D) ? project.floorPlans2D : ['', '', ''],
        floorPlans3D: Array.isArray(project.floorPlans3D) ? project.floorPlans3D : ['', '', ''],
        brochure: project.brochure || project.brochureUrl || '',
        pricelist: project.pricelist || project.priceListUrl || '',
        nearbyHotspots: Array.isArray(project.nearbyHotspots) && project.nearbyHotspots.length > 0 
          ? project.nearbyHotspots 
          : [{ name: '', distance: '', type: 'Transport' }, { name: '', distance: '', type: 'Transport' }]
      });
    } else {
      setEditingProject(null);
      setFormData({
        title: '',
        subtitle: '',
        image: '',
        status: 'completed',
        bedrooms: '',
        bathrooms: '',
        sqft: '',
        price: 'On Request',
        propertyType: 'Residential Apartments',
        yearBuilt: '',
        completionDate: '',
        launchDate: '',
        description: '',
        location: '',
        area: '',
        exactLocation: '',
        amenities: '',
        bhkConfig: '',
        totalUnits: '',
        numberOfFlats: '',
        floorPlan: '',
        locationMap: '',
        gallery: ['', '', '', '', ''],
        floorPlans2D: ['', '', ''],
        floorPlans3D: ['', '', ''],
        brochure: '',
        pricelist: '',
        nearbyHotspots: [{ name: '', distance: '', type: 'Transport' }, { name: '', distance: '', type: 'Transport' }]
      });
    }
    setFileUploads({ imageFile: null, brochureFile: null, pricelistFile: null });
    setUploadProgress({ image: false, brochure: false, pricelist: false });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingProject(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Process form data - convert comma-separated strings to arrays where needed
    const processedData = {
      ...formData,
      amenities: formData.amenities ? formData.amenities.split(',').map(a => a.trim()).filter(a => a) : [],
      bhkConfig: formData.bhkConfig ? formData.bhkConfig.split(',').map(b => b.trim()).filter(b => b) : [],
      gallery: formData.gallery.filter(url => url.trim()),
      floorPlans2D: formData.floorPlans2D.filter(url => url.trim()),
      floorPlans3D: formData.floorPlans3D.filter(url => url.trim()),
      nearbyHotspots: formData.nearbyHotspots.filter(h => h.name && h.distance),
      totalUnits: formData.totalUnits ? parseInt(formData.totalUnits) : null,
      numberOfFlats: formData.numberOfFlats ? parseInt(formData.numberOfFlats) : null,
      brochureUrl: formData.brochure,
      priceListUrl: formData.pricelist
    };
    
    if (editingProject) {
      setProjects(projects.map(p => p.id === editingProject.id ? { ...processedData, id: editingProject.id } : p));
    } else {
      setProjects([...projects, { ...processedData, id: projects.length + 1 }]);
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

  const handleFileChange = async (e, fileType) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileUploads({ ...fileUploads, [fileType]: file });
    setUploadProgress({ ...uploadProgress, [fileType.replace('File', '')]: true });

    const formDataToSend = new FormData();
    
    try {
      let endpoint = '';
      let fieldName = '';
      
      if (fileType === 'imageFile') {
        endpoint = 'http://localhost:5000/api/upload/image';
        fieldName = 'image';
      } else if (fileType === 'brochureFile') {
        endpoint = 'http://localhost:5000/api/upload/brochure';
        fieldName = 'brochure';
      } else if (fileType === 'pricelistFile') {
        endpoint = 'http://localhost:5000/api/upload/pricelist';
        fieldName = 'pricelist';
      }

      formDataToSend.append(fieldName, file);

      const response = await fetch(endpoint, {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      
      if (fileType === 'imageFile') {
        setFormData({ ...formData, image: `http://localhost:5000${data.path}` });
      } else if (fileType === 'brochureFile') {
        setFormData({ ...formData, brochure: `http://localhost:5000${data.path}` });
      } else if (fileType === 'pricelistFile') {
        setFormData({ ...formData, pricelist: `http://localhost:5000${data.path}` });
      }

      alert(`${fileType.replace('File', '')} uploaded successfully!`);
    } catch (error) {
      console.error('Upload error:', error);
      alert(`Failed to upload ${fileType.replace('File', '')}. Please try again.`);
    } finally {
      setUploadProgress({ ...uploadProgress, [fileType.replace('File', '')]: false });
    }
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
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Project Image</label>
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
                      <img src={formData.image} alt="Preview" className="h-20 w-auto rounded" />
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
                      <option value="completed">Completed</option>
                      <option value="ongoing">Ongoing</option>
                      <option value="upcoming">Upcoming</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Property Type</label>
                    <input
                      type="text"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Residential Apartments"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., Kanakapura Road, Bangalore"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Area</label>
                    <input
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., Vajarahalli"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Exact Location</label>
                  <input
                    type="text"
                    name="exactLocation"
                    value={formData.exactLocation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Full address with landmark"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">BHK Configuration</label>
                    <input
                      type="text"
                      name="bhkConfig"
                      value={formData.bhkConfig}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., 2 BHK, 3 BHK (comma separated)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Bedrooms</label>
                    <input
                      type="text"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., 2, 3 BHK"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Bathrooms</label>
                    <input
                      type="text"
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., 2, 3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Total Units</label>
                    <input
                      type="number"
                      name="totalUnits"
                      value={formData.totalUnits}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., 120"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Number of Flats</label>
                    <input
                      type="number"
                      name="numberOfFlats"
                      value={formData.numberOfFlats}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., 120"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Amenities</label>
                    <input
                      type="text"
                      name="amenities"
                      value={formData.amenities}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., Swimming Pool, Gym, Parking (comma separated)"
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
                      name="yearBuilt"
                      value={formData.yearBuilt}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="2023"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Completion Date</label>
                    <input
                      type="text"
                      name="completionDate"
                      value={formData.completionDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="2025 (for ongoing projects)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Launch Date</label>
                    <input
                      type="text"
                      name="launchDate"
                      value={formData.launchDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="2024 (for upcoming projects)"
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
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Project Brochure (PDF/DOC/DOCX)</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={(e) => handleFileChange(e, 'brochureFile')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {uploadProgress.brochure && (
                    <p className="text-sm text-primary mt-1">Uploading brochure...</p>
                  )}
                  {formData.brochure && (
                    <div className="mt-2">
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Current Brochure:</p>
                      <a 
                        href={formData.brochure} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-sm">description</span>
                        View/Download Brochure
                      </a>
                      <input
                        type="hidden"
                        name="brochure"
                        value={formData.brochure}
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Price List (PDF/DOC/DOCX)</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={(e) => handleFileChange(e, 'pricelistFile')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {uploadProgress.pricelist && (
                    <p className="text-sm text-primary mt-1">Uploading price list...</p>
                  )}
                  {formData.pricelist && (
                    <div className="mt-2">
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Current Price List:</p>
                      <a 
                        href={formData.pricelist} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-sm">attach_money</span>
                        View/Download Price List
                      </a>
                      <input
                        type="hidden"
                        name="pricelist"
                        value={formData.pricelist}
                      />
                    </div>
                  )}
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

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">2D Floor Plans (URLs)</label>
                  <div className="space-y-2">
                    {formData.floorPlans2D.map((url, index) => (
                      <input
                        key={index}
                        type="url"
                        value={url}
                        onChange={(e) => {
                          const newPlans = [...formData.floorPlans2D];
                          newPlans[index] = e.target.value;
                          setFormData({ ...formData, floorPlans2D: newPlans });
                        }}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder={`2D Floor Plan ${index + 1} URL`}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">3D Floor Plans (URLs)</label>
                  <div className="space-y-2">
                    {formData.floorPlans3D.map((url, index) => (
                      <input
                        key={index}
                        type="url"
                        value={url}
                        onChange={(e) => {
                          const newPlans = [...formData.floorPlans3D];
                          newPlans[index] = e.target.value;
                          setFormData({ ...formData, floorPlans3D: newPlans });
                        }}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder={`3D Floor Plan ${index + 1} URL`}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-charcoal dark:text-creamy-white">Nearby Hotspots</label>
                  <div className="space-y-3">
                    {formData.nearbyHotspots.map((hotspot, index) => (
                      <div key={index} className="grid grid-cols-3 gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <input
                          type="text"
                          value={hotspot.name}
                          onChange={(e) => {
                            const newHotspots = [...formData.nearbyHotspots];
                            newHotspots[index] = { ...newHotspots[index], name: e.target.value };
                            setFormData({ ...formData, nearbyHotspots: newHotspots });
                          }}
                          className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                          placeholder="Name"
                        />
                        <input
                          type="text"
                          value={hotspot.distance}
                          onChange={(e) => {
                            const newHotspots = [...formData.nearbyHotspots];
                            newHotspots[index] = { ...newHotspots[index], distance: e.target.value };
                            setFormData({ ...formData, nearbyHotspots: newHotspots });
                          }}
                          className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                          placeholder="Distance"
                        />
                        <select
                          value={hotspot.type}
                          onChange={(e) => {
                            const newHotspots = [...formData.nearbyHotspots];
                            newHotspots[index] = { ...newHotspots[index], type: e.target.value };
                            setFormData({ ...formData, nearbyHotspots: newHotspots });
                          }}
                          className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        >
                          <option value="Transport">Transport</option>
                          <option value="Shopping">Shopping</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Education">Education</option>
                          <option value="Business">Business</option>
                          <option value="Recreation">Recreation</option>
                        </select>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          nearbyHotspots: [...formData.nearbyHotspots, { name: '', distance: '', type: 'Transport' }]
                        });
                      }}
                      className="text-sm text-primary hover:underline"
                    >
                      + Add Another Hotspot
                    </button>
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

