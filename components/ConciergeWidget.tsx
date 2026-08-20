import Link from 'next/link'

export default function ConciergeWidget() {
  return (
    <div className="floating-contact">
      <a href="https://wa.me/447385694230" target="_blank" rel="noopener noreferrer" className="floating-contact-btn whatsapp" aria-label="Message OPV on WhatsApp">
        <span className="concierge-pulse" />
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-12.2 7.45L3 20l1.3-5.16A8.4 8.4 0 1 1 21 11.5Zm-11-3c.4 2 1.6 3.7 3.5 4.6l1.35-1.1 2.15.95-.35 1.85c-.2.55-.85.84-1.4.65-3.35-1.1-5.75-3.55-6.86-6.86-.18-.55.1-1.2.66-1.4L10 8.5Z" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span>WhatsApp</span>
      </a>
      <Link href="/contact" className="floating-contact-btn chat" aria-label="Open OPV Chat">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 0 1-4.26-.95L3 20l1.4-3.72A7.7 7.7 0 0 1 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span>OPV Chat</span>
      </Link>
    </div>
  )
}
