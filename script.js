document.addEventListener("DOMContentLoaded", function () {
    // Navbar scroll background
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Animaciones al hacer scroll
    const elementsToAnimate = document.querySelectorAll('.slide-up, .slide-down, .slide-in-right');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden-animation');
                observer.unobserve(entry.target); // Deja de observar una vez visible
            }
        });
    }, {
        threshold: 0.5
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
