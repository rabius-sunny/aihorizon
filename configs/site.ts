import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from 'lucide-react'

export type SiteConfig = typeof siteConfig
export type TDashboardItem = (typeof siteConfig.dashboardItems)[0]

export const siteConfig = {
  name: 'AI Horizon',
  description: 'Productivity goes on the power of AI',
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/' },
    { label: 'Pricing', href: '/' },
    { label: 'About Us', href: '/' },
  ],
  dashboardItems: [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
      color: 'sky-500',
    },
    {
      label: 'Conversation',
      icon: MessageSquare,
      href: '/generate/conversation',
      color: 'violet-500',
    },
    {
      label: 'Image Generation',
      icon: ImageIcon,
      color: 'pink-700',
      href: '/generate/image',
    },
    {
      label: 'Video Generation',
      icon: VideoIcon,
      color: 'orange-700',
      href: '/generate/video',
    },
    {
      label: 'Music Generation',
      icon: Music,
      color: 'emerald-500',
      href: '/generate/music',
    },
    {
      label: 'Code Generation',
      icon: Code,
      color: 'green-700',
      href: '/generate/code',
    },
    {
      label: 'Settings',
      icon: Settings,
      href: '/settings',
      color: 'emerald-500',
    },
  ],
}
