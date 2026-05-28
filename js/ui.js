// =============================================
// ui.js — Control de interfaz de usuario
// Menú móvil
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

    // =============================================
    // Navbar Scroll Effect
    // =============================================
    const mainNav = document.getElementById('main-nav');
    if (mainNav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                mainNav.classList.remove('bg-transparent', 'backdrop-blur-md');
                mainNav.style.backgroundColor = '#FCF9F5';
                mainNav.style.boxShadow = '0 2px 12px rgba(43,23,12,0.08)';
            } else {
                mainNav.classList.add('bg-transparent', 'backdrop-blur-md');
                mainNav.style.backgroundColor = '';
                mainNav.style.boxShadow = '';
            }
        });
    }

    // =============================================
    // Intersection Observer para Animaciones de Scroll
    // =============================================
    const scrollObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                entry.target.classList.add('opacity-100', 'translate-y-0');
                observer.unobserve(entry.target);
            }
        });
    }, scrollObserverOptions);

    // Función para observar elementos
    const observeElements = () => {
        const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.observed)');
        animatedElements.forEach(el => {
            el.classList.add('observed');
            scrollObserver.observe(el);
        });
    };

    // Observar elementos iniciales
    observeElements();

    // MutationObserver para observar elementos añadidos dinámicamente
    const mutationObserver = new MutationObserver(() => {
        observeElements();
    });

    mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
});
