'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 150) // Transição mais rápida

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div className="relative">
      {/* Conteúdo da página com transição suave simples */}
      <div 
        className={`transition-all duration-150 ease-out ${
          isTransitioning 
            ? 'opacity-0' 
            : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </div>
  )
}