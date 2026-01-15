import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "THCa Flower Products - Wholesale Pounds & Quarter Pounds | Skully Life",
  description: "Browse our premium wholesale THCa flower products. Available in pounds and quarter-pounds. Premium quality from Oregon and California farms. Perfect for smoke shops, vape shops, and convenience stores.",
  keywords: "THCa flower products, wholesale THCa, bulk THCa flower, THCa pounds, quarter pound THCa, wholesale cannabis products",
};

// Sample product data - Replace with your actual products
const products = [
  {
    id: 1,
    name: "Premium THCa Flower - Pound",
    size: "1 Pound",
    description: "Premium quality THCa flower sourced from our trusted Oregon farms. Perfect for retailers looking to stock high-quality products.",
    features: ["Premium Quality", "Lab Tested", "Fresh Harvest"],
  },
  {
    id: 2,
    name: "Premium THCa Flower - Quarter Pound",
    size: "1/4 Pound",
    description: "Smaller quantity option for retailers testing new products or managing inventory. Same premium quality in a convenient size.",
    features: ["Premium Quality", "Lab Tested", "Fresh Harvest"],
  },
  {
    id: 3,
    name: "Premium THCa Flower - Pound (California)",
    size: "1 Pound",
    description: "Premium quality THCa flower from our California farm network. Exceptional quality and consistency.",
    features: ["Premium Quality", "Lab Tested", "California Grown"],
  },
  {
    id: 4,
    name: "Premium THCa Flower - Quarter Pound (California)",
    size: "1/4 Pound",
    description: "Quarter pound option from our California farms. Ideal for retailers seeking premium California-grown products.",
    features: ["Premium Quality", "Lab Tested", "California Grown"],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium THCa Flower Products
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Wholesale quantities available in pounds and quarter-pounds
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="mb-4">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {product.size}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-primary-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/wholesale-inquiry"
                    className="block w-full bg-primary-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Request Pricing
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-primary-600 text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Custom Quantities or Have Questions?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Contact us for wholesale pricing, bulk orders, or to learn more about 
              our products and sourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/wholesale-inquiry"
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors"
              >
                Submit Inquiry
              </Link>
              <Link
                href="/contact"
                className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-400 transition-colors border-2 border-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Why Choose Skully Life?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  ✓
                </div>
                <h3 className="text-xl font-semibold mb-2">Lab Tested</h3>
                <p className="text-gray-600">
                  All products undergo rigorous testing for quality and purity
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  ✓
                </div>
                <h3 className="text-xl font-semibold mb-2">Fresh Harvest</h3>
                <p className="text-gray-600">
                  Direct from our network of farms for maximum freshness
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  ✓
                </div>
                <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  Wholesale prices designed for business profitability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
