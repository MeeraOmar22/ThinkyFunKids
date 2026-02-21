# 🧠✨ Thinky Fun Kids - Complete Website

A modern, fully responsive website for a kids learning brand with an interactive shop, contact system, and engaging user interface designed specifically for children and parents.

## 📁 Folder Structure

```
ALISYA/
│
├── index.html                 # Home page
├── about.html                 # About Us page
├── shop.html                  # Products/Shop page
├── contact.html               # Contact & FAQ page
├── styles.css                 # Main stylesheet
├── script.js                  # JavaScript functionality
│
├── images/                    # Image folder (create this)
│   ├── hero-image.png
│   ├── about-image.png
│   ├── product-1.png
│   └── ... (other images)
│
└── README.md                  # This file
```

## ✨ Features

### 🎨 Design Features
- **Vibrant, Kid-Friendly Colors**: Pink (#FF6B9D), Teal (#4ECDC4), Yellow (#FFD93D)
- **Rounded Buttons & Cards**: Playful design elements
- **Gradient Backgrounds**: Modern, engaging visual hierarchy
- **Smooth Animations**: Fade-in effects on scroll
- **Custom Scrollbar**: Themed styling

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 480px (mobile)
- Hamburger menu for mobile devices
- Touch-friendly buttons and links

### 🧭 Navigation
- Fixed navbar with logo and menu
- Active link indicators
- Mobile hamburger menu
- WhatsApp CTA button in navbar
- Smooth scrolling between sections

### 📄 Pages

#### 1. **Home Page (index.html)**
- Hero section with call-to-action
- Promise to Parents section (4 key benefits)
- Why Kids Love It section (3 reasons)
- General CTA section

#### 2. **About Us Page (about.html)**
- Brand story
- Mission statement with empathy
- Core values (4 pillars)
- Community engagement CTA

#### 3. **Shop Page (shop.html)**
- **Category Filtering**:
  - Kids Activities (9 products)
  - Learning Bundle (1 comprehensive product)
  - MommyHana (4 health/wellness products)
- Product cards with:
  - Product image placeholder
  - Product name
  - Description
  - Price (in RM)
  - Buy button linking to ToyyibPay
- Filter buttons to organize by category
- All products with ToyyibPay payment links

#### 4. **Contact Page (contact.html)**
- Contact form with validation
- Form fields: Name, Email, Subject, Message
- WhatsApp integration (sends form via WhatsApp)
- Contact information section
- FAQ accordion (4 common questions)
- Expandable/collapsible FAQ items

## 🛠️ Customization Guide

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #FF6B9D;        /* Main pink */
    --secondary: #4ECDC4;      /* Teal */
    --accent: #FFD93D;         /* Yellow */
    --dark-bg: #2C3E50;        /* Dark blue */
    --light-bg: #F7F9FC;       /* Light blue */
}
```

### Fonts
Current fonts from Google Fonts:
- **Headings**: Fredoka (playful, rounded)
- **Body**: Poppins (modern, clean)

Change in the `<head>` of HTML files:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

### Products
Edit product information in `shop.html`:
- Change product names: `<h3>Product Name</h3>`
- Update prices: `<div class="product-price">RM 99.00</div>`
- Update payment links: `<a href="https://toyyibpay.com/product-link">`
- Add product descriptions: `<p class="product-description">`

### Contact Information
Update in `contact.html` and footer across all pages:
- WhatsApp link: `https://wa.link/tf4t9o` → Your WhatsApp link
- Email: `hello@thinkyfunkids.com` → Your email

### WhatsApp Integration
- All WhatsApp buttons link to: `https://wa.link/tf4t9o`
- Contact form sends messages via WhatsApp
- Change the link in all HTML files to your own

## 📸 Adding Images

### Where to Place Images
Create an `images/` folder in the same directory as HTML files:
```
ALISYA/images/
├── logo.png
├── hero-image.png
├── about-image.png
├── product-images/
│   ├── colouring-1.png
│   ├── origami.png
│   └── ...
└── background.png
```

### How to Add Images

#### Option 1: Replace Placeholder Icons
Current setup uses Font Awesome icons. To use custom images, update the HTML:

**For product cards in shop.html:**
```html
<!-- Old: Icon placeholder -->
<div class="product-image">
    <i class="fas fa-palette"></i>
</div>

<!-- New: Image -->
<div class="product-image">
    <img src="images/product-images/colouring-1.png" alt="Colouring 1">
</div>
```

