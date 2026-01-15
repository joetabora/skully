"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to your backend/email service when ready
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="urban-gradient border-b-2 border-primary-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">
              Contact <span className="text-primary-500">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              Get in touch with our team for wholesale inquiries or questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-900 border-2 border-primary-600 rounded-lg shadow-lg p-8 md:p-12 glow-green">
                <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">
                  Send Us a <span className="text-primary-500">Message</span>
                </h2>
                {submitted ? (
                  <div className="bg-black border-2 border-primary-600 rounded-lg p-6 text-center glow-green">
                    <svg
                      className="w-12 h-12 text-primary-500 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-2xl font-black text-white mb-2 uppercase">
                      Message Sent!
                    </h3>
                    <p className="text-gray-300">
                      We&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      >
                        <option value="">Select a subject...</option>
                        <option value="wholesale-inquiry">Wholesale Inquiry</option>
                        <option value="product-question">Product Question</option>
                        <option value="shipping-question">Shipping Question</option>
                        <option value="general">General Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-primary-500 transition-all glow-green uppercase tracking-wider"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gray-900 border-2 border-primary-600 rounded-lg shadow-lg p-8 glow-green">
                  <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">
                    Get in <span className="text-primary-500">Touch</span>
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary-600 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 glow-green">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-white mb-1 uppercase tracking-wider">Email</h3>
                        <p className="text-gray-400">
                          {/* Add your email when available */}
                          info@skullylife.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-accent-600 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 glow-red">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-white mb-1 uppercase tracking-wider">Phone</h3>
                        <p className="text-gray-400">
                          {/* Add your phone number when available */}
                          (555) 123-4567
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary-600 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 glow-green">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-white mb-1 uppercase tracking-wider">Service Area</h3>
                        <p className="text-gray-400">
                          Wisconsin & Nationwide Shipping Available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 border-2 border-accent-600 rounded-lg p-8 glow-red">
                  <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">
                    For Wholesale <span className="text-accent-500">Inquiries</span>
                  </h3>
                  <p className="mb-6 text-gray-300">
                    Business owners looking for wholesale pricing and bulk orders 
                    should use our dedicated wholesale inquiry form for faster service.
                  </p>
                  <Link
                    href="/wholesale-inquiry"
                    className="inline-block bg-accent-600 text-white px-6 py-3 rounded-md font-bold hover:bg-accent-500 transition-all glow-red uppercase tracking-wider"
                  >
                    Go to Wholesale Inquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
