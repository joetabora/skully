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
      <section className="urban-gradient py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-accent-500/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold text-primary-500 uppercase tracking-widest px-4 py-2 glass-card rounded-full">
                Product Catalog
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter leading-none">
              Premium <span className="gradient-text">THCa</span> Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
              Wholesale quantities available in pounds and quarter-pounds
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {products.map((product) => {
              const glowClass = product.color === "green" ? "glow-green-hover" : "glow-red-hover";
              const gradientFrom = product.color === "green" ? "from-primary-600" : "from-accent-600";
              const gradientTo = product.color === "green" ? "to-primary-700" : "to-accent-700";
              const iconColor = product.color === "green" ? "text-primary-500" : "text-accent-500";
              
              return (
                <div
                  key={product.id}
                  className="card-modern rounded-3xl overflow-hidden smooth-transition group"
                >
                  <div className="p-10">
                    <div className="mb-6">
                      <span className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white px-5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider inline-block shadow-lg`}>
                        {product.size}
                      </span>
                    </div>
                    <h2 className="text-3xl font-black text-white mb-5 uppercase tracking-tight leading-tight">
                      {product.name}
                    </h2>
                    <p className="text-gray-400 mb-8 leading-relaxed font-light text-lg">{product.description}</p>
                    <ul className="space-y-4 mb-8">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center mr-4 flex-shrink-0`}>
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/wholesale-inquiry"
                      className={`block w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white text-center px-6 py-4 rounded-xl font-bold hover:opacity-90 smooth-transition uppercase tracking-wider ${glowClass} btn-modern shadow-xl`}
                    >
                      Request Pricing
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="card-modern rounded-3xl p-12 md:p-16 text-center glow-green smooth-transition">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter">
              Need Custom Quantities?
            </h2>
            <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Contact us for wholesale pricing, bulk orders, or to learn more about 
              our products and sourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/wholesale-inquiry"
                className="bg-gradient-to-r from-accent-600 to-accent-700 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-accent-500 hover:to-accent-600 smooth-transition glow-red-hover btn-modern uppercase tracking-wider shadow-xl"
              >
                Submit Inquiry
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-primary-500 hover:to-primary-600 smooth-transition glow-green-hover btn-modern uppercase tracking-wider shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-black text-center mb-16 text-white uppercase tracking-tighter">
              Why Choose <span className="gradient-text">Skully Life</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center card-modern p-8 rounded-2xl smooth-transition group">
                <div className="text-6xl font-black gradient-text mb-4">✓</div>
                <h3 className="text-2xl font-black mb-3 text-white uppercase tracking-tight">Lab Tested</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  All products undergo rigorous testing for quality and purity
                </p>
              </div>
              <div className="text-center card-modern p-8 rounded-2xl smooth-transition group">
                <div className="text-6xl font-black gradient-text mb-4">✓</div>
                <h3 className="text-2xl font-black mb-3 text-white uppercase tracking-tight">Fresh Harvest</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  Direct from our network of farms for maximum freshness
                </p>
              </div>
              <div className="text-center card-modern p-8 rounded-2xl smooth-transition group">
                <div className="text-6xl font-black gradient-text-red mb-4">✓</div>
                <h3 className="text-2xl font-black mb-3 text-white uppercase tracking-tight">Competitive Pricing</h3>
                <p className="text-gray-400 leading-relaxed font-light">
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
