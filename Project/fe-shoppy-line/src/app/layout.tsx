import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShoppyLine | Shopping Online",
  description: "Generated by create next app",
  // use this code below to make favicon.ico
  icons: {
    icon: '/logo.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen w-screen`}>
        {children}
      </body>
    </html>
  );
}