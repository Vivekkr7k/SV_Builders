import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchValue, setSearchValue] = useState('');

  const blogPosts = [
    {
      title: "Designing Your Dream Home: A Step-by-Step Guide",
      description: "From inspiration to execution, learn how to bring your vision to life with our comprehensive guide.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-XqxCIFUimjSeFoxO3DRkrF0Z5P0_GBbQy2SYfZ6B1C9Wr-jQ43F8hTyK8f84Kd7_nt1SY5F4ab_udrmyJlpc1odR6fadDYTCNxcy8VGou_Uxx56PGL5IncW8kmuzg6whdO_I9ZjTi1pU38gwJuXliyfN1GizbqlQre2F6ltN5-eugHYOHN2eOAoWvrpSNRwuYrYOa9RH5iIJpQ6ZrfAI-Uyn2lY1bPrUbOvIbWRBY7a4wHAXe7CMzBEjG6Ec5zJJjppiPf1IZUg",
      alt: "Architectural sketch of a modern house on a blueprint."
    },
    {
      title: "The Rise of Sustainable Architecture",
      description: "Discover how eco-friendly materials and practices are shaping the future of building design.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZsuXwuOZsAX_rkDNx1Hq1oAMRPGEy3Lg8d3OZ5eYGC2cNXazxKRdakBDi8x0qxG6LPfRgYMCv6om2knxZZEUOksCPE0pJCOzQtWqa60qXG_FtKc0tUDP0aujlEalIAEnRB9orFg2Uapt2LmbY93RnZdeek8oNTLHB-Ytax_iI8g_2Qsg8nDymAkSmXip_0KJyZAAvl8J9e6pAFvjMl9Au6PuTBwbAKwZxQDQPugXpIN2S50G2ut5I5KB6iSKaDKprTQy_gys7z28",
      alt: "Modern building with a green roof and solar panels."
    },
    {
      title: "5 Ways to Maximize Natural Light in Your Home",
      description: "Simple yet effective techniques to brighten up your living spaces and create a more inviting atmosphere.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4ulZ6wStDecbiLCuLXSwa8g0hR4eyMGbgxm2aTmo7Elh1A-vmujvXC7GebfW6qu3gELM6RKaO7iKWfUeLJmJgblekbxs5BgJNKx8glayRGeMTofHAkrWzyNHN3vpk-QBpwIy-gef0XF4XjDbqJ4nJazK3PYCCqpjDL3Jk4M3d7ZpRHyFZSkwdETSX4PYawdgCktRYEWYZ9eytvLaEryzmbf344HQcY_gv_s9wX--btBMeurxcyMSd_yVN5cBOQFwpYO-4V-SHsDo",
      alt: "A bright living room with large windows showcasing natural light."
    },
    {
      title: "Investing in Luxury: A Guide to High-End Real Estate",
      description: "An in-depth look at the world of luxury real estate and how to make informed investment decisions.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDACpAqt1g2PW-X7dMiha3319OMHTf67bAu3qMe7sDcuobrsGAA5W22bIB4dHuRUBlIdu7hHSif2b59aJgVteYF2RMJj1z_S93iM1kPEQ1gt2Os8zUf7kAVPQ_dCkuBtQVIJWipAa1NNmDJxO4PdHUpdsBdLr5e3a-jnRqPQCZE_cOZDfEy_KMqChiSJNVSNxLHN4z4YiG2TCCBOlSEv_qI_4FZmTWE67g0HLu3RnjRzH6XsVBadRF9wlXcKHH63gOIQgZs1rOBlZ4",
      alt: "A luxurious villa with a swimming pool at sunset."
    },
    {
      title: "The Future of Smart Homes: What to Expect",
      description: "Explore the latest innovations in home automation and how they can enhance your lifestyle.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-Z9hjIVpzGC2BHLEnEXuDMTCqwHAtjx8BWpwtFGpWwbe9mcJIzVijbCSc_BdchF7re3H97V--Yjj71jUenGrx2fu7CVbD55GpL73WoX_vAeZnpW-HswXUXhGZG9UOsPvcsTpXBTgpp0Pjbfepgcvq_uc22yEVDVJLch1AmaW4dZrXl10S5NRlIb1xu1aXMWd40a5lXDHc-IISPX_7Xiyac_NJvpnVx-ffZK367bhj3rA4VhnQTPrjnLR4QGjBCu9419fwC-sICpU",
      alt: "A person interacting with a smart home control panel."
    },
    {
      title: "A Tour of the Most Expensive Penthouses in the World",
      description: "Step inside the most exclusive and opulent penthouses and discover what makes them so special.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMVRSjaySwjaLgxnXyANA7DQ-_PZyJAKVKSWEeeEfBoQE9fCcKBfzVaC3ap3lVgokJ2SXExQ3lps72uZJnQkS1uoZ_q9TthMRAniuOR1KI5oC78kEu586dzaGD4Y01IF3FJucZ9FMF1gjHy8rSwxfivXbo4XbxcGBSo8Xh2R4wz8-x5d1ROLCzmoS692l-0HWJ660kFyUAUAq_XC8fmLBZ-URMW5PMk2XMcJ2WR9hfMixl3QKvCkF0Y4btI5gHi92E67g-q-YKjyk",
      alt: "A stunning penthouse with a panoramic city view."
    }
  ];

  const categories = ['All', 'Architecture', 'Interior Design', 'Lifestyle', 'Market News'];

  return (
    <div className="relative w-full flex flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-body text-dark-charcoal dark:text-creamy-white">
      <Navbar />
      <div className="layout-container flex h-full grow flex-col">
        <main>
          {/* Hero Section */}
          <section className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full flex items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-[1]"></div>
            <div className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=100")` }}></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 w-full max-w-4xl mx-auto animate-fade-in py-8 sm:py-12">
              <div className="text-center space-y-3 sm:space-y-4 w-full">
                <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">Our Blog</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center leading-tight drop-shadow-2xl px-2">
                  The Art of <span className="text-white font-extrabold">Living</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white/90 font-light mt-2 sm:mt-3 max-w-2xl mx-auto px-2">
                  Explore the finest in real estate and design. Your daily dose of inspiration for a life well-lived.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20 px-4 sm:px-10">
            <div className="max-w-6xl mx-auto">
              {/* Category Filters */}
              <div className="flex gap-3 flex-wrap justify-center mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl px-4 sm:px-6 text-sm font-medium leading-normal transition-colors ${
                      activeCategory === category
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'bg-creamy-white dark:bg-light-taupe/20 border border-gray-300 dark:border-gray-600 text-dark-charcoal dark:text-creamy-white hover:bg-primary/10 dark:hover:bg-primary/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <div key={index} className="flex flex-col gap-4 group bg-creamy-white dark:bg-light-taupe/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover transform group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url("${post.image}")` }}
                    ></div>
                    <div className="flex flex-col gap-3 p-6">
                      <p className="text-primary text-xs font-bold uppercase tracking-wider">Article</p>
                      <h3 className="text-xl font-bold leading-normal font-display text-dark-charcoal dark:text-creamy-white">{post.title}</h3>
                      <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm font-normal leading-normal">{post.description}</p>
                      <Link to={`/blog/article/${index + 1}`} className="text-primary text-sm font-bold hover:underline inline-flex items-center gap-2 w-fit">
                        Read More
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-12 pb-8">
                <button className="flex size-10 items-center justify-center text-dark-charcoal dark:text-creamy-white hover:bg-primary/10 dark:hover:bg-primary/10 rounded-full transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="text-sm font-bold leading-normal flex size-10 items-center justify-center text-white bg-primary rounded-full hover:bg-primary/90">1</button>
                <button className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-dark-charcoal dark:text-creamy-white hover:bg-primary/10 dark:hover:bg-primary/10 rounded-full transition-colors">2</button>
                <button className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-dark-charcoal dark:text-creamy-white hover:bg-primary/10 dark:hover:bg-primary/10 rounded-full transition-colors">3</button>
                <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-dark-charcoal dark:text-creamy-white">...</span>
                <button className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-dark-charcoal dark:text-creamy-white hover:bg-primary/10 dark:hover:bg-primary/10 rounded-full transition-colors">10</button>
                <button className="flex size-10 items-center justify-center text-dark-charcoal dark:text-creamy-white hover:bg-primary/10 dark:hover:bg-primary/10 rounded-full transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Blog;

