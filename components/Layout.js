// components/Layout.js
'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Layout({ children }) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [hoverState, setHoverState] = useState('default')
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.2, 1])

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      const target = e.target
      setHoverState(
        target.closest('a') ? 'link' :
        target.closest('button') ? 'button' :
        target.closest('.interactive') ? 'special' : 'default'
      )
    }
    
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <div className="min-h-screen bg-neutral-950 overflow-hidden">
      {/* Animated Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-400 z-50" 
        style={{ scaleX }}
      />

      {/* Dynamic Grid Background */}
      <div className="fixed inset-0 grid grid-cols-12 gap-4 p-4 opacity-10 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="h-16 bg-emerald-400/20 animate-pulse" 
            style={{ animationDelay: `${i * 0.05}s` }} />
        ))}
      </div>

      {/* Holographic Cursor System */}
      <div className="fixed pointer-events-none z-50"
        style={{ left: cursorPos.x, top: cursorPos.y }}>
        <motion.div 
          className={`w-8 h-8 rounded-full border-2 backdrop-blur-lg transition-colors
            ${{
              default: 'border-emerald-400 bg-emerald-400/10',
              link: 'border-cyan-400 bg-cyan-400/20 scale-150',
              button: 'border-purple-400 bg-purple-400/20 scale-125',
              special: 'border-rose-400 bg-rose-400/20 scale-200'
            }[hoverState]}`}
          animate={{
            x: '-50%',
            y: '-50%',
            transition: { type: 'spring', mass: 0.1 }
          }}
        />
        <motion.div 
          className="absolute inset-0 rounded-full bg-current blur-2xl opacity-20"
          animate={{ 
            scale: hoverState === 'default' ? 1 : 2,
            opacity: hoverState === 'default' ? 0.1 : 0.3
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh'
            }}
            animate={{
              x: ['0%', '100%', '0%'],
              y: ['0%', '100%', '0%'],
              transition: {
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: 'mirror'
              }
            }}
          />
        ))}
      </div>

      {children}
    </div>
  )
}