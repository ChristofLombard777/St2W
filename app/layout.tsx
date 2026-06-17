import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UnlimitedConfetti from "@/components/ui/UnlimitedConfetti";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "St2W | Short-Term to Wealth",
  description: "St2W — an easy pathway to accelerate financial increase and wealth generation. Turn your monthly insurance expenses into passive income. Powered by Worldwide Wealth, FSP 15680.",
  metadataBase: new URL("https://www.st2w.co.za"),
  alternates: {
    canonical: "https://www.st2w.co.za",
  },
  openGraph: {
    title: "St2W | Short-Term to Wealth",
    description: "Turn your monthly insurance expenses into passive income. An easy pathway to financial increase and wealth generation for everyday South Africans.",
    url: "https://www.st2w.co.za",
    siteName: "St2W",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "St2W – Short-Term to Wealth",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "St2W | Short-Term to Wealth",
    description: "Turn your monthly insurance expenses into passive income. Easy pathway to wealth for everyday South Africans.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.jpg",
    apple: "/apple-icon.jpg",
    shortcut: "/icon.jpg",
  },
  keywords: [
    "St2W", "Short-Term to Wealth", "passive income South Africa",
    "insurance referral income", "Worldwide Wealth", "FSP 15680",
    "extra income South Africa", "wealth generation", "financial freedom SA"
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${plusJakartaSans.variable} font-sans min-h-screen flex flex-col`} suppressHydrationWarning>
        <Header />
        <UnlimitedConfetti />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
