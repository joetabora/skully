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
    color: "green",
  },
  {
    id: 2,
    name: "Premium THCa Flower - Quarter Pound",
    size: "1/4 Pound",
    description: "Smaller quantity option for retailers testing new products or managing inventory. Same premium quality in a convenient size.",
    features: ["Premium Quality", "Lab Tested", "Fresh Harvest"],
    color: "green",
  },
  {
    id: 3,
    name: "Premium THCa Flower - Pound (California)",
    size: "1 Pound",
    description: "Premium quality THCa flower from our California farm network. Exceptional quality and consistency.",
    features: ["Premium Quality", "Lab Tested", "California Grown"],
    color: "red",
  },
  {
    id: 4,
    name: "Premium THCa Flower - Quarter Pound (California)",
    size: "1/4 Pound",
    description: "Quarter pound option from our California farms. Ideal for retailers seeking premium California-grown products.",
    features: ["Premium Quality", "Lab Tested", "California Grown"],
    color: "red",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="urban-gradient border-b-2 border-primary-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">
              Premium <span className="text-primary-500">THCa</span> Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              Wholesale quantities available in pounds and quarter-pounds
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {products.map((product) => {
              const borderColor = product.color === "green" ? "border-primary-600" : "border-accent-600";
              const glowClass = product.color === "green" ? "glow-green" : "glow-red";
              const bgColor = product.color === "green" ? "bg-primary-600" : "bg-accent-600";
              const hoverBg = product.color === "green" ? "hover:bg-primary-500" : "hover:bg-accent-500";
              
              return (
                <div
                  key={product.id}
                  className={`bg-gray-900 rounded-lg border-2 ${borderColor} overflow-hidden hover:scale-105 transition-transform ${glowClass}`}
                >
                  <div className="p-8">
                    <div className="mb-4">
                      <span className={`${bgColor} text-white px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wider`}>
                        {product.size}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4 uppercase">
                      {product.name}
                    </h2>
                    <p className="text-gray-400 mb-6">{product.description}</p>
                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <svg
                            className={`w-5 h-5 ${product.color === "green" ? "text-primary-500" : "text-accent-500"} mr-3`}
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
                      className={`block w-full ${bgColor} text-white text-center px-6 py-3 rounded-md font-bold hover:opacity-90 transition-all uppercase tracking-wider ${glowClass}`}
                    >
                      Request Pricing
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900 border-2 border-accent-600 rounded-lg p-8 md:p-12 text-center glow-red">
            <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">
              Need Custom Quantities?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Contact us for wholesale pricing, bulk orders, or to learn more about 
              our products and sourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/wholesale-inquiry"
                className="bg-accent-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-accent-500 transition-all glow-red uppercase tracking-wider"
              >
                Submit Inquiry
              </Link>
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-primary-500 transition-all glow-green uppercase tracking-wider border-2 border-primary-500"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-900 border-t-2 border-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-12 text-white uppercase tracking-tight">
              Why Choose <span className="text-primary-500">Skully Life</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-black border-2 border-primary-600 p-6 rounded-lg glow-green">
                <div className="text-5xl font-black text-primary-500 mb-3 text-glow-green">
                  ✓
                </div>
                <h3 className="text-xl font-bold mb-2 text-white uppercase">Lab Tested</h3>
                <p className="text-gray-400">
                  All products undergo rigorous testing for quality and purity
                </p>
              </div>
              <div className="text-center bg-black border-2 border-primary-600 p-6 rounded-lg glow-green">
                <div className="text-5xl font-black text-primary-500 mb-3 text-glow-green">
                  ✓
                </div>
                <h3 className="text-xl font-bold mb-2 text-white uppercase">Fresh Harvest</h3>
                <p className="text-gray-400">
                  Direct from our network of farms for maximum freshness
                </p>
              </div>
              <div className="text-center bg-black border-2 border-accent-600 p-6 rounded-lg glow-red">
                <div className="text-5xl font-black text-accent-500 mb-3 text-glow-red">
                  ✓
                </div>
                <h3 className="text-xl font-bold mb-2 text-white uppercase">Competitive Pricing</h3>
                <p className="text-gray-400">
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
