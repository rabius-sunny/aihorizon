import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'

import { Providers } from '@/configs/provider'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Horizon',
  description: 'Productivity goes on AI',
}

export default function RootLayout({ children }: INode) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  )
}
