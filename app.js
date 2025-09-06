/**
 * Al Tapas Restaurant Website - JavaScript
 * Modern dark theme with smooth navigation and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // DOM Elements
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const footerNavLinks = document.querySelectorAll('.footer__nav a');
    const heroCta = document.querySelector('.hero__cta');

    // Initialize the application
    function init() {
        console.log('Al Tapas website initializing...');

        // Show home section by default
        showSection('home');

        setupEventListeners();
        handleInitialHash();
        setupScrollEffects();
        setupAccessibility();
        setupLazyLoading();

        console.log('Initialization complete');
    }

    // Setup all event listeners
    function setupEventListeners() {
        console.log('Setting up event listeners...');

        // Mobile menu toggle
        if (navToggle) {
            navToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleMobileMenu();
            });
        }

        // Navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const targetId = href.substring(1);
                    console.log('Navigating to:', targetId);
                    showSection(targetId);
                    updateActiveNavLink(targetId);
                    closeMobileMenu();

                    // Update URL without triggering page reload
                    history.pushState(null, null, href);
                }
            });
        });

        // Footer navigation links
        footerNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const targetId = href.substring(1);
                    console.log('Footer navigating to:', targetId);
                    showSection(targetId);
                    updateActiveNavLink(targetId);

                    // Update URL
                    history.pushState(null, null, href);

                    // Scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });

        // Hero CTA button
        if (heroCta) {
            heroCta.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                showSection('menu');
                updateActiveNavLink('menu');
                history.pushState(null, null, '#menu');
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        // Handle window resize
        window.addEventListener('resize', handleResize);

        // Handle browser back/forward
        window.addEventListener('popstate', handlePopState);

        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }

    // Show specific section
    function showSection(sectionId) {
        console.log('Showing section:', sectionId);

        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';

            // Add smooth fade-in animation
            targetSection.style.opacity = '0';
            targetSection.style.transform = 'translateY(20px)';

            // Force reflow
            targetSection.offsetHeight;

            // Animate in
            targetSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            targetSection.style.opacity = '1';
            targetSection.style.transform = 'translateY(0)';

            console.log('Section displayed:', sectionId);

            // Update page title
            updatePageTitle(sectionId);

        } else {
            console.warn('Section not found:', sectionId);
        }
    }

    // Update active navigation link
    function updateActiveNavLink(sectionId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
                link.classList.add('active');
            }
        });
    }

    // Update page title based on section
    function updatePageTitle(sectionId) {
        const titles = {
            home: 'Al Tapas Lisbon | Authentic Tapas Restaurant in Lisboa',
            menu: 'Menu | Al Tapas Lisbon - Authentic Spanish & Portuguese Dishes',
            about: 'About Us | Al Tapas - Authentic Iberian Culture in Lisbon',
            contact: 'Contact | Al Tapas Lisbon - Location & Reservations'
        };

        document.title = titles[sectionId] || titles.home;
    }

    // Toggle mobile menu
    function toggleMobileMenu() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        console.log('Mobile menu toggled');
    }

    // Close mobile menu
    function closeMobileMenu() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Handle initial page load with hash
    function handleInitialHash() {
        const hash = window.location.hash;
        if (hash && hash.length > 1) {
            const sectionId = hash.substring(1);
            showSection(sectionId);
            updateActiveNavLink(sectionId);
        } else {
            showSection('home');
            updateActiveNavLink('home');
        }
    }

    // Handle browser back/forward buttons
    function handlePopState() {
        handleInitialHash();
    }

    // Handle window resize
    function handleResize() {
        // Close mobile menu on desktop
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    }

    // Setup scroll effects
    function setupScrollEffects() {
        // Add scroll effect to navbar
        let lastScrollTop = 0;

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }

    // Setup accessibility features
    function setupAccessibility() {
        // Add keyboard navigation for menu items
        navLinks.forEach(link => {
            link.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });

        // Add focus management
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                // Add visible focus indicators
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', function() {
            // Remove focus indicators when using mouse
            document.body.classList.remove('keyboard-navigation');
        });

        // Announce section changes to screen readers
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        document.body.appendChild(announcer);

        // Store reference for section announcements
        window.announceSection = function(sectionName) {
            announcer.textContent = `Navigated to ${sectionName} section`;
        };
    }

    // Setup lazy loading for images
    function setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            // Observe all images
            document.querySelectorAll('img[loading="lazy"]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Menu item hover effects
    function setupMenuInteractions() {
        const menuItems = document.querySelectorAll('.menu__item');

        menuItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(10px)';
            });

            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });
    }

    // Card hover animations
    function setupCardAnimations() {
        const cards = document.querySelectorAll('.highlight__card, .testimonial__card');

        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Initialize intersection observer for animations
    function setupScrollAnimations() {
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observe elements for animation
            document.querySelectorAll('.highlight__card, .testimonial__card, .menu__section').forEach(el => {
                animationObserver.observe(el);
            });
        }
    }

    // Error handling
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
    });

    // Performance monitoring
    function logPerformance() {
        if (window.performance && window.performance.timing) {
            const timing = window.performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            console.log('Page load time:', loadTime + 'ms');
        }
    }

    // Initialize everything when DOM is ready
    init();
    setupMenuInteractions();
    setupCardAnimations();
    setupScrollAnimations();

    // Log performance after load
    window.addEventListener('load', logPerformance);

    console.log('Al Tapas website fully loaded and interactive!');
});

// Global utility functions
window.AlTapas = {
    // Smooth scroll to element
    scrollTo: function(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    },

    // Show notification
    showNotification: function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--gradient-card);
            color: var(--color-text-primary);
            padding: 1rem 1.5rem;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    },

    // Form handling utility
    handleContactForm: function(formData) {
        // This would typically send data to a server
        console.log('Contact form data:', formData);
        this.showNotification('Thank you for your message! We will get back to you soon.', 'success');
    }
};

// Service Worker registration for PWA features (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}