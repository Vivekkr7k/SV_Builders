import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <nav className="bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md transition-all duration-300 fixed top-0 left-0 right-0 z-50 border-b border-solid border-creamy-white/50 dark:border-dark-charcoal/20 shadow-md">
      {/* Top Bar - Social Media, Contact Details, and Contact Button */}
      <div className="bg-primary/10 dark:bg-primary/20 border-b border-solid border-creamy-white/30 dark:border-dark-charcoal/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 sm:h-12 py-2">
            {/* Left Side: Social Media Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a 
                href="https://www.instagram.com/svbuilders_official/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors p-1"
                aria-label="Instagram"
                title="Follow us on Instagram"
              >
                <svg aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.465c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2h.001zm-1.04 2.295c-1.01.048-1.62.21-2.126.41a3.006 3.006 0 00-1.12 1.12c-.2.506-.362 1.116-.41 2.126-.048 1.008-.06 1.343-.06 3.559s.012 2.551.06 3.559c.048 1.01.21 1.62.41 2.126a3.006 3.006 0 001.12 1.12c.506.2 1.116.362 2.126.41 1.008.048 1.343.06 3.559.06s2.551-.012 3.559-.06c1.01-.048 1.62-.21 2.126-.41a3.006 3.006 0 001.12-1.12c.2-.506.362-1.116.41-2.126.048-1.008.06-1.343.06-3.559s-.012-2.551-.06-3.559c-.048-1.01-.21-1.62-.41-2.126a3.006 3.006 0 00-1.12-1.12c-.506-.2-1.116-.362-2.126-.41-1.008-.048-1.343-.06-3.559-.06s-2.551.012-3.559.06zm2.468 1.916a4.498 4.498 0 100 8.997 4.498 4.498 0 000-8.997zm-2.247 4.498a2.248 2.248 0 114.495 0 2.248 2.248 0 01-4.495 0zm6.06-5.283a1.12 1.12 0 100 2.24 1.12 1.12 0 000-2.24z" fillRule="evenodd"></path>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61581434408974" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors p-1"
                aria-label="Facebook"
                title="Follow us on Facebook"
              >
                <svg aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                </svg>
              </a>
              <a 
                href="mailto:svbuilders.mm@gmail.com" 
                className="text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors p-1"
                aria-label="Email"
                title="Send us an email"
              >
                <svg aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@SVBuildersandDevelopers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors p-1"
                aria-label="YouTube"
                title="Subscribe to our YouTube channel"
              >
                <svg aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/svbuilders80" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors p-1"
                aria-label="X (Twitter)"
                title="Follow us on X (Twitter)"
              >
                <svg aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            {/* Right Side: Contact Details and Contact Button */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Phone Number */}
              <a
                href="tel:+917505205205"
                className="flex items-center gap-1.5 text-xs sm:text-sm text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors"
                title="Call Us"
              >
                <span className="material-symbols-outlined text-sm sm:text-base">phone</span>
                <span className="hidden sm:inline">+91 75052 05205</span>
                <span className="sm:hidden">Call</span>
              </a>

              {/* Email */}
              <a
                href="mailto:svbuilders.mm@gmail.com"
                className="flex items-center gap-1.5 text-xs sm:text-sm text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors"
                title="Email Us"
              >
                <span className="material-symbols-outlined text-sm sm:text-base">email</span>
                <span className="hidden md:inline">svbuilders.mm@gmail.com</span>
                <span className="md:hidden sm:inline">Email</span>
                <span className="sm:hidden">Mail</span>
              </a>

              {/* Contact Button */}
              <button
                onClick={() => {
                  if (location.pathname === '/') {
                    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#inquiry-form';
                  }
                }}
                className="flex items-center justify-center gap-1 rounded-md h-7 sm:h-8 px-2 sm:px-3 bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
                title="Contact Us"
              >
                <span className="material-symbols-outlined text-sm sm:text-base">contact_support</span>
                <span className="hidden sm:inline">Contact</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Bigger, no text */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0" title="SV Builders and Developers - Home">
            <img 
              src="/logo.png" 
              alt="SV Builders and Developers Logo" 
              title="SV Builders and Developers Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                title={link.label === 'Home' ? 'Go to homepage' : link.label === 'Projects' ? 'View our projects' : link.label === 'About Us' ? 'Learn about us' : link.label === 'Services' ? 'Our services' : 'Read our blog'}
                className={`text-base font-semibold leading-normal transition-colors whitespace-nowrap ${
                  isActive(link.path)
                    ? 'text-primary font-bold'
                    : 'text-dark-charcoal dark:text-creamy-white hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side: Call Button and Enquire Button */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            {/* Call Button */}
            <a
              href="tel:+917505205205"
              className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-green-600 text-white text-sm font-bold leading-normal hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl whitespace-nowrap"
              title="Call Now"
              aria-label="Call Now"
            >
              <span className="material-symbols-outlined text-lg">phone</span>
              <span className="hidden lg:inline">Call</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-md text-dark-charcoal dark:text-creamy-white hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-solid border-creamy-white/50 dark:border-dark-charcoal/20 bg-background-light dark:bg-background-dark">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                title={link.label === 'Home' ? 'Go to homepage' : link.label === 'Projects' ? 'View our projects' : link.label === 'About Us' ? 'Learn about us' : link.label === 'Services' ? 'Our services' : 'Read our blog'}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary font-bold bg-primary/10'
                    : 'text-dark-charcoal dark:text-creamy-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Social Media Links - Mobile */}
            <div className="flex items-center justify-center gap-4 pt-2 pb-2 border-t border-creamy-white/50 dark:border-dark-charcoal/20">
              <a 
                href="https://www.instagram.com/svbuilders_official/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors"
                aria-label="Instagram"
                title="Follow us on Instagram"
              >
                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.465c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2h.001zm-1.04 2.295c-1.01.048-1.62.21-2.126.41a3.006 3.006 0 00-1.12 1.12c-.2.506-.362 1.116-.41 2.126-.048 1.008-.06 1.343-.06 3.559s.012 2.551.06 3.559c.048 1.01.21 1.62.41 2.126a3.006 3.006 0 001.12 1.12c.506.2 1.116.362 2.126.41 1.008.048 1.343.06 3.559.06s2.551-.012 3.559-.06c1.01-.048 1.62-.21 2.126-.41a3.006 3.006 0 001.12-1.12c.2-.506.362-1.116.41-2.126.048-1.008.06-1.343.06-3.559s-.012-2.551-.06-3.559c-.048-1.01-.21-1.62-.41-2.126a3.006 3.006 0 00-1.12-1.12c-.506-.2-1.116-.362-2.126-.41-1.008-.048-1.343-.06-3.559-.06s-2.551.012-3.559.06zm2.468 1.916a4.498 4.498 0 100 8.997 4.498 4.498 0 000-8.997zm-2.247 4.498a2.248 2.248 0 114.495 0 2.248 2.248 0 01-4.495 0zm6.06-5.283a1.12 1.12 0 100 2.24 1.12 1.12 0 000-2.24z" fillRule="evenodd"></path>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61581434408974" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors"
                aria-label="Facebook"
                title="Follow us on Facebook"
              >
                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                </svg>
              </a>
              <a 
                href="mailto:svbuilders.mm@gmail.com" 
                className="text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors"
                aria-label="Email"
                title="Send us an email"
              >
                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@SVBuildersandDevelopers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors"
                aria-label="YouTube"
                title="Subscribe to our YouTube channel"
              >
                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/svbuilders80" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors"
                aria-label="X (Twitter)"
                title="Follow us on X (Twitter)"
              >
                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
            <a
              href="tel:+917505205205"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-3 rounded-lg text-base font-bold text-center bg-green-600 text-white hover:bg-green-700 transition-colors mb-2"
              title="Call Now"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

