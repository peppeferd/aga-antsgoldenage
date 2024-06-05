import './globals.css'
import Loading from '@/components/Loading'
import { Suspense } from 'react'

export const metadata = {
  title: `A.G.A - Ants' Golden Age`,
  description: 'A.G.A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" translate="no">
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  )
}
