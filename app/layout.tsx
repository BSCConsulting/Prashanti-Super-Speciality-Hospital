import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import StickyCallBar from "@/components/StickyCallBar";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const siteUrl = "https://prashanti-super-speciality-hospital.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prashanthi Super Speciality Hospital | Khammam",
    template: "%s | Prashanthi Hospital Khammam",
  },
  description:
    "NABH & ISO recognised super speciality hospital in Nehru Nagar, Khammam. 24/7 emergency 08742-222424. Renal, neuro, ortho, critical care & surgery.",
  keywords: [
    "Prashanthi Hospital Khammam",
    "super speciality hospital Khammam",
    "Nehru Nagar hospital",
    "NABH hospital Khammam",
    "emergency hospital Khammam",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Prashanthi Super Speciality Hospital",
    title: "Prashanthi Super Speciality Hospital | Khammam",
    description:
      "Institute-led care in Khammam — 24/7 emergency, NABH & ISO. Call 08742-222424.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prashanthi Super Speciality Hospital | Khammam",
    description:
      "24/7 emergency care in Nehru Nagar, Khammam. Call 08742-222424.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <a
          href="#main"
          className="sr-only focus:z-[100] focus:rounded-lg focus:bg-copper focus:text-sm focus:font-semibold focus:text-forest-deep"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="pb-20 md:pb-0">
          {children}
        </main>
        <StickyCallBar />
        <Chatbot />
      </body>
    </html>
  );
}
