import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// SEO Metadata - Update these when domain is connected
export const metadata: Metadata = {
  title: "Skully Life - Premium Wholesale THCa Flower | Oregon & California Farms",
  description: "Family-owned wholesale THCa flower supplier. Premium quality pounds and quarter-pounds from our network of farms in Oregon and California. Serving smoke shops, vape shops, gas stations, and convenience stores nationwide.",
  keywords: "wholesale THCa flower, bulk THCa, THCa supplier, wholesale cannabis, THCa flower Wisconsin, Oregon THCa, California THCa, smoke shop supplier, vape shop wholesale",
  authors: [{ name: "Skully Life" }],
  openGraph: {
    title: "Skully Life - Premium Wholesale THCa Flower",
    description: "Family-owned wholesale THCa flower supplier from Oregon and California farms",
    type: "website",
    // Add your domain URL here when connected
    // url: "https://yourdomain.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skully Life - Premium Wholesale THCa Flower",
    description: "Family-owned wholesale THCa flower supplier",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Add canonical URL when domain is connected
  // alternates: {
  //   canonical: "https://yourdomain.com",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data - JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Skully Life",
              description: "Family-owned wholesale THCa flower supplier",
              url: "https://yourdomain.com", // Update when domain is connected
              logo: "https://yourdomain.com/logo.png", // Update when domain is connected
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Wholesale Inquiries",
                // Add contact info when available
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
                // Add full address when available
              },
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
