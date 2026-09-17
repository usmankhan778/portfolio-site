'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSubmitted(true)
        reset()
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Failed to send message:', error)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-16">
          <div className="space-y-6 text-center">
            <h2 className="text-5xl sm:text-6xl font-bold text-white">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how I can help transform your data into strategic insights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-600 transition-all duration-300">
              <Mail className="text-blue-400 mb-4" size={32} />
              <h3 className="font-semibold text-white mb-2 text-lg">Email</h3>
              <a href="mailto:uk2487758@gmail.com" className="text-slate-300 hover:text-blue-400 transition">
                uk2487758@gmail.com
              </a>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-600 transition-all duration-300">
              <Phone className="text-blue-400 mb-4" size={32} />
              <h3 className="font-semibold text-white mb-2 text-lg">Phone</h3>
              <a href="tel:+1234567890" className="text-slate-300 hover:text-blue-400 transition">
                +1 (234) 567-890
              </a>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-600 transition-all duration-300">
              <MapPin className="text-blue-400 mb-4" size={32} />
              <h3 className="font-semibold text-white mb-2 text-lg">Location</h3>
              <p className="text-slate-300">
                Available Worldwide
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-800 rounded-2xl p-12 border border-slate-700 space-y-8 max-w-3xl mx-auto">
            {submitted && (
              <div className="bg-green-500/20 border border-green-500 text-green-200 rounded-lg p-4 flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <p>Thanks for reaching out! I&apos;ll get back to you within 24 hours.</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Name
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Subject
              </label>
              <input
                type="text"
                {...register('subject', { required: 'Subject is required' })}
                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                placeholder="What's this about?"
              />
              {errors.subject && <p className="text-red-400 text-sm mt-2">{errors.subject.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Message
              </label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition resize-none"
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
