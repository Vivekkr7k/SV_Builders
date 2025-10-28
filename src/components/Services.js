import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Services() {
  const services = [
    {
      category: "RESIDENTIAL",
      title: "Residential Construction",
      description: "From contemporary villas to classic estates, we craft bespoke homes that reflect your unique vision and lifestyle.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD5vJLGIcsuHCV5ywisa96kIREXcJTme7l4-3ZgPMdI7cFCe4ukfuTssvZlFse30eQnblWk5n5Lsg_sd6utzdNQsJL117xcY5Sbu8RyM9xLUyEEBfUDZkxXb1H5KjgAkR0vB0dWNWl1u7cl-rsTbJ9h43XMr8uzRCVdUtJFIRnG9UJ2MS8-nsD90ma8UEdWQzbyriRVRbxCi5RD3BMnW11L9Iowmnef5E7br-MtyeqW5BKkhpRJGpViKA3lu334srAlgXlwSZqfns",
      alt: "A beautiful modern residential house with a large glass facade"
    },
    {
      category: "COMMERCIAL",
      title: "Commercial Construction",
      description: "We deliver cutting-edge commercial spaces that are both functional and inspiring, designed to elevate your business.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLpMSzQkzT_so-t9z7MCqZfcDfj1AyroWbVnmqS2fwoyEJsmS2k-WeFKZJzMl8WtE2oPBAbMwjtwlJ4cQVUj8Bm5qioEr_h1bMiUXqk6seF56uxPMVC2Vz2HyW0BGrGU6dSRm3_iPSZrIbOvR8oYPoMGh9joaN0FjYv2ikumOjzxZQ4RGJGJa8U0e9eCycQm2BPd1q-4V77MkVJpxlMhKc55Djxtqh4LNi9yqlk2U4FUjK_Djscfz_zECT2p-7mukyRtPvVzsjR3U",
      alt: "A modern office building with a sleek glass exterior"
    },
    {
      category: "DESIGN & RENOVATION",
      title: "Interior Design & Renovation",
      description: "Transform your space with our expert interior design and renovation services, creating environments that inspire.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxIAQlayIhSAAJRMijym_RbKQNOmuGxbGw0rHTSCXgNeJzCxf4jrfm2AYF6P0Tmrj41jrIDIaKx7-P1SyUL4O80yjkv77G3sIFH4UgpOn6iQP7NkslbOJLwqfalPqbmelZHrtQ7PlEp-4R9Ln2XZM40AVR1qKCH3FtYIL0wvE8_1f5JI9Ajzj0Q7HiElCoq7Bjs60VuwbG80aMmyvOzKPM7tEC6IhP4K6TTEDTYw-H-khO-Lq6HhDrGHLPg9LgJwRezbqG02HpR4g",
      alt: "A stylish and modern living room interior"
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
            <div className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=100")` }}></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 w-full max-w-4xl mx-auto animate-fade-in py-8 sm:py-12">
              <div className="text-center space-y-3 sm:space-y-4 w-full">
                <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">Our Expertise</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center leading-tight drop-shadow-2xl px-2">
                  Building Dreams, <span className="text-white font-extrabold">Creating Legacies</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white/90 font-light mt-2 sm:mt-3 max-w-2xl mx-auto px-2">
                  Experience the art of exceptional living with our bespoke real estate solutions.
                </p>
              </div>
              
              <Link to="/projects" className="flex w-full sm:w-auto sm:min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg sm:rounded-xl h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 bg-primary text-white text-sm sm:text-base md:text-lg font-bold leading-normal hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <span className="truncate">Explore Our Work</span>
              </Link>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider">What We Offer</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-dark-charcoal dark:text-creamy-white mb-4">
                  Our Services
                </h2>
                <p className="text-lg text-dark-charcoal/70 dark:text-creamy-white/70 max-w-3xl mx-auto">
                  Comprehensive solutions for all your real estate needs
                </p>
              </div>

              <div className="flex flex-col gap-12">
                {services.map((service, index) => (
                  <div key={index} className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex flex-col md:flex-row">
                      <div 
                        className="w-full md:w-1/2 h-[300px] md:h-auto bg-center bg-no-repeat bg-cover" 
                        style={{ backgroundImage: `url("${service.image}")` }}
                      ></div>
                      <div className="flex flex-col justify-center p-8 md:p-12">
                        <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-3 w-fit">
                          <span className="text-primary text-xs font-bold uppercase tracking-wider">{service.category}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display text-dark-charcoal dark:text-creamy-white">{service.title}</h3>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-base leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all w-fit">
                          {service.category === "RESIDENTIAL" ? "Explore Portfolio" : service.category === "COMMERCIAL" ? "View Projects" : "Discover Style"}
                          <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                      </div>
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

export default Services;

