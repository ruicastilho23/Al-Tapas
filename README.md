# Al Tapas Modern - Restaurant Website

A modern, dark-themed website for Al Tapas restaurant in Lisbon, Portugal, featuring authentic Spanish and Portuguese tapas.

## 🌟 Features

- ✨ **Modern Dark Theme** with gradient backgrounds
- 🎨 **Spanish Flag Color Palette** with contemporary styling
- 📱 **Mobile-First Responsive Design**
- 🍽️ **Complete Bilingual Menu** (Portuguese/English)
- 📍 **Google Maps Integration**
- 🔍 **SEO Optimized** with structured data
- ⚡ **Fast Loading** with optimized assets
- ♿ **Accessible** with WCAG compliance
- 🌐 **No Framework Dependencies** - Pure HTML/CSS/JS

## 🚀 Live Demo

[View Live Site](https://yourusername.github.io/al-tapas-modern/)

## 📁 File Structure

```
al-tapas-modern/
├── index.html          # Main webpage with all sections
├── style.css           # Modern dark theme CSS with gradients
├── app.js              # Interactive JavaScript functionality
├── README.md           # This file
├── favicon.ico         # Website icon (add your own)
└── assets/             # Optional folder for additional images
    └── img/            # Hero and other images
```

## 🎯 Restaurant Information

**Al Tapas**  
📍 Rua Cais de Santarém, 26 Lisboa, Portugal  
📞 +351 913 890 527  
🍽️ Spanish/Portuguese Tapas  
💰 €€ Price Range  

## 🔧 Setup Instructions

### 1. Download Files
- Save `index.html`, `style.css`, and `app.js` to your project folder

### 2. Add a Favicon (Optional)
- Create or download a 16x16 px .ico file
- Name it `favicon.ico` and place in the root folder

### 3. Replace Images (Optional)
- Hero image: Replace the Unsplash URL in `index.html` line ~94
- About section images: Replace Unsplash URLs in `index.html` lines ~380-385

### 4. Customize Content
All content is clearly marked with `<!-- EDITABLE: -->` comments:

- **Business Info**: Update address, phone, social media links
- **Menu Items**: Modify menu sections, items, and prices
- **About Text**: Customize the restaurant story
- **Daily Specials**: Update seasonal offerings

## 📝 Editing Guide

### Menu Items
Find menu items in `index.html` around lines 120-300:
```html
<div class="menu__item">
    <div class="menu__item-names">
        <span class="menu__item-name-pt">Pastelinhos de Bacalhau 2/un.</span>
        <span class="menu__item-name-en">Codfish Cakes 2 Un.</span>
    </div>
    <span class="menu__item-price">4,50 €</span>
</div>
```

### Contact Information
Update contact details in `index.html` around lines 420-450:
```html
<!-- EDITABLE: Contact information -->
<address>
    <p><strong>Al Tapas</strong></p>
    <p>Rua Cais de Santarém, 26<br>Lisboa, Portugal</p>
</address>
```

### Colors and Styling
Modify colors in `style.css` at the top (CSS Variables):
```css
:root {
    --color-primary: #C41E3A;          /* Spanish Red */
    --color-primary-dark: #8B0000;     /* Dark Red */
    --gradient-hero: linear-gradient(135deg, #8B0000 0%, #2d1b1b 50%, #1a1a1a 100%);
}
```

## 🌐 GitHub Pages Deployment

1. **Create Repository**
   - Go to GitHub.com → New Repository
   - Name: `al-tapas-modern`
   - Make it Public

2. **Upload Files**
   - Upload `index.html`, `style.css`, `app.js`, `README.md`
   - Commit changes

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Save

4. **Access Your Site**
   - URL: `https://yourusername.github.io/al-tapas-modern/`

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup with structured data
- **CSS3**: CSS Grid, Flexbox, Custom Properties, Gradients
- **JavaScript ES6+**: Modern DOM manipulation
- **Google Fonts**: Playfair Display + Open Sans

### Performance Optimizations
- Minified CSS with efficient selectors
- Lazy loading images
- Optimized Google Fonts loading
- Efficient JavaScript event handling

### SEO Features
- JSON-LD structured data
- Open Graph meta tags
- Semantic HTML structure
- Optimized meta descriptions

### Accessibility Features
- WCAG 2.1 compliant
- High contrast ratios
- Keyboard navigation support
- Screen reader friendly
- Focus management

## 📱 Browser Support

- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ iOS Safari 12+
- ✅ Android Chrome 70+

## 🤝 Contributing

Feel free to customize this template for your restaurant:

1. Fork the repository
2. Make your changes
3. Test on multiple devices
4. Deploy to your GitHub Pages

## 📄 License

This project is open source. Feel free to use it for your restaurant website.

## 🆘 Support

If you need help customizing the website:

1. Check the comments in the HTML file (marked with `<!-- EDITABLE: -->`)
2. Modify the CSS variables for color changes
3. Update the menu data in the HTML structure
4. Test your changes locally before deploying

## 🍽️ About Al Tapas

Al Tapas celebrates authentic Iberian culture through traditional flavors, serving the finest Spanish and Portuguese tapas in the heart of Lisbon. Our commitment to quality ingredients and authentic preparation methods creates an unforgettable dining experience.

---

**Made with ❤️ for authentic Portuguese cuisine**

Visit us at Rua Cais de Santarém, 26, Lisboa, Portugal  
Follow us on [Instagram](https://www.instagram.com/altapaslisboa/) and [TikTok](https://www.tiktok.com/@altapaslisboa)