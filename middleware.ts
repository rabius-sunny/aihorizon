import NextAuth from 'next-auth'

import authConfig from './configs/auth.config'

export const config = {
  matcher: ['/demo'],
}

export const { auth: middleware } = NextAuth(authConfig)
