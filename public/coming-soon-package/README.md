# Amin Infotech - Coming Soon Page Package

Professional under construction landing page for Amin Infotech with complete SEO optimization, responsive design, and automatic URL redirection.

## 📦 Package Contents

```
├── index.html          # Main coming soon page
├── .htaccess          # Apache configuration for URL rewriting (redirects all requests to index.html)
├── images/            # Images folder (create this and add your logo)
│   └── amin_logo.png  # Your company logo
└── README.md          # This file
```

## 🚀 Quick Start

### Step 1: Prepare Files
1. Extract this package to your server's public root directory (typically `public_html` or `www`)
2. Create an `images` folder in the root directory
3. Place `amin_logo.png` in the `images` folder

### Step 2: Upload to Server

**Using FTP/SFTP:**
- Upload `index.html` to root directory
- Upload `.htaccess` to root directory (ensure hidden files are visible)
- Create `images` folder and upload `amin_logo.png`

**Using cPanel File Manager:**
- Navigate to "File Manager"
- Navigate to public_html or www root
- Upload files (enable "Show Hidden Files" in Settings)
- Create `images` folder

### Step 3: Configure (Optional)

Edit `index.html` to customize:
- **Company Name/Description**: Search for "Amin Infotech" and update
- **Contact Numbers**: Update phone numbers in the "Support Numbers" section
- **Contact Email**: Update `amininfotech@gmail.com`
- **Office Address**: Update location details
- **Social Links**: Update Facebook and LinkedIn URLs
- **Domain Name**: Update `https://amininfotech.in` to your domain in meta tags

## 📋 Features

✅ **Fully Responsive**
- Desktop, Tablet, Mobile optimized
- Smooth scrolling and animations
- Touch-friendly buttons

✅ **SEO Optimized**
- Meta descriptions (160 characters)
- Open Graph tags for social sharing
- Twitter Card tags
- Structured JSON-LD data
- Canonical URLs
- Mobile-friendly viewport

✅ **Automatic URL Redirection**
- All requests redirect to index.html
- .htaccess configuration included
- No 404 errors
- Clean URLs

✅ **Performance**
- GZIP compression enabled
- Browser caching configured
- Minimal CSS (all inline)
- Single HTML file (no external dependencies)

✅ **Security**
- Security headers configured
- XSS protection enabled
- Frame hijacking prevention

✅ **Professional Design**
- Modern gradient animations
- Smooth scroll functionality
- Contact information display
- Social media links
- Favicon support

## 🔧 Technical Details

### .htaccess Configuration

The `.htaccess` file provides:
1. **URL Rewriting**: Redirects all requests to index.html
2. **Caching**: 30-day cache for static assets, 1-hour for HTML
3. **GZIP Compression**: Reduces file size by 60-80%
4. **Security Headers**: Protects against common web attacks

### Requirements

- Apache web server with mod_rewrite enabled
- PHP support (not required, but beneficial)
- Modern browser (Chrome, Firefox, Safari, Edge)

### Compatibility

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full |
| Edge    | ✅ Full |
| IE 11   | ⚠️ Partial (Gradients) |

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## 🎨 Customization Guide

### Update Contact Information
Find this section in `index.html`:
```html
<!-- Support Numbers -->
<a href="tel:+919924700015">+91 9924700015</a>
```
Replace with your numbers.

### Update Company Logo
1. Place your logo as `amin_logo.png` in the `images` folder
2. The image will automatically scale to fit

### Change Text Content
Edit the following sections:
- `<h1>Coming Soon</h1>` - Main heading
- `<p class="subheading">` - Subtitle
- `<p class="description">` - Description text

### Update Colors
The brand color is `#be123c` (Amin Infotech red). To change:
1. Search for `#be123c` in CSS
2. Replace with your brand color

## 🔗 Social Media Setup

Update these URLs:
- **Facebook**: `https://www.facebook.com/amininfotech`
- **LinkedIn**: `https://in.linkedin.com/pub/varun-amin/2b/35b/308`

## 📊 SEO Meta Tags

Key SEO elements included:
- Meta Description: 160 characters
- Keywords: Tally solutions, ERP software, etc.
- Author: Amin Infotech
- Theme color: #be123c

## 🚨 Troubleshooting

### Pages not redirecting to index.html
- Ensure `.htaccess` is in root directory
- Check if mod_rewrite is enabled (contact hosting provider)
- Verify file permissions on `.htaccess` (644 or 755)

### Logo not showing
- Confirm `images/amin_logo.png` exists
- Check image path in browser console
- Ensure image is PNG format

### Styles not applying
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors (F12)
- Verify HTML file is complete

### Mobile responsiveness issues
- Test in Chrome DevTools (F12 → Toggle Device Toolbar)
- Verify viewport meta tag is present
- Check CSS media queries

## 📞 Support

For issues or customization:
1. Contact your hosting provider for `.htaccess` issues
2. Check server error logs: `error_log` file
3. Test URL rewriting: Visit any random URL (should redirect to index.html)

## 📄 File Permissions

After uploading, set proper permissions:
```bash
chmod 755 .htaccess  # htaccess file
chmod 755 images     # images directory
chmod 644 index.html # HTML file
```

## ✅ Verification Checklist

- [ ] Files uploaded to root directory
- [ ] `.htaccess` is visible (show hidden files)
- [ ] `images/amin_logo.png` is in place
- [ ] Visiting domain shows coming soon page
- [ ] Any URL redirects to index.html
- [ ] Logo displays correctly
- [ ] Contact section loads
- [ ] Page is responsive on mobile
- [ ] Social media links work
- [ ] Phone numbers are clickable

## 📈 Analytics Tracking

To add Google Analytics, add this before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your Google Analytics ID.

## 📋 Version History

- **v1.0** - Initial release
  - Responsive coming soon page
  - SEO optimized
  - Automatic URL redirection
  - Contact information section
  - Social media links

## 📜 License

This template is provided for Amin Infotech use.

---

**Last Updated**: February 9, 2026

For more information, visit: https://amininfotech.in
