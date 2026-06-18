import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CampusPulse",
  description: "Discover Campus Events & Clubs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col antialiased`}>
        <NavBar />
        <div className="flex-1 w-full relative">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
