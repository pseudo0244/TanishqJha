// app/layout.tsx (if using App Router)
import './globals.css'
import { Great_Vibes } from 'next/font/google'

const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'], variable: '--font-script' })

export const metadata = {
  title: 'Tanishq Jha',
  description: 'Entrepreneur Assistant',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={greatVibes.variable}>
      <body>{children}</body>
    </html>
  )
}
