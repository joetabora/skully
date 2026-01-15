"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b-2 border-primary-600 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/skully.jpg"
              alt="Skully Life Logo"
              width={60}
              height={60}
              className="rounded-full border-2 border-primary-500 glow-green"
            />
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
              SKULLY <span className="text-primary-500">LIFE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-white hover:text-primary-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-900"
            >
              HOME
            </Link>
            <Link
              href="/products"
              className="text-white hover:text-primary-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-900"
            >
              PRODUCTS
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-primary-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-900"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-primary-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-900"
            >
              CONTACT
            </Link>
            <Link
              href="/wholesale-inquiry"
              className="bg-accent-600 text-white px-6 py-2 rounded-md font-bold hover:bg-accent-700 transition-colors glow-red uppercase tracking-wider"
            >
              WHOLESALE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-600">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-white hover:text-primary-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-900 uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-white hover:text-primary-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-900 uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-primary-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-900 uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-primary-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-900 uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/wholesale-inquiry"
                className="bg-accent-600 text-white px-6 py-3 rounded-md font-bold hover:bg-accent-700 transition-colors text-center uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Wholesale Inquiry
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
