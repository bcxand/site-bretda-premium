'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Logo no header só aparece quando faz scroll (sai do topo) ou não está na home
  const showHeaderLogo = scrollY > 100 || pathname !== '/'

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/produtos', label: 'Produtos' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/contato', label: 'Contato' }
  ]

  return (
    <>
      {/* Header com Sombra Transparente */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showHeaderLogo ? 'bg-black/20 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Menu Hambúrguer */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              showHeaderLogo ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo do Header - Só aparece quando faz scroll ou não está na home */}
          <div className={`transition-all duration-700 transform ${
            showHeaderLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <Link href="/">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/ae25e4ce-0708-4d92-b7d7-467ba30f4e6c.svg" 
                alt="Bretda Logo" 
                className="h-8 w-auto cursor-pointer transition-all duration-300 hover:scale-110"
              />
            </Link>
          </div>

          {/* Espaço para manter centralização */}
          <div className="w-10"></div>
        </div>

        {/* Menu Lateral */}
        <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6 bg-white h-full">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/ae25e4ce-0708-4d92-b7d7-467ba30f4e6c.svg" 
                  alt="Bretda Logo" 
                  className="h-8 w-auto cursor-pointer transition-all duration-300 hover:scale-110"
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-[#D0EEDA] rounded-lg"
              >
                <X className="w-6 h-6 text-[#2A2B26]" />
              </button>
            </div>
            
            <nav className="space-y-4 bg-white">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    pathname === item.href ? 'bg-[#B4B5AC] text-white' : 'text-[#2A2B26] hover:bg-[#D0EEDA] bg-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </header>
    </>
  )
}