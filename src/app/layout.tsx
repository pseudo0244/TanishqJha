import './globals.css'
import {
  Great_Vibes,
  Poppins,
  Aboreto,
  Afacad,
  Playfair_Display,
  Alike,
  Alike_Angular,
} from 'next/font/google'

// Load all fonts with proper subsets and weights
const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const aboreto = Aboreto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-aboreto',
  display: 'swap',
})

const afacad = Afacad({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-afacad',
  display: 'swap',
})

const playfair = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const alike = Alike({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alike',
  display: 'swap',
})

const alikeAngular = Alike_Angular({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alike-angular',
  display: 'swap',
})

export const metadata = {
  title: 'Tanishq Jha',
  description: 'Entrepreneur Assistant',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`
        ${greatVibes.variable}
        ${poppins.variable}
        ${aboreto.variable}
        ${afacad.variable}
        ${playfair.variable}
        ${alike.variable}
        ${alikeAngular.variable}
      `}
    >
      <body>{children}</body>
    </html>
  )
}