**For section placeholders:**
```html
<!-- Old: Icon placeholder -->
<div class="hero-placeholder">
    <i class="fas fa-child"></i>
</div>

<!-- New: Image -->
<div class="hero-placeholder">
    <img src="images/hero-image.png" alt="Happy Kids">
</div>
```

#### Option 2: Add Background Images
Update CSS in `styles.css`:
```css
.hero {
    background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%),
                url('images/background.png') center/cover;
}
```

### Image Optimization Tips
- Export images as PNG or WebP for better quality
- Resize for web: Keep max width around 800px
- Compress using tools like TinyPNG or ImageOptim
- Use descriptive alt text for accessibility

## 🔗 Links to Update

### Payment Links (ToyyibPay)
In `shop.html`, update these URLs with your actual ToyyibPay links:
- `https://toyyibpay.com/Colouring-1-TFK`
- `https://toyyibpay.com/Learning-Bundle-TFK`
- etc.

### WhatsApp Link
Replace `https://wa.link/tf4t9o` with your own WhatsApp link in:
- Navbar (`nav-link`)
- All CTA buttons
- Contact page
- Footer

### Email
Update `hello@thinkyfunkids.com` to your email address in:
- Contact page
- Footer
- Contact form

## 🎯 JavaScript Features

### Mobile Menu
- Hamburger menu appears on screens < 768px
- Closes when link is clicked
- Toggle with Escape key

### Product Filter
- Filter products by category
- Smooth animations when filtering
- "All Products" shows everything

### Contact Form
- Email validation
- Required field checking
- Sends via WhatsApp integration
- Success/error messages
- Auto-clears after submission

### FAQ Accordion
- Click to expand/collapse
- Only one FAQ open at a time
- Smooth animation with `max-height`
- Chevron icon rotates

### Scroll Animations
- Elements fade in as you scroll
- Staggered animation delays
- Smooth scroll effect for anchor links

## 📊 SEO & Meta Tags

Update in each HTML file:
```html
<title>Your Page Title - Thinky Fun Kids</title>
<meta name="description" content="Your page description">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 🚀 Deployment

### Option 1: Free Hosting (Netlify)
1. Create account at netlify.com
2. Drag & drop your folder
3. Instant live website

### Option 2: GitHub Pages
1. Create GitHub repository
2. Enable GitHub Pages in settings
3. Push your files to the repo
4. Site goes live at username.github.io/repo-name

### Option 3: Traditional Hosting
1. Upload files via FTP to your web host
2. Set index.html as home page
3. Ensure all image paths are correct

## ✅ Before Launch Checklist

- [ ] Update all product prices and links
- [ ] Replace WhatsApp link with your own
- [ ] Update email address
- [ ] Add custom logo/images
- [ ] Update company description
- [ ] Add product descriptions
- [ ] Update payment URLs
- [ ] Test all forms on mobile
- [ ] Test all links (internal and external)
- [ ] Test product filtering
- [ ] Test FAQ accordion
- [ ] Check images load correctly
- [ ] Verify responsive design
- [ ] Set up analytics (optional)

## 🎨 Font Awesome Icons Used

Current icons in use:
- `fa-brain` - Logo icon
- `fa-whatsapp` - WhatsApp button
- `fa-palette` - Painting
- `fa-paint-brush` - Art
- `fa-layer-group` - Origami
- `fa-th` - Sudoku/Grid
- `fa-puzzle-piece` - Puzzles
- `fa-film` - Animation
- `fa-scroll` - Worksheets
- `fa-book` - Books
- `fa-star` - Bundle/Mega
- `fa-book-open` - Learning
- `fa-chart-line` - Growth
- `fa-shield-virus` - Health
- `fa-glass` - Drink
- `fa-child` - Kids
- `fa-lightbulb` - Ideas
- `fa-envelope` - Email
- `fa-clock` - Time
- `fa-chevron-down` - Dropdown

## 📞 Support & Customization

For more detailed customization:
1. Check CSS variable definitions at the top of `styles.css`
2. Use developer tools (F12) to inspect elements
3. Test changes in browser before publishing
4. Keep backup of original files

## 📝 License & Credits

- Built with HTML5, CSS3, and Vanilla JavaScript
- Icons from Font Awesome
- Fonts from Google Fonts
- Responsive design principles

---

**Made with ❤️ for Thinky Fun Kids** 🧠✨

Last Updated: February 2026
