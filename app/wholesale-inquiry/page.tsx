"use client";

import { useState } from "react";
import type { Metadata } from "next";

// Note: Metadata export doesn't work in client components
// We'll handle SEO via layout or move this to server component wrapper

export default function WholesaleInquiryPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    businessAddress: "",
    city: "",
    state: "",
    zipCode: "",
    productsOfInterest: "",
    estimatedOrderVolume: "",
    additionalComments: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to your backend/email service when ready
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        businessName: "",
        contactName: "",
        email: "",
        phone: "",
        businessType: "",
        businessAddress: "",
        city: "",
        state: "",
        zipCode: "",
        productsOfInterest: "",
        estimatedOrderVolume: "",
        additionalComments: "",
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="urban-gradient py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-500/5 via-transparent to-primary-500/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold text-accent-500 uppercase tracking-widest px-4 py-2 glass-card rounded-full">
                Get Started
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter leading-none">
              Wholesale <span className="gradient-text-red">Inquiry</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
              Get wholesale pricing and start offering premium THCa flower to your customers
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {submitted ? (
              <div className="card-modern rounded-3xl p-12 text-center glow-green smooth-transition">
                <svg
                  className="w-20 h-20 text-primary-500 mx-auto mb-6"
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
                <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tight">
                  Thank You!
                </h2>
                <p className="text-gray-300 text-xl font-light leading-relaxed">
                  We&apos;ve received your inquiry and will contact you shortly with 
                  wholesale pricing information.
                </p>
              </div>
            ) : (
              <div className="card-modern rounded-3xl p-10 md:p-14 glow-red smooth-transition">
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Business Information */}
                  <div>
                    <div className="inline-block mb-2">
                      <span className="text-xs font-bold text-accent-500 uppercase tracking-widest">
                        Step 1
                      </span>
                    </div>
                    <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">
                      Business <span className="gradient-text-red">Information</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="businessName"
                          className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
                        >
                          Business Name *
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          required
                          value={formData.businessName}
                          onChange={handleChange}
                          className="input-modern w-full px-5 py-4 rounded-xl text-white"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contactName"
                          className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
                        >
                          Contact Name *
                        </label>
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          required
                          value={formData.contactName}
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
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-modern w-full px-5 py-4 rounded-xl text-white"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="businessType"
                          className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
                        >
                          Business Type *
                        </label>
                        <select
                          id="businessType"
                          name="businessType"
                          required
                          value={formData.businessType}
                          onChange={handleChange}
                          className="input-modern w-full px-5 py-4 rounded-xl text-white"
                        >
                          <option value="">Select...</option>
                          <option value="smoke-shop">Smoke Shop</option>
                          <option value="vape-shop">Vape Shop</option>
                          <option value="gas-station">Gas Station</option>
                          <option value="convenience-store">Convenience Store</option>
                          <option value="dispensary">Dispensary</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Business Address */}
                  <div>
                    <div className="inline-block mb-2">
                      <span className="text-xs font-bold text-accent-500 uppercase tracking-widest">
                        Step 2
                      </span>
                    </div>
                    <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">
                      Business <span className="gradient-text-red">Address</span>
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="businessAddress"
                          className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
                        >
                          Street Address *
                        </label>
                        <input
                          type="text"
                          id="businessAddress"
                          name="businessAddress"
                          required
                          value={formData.businessAddress}
                          onChange={handleChange}
                          className="input-modern w-full px-5 py-4 rounded-xl text-white"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label
                            htmlFor="city"
                            className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
                          >
                            City *
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleChange}
                            className="input-modern w-full px-5 py-4 rounded-xl text-white"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="state"
                            className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
                          >
                            State *
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            required
                            value={formData.state}
                            onChange={handleChange}
                            className="input-modern w-full px-5 py-4 rounded-xl text-white"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="zipCode"
                            className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
                          >
                            ZIP Code *
                          </label>
                          <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            required
                            value={formData.zipCode}
                            onChange={handleChange}
                            className="input-modern w-full px-5 py-4 rounded-xl text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Order Information */}
                  <div>
                    <div className="inline-block mb-2">
                      <span className="text-xs font-bold text-accent-500 uppercase tracking-widest">
                        Step 3
                      </span>
                    </div>
                    <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">
                      Order <span className="gradient-text-red">Information</span>
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="productsOfInterest"
                          className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
                        >
                          Products of Interest *
                        </label>
                        <textarea
                          id="productsOfInterest"
                          name="productsOfInterest"
                          required
                          rows={4}
                          value={formData.productsOfInterest}
                          onChange={handleChange}
                          placeholder="e.g., THCa Flower Pounds, Quarter Pounds, specific strains..."
                          className="input-modern w-full px-5 py-4 rounded-xl text-white placeholder-gray-500 resize-none"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="estimatedOrderVolume"
                          className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
                        >
                          Estimated Order Volume *
                        </label>
                        <select
                          id="estimatedOrderVolume"
                          name="estimatedOrderVolume"
                          required
                          value={formData.estimatedOrderVolume}
                          onChange={handleChange}
                          className="input-modern w-full px-5 py-4 rounded-xl text-white"
                        >
                          <option value="">Select...</option>
                          <option value="1-5-pounds">1-5 pounds per month</option>
                          <option value="6-10-pounds">6-10 pounds per month</option>
                          <option value="11-20-pounds">11-20 pounds per month</option>
                          <option value="21-50-pounds">21-50 pounds per month</option>
                          <option value="50-plus-pounds">50+ pounds per month</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="additionalComments"
                          className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
                        >
                          Additional Comments or Questions
                        </label>
                        <textarea
                          id="additionalComments"
                          name="additionalComments"
                          rows={5}
                          value={formData.additionalComments}
                          onChange={handleChange}
                          placeholder="Any additional information you'd like to share..."
                          className="input-modern w-full px-5 py-4 rounded-xl text-white placeholder-gray-500 resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent-600 to-accent-700 text-white px-10 py-5 rounded-xl font-black text-lg hover:from-accent-500 hover:to-accent-600 smooth-transition glow-red-hover btn-modern uppercase tracking-wider shadow-2xl mt-8"
                  >
                    Submit Wholesale Inquiry
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
