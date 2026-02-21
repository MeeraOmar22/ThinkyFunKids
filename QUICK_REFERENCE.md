# 🎨 Thinky Fun Kids - Quick Reference Guide

## 🚀 Getting Started (5 Minutes)

### Step 1: View Your Website
1. Open any HTML file directly in your browser (index.html)
2. Or use VS Code Live Server extension

### Step 2: Customize Key Information
Open each file and update:

**all.html files:**
- WhatsApp link: `https://wa.link/tf4t9o` → Your link
- Email: `hello@thinkyfunkids.com` → Your email

**shop.html:**
- Product prices
- Product payments links (ToyyibPay)

**contact.html:**
- FAQ answers
- Contact details

## 🎯 Essential Customizations

### Change Website Name
Replace in all HTML files:
```html
<!-- Old -->
<div class="nav-brand">
    <i class="fas fa-brain"></i> Thinky Fun Kids
</div>

<!-- New -->
<div class="nav-brand">
    <i class="fas fa-brain"></i> Your Brand Name
</div>
```

### Change Colors (Easy Method)
File: `styles.css` (Line ~20)

```css
:root {
    --primary: #FF6B9D;      /* Change this */
    --secondary: #4ECDC4;    /* Change this */
    --accent: #FFD93D;       /* Change this */
    /* ... rest */
}
```

**Color Ideas for Kids Brands:**
- Bright Pink, Teal, Yellow ✅ (Current)
- Purple, Orange, Cyan 🟣🟠🔵
- Green, Pink, Light Blue 🟢🩷🔷
- Red, Yellow, Blue 🔴🟡🔵

### Add Your Logo
In all HTML files, replace icon:
```html
<!-- Old -->
<div class="nav-brand">
    <i class="fas fa-brain"></i> Thinky Fun Kids
</div>

<!-- New -->
<div class="nav-brand">
    <img src="images/logo.png" alt="Logo" style="height: 40px;">
    Thinky Fun Kids
</div>
```

## 📸 Adding Images - Step by Step

### Create Images Folder
1. In ALISYA folder, create new folder named: `images`
2. Save your images inside this folder

### Product Images
1. Save product images: `images/products/` folder
2. In `shop.html`, find the product card:

```html
<!-- Find this: -->
<div class="product-image">
    <i class="fas fa-palette"></i>
</div>

<!-- Replace with: -->
<div class="product-image">
    <img src="images/products/colouring-1.png" alt="Colouring 1">
</div>
```

### Section Images
In `index.html`, find hero section:
```html
<!-- Find: -->
<div class="hero-placeholder">
    <i class="fas fa-child"></i>
</div>

<!-- Replace with: -->
<div class="hero-placeholder">
    <img src="images/hero.png" alt="Happy Kids Learning">
</div>
```

### Image CSS Styling
If images don't fit nicely, add to `styles.css`:

```css
.product-image img,
.hero-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## 📦 Product Management

### Add New Product

**In shop.html:**

1. Find the category section (Kids Activities, Learning, or MommyHana)
2. Duplicate a product card:

```html
<div class="product-card" data-filter="kids-activities">
    <div class="product-image">
        <i class="fas fa-palette"></i>
    </div>
    <h3>Product Name</h3>
    <p class="product-description">Description here</p>
    <div class="product-price">RM 0.00</div>
    <a href="https://toyyibpay.com/your-link" target="_blank" class="btn btn-primary">Buy Now</a>
</div>
```

3. Update:
   - `data-filter="category"` (kids-activities, learning, or mommyhana)
   - Product name
   - Description
   - Price
   - Payment link

### Remove Product
Simply delete the entire `<div class="product-card">...</div>` block

## 💬 Update Contact Information

### WhatsApp Link Finder
1. Go to wa.link or WhatsApp
2. Create custom link or use existing
3. Replace ALL instances of: `https://wa.link/tf4t9o`

**Files to update:**
- index.html (navbar + CTA)
- about.html (navbar + CTA)
- shop.html (navbar + CTA)
- contact.html (navbar + all contact methods)
- footer (in all files)

### Quick Find & Replace
In VS Code:
1. Press `Ctrl+H` (Find and Replace)
2. Find: `https://wa.link/tf4t9o`
3. Replace with: `your-actual-whatsapp-link`
4. Click "Replace All"

## 🎤 Update Marketing Copy

### Hero Section (index.html)
```html
<h1 class="hero-title">Hi, Kids & Parents 👋</h1>
<p class="hero-subtitle">Your message here...</p>
<p class="hero-mission">Your mission here...</p>
```

### About Section (about.html)
```html
<h1>Title</h1>
<p>Your story here...</p>
```

