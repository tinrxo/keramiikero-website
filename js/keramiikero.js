document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

    // Keep one shared footer structure and verified destinations on every page.
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `
            <div class="footer-container">
                <div class="footer-brand">
                    <a href="index.html" class="footer-logo"><img src="images/logo.png" alt="" width="42" height="42"><span>KeramiiKero</span></a>
                    <p>Dein Keramikmalcafé & Töpferstudio in Schechen bei Rosenheim. Kreativität zum Anfassen für Groß & Klein.</p>
                    <div class="footer-social" aria-label="KeramiiKero im Netz">
                        <a href="https://www.instagram.com/keramiikero" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="KeramiiKero auf Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"></circle></svg></a>
                        <a href="https://www.facebook.com/keramiikero" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="KeramiiKero auf Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.2l.8-4h-4V9c0-.7.3-1 1-1Z"></path></svg></a>
                        <a href="mailto:info@keramiikero.de" class="social-icon-btn" aria-label="E-Mail an KeramiiKero"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="3"></rect><path d="m3 6 9 7 9-7"></path></svg></a>
                    </div>
                </div>
                <div class="footer-col"><h4>Seiten</h4><ul><li><a href="index.html">Home</a></li><li><a href="angebote-preise.html">Angebote & Preise</a></li><li><a href="ablauf-techniken.html">Ablauf & Techniken</a></li><li><a href="toepferwerkstatt.html">Töpferwerkstatt</a></li><li><a href="workshops-events.html">Workshops & Events</a></li><li><a href="kuenstler-shop.html">Künstler-Shop</a></li></ul></div>
                <div class="footer-col"><h4>Öffnungszeiten</h4><ul><li><strong>Mi – Fr:</strong> 14:00 – 18:00 Uhr</li><li><strong>Sa & So:</strong> 10:00 – 17:00 Uhr</li><li><em>Wochenende: ohne Termin möglich</em></li><li><strong>Töpferwerkstatt:</strong> 24/7 per Nuki Zugang</li></ul></div>
                <div class="footer-col"><h4>Kontakt & Info</h4><ul><li><a href="kontakt.html">Anfahrt & Studio</a></li><li><a href="kontakt.html#faq">Häufige Fragen (FAQ)</a></li><li><a href="https://www.etermin.net/keramiikero" target="_blank" rel="noopener noreferrer">Online-Terminbuchung</a></li><li><a href="kreativmarkt-throwback.html">Kreativmarkt Throwback</a></li></ul></div>
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
    // 2. Hero Decorations: Scroll Parallax + Mouse Parallax
    // =========================================================================
    const hero = document.querySelector('.hero, .subpage-hero');
    const decoItems = document.querySelectorAll('.hero-deco-item');

    if (decoItems.length > 0 && hero) {
        // Scroll-driven parallax
        if (!prefersReducedMotion) {
            let ticking = false;

            const updateParallax = () => {
                const scroll = window.scrollY;
                if (scroll < 1200) {
                    decoItems.forEach(item => {
                        const speed = parseFloat(item.dataset.speed || 0.08);
                        const rotateFactor = parseFloat(item.dataset.rotate || 0.05);
                        const driftFactor = parseFloat(item.dataset.drift || 0);

                        const mouseX = parseFloat(item.style.getPropertyValue('--hero-mouse-x') || 0);
                        const mouseY = parseFloat(item.style.getPropertyValue('--hero-mouse-y') || 0);

                        const y = scroll * speed + mouseY;
                        const x = scroll * driftFactor + mouseX;
                        const r = scroll * rotateFactor;

                        item.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${r}deg)`;
                    });
                }
                ticking = false;
            };

            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(updateParallax);
                    ticking = true;
                }
            }, { passive: true });

            // Mouse parallax on hero
            let mouseRAF = false;
            let targetMouseX = 0;
            let targetMouseY = 0;
            let currentMouseX = 0;
            let currentMouseY = 0;

            hero.addEventListener('mousemove', (e) => {
                const rect = hero.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                // Normalize -1 to 1
                targetMouseX = (e.clientX - cx) / rect.width;
                targetMouseY = (e.clientY - cy) / rect.height;
            });

            hero.addEventListener('mouseleave', () => {
                targetMouseX = 0;
                targetMouseY = 0;
            });

            const animateMouse = () => {
                // Lerp toward target
                currentMouseX += (targetMouseX - currentMouseX) * 0.08;
                currentMouseY += (targetMouseY - currentMouseY) * 0.08;

                const scroll = window.scrollY;
                if (scroll < 1200) {
                    decoItems.forEach(item => {
                        const speed = parseFloat(item.dataset.speed || 0.08);
                        const rotateFactor = parseFloat(item.dataset.rotate || 0.05);
                        const driftFactor = parseFloat(item.dataset.drift || 0);

                        const mouseInfluenceX = currentMouseX * 12 * Math.abs(speed);
                        const mouseInfluenceY = currentMouseY * 10 * Math.abs(speed);

                        const y = scroll * speed + mouseInfluenceY;
                        const x = scroll * driftFactor + mouseInfluenceX;
                        const r = scroll * rotateFactor + currentMouseX * 3 * Math.sign(speed || 1);

                        item.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${r}deg)`;
                    });
                }
                requestAnimationFrame(animateMouse);
            };
            requestAnimationFrame(animateMouse);
        } else {
            // Reduced motion: no parallax, but init once
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
    // 5. Interactive Kero Mascot
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

        mascot.addEventListener('click', () => {
            if (bubble) {
                bubble.textContent = quaks[quakIdx % quaks.length];
                quakIdx++;
            }
            mascot.classList.add('show-speech');
            clearTimeout(bubbleTimeout);
            bubbleTimeout = setTimeout(() => {
                mascot.classList.remove('show-speech');
            }, 2400);
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

    // Upgrade existing offer cards into compact, accessible accordions.
    const upgradePricingCards = (listClass, itemClass, headerClass, bodyClass, bodyInnerClass, prefix) => {
        const grid = document.querySelector('.pricing-grid');
        if (!grid) return;
        grid.className = listClass;
        [...grid.querySelectorAll(':scope > .pricing-card')].forEach((card, index) => {
            const title = card.querySelector('h3');
            const subtitle = card.querySelector('p');
            const price = card.querySelector('.pricing-price');
            const badge = card.querySelector('.pricing-badge');
            if (!title || !price) return;

            const panelId = `${prefix}-panel-${index + 1}`;
            const header = document.createElement('button');
            header.type = 'button';
            header.className = headerClass;
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
            icon.textContent = '+';
            right.append(priceLabel, icon);
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

    const pageFile = window.location.pathname.split('/').pop() || 'index.html';
    if (pageFile === 'angebote-preise.html') upgradePricingCards('offer-accordion-list', 'offer-accordion', 'offer-accordion-header', 'offer-body', 'offer-body-inner', 'offer');
    if (pageFile === 'toepferwerkstatt.html') upgradePricingCards('toepfer-accordion-list', 'toepfer-accordion', 'toepfer-accordion-header', 'toepfer-body', 'toepfer-body-inner', 'toepfer');

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

        // Touch/swipe support
        let touchStartX = 0;
        stepCarousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
        stepCarousel.addEventListener('touchend', e => {
            const delta = e.changedTouches[0].clientX - touchStartX;
            if (Math.abs(delta) > 40) goTo(delta < 0 ? idx + 1 : idx - 1);
        }, { passive: true });

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

        // Touch/swipe support
        let touchStartX = 0;
        techCarousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
        techCarousel.addEventListener('touchend', e => {
            const delta = e.changedTouches[0].clientX - touchStartX;
            if (Math.abs(delta) > 40) goTo(delta < 0 ? idx + 1 : idx - 1);
        }, { passive: true });

        techCarousel.addEventListener('keydown', e => {
            if (e.key === 'ArrowRight') goTo(idx + 1);
            if (e.key === 'ArrowLeft') goTo(idx - 1);
        });

        goTo(0);
    }

    // =========================================================================
    // 12. Map Click-to-Load (Kontakt page)
    // =========================================================================
    const mapPlaceholder = document.querySelector('.map-placeholder');
    const mapLoadBtn = document.querySelector('.map-load-btn');
    const mapIframeWrap = document.querySelector('.map-iframe-wrap');

    const loadMap = () => {
        if (!mapIframeWrap) return;
        // Create iframe dynamically to avoid auto-loading tracking
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.google.com/maps?q=Kobel%207%2C%2083135%20Schechen&output=embed';
        iframe.title = 'Karte: KeramiiKero Schechen';
        iframe.loading = 'lazy';
        iframe.allowFullscreen = true;
        iframe.setAttribute('aria-label', 'Kartenansicht des KeramiiKero Studios in Schechen');
        mapIframeWrap.appendChild(iframe);
        mapIframeWrap.classList.add('loaded');
        if (mapPlaceholder) mapPlaceholder.style.display = 'none';
    };

    if (mapLoadBtn) mapLoadBtn.addEventListener('click', loadMap);
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener('click', (event) => {
            if (!event.target.closest('button')) loadMap();
        });
    }
});
