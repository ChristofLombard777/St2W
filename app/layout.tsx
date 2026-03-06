import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "St2W | Short-Term to Wealth",
  description: "St2W — an easy pathway to accelerate financial increase and wealth generation. Powered by Worldwide Wealth, FSP 15680.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans min-h-screen flex flex-col`} suppressHydrationWarning>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
