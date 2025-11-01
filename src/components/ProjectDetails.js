import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function ProjectDetails() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Project data matching Home.js structure
  const projects = {
    1: {
      id: 1,
      title: "Sai Omkar Residency",
      location: "HSR Layout, Bangalore",
      area: "HSR Layout",
      description: "Premium residential apartments in the heart of HSR Layout, featuring modern architecture, spacious 2 & 3 BHK units with world-class amenities. Located in one of Bangalore's most sought-after neighborhoods.",
      status: "completed",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      amenities: ["Swimming Pool", "Clubhouse", "Gymnasium", "Landscaped Gardens", "Parking", "Security", "Power Backup"],
      brochureUrl: "#",
      bedrooms: "2, 3 BHK",
      bathrooms: "2, 3",
      price: "On Request",
      propertyType: "Residential Apartments",
      yearBuilt: "2023"
    },
    2: {
      id: 2,
      title: "Shri Balaji Residency",
      location: "Koramangala, Bangalore",
      area: "Koramangala",
      description: "Elegant residential project in Koramangala offering 2, 3 & 4 BHK apartments. Features include premium finishes, security systems, and proximity to IT hubs, schools, and shopping centers.",
      status: "completed",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8tACyec0xqLnYRXU3rGZsI54n9D97neDXRiaTRkgfnk8iNaSyoJ7GNtnuIRpKV8h-yqT8aFi5QAonhaoio9SZmMjR6e2ERWFXb2Pq1_-qZWUXOx5ZxuVNJb3rs-BUetZcpIo83j_Cl29Xkvrcb3lvWXbfigrz_ww88j0ygk4sVGbbCt0Xc479-0ZeUNf2KLkjJR3z1a16YGjRf7rpvvZNK026FLAaojEgW3v9fsUAdImRBsAvbu5y0m9uInwgp0TYrQaQEFDJe6Q",
      amenities: ["Power Backup", "Security", "Lift", "Parking", "Water Supply", "Clubhouse"],
      brochureUrl: "#",
      bedrooms: "2, 3, 4 BHK",
      bathrooms: "2, 3, 4",
      price: "On Request",
      propertyType: "Residential Apartments",
      yearBuilt: "2022"
    },
    3: {
      id: 3,
      title: "SV Sri Balaji Residency",
      location: "Whitefield, Bangalore",
      area: "Whitefield",
      description: "Ongoing premium residential development in Whitefield, featuring contemporary design and smart home features. Offering 2 & 3 BHK apartments with excellent connectivity to IT corridors.",
      status: "ongoing",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRALEcFzR21B0uHsmR5vs_-CXdPB5KvS7VV4I3Ye3mYKaq7VFU9SF1ZOJlWmBhXZHYljRc1aN73iYLvE-RtzX2kV-8HK-IIsuMA1AWGEF6LutxFZD2VEv_jImY7OqPt942Pn3QolUjvUayJnQ-LlENhxY1lHQEzs7Q3oSjPcG_B2SvWNJ3QvbV1ssyFnHJdI5yPt6C0QLNGwjZALxJvMTj2Yi007VMzWcDLI7aUWyV0Qd5PBNDf3da3wH_Idm_ecm9j-O-8QehsaE",
      amenities: ["Swimming Pool", "Clubhouse", "Children's Play Area", "Gym", "Landscaped Gardens", "Smart Home Features"],
      brochureUrl: "#",
      bedrooms: "2, 3 BHK",
      bathrooms: "2, 3",
      price: "On Request",
      propertyType: "Residential Apartments",
      completionDate: "2025"
    },
    4: {
      id: 4,
      title: "SV Giridhama Residency",
      location: "Electronic City, Bangalore",
      area: "Electronic City",
      description: "Modern residential apartments under construction in Electronic City. Strategically located near tech parks, featuring 2, 3 & 4 BHK homes with premium amenities and excellent connectivity.",
      status: "ongoing",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApgaN2IG9WWZdl_4GE1TnrppxO7j84No00gG4eLOqmJt1ngXEYlfU2nlVJO39wXS5_n12Lof9px7cRlrjIUWtovP1kf4hG9a5aipnnEsBXlf-FSzGSZLqEIHJl9scyURlZw9P1GtWVwfkyCZ5ZM0Z2fjdkIaUAS49TZUhr8V0ZWrGrWo7rfpG9KBM2QRXyNrLFpYwD-wSKp8jpdwYYAAovU_vt4Sc3DADQxFgRmuk8EiSSbc29NJfFsUSxzHgXExyUIo88aj1gUF4",
      amenities: ["Rooftop Garden", "Community Hall", "Gymnasium", "24/7 Security", "Parking", "Water Supply"],
      brochureUrl: "#",
      bedrooms: "2, 3, 4 BHK",
      bathrooms: "2, 3, 4",
      price: "On Request",
      propertyType: "Residential Apartments",
      completionDate: "2026"
    },
    5: {
      id: 5,
      title: "SV Royal Residency",
      location: "Yelahanka, Bangalore",
      area: "Yelahanka",
      description: "Upcoming luxury residential project in Yelahanka featuring spacious 3 & 4 BHK apartments. Planned with premium amenities, green spaces, and modern infrastructure in a rapidly developing area of North Bangalore.",
      status: "upcoming",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyQseEJqEPhXZd2f6Nv02ToeFOQYS8dyvgu4XFtWt8Dih7dfZw7UwwNm7ssKrRyI74K6XRAVvIrTL8GfNGwvWYiGIjTR5usj7AeiAIamjkiSSRT3SAp2VA1HlZwDm2AXhVJRKi1UV0LII31G2_1-foAOeIUXG3J0Lxk4Vu4znOGloUrB1rTn4jv0yntd0VWmoNvcERLnPQuxFAL_irEehFD7rU5CnmKVOIkH1dilFG03nC12CS34VBw3DvQ_U0vuGjJwV2Kgz4Xt0",
      amenities: ["Swimming Pool", "Clubhouse", "Multi-purpose Hall", "Jogging Track", "Green Spaces", "Gym"],
      brochureUrl: "#",
      bedrooms: "3, 4 BHK",
      bathrooms: "3, 4",
      price: "On Request",
      propertyType: "Residential Apartments",
      launchDate: "2024"
    }
  };

  const project = projects[id] || projects[1];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDownloadBrochure = (e) => {
    e.preventDefault();
    // In a real application, this would download the actual brochure PDF
    alert('Brochure download will be available soon. Please contact us for more details.');
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-[#181611] dark:text-gray-200">
      <Navbar />
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex-1">
          {/* Hero Section with Status Badge */}
          <section className="relative h-[60vh] md:h-[80vh] w-full">
            <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 40%), url("${project.image}")`
            }}></div>
            <div className="relative h-full flex flex-col justify-end items-start p-4 md:p-10 lg:p-20 text-white">
              <div className="flex items-center gap-4 mb-2">
                <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                  project.status === 'completed' ? 'bg-green-600' :
                  project.status === 'ongoing' ? 'bg-blue-600' :
                  'bg-orange-600'
                }`}>
                  {project.status === 'completed' ? 'Completed' :
                   project.status === 'ongoing' ? 'Ongoing' :
                   'Upcoming'}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">{project.title}</h1>
              <p className="text-lg md:text-xl font-display mt-2 flex items-center gap-2">
                <span className="material-symbols-outlined">location_on</span>
                {project.location}
              </p>
            </div>
          </section>

          <div className="px-4 md:px-10 lg:px-20 mx-auto max-w-7xl py-10 md:py-16">
            {/* Gallery Section */}
            <div className="mb-16" id="gallery">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
                  <img 
                    alt={`${project.title} - Exterior view of residential building in ${project.area}, Bangalore`} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzurAOmdzBWDx5MjGT2a9sHWFxFDM92itFxsMVXrd1OGITUA-bJlgqvLR1T4dwoGw3dpGR0lC8vIVxRouDeeXkm2_4-TNc3pvvHRcip0Qo8C0BsyHvxAsXkKO62cj_iqVNv-UHAGQYZcBz3LHYYrGG52LKMx6yfyAKVtgDfW1qpKcw4twLQper1fvGQ6OJw0gz60aCv4coYQSXc55LyNhUcRtoZxhQT9ds4rZ5VGe2h6bGRbQbuBrIGCzpdEpKLjMK-99aKXW5Ozk" 
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    alt={`${project.title} - Spacious living room interior`} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3dX4VeG1v0jkhDGoaK2GxiCJMEdKoESYKjY8nnJhilxZyqoMFW8yW3QYZARj9kucrb1izPT9Q53oMi_p9iQwa4D2biRAEqH0TNpfymU7HABbL_nbK0-ZDk1xUr9ayeJkY0PeqouVLwp7iBaDWyioyXwh4u7fetml6iX2T-ca7cMvTn72rt4jEGQo_MGVaLomX2VVWAIg7hdMOfeSHmS5OAIReRmGcogc6_6eXMmqGSMpoDneKGo1YMlw0euAjsjAEUBCaoPg2Qno" 
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    alt={`${project.title} - Modern kitchen with premium finishes`} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaTItoIz1vtLM-pVok8YHTcB9YQY1ISxj9gK8U_C3fa0pkSRt2UuDBgFUp34jL2eL8DWlABaf6HT0bTyLebi36ZeP0_bMVYqraeohB7Xx1U1bEVoL9r6ZXOuyvA8hcjK2MYFQj_iKjReYkD8zENCAfLY2xhgXcEqkOdUyy_ZjC0lViV7qihBcZSTWFso23nqJ3GKLRue62eP689qYiF8jLw7gVgWdv5LZnTr2r_ft_2UNGeWnYGPwfVQIJqVjFExtFveKquZkmk9o" 
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    alt={`${project.title} - Elegant bedroom with large windows`} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD35mVNuMxZ_iaWEngOnGhprk69pDdAPVj1ZsrKcWeYSONtxxXrlXBK8E2yD4A_fsrCeU6oHdxk8dTcLXvx2FQxpV6qM7m4gLGoKJSsJjBWXFdV3JhaRJvXoAEqRLqbHboCcJ8Ux-OmzZ82I4XeCXJIEMQWOY_fE9YboZbudQJCobokVj3Vx9UBgDsQyxEdaDFqcKTO8nukY-iyG8kqbvZYoHT74vahfmYIX_ewvRBwc70fAhp9Iy0wQQNgX6EvW3TBlDCQml8-O7I" 
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    alt={`${project.title} - Luxury bathroom with modern fixtures`} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3JHDOGtehXGCleOjr36R6zj6lqIOCO1hX-R3ss-DwhGbMd_jHbOBOYn21KXkf7m3r0JlzeB2eV99lygPHUVfpsCWyC5i22SOoQLxxAR1BcR988wuzdrMZKU6uYWmxZ4bDexTHIDX1KiKWStQtx1l2SeN4iqb_Y3z9kgF8xcUXzLPU0azA3k4wkX4UlCbAYSIvW4bFnlapVDowcDEMIXAVVDFzrTSI6A7Jw1deXr9RJgXPwmQAtyPXk46DJYvqRTlJCt0jjmP83q0" 
                  />
                </div>
              </div>
            </div>

            {/* Property Details Section */}
            <div className="mb-16" id="features">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800 dark:text-gray-200">Property Details</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">{project.description}</p>
                  
                  {/* Amenities Section */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Amenities</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {project.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">check_circle</span>
                          <span className="text-gray-600 dark:text-gray-400">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-primary mt-1">king_bed</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Bedrooms</p>
                      <p className="text-gray-600 dark:text-gray-400">{project.bedrooms}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-primary mt-1">bathtub</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Bathrooms</p>
                      <p className="text-gray-600 dark:text-gray-400">{project.bathrooms}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-primary mt-1">sell</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Price</p>
                      <p className="text-gray-600 dark:text-gray-400">{project.price}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-primary mt-1">apartment</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Property Type</p>
                      <p className="text-gray-600 dark:text-gray-400">{project.propertyType}</p>
                    </div>
                  </div>
                  {project.yearBuilt && (
                  <div className="flex items-start space-x-4">
                      <span className="material-symbols-outlined text-primary mt-1">calendar_today</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Year Built</p>
                        <p className="text-gray-600 dark:text-gray-400">{project.yearBuilt}</p>
                      </div>
                    </div>
                  )}
                  {(project.completionDate || project.launchDate) && (
                    <div className="flex items-start space-x-4">
                      <span className="material-symbols-outlined text-primary mt-1">event</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">
                          {project.completionDate ? 'Completion' : 'Launch'} Date
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {project.completionDate || project.launchDate}
                        </p>
                    </div>
                  </div>
                  )}
                </div>
              </div>
            </div>

            {/* Download Brochure & Price List Section */}
            <div className="mb-16" id="download-section">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-8 md:p-12 rounded-2xl border-2 border-primary/20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-serif font-bold mb-3 text-gray-800 dark:text-gray-200">Get Complete Project Information</h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Download our comprehensive project brochure and price list with detailed specifications, floor plans, amenities, and pricing information for {project.title}.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                  <button
                    onClick={handleDownloadBrochure}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[220px]"
                  >
                    <span className="material-symbols-outlined">download</span>
                    <span>Download Brochure</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Price list download will be available soon. Please contact us for current pricing.');
                    }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[220px]"
                  >
                    <span className="material-symbols-outlined">attach_money</span>
                    <span>Download Price List</span>
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Need more information? <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-primary font-semibold hover:underline">Contact us</button> for personalized assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* Floor Plans Section */}
            <div className="mb-16 text-center" id="floor-plans">
              <h2 className="text-3xl font-serif font-bold mb-8 text-gray-800 dark:text-gray-200">Floor Plans</h2>
              <div className="relative flex justify-center items-center p-8 bg-creamy-white dark:bg-gray-800 rounded-xl shadow-lg">
                <img 
                  alt={`${project.title} - Floor plan layout showing apartment configurations`} 
                  className="max-w-full h-auto rounded-lg" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVS3IukR36l6IXOkiVtG2wLZulfhPjoc54VNiDCPkGTdibYMPzZJrNF9VrCx85Vcarrh_N_uRPkGsnsbGR6VOQLqbHFu754TqpFafotau2ot1rIjSCJexvT5xqmfZZF-xNsym6ssByPoz2bTY-M2vwhrtY0N8dNjQUjE3iPQasitXaEkcKh8DM45EWckfs_M-_n1Avtjf8ImeeyZZG_hf8Uw2EYD47v4Buymsk4fTQQJxPE6_e70AagdjD_Xcvzc4ppOfqz3El-Mo" 
                />
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
                * Floor plans are indicative. Actual dimensions may vary. Please refer to the brochure for detailed specifications.
              </p>
            </div>

            {/* Location Section */}
            <div className="mb-16" id="location">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Location</h2>
              <div className="rounded-xl overflow-hidden aspect-w-16 aspect-h-9 mb-4">
                <img 
                  alt={`Map showing ${project.title} location in ${project.location}, Bangalore`} 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAXCMy7U-YH7VldvRti8IeBjVvjwJI5PQxz27z6ECTkVvce5dNviDzzzeemJNRxmK5ADiV-RE50E2o64KikNwWC7SK5kJZF6YJXNmc9vTdp3rMCLgECyupK2H8wfoBogQxFaTsZDQ-1tHyONjm6E9FkkrUBfSukAeaR97g67f5Zt8zkt_aAB2zQIMe3UgYpH9ksV9Nv9MUSIVxnitEppSRU9jbyLb_NXkf0pugR-aOio5TQYsLfUACb7yCaSR4CLj2godUeIHEpgA" 
                />
              </div>
              <div className="bg-creamy-white dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Connectivity & Nearby Places</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div>
                    <p className="font-semibold mb-1">Schools</p>
                    <p>5 km radius - Multiple renowned schools</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Hospitals</p>
                    <p>3 km radius - Leading healthcare facilities</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Shopping</p>
                    <p>2 km radius - Malls and retail outlets</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form Section */}
            <div className="bg-creamy-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-lg" id="contact">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800 dark:text-gray-200">Inquire About {project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our team is ready to provide you with more information or schedule a private viewing. Please fill out the form, and we will be in touch shortly.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary">phone</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">Phone</p>
                        <p className="text-gray-600 dark:text-gray-400">+91-XXXXXXXXXX</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary">email</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">Email</p>
                        <p className="text-gray-600 dark:text-gray-400">contact@svbuilders.com</p>
                      </div>
                    </div>
                  </div>
                  {/* Download Brochure Button */}
                  <button
                    onClick={handleDownloadBrochure}
                    className="mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg"
                  >
                    <span className="material-symbols-outlined">download</span>
                    <span>Download Brochure</span>
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      autoComplete="name"
                      className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      autoComplete="email"
                      className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      autoComplete="tel"
                      className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary"
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="w-full flex justify-center py-3 sm:py-3.5 md:py-4 px-5 sm:px-6 md:px-8 border border-transparent rounded-lg sm:rounded-xl shadow-lg text-sm sm:text-base font-bold text-white bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                      type="submit"
                    >Request a Viewing</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default ProjectDetails;
