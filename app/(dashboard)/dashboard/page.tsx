import Image from 'next/image'
import Link from 'next/link'
import { siteConfig, TDashboardItem } from '@/configs/site'
import { ArrowRight } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export default function Dashboard() {
  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-3xl md:text-5xl font-bold text-center'>
        Explore the power of AI
      </h1>
      <p className='text-slate-700 text-center my-2 md:text-xl'>
        Chat with the smartest AI - Experience the power of AI
      </p>
      <hr />
      <div className='my-10'>
        {siteConfig.dashboardItems
          .slice(1, 6)
          .map((item: TDashboardItem, idx: number) => (
            <Link
              href={item.href}
              key={idx}
              className={twMerge(
                'grid grid-cols-5 gap-4 my-6 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:border-r-8 transition-all w-full border-r-4 border-opacity-50',
                borderColors[idx]
              )}
            >
              <div className='col-span-2'>
                <Image
                  className='w-full'
                  src='/images/code.jpg'
                  height='200'
                  width='200'
                  alt='card image'
                />
              </div>
              <div className='col-span-3'>
                <div className='flex items-center gap-3'>
                  <item.icon size={25} className={'text-' + item.color} />
                  <h1 className='text-2xl font-semibold my-4'>{item.label}</h1>
                </div>
                <p className='text-slate-500'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                  consectetur in recusandae expedita veritatis vel perferendis
                  maiores quos. Consequatur, suscipit?
                </p>
                <div className='flex items-center mt-8 uppercase text-sky-500 font-semibold text-sm'>
                  <span>Let&apos;s go</span>
                  <ArrowRight className='h-4' />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

const borderColors: string[] = [
  'border-violet-500',
  'border-pink-700',
  'border-orange-700',
  'border-emerald-500',
  'border-green-700',
  'border-emerald-500',
]
