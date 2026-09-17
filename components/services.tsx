'use client'

export function Services() {
  const services = [
    {
      icon: '📊',
      title: 'Data Analysis',
      description: 'Transform raw data into actionable insights using SQL, Python, and advanced analytics techniques.'
    },
    {
      icon: '📈',
      title: 'Dashboard Design',
      description: 'Create interactive Power BI dashboards that communicate complex data in an intuitive way.'
    },
    {
      icon: '🔍',
      title: 'Data Visualization',
      description: 'Build compelling visual stories that drive business decisions and stakeholder engagement.'
    },
    {
      icon: '💡',
      title: 'Consulting',
      description: 'Strategic guidance on data infrastructure, analytics workflows, and business intelligence solutions.'
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-slate-900 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="space-y-6 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white">
            Services I Offer
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive data solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
