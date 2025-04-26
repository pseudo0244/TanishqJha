'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full py-4 md:py-6 flex justify-between md:justify-center items-center bg-white sticky top-0 z-50 px-4 md:px-0">
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-[#2f2f2f]" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {/* Logo for Mobile */}
      <h1 className="text-2xl md:hidden font-light italic" style={{ fontFamily: `'Great Vibes', cursive` }}>
        Tanishq Jha
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10 text-[#2f2f2f] text-sm font-light tracking-widest">
        <Link href="/">
          HOME
        </Link>
        <Link href="/services">SERVICES</Link>
        <h1 className="text-4xl font-light italic mx-8" style={{ fontFamily: `'Great Vibes', cursive` }}>
          Tanishq Jha
        </h1>
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT</Link>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              className="absolute top-4 right-4 text-[#2f2f2f]" 
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col items-center gap-8 text-[#2f2f2f] text-lg font-light tracking-widest">
              <h1 className="text-4xl font-light italic mb-8" style={{ fontFamily: `'Great Vibes', cursive` }}>
                Tanishq Jha
              </h1>
              <Link href="/" onClick={toggleMenu}>
                HOME
              </Link>
              <Link href="/services" onClick={toggleMenu}>SERVICES</Link>
              <Link href="/about" onClick={toggleMenu}>ABOUT</Link>
              <Link href="/contact" onClick={toggleMenu}>CONTACT</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
