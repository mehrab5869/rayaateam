import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "رایا تیم - طراحی و توسعه وب",
  description: "تیم حرفه‌ای طراحی و توسعه وب با تخصص در فرانت‌اند و بک‌اند",
  keywords: "رایا تیم، طراحی وب، توسعه وب، React، Next.js",
  authors: [{ name: "رایا تیم" }],
  generator: "v0.dev",
  openGraph: {
    title: "رایا تیم - طراحی و توسعه وب",
    description: "تیم حرفه‌ای طراحی و توسعه وب با تخصص در فرانت‌اند و بک‌اند",
    url: "https://rayaateam.ir",
    siteName: "رایا تیم",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "رایا تیم - طراحی و توسعه وب",
    description: "تیم حرفه‌ای طراحی و توسعه وب با تخصص در فرانت‌اند و بک‌اند",
    site: "@yourtwitterhandle", // اگه داری اکانت توییتر بذار
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  )
}
