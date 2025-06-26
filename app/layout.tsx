import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'مهراب محمدی | طراح وب و برنامه‌نویس',
  description: 'نمونه کارها، پروژه‌ها و خدمات طراحی سایت و برنامه‌نویسی مهراب محمدی.',
  generator: 'Next.js',
  keywords: ['مهراب محمدی', 'طراح وب', 'برنامه نویس', 'برنامه‌نویسی', 'طراحی سایت'],
  authors: [{ name: 'Mehrab Mohammadi' }],
  creator: 'Mehrab Mohammadi',
  openGraph: {
    title: 'مهراب محمدی | طراح وب و برنامه‌نویس',
    description: 'طراحی حرفه‌ای وب‌سایت و توسعه اپلیکیشن توسط مهراب محمدی.',
    locale: 'fa_IR',
    type: 'website',
  },
  metadataBase: new URL('https://yourdomain.com'), // آدرس دامنه واقعی‌ات رو اینجا بذار
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  )
}
