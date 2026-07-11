import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Shade Room by Tico",
  description: "Browse exquisite sunglasses that improve your style and make you stand out.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/logo.jpeg", type: "image/jpeg" }],
    shortcut: "/logo.jpeg",
    apple: [{ url: "/logo.jpeg", type: "image/jpeg" }],
  },
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
