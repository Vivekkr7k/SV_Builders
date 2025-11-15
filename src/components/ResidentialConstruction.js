import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { projects } from '../data/projectsData';

function ResidentialConstruction() {
  // Filter residential projects
  const residentialProjects = projects.filter(p => p.propertyType?.toLowerCase().includes('residential'));
  const ongoingProjects = residentialProjects.filter(p => p.status === 'ongoing');
  const upcomingProjects = residentialProjects.filter(p => p.status === 'upcoming');
  const individualHomes = []; // Can be populated later

  const categories = [
    {
      name: "Silver",
      description: "Affordable luxury homes with essential amenities and modern design",
      features: ["2-3 BHK Apartments", "Basic Amenities", "Prime Locations", "RERA Approved"]
    },
    {
      name: "Gold",
      description: "Premium homes with enhanced amenities and superior finishes",
      features: ["3-4 BHK Apartments", "Premium Amenities", "Strategic Locations", "High-End Finishes"]
    },
    {
      name: "Platinum",
      description: "Ultra-luxury residences with world-class amenities and exclusive features",
      features: ["4+ BHK Apartments", "Luxury Amenities", "Elite Locations", "Premium Finishes"]
    }
  ];

  return (
    <div className="relative w-full flex flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-body text-dark-charcoal dark:text-creamy-white">
      <Navbar />
      <div className="layout-container flex h-full grow flex-col">
        <main>
          {/* Hero Section */}
          <section className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full flex items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-[1]"></div>
            <div className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=100")` }}></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 w-full max-w-4xl mx-auto animate-fade-in py-8 sm:py-12">
              <div className="text-center space-y-3 sm:space-y-4 w-full">
                <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">Residential Construction</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center leading-tight drop-shadow-2xl px-2">
                  Premium <span className="text-white font-extrabold">Residential Projects</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white/90 font-light mt-2 sm:mt-3 max-w-2xl mx-auto px-2">
                  Building your dream home with quality, commitment, and excellence.
                </p>
              </div>
            </div>
          </section>

          {/* Categories Section */}
          <section className="py-20 px-4 sm:px-10 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Categories</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-dark-charcoal dark:text-creamy-white mb-4">
                  Choose Your Perfect Home
                </h2>
                <p className="text-lg text-dark-charcoal/70 dark:text-creamy-white/70 max-w-3xl mx-auto">
                  We offer three distinct categories to match your lifestyle and budget
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                  <div key={index} className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-center mb-6">
                      <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                        <span className="text-primary text-lg font-bold">{category.name}</span>
                      </div>
                      <h3 className="text-2xl font-bold font-display text-dark-charcoal dark:text-creamy-white mb-3">{category.name} Category</h3>
                      <p className="text-dark-charcoal/70 dark:text-creamy-white/70 mb-6">{category.description}</p>
                    </div>
                    <ul className="space-y-3">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-dark-charcoal dark:text-creamy-white">
                          <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section - Styled like Testimonials */}
          <section className="py-20 px-4 sm:px-10 bg-gradient-to-b from-white to-background-light dark:from-background-dark dark:to-background-dark">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Projects</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-display text-dark-charcoal dark:text-creamy-white">
                  Residential Projects Portfolio
                </h2>
              </div>

              {/* Ongoing Projects */}
              {ongoingProjects.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 font-display text-dark-charcoal dark:text-creamy-white">Ongoing Projects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ongoingProjects.map((project) => (
                      <div key={project.id} className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-8 shadow-lg">
                        <div className="mb-4">
                          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">Ongoing</span>
                        </div>
                        <h4 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">{project.title}</h4>
                        <p className="text-primary font-semibold mb-3 flex items-center gap-1.5 text-sm">
                          <span className="material-symbols-outlined text-sm">location_on</span>
                          {project.location}
                        </p>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70 mb-4 text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                        <Link
                          to={`/project/${project.id}`}
                          className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                          title={`View details of ${project.title}`}
                        >
                          View Details
                          <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Upcoming Projects */}
              {upcomingProjects.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 font-display text-dark-charcoal dark:text-creamy-white">Upcoming Projects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {upcomingProjects.map((project) => (
                      <div key={project.id} className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-8 shadow-lg">
                        <div className="mb-4">
                          <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">Upcoming</span>
                        </div>
                        <h4 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">{project.title}</h4>
                        <p className="text-primary font-semibold mb-3 flex items-center gap-1.5 text-sm">
                          <span className="material-symbols-outlined text-sm">location_on</span>
                          {project.location}
                        </p>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70 mb-4 text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                        <Link
                          to={`/project/${project.id}`}
                          className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                          title={`View details of ${project.title}`}
                        >
                          View Details
                          <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Individual Homes Constructed */}
              {individualHomes.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 font-display text-dark-charcoal dark:text-creamy-white">Individual Homes Constructed</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {individualHomes.map((home, index) => (
                      <div key={index} className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-8 shadow-lg">
                        <h4 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">{home.title || `Individual Home ${index + 1}`}</h4>
                        <p className="text-primary font-semibold mb-3 flex items-center gap-1.5 text-sm">
                          <span className="material-symbols-outlined text-sm">location_on</span>
                          {home.location || 'Bangalore'}
                        </p>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70 mb-4 text-sm leading-relaxed">
                          {home.description || 'Custom-designed individual home with premium finishes and modern amenities.'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default ResidentialConstruction;

