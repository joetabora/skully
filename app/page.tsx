import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-black">
      {/* Hero Section */}
      <section className="relative urban-gradient py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-accent-500/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold text-primary-500 uppercase tracking-widest px-4 py-2 glass-card rounded-full">
                Premium Quality
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 text-white uppercase tracking-tighter leading-none">
              Premium <span className="gradient-text">Wholesale</span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-black mb-10 text-white/90">
              THCa <span className="gradient-text-red">Flower</span>
            </h2>
            <p className="text-xl md:text-2xl mb-6 text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Family-Owned Quality from Oregon & California Farms
            </p>
            <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto font-light">
              Serving smoke shops, vape shops, gas stations, and convenience stores 
              throughout Wisconsin and nationwide shipping available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-12 py-5 rounded-xl font-bold text-lg hover:from-primary-500 hover:to-primary-600 smooth-transition glow-green-hover btn-modern uppercase tracking-wider shadow-2xl"
              >
                View Products
              </Link>
              <Link
                href="/wholesale-inquiry"
                className="bg-gradient-to-r from-accent-600 to-accent-700 text-white px-12 py-5 rounded-xl font-bold text-lg hover:from-accent-500 hover:to-accent-600 smooth-transition glow-red-hover btn-modern uppercase tracking-wider shadow-2xl"
              >
                Get Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 bg-black relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="text-center card-modern p-10 rounded-2xl smooth-transition group">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 glow-green smooth-transition group-hover:scale-110 group-hover:rotate-3">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">Premium Quality</h3>
              <p className="text-gray-400 leading-relaxed">
                Sourced from our network of trusted farms in Oregon and California
              </p>
            </div>
            <div className="text-center card-modern p-10 rounded-2xl smooth-transition group">
              <div className="bg-gradient-to-br from-accent-600 to-accent-700 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 glow-red smooth-transition group-hover:scale-110 group-hover:-rotate-3">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">Wholesale Pricing</h3>
              <p className="text-gray-400 leading-relaxed">
                Competitive prices on pounds and quarter-pounds for business owners
              </p>
            </div>
            <div className="text-center card-modern p-10 rounded-2xl smooth-transition group">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 glow-green smooth-transition group-hover:scale-110 group-hover:rotate-3">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">Nationwide Shipping</h3>
              <p className="text-gray-400 leading-relaxed">
                Fast, reliable shipping to businesses across the United States
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-black via-gray-900/50 to-black relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-bold text-primary-500 uppercase tracking-widest">
                    Our Story
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
                  Family-Owned <span className="gradient-text">Excellence</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  Skully Life is a family-owned business dedicated to providing the highest 
                  quality wholesale THCa flower to retailers across the nation.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  Our carefully selected network of farms in Oregon and California ensures 
                  consistent quality and premium products for your business.
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-4 rounded-xl font-bold hover:from-primary-500 hover:to-primary-600 smooth-transition glow-green-hover btn-modern uppercase tracking-wider shadow-xl"
                >
                  Learn More
                </Link>
              </div>
              <div className="card-modern p-12 rounded-3xl text-center glow-green smooth-transition group">
                <div className="text-7xl font-black gradient-text mb-4">100%</div>
                <div className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Family Owned</div>
                <div className="text-gray-400 text-lg font-light">
                  Committed to quality and customer satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 via-transparent to-primary-500/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-white uppercase tracking-tighter leading-tight">
            Ready to Stock <span className="gradient-text">Premium</span> THCa?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Join our network of satisfied retailers. Get wholesale pricing and start 
            offering premium quality products to your customers today.
          </p>
          <Link
            href="/wholesale-inquiry"
            className="inline-block bg-gradient-to-r from-accent-600 to-accent-700 text-white px-14 py-6 rounded-xl font-black text-xl hover:from-accent-500 hover:to-accent-600 smooth-transition glow-red-hover btn-modern uppercase tracking-wider shadow-2xl"
          >
            Request Wholesale Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
