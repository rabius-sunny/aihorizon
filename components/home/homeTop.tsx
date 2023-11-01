'use client'

import { useState } from 'react'
import Link from 'next/link'
import { siteConfit } from '@/configs/site'
import { Dialog, Transition } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import TypewriterComponent from 'typewriter-effect'

import ThemeSwitcher from '../shared/themeSwitcher'

export default function HomeTop() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className=''>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              aihorizon
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Menu aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {siteConfit.navItems.map(
              (item: { label: string; href: string }) => (
                <a
                  key={item.label}
                  href={item.href}
                  className='text-sm font-semibold leading-6'
                >
                  {item.label}
                </a>
              )
            )}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a href='#' className='text-sm font-semibold leading-6'>
              Log in <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </nav>
        <Transition
          show={mobileMenuOpen}
          enter='transition-opacity duration-75'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog
            as='div'
            className='lg:hidden'
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className='fixed inset-0 z-50' />
            <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
              <div className='flex items-center justify-between'>
                <a href='#' className='-m-1.5 p-1.5'>
                  <span className='sr-only'>Your Company</span>
                  aihorizon
                </a>
                <button
                  type='button'
                  className='-m-2.5 rounded-md p-2.5 '
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <X size={28} strokeWidth={1.5} aria-hidden='true' />
                </button>
              </div>
              <div className='mt-6 flow-root'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                  <div className='space-y-2 py-6'>
                    {siteConfit.navItems.map(
                      (item: { label: string; href: string }) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50'
                        >
                          {item.label}
                        </a>
                      )
                    )}
                  </div>
                  <div className='py-6'>
                    <a
                      href='#'
                      className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 0 hover:bg-gray-50'
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </Transition>
      </header>

      <div className='relative isolate px-6 lg:px-8'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-40'>
          <div className='mb-8 sm:flex sm:justify-center'>
            <div className='relative bg-white/20 rounded-full px-3 py-1 text-xs sm:text-md leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
              Try for free, don&apos;t worry about credit card!
              <Link href='#' className='font-semibold pl-2 text-indigo-600'>
                <span className='absolute inset-0' aria-hidden='true' />
                Read more <span aria-hidden='true'>&rarr;</span>
              </Link>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
              Here, Your Best AI Friend
            </h1>
            <div className='mt-6 text-3xl font-bold tracking-tight sm:text-4xl leading-8 text-transparent bg-clip-text bg-gradient-to-r to-indigo-500 from-purple-500'>
              <TypewriterComponent
                options={{
                  strings: [
                    'Make Conversation',
                    'Generate Code',
                    'Generate Music',
                    'Generate Video',
                    'Generate Image',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href='#'
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Get started
              </a>
              <ThemeSwitcher />
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
