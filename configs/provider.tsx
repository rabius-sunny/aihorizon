'use client'

import * as React from 'react'
import { SessionProvider as AuthProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: INode) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  )
}
