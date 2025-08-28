import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'QA Play - Nilson da Silva Brites | Analista de Testes QA',
  description: 'QA Play é uma plataforma web responsiva para consolidar a autoridade de Nilson da Silva Brites como Analista de Testes QA, destacando seu currículo, experiência e habilidades técnicas com quizzes interativos para treinamento em QA.',
  keywords: 'QA, Quality Assurance, Testes, Automação, Selenium, Cypress, Playwright, Nilson Brites, Analista de Testes',
  authors: [{ name: 'Nilson da Silva Brites' }],
  creator: 'Nilson da Silva Brites',
  publisher: 'QA Play',
  robots: 'index, follow',
  openGraph: {
    title: 'QA Play - Nilson da Silva Brites | Analista de Testes QA',
    description: 'Plataforma web para treinamento em QA com quizzes interativos e conteúdo educativo sobre testes de software.',
    url: 'https://www.qaplay.com.br',
    siteName: 'QA Play',
    images: [
      {
        url: '/logo-qaplay.png',
        width: 1200,
        height: 630,
        alt: 'QA Play Logo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QA Play - Nilson da Silva Brites | Analista de Testes QA',
    description: 'Plataforma web para treinamento em QA com quizzes interativos e conteúdo educativo sobre testes de software.',
    images: ['/logo-qaplay.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#1A202C' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#1A202C" />
        <meta name="theme-color" content="#1A202C" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-qaplay-darkbg dark:bg-qaplay-darkbg text-white`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
