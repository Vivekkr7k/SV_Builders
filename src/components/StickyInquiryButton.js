import React from 'react';

const StickyInquiryButton = () => {
  const scrollToInquiry = () => {
    const inquiryForm = document.getElementById('inquiry-form');
    if (inquiryForm) {
      inquiryForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToInquiry}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999] bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-8 px-3 sm:py-10 sm:px-4 rounded-l-xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group"
      aria-label="Enquire Here"
      title="Enquire Here"
    >
      <span 
        className="block whitespace-nowrap text-sm sm:text-base tracking-wider uppercase font-extrabold"
        style={{ 
          writingMode: 'vertical-rl', 
          textOrientation: 'mixed',
          transform: 'rotate(180deg)'
        }}
      >
        ENQUIRE HERE
      </span>
    </button>
  );
};

export default StickyInquiryButton;

