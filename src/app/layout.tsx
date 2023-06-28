import { ThemeProvider } from '@/components/theme-provider'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteFooter } from '@/components/ui/site-footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dev Ref',
  description: 'A Lists Of Useful Websites For Developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} md:mx-6 mx-2 select-none`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
