import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-black">
      {/* Hero Section */}
      <section className="relative urban-gradient py-20 md:py-32 border-b-2 border-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white uppercase tracking-tight">
              Premium <span className="text-primary-500 text-glow-green">Wholesale</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
              THCa <span className="text-accent-500 text-glow-red">Flower</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 font-medium">
              Family-Owned Quality from Oregon & California Farms
            </p>
            <p className="text-lg md:text-xl mb-10 text-gray-400 max-w-2xl mx-auto">
              Serving smoke shops, vape shops, gas stations, and convenience stores 
              throughout Wisconsin and nationwide shipping available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-primary-600 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-primary-500 transition-all glow-green uppercase tracking-wider"
              >
                View Products
              </Link>
              <Link
                href="/wholesale-inquiry"
                className="bg-accent-600 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-accent-500 transition-all glow-red uppercase tracking-wider border-2 border-accent-500"
              >
                Get Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center bg-gray-900 p-8 rounded-lg border-2 border-primary-600 hover:border-primary-500 transition-all">
              <div className="bg-primary-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 glow-green">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white uppercase">Premium Quality</h3>
              <p className="text-gray-400">
                Sourced from our network of trusted farms in Oregon and California
              </p>
            </div>
            <div className="text-center bg-gray-900 p-8 rounded-lg border-2 border-accent-600 hover:border-accent-500 transition-all">
              <div className="bg-accent-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 glow-red">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white uppercase">Wholesale Pricing</h3>
              <p className="text-gray-400">
                Competitive prices on pounds and quarter-pounds for business owners
              </p>
            </div>
            <div className="text-center bg-gray-900 p-8 rounded-lg border-2 border-primary-600 hover:border-primary-500 transition-all">
              <div className="bg-primary-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 glow-green">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white uppercase">Nationwide Shipping</h3>
              <p className="text-gray-400">
                Fast, reliable shipping to businesses across the United States
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24 bg-gray-900 border-y-2 border-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tight">
                  Family-Owned <span className="text-primary-500">Excellence</span>
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                  Skully Life is a family-owned business dedicated to providing the highest 
                  quality wholesale THCa flower to retailers across the nation.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Our carefully selected network of farms in Oregon and California ensures 
                  consistent quality and premium products for your business.
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-primary-600 text-white px-8 py-3 rounded-md font-bold hover:bg-primary-500 transition-all glow-green uppercase tracking-wider"
                >
                  Learn More
                </Link>
              </div>
              <div className="bg-black border-2 border-primary-600 rounded-lg p-8 text-center glow-green">
                <div className="text-6xl font-black text-primary-500 mb-2 text-glow-green">100%</div>
                <div className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">Family Owned</div>
                <div className="text-gray-400">
                  Committed to quality and customer satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black border-t-2 border-accent-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tight">
            Ready to Stock <span className="text-primary-500">Premium</span> THCa?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join our network of satisfied retailers. Get wholesale pricing and start 
            offering premium quality products to your customers today.
          </p>
          <Link
            href="/wholesale-inquiry"
            className="inline-block bg-accent-600 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-accent-500 transition-all glow-red uppercase tracking-wider"
          >
            Request Wholesale Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
