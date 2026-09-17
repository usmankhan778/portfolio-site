'use client'

import { skills } from '@/lib/data/projects'

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                About Me
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                I&apos;m a data analyst passionate about uncovering insights hidden in data. With over 5 years of experience, I specialize in transforming raw datasets into clear, actionable insights using SQL, Python, and Power BI.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                My approach is grounded in attention to detail, statistical thinking, and effective data visualization. I believe the best analytics work bridges the gap between technical analysis and business impact.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I&apos;ve worked on diverse projects involving data cleaning, exploratory analysis, dashboard creation, and actionable recommendations that drive business decisions for companies of all sizes.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Core Expertise
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Advanced SQL queries and database optimization
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Python data analysis with Pandas, NumPy, Matplotlib
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Interactive Power BI dashboards and DAX formulas
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Statistical analysis and business intelligence
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Skills & Tools
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 text-center"
                  >
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
              <p className="text-blue-900 dark:text-blue-200 font-medium">
                &ldquo;Data doesn&apos;t lie, but it does tell stories. My job is to help you understand what your data is saying about your business.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
