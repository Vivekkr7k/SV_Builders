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
  const [current3DIndex, setCurrent3DIndex] = useState(0);
  const [current2DIndex, setCurrent2DIndex] = useState(0);

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

  // Extract unit number from filename
  const extractUnitNumber = (filename) => {
    const match = filename.match(/unit\s*(\d+)/i);
    return match ? match[1] : null;
  };

  // Filter 3D plans to only show UNIT files and extract unit info
  const unit3DPlans = project.floorPlans3D?.filter(plan => {
    const filename = plan.toLowerCase();
    return filename.includes('unit');
  }).map(plan => {
    const unitNum = extractUnitNumber(plan);
    return {
      image: plan,
      unitNumber: unitNum || 'N/A',
      sqft: project.sqft || 'On Request'
    };
  }) || [];

  // Filter other 3D plans (elevation, floor plan, etc.)
  const other3DPlans = project.floorPlans3D?.filter(plan => {
    const filename = plan.toLowerCase();
    return !filename.includes('unit');
  }) || [];

  // Filter 2D plans to only show Unit files
  const unit2DPlans = project.floorPlans2D?.filter(plan => {
    const filename = plan.toLowerCase();
    return filename.includes('unit');
  }) || [];

  // Filter other 2D plans
  const other2DPlans = project.floorPlans2D?.filter(plan => {
    const filename = plan.toLowerCase();
    return !filename.includes('unit');
  }) || [];

  const next3D = () => {
    setCurrent3DIndex((prev) => (prev + 1) % unit3DPlans.length);
  };

  const prev3D = () => {
    setCurrent3DIndex((prev) => (prev - 1 + unit3DPlans.length) % unit3DPlans.length);
  };

  const next2D = () => {
    setCurrent2DIndex((prev) => (prev + 1) % unit2DPlans.length);
  };

  const prev2D = () => {
    setCurrent2DIndex((prev) => (prev - 1 + unit2DPlans.length) % unit2DPlans.length);
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
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <span className="text-primary text-sm font-bold uppercase tracking-wider">Location Benefits</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 text-gray-800 dark:text-gray-200">
                    Nearby Hotspots & Landmarks
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Discover the convenience of living in a well-connected location with easy access to essential amenities, transport hubs, and lifestyle destinations
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {project.nearbyHotspots.map((hotspot, index) => {
                    const getIcon = () => {
                      switch(hotspot.type) {
                        case 'Transport': return 'train';
                        case 'Shopping': return 'shopping_bag';
                        case 'Healthcare': return 'local_hospital';
                        case 'Education': return 'school';
                        case 'Business': return 'business';
                        case 'Recreation': return 'sports_soccer';
                        default: return 'place';
                      }
                    };

                    const getTypeColor = () => {
                      switch(hotspot.type) {
                        case 'Transport': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800';
                        case 'Shopping': return 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800';
                        case 'Healthcare': return 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800';
                        case 'Education': return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800';
                        case 'Business': return 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800';
                        case 'Recreation': return 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800';
                        default: return 'bg-primary/10 text-primary border-primary/20';
                      }
                    };

                    return (
                      <div 
                        key={index} 
                        className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden"
                      >
                        {/* Decorative gradient overlay */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Icon with colored background */}
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 border-2 ${getTypeColor()} transition-transform duration-300 group-hover:scale-110`}>
                          <span className="material-symbols-outlined text-2xl">
                            {getIcon()}
                          </span>
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-lg font-bold font-display text-gray-800 dark:text-gray-200 mb-2 group-hover:text-primary transition-colors duration-300">
                            {hotspot.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="material-symbols-outlined text-sm text-gray-500 dark:text-gray-400">straighten</span>
                            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                              {hotspot.distance}
                            </p>
                          </div>
                          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${getTypeColor()} text-xs font-medium`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                            {hotspot.type}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Download Brochure Section */}
            <div className="mb-16" id="download-section">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-8 md:p-12 rounded-2xl border-2 border-primary/20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-serif font-bold mb-3 text-gray-800 dark:text-gray-200">Get Complete Project Information</h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Download our comprehensive project brochure with detailed specifications, floor plans, amenities, and information for {project.title}.
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
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <span className="text-primary text-sm font-bold uppercase tracking-wider">Floor Plans</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 text-gray-800 dark:text-gray-200">
                    Unit Floor Plans
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Explore detailed floor plans for each unit with specifications and dimensions
                  </p>
                </div>

                {/* 3D Floor Plans Carousel */}
                {unit3DPlans.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">3D Floor Plans</h3>
                    <div className="relative max-w-5xl mx-auto">
                      {/* Carousel Container */}
                      <div className="relative overflow-hidden rounded-2xl bg-creamy-white dark:bg-gray-800 shadow-xl">
                        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
                          {/* Previous Button */}
                          {unit3DPlans.length > 1 && (
                            <button
                              onClick={prev3D}
                              className="absolute left-4 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                              aria-label="Previous floor plan"
                            >
                              <span className="material-symbols-outlined text-2xl text-gray-800 dark:text-gray-200">chevron_left</span>
                            </button>
                          )}

                          {/* Image Container */}
                          <div className="relative w-full h-full flex items-center justify-center p-8 md:p-12">
                            <img 
                              alt={`${project.title} - Unit ${unit3DPlans[current3DIndex].unitNumber} - 3D Floor Plan`} 
                              className="max-w-full max-h-full object-contain rounded-lg shadow-lg" 
                              src={unit3DPlans[current3DIndex].image}
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/800x600?text=3D+Floor+Plan';
                              }}
                            />
                          </div>

                          {/* Next Button */}
                          {unit3DPlans.length > 1 && (
                            <button
                              onClick={next3D}
                              className="absolute right-4 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                              aria-label="Next floor plan"
                            >
                              <span className="material-symbols-outlined text-2xl text-gray-800 dark:text-gray-200">chevron_right</span>
                            </button>
                          )}
                        </div>

                        {/* Unit Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 md:p-8 rounded-b-2xl">
                          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
                            <div className="text-center md:text-left">
                              <div className="text-sm md:text-base font-semibold text-white/80 mb-1">Unit Number</div>
                              <div className="text-2xl md:text-3xl font-bold">Unit {unit3DPlans[current3DIndex].unitNumber}</div>
                            </div>
                            <div className="text-center md:text-right">
                              <div className="text-sm md:text-base font-semibold text-white/80 mb-1">Carpet Area</div>
                              <div className="text-2xl md:text-3xl font-bold">{unit3DPlans[current3DIndex].sqft} sq.ft</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Carousel Indicators */}
                      {unit3DPlans.length > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-6">
                          {unit3DPlans.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrent3DIndex(index)}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                index === current3DIndex 
                                  ? 'w-8 bg-primary' 
                                  : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                              }`}
                              aria-label={`Go to floor plan ${index + 1}`}
                            />
                          ))}
                        </div>
                      )}

                      {/* Unit Counter */}
                      {unit3DPlans.length > 1 && (
                        <div className="text-center mt-4 text-gray-600 dark:text-gray-400 text-sm">
                          {current3DIndex + 1} of {unit3DPlans.length}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 2D Floor Plans Carousel */}
                {unit2DPlans.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">2D Floor Plans</h3>
                    <div className="relative max-w-5xl mx-auto">
                      {/* Carousel Container */}
                      <div className="relative overflow-hidden rounded-2xl bg-creamy-white dark:bg-gray-800 shadow-xl">
                        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
                          {/* Previous Button */}
                          {unit2DPlans.length > 1 && (
                            <button
                              onClick={prev2D}
                              className="absolute left-4 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                              aria-label="Previous floor plan"
                            >
                              <span className="material-symbols-outlined text-2xl text-gray-800 dark:text-gray-200">chevron_left</span>
                            </button>
                          )}

                          {/* Image Container */}
                          <div className="relative w-full h-full flex items-center justify-center p-8 md:p-12">
                            <img 
                              alt={`${project.title} - Unit ${extractUnitNumber(unit2DPlans[current2DIndex]) || current2DIndex + 1} - 2D Floor Plan`} 
                              className="max-w-full max-h-full object-contain rounded-lg shadow-lg" 
                              src={unit2DPlans[current2DIndex]}
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/800x600?text=Floor+Plan';
                              }}
                            />
                          </div>

                          {/* Next Button */}
                          {unit2DPlans.length > 1 && (
                            <button
                              onClick={next2D}
                              className="absolute right-4 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                              aria-label="Next floor plan"
                            >
                              <span className="material-symbols-outlined text-2xl text-gray-800 dark:text-gray-200">chevron_right</span>
                            </button>
                          )}
                        </div>

                        {/* Unit Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 md:p-8 rounded-b-2xl">
                          <div className="text-center text-white">
                            <div className="text-sm md:text-base font-semibold text-white/80 mb-1">Unit Number</div>
                            <div className="text-2xl md:text-3xl font-bold">Unit {extractUnitNumber(unit2DPlans[current2DIndex]) || current2DIndex + 1}</div>
                          </div>
                        </div>
                      </div>

                      {/* Carousel Indicators */}
                      {unit2DPlans.length > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-6">
                          {unit2DPlans.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrent2DIndex(index)}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                index === current2DIndex 
                                  ? 'w-8 bg-primary' 
                                  : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                              }`}
                              aria-label={`Go to floor plan ${index + 1}`}
                            />
                          ))}
                        </div>
                      )}

                      {/* Unit Counter */}
                      {unit2DPlans.length > 1 && (
                        <div className="text-center mt-4 text-gray-600 dark:text-gray-400 text-sm">
                          {current2DIndex + 1} of {unit2DPlans.length}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Other Floor Plans (Elevation, Parking, etc.) */}
                {(other3DPlans.length > 0 || other2DPlans.length > 0) && (
                  <div className="mt-12">
                    <h3 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Additional Plans</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {other3DPlans.map((plan, index) => (
                        <div key={`3d-${index}`} className="rounded-xl overflow-hidden shadow-lg bg-creamy-white dark:bg-gray-800 p-4">
                          <img 
                            alt={`${project.title} - Additional 3D Plan ${index + 1}`} 
                            className="w-full h-auto rounded-lg" 
                            src={plan}
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/400x300?text=3D+Plan';
                            }}
                          />
                        </div>
                      ))}
                      {other2DPlans.map((plan, index) => (
                        <div key={`2d-${index}`} className="rounded-xl overflow-hidden shadow-lg bg-creamy-white dark:bg-gray-800 p-4">
                          <img 
                            alt={`${project.title} - Additional 2D Plan ${index + 1}`} 
                            className="w-full h-auto rounded-lg" 
                            src={plan}
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/400x300?text=2D+Plan';
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <p className="mt-8 text-gray-600 dark:text-gray-400 text-sm text-center">
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
              
              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden shadow-xl mb-4">
                <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full border-0"
                    title={`Map showing ${project.title} location`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(exactLocation || project.location || 'Bangalore, Karnataka, India')}&output=embed`}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              
              {/* Map Link */}
              <div className="text-center">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(exactLocation || project.location || 'Bangalore, Karnataka, India')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors duration-300"
                >
                  <span className="material-symbols-outlined">open_in_new</span>
                  <span>Open in Google Maps</span>
                </a>
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
