import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-creamy-white dark:bg-dark-charcoal/50 py-12 px-4 sm:px-10 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold font-display text-dark-charcoal dark:text-creamy-white">SV Builders</h3>
          <p className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70 mt-2">Your gateway to the world's most exclusive properties.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold font-display text-dark-charcoal dark:text-creamy-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70 hover:text-primary transition-colors" to="/projects">Properties</Link></li>
            <li><Link className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70 hover:text-primary transition-colors" to="/about">About Us</Link></li>
            <li><Link className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70 hover:text-primary transition-colors" to="/services">Services</Link></li>
            <li><Link className="text-sm text-dark-charcoal/70 dark:text-creamy-white/70 hover:text-primary transition-colors" to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold font-display text-dark-charcoal dark:text-creamy-white">Contact Us</h3>
          <ul className="mt-4 space-y-2 text-sm text-dark-charcoal/70 dark:text-creamy-white/70">
            <li>Email: contact@svbuilders.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Luxury Lane, Metropolis</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold font-display text-dark-charcoal dark:text-creamy-white">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a className="text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors" href="#">
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
              </svg>
            </a>
            <a className="text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors" href="#">
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a className="text-dark-charcoal dark:text-creamy-white hover:text-primary transition-colors" href="#">
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.465c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2h.001zm-1.04 2.295c-1.01.048-1.62.21-2.126.41a3.006 3.006 0 00-1.12 1.12c-.2.506-.362 1.116-.41 2.126-.048 1.008-.06 1.343-.06 3.559s.012 2.551.06 3.559c.048 1.01.21 1.62.41 2.126a3.006 3.006 0 001.12 1.12c.506.2 1.116.362 2.126.41 1.008.048 1.343.06 3.559.06s2.551-.012 3.559-.06c1.01-.048 1.62-.21 2.126-.41a3.006 3.006 0 001.12-1.12c.2-.506.362-1.116.41-2.126.048-1.008.06-1.343.06-3.559s-.012-2.551-.06-3.559c-.048-1.01-.21-1.62-.41-2.126a3.006 3.006 0 00-1.12-1.12c-.506-.2-1.116-.362-2.126-.41-1.008-.048-1.343-.06-3.559-.06s-2.551.012-3.559.06zm2.468 1.916a4.498 4.498 0 100 8.997 4.498 4.498 0 000-8.997zm-2.247 4.498a2.248 2.248 0 114.495 0 2.248 2.248 0 01-4.495 0zm6.06-5.283a1.12 1.12 0 100 2.24 1.12 1.12 0 000-2.24z" fillRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-light-taupe/50 dark:border-creamy-white/20 text-center text-sm text-dark-charcoal/70 dark:text-creamy-white/70">
        <p>© 2024 SV Builders. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

