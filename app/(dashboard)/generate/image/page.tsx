import Link from 'next/link'
import { auth } from '@/configs/auth'

export default async function ImageGeneration() {
  const session = await auth()
  console.log('session', session)

  return (
    <div>
      Image Generation{' '}
      <Link className='mx-6 px-4 py-2 border-white border-2' href='/auth/login'>
        Login
      </Link>
    </div>
  )
}
