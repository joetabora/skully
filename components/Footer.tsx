import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <Image
                  src="/skully.jpg"
                  alt="Skully Life Logo"
                  width={56}
                  height={56}
                  className="rounded-full glow-green"
                />
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                SKULLY <span className="gradient-text">LIFE</span>
              </h3>
            </div>
            <p className="mb-4 text-gray-400 leading-relaxed font-light">
              Family-owned wholesale THCa flower supplier. Premium quality from 
              our network of farms in Oregon and California.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              Serving smoke shops, vape shops, gas stations, and convenience stores 
              throughout Wisconsin and nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white smooth-transition font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white smooth-transition font-medium">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white smooth-transition font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white smooth-transition font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-wider text-sm">For Business</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/wholesale-inquiry"
                  className="text-gray-400 hover:text-accent-400 smooth-transition font-medium"
                >
                  Wholesale Inquiry
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white smooth-transition font-medium">
                  Product Catalog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center text-sm relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <p className="text-gray-400 font-light">
            &copy; {new Date().getFullYear()} Skully Life. All rights reserved.
          </p>
          <p className="mt-3 text-xs text-gray-500 font-light">
            This product contains THCa. Must be 21+ to purchase. Please verify 
            local laws and regulations.
          </p>
        </div>
      </div>
    </footer>
  );
}
