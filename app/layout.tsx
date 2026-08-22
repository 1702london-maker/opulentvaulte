import type { Metadata } from 'next'
import '../styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import SmoothScroll from '@/components/SmoothScroll'
import ConciergeWidget from '@/components/ConciergeWidget'
import CookieConsent from '@/components/CookieConsent'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://opulentvault.co.uk'),
  title: { default: 'OPV - Private Concierge', template: '%s - OPV' },
  description: 'Private concierge platform for stays, chauffeured cars, private dining, aviation, yacht charter and close protection across Manchester, London and Leeds.',
  authors: [{ name: 'Opulent Vault Limited' }],
  creator: 'Opulent Vault Limited',
  publisher: 'Opulent Vault Limited',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'OPV Luxury',
    title: 'OPV - Private Concierge',
    description: 'Stays, cars, private dining, aviation, yachts and security arranged privately.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OPV - Private Concierge',
    description: 'Private luxury concierge across Manchester, London and Leeds.',
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
          <CookieConsent />
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
