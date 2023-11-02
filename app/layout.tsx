import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import { Providers } from '@/configs/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Horizon',
  description: 'Productivity goes on AI',
}

export default function RootLayout({ children }: INode) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
