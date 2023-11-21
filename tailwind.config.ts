import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './configs/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  darkMode: 'class',
  plugins: [],
}
export default config
