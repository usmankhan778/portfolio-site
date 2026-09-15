'use client'

import { ProjectCard } from '@/components/project-card'
import { projects } from '@/lib/data/projects'

export function Work() {
  return (
    <section id="work" className="py-20 bg-white dark:bg-slate-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Projects & Analysis
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Data analysis projects showcasing SQL queries, Python analysis, and Power BI dashboards that transformed raw data into actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
