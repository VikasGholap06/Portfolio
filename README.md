# Vikas Gholap - Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Features a clean design, dark/light mode toggle, smooth animations, and SEO-friendly structure.

## ✨ Features

- **🎨 Modern & Clean Design**: Professional UI with blue/purple gradient accent colors
- **🌗 Dark/Light Mode**: Toggle between themes with persistent preference
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Smooth Animations**: Scroll-triggered animations and hover effects
- **🚀 Fast Loading**: Optimized performance with minimal dependencies
- **♿ Accessible**: Semantic HTML with ARIA labels
- **📧 Contact Form**: Interactive form with validation
- **🔗 Social Links**: GitHub, LinkedIn, and email integration

## 📁 Folder Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # Complete stylesheet with dark/light mode
├── script.js           # Interactive features and animations
├── README.md           # This file
└── assets/             # (Optional) Add your images, resume, etc.
    ├── images/
    │   └── profile.jpg # Your profile photo
    └── resume.pdf      # Your resume file
```

## 🚀 Quick Start

### Option 1: Open Directly
1. Open `index.html` in your web browser
2. That's it! The site is ready to view

### Option 2: Using Python Server (Recommended)
```powershell
# Navigate to the project folder
cd C:\Users\sh\Desktop\portfolio

# Start a local server
python -m http.server 8000

# Open http://localhost:8000 in your browser
```

### Option 3: Using VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## ✏️ Customization Guide

### 1. Personal Information

**Update in `index.html`:**

- **Name & Title**: Search for "Vikas Gholap" and replace with your name
- **Bio**: Update the hero description and about section text
- **Email**: Replace `vikas.gholap@example.com` with your email
- **Social Links**: Update GitHub and LinkedIn URLs
- **Location**: Change "India" to your location

**Lines to edit:**
- Line 28: Logo/Brand name
- Lines 60-70: Hero section name and title
- Lines 149-165: About section introduction
- Lines 171-180: Education details
- Lines 183-196: Career goals
- Lines 470-490: Contact information

### 2. Projects

**Update projects in `index.html` (lines 307-383):**

For each project card, update:
- Project title
- Description
- Technology tags
- GitHub link

Example:
```html
<h3>Your Project Name</h3>
<p>Your project description...</p>
<div class="project-tech">
    <span>Tech1</span>
    <span>Tech2</span>
</div>
<a href="https://github.com/yourusername/project" class="project-btn">
    View on GitHub
</a>
```

### 3. Skills

**Update skills in `index.html` (lines 254-305):**

Add or remove skill items:
```html
<div class="skill-item">
    <div class="skill-icon"><i class="fab fa-react"></i></div>
    <span>React</span>
</div>
```

Find icons at: [Font Awesome Icons](https://fontawesome.com/icons)

### 4. Experience/Timeline

**Update experience in `index.html` (lines 386-465):**

Modify timeline items with your experience, education, or learning journey.

### 5. Colors & Theme

**Update in `styles.css` (lines 7-30):**

```css
:root {
    --accent-primary: #6366f1;      /* Primary accent color */
    --accent-secondary: #8b5cf6;    /* Secondary accent color */
    --bg-primary: #0a0e27;          /* Dark mode background */
    /* ... more variables */
}
```

**Popular color schemes:**
- Blue/Purple (current): `#6366f1` / `#8b5cf6`
- Green/Teal: `#10b981` / `#14b8a6`
- Orange/Red: `#f59e0b` / `#ef4444`
- Pink/Purple: `#ec4899` / `#a855f7`

### 6. Add Your Photo

1. Create `assets/images/` folder
2. Add your photo as `profile.jpg`
3. Update `index.html` line 99:

Replace:
```html
<div class="image-placeholder">
    <i class="fas fa-user-tie"></i>
</div>
```

With:
```html
<img src="assets/images/profile.jpg" alt="Vikas Gholap" style="border-radius: 50%; width: 100%; height: 100%; object-fit: cover;">
```

### 7. Add Your Resume

1. Add `resume.pdf` to `assets/` folder
2. Update download link in `index.html` line 77:

```html
<a href="assets/resume.pdf" class="btn btn-secondary" download>
    <i class="fas fa-download"></i> Download Resume
</a>
```

## 🌐 Deployment Options

### GitHub Pages (Free & Easy)

1. **Create a GitHub repository**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select `main` branch as source
   - Your site will be live at: `https://yourusername.github.io/portfolio`

### Netlify (Drag & Drop)

1. Go to [Netlify](https://www.netlify.com/)
2. Drag your portfolio folder to deploy
3. Get instant URL: `https://yoursite.netlify.app`
4. Optional: Connect custom domain

### Vercel (Quick Deploy)

1. Install Vercel CLI:
   ```powershell
   npm install -g vercel
   ```

2. Deploy:
   ```powershell
   cd C:\Users\sh\Desktop\portfolio
   vercel
   ```

3. Follow prompts and get instant URL

## 📧 Contact Form Setup

The contact form currently simulates submission. To make it functional:

### Option 1: FormSpree (Easiest)

1. Sign up at [FormSpree](https://formspree.io/)
2. Get your form endpoint
3. Update `script.js` line 124:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

### Option 2: Netlify Forms

1. Add `netlify` attribute to form in `index.html`:
```html
<form class="contact-form" id="contactForm" netlify>
```

### Option 3: Your Own Backend

Create a backend API endpoint and update the fetch URL in `script.js`.

## 🎨 Additional Enhancements (Optional)

### Add Particles Background

1. Add script before closing `</body>` tag:
```html
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
```

2. Uncomment particles code in `script.js` (lines 244-272)

### Add Scroll Progress Bar

Uncomment the scroll progress code in `script.js` (lines 289-302)

### Add Typing Effect

Uncomment the typing effect code in `script.js` (lines 172-188)

## 🐛 Troubleshooting

### Icons not showing?
- Check internet connection (Font Awesome loads from CDN)
- Verify CDN link in `index.html` line 14

### Theme not persisting?
- Check browser's Local Storage is enabled
- Try in a different browser

### Animations not working?
- Ensure JavaScript is enabled
- Check browser console for errors (F12)

### Responsive issues?
- Clear browser cache (Ctrl+Shift+R)
- Test in different browsers

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is free to use for personal portfolios. Feel free to customize it to your needs!

## 🤝 Credits

- **Design**: Custom design for Vikas Gholap
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Inter & Poppins)

## 💡 Tips for Success

1. **Keep it updated**: Regularly add new projects and skills
2. **Add testimonials**: Include recommendations from professors/colleagues
3. **Blog section**: Consider adding a blog to showcase your knowledge
4. **SEO**: Update meta tags in `index.html` for better search ranking
5. **Analytics**: Add Google Analytics to track visitors
6. **Performance**: Compress images before uploading
7. **Custom domain**: Consider buying a custom domain (yourname.com)

## 📞 Need Help?

If you have questions or need help customizing:
- Check the code comments for guidance
- Review this README thoroughly
- Test changes in a local environment first

---

**Built with ❤️ by Vikas Gholap**

*Last Updated: January 2026*
