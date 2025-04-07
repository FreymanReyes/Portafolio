// Script para cambiar el fondo del navbar cuando se hace scroll
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.getElementById("about");
    const title = aboutSection.querySelector(".section-title");
    const text = aboutSection.querySelector(".about-text");
  
    function animateOnScroll() {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8) {
        title.classList.add("animate-title");
        text.classList.add("typing-effect");
        window.removeEventListener("scroll", animateOnScroll);
      }
    }
  
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // por si ya está visible al cargar
  });