import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Геката | ИТ-компания — Разработка ПО, Интеграции, Сопровождение',
  description: 'ООО «Геката» — разработка программного обеспечения, системная интеграция, внедрение и техническая поддержка ИТ-решений. Опытная команда разработчиков.',
  keywords: 'разработка ПО, интеграция систем, ИТ-компания, программное обеспечение, техническая поддержка, Геката',
  generator: 'v0.app',
  icons: {
    icon: '/images/gekata-logo.jpg',
    apple: '/images/gekata-logo.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2332',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
