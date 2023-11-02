'use client'

import Link from 'next/link'
import { siteConfit } from '@/configs/site'
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
    clipPath: 'circle(30px at 40px 40px)',
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
        className='flex items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            aihorizon
          </a>
        </div>
        <div className='z-[1000] lg:hidden'>
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
        <div className='hidden lg:flex lg:gap-x-12'>
          {siteConfit.navItems.map((item: { label: string; href: string }) => (
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
