import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/css/globals.css";
import { Footer } from "@/layouts/footer";
import { Nav } from "@/layouts/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Shaxzod Sobitaliyev | Web Developer Portfolio",
    template: "%s | Shaxzod Sobitaliev",
  },
  description:
    "Portfolio of Shaxzod Sobitaliyev — web developer with 18 months of training at IT Step. Skilled in HTML, CSS, JavaScript, TypeScript, Next.js, React, Python, Django, Node.js, SQL, GitHub, Figma, and V0. Building modern web applications and full-stack solutions.",
  keywords: [
    "Shaxzod Sobitaliyev",
    "Web Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "Python",
    "Django",
    "Node.js",
    "SQL",
    "GitHub",
    "Figma",
    "V0",
    "Portfolio",
    "IT Step",
    "Uzbekistan Developer",
  ],
  authors: [{ name: "Shaxzod Sobitaliyev" }],
  creator: "Shaxzod Sobitaliyev",
  publisher: "Shaxzod Sobitaliyev",
  applicationName: "Shaxzod Portfolio",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Shaxzod Sobitaliyev | Web Developer Portfolio",
    description:
      "Web developer portfolio of Shaxzod Sobitaliyev — IT Step graduate with experience in HTML, CSS, JavaScript, TypeScript, Next.js, React, Python, Django, Node.js, SQL, GitHub, Figma, and V0.",
    url: "https://your-domain.com",
    siteName: "Shaxzod Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shaxzod Sobitaliyev Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaxzod Sobitaliyev | Web Developer Portfolio",
    description:
      "Portfolio of a web developer trained at IT Step. Projects built with Next.js, React, TypeScript, Python, Django, Node.js, SQL, Figma, and V0.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-screen bg-[#f3f3f3] text-[#111111] antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}