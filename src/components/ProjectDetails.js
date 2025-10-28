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

  // Project data based on ID
  const projects = {
    1: {
      title: "Sai Omkar Residency",
      subtitle: "Experience Unparalleled Luxury and Comfort",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
    },
    2: {
      title: "Shri Balaji Residency",
      subtitle: "Exquisite Luxury by the Ocean",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8tACyec0xqLnYRXU3rGZsI54n9D97neDXRiaTRkgfnk8iNaSyoJ7GNtnuIRpKV8h-yqT8aFi5QAonhaoio9SZmMjR6e2ERWFXb2Pq1_-qZWUXOx5ZxuVNJb3rs-BUetZcpIo83j_Cl29Xkvrcb3lvWXbfigrz_ww88j0ygk4sVGbbCt0Xc479-0ZeUNf2KLkjJR3z1a16YGjRf7rpvvZNK026FLAaojEgW3v9fsUAdImRBsAvbu5y0m9uInwgp0TYrQaQEFDJe6Q"
    },
    3: {
      title: "SV Sri Balaji Residency",
      subtitle: "Modern Family Living in Progress",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRALEcFzR21B0uHsmR5vs_-CXdPB5KvS7VV4I3Ye3mYKaq7VFU9SF1ZOJlWmBhXZHYljRc1aN73iYLvE-RtzX2kV-8HK-IIsuMA1AWGEF6LutxFZD2VEv_jImY7OqPt942Pn3QolUjvUayJnQ-LlENhxY1lHQEzs7Q3oSjPcG_B2SvWNJ3QvbV1ssyFnHJdI5yPt6C0QLNGwjZALxJvMTj2Yi007VMzWcDLI7aUWyV0Qd5PBNDf3da3wH_Idm_ecm9j-O-8QehsaE"
    },
    4: {
      title: "SV Giridhama Residency",
      subtitle: "Tranquil Oasis Coming Soon",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApgaN2IG9WWZdl_4GE1TnrppxO7j84No00gG4eLOqmJt1ngXEYlfU2nlVJO39wXS5_n12Lof9px7cRlrjIUWtovP1kf4hG9a5aipnnEsBXlf-FSzGSZLqEIHJl9scyURlZw9P1GtWVwfkyCZ5ZM0Z2fjdkIaUAS49TZUhr8V0ZWrGrWo7rfpG9KBM2QRXyNrLFpYwD-wSKp8jpdwYYAAovU_vt4Sc3DADQxFgRmuk8EiSSbc29NJfFsUSxzHgXExyUIo88aj1gUF4"
    },
    5: {
      title: "SV Royal Residency",
      subtitle: "Future of Luxury Living",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyQseEJqEPhXZd2f6Nv02ToeFOQYS8dyvgu4XFtWt8Dih7dfZw7UwwNm7ssKrRyI74K6XRAVvIrTL8GfNGwvWYiGIjTR5usj7AeiAIamjkiSSRT3SAp2VA1HlZwDm2AXhVJRKi1UV0LII31G2_1-foAOeIUXG3J0Lxk4Vu4znOGloUrB1rTn4jv0yntd0VWmoNvcERLnPQuxFAL_irEehFD7rU5CnmKVOIkH1dilFG03nC12CS34VBw3DvQ_U0vuGjJwV2Kgz4Xt0"
    }
  };

  const project = projects[id] || projects[1];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-[#181611] dark:text-gray-200">
      <Navbar />
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex-1">
          <section className="relative h-[60vh] md:h-[80vh] w-full">
            <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 40%), url("${project.image}")`
            }}></div>
            <div className="relative h-full flex flex-col justify-end items-start p-4 md:p-10 lg:p-20 text-white">
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">{project.title}</h1>
              <p className="text-lg md:text-xl font-display mt-2">{project.subtitle}</p>
            </div>
          </section>

          <div className="px-4 md:px-10 lg:px-20 mx-auto max-w-7xl py-10 md:py-16">
            <div className="mb-16" id="gallery">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
                  <img alt="Modern house exterior" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzurAOmdzBWDx5MjGT2a9sHWFxFDM92itFxsMVXrd1OGITUA-bJlgqvLR1T4dwoGw3dpGR0lC8vIVxRouDeeXkm2_4-TNc3pvvHRcip0Qo8C0BsyHvxAsXkKO62cj_iqVNv-UHAGQYZcBz3LHYYrGG52LKMx6yfyAKVtgDfW1qpKcw4twLQper1fvGQ6OJw0gz60aCv4coYQSXc55LyNhUcRtoZxhQT9ds4rZ5VGe2h6bGRbQbuBrIGCzpdEpKLjMK-99aKXW5Ozk" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img alt="Spacious living room" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3dX4VeG1v0jkhDGoaK2GxiCJMEdKoESYKjY8nnJhilxZyqoMFW8yW3QYZARj9kucrb1izPT9Q53oMi_p9iQwa4D2biRAEqH0TNpfymU7HABbL_nbK0-ZDk1xUr9ayeJkY0PeqouVLwp7iBaDWyioyXwh4u7fetml6iX2T-ca7cMvTn72rt4jEGQo_MGVaLomX2VVWAIg7hdMOfeSHmS5OAIReRmGcogc6_6eXMmqGSMpoDneKGo1YMlw0euAjsjAEUBCaoPg2Qno" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img alt="Modern kitchen with island" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaTItoIz1vtLM-pVok8YHTcB9YQY1ISxj9gK8U_C3fa0pkSRt2UuDBgFUp34jL2eL8DWlABaf6HT0bTyLebi36ZeP0_bMVYqraeohB7Xx1U1bEVoL9r6ZXOuyvA8hcjK2MYFQj_iKjReYkD8zENCAfLY2xhgXcEqkOdUyy_ZjC0lViV7qihBcZSTWFso23nqJ3GKLRue62eP689qYiF8jLw7gVgWdv5LZnTr2r_ft_2UNGeWnYGPwfVQIJqVjFExtFveKquZkmk9o" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img alt="Elegant bedroom with large window" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD35mVNuMxZ_iaWEngOnGhprk69pDdAPVj1ZsrKcWeYSONtxxXrlXBK8E2yD4A_fsrCeU6oHdxk8dTcLXvx2FQxpV6qM7m4gLGoKJSsJjBWXFdV3JhaRJvXoAEqRLqbHboCcJ8Ux-OmzZ82I4XeCXJIEMQWOY_fE9YboZbudQJCobokVj3Vx9UBgDsQyxEdaDFqcKTO8nukY-iyG8kqbvZYoHT74vahfmYIX_ewvRBwc70fAhp9Iy0wQQNgX6EvW3TBlDCQml8-O7I" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img alt="Luxury bathroom with bathtub" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3JHDOGtehXGCleOjr36R6zj6lqIOCO1hX-R3ss-DwhGbMd_jHbOBOYn21KXkf7m3r0JlzeB2eV99lygPHUVfpsCWyC5i22SOoQLxxAR1BcR988wuzdrMZKU6uYWmxZ4bDexTHIDX1KiKWStQtx1l2SeN4iqb_Y3z9kgF8xcUXzLPU0azA3k4wkX4UlCbAYSIvW4bFnlapVDowcDEMIXAVVDFzrTSI6A7Jw1deXr9RJgXPwmQAtyPXk46DJYvqRTlJCt0jjmP83q0" />
                </div>
              </div>
            </div>

            <div className="mb-16" id="features">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800 dark:text-gray-200">Property Details</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">Discover a home where modern architecture meets serene living. Sai Omkar Residency is a testament to exquisite craftsmanship and attention to detail, offering premium finishes, state-of-the-art amenities, and breathtaking views. It's more than a residence; it's a lifestyle.</p>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-accent-gold mt-1">king_bed</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Bedrooms</p>
                      <p className="text-gray-600 dark:text-gray-400">4</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-accent-gold mt-1">bathtub</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Bathrooms</p>
                      <p className="text-gray-600 dark:text-gray-400">4.5</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-accent-gold mt-1">square_foot</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Square Footage</p>
                      <p className="text-gray-600 dark:text-gray-400">3,500 sqft</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-accent-gold mt-1">sell</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Price</p>
                      <p className="text-gray-600 dark:text-gray-400">$2,500,000</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-accent-gold mt-1">apartment</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Property Type</p>
                      <p className="text-gray-600 dark:text-gray-400">Apartment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-accent-gold mt-1">calendar_today</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Year Built</p>
                      <p className="text-gray-600 dark:text-gray-400">2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16 text-center" id="floor-plans">
              <h2 className="text-3xl font-serif font-bold mb-8 text-gray-800 dark:text-gray-200">Floor Plans</h2>
              <div className="relative flex justify-center items-center p-8 bg-creamy-white dark:bg-gray-800 rounded-xl shadow-lg">
                <img alt="Floor plan of a modern apartment" className="max-w-full h-auto rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVS3IukR36l6IXOkiVtG2wLZulfhPjoc54VNiDCPkGTdibYMPzZJrNF9VrCx85Vcarrh_N_uRPkGsnsbGR6VOQLqbHFu754TqpFafotau2ot1rIjSCJexvT5xqmfZZF-xNsym6ssByPoz2bTY-M2vwhrtY0N8dNjQUjE3iPQasitXaEkcKh8DM45EWckfs_M-_n1Avtjf8ImeeyZZG_hf8Uw2EYD47v4Buymsk4fTQQJxPE6_e70AagdjD_Xcvzc4ppOfqz3El-Mo" />
              </div>
            </div>

            <div className="mb-16 text-center" id="virtual-tour">
              <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800 dark:text-gray-200">Explore in 360°</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">Step inside Sai Omkar Residency from anywhere in the world with our immersive virtual tour.</p>
              <button className="bg-primary text-white font-bold py-3 sm:py-3.5 md:py-4 px-6 sm:px-7 md:px-8 rounded-lg sm:rounded-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">Take a Virtual Tour</button>
            </div>

            <div className="mb-16" id="location">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Location</h2>
              <div className="rounded-xl overflow-hidden aspect-w-16 aspect-h-9">
                <img alt="Map showing property location" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAXCMy7U-YH7VldvRti8IeBjVvjwJI5PQxz27z6ECTkVvce5dNviDzzzeemJNRxmK5ADiV-RE50E2o64KikNwWC7SK5kJZF6YJXNmc9vTdp3rMCLgECyupK2H8wfoBogQxFaTsZDQ-1tHyONjm6E9FkkrUBfSukAeaR97g67f5Zt8zkt_aAB2zQIMe3UgYpH9ksV9Nv9MUSIVxnitEppSRU9jbyLb_NXkf0pugR-aOio5TQYsLfUACb7yCaSR4CLj2godUeIHEpgA" />
              </div>
            </div>

            <div className="bg-creamy-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-lg" id="contact">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800 dark:text-gray-200">Inquire Now</h2>
                  <p className="text-gray-600 dark:text-gray-400">Our team is ready to provide you with more information or schedule a private viewing. Please fill out the form, and we will be in touch shortly.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      autoComplete="name"
                      className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-gold"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      autoComplete="email"
                      className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-gold"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      autoComplete="tel"
                      className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-gold"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <textarea
                      className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-gold"
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

