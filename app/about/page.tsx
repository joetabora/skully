import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Skully Life - Family-Owned Wholesale THCa Supplier",
  description: "Learn about Skully Life, a family-owned wholesale THCa flower business. Our network of farms in Oregon and California provides premium quality products to retailers nationwide.",
  keywords: "about Skully Life, family-owned cannabis business, Oregon THCa farms, California THCa farms, wholesale supplier story",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="urban-gradient py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-accent-500/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold text-primary-500 uppercase tracking-widest px-4 py-2 glass-card rounded-full">
                Our Story
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter leading-none">
              About <span className="gradient-text">Skully Life</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Family-Owned Excellence in Wholesale THCa Flower
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Our Story */}
            <div className="card-modern rounded-3xl p-12 md:p-16 mb-16 glow-green smooth-transition">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 mb-4 text-lg">
                  Skully Life is a family-owned business dedicated to providing 
                  the highest quality wholesale THCa flower to retailers across 
                  the United States. What started as a passion for premium cannabis 
                  products has grown into a trusted wholesale supplier serving 
                  smoke shops, vape shops, gas stations, and convenience stores 
                  nationwide.
                </p>
                <p className="text-gray-300 mb-4 text-lg">
                  Our commitment to quality begins with our carefully selected 
                  network of farms in Oregon and California. These partnerships 
                  ensure that every product we offer meets our rigorous standards 
                  for freshness, potency, and overall quality.
                </p>
                <p className="text-gray-300 text-lg">
                  As a family-owned business, we understand the importance of 
                  building lasting relationships with our clients. We&apos;re not just 
                  a supplier—we&apos;re your partner in success, committed to helping 
                  your business thrive with premium products your customers will love.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="card-modern rounded-2xl p-10 glow-green smooth-transition group">
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 w-24 h-24 rounded-2xl flex items-center justify-center mb-8 glow-green smooth-transition group-hover:scale-110 group-hover:rotate-3">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">
                  Quality First
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-lg">
                  We never compromise on quality. Every product is carefully 
                  selected and tested to ensure it meets our high standards.
                </p>
              </div>
              <div className="card-modern rounded-2xl p-10 glow-red smooth-transition group">
                <div className="bg-gradient-to-br from-accent-600 to-accent-700 w-24 h-24 rounded-2xl flex items-center justify-center mb-8 glow-red smooth-transition group-hover:scale-110 group-hover:-rotate-3">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">
                  Family Values
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-lg">
                  As a family-owned business, we treat every client like family. 
                  Your success is our success.
                </p>
              </div>
              <div className="card-modern rounded-2xl p-10 glow-green smooth-transition group">
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 w-24 h-24 rounded-2xl flex items-center justify-center mb-8 glow-green smooth-transition group-hover:scale-110 group-hover:rotate-3">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">
                  Farm Network
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-lg">
                  Our partnerships with farms in Oregon and California ensure 
                  consistent quality and fresh products.
                </p>
              </div>
              <div className="card-modern rounded-2xl p-10 glow-red smooth-transition group">
                <div className="bg-gradient-to-br from-accent-600 to-accent-700 w-24 h-24 rounded-2xl flex items-center justify-center mb-8 glow-red smooth-transition group-hover:scale-110 group-hover:-rotate-3">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">
                  Reliable Service
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-lg">
                  Fast shipping, competitive pricing, and responsive customer 
                  service you can count on.
                </p>
              </div>
            </div>

            {/* Our Farms */}
            <div className="card-modern rounded-3xl p-12 md:p-16 mb-16 glow-green smooth-transition">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-10 uppercase tracking-tighter">
                Our <span className="gradient-text">Farm Network</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-8 rounded-2xl">
                  <h3 className="text-3xl font-black text-white mb-5 uppercase tracking-tight">
                    Oregon Farms
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light text-lg">
                    Our Oregon farm partners are known for their commitment to 
                    sustainable growing practices and premium quality products. 
                    The unique climate and soil conditions in Oregon contribute 
                    to exceptional THCa flower with distinct characteristics.
                  </p>
                </div>
                <div className="glass-card p-8 rounded-2xl">
                  <h3 className="text-3xl font-black text-white mb-5 uppercase tracking-tight">
                    California Farms
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light text-lg">
                    Our California network brings decades of cultivation expertise 
                    and innovation. These farms produce consistently high-quality 
                    THCa flower that meets the highest industry standards.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="card-modern rounded-3xl p-12 md:p-16 text-center glow-red smooth-transition">
              <h2 className="text-5xl font-black mb-6 text-white uppercase tracking-tighter">
                Partner <span className="gradient-text-red">With Us</span>
              </h2>
              <p className="text-xl mb-10 text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
                Ready to offer premium THCa flower to your customers? 
                Get started with wholesale pricing today.
              </p>
              <Link
                href="/wholesale-inquiry"
                className="inline-block bg-gradient-to-r from-accent-600 to-accent-700 text-white px-12 py-5 rounded-xl font-black text-lg hover:from-accent-500 hover:to-accent-600 smooth-transition glow-red-hover btn-modern uppercase tracking-wider shadow-2xl"
              >
                Request Wholesale Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
