// =============================================
// ui.js — Control de interfaz de usuario
// Menú móvil y animaciones
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                hamburgerIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
                hamburgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    }

    // Cerrar menú móvil al hacer clic en un enlace
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // Scroll Sticky Nav
    const mainHeader = document.getElementById('main-header');
    const mainNav = document.getElementById('main-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainNav.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-4');
            mainNav.classList.remove('bg-transparent', 'py-2');
        } else {
            mainNav.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-4');
            mainNav.classList.add('bg-transparent', 'py-2');
        }
    });

    // Intersection Observer for scroll animations
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});
