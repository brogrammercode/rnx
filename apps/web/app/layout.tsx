import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rnx",
  description: "Created for rnx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} font-medium text-[16px] text-gray-500`}
      >
        <div className="max-w-[1000px] mx-auto w-full px-4">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
