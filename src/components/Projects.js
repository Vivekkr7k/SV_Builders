import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { projects } from '../data/projectsData';

function Projects() {
  // State for project filter
  const [projectFilter, setProjectFilter] = useState('all');
  
  // Filter projects based on selected filter
  const getFilteredProjects = () => {
    if (projectFilter === 'all') return projects;
    if (projectFilter === 'ready-to-move') return projects.filter(p => p.status === 'completed');
    if (projectFilter === 'ongoing') return projects.filter(p => p.status === 'ongoing');
    if (projectFilter === 'upcoming') return projects.filter(p => p.status === 'upcoming');
    if (projectFilter === 'completed') return projects.filter(p => p.status === 'completed');
    return projects;
  };

  return (
    <div className="relative w-full flex flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-body text-dark-charcoal dark:text-creamy-white">
      <Navbar />
      <div className="layout-container flex h-full grow flex-col">
        <main>
          {/* Hero Section */}
          <section className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full flex items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-[1]"></div>
            <div className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://tse1.explicit.bing.net/th/id/OIP.iD9gsM0RC59KntwNSEzlWAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3")` }}></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 w-full max-w-4xl mx-auto animate-fade-in py-8 sm:py-12">
              <div className="text-center space-y-3 sm:space-y-4 w-full">
                <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">Our Projects</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center leading-tight drop-shadow-2xl px-2">
                  Discover Our <span className="text-white font-extrabold">Legacy of Excellence</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white/90 font-light mt-2 sm:mt-3 max-w-2xl mx-auto px-2">
                  Explore our portfolio of completed, ongoing, and upcoming architectural marvels.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="py-16 sm:py-20 px-4 sm:px-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider">Portfolio</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-dark-charcoal dark:text-creamy-white mb-4">
                  Our Projects
                </h2>
                <p className="text-lg text-dark-charcoal/70 dark:text-creamy-white/70 max-w-3xl mx-auto">
                  From concept to completion, we bring visions to life
                </p>
              </div>

              {/* Filter Widgets - Casagrand Style */}
              <div className="flex flex-wrap justify-center gap-3 mb-12 px-2">
                <button
                  onClick={() => setProjectFilter('all')}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                    projectFilter === 'all'
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-light-taupe/20 text-dark-charcoal dark:text-creamy-white hover:bg-primary/10 border-2 border-primary/20'
                  }`}
                >
                  All Projects
                </button>
                <button
                  onClick={() => setProjectFilter('ready-to-move')}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                    projectFilter === 'ready-to-move'
                      ? 'bg-green-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-light-taupe/20 text-dark-charcoal dark:text-creamy-white hover:bg-green-600/10 border-2 border-green-600/20'
                  }`}
                >
                  Ready to Move
                </button>
                <button
                  onClick={() => setProjectFilter('ongoing')}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                    projectFilter === 'ongoing'
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-light-taupe/20 text-dark-charcoal dark:text-creamy-white hover:bg-blue-600/10 border-2 border-blue-600/20'
                  }`}
                >
                  Ongoing
                </button>
                <button
                  onClick={() => setProjectFilter('upcoming')}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                    projectFilter === 'upcoming'
                      ? 'bg-orange-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-light-taupe/20 text-dark-charcoal dark:text-creamy-white hover:bg-orange-600/10 border-2 border-orange-600/20'
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setProjectFilter('completed')}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                    projectFilter === 'completed'
                      ? 'bg-green-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-light-taupe/20 text-dark-charcoal dark:text-creamy-white hover:bg-green-600/10 border-2 border-green-600/20'
                  }`}
                >
                  Completed
                </button>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredProjects().map((project) => (
                  <div key={project.id} className="flex flex-col gap-4 rounded-xl bg-creamy-white dark:bg-light-taupe/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                    <div className="relative">
                      <div 
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover" 
                        style={{ backgroundImage: `url("${project.image}")` }}
                      ></div>
                      {/* Status Badge */}
                      <div className="absolute top-2 right-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                          project.status === 'completed' ? 'bg-green-600' :
                          project.status === 'ongoing' ? 'bg-blue-600' :
                          'bg-orange-600'
                        }`}>
                          {project.status === 'completed' ? 'Ready to Move' :
                           project.status === 'ongoing' ? 'Ongoing' :
                           'Upcoming'}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 justify-between p-6">
                      <div>
                        <h3 className="text-dark-charcoal dark:text-creamy-white text-xl font-bold leading-normal font-display mb-1">{project.title}</h3>
                        <p className="text-primary font-semibold mb-2 flex items-center gap-1.5 text-sm">
                          <span className="material-symbols-outlined text-base">location_on</span>
                          {project.location}
                        </p>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm font-normal leading-normal mb-3">{project.description}</p>
                        {/* Key Amenities */}
                        <div className="mb-3">
                          <p className="text-xs font-semibold text-dark-charcoal dark:text-creamy-white mb-2">Key Amenities:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.amenities.slice(0, 3).map((amenity, idx) => (
                              <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                {amenity}
                              </span>
                            ))}
                            {project.amenities.length > 3 && (
                              <span className="px-2 py-1 text-primary text-xs font-medium">
                                +{project.amenities.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <Link 
                        to={`/project/${project.id}`} 
                        className="text-primary font-bold mt-4 inline-flex items-center gap-2 hover:gap-4 transition-all"
                        title={`View details of ${project.title}`}
                      >
                        View Details
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Projects;

