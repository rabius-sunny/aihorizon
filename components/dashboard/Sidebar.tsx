'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/configs/site'
import { twMerge } from 'tailwind-merge'

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
      <div className='px-3 py-2 flex-1'>
        <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
          {/* <div className='relative h-8 w-8 mr-4'>
            <Image fill alt='Logo' src='/logo.png' />
          </div> */}
          <h1 className='text-2xl font-bold'>AIHorizon</h1>
        </Link>
        <div className='space-y-1'>
          {siteConfig.dashboardItems.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={twMerge(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-lg transition',
                pathname === route.href ? 'bg-white/10' : 'transparent'
              )}
            >
              <div className='flex items-center flex-1'>
                <route.icon
                  className={twMerge('h-5 w-5 mr-3', `text-${route.color}`)}
                />
                <span
                  className={
                    pathname === route.href ? 'text-white' : 'text-zinc-400'
                  }
                >
                  {route.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Counter Here */}
      df
    </div>
  )
}
