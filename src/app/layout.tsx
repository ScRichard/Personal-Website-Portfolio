import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Richard Schrotter | Full-Stack Developer & Game Engineer",
  description:
    "Portfolio of Richard Schrotter - Full-Stack Developer specializing in Java, TypeScript, and Game Development. Check out my projects including Gothaj Next Gen and more.",
  keywords:
    "Full-Stack Developer, Java, TypeScript, Game Development, Next.js, React",
  authors: [{ name: "Richard Schrotter" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://richardschrotter.com",
    title: "Richard Schrotter | Full-Stack Developer",
    description: "Portfolio of Richard Schrotter - Full-Stack Developer",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
