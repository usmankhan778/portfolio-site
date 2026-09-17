'use client'

import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold">
              📊 Data Analyst & Insights Expert
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white leading-tight">
            Transform Data Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">Actionable Insights</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Stop guessing. Success is a data set, not a mystery. I specialize in transforming raw data into strategic decisions through SQL, Python, and Power BI.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition transform hover:scale-105"
          >
            View My Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-lg font-semibold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition transform hover:scale-105"
          >
            Start a Project
          </Link>
        </div>

        <div className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-slate-200 dark:border-slate-800">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">50+</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Data Projects</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">100%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">5+ yrs</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
