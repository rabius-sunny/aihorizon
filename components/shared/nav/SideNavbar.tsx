'use client'

import { motion } from 'framer-motion'

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}
const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']

const MenuItem = ({ i }: { i: number }) => {
  const style = { border: `2px solid ${colors[i]}` }
  return (
    <motion.li
      variants={linkVariants}
      className='nav__li'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className='icon-placeholder' style={style} />
      <div className='text-placeholder' style={style} />
    </motion.li>
  )
}

export default function SideNavbar() {
  return (
    <motion.ul variants={navVariants} className='nav__ul'>
      {[0, 1, 2, 3, 4].map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </motion.ul>
  )
}
