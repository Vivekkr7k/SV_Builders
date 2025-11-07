import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { projects } from '../data/projectsData';

function ProjectDetails() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Find project by ID
  const project = projects.find(p => p.id === parseInt(id)) || projects[0];
  
  // Set exactLocation from location if not already set
  const exactLocation = project.exactLocation || project.location;
  
  // Use gallery images if available, otherwise use placeholder
  const galleryImages = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : project.floorPlans2D && project.floorPlans2D.length > 0
    ? project.floorPlans2D
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDownloadBrochure = (e) => {
    e.preventDefault();
    if (project.brochureUrl && project.brochureUrl !== '#') {
      window.open(project.brochureUrl, '_blank');
    } else {
    alert('Brochure download will be available soon. Please contact us for more details.');
    }
  };

  const handleDownloadPriceList = (e) => {
    e.preventDefault();
    if (project.priceListUrl && project.priceListUrl !== '#') {
      window.open(project.priceListUrl, '_blank');
    } else {
      alert('Price list will be available soon. Please contact us for more details.');
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-[#181611] dark:text-gray-200">
      <Navbar />
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex-1">
          {/* Hero Section with Status Badge */}
          <section className="relative h-[60vh] md:h-[80vh] w-full">
            <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 40%), url("${project.image}")`
            }}></div>
            <div className="relative h-full flex flex-col justify-end items-start p-4 md:p-10 lg:p-20 text-white">
              <div className="flex items-center gap-4 mb-2">
                <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                  project.status === 'completed' ? 'bg-green-600' :
                  project.status === 'ongoing' ? 'bg-blue-600' :
                  'bg-orange-600'
                }`}>
                  {project.status === 'completed' ? 'Completed' :
                   project.status === 'ongoing' ? 'Ongoing' :
                   'Upcoming'}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">{project.title}</h1>
              <p className="text-lg md:text-xl font-display mt-2 flex items-center gap-2">
                <span className="material-symbols-outlined">location_on</span>
                {project.location}
              </p>
            </div>
          </section>

          <div className="px-4 md:px-10 lg:px-20 mx-auto max-w-7xl py-10 md:py-16">
            {/* Gallery Section */}
            {galleryImages.length > 0 && (
            <div className="mb-16" id="gallery">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {galleryImages.slice(0, 5).map((img, index) => (
                    <div 
                      key={index}
                      className={index === 0 ? "col-span-2 row-span-2 rounded-xl overflow-hidden" : "rounded-xl overflow-hidden"}
                    >
                      <img 
                        alt={`${project.title} - ${index === 0 ? 'Exterior view' : 'Gallery image'} ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        src={img}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x300?text=Image+Loading';
                        }}
                  />
                </div>
                  ))}
                </div>
              </div>
            )}

            {/* Property Details Section */}
            <div className="mb-16" id="features">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800 dark:text-gray-200">Property Details</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">{project.description}</p>
                  
                  {/* Amenities Section */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Amenities</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {project.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">check_circle</span>
                          <span className="text-gray-600 dark:text-gray-400">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-primary mt-1">king_bed</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">BHK Configuration</p>
                      <p className="text-gray-600 dark:text-gray-400">{project.bhkConfig ? project.bhkConfig.join(", ") : project.bedrooms}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-primary mt-1">bathtub</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Bathrooms</p>
                      <p className="text-gray-600 dark:text-gray-400">{project.bathrooms}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-primary mt-1">sell</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Price</p>
                      <p className="text-gray-600 dark:text-gray-400">{project.price}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-primary mt-1">apartment</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Total Units</p>
                      <p className="text-gray-600 dark:text-gray-400">{project.totalUnits || 'N/A'}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-primary mt-1">home</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Number of Flats</p>
                      <p className="text-gray-600 dark:text-gray-400">{project.numberOfFlats || 'N/A'}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-primary mt-1">apartment</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Property Type</p>
                      <p className="text-gray-600 dark:text-gray-400">{project.propertyType}</p>
                    </div>
                  </div>
                  {project.yearBuilt && (
                  <div className="flex items-start space-x-4">
                      <span className="material-symbols-outlined text-primary mt-1">calendar_today</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Year Built</p>
                        <p className="text-gray-600 dark:text-gray-400">{project.yearBuilt}</p>
                      </div>
                    </div>
                  )}
                  {(project.completionDate || project.launchDate) && (
                    <div className="flex items-start space-x-4">
                      <span className="material-symbols-outlined text-primary mt-1">event</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">
                          {project.completionDate ? 'Completion' : 'Launch'} Date
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {project.completionDate || project.launchDate}
                        </p>
                    </div>
                  </div>
                  )}
                </div>
              </div>
            </div>

            {/* Nearby Hotspots Section */}
            {project.nearbyHotspots && project.nearbyHotspots.length > 0 && (
              <div className="mb-16" id="nearby-hotspots">
                <h2 className="text-3xl font-serif font-bold mb-8 text-gray-800 dark:text-gray-200">Nearby Hotspots</h2>
                <div className="bg-creamy-white dark:bg-gray-800 p-6 rounded-xl">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.nearbyHotspots.map((hotspot, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg">
                        <span className="material-symbols-outlined text-primary mt-1">
                          {hotspot.type === 'Transport' ? 'train' : 
                           hotspot.type === 'Shopping' ? 'shopping_bag' :
                           hotspot.type === 'Healthcare' ? 'local_hospital' :
                           hotspot.type === 'Education' ? 'school' :
                           hotspot.type === 'Business' ? 'business' :
                           'place'}
                        </span>
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-200">{hotspot.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{hotspot.distance}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{hotspot.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Download Brochure & Price List Section */}
            <div className="mb-16" id="download-section">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-8 md:p-12 rounded-2xl border-2 border-primary/20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-serif font-bold mb-3 text-gray-800 dark:text-gray-200">Get Complete Project Information</h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Download our comprehensive project brochure and price list with detailed specifications, floor plans, amenities, and pricing information for {project.title}.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                  {project.brochureUrl && project.brochureUrl !== '#' && (
                    <button
                      onClick={handleDownloadBrochure}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[220px]"
                    >
                      <span className="material-symbols-outlined">download</span>
                      <span>Download Brochure</span>
                    </button>
                  )}
                  {project.priceListUrl && project.priceListUrl !== '#' && (
                    <button
                      onClick={handleDownloadPriceList}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary/80 text-white font-bold rounded-lg hover:bg-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[220px]"
                    >
                      <span className="material-symbols-outlined">download</span>
                      <span>Download Price List</span>
                    </button>
                  )}
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Need more information? <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-primary font-semibold hover:underline">Contact us</button> for personalized assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* Floor Plans Section */}
            {(project.floorPlans2D?.length > 0 || project.floorPlans3D?.length > 0) && (
              <div className="mb-16" id="floor-plans">
                <h2 className="text-3xl font-serif font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Floor Plans</h2>
                
                {project.floorPlans2D?.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">2D Floor Plans</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.floorPlans2D.map((plan, index) => (
                        <div key={index} className="rounded-xl overflow-hidden shadow-lg bg-creamy-white dark:bg-gray-800 p-4">
                          <img 
                            alt={`${project.title} - 2D Floor Plan ${index + 1}`} 
                            className="w-full h-auto rounded-lg" 
                            src={plan}
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/400x300?text=Floor+Plan';
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.floorPlans3D?.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">3D Floor Plans</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.floorPlans3D.map((plan, index) => (
                        <div key={index} className="rounded-xl overflow-hidden shadow-lg bg-creamy-white dark:bg-gray-800 p-4">
                          <img 
                            alt={`${project.title} - 3D Floor Plan ${index + 1}`} 
                            className="w-full h-auto rounded-lg" 
                            src={plan}
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/400x300?text=3D+Floor+Plan';
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm text-center">
                  * Floor plans are indicative. Actual dimensions may vary. Please refer to the brochure for detailed specifications.
                </p>
              </div>
            )}

            {/* Location Section */}
            <div className="mb-16" id="location">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Location</h2>
              
              {/* Exact Location */}
              {exactLocation && (
                <div className="bg-creamy-white dark:bg-gray-800 p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    Exact Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{exactLocation}</p>
                </div>
              )}
              
              <div className="rounded-xl overflow-hidden aspect-w-16 aspect-h-9 mb-4">
                <img 
                  alt={`Map showing ${project.title} location in ${project.location}, Bangalore`} 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAXCMy7U-YH7VldvRti8IeBjVvjwJI5PQxz27z6ECTkVvce5dNviDzzzeemJNRxmK5ADiV-RE50E2o64KikNwWC7SK5kJZF6YJXNmc9vTdp3rMCLgECyupK2H8wfoBogQxFaTsZDQ-1tHyONjm6E9FkkrUBfSukAeaR97g67f5Zt8zkt_aAB2zQIMe3UgYpH9ksV9Nv9MUSIVxnitEppSRU9jbyLb_NXkf0pugR-aOio5TQYsLfUACb7yCaSR4CLj2godUeIHEpgA" 
                />
              </div>
            </div>

            {/* Inquiry Form Section */}
            <div className="bg-creamy-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-lg" id="contact">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800 dark:text-gray-200">Inquire About {project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our team is ready to provide you with more information or schedule a private viewing. Please fill out the form, and we will be in touch shortly.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary">phone</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">Phone</p>
                        <p className="text-gray-600 dark:text-gray-400">+91-XXXXXXXXXX</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary">email</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">Email</p>
                        <p className="text-gray-600 dark:text-gray-400">contact@svbuilders.com</p>
                      </div>
                    </div>
                  </div>
                  {/* Download Brochure Button */}
                  <button
                    onClick={handleDownloadBrochure}
                    className="mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg"
                  >
                    <span className="material-symbols-outlined">download</span>
                    <span>Download Brochure</span>
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      autoComplete="name"
                      className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      autoComplete="email"
                      className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      autoComplete="tel"
                      className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary"
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="w-full flex justify-center py-3 sm:py-3.5 md:py-4 px-5 sm:px-6 md:px-8 border border-transparent rounded-lg sm:rounded-xl shadow-lg text-sm sm:text-base font-bold text-white bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                      type="submit"
                    >Request a Viewing</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default ProjectDetails;
