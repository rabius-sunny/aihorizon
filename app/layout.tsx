import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import AuthProvider from '@/configs/authProvider'
import { Providers } from '@/configs/uiprovider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Horizon',
  description: 'Productivity goes on AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AuthProvider>{children}</AuthProvider>
        </Providers>
      </body>
    </html>
  )
}
