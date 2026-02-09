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

const baseUrl = "https://richardschmidt.dev"; // Update with your domain

export const metadata: Metadata = {
  title: "Richard Schmidt | Full-Stack Developer & Software Engineer",
  description: "Full-stack developer specializing in Java, React, Next.js, and TypeScript. Building modern web applications and scalable software solutions.",
  keywords: ["full-stack developer", "software engineer", "React", "Next.js", "Java", "TypeScript", "web development", "Slovakia"],
  authors: [{ name: "Richard Schmidt" }],
  creator: "Richard Schmidt",
  publisher: "Richard Schmidt",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/frame_000.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Richard Schmidt Portfolio",
    title: "Richard Schmidt | Full-Stack Developer & Software Engineer",
    description: "Full-stack developer specializing in Java, React, Next.js, and TypeScript. Building modern web applications and scalable software solutions.",
    images: [
      {
        url: `${baseUrl}/frame_000.png`,
        width: 1200,
        height: 630,
        alt: "Richard Schmidt - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard Schmidt | Full-Stack Developer & Software Engineer",
    description: "Full-stack developer specializing in Java, React, Next.js, and TypeScript. Building modern web applications and scalable software solutions.",
    images: [`${baseUrl}/frame_000.png`],
    creator: "@richardschmidt", // Update with your Twitter handle if available
  },
  alternates: {
    canonical: baseUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Richard Schmidt",
    "url": baseUrl,
    "image": `${baseUrl}/frame_000.png`,
    "jobTitle": "Full-Stack Developer & Software Engineer",
    "description": "Full-stack developer specializing in Java, React, Next.js, and TypeScript. Building modern web applications and scalable software solutions.",
    "sameAs": [
      "https://github.com/ScRichard",
      "https://linkedin.com/in/richardschmidt"
    ],
    "location": {
      "@type": "Place",
      "name": "Slovakia"
    },
    "knowsAbout": ["Java", "TypeScript", "JavaScript", "React", "Next.js", "Spring Boot", "SQL", "Web Development"]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
