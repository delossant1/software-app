// App.js

import React, { useState, useEffect } from 'react';

const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopBtn = document.getElementById("scrollToTopBtn");

      if (scrollToTopBtn) {
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
          scrollToTopBtn.style.display = "block";
        } else {
          scrollToTopBtn.style.display = "none";
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  };

  return (
    <div className={`wrapper ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      {/* ... rest of your JSX code ... */}
      <button id="scrollToTopBtn" className="btn btn-primary" onClick={handleScrollToTop}>
        Scroll to Top
      </button>
    </div>
  );
};

export default App;
