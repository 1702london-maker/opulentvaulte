'use client'

import { useEffect, useState } from 'react'

export default function ConciergeWidget() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const openFromFooter = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target?.closest('[data-open-shan]')) return
      event.preventDefault()
      setOpen(true)
    }

    document.addEventListener('click', openFromFooter)
    return () => document.removeEventListener('click', openFromFooter)
  }, [])

  return (
    <div className="floating-contact">
      <a href="https://wa.me/447385694230" target="_blank" rel="noopener noreferrer" className="floating-contact-btn whatsapp icon-only" aria-label="Message OPV on WhatsApp">
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path fill="currentColor" d="M16.03 3.2A12.72 12.72 0 0 0 5.1 22.44L3.2 29l6.72-1.76A12.73 12.73 0 1 0 16.03 3.2Zm7.47 18c-.31.88-1.79 1.68-2.5 1.79-.64.1-1.45.14-2.34-.15-.54-.17-1.24-.4-2.13-.78-3.75-1.62-6.2-5.39-6.39-5.64-.19-.25-1.52-2.02-1.52-3.85s.96-2.73 1.3-3.1c.34-.38.74-.47.99-.47h.71c.23.01.54-.08.85.65.31.75 1.08 2.59 1.17 2.78.09.19.16.41.03.66-.13.25-.19.41-.38.63-.19.22-.4.49-.57.66-.19.19-.39.4-.17.78.22.38.97 1.6 2.09 2.59 1.44 1.28 2.65 1.68 3.03 1.87.38.19.6.16.82-.09.22-.25.95-1.11 1.2-1.49.25-.38.51-.32.85-.19.35.13 2.22 1.05 2.6 1.24.38.19.63.28.73.44.09.16.09.91-.22 1.79Z" />
        </svg>
      </a>

      {open && (
        <div className="shan-chat-panel" role="dialog" aria-label="Chat with Shan">
          <div className="shan-chat-header">
            <div>
              <strong>Shan</strong>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close Shan chat">×</button>
          </div>
          <div className="shan-chat-body">
            <p>Hello, I am Shan. Tell me what you need arranged and I will help route the brief.</p>
          </div>
          <form className="shan-chat-form" onSubmit={(event) => event.preventDefault()}>
            <input type="text" placeholder="Type your request" aria-label="Type your request" />
            <button type="submit" aria-label="Send message">Send</button>
          </form>
        </div>
      )}
    </div>
  )
}
