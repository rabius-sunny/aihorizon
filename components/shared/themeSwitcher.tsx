"use client"

import { useSwitch } from "@nextui-org/switch"
import { useIsSSR } from "@react-aria/ssr"
import { VisuallyHidden } from "@react-aria/visually-hidden"
import { useTheme } from "next-themes"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const isSSR = useIsSSR()

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  const { Component, isSelected, getInputProps } = useSwitch({
    isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${
      theme === "light" || isSSR ? "dark" : "light"
    } mode`,
    onChange,
  })

  return (
    <Component>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div>{!isSelected || isSSR ? <p>day</p> : <p>night</p>}</div>
    </Component>
  )
}
