'use client'

import * as React from 'react'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: INode) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      {children}
    </ThemeProvider>
  )
}
