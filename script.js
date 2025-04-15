// Script para cambiar el fondo del navbar cuando se hace scroll
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

document.addEventListener("DOMContentLoaded", function () {
  const elementsToAnimate = document.querySelectorAll('.slide-up, .slide-down');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.remove('hidden-animation');
              observer.unobserve(entry.target); // Detiene la observación
          }
      });
  }, {
      threshold: 0.1
  });

  elementsToAnimate.forEach(element => {
      observer.observe(element);
  });
});