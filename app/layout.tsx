import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Shade Room by Tico",
  description: "A sleek sunglasses storefront for browsing standout shades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
