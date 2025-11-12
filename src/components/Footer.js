import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const bangaloreAreas = [
    "HSR Layout", "Koramangala", "Whitefield", "Electronic City", "Yelahanka",
    "Indiranagar", "JP Nagar", "BTM Layout", "Bannerghatta Road", "Malleshwaram",
    "Rajajinagar", "Yeshwanthpur", "Hebbal", "Marathahalli", "KR Puram"
  ];

  return (
    <footer className="bg-creamy-white dark:bg-dark-charcoal/50 py-12 px-4 sm:px-10 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold font-display text-dark-charcoal dark:text-creamy-white mb-3">SV Builders</h3>
            <p className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70 mb-4">
              Leading real estate developer in Bangalore with 25+ years of experience. We specialize in premium residential projects across Bangalore's most sought-after neighborhoods.
            </p>
            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a 
                href="https://www.instagram.com/svbuilders_official/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors"
                aria-label="Instagram"
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
              >
                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                </svg>
              </a>
              <a 
                href="mailto:svbuilders.mm@gmail.com" 
                className="text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors"
                aria-label="Email"
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
              >
                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-display text-dark-charcoal dark:text-creamy-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70 hover:text-primary transition-colors" to="/projects">Our Projects</Link></li>
              <li><Link className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70 hover:text-primary transition-colors" to="/about">About Us</Link></li>
              <li><Link className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70 hover:text-primary transition-colors" to="/services">Services</Link></li>
              <li><Link className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70 hover:text-primary transition-colors" to="/blog">Blog</Link></li>
              <li><Link className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70 hover:text-primary transition-colors" to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70 hover:text-primary transition-colors" to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold font-display text-dark-charcoal dark:text-creamy-white mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm text-dark-charcoal/70 dark:text-creamy-white/70">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-lg">email</span>
                <span>contact@svbuilders.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-lg">phone</span>
                <span>+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>

          {/* Major Areas in Bangalore */}
          <div>
            <h3 className="text-lg font-bold font-display text-dark-charcoal dark:text-creamy-white mb-3">Our Services Areas</h3>
            <ul className="space-y-1">
              {bangaloreAreas.map((area, index) => (
                <li key={index}>
                  <Link 
                    className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70 hover:text-primary transition-colors"
                    to={`/projects?area=${area.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-light-taupe/50 dark:border-creamy-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark-charcoal/70 dark:text-creamy-white/70">
            <p>© {new Date().getFullYear()} SV Builders. All Rights Reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
