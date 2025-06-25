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
  title: "یارا تیم - طراحی و توسعه وب",
  description: "تیم حرفه‌ای طراحی و توسعه وب با تخصص در فرانت‌اند و بک‌اند",
    generator: 'v0.dev'
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
