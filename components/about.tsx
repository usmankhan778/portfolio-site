'use client'

import { skills } from '@/lib/data/projects'

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm a data analyst passionate about uncovering insights hidden in data. I specialize in transforming raw datasets into clear, actionable insights using SQL, Python, and Power BI.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              My approach is grounded in attention to detail, statistical thinking, and effective data visualization. I believe the best analytics work bridges the gap between technical analysis and business impact.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I work on projects involving data cleaning, exploratory analysis, dashboard creation, and actionable recommendations that drive business decisions.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Skills & Tools
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700"
                  >
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
