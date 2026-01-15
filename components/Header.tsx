"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="glass-card sticky top-0 z-50 backdrop-blur-xl bg-black/80">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group smooth-transition">
            <div className="relative">
              <Image
                src="/skully.jpg"
                alt="Skully Life Logo"
                width={56}
                height={56}
                className="rounded-full glow-green smooth-transition group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
            </div>
            <span className="text-xl md:text-2xl font-black text-white tracking-tight">
              SKULLY <span className="gradient-text">LIFE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/"
              className="text-white/90 hover:text-white font-semibold smooth-transition px-4 py-2 rounded-lg hover:bg-white/5 relative group"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full smooth-transition"></span>
            </Link>
            <Link
              href="/products"
              className="text-white/90 hover:text-white font-semibold smooth-transition px-4 py-2 rounded-lg hover:bg-white/5 relative group"
            >
              PRODUCTS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full smooth-transition"></span>
            </Link>
            <Link
              href="/about"
              className="text-white/90 hover:text-white font-semibold smooth-transition px-4 py-2 rounded-lg hover:bg-white/5 relative group"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full smooth-transition"></span>
            </Link>
            <Link
              href="/contact"
              className="text-white/90 hover:text-white font-semibold smooth-transition px-4 py-2 rounded-lg hover:bg-white/5 relative group"
            >
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full smooth-transition"></span>
            </Link>
            <Link
              href="/wholesale-inquiry"
              className="bg-gradient-to-r from-accent-600 to-accent-700 text-white px-6 py-2.5 rounded-lg font-bold hover:from-accent-500 hover:to-accent-600 smooth-transition glow-red-hover btn-modern uppercase tracking-wider ml-2"
            >
              WHOLESALE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/90 hover:text-white smooth-transition p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 smooth-transition"
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
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-white/90 hover:text-white font-semibold smooth-transition px-4 py-3 rounded-lg hover:bg-white/5 uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-white/90 hover:text-white font-semibold smooth-transition px-4 py-3 rounded-lg hover:bg-white/5 uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-white/90 hover:text-white font-semibold smooth-transition px-4 py-3 rounded-lg hover:bg-white/5 uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white/90 hover:text-white font-semibold smooth-transition px-4 py-3 rounded-lg hover:bg-white/5 uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/wholesale-inquiry"
                className="bg-gradient-to-r from-accent-600 to-accent-700 text-white px-6 py-3 rounded-lg font-bold hover:from-accent-500 hover:to-accent-600 smooth-transition text-center uppercase tracking-wider btn-modern mt-2"
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
