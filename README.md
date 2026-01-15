# Skully Life - Wholesale THCa Flower Website

A modern, SEO-optimized website for Skully Life, a family-owned wholesale THCa flower supplier serving retailers nationwide.

## 🚀 Features

- **Modern Design**: Clean, professional UI built with Next.js and Tailwind CSS
- **SEO Optimized**: Comprehensive SEO setup ready for domain connection
- **Responsive**: Fully responsive design for all devices
- **Product Catalog**: Showcase THCa flower products (pounds and quarter-pounds)
- **Wholesale Inquiry Form**: Comprehensive form for business owners
- **Contact Page**: Multiple ways to get in touch
- **About Page**: Company story and values

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/joetabora/skully.git
   cd skully
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
skully/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── products/       # Product catalog
│   ├── wholesale-inquiry/  # Wholesale inquiry form
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Homepage
│   ├── robots.ts       # Robots.txt generator
│   └── sitemap.ts      # Sitemap generator
├── components/
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Footer component
├── public/             # Static assets
└── SEO_SETUP.md        # SEO setup guide
```

## 🔍 SEO Setup

**Important**: Before going live, you need to:

1. **Update Domain URLs**: Replace `https://yourdomain.com` with your actual domain in:
   - `app/layout.tsx`
   - `app/sitemap.ts`
   - `app/robots.ts`

2. **Add Contact Information**: Update email, phone, and address in:
   - `app/layout.tsx` (structured data)
   - `app/contact/page.tsx`

3. **Add Product Images**: Replace placeholder content with actual product images

4. **Set Up Google Search Console**: Submit your sitemap after domain is connected

See `SEO_SETUP.md` for complete SEO setup instructions.

## 📝 Customization

### Update Products
Edit `app/products/page.tsx` to add/modify product listings.

### Update Company Information
- **About Page**: `app/about/page.tsx`
- **Homepage**: `app/page.tsx`
- **Footer**: `components/Footer.tsx`

### Form Submissions
Currently, forms log to console. To connect to a backend:
1. Create API routes in `app/api/`
2. Update form handlers in:
   - `app/wholesale-inquiry/page.tsx`
   - `app/contact/page.tsx`

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📄 Pages

- **Home** (`/`): Hero section, features, company intro
- **Products** (`/products`): Product catalog with pricing inquiry
- **Wholesale Inquiry** (`/wholesale-inquiry`): Comprehensive business inquiry form
- **About** (`/about`): Company story, values, farm network
- **Contact** (`/contact`): Contact form and information

## 🎨 Styling

The site uses Tailwind CSS with a custom color scheme:
- Primary: Green tones (primary-600, primary-700, etc.)
- Customizable in `tailwind.config.ts`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔒 Legal Compliance

Remember to:
- Add age verification if required
- Include proper disclaimers
- Verify compliance with local regulations
- Add terms of service and privacy policy pages

## 📞 Support

For questions or issues, please contact the development team or refer to the project documentation.

## 📜 License

Private - All rights reserved

---

Built with ❤️ for Skully Life
