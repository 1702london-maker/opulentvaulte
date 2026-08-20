import type { Metadata } from 'next'
import '../styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import Cursor from '@/components/Cursor'
import SmoothScroll from '@/components/SmoothScroll'
import ConciergeWidget from '@/components/ConciergeWidget'

export const metadata: Metadata = {
  title: { default: 'OPV Luxury', template: '%s · OPV Luxury' },
  description: 'Private concierge platform for stays, chauffeured cars, private dining, aviation, yacht charter and close protection. Manchester · London · Leeds.',
  openGraph: {
    siteName: 'OPV Luxury',
    locale: 'en_GB',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <SmoothScroll>
          <Nav />
          <ScrollProgress />
          <main>{children}</main>
          <ConciergeWidget />
          <Footer />
          <Cursor />
        </SmoothScroll>
      </body>
    </html>
  )
}
