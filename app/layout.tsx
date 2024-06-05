import './globals.css'
import Loading from '@/components/Loading'
import { Suspense } from 'react'
import { Poppins as Inter } from 'next/font/google'

export const metadata = {
  title: `A.G.A - Ants' Golden Age`,
  description: 'A.G.A',
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" translate="no">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  )
}
