import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AntiGravity Paragliding - Leading Paragliding School in India",
  description:
    "Learn paragliding at Bir Billing, Himachal Pradesh with AntiGravity Paragliding School. Professional courses, safe joyrides, and expert instructors with 15+ years experience.",
  keywords:
    "paragliding, Bir Billing, Himachal Pradesh, paragliding course, joyride, adventure sports, flying, India",
  authors: [{ name: "AntiGravity Paragliding School" }],
  openGraph: {
    title: "AntiGravity Paragliding - Leading Paragliding School in India",
    description:
      "Learn paragliding at Bir Billing with expert instructors. Professional courses and safe joyrides available.",
    url: "https://www.antigravityparagliding.com",
    siteName: "AntiGravity Paragliding",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AntiGravity Paragliding - Leading Paragliding School in India",
    description:
      "Learn paragliding at Bir Billing with expert instructors. Professional courses and safe joyrides available.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="pt-32">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
