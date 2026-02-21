/* ============================================
   THINKY FUN KIDS - JAVASCRIPT
   ============================================ */

// DOM Elements
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const faqItems = document.querySelectorAll('.faq-item');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

/* ============================================
   MOBILE MENU TOGGLE
   ============================================ */

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when click on nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

/* ============================================
   ACTIVE NAV LINK ON SCROLL (for single page)
   ============================================ */

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            if (scrollPosition >= section.offsetTop - 100 && 
                scrollPosition < section.offsetTop + section.offsetHeight - 100) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});

/* ============================================
   FAQ ACCORDION
   ============================================ */

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    }
});

/* ============================================
   CONTACT FORM HANDLING
   ============================================ */

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate fields
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields', 'error');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address', 'error');
            return;
        }

        // Prepare message for WhatsApp
        const whatsappMessage = `
Hi Thinky Fun Kids,

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`;

        // Open WhatsApp with message
        const encodedMessage = encodeURIComponent(whatsappMessage.trim());
        window.open(`https://wa.link/tf4t9o?text=${encodedMessage}`, '_blank');

        // Show success message
        showFormMessage('Message sent successfully! We\'ll reply soon.', 'success');

        // Reset form
        contactForm.reset();

        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.classList.remove('success');
            formMessage.textContent = '';
        }, 5000);
    });
}

/**
 * Display form message (success or error)
 * @param {string} message - Message to display
 * @param {string} type - 'success' or 'error'
 */
function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
}

/* ============================================
   PRODUCT FILTER SYSTEM - OPTIMIZED & SMOOTH
   ============================================ */

/**
 * Format: {
 *   filterBtns: NodeList of filter buttons
 *   categorySections: NodeList of category sections
 *   currentFilter: string - current active filter
 * }
 */
const filterSystem = {
    filterBtns: document.querySelectorAll('.filter-btn'),
    categorySections: document.querySelectorAll('.category-section'),
    currentFilter: 'all',
    
    /**
     * Initialize the filter system
     * Adds event listeners to all filter buttons
     */
    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilterClick(e));
        });
    },
    
    /**
     * Handle filter button click
     * @param {Event} e - Click event
     */
    handleFilterClick(e) {
        const button = e.currentTarget;
        const selectedCategory = button.getAttribute('data-category');
        
        // Update active button
        this.updateActiveButton(button);
        
        // Filter categories
        this.filterCategories(selectedCategory);
        
        // Update accessibility
        this.updateAccessibility(button);
    },
    
    /**
     * Update which button is visually active
     * @param {HTMLElement} activeBtn - The clicked button
     */
    updateActiveButton(activeBtn) {
        // Remove active class from all buttons
        this.filterBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        activeBtn.classList.add('active');
    },
    
    /**
     * Show/hide category sections based on filter
     * @param {string} selectedCategory - Category to show ('all' or specific category)
     */
    filterCategories(selectedCategory) {
        this.currentFilter = selectedCategory;
        
        this.categorySections.forEach(section => {
            const sectionCategory = section.getAttribute('data-category');
            const isMatch = selectedCategory === 'all' || sectionCategory === selectedCategory;
            
            if (isMatch) {
                // Show section with animation
                this.showSection(section);
            } else {
                // Hide section with animation
                this.hideSection(section);
            }
        });
    },
    
    /**
     * Show a category section with fade-in animation
     * @param {HTMLElement} section - Section to show
     */
    showSection(section) {
        section.classList.remove('hidden');
        section.classList.add('show');
        
        // Remove animation class after animation completes
        setTimeout(() => {
            section.classList.remove('show');
        }, 500);
    },
    
    /**
     * Hide a category section with fade-out animation
     * @param {HTMLElement} section - Section to hide
     */
    hideSection(section) {
        section.classList.add('hidden');
        section.classList.remove('show');
    },
    
    /**
     * Update ARIA attributes for accessibility
     * @param {HTMLElement} activeBtn - The active button
     */
    updateAccessibility(activeBtn) {
        this.filterBtns.forEach(btn => {
            const isActive = btn === activeBtn;
            btn.setAttribute('aria-selected', isActive);
        });
    }
};

// Initialize filter system when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        filterSystem.init();
    });
} else {
    // DOM already loaded
    filterSystem.init();
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.promise-card, .why-card, .value-card, .product-card, .contact-method').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

/* ============================================
   SMOOTH SCROLL BEHAVIOR
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/* ============================================
   PAGE LOAD ANIMATION
   ============================================ */

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

/**
 * Log analytics event
 * @param {string} eventName - Name of the event
 * @param {object} eventData - Data associated with event
 */
function logEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);
    // You could send this to an analytics service
}

/**
 * Trigger purchase analytics
 */
document.querySelectorAll('a[href*="toyyibpay.com"]').forEach(link => {
    link.addEventListener('click', () => {
        const productName = link.closest('.product-card')?.querySelector('h3')?.textContent || 'Unknown';
        logEvent('product_clicked', { product: productName });
    });
});

/**
 * Trigger WhatsApp click analytics
 */
document.querySelectorAll('a[href*="wa.link"]').forEach(link => {
    link.addEventListener('click', () => {
        logEvent('whatsapp_clicked');
    });
});

/* ============================================
   KEYBOARD NAVIGATION
   ============================================ */

document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

/* ============================================
   ACCESSIBILITY ENHANCEMENTS
   ============================================ */

// Skip to main content link (for accessibility)
const skipLink = document.createElement('a');
skipLink.href = '#main';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: white;
    padding: 8px;
    z-index: 100;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.prepend(skipLink);

/* ============================================
   PERFORMANCE OPTIMIZATION
   ============================================ */

// Lazy load images (if needed)
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        observer.observe(img);
    });
}

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll listener
const optimizedScroll = debounce(() => {
    // Scroll logic here
}, 100);

window.addEventListener('scroll', optimizedScroll);

console.log('Thinky Fun Kids - Website Loaded Successfully! 🧠✨');
