import { authConfig } from '@/configs/auth.config'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { z } from 'zod'

const getUser = async (username: string, password: string) => {
  try {
    const user = {
      id: '1',
      username: 'rabius-sunny',
      password: '123456',
      image: 'image-link',
    }

    if (user.username === username && user.password === password) {
      return user
    } else {
      return null
    }
  } catch (error) {
    throw new Error('Failed to fetch user')
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string().min(4), password: z.string().min(6) })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data
          const user = await getUser(username, password)
          return user
        }

        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = (user as any).username
        token.image = (user as any).image
      }
      return token
    },
    async session({ session, token }) {
      ;(session as any).user.username = token.username
      ;(session as any).user.image = token.image
      return session
    },
  },
  pages: {
    newUser: '/generate/image',
  },
})
