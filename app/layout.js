import Footer from '@/components/Footer'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

export const metadata = {
  title: 'Shyam Ghosh | Portfolio',
  description: 'Modern developer portfolio with cutting-edge animations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}