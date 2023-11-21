import MobileSidebar from '@/components/dashboard/MobileHeader'
import Sidebar from '@/components/dashboard/Sidebar'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='h-full relative'>
        <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900'>
          <Sidebar />
        </div>
        <main className='md:pl-72 pb-10'>
          <MobileSidebar />
          {children}
        </main>
      </div>
    </div>
  )
}
