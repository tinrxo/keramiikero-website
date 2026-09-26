document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Galerie and Kreativmarkt throwback share one destination on every page.
    document.querySelectorAll('.nav-links, .mobile-menu').forEach(menu => {
        if (menu.querySelector('a[href="galerie.html"]')) return;
        const shopLink = menu.querySelector('a[href="kuenstler-shop.html"]');
        if (!shopLink) return;
        shopLink.insertAdjacentHTML('afterend', `<a href="galerie.html"${location.pathname.endsWith('/galerie.html') ? ' class="active"' : ''}>Galerie</a>`);
    });

    const ambientDecorationMarkup = `
        <div class="section-decoration" aria-hidden="true">
            <svg class="ambient-deco-item ambient-flower ambient-one" viewBox="0 0 40 40" data-depth="0.75"><g fill="#f472b6"><ellipse cx="28" cy="20" rx="7" ry="5"/><ellipse cx="22.47" cy="27.61" rx="7" ry="5" transform="rotate(72 22.47 27.61)"/><ellipse cx="13.53" cy="24.7" rx="7" ry="5" transform="rotate(144 13.53 24.7)"/><ellipse cx="13.53" cy="15.3" rx="7" ry="5" transform="rotate(216 13.53 15.3)"/><ellipse cx="22.47" cy="12.39" rx="7" ry="5" transform="rotate(288 22.47 12.39)"/></g><circle cx="20" cy="20" r="5.5" fill="#facc15"/></svg>
            <svg class="ambient-deco-item ambient-butterfly ambient-two" viewBox="0 0 40 40" data-depth="-0.55"><ellipse cx="14" cy="16" rx="10" ry="8" fill="#34d399" opacity=".76"/><ellipse cx="26" cy="16" rx="10" ry="8" fill="#6ee7b7" opacity=".76"/><ellipse cx="15" cy="26" rx="7" ry="6" fill="#6ee7b7" opacity=".68"/><ellipse cx="25" cy="26" rx="7" ry="6" fill="#34d399" opacity=".68"/><path d="M20 9v23" stroke="#059669" stroke-width="1.5"/></svg>
            <div class="ambient-deco-item ambient-lily ambient-three" data-depth="0.45"><svg viewBox="0 0 60 60"><path d="M30 30 52 16A25 25 0 1 0 52 44Z" fill="#8ec286"/><g fill="#ffd6e3"><ellipse cx="30" cy="18" rx="6" ry="12"/><ellipse cx="39" cy="27" rx="6" ry="12" transform="rotate(60 39 27)"/><ellipse cx="21" cy="27" rx="6" ry="12" transform="rotate(-60 21 27)"/></g><circle cx="30" cy="29" r="5" fill="#fbbf24"/></svg></div>
            <svg class="ambient-deco-item ambient-flower ambient-four" viewBox="0 0 40 40" data-depth="-0.7"><g fill="#93c5fd"><ellipse cx="28" cy="20" rx="7" ry="5"/><ellipse cx="22.47" cy="27.61" rx="7" ry="5" transform="rotate(72 22.47 27.61)"/><ellipse cx="13.53" cy="24.7" rx="7" ry="5" transform="rotate(144 13.53 24.7)"/><ellipse cx="13.53" cy="15.3" rx="7" ry="5" transform="rotate(216 13.53 15.3)"/><ellipse cx="22.47" cy="12.39" rx="7" ry="5" transform="rotate(288 22.47 12.39)"/></g><circle cx="20" cy="20" r="5.5" fill="#fde047"/></svg>
            <span class="ambient-deco-item ambient-spark ambient-five" data-depth="0.9"></span>
            <span class="ambient-deco-item ambient-spark ambient-six" data-depth="-0.8"></span>
        </div>`;

    // Carry the hero's floating garden through every content section.
    document.querySelectorAll('main > section:not(.hero):not(.subpage-hero)').forEach(section => {
        section.classList.add('ambient-section');
        if (!section.querySelector(':scope > .section-decoration')) {
            section.insertAdjacentHTML('afterbegin', ambientDecorationMarkup);
        }
    });

    // Reuse the homepage's playful pond decorations on every inner-page hero.
    // Keeping this in one shared template prevents the pages from drifting apart.
    const subpageHero = document.querySelector('.subpage-hero');
    if (subpageHero && !subpageHero.querySelector('.hero-decoration')) {
        subpageHero.insertAdjacentHTML('afterbegin', `
            <div class="hero-decoration subpage-hero-decoration" aria-hidden="true">
                <svg class="hero-deco-item shared-flower shared-flower-pink flower-pink" viewBox="0 0 40 40" data-speed="0.12" data-rotate="0.08" data-drift="0.03"><g fill="currentColor"><ellipse cx="28" cy="20" rx="7" ry="5"/><ellipse cx="22.47" cy="27.61" rx="7" ry="5" transform="rotate(72 22.47 27.61)"/><ellipse cx="13.53" cy="24.7" rx="7" ry="5" transform="rotate(144 13.53 24.7)"/><ellipse cx="13.53" cy="15.3" rx="7" ry="5" transform="rotate(216 13.53 15.3)"/><ellipse cx="22.47" cy="12.39" rx="7" ry="5" transform="rotate(288 22.47 12.39)"/></g><circle cx="20" cy="20" r="5.5" fill="#facc15"/></svg>
                <svg class="hero-deco-item shared-flower shared-flower-lavender flower-lavender" viewBox="0 0 40 40" data-speed="-0.09" data-rotate="-0.07" data-drift="-0.02"><g fill="currentColor"><ellipse cx="28" cy="20" rx="7" ry="5"/><ellipse cx="22.47" cy="27.61" rx="7" ry="5" transform="rotate(72 22.47 27.61)"/><ellipse cx="13.53" cy="24.7" rx="7" ry="5" transform="rotate(144 13.53 24.7)"/><ellipse cx="13.53" cy="15.3" rx="7" ry="5" transform="rotate(216 13.53 15.3)"/><ellipse cx="22.47" cy="12.39" rx="7" ry="5" transform="rotate(288 22.47 12.39)"/></g><circle cx="20" cy="20" r="5.5" fill="#fbbf24"/></svg>
                <svg class="hero-deco-item shared-flower shared-flower-yellow flower-yellow" viewBox="0 0 40 40" data-speed="0.15" data-rotate="0.09" data-drift="0.02"><g fill="currentColor"><ellipse cx="28" cy="20" rx="7" ry="5"/><ellipse cx="22.47" cy="27.61" rx="7" ry="5" transform="rotate(72 22.47 27.61)"/><ellipse cx="13.53" cy="24.7" rx="7" ry="5" transform="rotate(144 13.53 24.7)"/><ellipse cx="13.53" cy="15.3" rx="7" ry="5" transform="rotate(216 13.53 15.3)"/><ellipse cx="22.47" cy="12.39" rx="7" ry="5" transform="rotate(288 22.47 12.39)"/></g><circle cx="20" cy="20" r="5.5" fill="#ef4444"/></svg>
                <div class="hero-deco-item shared-lily waterlily-1" data-speed="0.08" data-rotate="0.04" data-drift="0.03"><svg viewBox="0 0 60 60"><path d="M30 30 52 16A25 25 0 1 0 52 44Z" fill="#8ec286"/><g fill="#ffd6e3"><ellipse cx="30" cy="18" rx="6" ry="12"/><ellipse cx="39" cy="27" rx="6" ry="12" transform="rotate(60 39 27)"/><ellipse cx="21" cy="27" rx="6" ry="12" transform="rotate(-60 21 27)"/></g><circle cx="30" cy="29" r="5" fill="#fbbf24"/></svg></div>
                <svg class="hero-deco-item shared-butterfly butterfly-mint" viewBox="0 0 40 40" data-speed="-0.08" data-rotate="-0.06" data-drift="-0.04"><ellipse cx="14" cy="16" rx="10" ry="8" fill="#34d399" opacity=".8"/><ellipse cx="26" cy="16" rx="10" ry="8" fill="#6ee7b7" opacity=".8"/><ellipse cx="15" cy="26" rx="7" ry="6" fill="#6ee7b7" opacity=".7"/><ellipse cx="25" cy="26" rx="7" ry="6" fill="#34d399" opacity=".7"/><path d="M20 9v23" stroke="#059669" stroke-width="1.5"/></svg>
                <svg class="hero-deco-item shared-butterfly butterfly-purple" viewBox="0 0 40 40" data-speed="0.11" data-rotate="0.07" data-drift="0.03"><ellipse cx="14" cy="16" rx="10" ry="8" fill="#a78bfa" opacity=".8"/><ellipse cx="26" cy="16" rx="10" ry="8" fill="#c4b5fd" opacity=".8"/><ellipse cx="15" cy="26" rx="7" ry="6" fill="#c4b5fd" opacity=".7"/><ellipse cx="25" cy="26" rx="7" ry="6" fill="#a78bfa" opacity=".7"/><path d="M20 9v23" stroke="#7c3aed" stroke-width="1.5"/></svg>
                <span class="hero-deco-item fairy-star star-1" data-speed="0.18" data-rotate="0.12"></span><span class="hero-deco-item fairy-star star-2" data-speed="-0.11" data-rotate="-0.08"></span><span class="hero-deco-item fairy-mote mote-3" data-speed="0.18" data-drift="0.02"></span><span class="hero-deco-item fairy-mote mote-5" data-speed="0.20" data-drift="0.03"></span>
            </div>`);
    }

    // Use one layered, translucent pond-wave transition between sections.
    document.querySelectorAll('.wave-divider, .hero-pond-wave').forEach((wave, index) => {
        const gradientId = `pond-melt-${index}`;
        const fadeId = `pond-fade-${index}`;
        const fadeGradientId = `pond-fade-gradient-${index}`;
        wave.setAttribute('viewBox', '0 0 1200 80');
        wave.innerHTML = `
            <defs>
                <linearGradient id="${gradientId}" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#dff7ef" stop-opacity="0.12" />
                    <stop offset="42%" stop-color="#cfeee8" stop-opacity="0.5" />
                    <stop offset="100%" stop-color="#dceff5" stop-opacity="0.42" />
                </linearGradient>
                <linearGradient id="${fadeGradientId}" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="white" />
                    <stop offset="68%" stop-color="white" stop-opacity="0.94" />
                    <stop offset="100%" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <mask id="${fadeId}"><rect width="1200" height="80" fill="url(#${fadeGradientId})" /></mask>
            </defs>
            <g mask="url(#${fadeId})">
                <path class="pond-wave-haze" d="M0 12 C105 0 185 25 300 17 C420 8 485 1 610 18 C735 35 825 4 930 15 C1040 27 1115 7 1200 13 V80 H0Z" fill="url(#${gradientId})" />
                <path class="pond-wave-back" d="M0 31 C95 15 180 42 292 30 C405 18 500 14 615 34 C730 54 820 20 930 29 C1035 38 1110 22 1200 27 V80 H0Z" fill="#bfe7df" fill-opacity="0.38" />
                <path class="pond-wave-front" d="M0 48 C92 31 192 59 310 45 C425 31 510 29 625 49 C745 69 830 36 945 43 C1055 50 1122 38 1200 41 V80 H0Z" fill="#cfeaf3" fill-opacity="0.32" />
                <ellipse cx="92" cy="53" rx="16" ry="5.5" fill="#8ec286" fill-opacity="0.42" />
                <ellipse cx="958" cy="48" rx="11" ry="4" fill="#8ec286" fill-opacity="0.34" />
            </g>
            <path d="M0 31 C95 15 180 42 292 30 C405 18 500 14 615 34 C730 54 820 20 930 29 C1035 38 1110 22 1200 27" fill="none" stroke="#9fd6cc" stroke-opacity="0.34" stroke-width="1.5" />
            <path d="M0 48 C92 31 192 59 310 45 C425 31 510 29 625 49 C745 69 830 36 945 43 C1055 50 1122 38 1200 41" fill="none" stroke="#a9d9e8" stroke-opacity="0.38" stroke-width="1.5" />`;
    });

    // Keep one shared footer structure and verified destinations on every page.
    const footer = document.querySelector('footer');
    if (footer) {
        if (!footer.previousElementSibling?.classList.contains('footer-pond-transition')) {
            footer.insertAdjacentHTML('beforebegin', `
                <div class="footer-pond-transition" aria-hidden="true">
                    <svg class="footer-wave" viewBox="0 0 1200 100" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="footer-wave-gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stop-color="#527d72" stop-opacity="0" />
                                <stop offset="48%" stop-color="#527d72" stop-opacity="0.48" />
                                <stop offset="100%" stop-color="#527d72" />
                            </linearGradient>
                        </defs>
                        <path d="M0 34 C95 8 180 49 295 27 C410 5 500 20 615 42 C730 64 820 12 935 30 C1045 47 1125 15 1200 28 V100 H0Z" fill="url(#footer-wave-gradient)" />
                        <path d="M0 62 C105 37 195 76 315 55 C430 35 525 43 640 66 C755 89 845 46 955 58 C1065 70 1130 49 1200 53 V100 H0Z" fill="#527d72" fill-opacity="0.58" />
                        <path d="M0 34 C95 8 180 49 295 27 C410 5 500 20 615 42 C730 64 820 12 935 30 C1045 47 1125 15 1200 28" fill="none" stroke="#79a99d" stroke-opacity="0.38" stroke-width="1.6" />
                    </svg>
                    <div class="footer-pond-decoration">
                        <div class="pond-lily pond-lily-left"><svg viewBox="0 0 60 60"><path d="M30 30 52 16A25 25 0 1 0 52 44Z" fill="#8ec286"/><g fill="#ffd6e3"><ellipse cx="30" cy="18" rx="6" ry="12"/><ellipse cx="39" cy="27" rx="6" ry="12" transform="rotate(60 39 27)"/><ellipse cx="21" cy="27" rx="6" ry="12" transform="rotate(-60 21 27)"/></g><circle cx="30" cy="29" r="5" fill="#fbbf24"/></svg></div>
                        <svg class="pond-flower" viewBox="0 0 40 40"><g fill="#f9a8d4"><ellipse cx="28" cy="20" rx="7" ry="5"/><ellipse cx="22.47" cy="27.61" rx="7" ry="5" transform="rotate(72 22.47 27.61)"/><ellipse cx="13.53" cy="24.7" rx="7" ry="5" transform="rotate(144 13.53 24.7)"/><ellipse cx="13.53" cy="15.3" rx="7" ry="5" transform="rotate(216 13.53 15.3)"/><ellipse cx="22.47" cy="12.39" rx="7" ry="5" transform="rotate(288 22.47 12.39)"/></g><circle cx="20" cy="20" r="5.5" fill="#facc15"/></svg>
                        <div class="pond-lily pond-lily-right"><svg viewBox="0 0 60 60"><path d="M30 30 52 16A25 25 0 1 0 52 44Z" fill="#7fb978"/><circle cx="26" cy="28" r="4" fill="#fde68a"/></svg></div>
                    </div>
                </div>`);
        }
        footer.innerHTML = `
            <div class="footer-container">
                <div class="footer-brand">
                    <a href="index.html" class="footer-logo"><img src="images/logo.png" alt="" width="42" height="42"><span>KeramiiKero</span></a>
                    <p>Dein Keramikmalcafé & Töpferstudio in Schechen bei Rosenheim. Kreativität zum Anfassen für Groß & Klein.</p>
                    <div class="footer-social" aria-label="KeramiiKero im Netz">
                        <a href="https://www.instagram.com/keramiikero" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="KeramiiKero auf Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"></circle></svg></a>
                        <a href="https://www.facebook.com/keramiikero" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="KeramiiKero auf Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.2l.8-4h-4V9c0-.7.3-1 1-1Z"></path></svg></a>
                        <a href="https://www.youtube.com/@keramiikero" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="KeramiiKero auf YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.3 7.2a2.8 2.8 0 0 0-2-2C17.6 4.7 12 4.7 12 4.7s-5.6 0-7.3.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.2 12a29 29 0 0 0 .5 4.8 2.8 2.8 0 0 0 2 2c1.7.5 7.3.5 7.3.5s5.6 0 7.3-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.8 29 29 0 0 0-.5-4.8Z"></path><path d="m10 15.2 5-3.2-5-3.2Z" fill="currentColor" stroke="none"></path></svg></a>
                        <a href="mailto:info@keramiikero.de" class="social-icon-btn" aria-label="E-Mail an KeramiiKero"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="3"></rect><path d="m3 6 9 7 9-7"></path></svg></a>
                    </div>
                </div>
                <div class="footer-col"><h4>Seiten</h4><ul><li><a href="index.html">Home</a></li><li><a href="angebote-preise.html">Angebote & Preise</a></li><li><a href="ablauf-techniken.html">Ablauf & Techniken</a></li><li><a href="toepferwerkstatt.html">Töpferwerkstatt</a></li><li><a href="workshops-events.html">Workshops & Events</a></li><li><a href="kuenstler-shop.html">Künstler-Shop</a></li><li><a href="galerie.html">Galerie</a></li></ul></div>
                <div class="footer-col"><h4>Öffnungszeiten</h4><ul><li><strong>Mi – Fr:</strong> 14:00 – 18:00 Uhr</li><li><strong>Sa & So:</strong> 10:00 – 17:00 Uhr</li><li><em>Wochenende: ohne Termin möglich</em></li><li><strong>Töpferwerkstatt:</strong> 24/7 per Nuki Zugang</li></ul></div>
                <div class="footer-col"><h4>Kontakt & Info</h4><ul><li><a href="kontakt.html">Anfahrt & Studio</a></li><li><a href="kontakt.html#faq">Häufige Fragen (FAQ)</a></li><li><a href="https://www.etermin.net/keramiikero" target="_blank" rel="noopener noreferrer">Online-Terminbuchung</a></li></ul></div>
            </div>
            <div class="footer-bottom"><p>&copy; 2026 KeramiiKero. Alle Rechte vorbehalten.</p><div class="footer-legal-links"><a href="impressum.html">Impressum</a><a href="datenschutz.html">Datenschutz</a></div></div>`;
    }

    // =========================================================================
    // 1. Mobile Menu Toggle + Resize Fix
    // =========================================================================
    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuButton && mobileMenu) {
        mobileMenu.id ||= 'mobile-navigation';
        menuButton.setAttribute('aria-controls', mobileMenu.id);
        menuButton.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            menuButton.setAttribute('aria-expanded', String(isOpen));
            menuButton.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
        });

        // Close when clicking any link inside mobile menu
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.setAttribute('aria-label', 'Menü öffnen');
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.setAttribute('aria-label', 'Menü öffnen');
                menuButton.focus();
            }
        });

        // Fix: auto-close mobile menu when viewport reaches desktop width
        const desktopQuery = window.matchMedia('(min-width: 1281px)');
        const closeMenuOnDesktop = (e) => {
            if (e.matches) {
                mobileMenu.classList.remove('open');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.setAttribute('aria-label', 'Menü öffnen');
            }
        };
        // Use modern addEventlistener API for matchMedia, with fallback
        if (desktopQuery.addEventListener) {
            desktopQuery.addEventListener('change', closeMenuOnDesktop);
        } else if (desktopQuery.addListener) {
            desktopQuery.addListener(closeMenuOnDesktop);
        }
        // Run once on load in case page loads at desktop width
        closeMenuOnDesktop(desktopQuery);
    }

    // =========================================================================
    // 2. Hero Decorations: continuous floating + smooth scroll/pointer parallax
    // =========================================================================
    const hero = document.querySelector('.hero, .subpage-hero');
    const decoItems = document.querySelectorAll('.hero-deco-item');
    const heroMotion = {
        clickEnergy: 0,
        clickX: 0.5,
        clickY: 0.5
    };

    if (decoItems.length > 0 && hero) {
        if (!prefersReducedMotion) {
            let targetMouseX = 0;
            let targetMouseY = 0;
            let currentMouseX = 0;
            let currentMouseY = 0;
            let targetScroll = window.scrollY;
            let currentScroll = targetScroll;
            const mountedAt = performance.now();

            window.addEventListener('scroll', () => {
                targetScroll = window.scrollY;
            }, { passive: true });

            hero.addEventListener('pointermove', (e) => {
                const rect = hero.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                targetMouseX = ((e.clientX - cx) / rect.width) * 2;
                targetMouseY = ((e.clientY - cy) / rect.height) * 2;
            });

            hero.addEventListener('pointerleave', () => {
                targetMouseX = 0;
                targetMouseY = 0;
            });

            const animateDecorations = (time) => {
                currentMouseX += (targetMouseX - currentMouseX) * 0.045;
                currentMouseY += (targetMouseY - currentMouseY) * 0.045;
                currentScroll += (targetScroll - currentScroll) * 0.075;
                heroMotion.clickEnergy *= 0.94;

                const heroRect = hero.getBoundingClientRect();
                const isNearViewport = heroRect.bottom > -180 && heroRect.top < window.innerHeight + 180;

                if (isNearViewport) {
                    const mountProgress = Math.min(1, (time - mountedAt) / 1100);
                    const mountEase = 1 - Math.pow(1 - mountProgress, 3);

                    decoItems.forEach((item, index) => {
                        const speed = parseFloat(item.dataset.speed || 0.08);
                        const rotateFactor = parseFloat(item.dataset.rotate || 0.05);
                        const driftFactor = parseFloat(item.dataset.drift || 0);
                        const phase = index * 1.73;
                        const direction = Math.sign(speed || 1);
                        const idleX = Math.sin(time * 0.00042 + phase) * (5 + Math.abs(speed) * 28);
                        const idleY = Math.cos(time * 0.00034 + phase * 0.82) * (6 + Math.abs(speed) * 34);
                        const idleRotation = Math.sin(time * 0.00025 + phase) * 2.4;
                        const pointerX = currentMouseX * (9 + Math.abs(speed) * 42) * direction;
                        const pointerY = currentMouseY * (7 + Math.abs(speed) * 32) * direction;
                        const itemRect = item.getBoundingClientRect();
                        const itemX = (itemRect.left - heroRect.left + itemRect.width / 2) / Math.max(heroRect.width, 1);
                        const itemY = (itemRect.top - heroRect.top + itemRect.height / 2) / Math.max(heroRect.height, 1);
                        const clickDistance = Math.hypot(itemX - heroMotion.clickX, itemY - heroMotion.clickY);
                        const clickFalloff = Math.max(0, 1 - clickDistance / 0.75);
                        const clickWave = heroMotion.clickEnergy * clickFalloff * 22;
                        const clickX = Math.sin(phase + heroMotion.clickX * 4) * clickWave;
                        const clickY = Math.cos(phase + heroMotion.clickY * 4) * clickWave;
                        const scrollY = currentScroll * speed;
                        const scrollX = currentScroll * driftFactor;
                        const entryY = (1 - mountEase) * 18;
                        const scale = 0.92 + mountEase * 0.08;
                        const x = scrollX + idleX + pointerX + clickX;
                        const y = scrollY + idleY + pointerY + clickY + entryY;
                        const rotation = currentScroll * rotateFactor + idleRotation + clickWave * 0.12 * direction;

                        item.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${rotation.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
                    });
                }

                requestAnimationFrame(animateDecorations);
            };
            requestAnimationFrame(animateDecorations);
        } else {
            decoItems.forEach(item => {
                item.style.transform = 'none';
            });
        }
    }

    // =========================================================================
    // 3. Hero Click Ripple (on empty hero areas)
    // =========================================================================
    if (hero && !prefersReducedMotion) {
        hero.addEventListener('click', (e) => {
            // Don't trigger on interactive elements
            const interactive = e.target.closest('a, button, input, .mascot-container, .hero-info-card, .carousel-frame, nav');
            if (interactive) return;

            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            heroMotion.clickEnergy = 1;
            heroMotion.clickX = x / rect.width;
            heroMotion.clickY = y / rect.height;

            const ripple = document.createElement('div');
            ripple.className = 'pond-ripple';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            hero.appendChild(ripple);

            // Remove after animation
            ripple.addEventListener('animationend', () => ripple.remove());
        });
    }

    // =========================================================================
    // 4. Dynamic Golden Fairy Dust Particles
    // =========================================================================
    const fairyContainer = document.querySelector('.hero-decoration');
    if (fairyContainer && !prefersReducedMotion) {
        const moteCount = 28;
        for (let i = 0; i < moteCount; i++) {
            const mote = document.createElement('div');
            mote.className = 'fairy-mote-js';

            // Random size: 2–6px
            const size = 2 + Math.random() * 4;
            // Random position
            const left = 5 + Math.random() * 90;
            const top = 5 + Math.random() * 90;
            // Random animation duration & delay
            const dur = 1.8 + Math.random() * 3.2;
            const delay = Math.random() * 4;

            mote.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${left}%;
                top: ${top}%;
                --dur: ${dur}s;
                --delay: ${delay}s;
                opacity: 0;
            `;
            fairyContainer.appendChild(mote);
        }
    }

    // =========================================================================
    // 5. Offer-section decorations: reveal, idle float and section parallax
    // =========================================================================
    const previewsSection = document.querySelector('.previews-section');
    const previewsDecoration = document.querySelector('.previews-decoration');

    if (previewsSection && previewsDecoration) {
        if ('IntersectionObserver' in window) {
            const previewObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        previewsDecoration.classList.add('is-visible');
                        observer.disconnect();
                    }
                });
            }, { threshold: 0.12 });
            previewObserver.observe(previewsSection);
        } else {
            previewsDecoration.classList.add('is-visible');
        }

        if (!prefersReducedMotion) {
            let targetX = 0;
            let targetY = 0;
            let currentX = 0;
            let currentY = 0;
            let clickBoostX = 0;
            let clickBoostY = 0;

            const updatePreviewScrollTarget = () => {
                const rect = previewsSection.getBoundingClientRect();
                const distanceFromCenter = window.innerHeight / 2 - (rect.top + rect.height / 2);
                targetY = Math.max(-28, Math.min(28, distanceFromCenter * 0.045));
            };

            window.addEventListener('scroll', updatePreviewScrollTarget, { passive: true });
            updatePreviewScrollTarget();

            previewsSection.addEventListener('pointermove', event => {
                const rect = previewsSection.getBoundingClientRect();
                targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 14;
            });

            previewsSection.addEventListener('pointerleave', () => {
                targetX = 0;
            });

            previewsSection.addEventListener('click', event => {
                if (event.target.closest('a, button, input')) return;
                const rect = previewsSection.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                clickBoostX = (x / rect.width - 0.5) * 26;
                clickBoostY = -14;

                const ripple = document.createElement('span');
                ripple.className = 'pond-ripple';
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                previewsSection.appendChild(ripple);
                ripple.addEventListener('animationend', () => ripple.remove());
            });

            const animatePreviewDecorations = () => {
                currentX += (targetX - currentX) * 0.045;
                currentY += (targetY - currentY) * 0.055;
                clickBoostX *= 0.93;
                clickBoostY *= 0.93;
                previewsDecoration.style.transform = `translate3d(${(currentX + clickBoostX).toFixed(2)}px, ${(currentY + clickBoostY).toFixed(2)}px, 0)`;
                requestAnimationFrame(animatePreviewDecorations);
            };
            requestAnimationFrame(animatePreviewDecorations);
        } else {
            previewsDecoration.classList.add('is-visible');
        }
    }

    // =========================================================================
    // 6. Ambient decorations across the remaining page sections
    // =========================================================================
    const ambientSections = Array.from(document.querySelectorAll('.ambient-section'));
    if (ambientSections.length) {
        const ambientStates = ambientSections.map(section => ({
            section,
            layer: section.querySelector('.section-decoration'),
            visible: false,
            targetX: 0,
            targetY: 0,
            currentX: 0,
            currentY: 0,
            clickX: 0,
            clickY: 0
        }));

        const revealAmbientSection = state => {
            state.visible = true;
            state.layer?.classList.add('is-visible');
        };

        if ('IntersectionObserver' in window) {
            const ambientObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const state = ambientStates.find(item => item.section === entry.target);
                    if (!state) return;
                    state.visible = entry.isIntersecting;
                    if (entry.isIntersecting) revealAmbientSection(state);
                });
            }, { rootMargin: '180px 0px', threshold: 0.02 });
            ambientStates.forEach(state => ambientObserver.observe(state.section));
        } else {
            ambientStates.forEach(revealAmbientSection);
        }

        ambientStates.forEach(state => {
            state.section.addEventListener('pointermove', event => {
                if (prefersReducedMotion) return;
                const rect = state.section.getBoundingClientRect();
                state.targetX = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 18;
            });
            state.section.addEventListener('pointerleave', () => {
                state.targetX = 0;
            });
            state.section.addEventListener('click', event => {
                if (prefersReducedMotion || event.target.closest('a, button, input, textarea, select, iframe')) return;
                const rect = state.section.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                state.clickX = (x / Math.max(rect.width, 1) - 0.5) * 30;
                state.clickY = -16;
                const ripple = document.createElement('span');
                ripple.className = 'pond-ripple ambient-ripple';
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                state.section.appendChild(ripple);
                ripple.addEventListener('animationend', () => ripple.remove());
            });
        });

        if (!prefersReducedMotion) {
            const updateAmbientMotion = () => {
                ambientStates.forEach(state => {
                    if (!state.visible || !state.layer) return;
                    const rect = state.section.getBoundingClientRect();
                    const centerDistance = window.innerHeight / 2 - (rect.top + rect.height / 2);
                    state.targetY = Math.max(-34, Math.min(34, centerDistance * 0.035));
                    state.currentX += (state.targetX - state.currentX) * 0.045;
                    state.currentY += (state.targetY - state.currentY) * 0.05;
                    state.clickX *= 0.93;
                    state.clickY *= 0.93;
                    state.layer.style.transform = `translate3d(${(state.currentX + state.clickX).toFixed(2)}px, ${(state.currentY + state.clickY).toFixed(2)}px, 0)`;
                });
                requestAnimationFrame(updateAmbientMotion);
            };
            requestAnimationFrame(updateAmbientMotion);
        } else {
            ambientStates.forEach(revealAmbientSection);
        }
    }

    const galleryItems = document.querySelectorAll('.gallery-loop-item');
    if (galleryItems.length) {
        const galleryLoop = document.querySelector('.gallery-loop');
        galleryLoop?.addEventListener('pointerdown', () => {
            galleryLoop.style.animationPlayState = 'paused';
        });
        const lightbox = document.createElement('dialog');
        lightbox.className = 'gallery-lightbox';
        lightbox.innerHTML = `<button class="gallery-lightbox-close" type="button" aria-label="Bild schließen">×</button><img src="" alt="">`;
        document.body.appendChild(lightbox);
        const lightboxImage = lightbox.querySelector('img');
        const closeLightbox = () => lightbox.close();
        lightbox.querySelector('.gallery-lightbox-close').addEventListener('click', closeLightbox);
        lightbox.addEventListener('close', () => {
            if (galleryLoop) galleryLoop.style.animationPlayState = '';
        });
        lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
        galleryItems.forEach(item => item.addEventListener('click', () => {
            const image = item.querySelector('img');
            if (!image) return;
            lightboxImage.src = image.currentSrc || image.src;
            lightboxImage.alt = image.alt || 'KeramiiKero Galerie';
            lightbox.showModal();
        }));
    }

    // =========================================================================
    // 7. Interactive Kero Mascot
    // =========================================================================
    const mascot = document.querySelector('.mascot-container');
    if (mascot) {
        let bubbleTimeout;
        const quaks = [
            'Quak! Schön, dass du da bist! 🐸',
            'Quak! Lass uns malen! 🎨',
            'Quak! Du machst das super! ⭐',
            'Quak! Keramik macht glücklich! 🌸',
        ];
        let quakIdx = 0;
        const bubble = mascot.querySelector('.speech-bubble');

        const makeKeroSpeak = () => {
            if (bubble) {
                bubble.textContent = quaks[quakIdx % quaks.length];
                quakIdx++;
            }
            mascot.classList.add('show-speech');
            clearTimeout(bubbleTimeout);
            bubbleTimeout = setTimeout(() => {
                mascot.classList.remove('show-speech');
            }, 2400);
        };

        mascot.addEventListener('click', makeKeroSpeak);
        mascot.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                makeKeroSpeak();
            }
        });
    }

    // =========================================================================
    // 6. Hero Carousel Auto-Rotation
    // =========================================================================
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 1 && !prefersReducedMotion) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3500);
    }

    // =========================================================================
    // 7. FAQ Accordion (Kontakt page)
    // =========================================================================
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach((btn, index) => {
        const item = btn.closest('.faq-item');
        const answer = item?.querySelector('.faq-answer');
        if (item && answer) {
            const answerId = `faq-answer-${index + 1}`;
            answer.id = answerId;
            btn.setAttribute('aria-controls', answerId);
            btn.setAttribute('aria-expanded', String(item.classList.contains('open')));
            answer.setAttribute('role', 'region');
            answer.setAttribute('aria-hidden', String(!item.classList.contains('open')));
        }
        btn.addEventListener('click', () => {
            if (item) {
                const isOpen = item.classList.toggle('open');
                btn.setAttribute('aria-expanded', String(isOpen));
                answer?.setAttribute('aria-hidden', String(!isOpen));
            }
        });
    });

    // Pricing carousel: touch swipe on mobile, side arrows on larger screens.
    const pricingMedia = window.matchMedia('(max-width: 700px)');
    document.querySelectorAll('.pricing-grid').forEach((grid, gridIndex) => {
        const cards = [...grid.querySelectorAll(':scope > .pricing-card')];
        if (!cards.length) return;

        grid.classList.add('mobile-pricing-carousel');
        const shell = document.createElement('div');
        shell.className = 'pricing-carousel-shell';
        grid.before(shell);
        const controls = document.createElement('div');
        controls.className = 'pricing-carousel-controls';
        controls.innerHTML = `
            <button type="button" class="pricing-carousel-arrow pricing-carousel-prev" aria-label="Vorheriges Angebot">←</button>
            <span class="pricing-carousel-status" aria-live="polite"></span>
            <span class="pricing-swipe-hint" aria-hidden="true">↔ Wischen</span>
            <button type="button" class="pricing-carousel-arrow pricing-carousel-next" aria-label="Nächstes Angebot">→</button>
        `;
        shell.append(controls, grid);

        cards.forEach((card, cardIndex) => {
            const title = card.querySelector('h3');
            const price = card.querySelector('.pricing-price');
            if (!price) return;

            const details = document.createElement('div');
            details.className = 'pricing-card-details';
            details.id = `pricing-details-${gridIndex + 1}-${cardIndex + 1}`;
            let nextElement = price.nextElementSibling;
            while (nextElement) {
                const followingElement = nextElement.nextElementSibling;
                details.appendChild(nextElement);
                nextElement = followingElement;
            }

            const inquiry = document.createElement('a');
            inquiry.className = 'btn-secondary pricing-inquiry-btn';
            inquiry.href = 'kontakt.html#direkt-kontakt';
            inquiry.textContent = 'Anfragen';
            details.appendChild(inquiry);

            const toggle = document.createElement('button');
            toggle.type = 'button';
            toggle.className = 'pricing-card-toggle';
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-controls', details.id);
            toggle.innerHTML = '<span>Details anzeigen</span><span class="pricing-card-chevron" aria-hidden="true"></span>';
            price.after(toggle, details);

            toggle.addEventListener('click', () => {
                const expanded = card.classList.toggle('is-expanded');
                toggle.setAttribute('aria-expanded', String(expanded));
                toggle.querySelector('span').textContent = expanded ? 'Details schließen' : 'Details anzeigen';
                details.setAttribute('aria-hidden', String(!expanded));
                details.inert = !expanded;
            });

            card.dataset.cardTitle = title?.textContent.trim() || `Angebot ${cardIndex + 1}`;
        });

        let currentCard = 0;
        const status = controls.querySelector('.pricing-carousel-status');
        const updateCarousel = (collapseCards = true) => {
            const isMobile = pricingMedia.matches;
            cards.forEach((card, index) => {
                const active = index === currentCard;
                card.classList.toggle('is-active', !isMobile || active);
                card.setAttribute('aria-hidden', String(isMobile && !active));
                const toggle = card.querySelector('.pricing-card-toggle');
                const details = card.querySelector('.pricing-card-details');
                if (isMobile && collapseCards) {
                    card.classList.remove('is-expanded');
                    toggle?.setAttribute('aria-expanded', 'false');
                    if (toggle) toggle.querySelector('span').textContent = 'Details anzeigen';
                    details?.setAttribute('aria-hidden', 'true');
                    if (details) details.inert = true;
                } else if (!isMobile) {
                    details?.setAttribute('aria-hidden', 'false');
                    if (details) details.inert = false;
                }
            });
            if (status) status.textContent = `${currentCard + 1} / ${cards.length}`;
        };

        controls.querySelector('.pricing-carousel-prev').addEventListener('click', () => {
            currentCard = (currentCard - 1 + cards.length) % cards.length;
            updateCarousel();
        });
        controls.querySelector('.pricing-carousel-next').addEventListener('click', () => {
            currentCard = (currentCard + 1) % cards.length;
            updateCarousel();
        });

        let pointerStartX = null;
        grid.addEventListener('pointerdown', event => {
            if (!pricingMedia.matches) return;
            pointerStartX = event.clientX;
            grid.setPointerCapture?.(event.pointerId);
        });
        grid.addEventListener('pointerup', event => {
            if (pointerStartX === null || !pricingMedia.matches) return;
            const deltaX = event.clientX - pointerStartX;
            pointerStartX = null;
            if (Math.abs(deltaX) < 45) return;
            currentCard = deltaX < 0
                ? (currentCard + 1) % cards.length
                : (currentCard - 1 + cards.length) % cards.length;
            updateCarousel();
        });
        grid.addEventListener('pointercancel', () => { pointerStartX = null; });

        pricingMedia.addEventListener('change', () => updateCarousel(pricingMedia.matches));
        updateCarousel();
    });

    // Re-apply deep links after the page layout and enhancements are ready.
    if (window.location.hash) {
        const hashTarget = document.getElementById(window.location.hash.slice(1));
        if (hashTarget) {
            window.setTimeout(() => hashTarget.scrollIntoView({ block: 'start' }), 350);
        }
    }

    // Legacy accordion builder retained for older page variants.
    const upgradePricingCards = (listClass, itemClass, headerClass, bodyClass, bodyInnerClass, prefix) => {
        const grid = document.querySelector('.pricing-grid');
        if (!grid) return;
        grid.className = listClass;
        [...grid.querySelectorAll(':scope > .pricing-card')].forEach((card, index) => {
            const title = card.querySelector('h3');
            const subtitle = card.querySelector('p');
            const price = card.querySelector('.pricing-price');
            const badge = card.querySelector('.pricing-badge');
            const previewImage = card.querySelector('.pricing-preview-image');
            if (!title || !price) return;

            const panelId = `${prefix}-panel-${index + 1}`;
            const header = document.createElement('button');
            header.type = 'button';
            header.className = headerClass;
            if (previewImage) header.classList.add('has-preview-image');
            header.setAttribute('aria-expanded', 'false');
            header.setAttribute('aria-controls', panelId);

            const left = document.createElement('span');
            left.className = 'offer-header-left';
            if (badge) left.appendChild(badge);
            const heading = document.createElement('span');
            heading.className = 'offer-title';
            heading.textContent = title.textContent;
            left.appendChild(heading);
            if (subtitle) {
                const preview = document.createElement('span');
                preview.className = 'offer-subtitle';
                preview.textContent = subtitle.textContent;
                left.appendChild(preview);
            }

            const right = document.createElement('span');
            right.className = 'offer-header-right';
            const priceLabel = document.createElement('span');
            priceLabel.className = 'offer-price-badge';
            priceLabel.textContent = price.textContent.trim();
            const icon = document.createElement('span');
            icon.className = 'offer-toggle-icon';
            icon.setAttribute('aria-hidden', 'true');
            right.append(priceLabel, icon);
            if (previewImage) header.append(previewImage);
            header.append(left, right);

            title.remove();
            subtitle?.remove();
            price.remove();
            const body = document.createElement('div');
            body.className = bodyClass;
            body.id = panelId;
            body.setAttribute('role', 'region');
            body.setAttribute('aria-hidden', 'true');
            const inner = document.createElement('div');
            inner.className = bodyInnerClass;
            while (card.firstChild) inner.appendChild(card.firstChild);
            body.appendChild(inner);
            card.className = `${itemClass}${card.classList.contains('featured') ? ' featured' : ''}`;
            card.append(header, body);
        });
    };

    // Pricing cards remain fully visible on offers and pottery pages.
    // The accordion upgrader is intentionally not initialized.

    // =========================================================================
    // 8. Offer Accordions (Angebote & Preise)
    // =========================================================================
    const offerHeaders = document.querySelectorAll('.offer-accordion-header');
    offerHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordion = header.closest('.offer-accordion');
            if (!accordion) return;
            const isOpen = accordion.classList.toggle('open');
            header.setAttribute('aria-expanded', String(isOpen));
            const body = accordion.querySelector('.offer-body');
            body?.setAttribute('aria-hidden', String(!isOpen));
            if (body) body.style.maxHeight = isOpen ? `${body.scrollHeight}px` : '0px';
        });
    });

    // =========================================================================
    // 9. Töpfer Accordions (Töpferwerkstatt)
    // =========================================================================
    const toepferHeaders = document.querySelectorAll('.toepfer-accordion-header');
    toepferHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordion = header.closest('.toepfer-accordion');
            if (!accordion) return;
            const isOpen = accordion.classList.toggle('open');
            header.setAttribute('aria-expanded', String(isOpen));
            const body = accordion.querySelector('.toepfer-body');
            body?.setAttribute('aria-hidden', String(!isOpen));
            if (body) body.style.maxHeight = isOpen ? `${body.scrollHeight}px` : '0px';
        });
    });

    // =========================================================================
    // 10. Step Carousel (Ablauf page)
    // =========================================================================
    const stepCarousel = document.querySelector('.step-carousel');
    if (stepCarousel) {
        const inner = stepCarousel.querySelector('.step-carousel-inner');
        const slides = stepCarousel.querySelectorAll('.step-carousel-slide');
        const dots = document.querySelectorAll('.step-carousel .carousel-dot');
        let idx = 0;
        const total = slides.length;

        const goTo = (n) => {
            idx = (n + total) % total;
            inner.style.transform = `translateX(-${idx * 100}%)`;
            dots.forEach((d, i) => {
                d.classList.toggle('active', i === idx);
                d.setAttribute('aria-current', i === idx ? 'true' : 'false');
            });
            slides.forEach((slide, i) => slide.setAttribute('aria-hidden', String(i !== idx)));
        };

        document.querySelector('.step-carousel .carousel-btn-prev')?.addEventListener('click', () => goTo(idx - 1));
        document.querySelector('.step-carousel .carousel-btn-next')?.addEventListener('click', () => goTo(idx + 1));
        dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

        // Pointer swipe support for touchscreens.
        let pointerStartX = null;
        stepCarousel.addEventListener('pointerdown', e => {
            if (!window.matchMedia('(max-width: 700px)').matches) return;
            pointerStartX = e.clientX;
            stepCarousel.setPointerCapture?.(e.pointerId);
        });
        stepCarousel.addEventListener('pointerup', e => {
            if (pointerStartX === null) return;
            const delta = e.clientX - pointerStartX;
            pointerStartX = null;
            if (Math.abs(delta) > 40) goTo(delta < 0 ? idx + 1 : idx - 1);
        });
        stepCarousel.addEventListener('pointercancel', () => { pointerStartX = null; });

        // Keyboard
        stepCarousel.addEventListener('keydown', e => {
            if (e.key === 'ArrowRight') goTo(idx + 1);
            if (e.key === 'ArrowLeft') goTo(idx - 1);
        });

        goTo(0);
    }

    // =========================================================================
    // 11. Technique Carousel (Ablauf & Techniken page)
    // =========================================================================
    const techCarousel = document.querySelector('.tech-carousel');
    if (techCarousel) {
        const inner = techCarousel.querySelector('.tech-carousel-inner');
        const slides = techCarousel.querySelectorAll('.tech-carousel-slide');
        const dots = document.querySelectorAll('.tech-carousel .carousel-dot');
        let idx = 0;
        const total = slides.length;

        const goTo = (n) => {
            idx = (n + total) % total;
            inner.style.transform = `translateX(-${idx * 100}%)`;
            dots.forEach((d, i) => {
                d.classList.toggle('active', i === idx);
                d.setAttribute('aria-current', i === idx ? 'true' : 'false');
            });
            slides.forEach((slide, i) => slide.setAttribute('aria-hidden', String(i !== idx)));
        };

        document.querySelector('.tech-carousel .carousel-btn-prev')?.addEventListener('click', () => goTo(idx - 1));
        document.querySelector('.tech-carousel .carousel-btn-next')?.addEventListener('click', () => goTo(idx + 1));
        dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

        // Pointer swipe support for touchscreens.
        let pointerStartX = null;
        techCarousel.addEventListener('pointerdown', e => {
            if (!window.matchMedia('(max-width: 700px)').matches) return;
            pointerStartX = e.clientX;
            techCarousel.setPointerCapture?.(e.pointerId);
        });
        techCarousel.addEventListener('pointerup', e => {
            if (pointerStartX === null) return;
            const delta = e.clientX - pointerStartX;
            pointerStartX = null;
            if (Math.abs(delta) > 40) goTo(delta < 0 ? idx + 1 : idx - 1);
        });
        techCarousel.addEventListener('pointercancel', () => { pointerStartX = null; });

        techCarousel.addEventListener('keydown', e => {
            if (e.key === 'ArrowRight') goTo(idx + 1);
            if (e.key === 'ArrowLeft') goTo(idx - 1);
        });

        goTo(0);
    }

    // =========================================================================
    // 12. Map app chooser (Kontakt page)
    // =========================================================================
    const mapAppDialog = document.querySelector('.map-app-dialog');
    const mapChoiceTriggers = document.querySelectorAll('.map-choice-trigger');
    const mapDialogClose = document.querySelector('.map-dialog-close');
    const mapCopyAddress = document.querySelector('.map-copy-address');
    const mapCopyStatus = document.querySelector('.map-copy-status');
    const studioAddress = 'Kobel 7, 83135 Schechen';

    const openMapChoices = () => {
        if (!mapAppDialog) return;
        if (typeof mapAppDialog.showModal === 'function') {
            if (!mapAppDialog.open) mapAppDialog.showModal();
        } else {
            mapAppDialog.setAttribute('open', '');
        }
        mapAppDialog.scrollTop = 0;
        window.setTimeout(() => mapDialogClose?.focus(), 0);
    };

    const closeMapChoices = () => {
        if (!mapAppDialog) return;
        if (typeof mapAppDialog.close === 'function' && mapAppDialog.open) {
            mapAppDialog.close();
        } else {
            mapAppDialog.removeAttribute('open');
        }
    };

    mapChoiceTriggers.forEach(trigger => trigger.addEventListener('click', openMapChoices));
    if (mapDialogClose) mapDialogClose.addEventListener('click', closeMapChoices);

    if (mapAppDialog) {
        mapAppDialog.addEventListener('click', (event) => {
            if (event.target === mapAppDialog) closeMapChoices();
        });
    }

    if (mapCopyAddress) {
        mapCopyAddress.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(studioAddress);
                if (mapCopyStatus) mapCopyStatus.textContent = 'Adresse wurde kopiert.';
            } catch {
                if (mapCopyStatus) mapCopyStatus.textContent = studioAddress;
            }
        });
    }

    // =========================================================================
    // 13. Direct contact composer (Kontakt page)
    // =========================================================================
    const directContactForm = document.querySelector('.direct-contact-form');
    if (directContactForm) {
        const channelInputs = directContactForm.querySelectorAll('input[name="contact-channel"]');
        const submitButton = directContactForm.querySelector('.contact-submit');
        const emailField = directContactForm.querySelector('.contact-email-field');
        const phoneField = directContactForm.querySelector('.contact-phone-field');
        const emailInput = directContactForm.elements['contact-email'];
        const phoneInput = directContactForm.elements['contact-phone'];
        const formStatus = directContactForm.querySelector('.contact-form-status');
        const sendNote = directContactForm.querySelector('.contact-send-note');
        const whatsappNumber = '4915141379173';

        const updateContactChannel = () => {
            const channel = directContactForm.elements['contact-channel'].value;
            const usesWhatsApp = channel === 'whatsapp';
            directContactForm.classList.toggle('is-whatsapp', usesWhatsApp);
            submitButton.textContent = usesWhatsApp ? 'In WhatsApp öffnen' : 'E-Mail direkt senden';
            emailField.hidden = usesWhatsApp;
            phoneField.hidden = !usesWhatsApp;
            emailInput.disabled = usesWhatsApp;
            emailInput.required = !usesWhatsApp;
            phoneInput.disabled = !usesWhatsApp;
            phoneInput.required = usesWhatsApp;
            if (sendNote) {
                sendNote.textContent = usesWhatsApp
                    ? 'Deine fertige Nachricht wird in WhatsApp an +49 1514 1379173 geöffnet. Dort musst du nur noch auf „Senden“ tippen.'
                    : 'Deine Nachricht wird per E-Mail direkt an info@keramiikero.de gesendet.';
            }
        };

        channelInputs.forEach(input => input.addEventListener('change', updateContactChannel));
        updateContactChannel();

        directContactForm.addEventListener('submit', async event => {
            event.preventDefault();
            if (!directContactForm.reportValidity()) return;

            const formData = new FormData(directContactForm);
            const channel = formData.get('contact-channel');
            const name = formData.get('contact-name').trim();
            const topic = formData.get('contact-topic');
            const message = formData.get('contact-message').trim();
            const sender = channel === 'whatsapp'
                ? `Telefonnummer: ${formData.get('contact-phone').trim()}`
                : `E-Mail-Adresse: ${formData.get('contact-email').trim()}`;
            const responseChannel = channel === 'whatsapp' ? 'WhatsApp' : 'E-Mail';

            if (channel === 'whatsapp') {
                const whatsappMessage = [
                    'Hallo KeramiiKero,',
                    '',
                    `Name: ${name}`,
                    `Telefonnummer: ${formData.get('contact-phone').trim()}`,
                    `Thema: ${topic}`,
                    '',
                    message
                ].join('\n');
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                if (!whatsappWindow) window.location.href = whatsappUrl;
                formStatus.textContent = 'WhatsApp wurde mit deiner Nachricht geöffnet. Bitte tippe dort noch auf „Senden“.';
                formStatus.classList.remove('is-error');
                return;
            }

            const endpoint = 'https://formsubmit.co/ajax/info@keramiikero.de';
            const payload = {
                _subject: `KeramiiKero-Anfrage: ${topic}`,
                _captcha: 'false',
                _template: 'table',
                Name: name,
                Antwortweg: responseChannel,
                Absender: sender.replace(/^.*?:\s*/, ''),
                Thema: topic,
                Nachricht: message
            };
            if (channel === 'email') payload.email = formData.get('contact-email').trim();

            submitButton.disabled = true;
            submitButton.textContent = 'Wird gesendet …';
            formStatus.textContent = '';
            formStatus.classList.remove('is-error');

            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                const result = await response.json().catch(() => ({}));
                const accepted = response.ok && result.success !== false && result.success !== 'false';
                if (!accepted) {
                    throw new Error(result.message || 'Die Nachricht konnte nicht gesendet werden.');
                }

                directContactForm.reset();
                updateContactChannel();
                formStatus.textContent = 'Danke! Deine Nachricht wurde direkt an uns gesendet.';
            } catch (error) {
                const serviceMessage = error instanceof Error ? error.message : '';
                formStatus.textContent = serviceMessage
                    ? `Das Senden hat nicht funktioniert: ${serviceMessage}`
                    : 'Das Senden hat leider nicht funktioniert. Bitte versuche es später erneut.';
                formStatus.classList.add('is-error');
            } finally {
                submitButton.disabled = false;
                updateContactChannel();
            }
        });
    }
});
