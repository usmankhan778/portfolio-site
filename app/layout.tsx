import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Usmanullah | Data Analyst Portfolio',
  description: 'Data Analyst specializing in SQL, Python, and Power BI. Transforming raw data into actionable insights for business decisions.',
  keywords: ['data analyst', 'portfolio', 'SQL', 'Python', 'Power BI', 'data analysis', 'Usmanullah'],
  authors: [{ name: 'Usmanullah' }],
  openGraph: {
    title: 'Usmanullah | Data Analyst Portfolio',
    description: 'Check out my data analysis projects and case studies.',
    type: 'website',
    url: 'https://example.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-950 text-slate-900 dark:text-white`}>
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
