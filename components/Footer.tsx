import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Skully Life</h3>
            <p className="mb-4">
              Family-owned wholesale THCa flower supplier. Premium quality from 
              our network of farms in Oregon and California.
            </p>
            <p className="text-sm">
              Serving smoke shops, vape shops, gas stations, and convenience stores 
              throughout Wisconsin and nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h4 className="text-white font-semibold mb-4">For Business</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/wholesale-inquiry"
                  className="hover:text-primary-400 transition-colors"
                >
                  Wholesale Inquiry
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-400 transition-colors">
                  Product Catalog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
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
