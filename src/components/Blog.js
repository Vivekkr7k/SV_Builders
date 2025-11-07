import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchValue, setSearchValue] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Real Estate', 'Construction', 'Lifestyle', 'News', 'Tips', 'Other'];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/blogs?published=true');
      
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      
      const result = await response.json();
      setBlogPosts(result.data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setBlogPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    if (activeCategory !== 'All' && post.category !== activeCategory) {
      return false;
    }
    if (searchValue && !post.title.toLowerCase().includes(searchValue.toLowerCase()) && 
        !post.excerpt?.toLowerCase().includes(searchValue.toLowerCase())) {
      return false;
    }
    return true;
  });

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
              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <p className="text-dark-charcoal dark:text-creamy-white">Loading blogs...</p>
                </div>
              ) : filteredPosts.length === 0 ? (
                <div className="flex justify-center items-center py-12">
                  <p className="text-dark-charcoal dark:text-creamy-white">No blog posts found.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <div key={post._id} className="flex flex-col gap-4 group bg-creamy-white dark:bg-light-taupe/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover transform group-hover:scale-105 transition-transform duration-300"
                        style={{ backgroundImage: `url("${post.featuredImage || 'https://via.placeholder.com/400x300'}")` }}
                      ></div>
                      <div className="flex flex-col gap-3 p-6">
                        <p className="text-primary text-xs font-bold uppercase tracking-wider">{post.category}</p>
                        <h3 className="text-xl font-bold leading-normal font-display text-dark-charcoal dark:text-creamy-white">{post.title}</h3>
                        <p className="text-dark-charcoal/70 dark:text-creamy-white/70 text-sm font-normal leading-normal">{post.excerpt || 'No description available'}</p>
                        <Link to={`/blog/article/${post.slug || post._id}`} className="text-primary text-sm font-bold hover:underline inline-flex items-center gap-2 w-fit">
                          Read More
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}

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

