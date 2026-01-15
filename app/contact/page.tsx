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
      <section className="urban-gradient py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-accent-500/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold text-primary-500 uppercase tracking-widest px-4 py-2 glass-card rounded-full">
                Get in Touch
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter leading-none">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Get in touch with our team for wholesale inquiries or questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="card-modern rounded-3xl p-10 md:p-14 glow-green smooth-transition">
                <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">
                  Send Us a <span className="gradient-text">Message</span>
                </h2>
                {submitted ? (
                  <div className="glass-card rounded-2xl p-10 text-center glow-green smooth-transition">
                    <svg
                      className="w-16 h-16 text-primary-500 mx-auto mb-6"
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
                    <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tight">
                      Message Sent!
                    </h3>
                    <p className="text-gray-300 text-lg font-light">
                      We&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
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
                        className="input-modern w-full px-5 py-4 rounded-xl text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
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
                        className="input-modern w-full px-5 py-4 rounded-xl text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-modern w-full px-5 py-4 rounded-xl text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="input-modern w-full px-5 py-4 rounded-xl text-white"
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
                        className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
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
                        className="input-modern w-full px-5 py-4 rounded-xl text-white resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-5 rounded-xl font-black text-lg hover:from-primary-500 hover:to-primary-600 smooth-transition glow-green-hover btn-modern uppercase tracking-wider shadow-xl"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="card-modern rounded-3xl p-10 glow-green smooth-transition">
                  <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">
                    Get in <span className="gradient-text">Touch</span>
                  </h2>
                  <div className="space-y-8">
                    <div className="flex items-start group">
                      <div className="bg-gradient-to-br from-primary-600 to-primary-700 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 glow-green smooth-transition group-hover:scale-110">
                        <svg
                          className="w-8 h-8 text-white"
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
                      <div className="ml-5">
                        <h3 className="font-black text-white mb-2 uppercase tracking-wider text-lg">Email</h3>
                        <p className="text-gray-400 font-light text-lg">
                          {/* Add your email when available */}
                          info@skullylife.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="bg-gradient-to-br from-accent-600 to-accent-700 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 glow-red smooth-transition group-hover:scale-110">
                        <svg
                          className="w-8 h-8 text-white"
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
                      <div className="ml-5">
                        <h3 className="font-black text-white mb-2 uppercase tracking-wider text-lg">Phone</h3>
                        <p className="text-gray-400 font-light text-lg">
                          {/* Add your phone number when available */}
                          (555) 123-4567
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="bg-gradient-to-br from-primary-600 to-primary-700 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 glow-green smooth-transition group-hover:scale-110">
                        <svg
                          className="w-8 h-8 text-white"
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
                      <div className="ml-5">
                        <h3 className="font-black text-white mb-2 uppercase tracking-wider text-lg">Service Area</h3>
                        <p className="text-gray-400 font-light text-lg">
                          Wisconsin & Nationwide Shipping Available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-modern rounded-3xl p-10 glow-red smooth-transition">
                  <h3 className="text-3xl font-black mb-5 text-white uppercase tracking-tighter">
                    For Wholesale <span className="gradient-text-red">Inquiries</span>
                  </h3>
                  <p className="mb-8 text-gray-300 font-light text-lg leading-relaxed">
                    Business owners looking for wholesale pricing and bulk orders 
                    should use our dedicated wholesale inquiry form for faster service.
                  </p>
                  <Link
                    href="/wholesale-inquiry"
                    className="inline-block bg-gradient-to-r from-accent-600 to-accent-700 text-white px-8 py-4 rounded-xl font-black hover:from-accent-500 hover:to-accent-600 smooth-transition glow-red-hover btn-modern uppercase tracking-wider shadow-xl"
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
