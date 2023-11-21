'use client'

import { Menu } from 'lucide-react'

export default function MobileSidebar() {
  return (
    <div className='flex items-center p-4'>
      <Menu />
      <div className='flex w-full justify-end'>
        <p className='text-pink-600 font-bold'>SN</p>
      </div>
    </div>
  )
}
