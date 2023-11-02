'use client'

import Link from 'next/link'
import { siteConfig } from '@/configs/site'
import { motion, useCycle } from 'framer-motion'

import ThemeSwitcher from '../themeSwitcher'
import SideNavbar from './SideNavbar'
import NavToggler from './Toggle'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(20px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export default function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <header className=''>
      <div
        className='flex items-center justify-between p-6 md:px-8'
        aria-label='Global'
      >
        <div className='flex md:flex-1 ml-14 md:ml-0'>
          <Link href='/'>
            <span className='sr-only'>Your Company</span>
            aihorizon
          </Link>
        </div>
        <div className='z-[1000] md:hidden'>
          <motion.nav
            className='motionnav'
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
          >
            <motion.div className='background' variants={sidebar} />
            <SideNavbar />
            <NavToggler toggle={() => toggleOpen()} />
          </motion.nav>
        </div>
        {isOpen && (
          <div
            className='fixed inset-0 z-50 bg-black/30 backdrop-blur-sm'
            aria-hidden='true'
          />
        )}
        <div className='hidden md:flex md:gap-x-12'>
          {siteConfig.navItems.map((item: { label: string; href: string }) => (
            <Link
              key={item.label}
              href={item.href}
              className='text-sm font-semibold leading-6'
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className='flex flex-1 items-center justify-end gap-4'>
          <ThemeSwitcher />
          <Link href='#' className='text-sm font-semibold leading-6'>
            Get Started <span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
