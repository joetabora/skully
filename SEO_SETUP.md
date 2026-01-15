# SEO Setup Guide for Skully Life

This document outlines all the SEO optimizations that have been implemented and what needs to be updated when you connect your domain.

## ✅ Already Implemented

### 1. Meta Tags & Metadata
- **Location**: `app/layout.tsx` and individual page files
- **Includes**:
  - Title tags optimized for each page
  - Meta descriptions with keywords
  - Open Graph tags for social sharing
  - Twitter Card tags
  - Canonical URLs (commented out - ready to activate)

### 2. Structured Data (JSON-LD)
- **Location**: `app/layout.tsx`
- **Type**: Organization schema
- **Status**: Ready, needs domain URL update

### 3. Sitemap
- **Location**: `app/sitemap.ts`
- **Status**: Generated automatically by Next.js
- **Action Required**: Update base URL when domain is connected

### 4. Robots.txt
- **Location**: `app/robots.ts` and `public/robots.txt`
- **Status**: Configured to allow all search engines
- **Action Required**: Update base URL when domain is connected

### 5. Semantic HTML
- Proper heading hierarchy (H1, H2, H3)
- Alt text placeholders for images
- Semantic HTML5 elements

### 6. Performance Optimizations
- Next.js Image optimization ready
- Font optimization with Next.js font loader
- Preconnect tags for external resources

## 🔧 Action Items When Domain is Connected

### 1. Update Domain URLs
Search and replace `https://yourdomain.com` with your actual domain in:
- `app/layout.tsx` (metadata, structured data)
- `app/sitemap.ts`
- `app/robots.ts`
- `public/robots.txt`

### 2. Activate Canonical URLs
In `app/layout.tsx`, uncomment the `alternates.canonical` section:
```typescript
alternates: {
  canonical: "https://yourdomain.com",
},
```

### 3. Add Contact Information
Update structured data in `app/layout.tsx` with:
- Actual email address
- Phone number
- Physical address (if applicable)

### 4. Add Logo
- Upload logo to `public/logo.png`
- Update logo URL in structured data

### 5. Image Optimization
- Add actual product images
- Ensure all images have descriptive alt text
- Use Next.js Image component for optimization

### 6. Google Search Console
1. Verify your domain ownership
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`
3. Monitor indexing status

### 7. Google Analytics / Tag Manager
Add tracking code to `app/layout.tsx` in the `<head>` section:
```typescript
{/* Google Analytics */}
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### 8. Additional SEO Enhancements

#### Blog Section (Recommended)
Create a blog to improve SEO with fresh content:
- `/app/blog/page.tsx`
- Regular posts about THCa, industry news, product spotlights

#### Local SEO
- Create Google My Business profile
- Add location-specific content
- Get listed on cannabis directories (Weedmaps, Leafly if applicable)

#### Backlink Strategy
- Reach out to industry blogs
- Guest posting opportunities
- Directory listings

#### Content Optimization
- Add FAQ section (`/app/faq/page.tsx`)
- Add testimonials/reviews section
- Create resource pages

## 📊 SEO Checklist

- [x] Meta titles and descriptions
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured data (JSON-LD)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Semantic HTML
- [x] Mobile responsive design
- [x] Fast page load times
- [ ] Domain URLs updated
- [ ] Google Search Console setup
- [ ] Google Analytics installed
- [ ] Actual product images added
- [ ] Contact information added
- [ ] Logo added
- [ ] Blog section (optional)
- [ ] FAQ section (optional)
- [ ] Testimonials section (optional)

## 🎯 Target Keywords

Primary Keywords:
- wholesale THCa flower
- bulk THCa supplier
- THCa flower Wisconsin
- wholesale cannabis
- THCa pounds wholesale

Secondary Keywords:
- Oregon THCa farms
- California THCa farms
- smoke shop supplier
- vape shop wholesale
- convenience store cannabis

Long-tail Keywords:
- wholesale THCa flower by the pound
- bulk THCa flower supplier Wisconsin
- premium THCa flower wholesale
- family-owned THCa supplier

## 📝 Notes

- All SEO optimizations are implemented but commented/placeholder values are used
- The site is ready for production once domain is connected
- Consider adding a blog for ongoing SEO value
- Monitor performance with Google Search Console and Analytics
