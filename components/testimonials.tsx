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
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-6 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white">
            What Clients Say
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real feedback from real clients who&apos;ve transformed their business with data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
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
