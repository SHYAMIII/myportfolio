'use client'
import { useEffect, useState } from 'react'

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isMobile, setIsMobile] = useState(false)
  const [isInteractive, setIsInteractive] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // Check if hovering over interactive elements
      const target = e.target
      setIsInteractive(
        target.closest('a') || 
        target.closest('button') || 
        target.closest('input') ||
        target.closest('.interactive')
      )
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])
  // Update the Cursor component

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
  }
  checkMobile()
}, [])

if (isMobile) return null

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className="fixed z-50 pointer-events-none transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isInteractive ? 2 : 1})`
        }}
      >
        <div className={`w-4 h-4 rounded-full border-2 ${
          isInteractive ? 'border-purple-400 scale-75' : 'border-white'
        } transition-all duration-3Cursor trail */}
      <div 
        className="fixed w-8 h-8 rounded-full bg-purple-400/10 z-50 pointer-events-none transition-all duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isInteractive ? 1.5 : 1})`
        }}
      />
    </>
  )
}

export default Cursor