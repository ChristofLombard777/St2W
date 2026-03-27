import type { Metadata } from "next";
import { Geist, Bricolage_Grotesque } from "next/font/google";
import "./../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UnlimitedConfetti from "@/components/ui/UnlimitedConfetti";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${bricolageGrotesque.variable} font-sans min-h-screen flex flex-col`} suppressHydrationWarning>
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
