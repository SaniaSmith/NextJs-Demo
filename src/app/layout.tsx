import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./component/navigation";
import { Footer } from "./component/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <header className="bg-white text-black p-4 text-center">
          {/* <p>Welcome to Next.js 15 Crash Course</p> */}
          <Navigation/>
        </header>
        {children}
        <footer className="bg-white text-black p-4 text-center">
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
