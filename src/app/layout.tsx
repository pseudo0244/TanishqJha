import './globals.css'
import { Great_Vibes, Poppins, Aboreto, Afacad, Playfair_Display } from 'next/font/google'

// Load all fonts with proper subsets and weights
const greatVibes = Great_Vibes({ 
  weight: '400', 
  subsets: ['latin'], 
  variable: '--font-script',
  display: 'swap', // Ensures text remains visible during font load
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'], // Include all weights you need
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

export const metadata = {
  title: 'Tanishq Jha',
  description: 'Entrepreneur Assistant',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${poppins.variable} ${aboreto.variable} ${afacad.variable} ${playfair.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
