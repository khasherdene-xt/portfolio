import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/misc/(theme)/theme-provider";
import Header from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Khash-Erdene - Full Stack Developer",
    template: "%s | Khash-Erdene Portfolio",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, and modern web technologies. View my projects, skills, and experience.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Khash-Erdene" }],
  creator: "Khash-Erdene",
  publisher: "Khash-Erdene",
  metadataBase: new URL("https://khasherdene.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khasherdene.vercel.app",
    siteName: "Khash-Erdene Portfolio",
    title: "Khash-Erdene - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies. View my projects, skills, and experience.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Khash-Erdene - Full Stack Developer Portfolio",
      },
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 1200,
        alt: "Khash-Erdene - Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-b 
                  from-yellow-50 via-violet-200 to-white 
                dark:from-zinc-900 dark:via-teal-800 dark:to-black"
          />
          <div className="container max-w-3xl mx-auto min-h-screen flex flex-col px-4 py-5">
            <div className="flex-1">
              <Header />
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
        <link
          href="/favicons/favicon-light.ico"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="/favicons/favicon-dark.ico"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
      </body>
    </html>
  );
}
