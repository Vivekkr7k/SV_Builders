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
    { path: '/projects', label: 'Properties' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <nav className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm transition-all duration-300 sticky top-0 z-50 border-b border-solid border-creamy-white/50 dark:border-dark-charcoal/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <div className="size-6 text-primary">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1.5l-10 9v12h20v-12l-10-9zm0 2.3l8 7.2v9h-16v-9l8-7.2zm-4 9.5h8v2h-8v-2zm0 4h8v2h-8v-2z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] font-display text-dark-charcoal dark:text-creamy-white">SV Builders</h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium leading-normal transition-colors ${
                  isActive(link.path)
                    ? 'text-primary font-bold'
                    : 'text-dark-charcoal dark:text-creamy-white hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                if (location.pathname === '/') {
                  document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#inquiry-form';
                }
              }}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg sm:rounded-xl h-10 px-5 sm:px-6 bg-primary text-white text-sm font-bold leading-normal hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <span className="truncate">Contact</span>
            </button>
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
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary font-bold bg-primary/10'
                    : 'text-dark-charcoal dark:text-creamy-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (location.pathname === '/') {
                  setTimeout(() => {
                    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  window.location.href = '/#inquiry-form';
                }
              }}
              className="block w-full py-3 rounded-lg text-base font-bold text-center bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

