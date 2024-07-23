import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DoktariAI",
  description: "A FirstAid Platform",
  creator: "Akumu Jey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "p-0 m-0 bg-white"}>{children}</body>
    </html>
  );
}
