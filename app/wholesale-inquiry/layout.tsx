import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale Inquiry - Get Wholesale THCa Flower Pricing | Skully Life",
  description: "Request wholesale pricing for premium THCa flower. Fill out our inquiry form for business owners. Competitive prices on pounds and quarter-pounds. Fast shipping nationwide.",
  keywords: "wholesale THCa inquiry, bulk THCa pricing, wholesale cannabis inquiry, THCa wholesale form, business inquiry",
};

export default function WholesaleInquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
