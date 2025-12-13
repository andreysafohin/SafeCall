'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#how-it-works', label: 'How it works' },
    { href: '/mobile-demo', label: 'Mobile Demo' },
    { href: '/demo', label: 'Text Demo' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/#team', label: 'Team' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(href)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl md:text-3xl font-bold text-primary-600">
            SafeCall
          </Link>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg md:text-xl px-3 py-2 rounded-md transition-colors ${
                  isActive(link.href)
                    ? 'text-primary-600 font-semibold bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

