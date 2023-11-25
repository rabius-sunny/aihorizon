'use client'

import { useFormState, useFormStatus } from 'react-dom'

import { authenticate, signout } from '@/lib/actions/auth'

export default function Login() {
  const [state, dispatch] = useFormState(authenticate, undefined)
  const { pending } = useFormStatus()
  console.log('state', state)

  return (
    <div>
      <form action={dispatch} className='space-y-3'>
        <div className='flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8'>
          <h1 className='mb-3 text-2xl'>Please log in to continue.</h1>
          <div className='w-full'>
            <div>
              <label
                className='mb-3 mt-5 block text-xs font-medium text-gray-900'
                htmlFor='username'
              >
                Username
              </label>
              <div className='relative'>
                <input
                  className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                  id='username'
                  name='username'
                  placeholder='enter your username'
                  required
                />
              </div>
            </div>
            <div className='mt-4'>
              <label
                className='mb-3 mt-5 block text-xs font-medium text-gray-900'
                htmlFor='password'
              >
                Password
              </label>
              <div className='relative'>
                <input
                  className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                  id='password'
                  name='password'
                  placeholder='Enter password'
                  required
                  minLength={6}
                />
              </div>
            </div>
          </div>
          <button
            className='mt-4 py-4 w-full bg-indigo-500 text-white'
            aria-disabled={pending}
          >
            Log in
          </button>
          <div
            className='flex h-8 items-end space-x-1'
            aria-live='polite'
            aria-atomic='true'
          >
            {state === 'CredentialsSignin' && (
              <p className='text-sm text-red-500'>Invalid credentials</p>
            )}
          </div>
        </div>
      </form>
      <form action={signout}>
        <button
          type='submit'
          className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
        >
          <div className='hidden md:block'>Sign Out</div>
        </button>
      </form>
    </div>
  )
}
