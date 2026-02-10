# Deployment Checklist - Amin Infotech Coming Soon Page

Use this checklist to track your deployment progress.

## 📋 Pre-Deployment

- [ ] Downloaded complete package (all files present)
- [ ] Have hosting login credentials ready
- [ ] Have FTP/cPanel access
- [ ] Prepared your logo file (amin_logo.png)
- [ ] Read README.md for full documentation
- [ ] Confirmed Apache hosting (shared hosting includes this)

## 🚀 Deployment Steps

### Phase 1: File Preparation
- [ ] Locate `index.html` from package
- [ ] Locate `.htaccess` from package  
- [ ] Prepare `amin_logo.png` image
- [ ] Ensure logo is at least 160x160px (higher resolution is better)

### Phase 2: Server Upload (Choose your method)

#### Option A: cPanel File Manager
- [ ] Login to cPanel
- [ ] Navigate to File Manager
- [ ] Go to `public_html` directory
- [ ] Enable "Show Hidden Files"
- [ ] Upload `index.html`
- [ ] Upload `.htaccess`
- [ ] Create new folder named `images`
- [ ] Upload `amin_logo.png` to the `images` folder

#### Option B: FTP/SFTP Client
- [ ] Open FTP client (FileZilla, WinSCP, Cyberduck, etc.)
- [ ] Connect to server with hostname, username, password
- [ ] Navigate to root directory
- [ ] Enable view of hidden files
- [ ] Upload `index.html`
- [ ] Upload `.htaccess`
- [ ] Create folder `images`
- [ ] Upload `amin_logo.png` to `images` folder

### Phase 3: Verification

#### File Structure Check
- [ ] Open cPanel File Manager
- [ ] Confirm file structure looks like:
  ```
  public_html/
  ├── index.html ✓
  ├── .htaccess ✓
  └── images/
      └── amin_logo.png ✓
  ```

#### Browser Testing
- [ ] Visit your domain in browser (yourdomain.com)
- [ ] Page loads without errors
- [ ] Logo appears correctly
- [ ] Layout is responsive (resize window)
- [ ] "Coming Soon" heading visible
- [ ] Contact section visible

#### Functionality Testing
- [ ] Click "Get in Touch" button → scrolls to contact section
- [ ] Click phone number → initiates call on mobile
- [ ] Click email → opens email composer
- [ ] Click Facebook icon → opens Facebook page
- [ ] Click LinkedIn icon → opens LinkedIn page

#### URL Redirect Testing
Test that all URLs redirect to coming soon page:
- [ ] yourdomain.com → shows coming soon
- [ ] yourdomain.com/about → shows coming soon
- [ ] yourdomain.com/products → shows coming soon
- [ ] yourdomain.com/services → shows coming soon
- [ ] yourdomain.com/contact → shows coming soon
- [ ] yourdomain.com/random/path → shows coming soon (not 404)

#### Mobile Testing
- [ ] Test on iOS (iPhone/iPad)
- [ ] Test on Android phone
- [ ] Test on tablet
- [ ] Test on portrait orientation
- [ ] Test on landscape orientation
- [ ] All touch interactions work

#### Desktop Testing
- [ ] Chrome browser ✓
- [ ] Firefox browser ✓
- [ ] Safari browser ✓
- [ ] Edge browser ✓

### Phase 4: Performance Checks
- [ ] Page loads in < 3 seconds
- [ ] No console errors (Press F12 to check)
- [ ] Logo displays without 404 error
- [ ] Smooth scroll animation works
- [ ] No broken styling

## 🔧 Common Issues Checklist

If something doesn't work, check these:

### Logo Not Showing
- [ ] `images` folder exists in root
- [ ] `amin_logo.png` is inside `images` folder
- [ ] Logo file name matches exactly (case-sensitive)
- [ ] Logo file format is .png

### URLs Not Redirecting
- [ ] `.htaccess` is in root directory
- [ ] `.htaccess` file is visible (enable hidden files)
- [ ] File permissions correct (644 or 755)
- [ ] Hosting provider has mod_rewrite enabled
  - [ ] If not, contact support to enable it

### Styles Look Broken
- [ ] Hard refresh page (Ctrl+Shift+Delete or Cmd+Shift+R)
- [ ] Clear browser cache completely
- [ ] Try different browser
- [ ] Check browser console (F12)

