import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const [offset, setOffset] = useState(175); // Default offset for computer

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOffset(100); // Offset for phone
      } else {
        setOffset(175); // Offset for computer
      }
    };

    handleResize(); // Set initial offset
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        const headerOffset = offset;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash, offset]);

  return null;
}

export default ScrollToTop;
