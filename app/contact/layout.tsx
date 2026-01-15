import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Skully Life - Wholesale THCa Flower Supplier",
  description: "Contact Skully Life for wholesale THCa flower inquiries, product questions, or shipping information. We're here to help your business succeed.",
  keywords: "contact Skully Life, wholesale THCa contact, cannabis supplier contact",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