### Page Shows 404 Error
- [ ] `index.html` exists in root
- [ ] `.htaccess` is properly uploaded
- [ ] Check file naming (case-sensitive)

## 📝 Customization (Optional)

If you want to customize the page:

- [ ] Updated company name to "Amin Infotech" or your company name
- [ ] Updated all phone numbers with your numbers
- [ ] Updated email address with your email
- [ ] Updated office address with your address
- [ ] Updated social media URLs with your profiles
- [ ] Verified all changes saved correctly

## 🔒 Security Checklist

- [ ] `.htaccess` includes security headers
- [ ] GZIP compression enabled (check in .htaccess)
- [ ] Caching rules configured (30 days for images)
- [ ] XSS protection enabled
- [ ] Frame hijacking prevention enabled

## 📊 SEO & Analytics (Optional)

- [ ] Meta description looks good in search results
- [ ] Open Graph tags populated correctly
- [ ] Twitter Card tags configured
- [ ] JSON-LD structured data included
- [ ] (Optional) Google Analytics code added
  - [ ] If yes, paste GA code in `<head>` section

## 📈 Post-Deployment

- [ ] Monitor page performance
- [ ] Check analytics for visitor traffic
- [ ] Update progress bar percentage occasionally
- [ ] Respond to contact inquiries
- [ ] Keep social links current
- [ ] Monitor for any errors (check cPanel error logs)

## 🎉 Final Status

- [ ] All tests passed
- [ ] Page is live and working
- [ ] No errors or issues
- [ ] Ready for users to visit

---

## 📞 Troubleshooting Guide

### Issue: 404 Error on Home Page
**Steps to resolution:**
1. Check if `index.html` exists in root directory
2. Verify file name is exactly `index.html` (lowercase)
3. Confirm you're accessing correct domain
4. Hard refresh browser (Ctrl+F5)
5. Contact hosting support if still not working

### Issue: 404 on Internal Pages
**This is expected behavior with .htaccess:**
- yourdomain.com/about should redirect to coming soon
- This is by design (the .htaccess does this)
- If it shows actual 404 instead of coming soon, .htaccess may not be working
- Solution: Check if .htaccess is in root and properly uploaded

### Issue: Logo Not Displaying
**Debug steps:**
1. Right-click → Inspect element (F12)
2. Look for image error in console
3. Check the image URL: should be `images/amin_logo.png`
4. Verify `images` folder exists
5. Verify `amin_logo.png` is inside `images` folder
6. Check logo file extension (.png not .jpg)

### Issue: Styles Look Off
**Quick fixes:**
1. Hard refresh: Ctrl+Shift+Delete (Windows) or Cmd+Shift+R (Mac)
2. Clear cookies and cache
3. Try incognito mode
4. Wait 5-10 minutes for caching to update
5. Try different browser

### Issue: Phone Numbers Not Clickable
**Check:**
1. Verify phone numbers have `tel:` prefix
2. Test on mobile device (desktop normally won't dial)
3. Check if phone app installed on mobile
4. Verify number format: `+91` prefix for India

### Issue: Page Loads Very Slowly
**Optimization:**
1. Check logo file size (should be < 500KB)
2. Verify GZIP compression in .htaccess
3. Check browser console for slow resources
4. Contact hosting provider about server performance
5. Check if other files are loading properly

---

## 📚 Files in This Package

| File | Purpose | Required? |
|------|---------|-----------|
| `index.html` | Main coming soon page | ✅ Yes |
| `.htaccess` | Server configuration & redirects | ✅ Yes |
| `images/amin_logo.png` | Company logo | ✅ Yes |
| `README.md` | Complete documentation | 📖 Reference |
| `SETUP_GUIDE.txt` | Quick setup instructions | 📖 Reference |
| `DEPLOYMENT_CHECKLIST.md` | This checklist | ✅ Use for tracking |

---

## ✨ Success Metrics

Your deployment is successful when:

✅ Page loads without errors
✅ Logo displays correctly
✅ All URLs redirect to coming soon
✅ Works on mobile devices
✅ Contact information is accessible
✅ No 404 errors
✅ Page loads quickly (< 3 seconds)

---

**Happy deploying! 🚀**

If you have questions, refer to README.md or contact your hosting provider.
