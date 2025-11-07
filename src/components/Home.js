import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { projects as allProjects } from '../data/projectsData';

function App() {

  // Bangalore-focused banner images
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=100",
      alt: "Modern residential building in Bangalore with contemporary architecture"
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=100",
      alt: "Residential apartment complex in Bangalore with landscaped gardens"
    },
    {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=100",
      alt: "Premium residential project in Bangalore with modern amenities"
    },
  ];


  const scrollToInquiry = () => {
    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  // JSON-LD Schema for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "SV Builders",
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
    "name": "SV Builders",
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
    "name": "SV Builders",
    "foundingDate": "2005",
    "numberOfEmployees": "50-100",
    "services": [
      "Residential Real Estate Development",
      "Property Sales",
      "Property Consultation",
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
          <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-screen w-full flex items-center justify-center text-white overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-[1]"></div>
            
              {/* Carousel Banner Images */}
            <div className="absolute inset-0 w-full h-full hero-carousel">
              {carouselImages.map((img, index) => (
                  <img
                  key={index}
                    src={img.url}
                    alt={img.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === 0 ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
              ))}
            </div>
            
            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 w-full max-w-6xl mx-auto animate-fade-in py-8 sm:py-12 md:py-16">
              <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 w-full">
                <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-2 sm:mb-3 md:mb-4">
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">SV Builders Bangalore</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-center leading-tight drop-shadow-2xl px-2">
                    Premium Homes in <span className="text-white font-extrabold">Bangalore</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 font-light mt-2 sm:mt-3 md:mt-4 max-w-2xl mx-auto px-2">
                    Trusted Real Estate Developer with 25+ Years of Excellence
                </p>
              </div>

                {/* CTA Button instead of Search Bar */}
                <div className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mt-4 sm:mt-6">
                  <button
                    onClick={scrollToInquiry}
                    className="flex w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg sm:rounded-xl h-12 sm:h-14 md:h-16 px-8 sm:px-10 md:px-12 bg-primary text-white text-sm sm:text-base md:text-lg font-bold leading-normal tracking-[0.02em] hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl gap-2"
                  >
                    <span>Get Free Consultation</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <Link
                    to="/projects"
                    className="flex w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg sm:rounded-xl h-12 sm:h-14 md:h-16 px-8 sm:px-10 md:px-12 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white text-sm sm:text-base md:text-lg font-bold leading-normal tracking-[0.02em] hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl gap-2"
                  >
                    <span>Explore Projects</span>
                    <span className="material-symbols-outlined">explore</span>
                  </Link>
              </div>

              {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full max-w-2xl mt-4 sm:mt-6 md:mt-8 px-2 sm:px-4">
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

              {/* Scroll Indicator */}
            <div className="hidden sm:block absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
              <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl text-white/60">keyboard_arrow_down</span>
            </div>
          </section>

            {/* About SV Builders - SEO Rich Content */}
          <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-10 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <span className="text-primary text-sm font-bold uppercase tracking-wider">About SV Builders</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-dark-charcoal dark:text-creamy-white mb-4">
                    Your Trusted Real Estate Partner in Bangalore
                </h2>
                <p className="text-lg text-dark-charcoal/70 dark:text-creamy-white/70 max-w-3xl mx-auto">
                    SV Builders is a leading real estate developer in Bangalore, Karnataka, with over 25 years of experience in creating premium residential spaces. We specialize in developing high-quality apartment complexes and residential projects across prime locations in Bangalore, including HSR Layout, Koramangala, Whitefield, Electronic City, and Yelahanka.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="relative text-center group">
                  <div className="relative mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                      <span className="material-symbols-outlined text-primary text-3xl">apartment</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">Premium Projects</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm leading-relaxed">
                      We develop residential projects across major areas of Bangalore with world-class amenities, modern architecture, and strategic locations.
                    </p>
                  </div>

                  <div className="relative text-center group">
                    <div className="relative mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                      <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">Trusted Developer</h3>
                  <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm leading-relaxed">
                      With RERA approval and decades of experience, SV Builders is known for timely delivery and quality construction in Bangalore.
                  </p>
                </div>

                <div className="relative text-center group">
                  <div className="relative mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                      <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">Prime Locations</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm leading-relaxed">
                      Our projects are strategically located in Bangalore's most sought-after neighborhoods with excellent connectivity and infrastructure.
                    </p>
                  </div>
                </div>
                    </div>
            </section>

            {/* Projects Cards Section */}
            <section className="py-20 px-4 sm:px-10 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-background-dark">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Projects</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-dark-charcoal dark:text-creamy-white mb-4">
                    Premium Residential Projects in Bangalore
                  </h2>
                  <p className="text-lg text-dark-charcoal/70 dark:text-creamy-white/70 max-w-3xl mx-auto">
                    Explore our portfolio of completed, ongoing, and upcoming residential projects across Bangalore's prime locations
                  </p>
                </div>

                {/* Projects Grid - Cards Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {allProjects.map((project) => (
                    <div 
                      key={project.id} 
                      className="flex flex-col bg-creamy-white dark:bg-light-taupe/20 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {/* Project Image */}
                      <div className="relative h-48">
                        <img
                          src={project.image}
                          alt={`${project.title} - ${project.location} - SV Builders Bangalore residential project`}
                          className="w-full h-full object-cover"
                        />
                        {/* Status Badge */}
                        <div className="absolute top-2 right-2">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold text-white ${
                            project.status === 'completed' ? 'bg-green-600' :
                            project.status === 'ongoing' ? 'bg-blue-600' :
                            'bg-orange-600'
                          }`}>
                            {project.status === 'completed' ? 'Completed' :
                             project.status === 'ongoing' ? 'Ongoing' :
                             'Upcoming'}
                          </span>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="flex flex-col flex-1 p-4">
                        <h3 className="text-base md:text-lg font-bold font-display text-dark-charcoal dark:text-creamy-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-primary font-semibold mb-2 flex items-center gap-1.5 text-xs">
                          <span className="material-symbols-outlined text-sm">location_on</span>
                          {project.location}
                        </p>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70 mb-3 leading-relaxed text-xs line-clamp-2">
                          {project.description}
                        </p>
                        
                        {/* Key Amenities */}
                        <div className="mb-3">
                          <p className="text-[10px] font-semibold text-dark-charcoal dark:text-creamy-white mb-1.5">Key Amenities:</p>
                          <div className="flex flex-wrap gap-1">
                            {project.amenities.slice(0, 3).map((amenity, idx) => (
                              <span key={idx} className="px-1.5 py-0.5 bg-primary/10 text-primary text-[10px] font-medium rounded-full">
                                {amenity}
                              </span>
                            ))}
                            {project.amenities.length > 3 && (
                              <span className="px-1.5 py-0.5 text-primary text-[10px] font-medium">
                                +{project.amenities.length - 3} more
                              </span>
                            )}
                    </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-1.5 mt-auto">
                          <Link
                            to={`/project/${project.id}`}
                            className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 text-xs"
                          >
                            <span>View Details</span>
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                          </Link>
                      </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-10 bg-white dark:bg-background-dark">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Services</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-display text-dark-charcoal dark:text-creamy-white">
                    Our Services
                  </h2>
                  <p className="text-center text-dark-charcoal/70 dark:text-creamy-white/70 mb-12 max-w-2xl mx-auto">
                    We offer comprehensive real estate services including residential project development, property sales, and consultation across Bangalore.
                  </p>
                </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">apartment</span>
              </div>
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">Residential Construction</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                      Premium residential projects including turnkey individual home construction services. We build quality homes with modern amenities.
                    </p>
                </div>
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">business</span>
                </div>
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">Commercial Construction</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                      Commercial spaces and office buildings designed to elevate your business operations in Bangalore.
                    </p>
                </div>
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
                </div>
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">Property Consultation</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                      Expert property consultation services to help you make informed decisions about your real estate investments.
                    </p>
                </div>
              </div>
            </div>
          </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-10 bg-gradient-to-b from-white to-background-light dark:from-background-dark dark:to-background-dark">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <span className="text-primary text-sm font-bold uppercase tracking-wider">Testimonials</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-display text-dark-charcoal dark:text-creamy-white">
                    What Our Clients Say
                  </h2>
                  <p className="text-center text-dark-charcoal/70 dark:text-creamy-white/70 mb-12 max-w-2xl mx-auto">
                    Discover the experiences of our satisfied customers who trusted SV Builders for their dream homes.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      <span className="material-symbols-outlined text-primary text-4xl">star</span>
                      <span className="material-symbols-outlined text-primary text-4xl">star</span>
                      <span className="material-symbols-outlined text-primary text-4xl">star</span>
                      <span className="material-symbols-outlined text-primary text-4xl">star</span>
                      <span className="material-symbols-outlined text-primary text-4xl">star</span>
                    </div>
                    <p className="text-dark-charcoal dark:text-creamy-white mb-4 italic">
                      "SV Builders delivered exactly what they promised. Our new home in HSR Layout exceeded all expectations. Quality construction and timely delivery!"
                    </p>
                    <p className="font-bold text-dark-charcoal dark:text-creamy-white">- Ramesh K., Homeowner</p>
                  </div>
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      <span className="material-symbols-outlined text-primary text-4xl">star</span>
                      <span className="material-symbols-outlined text-primary text-4xl">star</span>
                      <span className="material-symbols-outlined text-primary text-4xl">star</span>
                      <span className="material-symbols-outlined text-primary text-4xl">star</span>
                      <span className="material-symbols-outlined text-primary text-4xl">star</span>
                    </div>
                    <p className="text-dark-charcoal dark:text-creamy-white mb-4 italic">
                      "Excellent service from start to finish. The team was professional, responsive, and the amenities at Koramangala project are top-notch."
                    </p>
                    <p className="font-bold text-dark-charcoal dark:text-creamy-white">- Priya S., Investor</p>
                  </div>
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      <span className="material-symbols-outlined text-primary text-4xl">star</span>
                      <span className="material-symbols-outlined text-primary text-4xl">star</span>
                      <span className="material-symbols-outlined text-primary text-4xl">star</span>
                      <span className="material-symbols-outlined text-primary text-4xl">star</span>
                      <span className="material-symbols-outlined text-primary text-4xl">star</span>
                    </div>
                    <p className="text-dark-charcoal dark:text-creamy-white mb-4 italic">
                      "Best decision we made! SV Builders' attention to detail and commitment to quality is unmatched. Highly recommend for anyone looking for a home in Bangalore."
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
                    Find answers to commonly asked questions about SV Builders and our projects.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">What areas does SV Builders serve in Bangalore?</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                      SV Builders serves major areas in Bangalore including HSR Layout, Koramangala, Whitefield, Electronic City, Yelahanka, and many other prime locations across the city.
                    </p>
                  </div>
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">What types of projects does SV Builders offer?</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                      We offer residential apartments in various configurations (2 BHK, 3 BHK, 4 BHK), commercial spaces, and turnkey individual home construction services across Bangalore.
                    </p>
                  </div>
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">Are SV Builders projects RERA approved?</h3>
                    <p className="text-dark-charcoal/70 dark:text-creamy-white/70">
                      Yes, all our projects comply with RERA regulations. We ensure all necessary approvals and certifications are in place before project launch.
                    </p>
                  </div>
                  <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-3 font-display text-dark-charcoal dark:text-creamy-white">What amenities are included in SV Builders projects?</h3>
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

        {/* Floating CTA Button - Right side on desktop, bottom on mobile */}
        <button
          onClick={scrollToInquiry}
          className="fixed right-6 bottom-24 md:bottom-6 z-50 bg-primary text-white rounded-full p-4 shadow-2xl hover:bg-primary/90 hover:scale-110 transition-all duration-300 flex items-center justify-center gap-2 group"
          aria-label="Contact us"
        >
          <span className="material-symbols-outlined">phone</span>
          <span className="hidden md:block font-bold">Contact Us</span>
          <span className="md:hidden font-bold text-sm">Call</span>
        </button>
    </div>
    </>
  );
}

export default App;
