'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useScroll } from '../../hooks/useScroll'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const scrolled = useScroll()

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ]

  const handleClick = (e) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Ajustez selon la hauteur de votre navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    if (isOpen) setIsOpen(false)
  }

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : `${styles.navbarBackground} text-white`
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className={`text-xl font-bold ${ 
              scrolled ? 'text-black' : 'text-white'
            } hover:opacity-80 transition-opacity`}
          >
            Killian DOUBRE
          </Link>
          
          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleClick}
                  className={`${styles.navLink} ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  } hover:text-blue-500 transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Menu Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? 'text-gray-800' : 'text-white'
            } hover:bg-gray-700/10`}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Menu Mobile déroulant */}
        <div
          className={`${
            isOpen ? 'max-h-64' : 'max-h-0'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className={`px-2 pt-2 pb-3 space-y-1 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleClick}
                className={`${styles.mobileNavItem} block px-3 py-2 rounded-md hover:bg-gray-700/10`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}