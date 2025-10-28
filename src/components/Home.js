import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState('completed');

  // Completed Projects
  const completedProjects = [
    {
      id: 1,
      title: "Sai Omkar Residency",
      location: "Downtown Metropolis",
      description: "A stunning residential tower offering unparalleled luxury and breathtaking city views.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    },
    {
      id: 2,
      title: "Shri Balaji Residency",
      location: "Oceanfront Paradise",
      description: "Exquisite villas with private pools and direct beach access.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8tACyec0xqLnYRXU3rGZsI54n9D97neDXRiaTRkgfnk8iNaSyoJ7GNtnuIRpKV8h-yqT8aFi5QAonhaoio9SZmMjR6e2ERWFXb2Pq1_-qZWUXOx5ZxuVNJb3rs-BUetZcpIo83j_Cl29Xkvrcb3lvWXbfigrz_ww88j0ygk4sVGbbCt0Xc479-0ZeUNf2KLkjJR3z1a16YGjRf7rpvvZNK026FLAaojEgW3v9fsUAdImRBsAvbu5y0m9uInwgp0TYrQaQEFDJe6Q",
    },
  ];

  // Ongoing Projects
  const ongoingProjects = [
    {
      id: 3,
      title: "SV Sri Balaji Residency",
      location: "Metropolis Suburbs",
      description: "Modern family homes with spacious interiors and lush green surroundings.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRALEcFzR21B0uHsmR5vs_-CXdPB5KvS7VV4I3Ye3mYKaq7VFU9SF1ZOJlWmBhXZHYljRc1aN73iYLvE-RtzX2kV-8HK-IIsuMA1AWGEF6LutxFZD2VEv_jImY7OqPt942Pn3QolUjvUayJnQ-LlENhxY1lHQEzs7Q3oSjPcG_B2SvWNJ3QvbV1ssyFnHJdI5yPt6C0QLNGwjZALxJvMTj2Yi007VMzWcDLI7aUWyV0Qd5PBNDf3da3wH_Idm_ecm9j-O-8QehsaE",
    },
    {
      id: 4,
      title: "SV Giridhama Residency",
      location: "Green Valley",
      description: "A tranquil oasis with beautifully landscaped gardens and serene water features.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApgaN2IG9WWZdl_4GE1TnrppxO7j84No00gG4eLOqmJt1ngXEYlfU2nlVJO39wXS5_n12Lof9px7cRlrjIUWtovP1kf4hG9a5aipnnEsBXlf-FSzGSZLqEIHJl9scyURlZw9P1GtWVwfkyCZ5ZM0Z2fjdkIaUAS49TZUhr8V0ZWrGrWo7rfpG9KBM2QRXyNrLFpYwD-wSKp8jpdwYYAAovU_vt4Sc3DADQxFgRmuk8EiSSbc29NJfFsUSxzHgXExyUIo88aj1gUF4",
    },
  ];

  // Upcoming Projects
  const upcomingProjects = [
    {
      id: 5,
      title: "SV Royal Residency",
      location: "City Center",
      description: "A masterpiece of modern architecture with state-of-the-art amenities.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyQseEJqEPhXZd2f6Nv02ToeFOQYS8dyvgu4XFtWt8Dih7dfZw7UwwNm7ssKrRyI74K6XRAVvIrTL8GfNGwvWYiGIjTR5usj7AeiAIamjkiSSRT3SAp2VA1HlZwDm2AXhVJRKi1UV0LII31G2_1-foAOeIUXG3J0Lxk4Vu4znOGloUrB1rTn4jv0yntd0VWmoNvcERLnPQuxFAL_irEehFD7rU5CnmKVOIkH1dilFG03nC12CS34VBw3DvQ_U0vuGjJwV2Kgz4Xt0",
    },
  ];

  const carouselImages = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=100",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=100",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=100",
  ];

  return (
    <div className="relative w-full flex flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark text-dark-charcoal dark:text-creamy-white">
      <Navbar />
      <div className="layout-container flex h-full grow flex-col">
        <main>
          <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-screen w-full flex items-center justify-center text-white overflow-hidden">
            {/* Subtle Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-[1]"></div>
            
            {/* HD Background Images with Animation */}
            <div className="absolute inset-0 w-full h-full hero-carousel">
              {carouselImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover transition-opacity duration-2000 ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
                  style={{ backgroundImage: `url("${img}")` }}
                ></div>
              ))}
            </div>
            
            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 w-full max-w-6xl mx-auto animate-fade-in py-8 sm:py-12 md:py-16">
              {/* Title Section */}
              <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 w-full">
                <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-2 sm:mb-3 md:mb-4">
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">Welcome to SV Builders</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-center leading-tight drop-shadow-2xl px-2">
                  Discover Your <span className="text-white font-extrabold">Dream Home</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 font-light mt-2 sm:mt-3 md:mt-4 max-w-2xl mx-auto px-2">
                  Where Luxury Meets Comfort in Every Detail
                </p>
              </div>

              {/* Enhanced Search Box */}
              <div className="w-full bg-white/10 backdrop-blur-xl p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 animate-fade-in max-w-4xl" style={{ animationDelay: '0.3s' }}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <label className="flex flex-col flex-1 w-full">
                    <div className="flex w-full items-stretch rounded-lg sm:rounded-xl h-12 sm:h-14 md:h-16 shadow-lg">
                      <div className="text-dark-charcoal flex bg-creamy-white dark:bg-light-taupe/90 items-center justify-center pl-3 sm:pl-4 md:pl-5 rounded-l-lg sm:rounded-l-xl transition-colors hover:bg-creamy-white">
                        <span className="material-symbols-outlined text-lg sm:text-xl md:text-2xl">search</span>
                      </div>
                      <input 
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg sm:rounded-r-xl text-dark-charcoal focus:outline-0 focus:ring-2 focus:ring-primary border-none bg-creamy-white dark:bg-light-taupe/90 h-full placeholder:text-dark-charcoal/60 px-3 sm:px-4 md:px-5 text-sm sm:text-base font-normal leading-normal" 
                        placeholder="City or Address" 
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                      />
                    </div>
                  </label>
                  <button className="flex w-full sm:w-auto sm:min-w-[120px] md:min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg sm:rounded-xl h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 bg-primary text-white text-sm sm:text-base md:text-lg font-bold leading-normal tracking-[0.02em] hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <span className="truncate">Search</span>
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full max-w-2xl mt-2 sm:mt-3 md:mt-4 px-2 sm:px-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">150+</div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80 mt-1">Completed Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">5000+</div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80 mt-1">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">25+</div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80 mt-1">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator - Hidden on small screens */}
            <div className="hidden sm:block absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
              <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl text-white/60">keyboard_arrow_down</span>
            </div>
          </section>

          {/* Our Journey Section */}
          <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-10 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Journey</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-dark-charcoal dark:text-creamy-white mb-4">
                  Building Excellence Since 2005
                </h2>
                <p className="text-lg text-dark-charcoal/70 dark:text-creamy-white/70 max-w-3xl mx-auto">
                  Two decades of excellence in crafting luxury living spaces
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* Timeline Item 1 */}
                <div className="relative text-center group">
                  <div className="relative mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                    <div className="text-primary text-3xl">
                      <span className="material-symbols-outlined">foundation</span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-primary/30 to-transparent"></div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary text-white text-sm font-bold rounded-full mb-3">2005</div>
                  <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">The Beginning</h3>
                  <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm leading-relaxed">
                    Founded with a vision to redefine luxury real estate, SV Builders embarked on its journey to create exceptional living spaces.
                  </p>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative text-center group">
                  <div className="relative mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                    <div className="text-primary text-3xl">
                      <span className="material-symbols-outlined">apartment</span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-primary/30 to-transparent"></div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary text-white text-sm font-bold rounded-full mb-3">2010</div>
                  <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">First Milestone</h3>
                  <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm leading-relaxed">
                    The launch of our first signature development marked a milestone, setting a new benchmark for architectural excellence.
                  </p>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative text-center group">
                  <div className="relative mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                    <div className="text-primary text-3xl">
                      <span className="material-symbols-outlined">public</span>
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary text-white text-sm font-bold rounded-full mb-3">2020</div>
                  <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">Global Expansion</h3>
                  <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm leading-relaxed">
                    Expanded internationally, bringing signature quality and luxury to discerning clients worldwide.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 sm:px-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] text-center mb-12 font-display">Our Projects</h2>
              
              {/* Tabs */}
              <div className="flex flex-wrap justify-center border-b border-light-taupe/50 dark:border-creamy-white/20 mb-12 px-2 gap-2 sm:gap-4">
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`pb-3 sm:pb-4 px-3 sm:px-6 text-sm sm:text-base font-bold transition-colors whitespace-nowrap ${
                    activeTab === 'completed'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-dark-charcoal/60 dark:text-creamy-white/60 hover:text-dark-charcoal dark:hover:text-creamy-white'
                  }`}
                >
                  Completed
                </button>
                <button
                  onClick={() => setActiveTab('ongoing')}
                  className={`pb-3 sm:pb-4 px-3 sm:px-6 text-sm sm:text-base font-bold transition-colors whitespace-nowrap ${
                    activeTab === 'ongoing'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-dark-charcoal/60 dark:text-creamy-white/60 hover:text-dark-charcoal dark:hover:text-creamy-white'
                  }`}
                >
                  Ongoing
                </button>
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`pb-3 sm:pb-4 px-3 sm:px-6 text-sm sm:text-base font-bold transition-colors whitespace-nowrap ${
                    activeTab === 'upcoming'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-dark-charcoal/60 dark:text-creamy-white/60 hover:text-dark-charcoal dark:hover:text-creamy-white'
                  }`}
                >
                  Upcoming
                </button>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeTab === 'completed' && completedProjects.map((project) => (
                  <div key={project.id} className="flex flex-col gap-4 rounded-xl bg-creamy-white dark:bg-light-taupe/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover" 
                      style={{ backgroundImage: `url("${project.image}")` }}
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-6">
                      <div>
                        <h3 className="text-dark-charcoal dark:text-creamy-white text-xl font-bold leading-normal font-display">{project.title}</h3>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm font-normal leading-normal mt-1">{project.location}</p>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm font-normal leading-normal mt-2">{project.description}</p>
                      </div>
                      <Link to={`/project/${project.id}`} className="text-primary font-bold mt-4 inline-flex items-center gap-2 hover:gap-4 transition-all">
                        View Details
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                ))}
                
                {activeTab === 'ongoing' && ongoingProjects.map((project) => (
                  <div key={project.id} className="flex flex-col gap-4 rounded-xl bg-creamy-white dark:bg-light-taupe/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover" 
                      style={{ backgroundImage: `url("${project.image}")` }}
                      ></div>
                      <div className="flex flex-col flex-1 justify-between p-6">
                        <div>
                        <h3 className="text-dark-charcoal dark:text-creamy-white text-xl font-bold leading-normal font-display">{project.title}</h3>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm font-normal leading-normal mt-1">{project.location}</p>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm font-normal leading-normal mt-2">{project.description}</p>
                      </div>
                      <Link to={`/project/${project.id}`} className="text-primary font-bold mt-4 inline-flex items-center gap-2 hover:gap-4 transition-all">
                        View Details
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </Link>
                    </div>
                        </div>
                ))}
                
                {activeTab === 'upcoming' && upcomingProjects.map((project) => (
                  <div key={project.id} className="flex flex-col gap-4 rounded-xl bg-creamy-white dark:bg-light-taupe/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover" 
                      style={{ backgroundImage: `url("${project.image}")` }}
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-6">
                      <div>
                        <h3 className="text-dark-charcoal dark:text-creamy-white text-xl font-bold leading-normal font-display">{project.title}</h3>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm font-normal leading-normal mt-1">{project.location}</p>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm font-normal leading-normal mt-2">{project.description}</p>
                      </div>
                      <Link to={`/project/${project.id}`} className="text-primary font-bold mt-4 inline-flex items-center gap-2 hover:gap-4 transition-all">
                        View Details
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-4 sm:px-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-display">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80")` }}></div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 font-display text-dark-charcoal dark:text-creamy-white">Residential Construction</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70">From contemporary villas to classic estates, we craft bespoke homes that reflect your unique vision and lifestyle.</p>
                  </div>
                </div>
                <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80")` }}></div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 font-display text-dark-charcoal dark:text-creamy-white">Commercial Construction</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70">We deliver cutting-edge commercial spaces that are both functional and inspiring, designed to elevate your business.</p>
                  </div>
                </div>
                <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80")` }}></div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 font-display text-dark-charcoal dark:text-creamy-white">Interior Design & Renovation</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70">Transform your space with our expert interior design and renovation services, creating environments that inspire.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section className="py-20 px-4 sm:px-10 bg-light-taupe/30 dark:bg-dark-charcoal/30">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-dark-charcoal dark:text-creamy-white">Latest from Blog</h2>
                <Link to="/blog" className="text-primary font-bold hover:underline inline-flex items-center gap-2">
                  View All
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80")` }}></div>
                  <div className="p-6">
                    <div className="text-primary text-xs font-bold mb-2 uppercase">Tips & Advice</div>
                    <h3 className="text-xl font-bold mb-2 font-display text-dark-charcoal dark:text-creamy-white">5 Things to Consider When Buying Your First Home</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm mb-4">Essential factors that every first-time homebuyer should keep in mind for a successful purchase.</p>
                    <Link to="/blog/article/1" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1">
                      Read More
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>
                </div>
                <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80")` }}></div>
                  <div className="p-6">
                    <div className="text-primary text-xs font-bold mb-2 uppercase">Market Insights</div>
                    <h3 className="text-xl font-bold mb-2 font-display text-dark-charcoal dark:text-creamy-white">Real Estate Market Trends in 2024</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm mb-4">Stay informed about the latest market trends and how they might affect your property investment.</p>
                    <Link to="/blog/article/2" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1">
                      Read More
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>
                </div>
                <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80")` }}></div>
                  <div className="p-6">
                    <div className="text-primary text-xs font-bold mb-2 uppercase">Home Improvement</div>
                    <h3 className="text-xl font-bold mb-2 font-display text-dark-charcoal dark:text-creamy-white">Maximizing Your Property's Value</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm mb-4">Discover simple upgrades and renovations that can significantly increase your property's market value.</p>
                    <Link to="/blog/article/3" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1">
                      Read More
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>
                </div>
              </div>
            </div>
          </section>

          <section id="inquiry-form" className="py-20 px-4 sm:px-10 bg-gradient-to-b from-background-light to-light-taupe/20 dark:from-background-dark dark:to-dark-charcoal">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider">Get In Touch</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-dark-charcoal dark:text-creamy-white mb-4">
                  Inquire Now
                </h2>
                <p className="text-lg text-dark-charcoal/70 dark:text-creamy-white/70 max-w-2xl mx-auto">
                  Our team is ready to provide you with more information or schedule a private viewing
                </p>
              </div>
              
              <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-sm border border-primary/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                  {/* Left Side - Information */}
                  <div className="flex flex-col justify-center space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">person</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark-charcoal dark:text-creamy-white mb-2">Personal Assistance</h3>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                          Get personalized attention from our experienced real estate professionals
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
                          We'll get back to you within 24 hours with detailed information
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark-charcoal dark:text-creamy-white mb-2">Property Viewing</h3>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                          Schedule a private viewing at your convenience
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Form */}
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
  );
}

export default App;