'use client'

import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
            Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Insights</span>. Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Decisions</span>.
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Data Analyst specializing in transforming raw data into actionable insights through SQL, Python, and Power BI.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition"
          >
            View Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-lg font-semibold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition"
          >
            Get in Touch
          </Link>
        </div>

        <div className="pt-8 text-sm text-slate-600 dark:text-slate-400">
          <p>Available for: Data Analysis • Analytics Consulting • Freelance Projects</p>
        </div>
      </div>
    </section>
  )
}
