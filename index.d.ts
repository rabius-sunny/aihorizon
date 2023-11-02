interface INode {
  children: React.ReactNode
}

type TNavItem = {
  label: string
  href: string
}

interface ISiteConfig {
  name: string
  description: string
  navItems: TNavItem[]
}
