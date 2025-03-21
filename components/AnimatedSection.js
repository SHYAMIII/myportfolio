// components/AnimatedSection.js
'use client'

import { motion } from 'framer-motion'

export default function AnimatedSection({ children }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}