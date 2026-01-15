import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Skully Life - Family-Owned Wholesale THCa Supplier",
  description: "Learn about Skully Life, a family-owned wholesale THCa flower business. Our network of farms in Oregon and California provides premium quality products to retailers nationwide.",
  keywords: "about Skully Life, family-owned cannabis business, Oregon THCa farms, California THCa farms, wholesale supplier story",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Skully Life
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Family-Owned Excellence in Wholesale THCa Flower
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Our Story */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4 text-lg">
                  Skully Life is a family-owned business dedicated to providing 
                  the highest quality wholesale THCa flower to retailers across 
                  the United States. What started as a passion for premium cannabis 
                  products has grown into a trusted wholesale supplier serving 
                  smoke shops, vape shops, gas stations, and convenience stores 
                  nationwide.
                </p>
                <p className="text-gray-700 mb-4 text-lg">
                  Our commitment to quality begins with our carefully selected 
                  network of farms in Oregon and California. These partnerships 
                  ensure that every product we offer meets our rigorous standards 
                  for freshness, potency, and overall quality.
                </p>
                <p className="text-gray-700 text-lg">
                  As a family-owned business, we understand the importance of 
                  building lasting relationships with our clients. We're not just 
                  a supplier—we're your partner in success, committed to helping 
                  your business thrive with premium products your customers will love.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-primary-700"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Quality First
                </h3>
                <p className="text-gray-700">
                  We never compromise on quality. Every product is carefully 
                  selected and tested to ensure it meets our high standards.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-primary-700"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Family Values
                </h3>
                <p className="text-gray-700">
                  As a family-owned business, we treat every client like family. 
                  Your success is our success.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-primary-700"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Farm Network
                </h3>
                <p className="text-gray-700">
                  Our partnerships with farms in Oregon and California ensure 
                  consistent quality and fresh products.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-primary-700"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Reliable Service
                </h3>
                <p className="text-gray-700">
                  Fast shipping, competitive pricing, and responsive customer 
                  service you can count on.
                </p>
              </div>
            </div>

            {/* Our Farms */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Farm Network
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Oregon Farms
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our Oregon farm partners are known for their commitment to 
                    sustainable growing practices and premium quality products. 
                    The unique climate and soil conditions in Oregon contribute 
                    to exceptional THCa flower with distinct characteristics.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    California Farms
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our California network brings decades of cultivation expertise 
                    and innovation. These farms produce consistently high-quality 
                    THCa flower that meets the highest industry standards.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary-600 text-white rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Partner With Us
              </h2>
              <p className="text-xl mb-8 text-primary-100">
                Ready to offer premium THCa flower to your customers? 
                Get started with wholesale pricing today.
              </p>
              <Link
                href="/wholesale-inquiry"
                className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors"
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
