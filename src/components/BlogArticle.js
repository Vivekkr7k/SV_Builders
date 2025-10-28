import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function BlogArticle() {
  const { id } = useParams();

  const articles = {
    1: {
      title: "5 Things to Consider When Buying Your First Home",
      category: "Tips & Advice",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
      date: "January 15, 2024",
      author: "Sarah Johnson",
      content: `
        <p className="mb-4">Buying your first home is an exciting milestone, but it can also be overwhelming. Here are five essential factors every first-time homebuyer should consider:</p>
        
        <h3 className="text-2xl font-bold mb-3">1. Financial Readiness</h3>
        <p className="mb-4">Before you start house hunting, assess your financial situation. Calculate how much you can afford, considering your income, debts, and other expenses. Get pre-approved for a mortgage to understand your budget and strengthen your offer when you find the right property.</p>
        
        <h3 className="text-2xl font-bold mb-3">2. Location, Location, Location</h3>
        <p className="mb-4">The location of your home affects your daily life and future resale value. Consider proximity to work, schools, shopping centers, and other amenities. Research the neighborhood's safety, property values, and potential for growth.</p>
        
        <h3 className="text-2xl font-bold mb-3">3. Home Inspection is Crucial</h3>
        <p className="mb-4">Never skip a professional home inspection. It can reveal hidden issues like structural problems, plumbing issues, or electrical concerns that could cost thousands to repair. An inspection gives you negotiating power or the option to walk away.</p>
        
        <h3 className="text-2xl font-bold mb-3">4. Think Long-Term</h3>
        <p className="mb-4">Consider your future needs. Will this home accommodate your family if it grows? Are you planning to stay in the area long-term? Think about resale value and the home's potential for appreciation.</p>
        
        <h3 className="text-2xl font-bold mb-3">5. Understand All Costs</h3>
        <p className="mb-4">Beyond the purchase price, factor in closing costs, property taxes, insurance, maintenance, and potential homeowners association fees. Create a realistic budget that includes all ongoing expenses to avoid financial stress.</p>
        
        <p className="mb-4">Remember, buying your first home is a significant investment. Take your time, do your research, and work with experienced professionals who can guide you through the process. With careful planning and consideration, you'll find the perfect home that fits both your needs and your budget.</p>
      `
    },
    2: {
      title: "Real Estate Market Trends in 2024",
      category: "Market Insights",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
      date: "February 10, 2024",
      author: "Michael Chen",
      content: `
        <p className="mb-4">As we navigate through 2024, the real estate market continues to evolve with new trends shaping the industry. Here's what investors and homebuyers need to know:</p>
        
        <h3 className="text-2xl font-bold mb-3">Sustainable Living Takes Center Stage</h3>
        <p className="mb-4">Eco-friendly features are no longer optional—they're expected. Properties with solar panels, energy-efficient appliances, and sustainable building materials command higher prices and attract more buyers. Green certifications like LEED are becoming selling points.</p>
        
        <h3 className="text-2xl font-bold mb-3">The Rise of Smart Homes</h3>
        <p className="mb-4">Technology integration is reshaping buyer expectations. Smart home features, from automated lighting to security systems, are becoming standard amenities. Homes equipped with modern technology sell faster and at premium prices.</p>
        
        <h3 className="text-2xl font-bold mb-3">Suburban Renaissance</h3>
        <p className="mb-4">While urban markets remain strong, suburban and rural areas are experiencing increased demand. Remote work capabilities have made location flexibility possible, driving growth in previously overlooked markets.</p>
        
        <h3 className="text-2xl font-bold mb-3">Investment Opportunities</h3>
        <p className="mb-4">Real estate investment continues to be a solid strategy for wealth building. Rental property demand is high, and investors are diversifying portfolios with mixed-use developments and commercial spaces.</p>
        
        <p className="mb-4">Staying informed about market trends helps you make smarter decisions whether you're buying your first home, upgrading, or investing in real estate. The key is to understand the broader economic landscape and how it affects property values and opportunities.</p>
      `
    },
    3: {
      title: "Maximizing Your Property's Value",
      category: "Home Improvement",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80",
      date: "March 5, 2024",
      author: "Emily Rodriguez",
      content: `
        <p className="mb-4">Increasing your property's value doesn't always require major renovations. Here are cost-effective strategies that can significantly boost your home's market worth:</p>
        
        <h3 className="text-2xl font-bold mb-3">Curb Appeal Matters</h3>
        <p className="mb-4">First impressions are everything. A fresh coat of paint, well-maintained landscaping, and a welcoming front door can increase your home's value by up to 7%. Simple improvements like clean gutters, trimmed hedges, and attractive lighting make a huge difference.</p>
        
        <h3 className="text-2xl font-bold mb-3">Kitchen and Bathroom Updates</h3>
        <p className="mb-4">These rooms offer the best return on investment. You don't need a complete remodel—refinishing cabinets, updating fixtures, and replacing countertops can transform the space without breaking the bank. Modern, neutral designs appeal to the broadest range of buyers.</p>
        
        <h3 className="text-2xl font-bold mb-3">Energy Efficiency</h3>
        <p className="mb-4">Upgrading insulation, installing energy-efficient windows, and replacing old HVAC systems can reduce utility costs and increase property value. Buyers are willing to pay more for homes with lower operating costs.</p>
        
        <h3 className="text-2xl font-bold mb-3">Create More Space</h3>
        <p className="mb-4">Extra square footage commands higher prices. Consider finishing basements, adding decks, or converting attics. Even the illusion of more space through better organization and decluttering can make rooms feel larger.</p>
        
        <h3 className="text-2xl font-bold mb-3">Smart Home Features</h3>
        <p className="mb-4">Installing smart thermostats, security systems, and automated lighting adds modern appeal and can increase home value. These technologies not only attract buyers but also reduce long-term maintenance costs.</p>
        
        <p className="mb-4">The key to maximizing your property's value is to focus on improvements that appeal to today's buyers while maintaining your budget. Strategic upgrades that enhance functionality, aesthetics, and efficiency provide the best returns on investment.</p>
      `
    }
  };

  const article = articles[id] || articles[1];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      
      {/* Hero Image */}
      <div className="relative h-64 md:h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${article.image}")` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl shadow-lg p-8 md:p-12">
          <div className="mb-6">
            <div className="text-primary text-sm font-bold uppercase mb-4">{article.category}</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-charcoal dark:text-creamy-white mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-dark-charcoal/70 dark:text-creamy-white/70 text-sm">
              <span>{article.date}</span>
              <span>•</span>
              <span>By {article.author}</span>
            </div>
          </div>

          <div 
            className="prose prose-lg max-w-none text-dark-charcoal dark:text-creamy-white"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-12 pt-8 border-t border-light-taupe/50 dark:border-creamy-white/20">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default BlogArticle;

