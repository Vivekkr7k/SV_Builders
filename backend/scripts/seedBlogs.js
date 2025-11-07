require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/database');
const Blog = require('../models/Blog');

// Helper function to generate slug
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

const sampleBlogs = [
  {
    title: "5 Things to Consider When Buying Your First Home",
    slug: "5-things-to-consider-when-buying-your-first-home",
    excerpt: "Essential factors that every first-time homebuyer should keep in mind for a successful purchase. From financial readiness to location selection, learn the key considerations.",
    content: `<p>Buying your first home is an exciting milestone, but it can also be overwhelming. Here are five essential factors every first-time homebuyer should consider:</p>
        
        <h3>1. Financial Readiness</h3>
        <p>Before you start house hunting, assess your financial situation. Calculate how much you can afford, considering your income, debts, and other expenses. Get pre-approved for a mortgage to understand your budget and strengthen your offer when you find the right property.</p>
        
        <h3>2. Location, Location, Location</h3>
        <p>The location of your home affects your daily life and future resale value. Consider proximity to work, schools, shopping centers, and other amenities. Research the neighborhood's safety, property values, and potential for growth.</p>
        
        <h3>3. Home Inspection is Crucial</h3>
        <p>Never skip a professional home inspection. It can reveal hidden issues like structural problems, plumbing issues, or electrical concerns that could cost thousands to repair. An inspection gives you negotiating power or the option to walk away.</p>
        
        <h3>4. Think Long-Term</h3>
        <p>Consider your future needs. Will this home accommodate your family if it grows? Are you planning to stay in the area long-term? Think about resale value and the home's potential for appreciation.</p>
        
        <h3>5. Understand All Costs</h3>
        <p>Beyond the purchase price, factor in closing costs, property taxes, insurance, maintenance, and potential homeowners association fees. Create a realistic budget that includes all ongoing expenses to avoid financial stress.</p>
        
        <p>Remember, buying your first home is a significant investment. Take your time, do your research, and work with experienced professionals who can guide you through the process. With careful planning and consideration, you'll find the perfect home that fits both your needs and your budget.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    author: "SV Builders",
    category: "Tips",
    tags: ["First-time buyers", "Home buying", "Real estate tips"],
    published: true,
    featured: true,
    views: 0
  },
  {
    title: "Real Estate Market Trends in 2024",
    slug: "real-estate-market-trends-in-2024",
    excerpt: "Stay informed about the latest market trends and how they might affect your property investment. Discover what's shaping the real estate landscape this year.",
    content: `<p>As we navigate through 2024, the real estate market continues to evolve with new trends shaping the industry. Here's what investors and homebuyers need to know:</p>
        
        <h3>Sustainable Living Takes Center Stage</h3>
        <p>Eco-friendly features are no longer optional—they're expected. Properties with solar panels, energy-efficient appliances, and sustainable building materials command higher prices and attract more buyers. Green certifications like LEED are becoming selling points.</p>
        
        <h3>The Rise of Smart Homes</h3>
        <p>Technology integration is reshaping buyer expectations. Smart home features, from automated lighting to security systems, are becoming standard amenities. Homes equipped with modern technology sell faster and at premium prices.</p>
        
        <h3>Suburban Renaissance</h3>
        <p>While urban markets remain strong, suburban and rural areas are experiencing increased demand. Remote work capabilities have made location flexibility possible, driving growth in previously overlooked markets.</p>
        
        <h3>Investment Opportunities</h3>
        <p>Real estate investment continues to be a solid strategy for wealth building. Rental property demand is high, and investors are diversifying portfolios with mixed-use developments and commercial spaces.</p>
        
        <p>Staying informed about market trends helps you make smarter decisions whether you're buying your first home, upgrading, or investing in real estate. The key is to understand the broader economic landscape and how it affects property values and opportunities.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
    author: "SV Builders",
    category: "News",
    tags: ["Market trends", "Real estate", "Investment"],
    published: true,
    featured: true,
    views: 0
  },
  {
    title: "Maximizing Your Property's Value",
    slug: "maximizing-your-property-value",
    excerpt: "Increasing your property's value doesn't always require major renovations. Here are cost-effective strategies that can significantly boost your home's market worth.",
    content: `<p>Increasing your property's value doesn't always require major renovations. Here are cost-effective strategies that can significantly boost your home's market worth:</p>
        
        <h3>Curb Appeal Matters</h3>
        <p>First impressions are everything. A fresh coat of paint, well-maintained landscaping, and a welcoming front door can increase your home's value by up to 7%. Simple improvements like clean gutters, trimmed hedges, and attractive lighting make a huge difference.</p>
        
        <h3>Kitchen and Bathroom Updates</h3>
        <p>These rooms offer the best return on investment. You don't need a complete remodel—refinishing cabinets, updating fixtures, and replacing countertops can transform the space without breaking the bank. Modern, neutral designs appeal to the broadest range of buyers.</p>
        
        <h3>Energy Efficiency</h3>
        <p>Upgrading insulation, installing energy-efficient windows, and replacing old HVAC systems can reduce utility costs and increase property value. Buyers are willing to pay more for homes with lower operating costs.</p>
        
        <h3>Create More Space</h3>
        <p>Extra square footage commands higher prices. Consider finishing basements, adding decks, or converting attics. Even the illusion of more space through better organization and decluttering can make rooms feel larger.</p>
        
        <h3>Smart Home Features</h3>
        <p>Installing smart thermostats, security systems, and automated lighting adds modern appeal and can increase home value. These technologies not only attract buyers but also reduce long-term maintenance costs.</p>
        
        <p>The key to maximizing your property's value is to focus on improvements that appeal to today's buyers while maintaining your budget. Strategic upgrades that enhance functionality, aesthetics, and efficiency provide the best returns on investment.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80",
    author: "SV Builders",
    category: "Tips",
    tags: ["Home improvement", "Property value", "Renovation"],
    published: true,
    featured: false,
    views: 0
  },
  {
    title: "The Future of Sustainable Construction",
    slug: "the-future-of-sustainable-construction",
    excerpt: "Discover how eco-friendly materials and practices are shaping the future of building design. Learn about green building technologies and their impact on the construction industry.",
    content: `<p>The construction industry is undergoing a significant transformation as sustainability becomes a core focus. Here's how eco-friendly practices are reshaping the future of building:</p>
        
        <h3>Green Building Materials</h3>
        <p>Innovative materials like recycled steel, bamboo, reclaimed wood, and eco-friendly concrete alternatives are becoming mainstream. These materials not only reduce environmental impact but also offer superior durability and performance.</p>
        
        <h3>Energy-Efficient Design</h3>
        <p>Modern architecture emphasizes passive solar design, natural ventilation, and optimal insulation. Buildings are designed to minimize energy consumption while maximizing comfort and livability.</p>
        
        <h3>Renewable Energy Integration</h3>
        <p>Solar panels, wind turbines, and geothermal systems are being integrated into new constructions from the ground up. These renewable energy sources reduce long-term operating costs and carbon footprints.</p>
        
        <h3>Water Conservation</h3>
        <p>Rainwater harvesting, greywater recycling, and low-flow fixtures are standard features in sustainable buildings. These systems significantly reduce water consumption and utility bills.</p>
        
        <h3>Smart Building Technologies</h3>
        <p>IoT sensors and automation systems optimize energy usage, monitor air quality, and manage resources efficiently. Smart buildings adapt to occupancy and environmental conditions in real-time.</p>
        
        <p>At SV Builders, we're committed to incorporating sustainable practices into every project. Our green building approach ensures that your investment not only benefits you today but contributes to a better tomorrow for future generations.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    author: "SV Builders",
    category: "Construction",
    tags: ["Sustainability", "Green building", "Eco-friendly"],
    published: true,
    featured: false,
    views: 0
  },
  {
    title: "Designing Your Dream Home: A Step-by-Step Guide",
    slug: "designing-your-dream-home-step-by-step-guide",
    excerpt: "From inspiration to execution, learn how to bring your vision to life with our comprehensive guide to designing your perfect home.",
    content: `<p>Designing your dream home is an exciting journey that combines creativity, functionality, and personal style. Here's a step-by-step guide to help you navigate the process:</p>
        
        <h3>1. Define Your Vision</h3>
        <p>Start by creating a vision board with images, colors, and styles that inspire you. Consider your lifestyle, family needs, and long-term goals. Think about how you want to feel in your home.</p>
        
        <h3>2. Set Your Budget</h3>
        <p>Establish a realistic budget that includes construction costs, design fees, permits, and a contingency fund. Work with financial advisors and contractors to understand all associated expenses.</p>
        
        <h3>3. Choose Your Location</h3>
        <p>Location impacts both your daily life and property value. Consider factors like commute, schools, amenities, and neighborhood character. Visit potential sites at different times of day.</p>
        
        <h3>4. Work with Professionals</h3>
        <p>Engage experienced architects, designers, and builders who understand your vision. Their expertise will help you avoid costly mistakes and ensure your dream home becomes a reality.</p>
        
        <h3>5. Plan Your Layout</h3>
        <p>Consider how rooms flow together and how you'll use each space. Think about natural light, privacy, and accessibility. Create spaces that adapt to your changing needs.</p>
        
        <h3>6. Select Materials and Finishes</h3>
        <p>Choose materials that balance aesthetics, durability, and maintenance requirements. Consider long-term costs and environmental impact when making selections.</p>
        
        <p>Remember, designing your dream home is a collaborative process. Take your time, ask questions, and enjoy the journey. At SV Builders, we're here to guide you every step of the way.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    author: "SV Builders",
    category: "Lifestyle",
    tags: ["Home design", "Architecture", "Interior design"],
    published: true,
    featured: false,
    views: 0
  },
  {
    title: "5 Ways to Maximize Natural Light in Your Home",
    slug: "5-ways-to-maximize-natural-light-in-your-home",
    excerpt: "Simple yet effective techniques to brighten up your living spaces and create a more inviting atmosphere. Natural light can transform any room.",
    content: `<p>Natural light can transform any space, making it feel larger, more welcoming, and more energy-efficient. Here are five effective ways to maximize natural light in your home:</p>
        
        <h3>1. Strategic Window Placement</h3>
        <p>Position windows to capture morning and afternoon sunlight. Consider skylights and clerestory windows for additional light without compromising privacy. Large, floor-to-ceiling windows can dramatically increase natural illumination.</p>
        
        <h3>2. Use Light Colors</h3>
        <p>Light-colored walls, ceilings, and floors reflect light throughout the space. White, cream, and pale tones create a bright, airy feeling. High-gloss finishes can further enhance light reflection.</p>
        
        <h3>3. Remove Obstructions</h3>
        <p>Keep window areas clear of heavy furniture and dark curtains. Use sheer or light-colored window treatments that allow light to filter through while maintaining privacy.</p>
        
        <h3>4. Reflective Surfaces</h3>
        <p>Mirrors strategically placed opposite windows can double the amount of natural light in a room. Glass tabletops, metallic accents, and polished surfaces also help bounce light around the space.</p>
        
        <h3>5. Open Floor Plans</h3>
        <p>Removing unnecessary walls allows light to flow freely throughout your home. Open layouts create brighter, more connected spaces that feel larger and more inviting.</p>
        
        <p>Maximizing natural light not only enhances your home's aesthetics but also reduces energy costs and improves your overall well-being. These simple changes can make a significant difference in how your spaces look and feel.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
    author: "SV Builders",
    category: "Lifestyle",
    tags: ["Natural light", "Home improvement", "Interior design"],
    published: true,
    featured: false,
    views: 0
  },
  {
    title: "Investing in Luxury Real Estate: A Complete Guide",
    slug: "investing-in-luxury-real-estate-complete-guide",
    excerpt: "An in-depth look at the world of luxury real estate and how to make informed investment decisions. Discover what makes a property truly luxurious.",
    content: `<p>Luxury real estate represents more than just high-end properties—it's about exceptional quality, prime locations, and unique features. Here's your guide to investing in luxury real estate:</p>
        
        <h3>What Defines Luxury Real Estate</h3>
        <p>Luxury properties are characterized by premium locations, exceptional craftsmanship, high-end finishes, and exclusive amenities. They often feature unique architectural designs, spacious layouts, and state-of-the-art technology.</p>
        
        <h3>Location is Paramount</h3>
        <p>Prime locations in prestigious neighborhoods, waterfront properties, and properties with exceptional views command premium prices. Location quality significantly impacts both lifestyle and investment value.</p>
        
        <h3>Quality and Craftsmanship</h3>
        <p>Luxury homes feature premium materials, custom designs, and attention to detail. From Italian marble to custom millwork, every element reflects superior quality and craftsmanship.</p>
        
        <h3>Exclusive Amenities</h3>
        <p>Private pools, home theaters, wine cellars, gyms, and smart home systems are standard in luxury properties. These amenities enhance lifestyle and property value.</p>
        
        <h3>Investment Considerations</h3>
        <p>Luxury real estate can be an excellent long-term investment, but requires careful research. Consider market trends, property appreciation potential, and maintenance costs before making decisions.</p>
        
        <p>Investing in luxury real estate requires expertise and careful consideration. Work with experienced professionals who understand the luxury market and can guide you through the process. At SV Builders, we specialize in creating and identifying exceptional properties that represent true value.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
    author: "SV Builders",
    category: "Real Estate",
    tags: ["Luxury real estate", "Investment", "Premium properties"],
    published: true,
    featured: true,
    views: 0
  },
  {
    title: "The Rise of Smart Homes: What to Expect in 2024",
    slug: "the-rise-of-smart-homes-what-to-expect-in-2024",
    excerpt: "Explore the latest innovations in home automation and how they can enhance your lifestyle. Smart home technology is reshaping modern living.",
    content: `<p>Smart home technology is no longer a futuristic concept—it's becoming the standard for modern living. Here's what to expect from smart homes in 2024 and beyond:</p>
        
        <h3>Integrated Home Automation</h3>
        <p>Modern smart homes feature fully integrated systems that control lighting, temperature, security, entertainment, and more from a single interface. Voice assistants and mobile apps make control effortless.</p>
        
        <h3>Energy Efficiency</h3>
        <p>Smart thermostats, automated lighting, and energy monitoring systems optimize energy usage, reducing costs and environmental impact. These systems learn your habits and adjust automatically.</p>
        
        <h3>Enhanced Security</h3>
        <p>Advanced security systems include smart locks, video doorbells, motion sensors, and 24/7 monitoring. Real-time alerts and remote access provide peace of mind whether you're home or away.</p>
        
        <h3>Health and Wellness</h3>
        <p>Air quality monitors, smart air purifiers, and circadian lighting systems create healthier living environments. These technologies automatically adjust to maintain optimal conditions.</p>
        
        <h3>Entertainment Integration</h3>
        <p>Whole-home audio, smart TVs, and streaming integration create immersive entertainment experiences. Control everything from your smartphone or voice commands.</p>
        
        <h3>The Future of Smart Living</h3>
        <p>As AI and IoT technologies continue to evolve, smart homes will become even more intuitive and responsive. The future promises homes that anticipate your needs and adapt to your lifestyle seamlessly.</p>
        
        <p>At SV Builders, we integrate the latest smart home technologies into all our projects, ensuring your home is not just beautiful but also intelligent, efficient, and future-ready.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    author: "SV Builders",
    category: "News",
    tags: ["Smart homes", "Technology", "Home automation"],
    published: true,
    featured: false,
    views: 0
  }
];

const seedBlogs = async () => {
  try {
    // Connect to database
    await connectDB();
    
    // Check if blogs already exist and clear them
    const existingBlogs = await Blog.countDocuments();
    if (existingBlogs > 0) {
      console.log(`⚠️  Found ${existingBlogs} existing blog(s) in the database.`);
      await Blog.deleteMany({});
      console.log('✅ Cleared existing blogs.');
    }
    
    // Insert sample blogs one by one to ensure slug generation works
    const insertedBlogs = [];
    for (const blogData of sampleBlogs) {
      try {
        const blog = await Blog.create(blogData);
        insertedBlogs.push(blog);
        console.log(`✅ Created: ${blog.title}`);
      } catch (error) {
        console.error(`❌ Error creating blog "${blogData.title}":`, error.message);
      }
    }
    
    console.log(`\n✅ Successfully seeded ${insertedBlogs.length} blog posts to the database`);
    
    // Display created blogs
    console.log('\n📝 Created Blogs:');
    insertedBlogs.forEach((blog, index) => {
      console.log(`${index + 1}. ${blog.title} - ${blog.published ? 'Published' : 'Draft'}`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding blogs:', error);
    process.exit(1);
  }
};

// Run the seed function
seedBlogs();