### FAQ Section (contact.html)
```html
<div class="faq-item">
    <button class="faq-question">
        Your Question?
        <i class="fas fa-chevron-down"></i>
    </button>
    <div class="faq-answer">
        <p>Your answer here</p>
    </div>
</div>
```

## ✉️ Contact Form Integration

Current setup:
- Validates all fields
- Sends via WhatsApp
- Shows success message

To add email notifications (requires backend):
1. Use Formspree.io (free)
2. Or Netlify forms (free with Netlify hosting)

## 🎨 Custom CSS Tips

### Change Button Style
File: `styles.css`

```css
.btn-primary {
    background: linear-gradient(135deg, #FF6B9D 0%, #E84C7D 100%);
    /* Change colors above */
}

.btn-primary:hover {
    background: linear-gradient(135deg, #E84C7D 0%, #D13C6D 100%);
}
```

### Change Border Radius (roundness)
```css
.btn {
    border-radius: 50px;  /* Increase for more round */
    /* 25px = less round, 50px = very round */
}

.promise-card {
    border-radius: 15px;  /* Adjust card roundness */
}
```

### Change Shadows
```css
.promise-card {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    /* More shadow: 0 10px 30px rgba(0, 0, 0, 0.2) */
}
```

## 📱 Testing on Mobile

### Quick Mobile Test
1. Open website in browser
2. Press `F12` (Developer Tools)
3. Click phone icon (toggle device toolbar)
4. Test different screen sizes

### Chrome DevTools Devices
- iPhone 12: 390px width
- iPad: 768px width
- Android: 412px width

### Common Mobile Issues
- **Text too big**: Check font-size in styles.css
- **Images not showing**: Check image path (relative path)
- **Menu not working**: Ensure script.js is linked in HTML
- **Colors weird**: Check CSS variables in :root

## 🔗 Important Links to Update

### Search & Replace in VS Code
Press `Ctrl+H` and replace:

| Find | Replace With |
|------|---------------|
| `https://wa.link/tf4t9o` | Your WhatsApp link |
| `hello@thinkyfunkids.com` | Your email |
| `Thinky Fun Kids` | Your brand name |
| `toyyibpay.com/Learning-Bundle-TFK` | Your payment links |

## 🐛 Common Issues & Fixes

### Issue: Colors not changing
**Solution:** Clear browser cache (Ctrl+Shift+Delete) or hard refresh (Ctrl+F5)

### Issue: Images not showing
**Solution:** 
1. Check image path is correct
2. Image file exists in `images/` folder
3. Use forward slashes: `images/photo.png` (not backslashes)

### Issue: Mobile menu not working
**Solution:** 
1. Ensure script.js is linked in HTML
2. Check browser console for errors (F12)
3. Verify nav-toggle ID matches JavaScript

### Issue: WhatsApp button not opening
**Solution:** 
1. Check WhatsApp link is correct and starts with `https://`
2. Ensure `target="_blank"` is in the link tag

### Issue: Form not submitting
**Solution:**
1. All form fields must be filled
2. Email must have @ symbol
3. Check browser console for JavaScript errors

## 🎯 Before Launch Checklist

- [ ] All products priced correctly
- [ ] All payment links work (click and test)
- [ ] WhatsApp link is yours (not example)
- [ ] Email address is updated
- [ ] Company name updated
- [ ] Images are in correct folders
- [ ] Images display properly (no broken links)
- [ ] Test on mobile (hamburger menu works)
- [ ] Test form submission
- [ ] Test all external links
- [ ] Check spelling and grammar
- [ ] Responsive design (looks good on all sizes)

## 🚀 Deployment Options

### Netlify (Easiest)
1. Go to netlify.com
2. Sign up with GitHub or email
3. Drag & drop your ALISYA folder
4. Done! Website is live

### GitHub Pages (Free)
1. Create GitHub repo
2. Upload files
3. Go to Settings → Pages
4. Enable GitHub Pages from main branch
5. Website goes live in ~1 minute

### Your Own Domain
1. Buy domain from GoDaddy, Namecheap, etc.
2. Buy hosting
3. Upload files via FTP
4. Configure domain pointing to host

## 📚 Resources

### Design Tools
- Figma (mockups): figma.com
- Unsplash (free images): unsplash.com
- Pexels (free images): pexels.com
- Craiyon (AI images): craiyon.com

### Code Tools
- VS Code: code.visualstudio.com
- Color Picker: htmlcolorcodes.com
- Font Preview: fonts.google.com

### Testing
- Mobile Test: responsivedesignchecker.com
- Link Checker: deadlinkchecker.com
- Performance: pagespeed.web.dev

---

**Happy Building! 🎉**

If you get stuck, check the README.md for detailed explanations.
