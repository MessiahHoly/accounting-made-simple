import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accounting Made Simple",
  description: "A modern and simple web app that helps users track organisations in Japan and evaluate the core accounting equation: Assets = Liabilities + Owner's Equity. It combines Japanese financial data sources (EDINET and J-Quants) with Gemini-powered AI analysis to give users quick insights into a company’s financial health, trends, and potential red flags.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full min-w-full flex flex-col items-center justify-center prose">{children}</body>
    </html>
  );
}
