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
        
        // Scroll to products section with selected category
        this.scrollToProducts(selectedCategory);
    },
    
    /**
     * Scroll to products section smoothly
     * @param {string} selectedCategory - The selected category to scroll to
     */
    scrollToProducts(selectedCategory) {
        // Wait for CSS animations to complete (0.6s animation + 0.4s max delay = 1s total)
        // Using 600ms to allow animations to finish without excessive delay
        setTimeout(() => {
            let targetGrid = null;
            
            if (selectedCategory === 'all') {
                // For 'all', scroll to the first visible products grid
                const allGrids = document.querySelectorAll('.products-grid');
                for (let grid of allGrids) {
                    const section = grid.closest('[data-category]');
                    if (section && !section.classList.contains('hidden')) {
                        targetGrid = grid;
                        break;
                    }
                }
            } else {
                // For specific categories, find the CATEGORY SECTION (not filter button) with matching data-category
                const section = document.querySelector(`.category-section[data-category="${selectedCategory}"]`);
                if (section) {
                    targetGrid = section.querySelector('.products-grid');
                }
            }
            
            if (targetGrid) {
                // Scroll to center the products in view
                targetGrid.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }, 600);
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
        // Scroll to top when page loads/refreshes
        window.scrollTo(0, 0);
    });
} else {
    // DOM already loaded
    filterSystem.init();
    // Scroll to top when page loads/refreshes
    window.scrollTo(0, 0);
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

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
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


