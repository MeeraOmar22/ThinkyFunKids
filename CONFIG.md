# 🎯 Thinky Fun Kids - Configuration Template

Use this file to keep track of all your customization changes and important links.

## BRAND INFORMATION
```
Brand Name: Thinky Fun Kids
Brand Tagline: Make learning joyful, make play meaningful, and make every child feel confident.
Email: hello@thinkyfunkids.com
WhatsApp Link: https://wa.link/tf4t9o
Website URL: (your website here)
```

## COLOR PALETTE
```css
Primary Color: #FF6B9D (Vibrant Pink)
Secondary Color: #4ECDC4 (Teal)
Accent Color: #FFD93D (Bright Yellow)
Text Dark: #2C3E50 (Dark Blue)
Text Light: #7F8C8D (Gray)
Background Light: #F7F9FC (Pale Blue)
```

To customize, change these values in `styles.css` lines 8-19.

## PRODUCT INFORMATION

### KIDS ACTIVITIES
| Product Name | Price | Payment Link | Status |
|---|---|---|---|
| Colouring 1 | RM 5.00 | https://toyyibpay.com/Colouring-1-TFK | ✅ Active |
| Colouring Bundle | RM 8.00 | https://toyyibpay.com/Colouring-Bundle-TFK | ✅ Active |
| Kids Origami | RM 5.00 | https://toyyibpay.com/Kids-Origami-TFK | ✅ Active |
| Sudoku | RM 5.00 | https://toyyibpay.com/Sudoku-TFK | ✅ Active |
| Maze WS + Sudoku | RM 8.00 | https://toyyibpay.com/Maze-Sudoku-TFK | ✅ Active |
| Animation Quiz | RM 5.00 | https://toyyibpay.com/Animation-Quiz-TFK | ✅ Active |
| Worksheet | RM 8.00 | https://toyyibpay.com/Worksheet-TFK | ✅ Active |
| Flash Card & Journal | RM 12.88 | https://toyyibpay.com/Flash-Card-Journal-TFK | ✅ Active |
| Mega Bundle | RM 39.90 | https://toyyibpay.com/Mega-Bundle-TFK | ✅ Active |

### LEARNING
| Product Name | Price | Payment Link | Status |
|---|---|---|---|
| Learning Bundle | RM 29.90 | https://toyyibpay.com/Learning-Bundle-TFK | ✅ Active |

### MOMMYHANA
| Product Name | Price | Payment Link | Status |
|---|---|---|---|
| My First Book | RM 99.00 | https://toyyibpay.com/My-First-Book-TFK | ✅ Active |
| Excel Hana | RM 79.00 | https://toyyibpay.com/Excel-Hana-TFK | ✅ Active |
| Immune Booster | RM 69.00 | https://toyyibpay.com/Immune-Booster-TFK | ✅ Active |
| Susu Kambing Coklat | RM 69.00 | https://toyyibpay.com/Susu-Kambing-Coklat-TFK | ✅ Active |

## CUSTOMIZATION CHECKLIST

### Essential Changes (Do These First!)
- [ ] Replace WhatsApp link in all files
- [ ] Update email address in all files
- [ ] Update brand name (if different)
- [ ] Update payment links (if different)
- [ ] Update product prices (if different)

### Important Changes (Do These Next)
- [ ] Add logo image to navbar
- [ ] Add hero section image
- [ ] Add product category icons/images
- [ ] Update About Us story
- [ ] Update FAQ answers

### Optional Enhancements
- [ ] Change color scheme
- [ ] Add team photos
- [ ] Add testimonials
- [ ] Add blog section
- [ ] Add newsletter signup

## FIND & REPLACE GUIDE

### Search in VS Code (Ctrl+H)

| Item | Find | Replace With |
|---|---|---|
| WhatsApp Link | `https://wa.link/tf4t9o` | Your actual link |
| Email | `hello@thinkyfunkids.com` | Your email |
| Brand Name | `Thinky Fun Kids` | Your brand name |
| ToyyibPay Links | `toyyibpay.com/` | Your actual links |

## IMAGE FOLDER STRUCTURE

Create this folder hierarchy:

```
ALISYA/
└── images/
    ├── logo.png (40x40px)
    ├── hero.png (800x600px)
    ├── about.png (600x600px)
    ├── products/
    │   ├── colouring-1.png
    │   ├── origami.png
    │   ├── sudoku.png
    │   ├── worksheet.png
    │   └── ... (more products)
    └── mommyhana/
        ├── my-first-book.png
        ├── excel-hana.png
        └── ...
```

## MARKETING COPY

