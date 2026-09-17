'use client'

export function Testimonials() {
  const testimonials = [
    {
      quote: "Usmanullah transformed our raw sales data into actionable insights that increased our revenue by 35%. His Power BI dashboards are intuitive and powerful.",
      author: "Sarah Johnson",
      title: "Business Manager",
      company: "Tech Solutions Inc"
    },
    {
      quote: "The data analysis work was exceptional. Complex datasets were broken down into clear, strategic recommendations. Highly professional and results-driven.",
      author: "Michael Chen",
      title: "Operations Director",
      company: "Global Enterprises"
    },
    {
      quote: "Outstanding SQL expertise and attention to detail. Usmanullah identified key performance metrics that we didn't even know existed. Best investment we made.",
      author: "Emma Rodriguez",
      title: "Data Strategist",
      company: "Analytics Pro"
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 dark:from-slate-950 dark:to-slate-900 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"></div>
      </div>
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="space-y-6 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-white">
            What Clients Say
          </h2>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Real feedback from real clients who&apos;ve transformed their business with data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 dark:bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-white/20 dark:border-slate-700 hover:bg-white/20 dark:hover:bg-slate-800/70 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                  </svg>
                ))}
              </div>
              <p className="text-white mb-6 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold text-white">
                  {testimonial.author}
                </p>
                <p className="text-sm text-slate-300">
                  {testimonial.title} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
