import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-primary-600 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/skully.jpg"
                alt="Skully Life Logo"
                width={50}
                height={50}
                className="rounded-full border-2 border-primary-500"
              />
              <h3 className="text-2xl font-bold text-white">
                SKULLY <span className="text-primary-500">LIFE</span>
              </h3>
            </div>
            <p className="mb-4 text-gray-400">
              Family-owned wholesale THCa flower supplier. Premium quality from 
              our network of farms in Oregon and California.
            </p>
            <p className="text-sm text-gray-500">
              Serving smoke shops, vape shops, gas stations, and convenience stores 
              throughout Wisconsin and nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-400 transition-colors text-gray-400">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider">For Business</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/wholesale-inquiry"
                  className="hover:text-accent-400 transition-colors text-gray-400"
                >
                  Wholesale Inquiry
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-400 transition-colors text-gray-400">
                  Product Catalog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-600 mt-8 pt-8 text-center text-sm">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Skully Life. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            This product contains THCa. Must be 21+ to purchase. Please verify 
            local laws and regulations.
          </p>
        </div>
      </div>
    </footer>
  );
}
