'use server'

import { signIn, signOut } from '@/configs/auth'

import db from '../prisma-db'

export const signUp = async (data: FormData) => {
  const username = data.get('username') as string
  const password = data.get('password') as string
  const image = data.get('image') as string

  try {
    const create = await db.user.create({
      data: { username, password, image },
    })
    console.log('created data', create)
  } catch (error) {
    console.log('error at create', error)
  }
}

export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    await signIn('credentials', Object.fromEntries(formData))
  } catch (error) {
    if ((error as any).type === 'CredentialsSignin') {
      return 'CredentialsSignin'
    }
  }
}

export const signout = async () => {
  await signOut()
}
