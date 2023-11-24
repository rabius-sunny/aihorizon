import type { NextAuthConfig } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const user = { id: '1', username: 'rabius-sunny', password: '123456' }

        if (
          user.username === credentials.username &&
          user.password === credentials.password
        ) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
} satisfies NextAuthConfig
