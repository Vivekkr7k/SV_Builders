import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  const [searchValue, setSearchValue] = useState('');

  const team = [
    {
      name: "John Doe",
      role: "CEO",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBufDy9dy8dDFeDIWfMcB3IZJEHFCFxxu2uGnGaBsB49D-lZErbL4dC4F2pUbSPXlLxRcTJuYAWKUhNBFkGHEqM1M6E_ta-o90PGEjstkGwfiE0zQjF-N2G7-hCHvZfjnPcz1jbKHvzIGtSdIejUAmwmjA7RCWsFO-uqkNL13BLIogRWp8PG0-gi4LXlAVld9xhawu1f2UcaZKo1LrXbPaaFD92h2ouC66cTzgkQ9lbsAwa2Sc_GX1nPt6YyVQBSFFU8Mcm0eaI0cc",
      alt: "Professional headshot of John Doe, CEO"
    },
    {
      name: "Jane Smith",
      role: "Lead Architect",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx8bAHRy-oyx5JauK4V2oJzeu386ZDJ4O5ufg9h7bGo1a2nGQlUzjoRXf18AE34vam5J2BO_PLob22wJNQ3ZqrNuNeSjydZu09ET96E1itVyFEa8jV2qVVptHR2_6Imucb4dDLjsXF0-5g6wWR9KEZNuhk9tzjUM725Yx4I8n7Tv0Cw5EAq2bh8SxmWxpTsPfXH4Yv9tqmUJF_Klb9SjB6CYMXNVmZV2bpI4EO7JSPguGs0AOUMwtGvk12AcgWkVt6Z64AR7tLzqo",
      alt: "Professional headshot of Jane Smith, Lead Architect"
    },
    {
      name: "Peter Jones",
      role: "Senior Developer",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYggE6vbEYFNh9Z4b5QSILAp4vSX-pMjPPs4sjlRMFJomD4wj4Dwg0YsCC5OAN_GD-uxvMfszdVW5yHNUjirllB7cHqiF6Kkk4E68KNcJtGOsjAzUELHZrfon5eaB8fq676NGeA3GFHkhRulrSaX4e8o9ebiaw4FAHcTQfp-cgh6Sk-NFrw0xRZIVz-wmhU5uCEKWZFSRoJcAIO6vNHS9GaPCFlm4nujrgR37Md6gnaLVjF5UIxKXSNSEsrZ1_wSaE3KdO94J_pgo",
      alt: "Professional headshot of Peter Jones, Senior Developer"
    },
    {
      name: "Mary Williams",
      role: "Project Manager",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcWZ6FRts_cqjVqkoaYmBFBqWJLFOQ9tUFbkaM5NwOiBHWoku0CsrpF776ubZySapvuSIQascTN3lSO3FwYXZ9KAXKx7MZhxFdW0gXrxGLB1QajQTDoi3svbOA7OSzEz2j_U0QhoL08l9k506sUVOGoZ3ubSfY6zepLZIVSHutzQHDzjSKJO9_byifqU2BnnQ7-FMb4JxKmNtzq5Ehyvi8srERWZ4rQ_KhNlO64hItANEPN6Rxv8tMUomWzIq4xgwGxmf38JmxWA4",
      alt: "Professional headshot of Mary Williams, Project Manager"
    }
  ];

  const testimonials = [
    {
      name: "John & Jane Smith",
      text: "Working with Luxe Realty was a dream come true. They made the entire process seamless and enjoyable.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLt2QXiXXLGp-SVBdOrZ_A7qqvkKYscqdanqsU6LUfYUhsWLNnKt5FQbCXXhU2NGZl4O80oS7vL0--obvrnxoCp1zK4aFbb8wAQGubsBQgIfZrSXeIH89E-INc-6iBtXCRMovcJlFnsdRlvL7B8c-cSufD1kX0oFxRiuakVu4nGK_Vwrc2k_XOjbFIi1DzSmJH3dv2VXGUZkoWlfwxq9wVUoakoaeJS4iGN0bVrAkrqkm9SnBADKR2d1zHOvsL3-LySrmgbMdzy-s",
      alt: "A smiling couple in front of their new house"
    },
    {
      name: "The Williams Family",
      text: "We couldn't be happier with our new home. The attention to detail and quality of craftsmanship is second to none.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBctFs92Tea0_35EReFK1ZHCJiihibLhzN6tZxWFiMi8eFVt3cr1LJcoPMT2rw1qQ3VtN45NkVnvvdBCN394XjqR4e7try_gBYmfUD4USkElDaG-9ggKQBTdZlAoN8rDZZvfSaMN6yeoR7s6BBEG4TQ8u5vSNXuKDx6eLjrDkXL3h38pEe2NYxbgM56segjupBNIkmpipE1X8BOFQXR9FiPuv_yMODooQ84aCpAxbYsU_fcp5SCA9chx4_WkSU56uUbQiEcoeP2ykc",
      alt: "A happy family outside their suburban home"
    },
    {
      name: "Mr. & Mrs. Davis",
      text: "From the initial consultation to the final walkthrough, the team at Luxe Realty was professional and a pleasure to work with.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTqQ1hihVkoIpow3Tdg_Npu4i5M63wkzUQCdDs0SGnm5UobbV653AbQL3AqFzWRN7bH9U_WgADvK7a9t8A_hTdAPTI9MvOdOVitoh5lV8_XKD7W2QWfcOIgSlATjDbqMg-AmOd1GgN2_s7hNKV-WDSA0_wW7laZt3J7eAghaxNfO3fRrCQVEcJUNHCtK5UqMhXqux3P9K1YvdDSsTgxN8aaAzGatwFWKmTcRlsLeFO0Ns0LtmEHM1Pia1y7sgKFIHcylkqPb0daC8",
      alt: "An elegant couple shaking hands with a real estate agent"
    }
  ];

  return (
    <div className="relative w-full flex flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-body text-text-light dark:text-text-dark">
      <Navbar />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 md:px-10 lg:px-20 flex flex-1 justify-center py-4 sm:py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">
            {/* Hero Section */}
            <div className="w-full mb-8 sm:mb-12">
              <div className="flex min-h-[300px] sm:min-h-[400px] md:min-h-[480px] flex-col gap-4 sm:gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 sm:p-8 md:p-12" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlKwmM5mf40VMFvEEz1w3pdLpSHTgVPKFGeFf_Xlv50GDv9qORa1RV4Z63tewwnG7liVCpRDr4DTOwuXLv2j4bSd2jP1kDa8wyKoctcbXAlAwHbVQvQZI6dQVQNBHRBV9ILXszGsgea7Y1PQQh1hm6_x0hMwgzLk53DuzfoEmv2QxKZ1YSo88F_rmR2k97ADzBVNVkaPZsqUTMuanL3Xgy18B6WUQ-TVMqlM0z2armbzAXD0VKWMLy59FzoG11yjt8jBGn-rmnKm0")`
              }}>
                <div className="flex flex-col gap-2 sm:gap-3 text-center px-2">
                  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight">
                    About SV Builders
                  </h1>
                  <h2 className="text-white text-sm sm:text-base md:text-lg font-body font-normal leading-normal">
                    Leading real estate developer in Bangalore with 25+ years of excellence in creating premium residential spaces.
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center w-full px-4 max-w-2xl">
                  <Link to="/services" className="flex w-full sm:w-auto sm:min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg sm:rounded-xl h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 bg-primary text-white text-sm sm:text-base font-bold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <span className="truncate">Contact Us</span>
                  </Link>
                  <Link to="/projects" className="flex w-full sm:w-auto sm:min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg sm:rounded-xl h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 bg-white/90 text-dark-charcoal text-sm sm:text-base font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <span className="truncate">View Portfolio</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="py-6 sm:py-8 md:py-10 mb-8 sm:mb-12">
              <div className="space-y-8 sm:space-y-12">
                {/* Milestone 1 */}
                <div className="flex gap-4 sm:gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl md:text-4xl">domain</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-text-light dark:text-text-dark text-base sm:text-lg font-bold font-display mb-1">Founded - 25+ Years Ago</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-normal leading-normal">Bangalore, Karnataka, India</p>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="flex gap-4 sm:gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl md:text-4xl">apartment</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-text-light dark:text-text-dark text-base sm:text-lg font-bold font-display mb-1">150+ Completed Projects</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-normal leading-normal">Across Prime Locations in Bangalore</p>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="flex gap-4 sm:gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl md:text-4xl">groups</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-text-light dark:text-text-dark text-base sm:text-lg font-bold font-display mb-1">5000+ Happy Clients</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-normal leading-normal">Trusted by Homebuyers Across Bangalore</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="py-6 sm:py-8 md:py-10 text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 sm:mb-8">Meet Our Experts</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {team.map((member, index) => (
                  <div key={index} className="group relative rounded-xl overflow-hidden">
                    <div 
                      className="bg-cover bg-center flex flex-col justify-end p-3 sm:p-4 aspect-square transition-transform duration-300 group-hover:scale-105" 
                      style={{ backgroundImage: `url("${member.image}")` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="relative text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm sm:text-lg font-bold leading-tight">{member.name}</p>
                        <p className="text-xs sm:text-sm">{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision and Values Section */}
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 py-6 sm:py-8 md:py-10 mb-8 sm:mb-12">
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                <div className="lg:w-1/2">
                  <img 
                    alt="Interior of a luxurious modern living room" 
                    className="rounded-xl object-cover w-full h-[250px] sm:h-[350px] lg:h-[400px]" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH4b37a4TQwZLGXUVok-SWC8s63xtXeDiYLsjV05tNL9wxb_Wf_vsPrIpYjaOZ-xnWVgX0ybHIf8e9C-0cihVNpZV8dYZAhyZgMds2KyAWDSk-tJbFy1_GcGy4dfUtj83WTprZoS7rVn-C4euIZpJLrO-fPVvizh8LDeoVMVoUPVIAAxYp2AcTD30mW3gGP00aySquGESagauzjwpyNBvUlvIVEMU219J0NfVb_1Jsm0YOiYTTk-k5C-_AtW8Eovxm-2s1rqTsMNA" 
                  />
                </div>
                <div className="lg:w-1/2 flex flex-col gap-4 sm:gap-6">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <h1 className="text-text-light dark:text-text-dark tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-tight">
                      Our Mission & Values
                    </h1>
                    <p className="text-text-light dark:text-text-dark text-sm sm:text-base font-normal leading-relaxed">
                      SV Builders is committed to creating premium residential spaces that enhance quality of life in Bangalore. With over 25 years of experience, we have established ourselves as a trusted name in real estate development. Our mission is to deliver quality construction, timely completion, and exceptional customer service while maintaining the highest standards of integrity and transparency.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div className="flex gap-3 rounded-lg border border-accent/50 bg-background-light dark:bg-background-dark p-4 flex-col">
                      <span className="material-symbols-outlined text-primary text-2xl">handshake</span>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-text-light dark:text-text-dark text-base sm:text-lg font-bold font-display">Integrity</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-normal leading-normal">Transparency and honesty in all our dealings. RERA approved projects with complete documentation.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 rounded-lg border border-accent/50 bg-background-light dark:bg-background-dark p-4 flex-col">
                      <span className="material-symbols-outlined text-primary text-2xl">workspace_premium</span>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-text-light dark:text-text-dark text-base sm:text-lg font-bold font-display">Quality</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-normal leading-normal">Premium materials, superior construction, and world-class amenities in every project.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 rounded-lg border border-accent/50 bg-background-light dark:bg-background-dark p-4 flex-col">
                      <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-text-light dark:text-text-dark text-base sm:text-lg font-bold font-display">Timely Delivery</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-normal leading-normal">25+ years of proven track record in on-time project completion across Bangalore.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="py-6 sm:py-8 md:py-10 mb-8 sm:mb-12">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">Why Choose SV Builders?</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    SV Builders has been a trusted name in Bangalore's real estate sector for over 25 years. We specialize in developing premium residential projects across prime locations including HSR Layout, Koramangala, Whitefield, Electronic City, and Yelahanka.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Our commitment to quality construction, timely delivery, and customer satisfaction has earned us the trust of over 5000 happy clients. Every project we undertake is RERA approved and built with premium materials, modern amenities, and sustainable practices.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Whether you're looking for a 2 BHK apartment in a bustling IT corridor or a spacious 4 BHK villa in a serene neighborhood, SV Builders offers residential solutions tailored to your lifestyle and budget. We also provide turnkey individual home construction services for those seeking custom-designed homes.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center py-12 sm:py-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4 px-4">Begin Your Journey With Us</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 text-sm sm:text-base">Let us help you find the property of your dreams. Contact us today to start the conversation.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
                <Link to="/services" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg sm:rounded-xl h-12 px-6 sm:px-7 md:px-8 bg-primary text-white text-sm sm:text-base font-bold leading-normal hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <span className="truncate">Contact Us</span>
                </Link>
                <Link to="/projects" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg sm:rounded-xl h-12 px-6 sm:px-7 md:px-8 bg-white/90 dark:bg-background-dark/50 text-dark-charcoal dark:text-creamy-white text-sm sm:text-base font-bold leading-normal hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <span className="truncate">View Portfolio</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;

