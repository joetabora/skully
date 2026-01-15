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
      <section className="urban-gradient border-b-2 border-accent-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">
              Wholesale <span className="text-accent-500">Inquiry</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              Get wholesale pricing and start offering premium THCa flower to your customers
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <div className="bg-gray-900 border-2 border-primary-600 rounded-lg p-8 text-center glow-green">
                <svg
                  className="w-16 h-16 text-primary-500 mx-auto mb-4"
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
                <h2 className="text-3xl font-black text-white mb-2 uppercase">
                  Thank You!
                </h2>
                <p className="text-gray-300 text-lg">
                  We&apos;ve received your inquiry and will contact you shortly with 
                  wholesale pricing information.
                </p>
              </div>
            ) : (
              <div className="bg-gray-900 border-2 border-accent-600 rounded-lg shadow-lg p-8 md:p-12 glow-red">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Business Information */}
                  <div>
                    <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">
                      Business <span className="text-accent-500">Information</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="businessName"
                          className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider"
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
                          className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contactName"
                          className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider"
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
                          className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
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
                          className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider"
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
                          className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="businessType"
                          className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider"
                        >
                          Business Type *
                        </label>
                        <select
                          id="businessType"
                          name="businessType"
                          required
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
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
                    <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">
                      Business <span className="text-accent-500">Address</span>
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="businessAddress"
                          className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider"
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
                          className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label
                            htmlFor="city"
                            className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider"
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
                            className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="state"
                            className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider"
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
                            className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="zipCode"
                            className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider"
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
                            className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Order Information */}
                  <div>
                    <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">
                      Order <span className="text-accent-500">Information</span>
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="productsOfInterest"
                          className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider"
                        >
                          Products of Interest *
                        </label>
                        <textarea
                          id="productsOfInterest"
                          name="productsOfInterest"
                          required
                          rows={3}
                          value={formData.productsOfInterest}
                          onChange={handleChange}
                          placeholder="e.g., THCa Flower Pounds, Quarter Pounds, specific strains..."
                          className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors placeholder-gray-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="estimatedOrderVolume"
                          className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider"
                        >
                          Estimated Order Volume *
                        </label>
                        <select
                          id="estimatedOrderVolume"
                          name="estimatedOrderVolume"
                          required
                          value={formData.estimatedOrderVolume}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
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
                          className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider"
                        >
                          Additional Comments or Questions
                        </label>
                        <textarea
                          id="additionalComments"
                          name="additionalComments"
                          rows={4}
                          value={formData.additionalComments}
                          onChange={handleChange}
                          placeholder="Any additional information you'd like to share..."
                          className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-md text-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors placeholder-gray-500"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-accent-500 transition-all glow-red uppercase tracking-wider"
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
