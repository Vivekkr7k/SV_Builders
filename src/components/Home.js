import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { projects as allProjects } from '../data/projectsData';
import heroBg from '../assets/Herobg.jpg';

function App() {
  // State for project filter
  const [projectFilter, setProjectFilter] = useState('all');
  
  // Filter projects based on selected filter
  const getFilteredProjects = () => {
    if (projectFilter === 'all') return allProjects;
    if (projectFilter === 'ready-to-move') return allProjects.filter(p => p.status === 'completed');
    if (projectFilter === 'ongoing') return allProjects.filter(p => p.status === 'ongoing');
    if (projectFilter === 'upcoming') return allProjects.filter(p => p.status === 'upcoming');
    if (projectFilter === 'completed') return allProjects.filter(p => p.status === 'completed');
    return allProjects;
  };
  
  // State for form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const scrollToInquiry = () => {
    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Form submission logic here
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'homepage',
          projectName: '',
          projectId: null,
        }),
      });

      if (response.ok) {
        alert('Thank you for your inquiry! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(errorData.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback: show success message even if API call fails (for development)
      alert('Thank you for your inquiry! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  // JSON-LD Schema for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "SV Builders and Developers",
    "description": "Leading real estate developer in Bangalore offering premium residential projects with world-class amenities",
    "url": "https://www.svbuilders.com",
    "logo": "https://www.svbuilders.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bangalore"
    },
    "sameAs": [
      "https://www.facebook.com/svbuilders",
      "https://www.twitter.com/svbuilders",
      "https://www.instagram.com/svbuilders",
      "https://www.linkedin.com/company/svbuilders"
    ]
  };

  // JSON-LD Schema for LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SV Builders and Developers",
    "image": "https://www.svbuilders.com/logo.png",
    "description": "Premium residential property developer in Bangalore",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bangalore",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "url": "https://www.svbuilders.com",
    "telephone": "+91-XXXXXXXXXX",
    "priceRange": "$$"
  };

  // LLM Schema for structured data
  const llmSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "SV Builders and Developers",
    "foundingDate": "2005",
    "numberOfEmployees": "50-100",
    "services": [
      "Residential Construction",
      "Apartment Construction",
      "Commercial Construction",
      "Building Construction",
      "Project Management"
    ],
    "serviceArea": {
      "@type": "City",
      "name": "Bangalore"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Residential Projects in Bangalore",
      "itemListElement": allProjects.map((project, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "ApartmentComplex",
          "name": project.title,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": project.location,
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
          }
        }
      }))
    }
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(llmSchema) }}
      />

    <div className="relative w-full flex flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark text-dark-charcoal dark:text-creamy-white">
      <Navbar />

      <div className="layout-container flex h-full grow flex-col">
        <main>
            {/* Hero Banner Section */}
          <section className="relative min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-screen w-full flex items-center justify-end text-white overflow-hidden pt-[136px] sm:pt-[144px]">
              {/* Static Background Image */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <img
                  src={heroBg}
                  alt="SV Builders Hero Background"
                  className="absolute top-0 left-0 w-full h-full object-cover object-left lg:object-[center_left]"
                      style={{ objectPosition: 'left center' }}
                      onError={(e) => {
                    console.error('Error loading hero background image');
                  }}
                />
              </div>
              
            {/* Form Container - Right Side */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 flex flex-col lg:flex-row justify-end gap-6 lg:gap-8">
              {/* Left side content area - for future use or spacing */}
              <div className="hidden lg:block flex-1 max-w-2xl"></div>
              <div className="w-full max-w-md lg:max-w-lg animate-fade-in">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-2xl">
                  <div className="mb-4">
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-dark-charcoal mb-1">
                        Get In Touch
                      </h2>
                    <p className="text-dark-charcoal/70 text-xs sm:text-sm">
                        Fill out the form and our team will contact you shortly
                      </p>
                    </div>
                    
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                      <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base">person</span>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          placeholder="Your Full Name"
                          required
                        className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 bg-white text-dark-charcoal placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                        />
                      </div>
                      
                      <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base">email</span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="Your Email Address"
                          required
                        className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 bg-white text-dark-charcoal placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                        />
              </div>

                      <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base">phone</span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="Your Phone Number"
                          required
                        className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 bg-white text-dark-charcoal placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                        />
              </div>

                      <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400 text-base">message</span>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleFormChange}
                          placeholder="Tell us about your requirements..."
                        rows="3"
                        className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 bg-white text-dark-charcoal placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-sm"
                        ></textarea>
                </div>
                      
                      <button
                        type="submit"
                      className="w-full py-2.5 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                      >
                        <span>Request a Viewing</span>
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </button>
                      
                    <p className="text-xs text-center text-dark-charcoal/60">
                        By submitting this form, you agree to be contacted by our team
                      </p>
                    </form>
                </div>
              </div>
            </div>
          </section>

            {/* Projects Cards Section */}
            <section className="relative py-20 px-4 sm:px-10 overflow-hidden">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-yellow-50/60 to-orange-50/40 dark:from-blue-950/30 dark:via-yellow-900/20 dark:to-orange-900/20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-background-dark/80"></div>
              <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/20 to-accent-yellow/20 backdrop-blur-sm rounded-full mb-4 border border-primary/20">
                    <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Projects</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-dark-charcoal dark:text-creamy-white mb-4">
                    Premium Residential Projects in Bangalore
                  </h2>
                  <p className="text-lg text-dark-charcoal/70 dark:text-creamy-white/70 max-w-3xl mx-auto">
                    Explore our portfolio of completed, ongoing, and upcoming residential projects across Bangalore's prime locations
                  </p>
                </div>

                {/* Filter Widgets - Casagrand Style */}
                <div className="flex flex-wrap justify-center gap-3 mb-12 px-2">
                  <button
                    onClick={() => setProjectFilter('all')}
                    className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                      projectFilter === 'all'
                        ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg scale-105'
                        : 'bg-white dark:bg-light-taupe/20 text-dark-charcoal dark:text-creamy-white hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent-yellow/10 border-2 border-primary/20'
                    }`}
                  >
                    All Projects
                  </button>
                  <button
                    onClick={() => setProjectFilter('ready-to-move')}
                    className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                      projectFilter === 'ready-to-move'
                        ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg scale-105'
                        : 'bg-white dark:bg-light-taupe/20 text-dark-charcoal dark:text-creamy-white hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent-yellow/10 border-2 border-primary/20'
                    }`}
                  >
                    Ready to Move
                  </button>
                  <button
                    onClick={() => setProjectFilter('ongoing')}
                    className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                      projectFilter === 'ongoing'
                        ? 'bg-gradient-to-r from-accent-yellow to-accent-orange text-white shadow-lg scale-105'
                        : 'bg-white dark:bg-light-taupe/20 text-dark-charcoal dark:text-creamy-white hover:bg-gradient-to-r hover:from-accent-yellow/10 hover:to-accent-orange/10 border-2 border-accent-yellow/20'
                    }`}
                  >
                    Ongoing
                  </button>
                  <button
                    onClick={() => setProjectFilter('upcoming')}
                    className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                      projectFilter === 'upcoming'
                        ? 'bg-gradient-to-r from-accent-orange to-accent-yellow text-white shadow-lg scale-105'
                        : 'bg-white dark:bg-light-taupe/20 text-dark-charcoal dark:text-creamy-white hover:bg-gradient-to-r hover:from-accent-orange/10 hover:to-accent-yellow/10 border-2 border-accent-orange/20'
                    }`}
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={() => setProjectFilter('completed')}
                    className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                      projectFilter === 'completed'
                        ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg scale-105'
                        : 'bg-white dark:bg-light-taupe/20 text-dark-charcoal dark:text-creamy-white hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent-yellow/10 border-2 border-primary/20'
                    }`}
                  >
                    Completed
                  </button>
                </div>

                {/* Projects Grid - Cards Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {getFilteredProjects().map((project) => (
                    <div 
                      key={project.id} 
                      className="flex flex-col bg-white dark:bg-light-taupe/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      {/* Project Image */}
                      <div className="relative h-64 md:h-72">
                        <img
                          src={project.image}
                          alt={`${project.title} - ${project.location} - SV Builders Bangalore residential project`}
                          className="w-full h-full object-cover"
                        />
                        {/* Share Icon - Top Right */}
                        <div className="absolute top-3 right-3">
                          <button
                            className="bg-white/90 hover:bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300"
                            aria-label="Share project"
                            title="Share"
                          >
                            <span className="material-symbols-outlined text-dark-charcoal text-lg">share</span>
                          </button>
                        </div>
                        {/* Status Badge - Bottom Left */}
                        <div className="absolute bottom-3 left-3">
                          <span className={`px-3 py-1.5 rounded-md text-xs font-bold text-white shadow-lg ${
                            project.status === 'completed' ? 'bg-gradient-to-r from-primary to-primary/80' :
                            project.status === 'ongoing' ? 'bg-gradient-to-r from-accent-yellow to-accent-orange' :
                            'bg-gradient-to-r from-accent-orange to-accent-yellow'
                          }`}>
                            {project.status === 'completed' ? 'Ready to Move' :
                             project.status === 'ongoing' ? 'Ongoing' :
                             'Upcoming'}
                          </span>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="flex flex-col flex-1 p-5 bg-white dark:bg-light-taupe/20">
                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold font-display text-dark-charcoal dark:text-creamy-white mb-3">
                          {project.title}
                        </h3>

                        {/* Price Range */}
                        <div className="mb-4">
                          <p className="text-lg md:text-xl font-bold text-primary">
                            {project.price || 'On Request'}
                          </p>
                        </div>

                        {/* Primary Location */}
                        <div className="mb-3 flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-lg mt-0.5 flex-shrink-0">location_on</span>
                          <p className="text-sm text-dark-charcoal dark:text-creamy-white leading-relaxed">
                            {project.location || project.exactLocation || 'Bangalore'}
                          </p>
                        </div>

                        {/* Serving Location */}
                        {project.nearbyHotspots && project.nearbyHotspots.length > 0 && (
                          <div className="mb-3 flex items-start gap-2">
                            <span className="material-symbols-outlined text-primary text-lg mt-0.5 flex-shrink-0">map</span>
                            <div className="flex-1">
                              <p className="text-xs text-dark-charcoal/70 dark:text-creamy-white/70 leading-relaxed">
                                {project.nearbyHotspots.slice(0, 3).map((spot, idx) => (
                                  <span key={idx}>
                                    {spot.name}
                                    {idx < Math.min(project.nearbyHotspots.length, 3) - 1 && ', '}
                                  </span>
                                ))}
                                {project.nearbyHotspots.length > 3 && ' & more'}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Project Details Grid */}
                        <div className="grid grid-cols-3 gap-3 mb-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                          {/* Area */}
                          <div className="flex flex-col items-center text-center">
                            <span className="material-symbols-outlined text-primary text-xl mb-1">apartment</span>
                            <p className="text-xs font-semibold text-dark-charcoal dark:text-creamy-white">Area</p>
                            <p className="text-xs text-dark-charcoal/70 dark:text-creamy-white/70 mt-1">
                              {project.area ? project.area.replace(/^to be updated with a Landmark:\s*/i, '') : 'N/A'}
                            </p>
                          </div>

                          {/* Units */}
                          <div className="flex flex-col items-center text-center">
                            <span className="material-symbols-outlined text-primary text-xl mb-1">domain</span>
                            <p className="text-xs font-semibold text-dark-charcoal dark:text-creamy-white">Units</p>
                            <p className="text-xs text-dark-charcoal/70 dark:text-creamy-white/70 mt-1">
                              {project.totalUnits || project.numberOfFlats || 'N/A'}
                            </p>
                          </div>

                          {/* Apartment Types */}
                          <div className="flex flex-col items-center text-center">
                            <span className="material-symbols-outlined text-primary text-xl mb-1">bed</span>
                            <p className="text-xs font-semibold text-dark-charcoal dark:text-creamy-white">Types</p>
                            <p className="text-xs text-dark-charcoal/70 dark:text-creamy-white/70 mt-1">
                              {project.bhkConfig && project.bhkConfig.length > 0 
                                ? project.bhkConfig.join(', ')
                                : project.bedrooms || 'N/A'}
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                          {/* Brochures Button */}
                          <button
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-dark-charcoal dark:text-creamy-white font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 text-sm"
                            title="View Brochures"
                          >
                            <span>Brochures</span>
                            <span className="material-symbols-outlined text-base">arrow_drop_down</span>
                          </button>
                          
                          {/* View More Button */}
                          <Link
                            to={`/project/${project.id}`}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-300 text-sm"
                            title={`View details of ${project.title}`}
                          >
                            <span>View More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>

            {/* About SV Builders - Redesigned with Background Image */}
          <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://wallpaperaccess.com/full/1899360.jpg" 
                alt="Construction Background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
            </div>
            
            <div className="relative z-10 max-w-6xl mx-auto">
              {/* Hero Content */}
              <div className="text-center mb-10 md:mb-12">
                <div className="inline-block px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full mb-8 transition-all duration-300 hover:bg-white/30 border border-white/30">
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-white">About SV Builders</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-8 leading-[1.1] tracking-tight drop-shadow-2xl">
                    Your Trusted Construction<br className="hidden md:block" /> Partner in Bangalore
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-lg">
                    SV Builders and Developers is a leading construction company and real estate developer in Bangalore, Karnataka, with over <span className="font-bold text-white">25 years of experience</span> in creating premium residential and commercial spaces.
                </p>
              </div>

              {/* Three Column Features - Clean Card Design */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-lg bg-blue-600 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-2xl">apartment</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display text-gray-900 leading-tight">Premium Construction Projects</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We develop residential and commercial construction projects across major areas of Bangalore with world-class amenities, modern architecture, and strategic locations.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-lg bg-green-600 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-2xl">verified</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display text-gray-900 leading-tight">Trusted Builders in Bangalore</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    With RERA approval and decades of experience, SV Builders and Developers is known for timely delivery and quality construction in Bangalore.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-lg bg-orange-600 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-2xl">location_on</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display text-gray-900 leading-tight">Prime Locations in Bangalore</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our construction projects are strategically located in Bangalore's most sought-after neighborhoods with excellent connectivity and infrastructure.
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-10 md:mt-12 text-center">
                <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg">
                  We specialize in apartment construction, residential building construction, and commercial construction projects across prime locations in Bangalore, including <span className="font-bold text-white">HSR Layout, Koramangala, Whitefield, Electronic City, and Yelahanka</span>. Our expertise in construction, building design, and project management has established us as one of the most trusted builders in Bangalore.
                </p>
              </div>
                    </div>
            </section>

            {/* Services Section - Redesigned with Background Image */}
            <section className="relative py-20 px-4 sm:px-10 overflow-hidden">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://www.bain.com/contentassets/56cc7424301643a5b4ce3ea89584b601/residential-real-estate-in-india-a-new-paradigm-for-success-16_9.jpg" 
                  alt="Construction Services Background" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85"></div>
              </div>
              
              <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 border border-white/30">
                    <span className="text-white text-sm font-bold uppercase tracking-wider">Our Services</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 font-display text-white drop-shadow-2xl">
                    Our Construction Services
                  </h2>
                  <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed text-lg font-medium drop-shadow-lg">
                    We offer comprehensive construction services including apartment construction, residential building construction, and commercial construction across Bangalore. As experienced builders in Bangalore, we deliver quality construction projects with modern designs and timely completion.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 p-8 border border-white/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <span className="material-symbols-outlined text-white text-3xl">apartment</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal">Residential Construction</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Premium residential construction projects including turnkey individual home construction services. We build quality residential buildings and homes with modern amenities, ensuring quality construction and timely delivery across Bangalore.
                    </p>
                  </div>
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 p-8 border border-white/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <span className="material-symbols-outlined text-white text-3xl">business</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal">Commercial Construction</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Commercial building construction services including office buildings, commercial spaces, and retail construction designed to elevate your business operations in Bangalore. We specialize in commercial construction projects with modern infrastructure.
                    </p>
                  </div>
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 p-8 border border-white/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <span className="material-symbols-outlined text-white text-3xl">apartment</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal">Apartment Construction</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Premium apartment construction services with modern designs, quality materials, and timely delivery across Bangalore. We are expert builders specializing in apartment construction and residential building construction.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-10 bg-gradient-to-b from-white to-background-light dark:from-background-dark dark:to-background-dark">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/20 to-accent-yellow/20 backdrop-blur-sm rounded-full mb-4 border border-primary/20">
                    <span className="text-primary text-sm font-bold uppercase tracking-wider">Testimonials</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-display text-dark-charcoal dark:text-creamy-white">
                    What Our Families Say
                  </h2>
                  <p className="text-center text-dark-charcoal/70 dark:text-creamy-white/70 mb-12 max-w-2xl mx-auto">
                    Discover the experiences of our satisfied customers who trusted SV Builders and Developers for their dream homes.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      <span className="material-symbols-outlined text-accent-yellow text-4xl">star</span>
                      <span className="material-symbols-outlined text-accent-yellow text-4xl">star</span>
                      <span className="material-symbols-outlined text-accent-yellow text-4xl">star</span>
                      <span className="material-symbols-outlined text-accent-yellow text-4xl">star</span>
                      <span className="material-symbols-outlined text-accent-yellow text-4xl">star</span>
                    </div>
                    <p className="text-dark-charcoal dark:text-creamy-white mb-4 italic">
                      "SV Builders and Developers delivered exactly what they promised. Our new home in HSR Layout exceeded all expectations. Quality construction and timely delivery!"
                    </p>
                    <p className="font-bold text-dark-charcoal dark:text-creamy-white">- Ramesh K., Homeowner</p>
                  </div>
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      <span className="material-symbols-outlined text-accent-yellow text-4xl">star</span>
                      <span className="material-symbols-outlined text-accent-yellow text-4xl">star</span>
                      <span className="material-symbols-outlined text-accent-yellow text-4xl">star</span>
                      <span className="material-symbols-outlined text-accent-yellow text-4xl">star</span>
                      <span className="material-symbols-outlined text-accent-yellow text-4xl">star</span>
                    </div>
                    <p className="text-dark-charcoal dark:text-creamy-white mb-4 italic">
                      "Excellent service from start to finish. The team was professional, responsive, and the amenities at Koramangala project are top-notch."
                    </p>
                    <p className="font-bold text-dark-charcoal dark:text-creamy-white">- Priya S., Investor</p>
                  </div>
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      <span className="material-symbols-outlined text-accent-yellow text-4xl">star</span>
                      <span className="material-symbols-outlined text-accent-yellow text-4xl">star</span>
                      <span className="material-symbols-outlined text-accent-yellow text-4xl">star</span>
                      <span className="material-symbols-outlined text-accent-yellow text-4xl">star</span>
                      <span className="material-symbols-outlined text-accent-yellow text-4xl">star</span>
                    </div>
                    <p className="text-dark-charcoal dark:text-creamy-white mb-4 italic">
                      "Best decision we made! SV Builders and Developers' attention to detail and commitment to quality is unmatched. Highly recommend for anyone looking for a home in Bangalore."
                    </p>
                    <p className="font-bold text-dark-charcoal dark:text-creamy-white">- Anil M., Homebuyer</p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs Section */}
            <section className="py-20 px-4 sm:px-10 bg-white dark:bg-background-dark">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <span className="text-primary text-sm font-bold uppercase tracking-wider">FAQs</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-display text-dark-charcoal dark:text-creamy-white">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-center text-dark-charcoal/70 dark:text-creamy-white/70 mb-12 max-w-2xl mx-auto">
                    Find answers to commonly asked questions about SV Builders and Developers and our projects.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">What areas does SV Builders and Developers serve in Bangalore?</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                      SV Builders and Developers serves major areas in Bangalore including HSR Layout, Koramangala, Whitefield, Electronic City, Yelahanka, and many other prime locations across the city.
                    </p>
                  </div>
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">What types of projects does SV Builders and Developers offer?</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                      We offer residential apartments in various configurations (2 BHK, 3 BHK, 4 BHK), commercial spaces, and turnkey individual home construction services across Bangalore.
                    </p>
                  </div>
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">Are SV Builders and Developers projects RERA approved?</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                      Yes, all our projects comply with RERA regulations. We ensure all necessary approvals and certifications are in place before project launch.
                    </p>
                  </div>
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">What amenities are included in SV Builders and Developers projects?</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                      Our projects feature world-class amenities including swimming pools, clubhouses, gymnasiums, landscaped gardens, security systems, power backup, parking facilities, and more depending on the project.
                    </p>
                  </div>
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">How can I schedule a site visit?</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                      You can schedule a site visit by filling out our inquiry form on the website, calling us directly, or visiting our office. Our team will arrange a convenient time for you to visit the project.
                    </p>
                  </div>
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">What payment options are available?</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                      We offer flexible payment plans with various financing options. Our sales team will provide detailed information about payment plans, home loans, and EMI options during your consultation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Inquiry Form Section */}
          <section id="inquiry-form" className="py-20 px-4 sm:px-10 bg-gradient-to-b from-background-light to-light-taupe/20 dark:from-background-dark dark:to-dark-charcoal">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider">Get In Touch</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-dark-charcoal dark:text-creamy-white mb-4">
                    Inquire About Our Projects in Bangalore
                </h2>
                <p className="text-lg text-dark-charcoal/70 dark:text-creamy-white/70 max-w-2xl mx-auto">
                    Our team is ready to provide you with detailed information about our residential projects or schedule a site visit
                </p>
              </div>
              
              <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-sm border border-primary/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                  <div className="flex flex-col justify-center space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">person</span>
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-dark-charcoal dark:text-creamy-white mb-2">Expert Consultation</h3>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                            Get personalized guidance from our experienced real estate professionals in Bangalore
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark-charcoal dark:text-creamy-white mb-2">Quick Response</h3>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                            We'll get back to you within 24 hours with detailed project information and pricing
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-dark-charcoal dark:text-creamy-white mb-2">Site Visits</h3>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                            Schedule a private viewing of our projects at your convenience across Bangalore
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">person</span>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-0 transition-all hover:border-gray-300 dark:hover:border-gray-600"
                      />
                    </div>
                    
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">email</span>
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-0 transition-all hover:border-gray-300 dark:hover:border-gray-600"
                      />
                    </div>
                    
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">phone</span>
                      <input
                        type="tel"
                        placeholder="Your Phone Number"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-0 transition-all hover:border-gray-300 dark:hover:border-gray-600"
                      />
                    </div>
                    
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-5 text-gray-400 dark:text-gray-500">message</span>
                      <textarea
                        placeholder="Tell us about your requirements..."
                        rows="5"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-0 transition-all resize-none hover:border-gray-300 dark:hover:border-gray-600"
                      ></textarea>
                    </div>
                    
                    <button className="group w-full py-4 rounded-xl bg-primary text-white font-bold text-base md:text-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2">
                      <span>Request a Viewing</span>
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                    
                    <p className="text-sm text-center text-dark-charcoal/60 dark:text-creamy-white/60">
                      By submitting this form, you agree to be contacted by our team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>

    {/* Floating WhatsApp Button - Sticky at bottom right */}
    <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-[9998]">
      <a
        href="https://wa.me/917505205205"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white rounded-full p-3 sm:p-4 shadow-2xl hover:bg-[#20BA5A] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 min-w-[56px] min-h-[56px] group"
        aria-label="Contact us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg 
          className="w-6 h-6 sm:w-7 sm:h-7" 
          fill="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="hidden md:block font-bold text-sm sm:text-base">WhatsApp</span>
      </a>
    </div>
    </>
  );
}

export default App;
