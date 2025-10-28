import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Projects() {
  const projects = [
    {
      title: "The Serenity Towers",
      location: "Downtown Metropolis",
      description: "A stunning residential tower offering unparalleled luxury and breathtaking city views.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1JfZvHmjygJq9Ntdvhpmk-5cBMMl7pctm4wplQNxNLfVCE5Z-cW4zQfj4QstUN_3AMcB5eaGbSqUVR7OXJ1bjCiECrJCRexgLrPzZzQ6QT_PUlWmxHdF8l-2RMokSBWcrxo226IrhRpjXe1LRi_8yi5GOU0-R5jeynPGB4NmBM4KoQzea8wjo3mowfkYDQBWTwi2vQpw2S4Ku7FMn_RB5imks7b_xl-0rIjP1WifXBS5iWrFMVz5N826nVRRLCKo08pRfnw7tmKs",
      alt: "Luxury residential tower with a modern glass facade"
    },
    {
      title: "The Azure Villas",
      location: "Oceanfront Paradise",
      description: "Exquisite villas with private pools and direct beach access.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8tACyec0xqLnYRXU3rGZsI54n9D97neDXRiaTRkgfnk8iNaSyoJ7GNtnuIRpKV8h-yqT8aFi5QAonhaoio9SZmMjR6e2ERWFXb2Pq1_-qZWUXOx5ZxuVNJb3rs-BUetZcpIo83j_Cl29Xkvrcb3lvWXbfigrz_ww88j0ygk4sVGbbCt0Xc479-0ZeUNf2KLkjJR3z1a16YGjRf7rpvvZNK026FLAaojEgW3v9fsUAdImRBsAvbu5y0m9uInwgp0TYrQaQEFDJe6Q",
      alt: "Exquisite villa with a private pool overlooking the ocean"
    },
    {
      title: "The Golden Gate Residences",
      location: "Metropolis Suburbs",
      description: "Modern family homes with spacious interiors and lush green surroundings.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRALEcFzR21B0uHsmR5vs_-CXdPB5KvS7VV4I3Ye3mYKaq7VFU9SF1ZOJlWmBhXZHYljRc1aN73iYLvE-RtzX2kV-8HK-IIsuMA1AWGEF6LutxFZD2VEv_jImY7OqPt942Pn3QolUjvUayJnQ-LlENhxY1lHQEzs7Q3oSjPcG_B2SvWNJ3QvbV1ssyFnHJdI5yPt6C0QLNGwjZALxJvMTj2Yi007VMzWcDLI7aUWyV0Qd5PBNDf3da3wH_Idm_ecm9j-O-8QehsaE",
      alt: "Modern family home with spacious interiors and a green lawn"
    },
    {
      title: "The Emerald Gardens",
      location: "Green Valley",
      description: "A tranquil oasis with beautifully landscaped gardens and serene water features.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApgaN2IG9WWZdl_4GE1TnrppxO7j84No00gG4eLOqmJt1ngXEYlfU2nlVJO39wXS5_n12Lof9px7cRlrjIUWtovP1kf4hG9a5aipnnEsBXlf-FSzGSZLqEIHJl9scyURlZw9P1GtWVwfkyCZ5ZM0Z2fjdkIaUAS49TZUhr8V0ZWrGrWo7rfpG9KBM2QRXyNrLFpYwD-wSKp8jpdwYYAAovU_vt4Sc3DADQxFgRmuk8EiSSbc29NJfFsUSxzHgXExyUIo88aj1gUF4",
      alt: "A tranquil residential area with landscaped gardens and a pond"
    },
    {
      title: "The Crystal Palace",
      location: "City Center",
      description: "A masterpiece of modern architecture with state-of-the-art amenities.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyQseEJqEPhXZd2f6Nv02ToeFOQYS8dyvgu4XFtWt8Dih7dfZw7UwwNm7ssKrRyI74K6XRAVvIrTL8GfNGwvWYiGIjTR5usj7AeiAIamjkiSSRT3SAp2VA1HlZwDm2AXhVJRKi1UV0LII31G2_1-foAOeIUXG3J0Lxk4Vu4znOGloUrB1rTn4jv0yntd0VWmoNvcERLnPQuxFAL_irEehFD7rU5CnmKVOIkH1dilFG03nC12CS34VBw3DvQ_U0vuGjJwV2Kgz4Xt0",
      alt: "A sleek, modern building with a glass and steel facade"
    },
    {
      title: "The Royal Mansions",
      location: "Beverly Hills",
      description: "Opulent mansions with bespoke interiors and exclusive services.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpSnAkVVMiknlno89R9-DlaKxSqYireYKlOK2HMOOWa_DoBZIQyMqgHSWAnI4l1XqOO2otjBeihl2aysASfyrSjjdrK3abv4Ktgt8eSsBDI_D0ewSYk2XqkGzc3RLARKhimRAg_ETeEWRB8CWeTYrSh8-ierraWNtHhiAy02EWrITFUbBkZZfLmW3PDleCpYrcToY2SJTc7ZJ41-CvqoJ82frc_GwWXH1pq7hXUHLEmefjdP4rmrlqAeBuq_CVDkeByEXPUa8LS8o",
      alt: "An opulent mansion with classic architecture and large columns"
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
            <div className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=100")` }}></div>
            
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

              {/* Tabs */}
              <div className="flex flex-wrap justify-center border-b border-light-taupe/50 dark:border-creamy-white/20 mb-12 px-2 gap-2 sm:gap-4">
                <button className="pb-3 sm:pb-4 px-3 sm:px-6 text-sm sm:text-base font-bold text-primary border-b-2 border-primary transition-colors">
                  All Projects
                </button>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="flex flex-col gap-4 rounded-xl bg-creamy-white dark:bg-light-taupe/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover" 
                      style={{ backgroundImage: `url("${project.image}")` }}
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-6">
                      <div>
                        <h3 className="text-dark-charcoal dark:text-creamy-white text-xl font-bold leading-normal font-display mb-1">{project.title}</h3>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm font-normal leading-normal mb-2">{project.location}</p>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm font-normal leading-normal">{project.description}</p>
                      </div>
                      <Link to={`/project/${index + 1}`} className="text-primary font-bold mt-4 inline-flex items-center gap-2 hover:gap-4 transition-all">
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

