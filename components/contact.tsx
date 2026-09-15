'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin } from 'lucide-react'

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
      // Send to API route
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
    <section id="contact" className="py-20 bg-white dark:bg-slate-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? Let's talk about how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex gap-4">
            <Mail className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
              <a href="mailto:uk2487758@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
                uk2487758@gmail.com
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Phone</h3>
              <a href="tel:+1234567890" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <MapPin className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Location</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Available Worldwide
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 space-y-6">
          {submitted && (
            <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg p-4">
              Thanks for reaching out! I'll get back to you soon.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Name
              </label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
              Subject
            </label>
            <input
              type="text"
              {...register('subject', { required: 'Subject is required' })}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              placeholder="What's this about?"
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
              placeholder="Tell me about your project..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
