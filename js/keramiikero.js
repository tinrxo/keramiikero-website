document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Mobile Menu Toggle
    // -------------------------------------------------------------
    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            menuButton.setAttribute('aria-expanded', isOpen);
        });

        // Close when clicking any link inside mobile menu
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                menuButton.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // -------------------------------------------------------------
    // 2. Scroll-Driven Parallax Motion (Flowers, Water Lilies & Fairy Dust)
    // -------------------------------------------------------------
    const decoItems = document.querySelectorAll('.hero-deco-item');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (decoItems.length > 0 && !prefersReducedMotion) {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateParallax = () => {
            const scroll = window.scrollY;
            // Only calculate if hero is within view
            if (scroll < 1000) {
                decoItems.forEach(item => {
                    const speed = parseFloat(item.dataset.speed || 0.08);
                    const rotateFactor = parseFloat(item.dataset.rotate || 0.05);
                    const driftFactor = parseFloat(item.dataset.drift || 0);

                    const y = scroll * speed;
                    const x = scroll * driftFactor;
                    const r = scroll * rotateFactor;

                    item.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${r}deg)`;
                });
            }
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            lastScrollY = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }, { passive: true });

        // Initialize positions
        updateParallax();
    }

    // -------------------------------------------------------------
    // 3. Interactive Kero Mascot ("Quak!" Speech Bubble)
    // -------------------------------------------------------------
    const mascot = document.querySelector('.mascot-container');
    if (mascot) {
        let bubbleTimeout;
        mascot.addEventListener('click', () => {
            mascot.classList.add('show-speech');
            clearTimeout(bubbleTimeout);
            bubbleTimeout = setTimeout(() => {
                mascot.classList.remove('show-speech');
            }, 2200);
        });
    }

    // -------------------------------------------------------------
    // 4. Hero Carousel Auto-Rotation (Desktop)
    // -------------------------------------------------------------
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 1) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3500);
    }

    // -------------------------------------------------------------
    // 5. FAQ Accordion Toggle
    // -------------------------------------------------------------
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            if (item) {
                item.classList.toggle('open');
            }
        });
    });
});