### Hero Section (index.html line ~38)
```
Current: "Hi, Kids & Parents 👋"
Your version: ___________________________________________
```

### Hero Subtitle (index.html line ~39)
```
Current: "We create fun, thinky, imagination-boosting products..."
Your version: ___________________________________________
```

### Mission Statement (index.html line ~42)
```
Current: "Make learning joyful, make play meaningful, and make every child feel confident."
Your version: ___________________________________________
```

### About Title (about.html line ~39)
```
Current: "Made for Kids. Inspired by Imagination"
Your version: ___________________________________________
```

## FONT CUSTOMIZATION

Current fonts:
- Headings: Fredoka (playful, rounded)
- Body: Poppins (modern, clean)

To change fonts, update lines 6-7 in each HTML file:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont1:wght@400;600;700&family=YourFont2:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Then update in styles.css:
```css
h1, h2, h3, h4, h5, h6 {
    font-family: 'YourFont1', sans-serif;
}

body {
    font-family: 'YourFont2', sans-serif;
}
```

## SEO OPTIMIZATION

Update meta tags in each HTML file:

### index.html
```html
<title>Thinky Fun Kids - Fun Learning Products for Kids</title>
<meta name="description" content="Discover fun, creative, brain-boosting products for kids. Safe materials, learning toys, and more.">
```

### about.html
```html
<title>About Us - Thinky Fun Kids</title>
<meta name="description" content="Learn about Thinky Fun Kids mission to make learning joyful and meaningful.">
```

### shop.html
```html
<title>Shop - Thinky Fun Kids | Buy Kids Activities & Learning Products</title>
<meta name="description" content="Shop our collection of kids activities, learning bundles, and wellness products.">
```

### contact.html
```html
<title>Contact Us - Thinky Fun Kids</title>
<meta name="description" content="Get in touch with Thinky Fun Kids. Ask questions, get support, or send us a message.">
```

## ANALYTICS SETUP (Optional)

### Google Analytics
Add this to all HTML files in the `<head>` section:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

Visit analytics.google.com to get your ID.

### Facebook Pixel
Add this to all HTML files in the `<head>` section:
```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.queue=[];n.version='2.0';
  n.queue.push(['track','PageView']);
}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

Visit facebook.com/ads to get your Pixel ID.

## DEPLOYMENT CHECKLIST

### Before Going Live
- [ ] All links tested (internal and external)
- [ ] All images display correctly
- [ ] Forms tested and working
- [ ] Mobile responsive verified
- [ ] All product prices correct
- [ ] All payment links correct
- [ ] WhatsApp link working
- [ ] Email address updated
- [ ] Spelling and grammar checked
- [ ] Brand name correct everywhere
- [ ] SEO meta tags updated
- [ ] Favicon added (optional)
- [ ] 404 error page created (optional)

### Domain Setup
- [ ] Domain purchased
- [ ] Domain pointing to hosting
- [ ] SSL certificate activated
- [ ] DNS records configured

## SUPPORT & TROUBLESHOOTING

### Common Issues

**Q: Website not showing colors?**
A: Check if images are loading. See colors defined in styles.css.

**Q: Mobile menu not working?**
A: Clear browser cache (Ctrl+Shift+Delete). Check script.js is linked.

**Q: Images not showing?**
A: Check file path is relative (images/photo.png, not C:\...). Ensure images folder exists.

**Q: Form not sending?**
A: Fill all fields. Check WhatsApp link is correct. Check browser console (F12).

**Q: Links not working?**
A: Ensure URLs start with http:// or https://. Test in incognito mode.

## MONTHLY MAINTENANCE

### Weekly
- [ ] Respond to WhatsApp messages
- [ ] Check contact form submissions
- [ ] Monitor product stock

### Monthly
- [ ] Update product photos
- [ ] Review and update FAQ
- [ ] Check for broken links
- [ ] Update testimonials/reviews
- [ ] Backup website files

### Quarterly  
- [ ] Review analytics
- [ ] Update blog posts
- [ ] Optimize images
- [ ] Test all functionality
- [ ] Check mobile usability

---

## NOTES SECTION

Use this space to keep track of pending tasks and ideas:

```
PENDING TASKS:
- [ ] Task 1: ___________________________________________
- [ ] Task 2: ___________________________________________
- [ ] Task 3: ___________________________________________

IDEAS FOR IMPROVEMENT:
- Idea 1: ______________________________________________
- Idea 2: ______________________________________________

FUTURE FEATURES:
- Feature 1: ____________________________________________
- Feature 2: ____________________________________________
```

---

**Document Version:** 1.0  
**Last Updated:** February 2026  
**Status:** Ready for Customization ✅
