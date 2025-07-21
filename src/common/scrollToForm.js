// Smooth scroll to main form section
export const scrollToForm = (e) => {
  if (e) {
    e.preventDefault();
  }
  
  const targetElement = document.getElementById('main-form');
  if (targetElement) {
    const offsetTop = targetElement.offsetTop - 80; // 80px offset for navbar
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}; 