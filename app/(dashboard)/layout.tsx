import MobileSidebar from '@/components/dashboard/MobileHeader'
import Sidebar from '@/components/dashboard/Sidebar'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='h-full relative'>
        <div className='hidden h-full lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 z-80 bg-gray-900'>
          <Sidebar />
        </div>
        <main className='lg:pl-72 pb-10'>
          <MobileSidebar />
          <div className='px-4 max-w-5xl mx-auto'>{children}</div>
        </main>
      </div>
    </div>
  )
}
