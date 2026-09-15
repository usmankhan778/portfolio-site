'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'

export function Navigation() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">
          Usmanullah
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden sm:flex gap-6">
            <Link href="#work" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
              Work
            </Link>
            <Link href="#about" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
              About
            </Link>
            <Link href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM13 2h-2v3h2V2zm0 15h-2v3h2v-3zM5 11H2v2h3v-2zm15 0h-3v2h3v-2zM6.3 5.3L4.2 3.2 2.1 5.3l2.1 2.1 2.1-2.1zm12.4 12.4l-2.1 2.1 2.1 2.1 2.1-2.1-2.1-2.1zM19.8 4.2l-2.1-2.1-2.1 2.1 2.1 2.1 2.1-2.1zM7.5 19.9l-2.1 2.1 2.1 2.1 2.1-2.1-2.1-2.1z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
