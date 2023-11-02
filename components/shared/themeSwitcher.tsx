'use client'

import { useIsSSR } from '@react-aria/ssr'
import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const isSSR = useIsSSR()

  const onChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <button type='button' onClick={onChange}>
      {theme === 'light' || isSSR ? (
        <MoonStar color='darkblue' />
      ) : (
        <Sun color='yellow' />
      )}
    </button>
  )
}
