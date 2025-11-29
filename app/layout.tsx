import type React from "react"
import type { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"
import "./globals.css"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "ContactHigh - Remember who you met (kinda)",
  description: "Remember who you met (kinda). ContactHigh shows you which contacts you saved, when, and where. No more awkward 'wait, who are you?' moments.",
  generator: "Next.js",
  applicationName: "ContactHigh",
  referrer: "origin-when-cross-origin",
  keywords: ["contacts", "memory", "networking", "brand voice", "landing page", "next.js"],
  authors: [{ name: "ContactHigh Team" }],
  creator: "ContactHigh",
  publisher: "ContactHigh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://contact-high.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ContactHigh - Remember who you met (kinda)",
    description: "Remember who you met (kinda). ContactHigh shows you which contacts you saved, when, and where. No more awkward 'wait, who are you?' moments.",
    url: "https://contact-high.vercel.app",
    siteName: "ContactHigh",
    images: [
      {
        url: "/social-image.svg",
        width: 1200,
        height: 630,
        alt: "ContactHigh - Remember who you met (kinda)",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ContactHigh - Remember who you met (kinda)",
    description: "Remember who you met (kinda). ContactHigh shows you which contacts you saved, when, and where. No more awkward 'wait, who are you?' moments.",
    images: ["/social-image.svg"],
    creator: "@contacthigh",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  colorScheme: "dark light",
  appleWebApp: {
    capable: true,
    title: "ContactHigh",
    statusBarStyle: "default",
  },
  manifest: "/manifest.json",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${nunitoSans.variable} font-sans`}>{children}</body>
    </html>
  )
}
