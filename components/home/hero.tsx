'use client'

import Link from 'next/link'
import TypewriterComponent from 'typewriter-effect'

import ThemeSwitcher from '../shared/themeSwitcher'

export default function Hero() {
  return (
    <div className=''>
      <div className='relative px-6 lg:px-8'>
        <div
          className='absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-2xl sm:blur-3xl sm:-top-80'
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
            <h1 className='text-4xl dark:text-yellow-500 font-bold tracking-tight sm:text-6xl'>
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
